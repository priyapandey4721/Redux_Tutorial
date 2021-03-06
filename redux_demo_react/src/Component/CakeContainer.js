import React from "react";
import { connect } from "react-redux";
import { buyCakes } from "../Redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of Cakes : {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cakes</button>
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
    buyCake: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
