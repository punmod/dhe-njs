import { useEffect, useRef } from "react";

export default function TypeID() {
 const dataFetchedRef = useRef(false);
    
     useEffect(()=>{
        console.log("Clear Localstorage");
        localStorage.clear();
     
     },[]
     )
}