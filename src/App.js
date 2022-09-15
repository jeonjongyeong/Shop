import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/main";
import data from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar />
      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map(function (data, index) {
            return (
              <Col className="md-4">
                <div key={index}>
                  <Main
                    img={`https://codingapple1.github.io/shop/shoes${[
                      index + 1,
                    ]}.jpg`}
                    name={shoes[index].title}
                    price={shoes[index].price}
                    content={shoes[index].content}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
