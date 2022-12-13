import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Post({post}) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src="/assets/profilePic.jpg" alt="" />
            <span className="postUsername">Dennis</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
          <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img className="postImage" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon htmlColor="skyblue" className="likeIcon"/>
            <FavoriteIcon htmlColor="red" className="likeIcon" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}