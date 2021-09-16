# Portfolio-React

## Introduction

Front-end application which utilizes React along with MaterialUI to construct a single-page portfolio.

## Table of Contents

- [General Info](#general-info)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)

## General Info

Portfolio-React uses React, MaterialUI, CSS, and JavaScript for front-end mobile responsiveness and UI logic. Express.js powers the backend REST API along side mongoose for MongoDB queries. Provide routes for for rendering the client side static application as well as provides the routes for the storage and the update of existing data from MongoDB database.

1. Upon root request "/" the server feeds the client static file
2. The static file renders the index.html file in the build directory
3. All the components can be editted to display desired projects or technologies
4. projects.js and about.js can be customized to display the contents within

## Features

- Front-end designed using MaterialUI
- Edit about.js and projects.js to update to desired updates
- Mobile responsive front-end

## Technologies

- React
- MaterialUI
- CSS
- Javascript
- Node
- Express

## Setup

Running this project requires local installation of npm:

1. $ npm install
2. $ node app.js / nodemon app.js

## Status

Application is functional. Development still ongoing.
