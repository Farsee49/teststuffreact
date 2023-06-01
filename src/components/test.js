async function getPuppies() {
  
    try{
 const response = await fetch("http://localhost:4444/api/puppies");
 const results = await response.json();
     
    console.log(results)
    } catch{
        console.log('otters eating pickles');
    }
 }

 getPuppies();
async function getUsers() {
  
    try{
 const response = await fetch("http://localhost:4444/api/users");
 const results = await response.json();
     
    console.log(results)
    } catch{
        console.log('otters eating carrots');
    }
 }

 getUsers();