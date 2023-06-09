import React from "react";
import axios from "axios";
import "./Qoute.css";

class Qoute extends React.Component {
  state = { advie: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="main">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button glow-on-hover" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Qoute;
