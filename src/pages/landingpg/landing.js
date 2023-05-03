import React from "react";
import './landing.css';
import login from "../loginPage/login";






class landing extends React.Component{
   
    render(){
 

        return (
            <body className="bodyLanding">
           <div class="pageView">
              <div className="img"  ></div>
              <h1 className="text">Keep Track Of Daily Tasks In Life</h1>
              <a className="btn" type="button" href="/login">Get Started</a>
           </div> 
           </body>
        );
    }
    
   
};


export default landing;
