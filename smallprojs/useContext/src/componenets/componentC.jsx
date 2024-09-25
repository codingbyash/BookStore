// import React from "react";  
// import ComponentD from "./componentD";  

// function ComponentC(props) {  
//   return (  
//     <div className='box'>  
//       <h1>Component C</h1>  
//       <ComponentD user={props.user} />   
//     </div>  
//   );  
// }  

// export default ComponentC; 

import React,{ useContext } from "react";
import { UserContext } from "./componentA";
import ComponentD from "./componentD";  

function ComponentC(props) {  

  const user = useContext(UserContext);
  return (  
    <div className='box'>  
      <h1>Component C</h1>  
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />   
    </div>  
  );  
}  

export default ComponentC; 