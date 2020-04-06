import React from "react";
const Nav = props => {
  return (
    <ul>
      {(props.arr &&
        props.arr.length &&
        props.arr.map((o, i) => {
          return <li key={i}>{o.name}</li>;
        })) ||
        "empty"}
    </ul>
  );
};
export default Nav;
