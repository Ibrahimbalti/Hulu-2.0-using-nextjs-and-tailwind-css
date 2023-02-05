import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { ScrollRotate } from "react-scroll-rotate";
export default function RotatingString() {
  var ref = useRef(null);

  useEffect(() => {
    rotatString();
  }, [ref]);

  const rotatString = () => {
    // var element = document.getElementById("h1").childNodes[0];
    // var noddata = element.childNodes[0];
    // var text = noddata.data;

    // setInterval(function () {
    //   text = text[text.length - 1] + text.substring(0, text.length - 1);
    //   noddata.data = text;
    // }, 100);
    let element = ref.current?.childNodes[0];

    let nodeString = element?.childNodes[0];
    let text = nodeString?.data;
    console.log(text);
    setInterval(function () {
      text = text[text.length - 1] + text.substring(0, text.length - 1);

      nodeString = text;
    }, 100);
  };
  return (
    <div className='App' onLoad={rotatString} id='h1' ref={ref}>
      <h1 align='center'>
        {/* Hey!
          <ScrollRotate method={"perc"} loops={3}>
            <span style={{ color: "red" }}> Geek </span>
          </ScrollRotate> */}
        Welcome To Geekforgeeks
      </h1>
    </div>
  );
}
