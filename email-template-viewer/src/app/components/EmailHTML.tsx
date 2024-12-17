import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { RawEmailProp } from "./appTypes";

export default function EmailHTML({rawHTML}: RawEmailProp) {
    return (
        <div>
            <SyntaxHighlighter language="HTML" style={darcula}>
            {rawHTML}
            </SyntaxHighlighter>
        </div>
    )
}