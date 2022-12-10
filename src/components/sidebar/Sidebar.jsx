import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default function Sidebar() {
  return  (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          
        </ul>
      </div>
    </div>
  )
}