import React, { useState } from 'react'
import { NotebookPen } from 'lucide-react' 
import Note from './components/note'
import note from './components/note'

const App = () => {

  const [Title, setTitle] = useState("")
  const [Text, setText] = useState("")
  const [Task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    setTitle("")
    setText("")

    const newTask=[...Task]
    newTask.push({Title,Text})
    setTask(newTask)
    console.log(newTask);


    console.log(Title)
    console.log(Text)
  }

  const deleteNote = (idx) => {
    const copyTask = [...Task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
}

  return (
    <div className='p-10 min-h-screen bg-[#E3E8F7]'>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className='flex flex-col gap-2 p-8 border-none shadow-xl bg-white rounded-xl'>
        <h1 className='text-[#4D5E82] font-bold text-2xl'>Add a Note</h1>
        <input onChange={(e)=>{setTitle(e.target.value)}}
        value={Title}
         type="text"
          placeholder='Title'
           className='text-[#73809D] font-medium text-2xl py-1 focus:outline-none' />

        <textarea value={Text} onChange={(e)=>{setText(e.target.value)}} placeholder='Take a note...' className=' h-30 leading-5 text-[#7c818b]  focus:outline-none'></textarea>
        <button className='bg-[#203562] p-2 rounded text-white font-bold'>Add</button>
      </form>

      <div className='p-8'>
        <h1 className='flex gap-3 text-2xl font-bold text-[#203562]'><NotebookPen size={35} /> My Notes</h1>
        <div className='flex gap-10 flex-wrap'>
          {Task.map(function(elem, idx){
            return <Note key={idx} title={elem.Title} text={elem.Text} onDelete={()=>deleteNote(idx)}/>
          })}
        </div>
      </div>

    </div>
  )
}

export default App