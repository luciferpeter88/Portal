import React from "react";
import YouTube from "react-youtube";
import { opts } from "../components/data/variables";
import { useParams, useNavigate } from "react-router-dom";
import { context } from "../components/Context";
function Story() {
  const { state } = React.useContext(context);
  const navigate = useNavigate();
  const { storyName } = useParams();

  return (
    <React.Fragment>
      <div className="storyContainer">
        <div className="storyPic">
          <img src={state.defaultPicture} alt={state.defaultPicture} />
        </div>
        <div className="storyVideo">
          <h2>{storyName}</h2>
          <YouTube videoId={state.defaultVideo} opts={opts} />
          <button onClick={() => navigate(-1)} className="registerButton">
            Back to Department
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Story;
