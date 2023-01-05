import './rightbar.css'
import CakeIcon from '@mui/icons-material/Cake';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({user}) {
  const HomeRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
            <span className="rightbarInfoValue">London</span> 
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Ireland</span> 
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Gender: </span>
            <span className="rightbarInfoValue">Male</span> 
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowers">
          <div className="rightbarFollower">
            <img src={`${PF}profilePic.jpg`} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>Dennis</span>
          </div>
          <div className="rightbarFollower">
            <img src={`${PF}profilePic.jpg`} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>Dennis</span>
          </div>
          <div className="rightbarFollower">
            <img src={`${PF}profilePic.jpg`} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>Dennis</span>
          </div>
          <div className="rightbarFollower">
            <img src={`${PF}profilePic.jpg`} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>Dennis</span>
          </div>
          <div className="rightbarFollower">
            <img src={`${PF}profilePic.jpg`} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>Dennis</span>
          </div>
          <div className="rightbarFollower">
            <img src={`${PF}profilePic.jpg`} alt="" className="rightbarFollowerImage" />
            <span className='rightbarFollowerName'>Dennis</span>
          </div>
        </div>
        
      </>
    )
  }
  return  (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        
        { profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}