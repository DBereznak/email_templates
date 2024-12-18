import { useContext } from "react";
import styles from "./emailData.module.css";
import { EmailDataContext } from "../context/emailDataContext"; 

export default function EmailData() {
    const {name, setName} = useContext(EmailDataContext);
    return (
        <div className={styles.emailForm}>
            <h1>Email Data</h1>
            <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
        </div>
    )
};