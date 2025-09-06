import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export const Counter = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span style={{ margin: "0 10px" }}>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};
