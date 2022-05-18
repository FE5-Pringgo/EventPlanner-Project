import React from "react";
import styles from "../styles/Detail.module.css";
import Image from "next/image";
import { Button, Form, Row, Col } from "react-bootstrap";

function Detail() {
  return (
    <div>
      <div className={styles.detailBody}>
        <div className={styles.detailBodyWrap}>
          <h1 className={styles.detailTitle}>Album Mantra Siap Menggelora</h1>
          <div className={styles.detailFlex}>
            <div className={styles.detailImage}>
              <Image src="/mantra.jpeg" width={270} height={180}></Image>
            </div>
            <div className={styles.detailBorder}>
              <div className={styles.detailWrap}>
                <p className={styles.detailDesc}>
                  Album Mantra Siap Menggelora
                </p>
                <p className={styles.detailDescSmall}>14 Agustus 2022 </p>
                <p className={styles.detailDescSmall}>12:00</p>
                <p className={styles.detailDescSmall}>
                  Taman Gong Perdamaian Dunia, Bali
                </p>
                <hr></hr>
                <p className={styles.detailHost}>Hosted By</p>
                <p className={styles.detailDesc}> Galang</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.detailDescBody}>
        <div className={styles.detailDescWrap}>
          <h2 className={styles.detailDescTitle}>Description</h2>
          <p className={styles.detailDescContent}>
            Dalam album ini, Kunto Aji mengangkat isu kesehatan mental, tetapi
            fokus mengenai overthinking. Materi dari album ini terinspirasi dari
            kehidupan pribadinya, termasuk kisah cinta dengan pasangannya Dewi
            Syariati, dan juga mengenai kesehatan mental pribadinya. Ia pun
            sempat berkonsultasi dengan psikolog sekitar tiga sampai empat kali.
            Pada sebuah lagu, Kunto Aji memasukkan frekuensi suara yang menurut
            penelitian dapat membuat pendengarnya merasa lebih baik. "Saya
            mencoba memasukkan frekuensi 396 Hz yang menurut penelitian bisa
            mengeluarkan racun atau pikiran negatif. Sehingga membuat pendengar
            frekuensi tersebut merasa lebih baik, lebih semangat, lebih
            optimis," katanya.
          </p>
        </div>
      </div>

      <div className={styles.attendeesBody}>
        <div className={styles.attendeesWrap}>
          <h2>Attendees</h2>
          <div className={styles.attendeesImageWrap}>
            <div className={styles.attendeesBorder}>
              <div className={styles.attendeesFlex}>
                <Image
                  className={styles.attendeesImage}
                  src="/person.png"
                  width={50}
                  height={50}
                ></Image>
                <p className={styles.attendeesPerson}>Person A</p>
              </div>
            </div>
            <div className={styles.attendeesBorder}>
              <div className={styles.attendeesFlex}>
                <Image
                  className={styles.attendeesImage}
                  src="/person.png"
                  width={50}
                  height={50}
                ></Image>
                <p className={styles.attendeesPerson}>Person B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detailBtnWrap}>
        <Button className={styles.detailBtn}>Join</Button>
      </div>

      <div className={styles.commentBody}>
        <div className={styles.commentWrap}>
          <h2>Comments</h2>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                <Image src="/person.png" width={50} height={50}></Image>
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="textarea" placeholder="Comments" />
              </Col>
            </Form.Group>
            <div className={styles.commentBtnWrap}>
              <Button className={styles.commentBtn}>Comment</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Detail;
