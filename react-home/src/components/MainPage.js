import React from 'react'
import NavBar from './NavBar'
//import NavPage from "./NavPage";

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="md:w-2/5 md:mx-auto">
          {/* nav section */}
          <div>
              <NavBar/>
          </div>

          {/* navPage section */}
          <div>
              {/* <NavPage/> */}
          </div>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage