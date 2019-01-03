import React, { Component } from "react";

class ImageContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <h2> Cat 1 </h2>
          <img
            src={require("../assets/cat-gif.gif")}
            height="100"
            width="100"
          />
        </div>
        <div>
          <h2> Cat 2 </h2>
          <img
            src={require("../assets/cat-green.png")}
            height="100"
            width="100"
          />
        </div>
        <div>
          <h2> Cat 3 </h2>
          <img
            src={require("../assets/cat-white.jpg")}
            height="100"
            width="100"
          />
        </div>
        <div>
          <h2> Google </h2>
          <img src={require("../assets/google.svg")} height="100" width="100" />
        </div>
      </div>
    );
  }
}

export default ImageContainer;
