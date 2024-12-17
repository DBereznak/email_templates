import { RawEmailProp } from "./appTypes";

export default function RenderedEmail({rawHTML}: RawEmailProp) {
    return (
        <div dangerouslySetInnerHTML={{__html: rawHTML}} />
    )
}