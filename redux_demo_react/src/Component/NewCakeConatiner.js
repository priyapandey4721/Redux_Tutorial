import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCakes } from "../Redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>Number of Cakes : {props.numOfCakes}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCakes(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
