import './rightbar.css'
import CakeIcon from '@mui/icons-material/Cake';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const getFriends = async () => {
      try{
        const friendList = await axios.get("/users/friends/"+ user._id)
        setFriends(friendList.data)
      } catch(err){
        console.log(err)
      }
    }
    getFriends()
  }, [user._id])

  const HomeRightbar = () => {

    return (
      <>
         <div className="birthdayContainer">
          <CakeIcon className='birthdayImage' />
          <span className="birthdayText">
            <b>Dennis</b> and <b>3 other friends</b> have their birthday today.
          </span>
        </div>
        <img src={`${PF}profilePic.jpg`} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u =>  (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <h4 className="rightbarTitle">User info title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city}</span> 
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from}</span> 
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">
              {user.relationship === 1 
              ? "Single" 
              : user.relationship === 2 
              ? "Married" 
              : "Complicated"}
              </span> 
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowers">
          {friends.map((friend) => {
            return (
            <Link to={"/profile/"+friend.username} style={{textDecoration: "none"}}>
            <div className="rightbarFollower">
            <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"profile-empty.webp"} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>{friend.username}</span>
          </div>
            </Link>
          )})}
        </div>
        
      </>
    )
  }
  return  (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        
        { user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}