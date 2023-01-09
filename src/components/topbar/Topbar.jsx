import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { experimentalStyled } from "@mui/material";

export default function Topbar() {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">DenniSocial</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input placeholder="Search" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcon">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatBubbleIcon />
              <span className="topbarIconBadge">1</span>
            </div><div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src={
            user.profilePicture 
            ? PF+user.profilePicture 
            : PF+"profile-empty.webp"
            } alt="" className="topbarImage"
          />
        </div>
    </div>
  )
}