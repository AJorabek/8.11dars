import { Paper, Stack } from "@mui/material";

const Message = ({ right, text }: { right?: boolean; text: string }) => {
  return (
    <Stack direction={right ? "row-reverse" : "row"}>
      <Paper
        sx={{
          py: 1,
          px: 2,
          bgcolor: right
            ? "hsl(114.00000000000001, 93.75000000000003%, 81.72549019607843%)"
            : "#fff",
          color: right ? "#000000" : "black",
        }}
      >
        {text}
      </Paper>
    </Stack>
  );
};

export default Message;
