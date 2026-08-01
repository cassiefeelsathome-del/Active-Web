import "./HomePage.css";
import { iconsList } from "../data/iconsList";
import Taskbar from "./Taskbar";
import { Link } from "react-router-dom";

export default function HomePage() {
  const icons = iconsList.map((obj) => {
    const figure = (
      <figure className={obj.name + " icon"}>
        <img
          className={`${obj.name}-icon icon-img`}
          src={obj.imageSrc}
          alt={obj.imageAlt}
        />
        <figcaption>{obj.name}</figcaption>
      </figure>
    );

    if (obj.name === "Blog") {
      return (
        <Link to={obj.fullscreenLink} key={obj.name} className="icon-link">
          {figure}
        </Link>
      );
    }

    return <div key={obj.name}>{figure}</div>;
  });

  return (
    <>
      <div className="icon-container">{icons}</div>
      <Taskbar />
    </>
  );
}
