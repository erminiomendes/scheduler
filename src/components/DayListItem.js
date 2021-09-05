import React from "react";
import "components/DayListItem.scss";
import classnames from 'classnames';

export default function DayListItem(props) {

  // for displaying number of available interview spots with appropriate grammar
  const dayClass = classnames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': !props.spots
  })

  let spotsRemainingText 
  if (props.spots === 0) {
    spotsRemainingText = "no spots remaining";
  } else if (props.spots === 1) {
    spotsRemainingText = "1 spot remaining";
  } else {
    spotsRemainingText = `${props.spots} spots remaining`
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{spotsRemainingText}</h3>
    </li>
  );
};