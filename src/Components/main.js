import "../App.css";

function main(props) {
  return (
    <>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.index + ".jpg"}
        width="80%"
        alt="이미지"
      />
      <h4>{props.shoes.title}</h4>
      <h4>{props.shoes.price}원</h4>
    </>
  );
}

export default main;
