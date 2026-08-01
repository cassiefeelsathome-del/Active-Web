import trashImg from '/src/assets/recycle_bin_full-2.webp'
import projectImg from "/src/assets/template_nework_conn-4.webp"
import aboutMeImg from "/src/assets/computer_explorer-4.webp"


export const iconsList = [
    {
        name: "trash",
        imageSrc: trashImg,
        imageAlt: "a trash can that is not empty",
        fullscreenLink: "none"
    },
    {
        name: "projects",
        imageSrc: projectImg,
        imageAlt: "Projects presented by a computer icon",
        fullscreenLink: '/projects'
    },
    {
        name: "About_Me",
        imageSrc: aboutMeImg,
        imageAlt: "file with a question mark on top of it",
        fullscreenLink: '/aboutme'
    },
] 
    