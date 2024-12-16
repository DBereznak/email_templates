import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import TemplateViewer from "./components/templateViewer";
import EmailData from "./components/emailData";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <EmailData />
        <TemplateViewer />
      </main>
      <Footer />
    </div>
  );
}
