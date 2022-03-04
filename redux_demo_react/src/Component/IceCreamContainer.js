import React from "react";
import { connect } from "react-redux";
import { buyIceCreams } from "../Redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h1>Number of IceCreams : {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.icecream.numOfIceCreams,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCreams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
