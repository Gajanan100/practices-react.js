
import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    // console.log(state,action);
    if(action.type === "Increment"){
        return state+1;
    }
    if(action.type === "Decrement"){
        return state-1;
    }


    return state

}

const UseReducersHook = () => {



    // const[count,setCount]=useState(0)
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(action);

    return (
        <div>
            <h2>Count :- {state} </h2>
            <div>
                <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
                <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
            </div>
        </div>
    )
}

export default UseReducersHook