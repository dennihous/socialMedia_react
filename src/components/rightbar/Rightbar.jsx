import './rightbar.css'
import CakeIcon from '@mui/icons-material/Cake';

export default function Rightbar() {
  return  (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeIcon className='birthdayImage' />
          <span className="birthdayText">
            <b>Dennis</b> and <b>3 other friends</b> have their birthday today.
          </span>
        </div>
        <img src="assets/profilePic.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/profilePic.jpg" alt="" className="rightbarProfileImage" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}