import "./Profile.css";
import React from "react";

function Profile(props) {
    let [show, setshow] = React.useState(false);
    let { pic, name, age, loc, org } = props;

    const Changeflg = () => {
        setshow(!show);
    }
    return (
        <div>
            <img id="profilePic" src={pic} alt="Profile" />
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            {show ? <div>
                <button onClick={() => Changeflg()}>Hide More Details</button>
                <p>Location : {loc}</p>
                <p>Organisation : {org}</p>
            </div>
                : <button onClick={() => Changeflg()}>Show More Details</button>
            }
        </div>
    );
}

export { Profile }