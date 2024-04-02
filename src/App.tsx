import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./pages/Chats";
import LoginPage from "./pages/LoginPage";
import { CssBaseline } from "@mui/material";
import Protected from "./pages/Protected";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Chats />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // {
  //   path: "/chat-room/:id",
  //   element: <ChatRoom />,
  // },
]);

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
