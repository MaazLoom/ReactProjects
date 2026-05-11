import React from 'react'
import { Bookmark } from 'lucide-react'

const card = (props) => {
  return (
    <div class="card">
    <div class="card-top">
      <div class="logo">
        <img src={props.logo} alt="" />
      </div>
      <button class="save-btn">
        <Bookmark /> Save 
        
      </button>
    </div>
 
    <div class="meta">
      <span class="variant">{props.name}</span>
      <span class="time">{props.date}</span>
    </div>
 
    <h1 class="job-title">{props.position}</h1>
 
    <div class="tags">
      <span class="tag">{props.tag1}</span>
      <span class="tag">{props.tag2}</span>
    </div>
 
    <div class="divider"></div>
 
    <div class="card-bottom">
      <div>
        <div class="salary-amount">${props.pay}</div>
        <div class="salary-period">Per every hour</div>
      </div>
      <button class="apply-btn">Apply now</button>
    </div>
  </div>
  )
}

export default card