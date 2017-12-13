
# SignInApp

# About
This is a simple login application designed using the [MERN](http://mern.io/) stack, that is MongoDB, Express, React and Node. This login can be used in most of the events to check in the users and keep track of the attendees of the event. Only one can user(here is admin) can see the database of the users that checks in. No, other user can login and see the admin view. 

## Non-Functional Requirements 
As I have already done one of the my project in MERN and I have a good knowledge of React as a front-end build tool. I decided to go with React as a tool to build UserUI. It is also used by [Facebook](https://github.com/facebook/react/wiki/sites-using-react) as a front-end tool and be used for the application that needs the SPA (Single-page Application) functionality. 

  ### Design 
  This application carries simple design with login view, admin view and signup view. The user uses the signup page to signup and       then the app takes the user to the login page, but he will not be able to login as only admin can login and see the database with all the registered users. The admin will be provided with the username and password to see the admin view after he logs on using the login page. The front-end is designed using the REACT and the backend runs on MongoDB. This application can be used as a start-up tool for the new developers to work on to make a big single-page application project.
  
  ### Tooling
  I used many of the tools that I have used in my [CSC - 583 class project](https://github.com/DevRockstarr/toro-net) including MEN out of MEVN. I used REACT because, I was familiar with this package and I have already done one project using REACT. Also, MERN is very famous stack after MEAN and is used by most of the websites around the world.
  
  
  ## Installation
  
  - Fork the repo then clone it to your local machine.
   
       `https://github.com/<your repo>/SignInApp.git`
       
  - Considering that you already installed MongoDB. Run the back-end using the command
  
       `sudo service mongod start`
   
  - go to path directory
     
       `/path/SignInApp/`
       
  - Considering that you already have node installed. Open the terminal and write the following command
  
       `npm install`
   
  - Now, you are ready to run the application using following command on terminal/cli.
  
        `npm start`
   
  - Open the browser and use the following link  
   
        `http://localhost:3000`
        
  The Project is ready and you can test using different users.
        
        
### Architecture

The architecture of the sign-in app is a three-tier architecture with React as the front-end, the mongodb at back-end and Express for the API and Nodejs as Web-server and execution environment. 


### Plan of Action 

- [x] Non-functional Requirement Analysis
- [x] Architecture Design
- [x] Tooling
- [x] UI Design
- [x] Implementation
- [x] Testing
