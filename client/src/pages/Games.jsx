import React from "react";
import { context } from "../components/Context";
import data from ".././components/data/games";
import fetchingData from "../components/Profile/FetchingData";

function Games() {
  // access to the data from the initial state
  const {
    state: { profile },
  } = React.useContext(context);
  // fetching data from the database
  fetchingData();
  // convert the string into a number data type
  let age = parseInt(profile.personalInfo.age);
  console.log(age);
  console.log(data);
  //  sorting the array based on the user's age
  let sortedArr = data.filter((data) => data.age <= age);

  return (
    <div className="gamesCardsContainer">
      {sortedArr.map((data) => {
        return (
          <div key={data.id} className="gamesContainer">
            <div className="gamesCard">
              <img src={data.picture_url} alt={data.game_name} />
            </div>
            <button className="registerButton">
              <a href={data.game_url}>{data.game_name}</a>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Games;
