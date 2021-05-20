import React from 'react'
import styles from "../../styles/Badge.module.css"

const Badge = ({status}) => {
    return (
      <>
        {status === "true" ? (
          <div className={styles.successbadge}>Success</div>
        ) : status === "null" ? (
          <div className={styles.upcomingbadge}>Upcoming</div>
        ) : (
          <div className={styles.failbadge}>Failed</div>
        )}
      </>
    );
}

export default Badge
