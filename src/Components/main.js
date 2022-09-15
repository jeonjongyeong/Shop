import "../App.css";

function main(props) {
  return (
    <>
      <img src={props.img} width="80%" />
      <h4>{props.name}</h4>
      <h4>{props.price}원</h4>
      <p>{props.content}</p>
    </>
  );
}

export default main;
