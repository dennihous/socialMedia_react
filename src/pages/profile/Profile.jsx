import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
  return (
    <>
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/cover.jpeg" alt="" className="profileCoverImage" />
              <img src="assets/profilePic.jpg" alt="" className="profileUserImage" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dennis</h4>
              <span className="profileInfoDescription ">Hello this is my profile</span>

            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}