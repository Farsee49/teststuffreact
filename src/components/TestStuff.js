import { object } from "prop-types";
import { useEffect } from "react";

import React from "react";

function TestStuff({users,getPuppies}) {
// const {results} = users
    console.log(users)


    return(
        
        <>
      <img src="./star2.jpg" className="App-logo" alt="logo" />
       <ul>
            {
    users.map((people) =>(<li key={people.id} onClick={()=>getOneThing(people.id)}>{people.name}</li>))}
        </ul>
      
        </>   
    )
}

export default TestStuff; 