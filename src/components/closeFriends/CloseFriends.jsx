import './closeFriends.css'
import '../../dummyData'

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt=''/>
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}