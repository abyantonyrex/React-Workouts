import React, { useReducer } from 'react'

export const UseReducerProblem = () => {

    function reduce(state,action) {
        switch (action.type) {
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                return {count:state.count-1}
            case 'multi':
                return {count:state.count*2}
            case 'divide':
                return {count:state.count/2}        
            default:
                break;
        }
    }

    let [state,dispatch] = useReducer(reduce,{count:0})

  return (
    <div>
       <h1>the count is {state.count}</h1>
       <button onClick={() => dispatch({type:'increment'})}>ADD</button>
       <button onClick={() => dispatch({type:'decrement'})}>SUB</button>
       <button onClick={() => dispatch({type:'multi'})}>MUL*2</button>
       <button onClick={() => dispatch({type:'divide'})}>DIV</button>
    </div>
  )
}
