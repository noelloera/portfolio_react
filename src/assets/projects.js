//create renering of app on stock photos
import { frontTechs, backTechs } from "./about.js";
import grocerylistscover from "../assets/images/grocerylistscover.png";
import starvincover from "../assets/images/starvincover.png";
export const projects = [
  {
    id: "1",
    name: "Grocery Lists",
    src: grocerylistscover,
    technologies: [frontTechs[5], frontTechs[2], backTechs[1], backTechs[2]],
    modal: {
      description: "Grocery List Application",
      fullDescription:
        "Groceries is a free item and item list storing app that allows users to never forget to buy the things they need with access to their lists and items from anywhere.",
      srcs: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "2",
    name: "Starvin",
    src: starvincover,
    technologies: [frontTechs[5], frontTechs[2]],
    modal: {
      description: "Local Restaurant Search",
      fullDescription:
        "Starvin is a platform where customers can discover local restaurants and provides results based on different search criteria.",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "3",
    name: "Quote Keeps",
    src: "quote keeps picture",
    technologies: [
      frontTechs[0],
      frontTechs[1],
      frontTechs[2],
      backTechs[1],
      backTechs[2],
    ],
    modal: {
      description: "Favorite Quote Storing Application",
      fullDescription:
        "Quote Keeps is a free app that allows users to login and add or edit their favorite stored quotes",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "4",
    name: "Login",
    src: "Login picture",
    technologies: [frontTechs[5], frontTechs[6]],
    modal: {
      description: "Login React Template",
      fullDescription:
        "Reusable front-end React and Material UI Login Template. Can be easily modified to change design",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "5",
    name: "Authenticate",
    src: "Authenticate picture",
    technologies: [backTechs[0], backTechs[1], backTechs[2]],
    modal: {
      description: "JWT Authentication Server",
      fullDescription:
        "Reusable back-end Express.js and MongoDB server which uses JWT (JSON Web Token) encoding for user credentials.",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "6",
    name: "PlaylistMakr",
    src: "starvin picture",
    technologies: [frontTechs[0], frontTechs[1], frontTechs[2]],
    modal: {
      description: "Spotify Playlist Management Application",
      fullDescription:
        "Application which allows you to add, delete, and edit Spotify playlists",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "7",
    name: "TV Pro Install",
    src: "",
    technologies: [frontTechs[5], frontTechs[6], backTechs[0]],
    modal: {
      description: "Home Theater Installation Business",
      fullDescription:
        "El Paso, TX based business which offers professional Home Theater installation.",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "8",
    name: "Wanderlist",
    src: "",
    technologies: [frontTechs[0], frontTechs[1], frontTechs[2]],
    modal: {
      description: "Travel Planning Application",
      fullDescription:
        "Displays useful travel information when inputing what travel destination is specified.",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
  {
    id: "9",
    name: "Grand Prize Door",
    src: "",
    technologies: [frontTechs[0], frontTechs[1], frontTechs[2]],
    modal: {
      description: "Guessing Game",
      fullDescription:
        "Behind one of these doors is a trick door which ends the game. Guess which 2 of the 3 doors are real doors to win.",
      src: [],
      url: "",
      gitUrl: "",
    },
  },
];
