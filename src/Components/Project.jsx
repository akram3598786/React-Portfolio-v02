import React, { useState } from "react";
import ProjectsCon from "../css/Projects.styled";
import Singleproject from "./Signleproject";
import Resume from "./Resume/Resume";
import redbusImg from "../assets/Project-img/home.jpeg";
import royalbrothersImg from "../assets/Project-img/royalbrothers.png";
import restaurantImg from "../assets/Project-img/restaurant.PNG";
import travelCityImg from "../assets/Project-img/Homepage-2.PNG";
import cricInfo from "../assets/Project-img/cricInfo.PNG"


let projectData = [
  {
    id: 1,
    heroImage: `${travelCityImg }`,
    title: "Travel City Clone",
    desc: "Clone of Travel city website. Search hotel and car by city name and maintained different rooms for each hotel. User can search hotel in available list and can filter by rating and budget. Room and car booking functionality with payment gateway. Signin, signup and signin with google, facebbok, linkedin, github also.",
    team: "A collaborative project, built in 5 days by team of 3 members",
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
    desc: "Clone of Red bus website. Login, signup and user profile. All Ticket booking and managing functionalities, Ride and RailRide pages with animations. User can show to print ticket. User can check all previous trips with tickets and also can cancel ticket.",
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
    id: 4,
    heroImage:
      "https://i0.wp.com/pragativadi.com/wp-content/uploads/2021/07/YouTube.jpg?fit=800%2C450&ssl=1",
    title: "YouTube Clone",
    desc: "YouTube.com is very popular Video Streaming platform over the world. In this project user can search and watch any videos",
    team: "Solo Project build in three hours",
    git: "https://github.com/akram3598786/youtube-clone",
    deployed: "https://clonebyakram-youtube.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | fetch API",
    blog: "#",
    rank : null
  },
  {
    id: 5,
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyeq1SROQ-Yl_7o4TWwomS5Fxngcla6pxL5g&usqp=CAU",
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
    id: 6,
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
