import { Paper, Stack } from "@mui/material";

const Message = ({ sender }: { sender?: string }) => {
  return (
    <Stack direction={sender === "me" ? "row-reverse" : "row"}>
      <Paper  sx={{py:1,px:2,bgcolor:sender==="me"?"hsl(114.00000000000001, 93.75000000000003%, 81.72549019607843%)":"#fff",color:sender==="me"?"#000000":"black"}}>Hello Alex</Paper>
    </Stack>
  );
};

export default Message;
