import React from "react";
const WindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};


export default WindowDimension;
