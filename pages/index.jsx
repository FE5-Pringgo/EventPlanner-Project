import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";

export default function Home() {
  const router = useRouter();

  const clickDetail = () => {
    router.push("/Detail");
  };

  return (
    <div className={styles.homeBody}>
      <div className={styles.homeBodyWrap}>
        <h1 className={styles.homeTitle}>Music Festival</h1>
        <div className={styles.homeFlex}>
          <div className={styles.homeImage}>
            <a href="/Detail">
              <Image src="/mantra.jpeg" width={270} height={180}></Image>
            </a>
          </div>
          <div className={styles.homeBorder}>
            <div className={styles.homeWrap}>
              <p className={styles.homeDesc}>Album Mantra Siap Menggelora</p>
              <p className={styles.homeDescSmall}>14 Agustus 2022 </p>
              <p className={styles.homeDescSmall}>12:00</p>
              <p className={styles.homeDescSmall}>
                Taman Gong Perdamaian Dunia, Bali
              </p>
              <p className={styles.homeDesc}> Hosted by Galang</p>
              <div className={styles.homeBtnWrap}>
                <Button className={styles.homeBtn} onClick={clickDetail}>
                  Detail
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeBar}></div>
        <div className={styles.homeFlex}>
          <div className={styles.homeImage}>
            <Image src="/mantra.jpeg" width={270} height={180}></Image>
          </div>
          <div className={styles.homeBorder}>
            <div className={styles.homeWrap}>
              <p className={styles.homeDesc}>Album Mantra Siap Menggelora</p>
              <p className={styles.homeDescSmall}>14 Agustus 2022 </p>
              <p className={styles.homeDescSmall}>12:00</p>
              <p className={styles.homeDescSmall}>
                Taman Gong Perdamaian Dunia, Bali
              </p>
              <p className={styles.homeDesc}> Hosted by Galang</p>
              <div className={styles.homeBtnWrap}>
                <Button className={styles.homeBtn}>Detail</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeBar}></div>
        <div className={styles.homeFlex}>
          <div className={styles.homeImage}>
            <Image src="/mantra.jpeg" width={270} height={180}></Image>
          </div>
          <div className={styles.homeBorder}>
            <div className={styles.homeWrap}>
              <p className={styles.homeDesc}>Album Mantra Siap Menggelora</p>
              <p className={styles.homeDescSmall}>14 Agustus 2022 </p>
              <p className={styles.homeDescSmall}>12:00</p>
              <p className={styles.homeDescSmall}>
                Taman Gong Perdamaian Dunia, Bali
              </p>
              <p className={styles.homeDesc}> Hosted by Galang</p>
              <div className={styles.homeBtnWrap}>
                <Button className={styles.homeBtn}>Detail</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeBar}></div>
      </div>
    </div>
  );
}
