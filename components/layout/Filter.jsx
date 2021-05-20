import React,{useState,useContext} from "react";
import styles from "../../styles/Filter.module.css";
import { AiOutlineCalendar, AiOutlineDown,AiOutlineUp } from "react-icons/ai";
import { RiFilterLine } from "react-icons/ri";
import missionContext from "../../context/mission/missionContext"
import { GrFormClose } from "react-icons/gr";
const Filter = () => {
    const [launchfilter, setLaunchfilter] = useState("All Launches");
    const [open,setOpen] = useState(false)
     const [openCalendar, setOpenCalendar] = useState(false);
    const {getMissions,clearMissions,setLaunch}=useContext(missionContext)
  return (
    <div>
      <section className={styles.datefilter}>
        <div>
          <AiOutlineCalendar />
          &nbsp;
        </div>
        <div> Past Six Months &nbsp;</div>
        <div>
          {openCalendar ? (
            <AiOutlineUp
              className={styles.downicon}
              onClick={() => {
                setOpenCalendar(false);
              }}
            />
          ) : (
            <AiOutlineDown
              className={styles.downicon}
              onClick={() => {
                setOpenCalendar(true);
              }}
            />
          )}
        </div>

        {openCalendar && (
          <section className={styles.launchdatedown}>
          <GrFormClose onClick={()=>{setOpenCalendar(false)}} className={styles.icon} />
          This is incomplete
          </section>
        )}
      </section>

      <section className={styles.launchfilter}>
        <div>
          <RiFilterLine />
          &nbsp;
        </div>
        <div>{launchfilter} &nbsp;</div>
        <div>
          {open ? (
            <AiOutlineUp
              className={styles.downicon}
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <AiOutlineDown
              className={styles.downicon}
              onClick={() => {
                setOpen(true);
              }}
            />
          )}
        </div>
      </section>
      {openCalendar && <section className={styles.backdrop}> </section>}
      {open && (
        <section className={styles.launchfilterdown}>
          <div
            className={styles.dropdownmenu}
            value="All Launches"
            onClick={() => {
              setLaunchfilter("All Launches");
              setOpen(false);
              clearMissions();
              getMissions(1, 1);
              setLaunch(1);
            }}
          >
            All Launches
          </div>
          <div
            className={styles.dropdownmenu}
            value="Upcoming Launches"
            onClick={() => {
              setLaunchfilter("Upcoming Launches");
              setOpen(false);
              clearMissions();
              getMissions(1, 2);
              setLaunch(2);
            }}
          >
            Upcoming Launches
          </div>
          <div
            className={styles.dropdownmenu}
            value="Successful Launches"
            onClick={() => {
              setLaunchfilter("Successful Launches");
              setOpen(false);
              clearMissions();
              getMissions(1, 3);
              setLaunch(3);
            }}
          >
            Successful Launches
          </div>
          <div
            className={styles.dropdownmenu}
            value="Failed Launches"
            onClick={() => {
              setLaunchfilter("Failed Launches");
              setOpen(false);
              clearMissions();
              getMissions(1, 4);
              setLaunch(4);
            }}
          >
            Failed Launches
          </div>
        </section>
      )}
    </div>
  );
};

export default Filter;
{/*
  <div
    className={styles.dropdownmenu}
    value="All Launches"
    onClick={() => {
      setLaunchfilter("All Launches");
      setOpenCalendar(false);
      clearMissions();
      getMissions(1, 1);
      setLaunch(1);
    }}
  >
    All Launches
  </div>
  <div
    className={styles.dropdownmenu}
    value="Upcoming Launches"
    onClick={() => {
      setLaunchfilter("Upcoming Launches");
      setOpenCalendar(false);
      clearMissions();
      getMissions(1, 2);
      setLaunch(2);
    }}
  >
    Upcoming Launches
  </div>
  <div
    className={styles.dropdownmenu}
    value="Successful Launches"
    onClick={() => {
      setLaunchfilter("Successful Launches");
      setOpenCalendar(false);
      clearMissions();
      getMissions(1, 3);
      setLaunch(3);
    }}
  >
    Successful Launches
  </div>
  <div
    className={styles.dropdownmenu}
    value="Failed Launches"
    onClick={() => {
      setLaunchfilter("Failed Launches");
      setOpenCalendar(false);
      clearMissions();
      getMissions(1, 4);
      setLaunch(4);
    }}
  >
    Failed Launches
  </div>
 */}