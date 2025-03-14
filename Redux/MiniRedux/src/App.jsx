import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrease, increase } from './actions';

function App() {
    let counter = useSelector((state) => state.counter);
    console.log(counter);

    let dispatch = useDispatch();

    return (
        <>
            <h1>Redux</h1>
            <h1>Counter value is : {counter}</h1>
            <button
                onClick={() => {
                    dispatch(increase());
                }}
            >
                increase
            </button>
            <button
                onClick={() => {
                    dispatch(decrease());
                }}
            >
                decrease
            </button>
        </>
    );
}

export default App;
