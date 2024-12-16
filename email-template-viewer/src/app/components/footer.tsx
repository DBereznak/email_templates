import styles from "./footer.module.css"

export default function Footer() {
    const today = new Date();

    return (
        <footer className={styles.footer}>
            <h2>&copy; {today.getFullYear()} Donny Bereznak</h2>
        </footer>
    );
}