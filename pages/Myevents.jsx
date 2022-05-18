import React from "react";
import styles from "../styles/Myevents.module.css";
import { Button } from "react-bootstrap";
import Image from "next/image";

function Myevents() {
  return (
    <div className={styles.myeventsBody}>
      <div className={styles.myeventsBodyWrap}>
        <h1 className={styles.myeventsTitle}>My Events</h1>
        <div className={styles.myeventsFlex}>
          <div className={styles.myeventsImage}>
            <Image src="/mantra.jpeg" width={270} height={180}></Image>
          </div>
          <div className={styles.myeventsBorder}>
            <div className={styles.myeventsWrap}>
              <p className={styles.myeventsDesc}>
                Album Mantra Siap Menggelora
              </p>
              <p className={styles.myeventsDescSmall}>14 Agustus 2022 </p>
              <p className={styles.myeventsDescSmall}>12:00</p>
              <p className={styles.myeventsDescSmall}>
                Taman Gong Perdamaian Dunia, Bali
              </p>
              <p className={styles.myeventsDesc}> Hosted by Galang</p>
              <div className={styles.myeventsBtnWrap}>
                <Button className={styles.myeventsBtn}>Detail</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.myeventsFlex}>
          <div className={styles.myeventsImage}>
            <Image src="/mantra.jpeg" width={270} height={180}></Image>
          </div>
          <div className={styles.myeventsBorder}>
            <div className={styles.myeventsWrap}>
              <p className={styles.myeventsDesc}>
                Album Mantra Siap Menggelora
              </p>
              <p className={styles.myeventsDescSmall}>14 Agustus 2022 </p>
              <p className={styles.myeventsDescSmall}>12:00</p>
              <p className={styles.myeventsDescSmall}>
                Taman Gong Perdamaian Dunia, Bali
              </p>
              <p className={styles.myeventsDesc}> Hosted by Galang</p>
              <div className={styles.myeventsBtnWrap}>
                <Button className={styles.myeventsBtn}>Detail</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.myeventsFlex}>
          <div className={styles.myeventsImage}>
            <Image src="/mantra.jpeg" width={270} height={180}></Image>
          </div>
          <div className={styles.myeventsBorder}>
            <div className={styles.myeventsWrap}>
              <p className={styles.myeventsDesc}>
                Album Mantra Siap Menggelora
              </p>
              <p className={styles.myeventsDescSmall}>14 Agustus 2022 </p>
              <p className={styles.myeventsDescSmall}>12:00</p>
              <p className={styles.myeventsDescSmall}>
                Taman Gong Perdamaian Dunia, Bali
              </p>
              <p className={styles.myeventsDesc}> Hosted by Galang</p>
              <div className={styles.myeventsBtnWrap}>
                <Button className={styles.myeventsBtn}>Detail</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myevents;
