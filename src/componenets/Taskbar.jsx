import "./Taskbar.css";
import { useState } from "react";
import speakerOn from "/src/assets/loudspeaker_rays-1.webp";

export default function Taskbar() {
  const [time, setTime] = useState();
  setInterval(() => {
    const currentTime = new Date().toLocaleTimeString("en-us", {
      timeStyle: "short",
    });
    setTime(currentTime);
  }, 1000);

  return (
    <footer>
      <button />
      <span>
        <img src={speakerOn} />
        {time}
      </span>
    </footer>
  );
}
