"use client";

import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
// import styles from "../styles/contact.module.css";
import styles from "../styles/contact.module.css";

const Contact2: NextPage = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(inputData);
    const response = await axios.post(`http://localhost:3000/api/sendEmail`, inputData);
    console.log(response);
    // alert("Contact successfully sent!!");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Email App</title>
        <meta name="description" content="Using sendgrid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact</h1>
        <form className={styles.formStyles} onSubmit={handleSubmit}>
          <label className={styles.labelStyles} htmlFor="name">
            Full Name:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          />
          <br />

          <label className={styles.labelStyles} htmlFor="email">
            Email:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
          />
          <br />
          <br />

          <label className={styles.labelStyles} htmlFor="message">
            Message:
          </label>
          <br />
          <textarea
            className={styles.inputBox}
            id="message"
            name="message"
            rows={5}
            onChange={handleChange}
          />
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default Contact2;
