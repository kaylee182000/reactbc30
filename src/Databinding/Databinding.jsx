import React, { Component } from "react";

export default class Databinding extends Component {
  //Phương thức render
  showInfo(){
      return "helo there"
  }
  render() {
      const hoTen  = "Kien"
      let avg = (a,b) => {
          return (a + b)/2
      }

    return (
    <div>
        Databinding
        <p>ho ten {hoTen}</p>
        <p>diem {avg(8,2)}</p>
        <p>{this.showInfo()}</p>
    </div>
    
    );
  }
}
