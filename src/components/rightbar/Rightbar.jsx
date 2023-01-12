import './rightbar.css'
import CakeIcon from '@mui/icons-material/Cake';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from "react-router";


export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([])
  const {user:currentUser} = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id))
  const params = useParams();

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?.id))
  }, [currentUser, user.id])

  useEffect(() => {
    const getFriends = async () => {
      try{
        const friendList = await axios.get(`/users/${params.id}/friends/`)
        setFriends(friendList.data)
      } catch(err){
        console.log(err)
      }
    }
    getFriends()
  }, [params.id])

  const handleClick = async () => {
    try{
      if(followed){
        await axios.put("/users/"+user._id+"/unfollow", {userId: currentUser._id});
        dispatch({type: "UNFOLLOW", payload: user._id});
      } else {
        await axios.put("/users/"+user._id+"/follow", {userId: currentUser._id});
        dispatch({type: "FOLLOW", payload: user._id});
      }
    } catch(err){
      console.log(err)
    }
    setFollowed(!followed)
  }

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
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton">
          {followed ? "Unfollow" : "Follow"}
          {followed ? <RemoveIcon /> : <AddIcon />}
        </button>
      )}
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
            <Link to={"/profile/"+friend.username} style={{textDecoration: "none"}}>
            <div className="rightbarFollower">
            <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"profile-empty.webp"} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>{friend.username}</span>
          </div>
            </Link>
          })}
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