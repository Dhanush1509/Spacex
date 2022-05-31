import React, { useEffect, useState, useContext } from "react";
import styles from "../../styles/Table.module.css";

import Spinner from "./Spinner";
import missionContext from "../../context/mission/missionContext";
import TRow from "./TRow";
const Table = () => {
  const {
    missionLoading,
    missions,
    getMissions,
    setBackdrop,
    page,
    clearMissions,
    launch,
  } = useContext(missionContext);
  useEffect(() => {
    clearMissions();

    if (page) {
      getMissions(page, launch);
    } else {
      getMissions();
    }
  }, [page]);

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
              <TRow
              
                key={index}
                id={index}
                siteName={m.launch_site.site_name}
                mName={m.mission_name}
                ldate={m.launch_date_utc}
                orbit={m.rocket.second_stage.payloads[0].orbit}
                launchSuccess={m.launch_success}
                rocketName={m.rocket.rocket_name}
              />
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
