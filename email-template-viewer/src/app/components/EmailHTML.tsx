import { RawEmailProp } from "./appTypes";

export default function EmailHTML({rawHTML}: RawEmailProp) {
    return (
        <div>
            {rawHTML}
        </div>
    )
}