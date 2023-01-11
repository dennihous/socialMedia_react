import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import StyleIcon from '@mui/icons-material/Style';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const {user} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const description = useRef()
  const [file, setFile] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      description: description.current.value
    }
    if(file){
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName)
      newPost.image = fileName;
      try{
        await axios.post("/upload", data)
      } catch(err){
        console.log(err)
      }
    }
    try{
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch(err){}
  }

  return (
    <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"profile-empty.webp"} alt="" />
            <input placeholder={"What's on your mind "+user.username+"?"} className="shareInput" ref={description}/> 
          </div>
          <hr className="shareHr" />
          <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input style={{display: "none"}} type="file" id="file" accept=".png,.jpeg,.webp,.jpg" onChange={(e) => setFile(e.target.files[0])}/>
              </label>
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
            <button className="shareButton" type="submit">Share</button>
          </form>
        </div>
    </div>
  )
}
