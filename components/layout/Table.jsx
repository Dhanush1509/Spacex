import React, { useEffect, useState ,useContext} from "react";
import styles from "../../styles/Table.module.css";
import moment from "moment";
import Badge from "./Badge"
import Image from "next/image"
import Spinner from "./Spinner"
import missionContext from "../../context/mission/missionContext"
const Table = () => {
  
  const {missionLoading,missions,getMissions,setBackdrop,page,clearMissions,launch} =useContext(missionContext);
 useEffect(() => {
 
clearMissions();


    if (page) {
      getMissions(page,launch);
    } else {
      getMissions();
    }
  }
  
  ,[page])
  const handleClick=(i)=>{

  setBackdrop(i)
  }
  return (
    <div className={styles.paper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.maintablerow}>
            <td className={styles.number}>No:</td>
            <td className={styles.launched}>Launched(UTC)</td>
            <td className={styles.location}>Location</td>
            <td className={styles.mission}>Mission</td>
            <td className={styles.orbit}>Orbit</td>
            <td className={styles.launchstatus} style={{ textAlign: "center" }}>
              Launch Status
            </td>
            <td className={styles.rocket}>Rocket</td>
          </tr>
        </thead>
        <tbody>
          {missions && missions.length > 0 ? (
            missions.map((m, index) => (
              <tr
                className={styles.normalrow}
                key={index}
                onClick={() => handleClick(index)}
              >
                <td className={styles.number}>
                  {index + 12 * (page - 1) + 1 < 10
                    ? `0${index + 12 * (page - 1) + 1}`
                    : index + 12 * (page - 1) + 1}
                </td>
                <td className={styles.launched}>
                  {moment(m.launch_date_utc).format("D MMMM YYYY, HH:mm")}
                </td>
                <td className={styles.location}>{m.launch_site.site_name}</td>
                <td className={styles.mission}>{m.mission_name}</td>
                <td className={styles.orbit}>
                  {m.rocket.second_stage.payloads[0].orbit}
                </td>
                <td
                  className={styles.launchstatus}
                  style={{ textAlign: "center" }}
                >
                  <Badge status={String(m.launch_success)} />
                </td>

                <td className={styles.rocket}>{m.rocket.rocket_name}</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
      {missionLoading ? <Spinner /> : <></>}
    </div>
  );
};

export default Table;


 