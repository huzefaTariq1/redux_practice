import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementAction, incrementAction } from '../Actions/action';

export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return <>
       <h1> Counter Value: {counter} </h1>

        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button onClick={() => dispatch(decrementAction())}>-</button>
    </>;
}