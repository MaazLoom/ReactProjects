import React, { useEffect, useState } from 'react'
import { ChevronRight  } from 'lucide-react';
import { ChevronLeft  } from 'lucide-react';
import { ArrowUp  } from 'lucide-react';

const App = () => {

    const [url, setUrl] = useState("https://picsum.photos/v2/list?page=1&limit=50")
    const [data, setData] = useState([])
    const [index, setIndex] = useState(1)

    const next=()=>{
            const newIdx=index+1
            setIndex(newIdx)
            setUrl(`https://picsum.photos/v2/list?page=${newIdx}&limit=50`)
            console.log(url)
        }

    const prev=()=>{
        if(index>1){
            const newIdx=index-1
            setIndex(newIdx)
            setUrl(`https://picsum.photos/v2/list?page=${newIdx}&limit=50`)
            console.log(url)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    

    let printData=("No User Data")
    if(data.length>0){
        printData=data.map((elem,idx)=>{
            return <div key={idx} className='break-inside-avoid mb-3 overflow-hidden rounded-lg bg-gray-300'>
                <a href={elem.url} target='_blank'><img className='w-full block' loading="lazy" src={elem.download_url} alt="" /></a>
            </div>
        })
    }

    useEffect(()=>{urlData(),[url]})

    const urlData= async ()=>{
        const response= await fetch(url)
        const jsonData= await response.json();
        setData(jsonData)
    }
    
    return (
      <div className='p-7 bg-black'>
        <h1 className='text-white font-bold text-3xl pb-4'>My Gallery</h1>
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3'>
            {printData}
        </div>
        <div className='flex justify-center items-center gap-10 pt-10' >
            <button onClick={prev} className='flex pr-3 py-1 rounded bg-white font-bold'><ChevronLeft />Prev</button>
            <h1 className='text-white font-bold'>Page {index}</h1>
            <button onClick={next} className='flex pl-3 py-1 rounded bg-white font-bold'>Next<ChevronRight /></button>
        </div>
        <button onClick={scrollToTop} className='fixed bottom-10 right-10 bg-white rounded-full p-2'>
         <ArrowUp />
        </button>
      </div>
  )
}

export default App