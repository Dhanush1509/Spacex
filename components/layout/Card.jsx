import React, { useContext,useEffect,useState } from "react";
import styles from "../../styles/Card.module.css";
import { GrFormClose } from "react-icons/gr";
import { ImWikipedia } from "react-icons/im";

import { FiYoutube } from "react-icons/fi";
import missionContext from "../../context/mission/missionContext";
import Badge from "../layout/Badge";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Card = () => {
  const { setBackdrop, index, missions, backdrop } = useContext(missionContext);
  const [mission,setMission]=useState(null)
  useEffect(()=>{
    if (missions && missions.length > 0) setMission(missions[index]);
  },[missions,index])
  return mission ? (
    <div>
      <Modal open={backdrop} onClose={setBackdrop} center className={styles.card}>
          <section className={styles.display}>
            {mission.links.mission_patch ? (
              <Image
                src={mission.links.mission_patch}
                alt="mission"
                width="72"
                height="72"
              />
            ) : (
              <div className={styles.divison}></div>
            )}
            <section className={styles.content}>
              <div>
                {" "}
                <p className={styles.title}>{mission.mission_name}</p>
                <Badge status={String(mission.launch_success)} />
              </div>
              <div>
                {" "}
                <p className={styles.subtitle}>{mission.rocket.rocket_name}</p>
              </div>
              <div className={styles.media}>
                {mission.links.wikipedia && (
                  <Link href={mission.links.wikipedia} className={styles.url}>
                    <ImWikipedia className={styles.mediaicon} />
                  </Link>
                )}
                {mission.links.youtube_id && (
                  <Link
                    href={`https://youtube.com/${mission.links.youtube_id}`}
                    className={styles.url}
                  >
                    <FiYoutube className={styles.mediaicon} />
                  </Link>
                )}
              </div>
            </section>
          </section>
          <section className={styles.details}>
            {mission.details}{" "}
            {mission.links.wikipedia && (
              <Link href={mission.links.wikipedia} className={styles.url}>
                Wikipedia
              </Link>
            )}
          </section>
          <section className={styles.info}>
            <table>
              <tr className={styles.row}>
                <td>Flight Number</td>
                <td>{mission.flight_number}</td>
              </tr>
              <tr className={styles.row}>
                <td>Mission Name</td>
                <td>{mission.mission_name}</td>
              </tr>
              <tr className={styles.row}>
                <td>Rocket Type</td>
                <td>{mission.rocket.rocket_type}</td>
              </tr>
              <tr className={styles.row}>
                <td>Rocket Name</td>
                <td>{mission.rocket.rocket_name}</td>
              </tr>
              <tr className={styles.row}>
                <td>Manufacturer</td>
                <td>{mission.rocket.second_stage.payloads[0].manufacturer}</td>
              </tr>
              <tr className={styles.row}>
                <td>Nationality</td>
                <td>{mission.rocket.second_stage.payloads[0].nationality}</td>
              </tr>
              <tr className={styles.row}>
                <td>Launch Date</td>
                <td>{mission.launch_date_utc}</td>
              </tr>
              <tr className={styles.row}>
                <td>Payload Type</td>
                <td>{mission.rocket.second_stage.payloads[0].payload_type}</td>
              </tr>
              <tr className={styles.row}>
                <td>Orbit</td>
                <td>{mission.rocket.second_stage.payloads[0].orbit}</td>
              </tr>
              <tr className={styles.row}>
                <td>Launch Site</td>
                <td>{mission.launch_site.site_name}</td>
              </tr>
            </table>
          </section>
  
      </Modal>
    </div>
  ) : (
    <></>
  );
};

export default Card;
