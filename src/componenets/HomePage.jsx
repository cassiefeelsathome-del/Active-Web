import "./HomePage.css";
import { iconsList } from "../data/iconsList";
import Taskbar from "./Taskbar";

export default function HomePage() {
  const icons = iconsList.map((obj) => {
    return (
      <figure class={obj.name + " icon"} key={obj.name}>
        <img
          className={`${obj.name}-icon icon-img`}
          src={obj.imageSrc}
          alt={obj.imageAlt}
        />
        <figcaption>{obj.name}</figcaption>
      </figure>
    );
  });

  return (
    <>
      <div className="icon-container">{icons}</div>
      <Taskbar />
    </>
  );
}
