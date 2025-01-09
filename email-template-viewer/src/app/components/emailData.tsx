import { useContext } from "react";
import styles from "./emailData.module.css";
import { EmailDataContext, emailDataType } from "../context/emailDataContext"; 

export default function EmailData() {
    const {name, title, body, setName, setTitle, setBody} = useContext(EmailDataContext);
    return (
        <div className={styles.emailForm}>
            <h1>Email Data</h1>
            <h2>Name</h2>
            <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <h2>Title</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <h2>Body</h2>
      <textarea  
        value={body} 
        onChange={(e) => setBody(e.target.value)} 
      />
        </div>
    )
};