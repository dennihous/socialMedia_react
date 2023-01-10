import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from "axios"
import { useState, useEffect, useContext } from 'react'
import TimeAgo from "react-timeago";
import {Link} from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext)

  useEffect (() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    try{
      axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})
    } catch(err){}
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img className="postProfileImage" src={user.profilePicture ? PF + user.profilePicture : PF + "profile-empty.webp"} alt="" />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate"><TimeAgo date={post.createdAt} /></span>
          </div>
          <div className="postTopRight">
          <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img className="postImage" src={PF+post.image} alt="" />
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