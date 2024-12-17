"use client"

import { useState } from "react";
import EmailHTML from "./EmailHTML";
import RenderedEmail from "./renderedEmail";
import { RawEmailProp } from "./appTypes";


export default function EmailTemplate({rawHTML}: RawEmailProp) {
    const [mode, setMode] = useState(false);
    return (
        <div>
            {mode ? <RenderedEmail rawHTML={rawHTML} /> : <EmailHTML rawHTML={rawHTML} /> }
            <button onClick={() => setMode(!mode)}>toggle view</button>
        </div>
    )
}