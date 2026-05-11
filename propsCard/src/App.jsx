import React from 'react'
import Card from './components/card'
import card from './components/card'

const App = () => {
  const jobList = [
  {
    "brandLogo": "https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg",
    "brandName": "Google",
    "datePosted": "2 days ago",
    "position": "Frontend Dev",
    "tag1": "Full Time",
    "tag2": "Remote",
    "payPerHour": 45
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    "brandName": "Amazon",
    "datePosted": "5 days ago",
    "position": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "On Site",
    "payPerHour": 30
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
    "brandName": "Netflix",
    "datePosted": "1 day ago",
    "position": "React Developer",
    "tag1": "Full Time",
    "tag2": "Remote",
    "payPerHour": 50
  },
  {
    "brandLogo": "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
    "brandName": "Meta",
    "datePosted": "3 days ago",
    "position": "Web Designer",
    "tag1": "Part Time",
    "tag2": "Remote",
    "payPerHour": 28
  },]

  return (
    <div className='parent'>
        {jobList.map(function(elem){
          return <Card logo={elem.brandLogo} name={elem.brandName} date={elem.datePosted} position={elem.position} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHour}/>
        })}
    </div>
  )
}

export default App