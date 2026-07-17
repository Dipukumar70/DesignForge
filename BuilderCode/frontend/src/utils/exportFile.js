import { saveAs } from "file-saver";


export function downloadFile(
content,
filename,
type
){

const blob = new Blob(
[
content
],
{
type:type
}
);


saveAs(
blob,
filename
);


}