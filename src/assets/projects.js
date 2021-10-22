//create renering of app on stock photos
import { frontTechs, backTechs } from "./about.js";
import grocerylist1 from "../assets/images/projectImages/grocerylists1.png";
import grocerylist2 from "../assets/images/projectImages/grocerylists2.png";
import starvin1 from "../assets/images/projectImages/starvin1.png";
import starvin2 from "../assets/images/projectImages/starvin2.png";
import jmaudiovideo1 from "../assets/images/projectImages/jmaudiovideo1.png";
import jmaudiovideo2 from "../assets/images/projectImages/jmaudiovideo2.png";
import authenticate1 from "../assets/images/projectImages/authenticate1.png";
import exploreorchore1 from "../assets/images/projectImages/exploreorchore1.png";
import exploreorchore2 from "../assets/images/projectImages/exploreorchore2.png";
import keeperofquotes1 from "../assets/images/projectImages/keeperofquotes1.png";
export const projects = [
  {
    id: "1",
    name: "Grocery Lists",
    src: grocerylist1,
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
        "Grocery-Lists is a list and item storing app that helps you never forget to buy, or do the things you need. Access your lists anywhere you need them with ease. Testing purposes (Email: email@emailprovider.com Password: 123456789!)",
      src: grocerylist2,
      url: "https://www.grocery-lists.com/",
      gitUrl: "https://github.com/noelloera/groceries",
    },
  },
  {
    id: "2",
    name: "Starvin'",
    src: starvin1,
    technologies: [frontTechs[1], frontTechs[5], frontTechs[2]],
    modal: {
      description: "Local Restaurant Search",
      fullDescription:
        "Finding local businesses and restaurants is now a brease. Once the user enters their preferred search criteria the results are displayed in a simple card that contains the business' most important information. Satisfy that cravin',",
      src: starvin2,
      url: "https://www.starvin.website/",
      gitUrl: "https://github.com/noelloera/starvin",
    },
  },
  {
    id: "3",
    name: "J&M Audio Video",
    src: jmaudiovideo1,
    technologies: [frontTechs[5], frontTechs[6], backTechs[0]],
    modal: {
      description: "Home Theater Installation Business",
      fullDescription:
        "El Paso, TX based business which offers professional Home Theater installation.",
      src: jmaudiovideo2,
      url: "https://www.jmaudiovideo.com/",
      gitUrl: "https://github.com/noelloera/business_template_1",
    },
  },
  /*
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
  },*/
  {
    id: "5",
    name: "Authenticate",
    src: authenticate1,
    technologies: [backTechs[0], backTechs[1], backTechs[2]],
    modal: {
      description: "JWT Authentication Server",
      fullDescription:
        "Reusable back-end Express.js and MongoDB server which uses JWT (JSON Web Token) encoding for user credentials.",
      src: [],
      url: "https://github.com/noelloera/authenticate",
      gitUrl: "https://github.com/noelloera/authenticate",
    },
  } /*
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
  },*/,
  {
    id: "9",
    name: "Explore or Chore",
    src: exploreorchore1,
    technologies: [frontTechs[0], frontTechs[1], frontTechs[2]],
    modal: {
      description: "Guessing Game",
      fullDescription:
        "Behind one of these doors is a trick door which ends the game. Can you guess which 2 of the 3 doors are real?",
      src: exploreorchore2,
      url: "https://exploreorchore.herokuapp.com/",
      gitUrl: "https://github.com/noelloera/explore_or_chore",
    },
  },
  {
    id: "8",
    name: "Keeper of Quotes",
    src: keeperofquotes1,
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
      url: "https://github.com/noelloera/keeper_of_quotes",
      gitUrl: "https://github.com/noelloera/keeper_of_quotes",
    },
  },
];
