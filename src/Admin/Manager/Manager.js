import React, { useEffect, useState } from 'react'
import List from "./List"
import { FetchAllManagers,DeleteManager} from '../../apis/Manager'
import ProgressBar from '../../Components/progressbar/ProgressBar'
import styles from "./Manager.module.scss"
import add from "../../assets/add.svg"
import Delete from '../../Components/Operations/Delete'
import AddManagerForm from './AddManagerForm'
import { useNavigate} from "react-router-dom";

const Manager = () => {
  const [manager_data, setData] = useState([])
  const [form, setForm] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    FetchAllManagers().then(async (response) => {
      if (!response.ok) {
        alert("Unauthorized Access/ Session Expired")
        sessionStorage.clear()
        navigate("/")
      } else {
        response.json().then((temp) => {
          setData(temp.result);
        });
      }
    })
  }, [])

  return (
    <div className={styles.managers}>
     <div className={styles.head}>
     Managers Section
     </div>
      <div className={styles.functions}>
        <div className={styles.add}>
          <div onClick={() => { setForm(true) }} className={styles.circle}><img src={add} /></div>{form && <AddManagerForm setForm={setForm} />}
        </div>
        <div className={styles.delete}>
          <div className={styles.circle}><Delete DeleteFunction={DeleteManager} isNecessary={true} /></div>
        </div>
      </div>
      {manager_data && manager_data.length > 0 ? <List data={manager_data} /> : <ProgressBar />}
    </div>
  )
}
export default Manager;
