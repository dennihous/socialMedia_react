import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from "axios"
import { useState, useEffect } from 'react'

export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  })

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src={user.profilePicture || PF + "profilePic.jpg"} alt="" />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
          <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img className="postImage" src={PF + post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon htmlColor="skyblue" className="likeIcon" onClick={likeHandler}/>
            <FavoriteIcon htmlColor="red" className="likeIcon" onClick={likeHandler}/>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}