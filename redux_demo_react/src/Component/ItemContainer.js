import React from "react";
import { connect } from "react-redux";
import { buyCakes, buyIceCreams } from "../Redux";
function ItemContainer(props) {
  return (
    <div>
      <h2>Item : {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIceCreams;
  return {
    item: itemState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCakes())
    : () => dispatch(buyIceCreams());
  return {
    buyItem: dispatchFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);