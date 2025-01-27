1. npm init -y
    the package.json that's generated after this, it's used to deploy things 

2. npm install express mongoose dotenv
    express is our web framework 
    mongoose is how we interact w our db 
    dotenv is how we access our env variables 

3. create server.js in the backend folder

//you can change the scripts and it can just be like npm run dev

4. npm install nodemon -D => this'll help us so that we don't have to restart everytime -> it'll automatically do it whenever you make changes 

5. in the connection string after the ? you have to name the db - we named it products 

So, the way this works is we have our connectDB function in the config, we're using dotenv for credentials, we're defining the port and other credentials and shit, we're using routes, and then we're doing connectDB. 

6. npm create vite . in the frontend folder

7. npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion <- nah we don't need this 

8. npm i react-router-dom

App.jsx is entry point 

Browser Router is used for any other comps that are coming from the package, like routes, so we can have diff pages 

9. npm install zustand 

https://www.youtube.com/watch?v=O3BUHwfHf84&t=2195s 