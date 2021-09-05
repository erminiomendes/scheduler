import React from "react";
import "components/InterviewerListItem.scss";
import classnames from 'classnames';

// renders image of available interviewers on appointment
export default function InterviewerListItem(props) {

  const itemClass = classnames("interviewers__item", {    
      "interviewers__item--selected": props.selected      
    });

    return (
    <li className={itemClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
} 