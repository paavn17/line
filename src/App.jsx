// import React, { useState } from "react"
// import {AvatarDefault} from './avatar'
// import { Avatar } from "@material-tailwind/react";


// // function App() {

// //   // const [list,setList]= useState([])
// //   // const [task,setTask]= useState("")

// //   // const handleChange = (e) =>{
// //   //   setTask(e.target.value)
// //   // }

// //   // const addTask = () => {
// //   //   if(task !== ""){
// //   //   const newtask = {
// //   //     id: list.length === 0 ? 1 : list[list.length-1].id+1 ,
// //   //     taskName: task ,
// //   //     completed: false,
// //   //   }
// //   //   setList([...list, newtask])
// //   //   setTask("")
// //   // }
// //   // }

// //   // const del= (id) =>{
// //   //   setList(list.filter((task) => task.id!==id))
// //   // }

// //   // const comp = (id) =>{
// //   //   setList(
// //   //     list.map((task)=>{
// //   //       if (task.id===id){
// //   //         return {...task,completed:true}
// //   //       }else {
// //   //         return task
// //   //       }
// //   // })
// //   //   )
// //   // }

// //   // return (
// //   //   <>
// //   //   <div className="w-full h-screen bg-slate-400">
// //   //   <div className="flex justify-center items-center">
// //   //   <input value={task} onChange={handleChange} className="border border-red-500 gap-2"/>
// //   //   <button onClick={addTask} className="px-3 mx-3 rounded-lg bg-black text-white">Click me!</button>
    
// //   //   </div>
// //   //   <div className="flex items-center justify-center my-30">
// //   //   <div className="">

// //   //     <div className="flex-col gap-2">
      
// //   //     {list.map((task) =>(
// //   //       <p key={task.id}>{task.taskName}<button onClick={()=> del(task.id)} className="gap-2 bg-white p-1 w-7 mx-5 my-4">x</button>
// //   //       <button onClick={()=>comp(id)}>tick</button></p>
// //   //     ))}
// //   //     </div>
// //   //     {console.log(list)}



// //   //   </div>


    
 

// //   //   </div>
    
// //   //   </div>
// //   //   <AvatarDefault/>
// //   //   </>
// //   // )
// // }

// function App(){
//   return(
//     <>
    
//     </>
//   )
// }

// export default App
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const svgRef = useRef(null);

  const initialPath =` M 100 60 Q 250 60 490 60`;
  const finalPath = `M 100 60 Q 250 60 490 60`;

  const handleMouseMove = (event) => {
    const bounds = svgRef.current.getBoundingClientRect();
    const x = event.clientX 
    const y = event.clientY 

    const path = `M 100 60 Q ${x} ${y} 490 60`;

    gsap.to(".line", {
      attr: { d: path },
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".line", {
      attr: { d: finalPath },
      duration: 0.3,
    });
  };

  return (
   
      <div id="line" className="w-full h-32 bg-red-500 ">
        <svg width="500" height="160"
          ref={svgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="line"
            d={initialPath}
            stroke="black"
            fill="transparent"
            strokeWidth="4"
          />
        </svg>
      </div>
 
  );
}

export default App; 