import React from "react";
import Image from 'next/image'
import styles from '../../styles/Appbar.module.css'


export default function ButtonAppBar() {
 

  return (
    <>
      <div className={styles.appbar}>
        <Image
          src="/logo.svg"
          alt="me"
          width="225"
          height="32"
          className={styles.image}
        />
      </div>
    </>
  );
}