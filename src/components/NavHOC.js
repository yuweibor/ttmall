import React from "react";

const hoc = Component => {
  return props => {
    console.log("props", props);
    // return props && props.arr && props.arr.each(o => o.index);

    const newArr = props.arr
      .map(o => {
        return o.name;
      })
      .sort()
      .map(o => {
        return {
          name: o
        };
      });
    return <Component {...props} {...{ arr: newArr }} />;
  };
};
export default hoc;
