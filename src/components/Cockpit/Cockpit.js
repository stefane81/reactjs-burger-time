import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = props => {
  const classes = [];

  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <p className={classes.join(" ")}>Hi, I am ok.</p>
      <button className={btnClass} onClick={props.changed}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
