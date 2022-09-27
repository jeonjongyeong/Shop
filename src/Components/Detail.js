import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let findGoods = props.shoes.find(function (goods) {
    return goods.id === id;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              findGoods.id +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findGoods[id].title}</h4>
          <p>{findGoods[id].content}</p>
          <p>{findGoods[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
