import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "../store/userSlice";
import { changeCount } from "../store";

function Cart() {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  return (
    <div>
      {state.user.name} {state.user.age}의 장바구니
      <button
        onClick={() => {
          dispatch(changeAge(10));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeCount(i));
                  }}
                >
                  변경하기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
