import React, { useState } from "react";
import styles from "../../Components/List/List.module.scss";
const List = ({ data }) => {
  const [openRow, setOpenRow] = useState(null);

  const toggleOperations = (index) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <>
      {data && (
        <div className={styles.details}>
          <div className={styles.list}>
            <div className={styles.head}>
              <span className={styles.id}>User id</span>
              <span className={styles.name}>Name</span>
              <span className={styles.email}>Email</span>
              <span className={styles.phone}>Phone</span>
              <span className={styles.exp}>Experience(Years)</span>
              <span className={styles.skills}>Skills</span>
              <span className={styles.status}>Project Assigned</span>
            </div>
            <div className={styles.table}>
              {data.map((item, index) => (
                
                <div
                  className={styles.row}
                  key={index}
                  onClick={() => toggleOperations(index)}
                >
                  <span className={styles.id}>
                    {item.employee_id || "Not Available"}
                  </span>
                  <span className={styles.name}>
                    {item.employee_name || "Not Available"}
                  </span>
                  <span className={styles.email}>
                    {item.employee_email || "Not Available"}
                  </span>
                  <span className={styles.phone}>
                    {item.employee_phone || "Not Available"}
                  </span>
                  <span className={styles.exp}>
                    {item.employee_expereince || "Not Available"}
                  </span>
                  <span className={styles.skills}>
                    {item.employee_skills || "Not Available"}
                  </span>
                  <span className={styles.status}>
                    {item.project_assigned || "Not Assigned"}
                  </span>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
