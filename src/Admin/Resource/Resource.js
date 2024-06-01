import React, { useEffect, useState } from 'react'
import {FetchAllResources} from "../../apis/Resources"
import List from './List'
import styles from "./Resource.module.scss"
export default function Resource() {
    const [data,setData]=useState([])
    useEffect(()=>{
        FetchAllResources().then(async(response)=>{
            if(!response.ok){

            }
            else{
                const temp = await response.json();
                setData(temp.result);
            }
        })
    },[])
  return (
    <div className={styles.resources}>
        <div className={styles.head}>Resources Requests</div>
        <List data={data}/>
    </div>
  )
}
