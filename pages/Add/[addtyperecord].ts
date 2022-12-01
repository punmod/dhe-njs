import { useEffect, useRef } from "react";

export default function AddTypeRecord() {
 const dataFetchedRef = useRef(false);
      console.log("Add");
     useEffect(()=>{
        
         if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
        localStorage.getItem("records");
     console.log(localStorage.getItem("records"));
     },[]
     )
}