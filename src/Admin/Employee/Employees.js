import React, { useEffect, useState } from 'react'
import List from "../../Components/List/List"
import { FetchAllEmployees, DeleteEmployee } from '../../apis/Employee'
import ProgressBar from '../../Components/progressbar/ProgressBar'
import styles from "./Employees.module.scss"
import AddEmployeeForm from './AddEmployeeForm'
import add from "../../assets/add.svg"
import Delete from '../../Components/Operations/Delete'
import { useNavigate} from "react-router-dom";

const Employees = () => {
  const [employee_data, setData] = useState([])
  const [form, setForm] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    FetchAllEmployees().then(async (response) => {
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
    <div className={styles.employees}>
      <p>Employees Section</p>
      <div className={styles.functions}>
        <div className={styles.add}>
          <div onClick={() => { setForm(true) }} className={styles.circle}><img src={add} /></div>{form && <AddEmployeeForm setForm={setForm} />}
        </div>
        <div className={styles.delete}>
          <div className={styles.circle}><Delete DeleteFunction={DeleteEmployee} isNecessary={true} /></div>
        </div>
      </div>
      {employee_data && employee_data.length > 0 ? <List data={employee_data} /> : <ProgressBar />}
    </div>
  )
}
export default Employees;
