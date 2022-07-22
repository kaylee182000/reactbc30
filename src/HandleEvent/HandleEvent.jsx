import React, { Component } from "react";

export default class HandleEvent extends Component {
  eventChange = function () {
    alert("hi there");
  };
  showName = (name) => {
      alert ("ten " + name)
  }
  render() {
    //   function handleEvent(){
    //       alert("yolo")
    //   }
    // function goiTen (name){
    //     alert("ten " + name)
    // }
    return (
      <div className="container">
        <h3>HandleEvent</h3>
        <button
          onClick={() => {
            //goi ham khac
            this.showName("KienLe")
          }}
        >
          button
        </button>
        {/* thac mac vcl ham tu dong chay khi them dau ngoac tron react hieu la binding ra du lieu
        <button onClick={goiTen("Kaylee")} className="ms-2">
          Submit
        </button> */}
        {/* <button onClick={this.showName("Kaylee")} className="ms-2">
          kkk
        </button> */}
        <h3 className="mt-5">Handle Event Change</h3>
        <input className="form-control w-25" onChange={(e) => {
            //e.target chinh la the input
            var tagInput = e.target
            console.log("value",tagInput.value)
        }}/>
      </div>
    );
  }
}
