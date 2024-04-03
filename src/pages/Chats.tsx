import { onValue, ref, set } from "firebase/database";
import { auth, realDB } from "../firebase";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  List,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ChatItem from "../components/ChatItem";
import { ArrowBackSharp, Send } from "@mui/icons-material";
import Message from "../components/Message";
import { v4 as uuid } from "uuid";

const Chats = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [activeUser, setActiveUser] = useState<string>("");
  const [messages, setMessages] = useState<any>([]);
  const [text, setText] = useState<string>("");
  useEffect(() => {
    const usersRef = ref(realDB, "users/");
    onValue(usersRef, (snap) => {
      const snapp = snap.val()!;
      setUsers(Object.keys(snapp));
    });
  }, []);
  const handleChat = (user: any) => {
    if (auth.currentUser?.email) {
      const actualUser = auth.currentUser?.email?.slice(0, -10);
      let chat =
        actualUser > activeUser
          ? actualUser + activeUser
          : activeUser + actualUser;
      const chatRef = ref(realDB, `chats/${chat}`);
      onValue(chatRef, (snap) => {
        const data = snap.val();
        setMessages(Object.values(data));
      });
    }
  };

  const sendMessage = () => {
    if (auth.currentUser?.email) {
      const actualUser = auth.currentUser?.email?.slice(0, -10);
      let chat =
        actualUser > activeUser
          ? actualUser + activeUser
          : activeUser + actualUser;
      const chatRef = ref(realDB, `chats/${chat}/${uuid()}`);
      set(chatRef, {
        from: actualUser,
        text,
      });
      setText("");
    }
  };

  return (
    <>
      <Grid container>
        <Grid item sm={4} key={7}>
          <List>
            {users.map((user: any) => {
              return (
                <>
                  <ChatItem
                    onClick={() => handleChat(user)}
                    key={user}
                    user={user}
                  />
                </>
              );
            })}
          </List>
        </Grid>
        <Grid item sm={8}>
          <Paper
            sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
          >
            <Paper sx={{ p: 2 }}>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <IconButton sx={{ display: { sm: "none" } }} color="primary">
                  <ArrowBackSharp />
                </IconButton>
                <Typography>{activeUser}</Typography>
              </Box>
            </Paper>

            <Stack
              bgcolor={"#61c642"}
              spacing={2}
              sx={{ p: 2, flex: 1, justifyContent: "flex-end" }}
            >
              {messages.map((message:any,i:any))=>
              <Message key={i} text={message.text} right={auth.currentUser?.email?.slice(0, -10)==messages.from} />                
              }
            </Stack>
            <Box display={"flex"} m={2}>
              <TextField
                fullWidth
                label="Write a message..."
                variant="filled"
                size="small"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <IconButton>
                <Send color="primary" onClick={sendMessage} />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Chats;
