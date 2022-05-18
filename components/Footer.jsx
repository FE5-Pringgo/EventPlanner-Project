import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.bgFooter}>
      <div className={styles.backFooter}>
        <span className={styles.spanFooter}>About</span>
        <span className={styles.spanFooter}>Contact Us</span>
        <span className={styles.spanFooter}>Help</span>
      </div>
    </div>
  );
}

export default Footer;
