import React from 'react'
import Delete from '../../Components/Operations/Delete'
import Unassign from '../../Components/Operations/Unassign'
import Close from '../../Components/Operations/Close';
import Assign from '../../Components/Operations/Assign';
import Edit from '../../Components/Operations/Edit';
import { DeleteEmployee, UnassignEmployee,AssignEmployee ,EditEmployee} from '../../apis/Employee';
import styles from "./Employees.module.scss"

export default function Operations({id,assigned,setOperation,user}) {
  function unassign_item(assigned,UnassignFunction,id){
    if (!assigned) {
        alert("Employee is not assigned to any project")
        return;
    }
    UnassignFunction(id).then(async (response) => {
        if (response.status != 200) {
            let alert_data = response.status;
            const data = await response.json();
            alert_data += " : "
            alert_data += data.message;
            alert(alert_data)
        }
        else {
            const data = await response.json();
            console.log(data)
            alert(data.message)
        }
    })
}
  return (
    <div className={styles.operations}>
        <Delete id={id} DeleteFunction={DeleteEmployee}/>
        <Unassign id={id} assigned={assigned} UnassignFunction={UnassignEmployee} unassign_item={unassign_item}/>
        <Assign AssignFunction={AssignEmployee} id={id}/>
        <Edit EditFunction={EditEmployee} user={user}/>
        <Close setOperation={setOperation}/>
    </div>
  )
}
