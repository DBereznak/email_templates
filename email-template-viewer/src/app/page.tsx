"use client"
import { useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import TemplateViewer from "./components/templateViewer";
import EmailData from "./components/emailData";
import styles from "./page.module.css";
import { EmailDataContext } from "./context/emailDataContext";

export default function Home() {
  const [name, setName] = useState("Angela")
  const [title, setTitle] = useState("Title Goes Here")
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <EmailDataContext.Provider value={{name, title, setName, setTitle}}>
        <EmailData />
        <TemplateViewer />
        </EmailDataContext.Provider>
      </main>
      <Footer />
    </div>
  );
}
