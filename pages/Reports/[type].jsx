import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import CourtCase from "../../components/reports/courtcase";
export default function Type() {
const router =useRouter();
const [input,setInput]= useState();
useEffect(()=>{     if(!router.isReady) return;
                       
                    setInput(router.query.type)  
                      

                      
  },[router.isReady])
 
  useEffect(()=>{console.log("it works"+input)},[input])


 return <CourtCase reporttype ={ input} />

}