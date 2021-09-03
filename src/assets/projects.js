//create renering of app on stock photos
import { frontTechs, backTechs } from "./about.js";
import grocerylistscover from "../assets/images/grocerylistscover.png";
import starvincover from "../assets/images/starvincover.png";
import jmaudiovideocover from "../assets/images/jmaudiovideocover.png";
export const projects = [
  {
    id: "1",
    name: "grocery-lists",
    src: grocerylistscover,
    technologies: [
      frontTechs[5],
      frontTechs[6],
      frontTechs[2],
      backTechs[1],
      backTechs[2],
    ],
    modal: {
      description: "Grocery List Application",
      fullDescription:
        "Grocery-Lists is a list and item storing app that helps you never forget to buy, or do the things they need to. Access your lists anywhere you need them with ease.",
      srcs: [],
      url: "https://www.grocery-lists.com/",
      gitUrl: "https://github.com/noelloera/groceries",
    },
  },
  {
    id: "2",
    name: "starvin'",
    src: starvincover,
    technologies: [frontTechs[1], frontTechs[5], frontTechs[2]],
    modal: {
      description: "Local Restaurant Search",
      fullDescription:
        "Starvin is a platform where customers can discover local restaurants and provides results based on different search criteria.",
      src: [],
      url: "https://www.starvin.website/",
      gitUrl: "https://github.com/noelloera/starvin",
    },
  },
  {
    id: "3",
    name: "J&M Audio Video",
    src: jmaudiovideocover,
    technologies: [frontTechs[5], frontTechs[6], backTechs[0]],
    modal: {
      description: "Home Theater Installation Business",
      fullDescription:
        "El Paso, TX based business which offers professional Home Theater installation.",
      src: [],
      url: "https://www.jmaudiovideo.com/",
      gitUrl: "https://github.com/noelloera/business_template_1",
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
    id: "8",
    name: "Keeper of Quotes",
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
