import React from 'react'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <section>
      <NavBar/>
       <div className=" w-full h-screen centered text-6xl">
         <p>Home Page</p>
       </div>
     </section>
  )
}

export default Home