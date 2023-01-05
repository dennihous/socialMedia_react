import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import {useState, useEffect} from "react";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  return (
    <>
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={`${PF}cover.jpeg`} alt="" className="profileCoverImage" />
              <img src={`${PF}profilePic.jpg`} alt="" className="profileUserImage" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dennis</h4>
              <span className="profileInfoDescription ">Hello this is my profile</span>

            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="dennis"/>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}