import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSessionVariable } from "../Components/Session"
import { FetchManager } from '../apis/Manager'
import project from "../assets/course.svg"
import manager from "../assets/groupicon.svg"
import Menu from "../Components/Menu/Menu"
import styles from "../Admin/Admin.module.scss"
import Employees from '../Employee/Employees/Employees'
import Manager from '../Employee/Manager/Manager'
import Profile from '../Employee/Profile/Profile'
import ProjectAssigned from '../Manager/ProjectAssigned/ProjectAssigned'
export default function Managers() {
    const [managerInfo, setManager] = useState(null);
    const token = getSessionVariable("token");
    const role = getSessionVariable("role");
    const [section, changeSection] = useState("employees")
    const sidebar_data = [{ "title": "Project Assigned", "link": "project", "icon": project }, { "title": "Employees", "link": "employees", "icon": manager }, { "title": "Managers", "link": "managers", "icon": manager }]
    const sidebar_element_change = { "employees": <Employees />, "managers": <Manager />, "profile": <Profile employee={manager} />, "project": <ProjectAssigned employee={managerInfo} /> }
    const navigate = useNavigate();
    useEffect(() => {
        if (token && role === "manager") {
            navigate("/manager");
        }
        else {
            alert("Session expired")
            navigate("/")
        }
    }, [])
    useEffect(() => {
        FetchManager().then(async (response) => {
            if (response.status !== 200) {
                let alert_data = response.status;
                const data = await response.json();
                alert_data += " : "
                alert_data += data.message;
                alert(alert_data)
            }
            else {
                const data = await response.json();
                console.log(JSON.parse(data.result[0].project_assigned))
                setManager(data.result[0])
            }
        })
    }, [])
    return (
        <div className={styles.admin}>
            <div>
                <Menu items={sidebar_data} changeSection={changeSection} section={section} />
            </div>
            <div>
                {
                    sidebar_element_change[section]
                }
            </div>
        </div>
    )
}
