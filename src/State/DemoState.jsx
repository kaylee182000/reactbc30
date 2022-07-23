import React, { Component } from "react";

export default class DemoState extends Component {
  username = "Khai Do";
  //this.state la thuoc tinh co san duoc ke thua tu class component cua thu vien reactjs.Cac gia tri thay doi tren giao dien se duoc chua trong thuoc tinh cua this.state
  state = {
    status: false, //false la chua dang nhap true la da dang nhap
  };

  renderLogin = () => {
    //neu if co return thi khong can viet else
    if (this.state.status) {
      return <span className="text-white me-3">{this.username}</span>;
    }
    return (
      <button
        className="btn btn-danger me-3"
        onClick={(e) => {
          //chan su kien reload browser
          e.preventDefault();
          this.dangNhap();
        }}
      >
        Dang Nhap
      </button>
    );
  };

  dangNhap = () => {
    console.log("dang nhap");
    //this.state.status = true khong duoc phep gan state truc tiep
    //let newState = {status : true}
    //this.setState(newState): this.setState nhan vao mot object state moi thay the cho object state cu dong thoi render lai giao dien
    //this.setState(newState)
    //ham serState la ham bat dong bo khong dung async await trong setState
    this.setState({ status: true },()=>{
      //vế này sẽ tự động chạy sau khi state đc thay đổi va giao dien dc thay doi dung de thay the cho async await
      console.log("state",this.state)
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Demo State</h3>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              {/* {!this.status ? <button className="btn btn-success">Dang Nhap</button> : <h3 className="text-white">{this.username}</h3>} */}
              {this.renderLogin()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
