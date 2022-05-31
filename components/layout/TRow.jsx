import React, { useContext } from "react";
import missionContext from "../../context/mission/missionContext";
import styles from "../../styles/Table.module.css";
import moment from "moment";
import Badge from "./Badge";
import Image from "next/image";
import Card from "./Card";
const TRow = ({
  siteName,
  mName,
  ldate,
  orbit,
  launchSuccess,
  rocketName,
  id,
}) => {
  const { setBackdrop, page } = useContext(missionContext);
  const handleClick = (i) => {
    setBackdrop(i);
  };
  return (
    <>
      <tr className={styles.normalrow} onClick={() => handleClick(id)}>
      
        <td className={styles.number}>
          {id + 12 * (page - 1) + 1 < 10
            ? `0${id + 12 * (page - 1) + 1}`
            : id + 12 * (page - 1) + 1}
        </td>
        <td className={styles.launched}>
          {moment(ldate).format("D MMMM YYYY, HH:mm")}
        </td>
        <td className={styles.location}>{siteName}</td>
        <td className={styles.mission}>{mName}</td>
        <td className={styles.orbit}>{orbit}</td>
        <td className={styles.launchstatus} style={{ textAlign: "center" }}>
          <Badge status={String(launchSuccess)} />
        </td>

        <td className={styles.rocket}>{rocketName}</td>
      </tr>
    </>
  );
};

export default TRow;
