import {useState, useEffect, useRef} from "react";

export default function CourtCase(props){
    

   const dataFetchedRef = useRef(false);
   console.log("Inside court case component"+props.reporttype)
  useEffect(()=> { 
  
   if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
   fetch("https://dhe.misrusachd.in/api/courtcases/select.php").then(response=>response.json()).then(data=>
  {  
     console.log(data);
     localStorage.setItem("records",
                     JSON.stringify(data))
    
  })}
   ,[])
 
  // only for this chapter (do not modify)
  return <h2>"Hello World {props.reporttype}"</h2>;
}