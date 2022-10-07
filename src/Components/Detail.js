import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();

  let [count, setCount] = useState(0);
  // let [chance, setChance] = useState(true);
  let [num, setNum] = useState("");

  useEffect(() => {
    // let timer = setTimeout(() => {
    //   setChance(false);
    // }, 2000);
    if (isNaN(num) === true) {
      alert("문자는 입력이 되지 않습니다.");
    }
    // return () => {
    //   clearTimeout(timer);
    // };
  });

  return (
    <div className="container">
      {/* {chance == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null} */}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"}
            width="100%"
            alt="이미지"
          />
        </div>
        <div className="col-md-6 mt-4">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
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
