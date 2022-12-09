import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import StyleIcon from '@mui/icons-material/Style';
import RoomIcon from '@mui/icons-material/Room';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src="/assets/profilePic.jpg" alt="" />
            <input placeholder="What's on your mind?" className="shareInput" /> 
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMediaIcon className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <StyleIcon className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <RoomIcon className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <PermMediaIcon className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
