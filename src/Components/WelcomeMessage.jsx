import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./WelcomeMessage.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessageContainer}>
      <div className={styles.icon}>
        <FaRegTrashAlt />
      </div>
      <p>Task List Is Empty!</p>
      <p>Please Enter New Tasks To-Do!</p>
      <div className={styles.credit}>
        <p className={styles.welcomeQuote}>
          "Welcome to your organized world with Todo List App! Embrace
          productivity and conquer your tasks with style."
        </p>
        <p className={styles.welcomeQuote}>
          "Let the journey begin – turning your to-dos into accomplishments.
          Happy planning!"
        </p>
        <h1>Created by : Abhishek Yadav</h1>
        <p className={styles.links}>
          <a href="https://github.com/abhishek8560" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-yadav-185647180?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCXw67mlYRkW0UVGojukJIw%3D%3D"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </p>
      </div>
    </div>
  );
}

export default WelcomeMessage;
