import React from "react";

import Navbar from "../../components/Navbar";
import BodyWrapper from "../../components/Bodywrapper";


import "./style.scss";

function Habits() {
  return (
    <div>
       <Navbar />
     
      <div className="">
          <div className="column is-10 has-text-centered">
          {/* <div className="container is-fluid"> */}
            <div className="level">
              <div className="level-item">
               
              </div>
            </div>
            <BodyWrapper title1="Your" title2="Habits">
             
              <HabitsComponent />
          
            </BodyWrapper>
          </div>
        </div>
      </div>
    // </div>
  );
}


export default Habits;