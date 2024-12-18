import styles from "./templateViewer.module.css";
import EmailTemplate from "./emailTemplate";
import emailMarkup from "./emailTemplates";
import { useContext } from "react";
import { EmailDataContext } from "../context/emailDataContext"; 

export default function TemplateViewer() {
    const name = useContext(EmailDataContext);
    const emailTemplates = emailMarkup(name.name);
    const templates = emailTemplates.map(template => <div key={template.id}> <EmailTemplate rawHTML={template.email} /> </div>)
    
    console.log(name.name);
    
    return (
        <div className={styles.viewer}>
            <h1>Template Viewer</h1>
            <div>{templates}</div>
        </div>
    )
};