import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src="/assets/profilePic.jpg" alt="" />
            <span className="postUsername">Dennis</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
          <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  )
}