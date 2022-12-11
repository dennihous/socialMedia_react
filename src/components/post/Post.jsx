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
        <div className="postCenter">
          <span className="postText">First post</span>
          <img className="postImage" src="assets/profilePic.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/" alt="" className="likeIcon" />
            <img src="assets/" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}