import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Dennis Social</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon />
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
              <span className="topbarIconBardge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatBubbleIcon />
              <span className="topbarIconBardge">1</span>
            </div><div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBardge">1</span>
            </div>
          </div>
        </div>
    </div>
  )
}