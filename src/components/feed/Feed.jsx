import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { useEffect, useState } from "react";
import axios from "axios"
// import {Posts} from '../../dummyData.js'

export default function Feed() {
  const [post, usePost] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      
    }
    const res = await axios.get("posts/timeline/637cd7659f3f12617f873ec7")
    console.log(res)
  }, [])

  return  (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {/* { Posts.map(p => (
          <Post key={p.id} post={p}/>
        ))} */}
      </div>
    </div>
  )
}