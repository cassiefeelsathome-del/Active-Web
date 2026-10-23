import WinBox from "react-winbox";
import "./LoginModal.css";


export default function Windows(){

    return <>
        <WinBox 
            title="Projects"
            width={Math.min(document.body.clientWidth, 700)}
            height={Math.min(document.body.clientHeight, 500)}/>
    </>
}