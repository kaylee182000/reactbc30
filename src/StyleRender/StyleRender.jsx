import React, { Component } from "react";
//dung cach 1 khi css cho page
import './style.css' //cach nay se anh huong den toan bo ung dung
//dung khi class co the bi thay doi boi event tu ng dung
import Style from "./StyleRender.module.css"

export default class StyleRender extends Component {
  render() {
    return (
      <div>
        StyleRender
        <p className="color-red">Helo there</p>
        {/* cach 2
        <p className={`${Style['color-blue']} display-4`}>text blue</p> */}
        <p style={{color: "green",backgroundColor: "black",padding: "15px"}}>text green</p>
      </div>
    );
  }
}
