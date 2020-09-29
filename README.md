# Gymbnb

## Introduction

Users can book local home gyms in their area and hosts can list their home gym.

This repo is the front-end client, built in React. You can see the app live at: [https://gymbnb-client.vercel.app](https://gymbnb-client.vercel.app)

To try out this app, you can create a new account from the Sign Up page or use the Demo Account listed below.

## Features

- Search gyms by location
- "Email Host" malito link connected to host's email
- "Host a Gym" form for listing home gyms onto the platform
- "Sign Up" form
- "Login" form

#### Demo Account Details

- email: user@gmail.com
- password: password

## Motivation

During SF's required quarantine, my gym membership was paused without a forseeable date of when the gym would re-open. Working out is an important ordeal for me, it enhances my mood and keeps me grounded, so I decided to build my own home gym (featured on this Web App). The gym equipment was pricey and I'm the only one using it! My friends would occasionally ask to use my home gym as they didn't own their own equipment. Hence, I created Gymbnb: a local home gym reservation web app.

## Video Demos

![Imgur](https://imgur.com/4ZlEa7N)

- [Gymbnb](https://www.youtube.com/watch?v=TUgLHtagTTQ&feature=youtu.be&ab_channel=MarcoFriaz)

![Imgur](https://imgur.com/QdYptsu)

- [Gymbnb Login](https://www.youtube.com/watch?v=vccD64fxJ2M&feature=youtu.be&ab_channel=MarcoFriaz)

## Technology

#### Front End

- React
  - [Create React App](https://github.com/facebook/create-react-app)
  - React Router
- HTML5
- CSS3 (scratch - no frameworks)

#### Testing

- Jest (smoke tests)

#### Production

- Deployed via Vercel

## Getting Started

Run `npm install` to load dependencies

Run `npm test` to ensure a stable build

This is only the front end client, so develop locally you'll need the backend server as well.

To get the backend up and running see [https://github.com/marfriaz/gymbnb-server](https://github.com/marfriaz/gymbnb-server)

Deployments are handled through Vercel and can be run via `npm run deploy`
