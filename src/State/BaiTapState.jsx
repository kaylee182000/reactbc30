import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg", //state default
    fSize: 16,
  };

  render() {
    return (
      <div className="container">
        <h3>bai tap 1: Bai tap chon mau xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} alt="..." />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/red-car.jpg",
                });
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark m-2"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/black-car.jpg",
                });
              }}
            >
              Black
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/silver-car.jpg",
                });
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-default m-2 border"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/steel-car.jpg",
                });
              }}
            >
              Steel
            </button>
          </div>
        </div>
        <h3 className="mt-5">bai tap 2: Tang giam font-size</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          quis, exercitationem hic eveniet vero at quidem illum animi doloribus
          officiis?
        </p>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            this.setState({ fSize: this.state.fSize + 1 });
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ fSize: this.state.fSize - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
