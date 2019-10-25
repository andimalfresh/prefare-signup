import React from "react";

const Plan = props => {
  return (
      <div
        className="Plan" style={
            props.showRecommendedPlan ? { display: "flex" } : { display: "none" }
          }>
        <div className="planTitle">
          {props.name}, we’ve selected the following plan - perfect for you /
          your family.
        </div>
        <div className="planCard">
          <ul>
            <li>
              <h2>{props.mealPlan[props.x].title}</h2>
            </li>
            <li className="planTagline">{props.mealPlan[props.x].tagline}</li>
            <li>
              {props.meals_per_week} meals for {props.number_of_servings}{" "}
              people.
            </li>
            <li>
              About ${props.number_of_servings * props.meals_per_week * 12}
              {props.mealPlan[props.x].priceString}
            </li>
            <li>
              <span className="exerpt">
                Select your scratch prepared meals after check-out!
              </span>
            </li>
            <li>
              <button className="orderButton">Continue to check-out</button>
            </li>
            <li>
              <a href='#Here' className="changeOverButton" onClick={props.changeOver}>
                This plan doesn’t do it for me
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Plan;
