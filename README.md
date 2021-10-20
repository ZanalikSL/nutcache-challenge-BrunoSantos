# nutcache-challenge-BrunoSantos

## Print

![image](https://user-images.githubusercontent.com/71197933/135949340-5b75e684-ca89-443d-ae7f-ca051eeedfde.png)

## Languages & tools

- Javascript
- React
- Axios
- Styled-components 
- Context API
- CrudCrud Mock API [Link](https://crudcrud.com/)
- Lib for CORS - http-proxy-middleware [Link](https://www.npmjs.com/package/http-proxy-middleware/v/0.19.1)

## Live Version

To deploy a live version i used surge.

Importantly, due to the nature of API, the live version may stop working at some point in the future.

Surge [Link](https://honorable-bomb.surge.sh/)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

```bash
$ git clone https://github.com/ZanalikSL/nutcache-challenge-BrunoSantos.git
$ cd nutcache-challenge-BrunoSantos
```

IMPORTANT

I used an .env file at the root of the project to make the API calls. 
After installation, create this file, go to the [CrudCrud](https://crudcrud.com/) website and get a Token to generate a new endpoint for you.

## Use

```bash
# Install dependencies
$ npm i

# Start the project
$ npm start

```

## Create production builds

```bash
$ cd nutcache-challenge-BrunoSantos
$ npm run build
```

## Technical solution

We have two main components in this application, the employee listing and the navigation bar. 
These two components need to talk between each other and use parts of each other, that's why the project structure happened as it is, and it was necessary to use ContextApi.

For confirmation of inputs and actions, I used Moldals and some native JS functions.

For the API calls, I used Axios and implemented a small error handling cath in the calls.
