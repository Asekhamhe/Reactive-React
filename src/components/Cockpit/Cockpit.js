import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {

  const toggleBtnRef = useRef(null);
  

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http requests
    // const timer = setTimeout(() => {
    //   alert("Save data to cloud");
    // }, 1000);
    toggleBtnRef.current.click()
    // Clean up function => unMount
    return () => {
      
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    // Clean up function => unMount
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  })

  

  let btnClass = "";
  let assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses = [classes.red];
  }
  if (props.personsLength <= 1) {
    assignedClasses = [...assignedClasses, classes.bold];
  }

  return (
    <div className={classes.Cockpit}>
      <p>{props.title}</p>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} onClick={props.clicked} className={btnClass}>
        Toggle Persons
      </button>
    </div>
  );
};

// Wrap react functional component with React.memo() for optimization
export default React.memo(Cockpit);
