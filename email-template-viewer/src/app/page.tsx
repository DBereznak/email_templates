import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>

      </main>
      <Footer />
    </div>
  );
}
