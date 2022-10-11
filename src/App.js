import "./App.css";
import { lazy, Suspense, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/main";
// import Detail from "./Components/Detail";
// import Cart from "./Components/Cart";
import data from "./data";
import { Routes, Route, Outlet } from "react-router-dom";
import axios from "axios";

const Detail = lazy(() => import("./Components/Detail.js"));
const Cart = lazy(() => import("./Components/Cart.js"));

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>로딩중</div>}>
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
                <button
                  onClick={() => {
                    <p>로딩중..</p>;
                    setCount(count + 1);
                    if (count > 3) {
                      alert("더보기가 없습니다.");
                    }
                    axios
                      .get(
                        "https://codingapple1.github.io/shop/data" +
                          count +
                          ".json"
                      )
                      .then((result) => {
                        console.log(result.data);
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                      })
                      .catch(() => {
                        console.log("실패했습니다.");
                      });
                  }}
                >
                  더보기
                </button>
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />} />
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
      </Suspense>
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
