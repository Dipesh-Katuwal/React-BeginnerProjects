import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="page">
      <SideBar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}></SideBar>
      <div className="content">
        <Header></Header>
        {
          SelectedTab=="Home"?<PostList></PostList>:<CreatePost></CreatePost>
        }

        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
