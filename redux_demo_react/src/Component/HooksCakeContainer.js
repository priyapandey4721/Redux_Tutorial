import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../Redux";
function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cake In Hook : {numOfCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyCakes());
        }}
      >
        Buy Cakes
      </button>
    </div>
  );
}

export default HooksCakeContainer;
