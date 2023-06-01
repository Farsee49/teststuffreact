import React,{ useEffect, useState } from 'react';
import TestStuff from './TestStuff';


function App () {
const [users, setUsers] = useState([]);
 async function getStuff() {

        try{
            
     const response = await fetch("http://localhost:4444/api/puppies")
    console.log(33)
     const results = await response.json();
        setUsers(results)
        console.log(results)
        } catch(error){
            console.error(error);
        }
     }

     useEffect(() => {
       getStuff();
        console.log('useeffect')
     },[])


    return(<>
        <h1>Felix === GoodBOy</h1>
        <TestStuff users={users}/>
    </>)
};


export default App;