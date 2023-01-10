import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import StyleIcon from '@mui/icons-material/Style';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Share() {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"profile-empty.webp"} alt="" />
            <input placeholder="What's on your mind?" className="shareInput" /> 
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <StyleIcon htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <RoomIcon htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotionsIcon htmlColor="gold" className="shareIcon" />
                <span className="shareOptionText">Emojis</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
    </div>
  )
}
