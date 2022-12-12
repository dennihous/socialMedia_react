import './rightbar.css'
import CakeIcon from '@mui/icons-material/Cake';

export default function Rightbar() {
  return  (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeIcon className='birthdayImage' />
          <span className="birthdayText">
            <b>Dennis</b> and <b>3 other friends</b> have their birthday today.
          </span>
        </div>
      </div>
    </div>
  )
}