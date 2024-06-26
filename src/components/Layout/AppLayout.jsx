import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material"
import ChatList from "../specifics/ChatList";
import { sampleChats } from "../constants/SampleData";
import { useParams } from "react-router-dom";
import Profile from "../specifics/Profile";
import { grayColor } from "../constants/Color";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

    const params = useParams();
    const chatId = params.id;

    const handleDeleteChat= (e, _id, groupChat) => {
      e.preventDefault()
      console.log("Delete Chat", _id, groupChat)
    }

    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"} >
          <Grid item
            sm={4} md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
            bgcolor={"#ebeeef"}
          >
            <ChatList chats={sampleChats} 
            chatId={chatId}
            handleDeleteChat={handleDeleteChat}/>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
            <WrappedComponent {...props} />
          </Grid>
          <Grid item md={4} lg={3} sx={{
            display: { xs: "none", md: "block" },
          }} height={"100%"} bgcolor={"#131212"}>
            <Profile />
          </Grid>

        </Grid>

        <div>Footer</div>
      </div>

    );
  };
};

export default AppLayout