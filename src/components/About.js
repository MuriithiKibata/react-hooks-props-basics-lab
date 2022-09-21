import React from "react";
import Link from "./Link";
import user from "../data/user"

function About(props) {
return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Link git = {user.links.github} linkedIn={user.links.linkedin} />
    </div>
  );
  }
  


export default About;
