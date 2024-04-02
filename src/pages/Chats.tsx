import { onValue, ref,  } from "firebase/database";
import { realDB } from "../firebase";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const Chats = () => {
  const [users,setUsers]=useState<any[]>()

  useEffect(()=>{
    const usersRef=ref(realDB,"users/")
    onValue(usersRef,(snap)=>{
      setUsers(Object.keys(snap.val()));
    })
  },[])

  };
  return (
      <>
        <Grid container>
        <Grid item sm={4}>
          <List>
            {
              users.map((user)=>{
                <ChatItem key={user} user={user} />
              })
            }
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
                <Typography>Alex</Typography>
              </Box>
            </Paper>

            <Stack
              bgcolor={"#61c642"}
              spacing={2}
              sx={{ p: 2, flex: 1, justifyContent: "flex-end" }}
            >
              <Message sender={"me"} />
              <Message />
              <Message sender={"me"} />
              <Message sender={"me"} />
              <Message />
            </Stack>
            <Box display={"flex"} m={2}>
              <TextField
                fullWidth
                label="Write a message..."
                variant="filled"
                size="small"
              />
              <IconButton>
                <Send color="primary" />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      </>
  );
};

export default Chats;
