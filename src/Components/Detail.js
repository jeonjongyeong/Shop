import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => (props.color == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  // let findGoods = props.shoes.find(function (goods) {
  //   return goods.id === id;
  // });
  return (
    <div className="container">
      <YellowBtn color="blue">버튼</YellowBtn>

      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
