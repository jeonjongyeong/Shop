import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/main";
import Detail from "./Components/Detail";
import data from "./data";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map(function (data, index) {
                    return (
                      <div className="col-md-4">
                        <div key={index}>
                          <Main shoes={shoes[index]} index={index + 1} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <div>
              <Detail shoes={shoes} />
            </div>
          }
        />
        <Route path="*" element={<div>404없는 페이지</div>} />
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        >
          <Route path="member" element={<div>멤버 페이지</div>}></Route>
          <Route path="location" element={<div>위치정보 페이지</div>}></Route>
        </Route>
        <Route
          path="/event"
          element={
            <div>
              <Event />
            </div>
          }
        >
          <Route
            path="one"
            element={<div>첫 주문 시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
