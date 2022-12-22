import React, { useState } from "react";
import ProjectsCon from "../css/Projects.styled";
import Singleproject from "./Signleproject";
import redbusImg from "../assets/Project-img/redbus.png";
import royalbrothersImg from "../assets/Project-img/royalbrothers.png";
import restaurantImg from "../assets/Project-img/restaurant.PNG";
import travelCityImg from "../assets/Project-img/Homepage-2.PNG";
import cricInfo from "../assets/Project-img/cricInfo.PNG";
import blogappImg from "../assets/Project-img/blog-app.png";
import youtubeImg from "../assets/Project-img/youtube.png";
import sudokuImg from "../assets/Project-img/sudoku.png";


let projectData = [
  {
    id: 1,
    heroImage: `${travelCityImg }`,
    title: "Travel City Clone",
    desc: "Clone of Travel city website. Search hotel and car by city name and maintained different rooms for each hotel. User can search hotel in available list and can filter by rating and budget. Room and car booking functionality with payment gateway. Signin, signup and signin with google, facebbok, linkedin, github also.",
    team: "A collaborative project, built in 6 days by team of 3 members",
    git: "https://github.com/akram3598786/TravelCity-Clone",
    deployed: "https://travelcity-clone.netlify.app/",
    techStack:
      " React | Redux | HTML5 | CSS3 | Material Ui | Javascript | JSON Server | Postman | git | Heroku | Google Auth",
    blog: "#",
    rank : 2
  },
  {
    id: 2,
    heroImage: `${redbusImg}`,
    title: "Red Bus Clone",
    desc: "Clone of Red bus website. User can login by OTP, see and edit user profile details. All Ticket booking and managing functionalities, Ride and RailRide pages with animations. User can show to print ticket. User can check all previous trips with tickets and also can cancel ticket.",
    team: "A collaborative project, built in 7 days by team of 3 members.",
    git: "https://github.com/akram3598786/Red-Bus-Clone",
    deployed: "https://redbus-clone-v02.netlify.app/",
    techStack:
      " HTML5 | CSS3 | Javascript | JSON Server | Postman | git",
    blog: "#",
    rank : null
  },
  {
    id: 3,
    heroImage: `${cricInfo}`,
    title: "ESPNCricinfo Clone",
    desc: "A sports news website exclusively for the game of cricket. The site features is Authentication, cricket news, live coverage of cricket matches, Check details of any player by searching, light and dark theme and Fantasy the feature of joining in match contests.",
    team: "A collaborative project, built in 7 days by team of 3 members.",
    git: "https://github.com/akram3598786/ESPNcricinfo_Clone_MERN",
    deployed: "https://cricinfoclone.netlify.app/",
    techStack:" HTML5 | CSS3 | Javascript | React | Redux | Chakra UI | Node.js | Express.js | Mongoose | MongoDB | JSON Server | Postman | Heroku | git",
    blog: "#",
    rank : 2
  },
  
  {
    id: 4,
    heroImage:`${royalbrothersImg}`,
    title: "Royal Brothers Clone",
    desc: "Its a bike rental and e-commerce website. User can book bike by ckecking availability for concerned city.User can add products in carts along with all dynamic details. User can purchase products by validating payment details. Signup | Login | Payment Gateway | Animations.",
    team: "A collaborative project, built in 5 days by team of 3 members.",
    git: "https://github.com/akram3598786/Royal-Brothers-Clone",
    deployed: "https://royal-brothers-clone.netlify.app/",
    techStack:
      "HTML5 | CSS3 | Javascript | Local Storage | git",
    blog: "#",
    rank : null
  },
  {
    id: 5,
    heroImage:`${youtubeImg}`,
    // heroImage:"https://i0.wp.com/pragativadi.com/wp-content/uploads/2021/07/YouTube.jpg?fit=800%2C450&ssl=1",
    title: "YouTube Clone",
    desc: "YouTube.com is very popular Video Streaming platform over the world. In this project user can search and watch any videos. Responsiven pages.",
    team: "Solo Project build in three hours",
    git: "https://github.com/akram3598786/youtube-clone",
    deployed: "https://clonebyakram-youtube.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | fetch API",
    blog: "#",
    rank : null
  },
  {
    id: 6,
    heroImage:`${blogappImg}`,
    title: "Blogs MERN App",
    desc: "Its a blog web application like buffer to contain blogs privately in which user need to authenticate then can create , edit, see, delete and search blogs. User can signin, signup, signout and see his/her profile details. By clicking on any blog card can see blog details.",
    team: "Solo Project build in two days",
    git: "https://github.com/akram3598786/MERN-Blog-APP",
    deployed: "https://mern-blog-app-v01.netlify.app/",
    techStack: "React.js | Redux | HTML5 | CSS3 | Javascript | Node.js | Express.js | Mongoose | Relations in schema | MongoDB | Render | git",
    blog: "#",
    rank : null
  }, 

  {
    id: 7,
    heroImage:`${sudokuImg}`,
    // heroImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyeq1SROQ-Yl_7o4TWwomS5Fxngcla6pxL5g&usqp=CAU",
    title: "Sudoku Solver",
    desc: "It is a web application where you can create and solve any sudoku of 9 * 9 Matrix. User can reset sudoku.",
    team: "Solo Project build in three hours",
    git: "https://github.com/akram3598786/sudoku-solver-dsa",
    deployed: "https://sudoku-solver-dsa.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | DSA",
    blog: "#",
    rank : null
  },
   
  {
    id: 8,
    heroImage:`${restaurantImg}`,
    title: "Restaurant-Website",
    desc: "It's a web application for a restaurant. User can see available meal and price by menu. Also can check locations and available of service area on map. ",
    team: "Solo Project build in two days",
    git: "https://github.com/akram3598786/Restraurant-responsive-website",
    deployed: "https://akram3598786.github.io/Restraurant-responsive-website/solution-starter/index.html",
    techStack: "React.js | Bootstrap | HTML5 | CSS3 | Javascript | git",
    blog: "#",
    rank : null
  },  
];

const Projects = () => {
  const [data, setData] = useState(projectData);

  return (
    <>   
     <ProjectsCon id="projects">
      <h1 style={{ color: "white" }} className="subTitle">Projects</h1>
      <div className="projectCon">
        {data.map((el) => {
          return <Singleproject key={el.id} {...el} />;
        })}
      </div>
    </ProjectsCon>
    </>
  );
};

export default Projects;
