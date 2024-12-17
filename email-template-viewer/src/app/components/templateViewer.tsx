import styles from "./templateViewer.module.css";
import EmailTemplate from "./emailTemplate";
import { emailTemplates } from "./emailTemplates";

export default function TemplateViewer() {

    const templates = emailTemplates.map(template => <div key={template.id}> <EmailTemplate rawHTML={template.email} /> </div>)
    return (
        <div className={styles.viewer}>
            <h1>Template Viewer</h1>
            <div>{templates}</div>
        </div>
    )
};