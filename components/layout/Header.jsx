import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";
import styles from "../../styles/Header.module.css"
const Header = () => {
    return (
      <div>
     
        <p className={styles.calendar}>Past 6 months</p>
      </div>
    );
}

export default Header
