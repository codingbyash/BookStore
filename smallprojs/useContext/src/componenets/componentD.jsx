// import React from 'react';  

// function ComponentD({ user }) {  
//   return (  
//     <div className='box'>  
//       <h1>Component D</h1>  
//       <h2>{`Bye ${user}`}</h2>  
//     </div>  
//   );  
// }  

// export default ComponentD; 


import React,{useContext} from 'react';  
import { UserContext } from './componentA';

function ComponentD() {  
const user = useContext(UserContext);

  return (  
    <div className='box'>  
      <h1>Component D</h1>  
      <h2>{`Bye ${user}`}</h2>  
    </div>  
  );  
}  

export default ComponentD; 

