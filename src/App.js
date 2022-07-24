import React from 'react';
import Resturant from './component/basics/resturant';
const App = () => {


  // const [count,setCounter]=useState(0)
  // const incrementFn=()=>{
  //   setCounter(count+1)
  // }
  // const decrementFn=()=>{
  //   count>0?setCounter(count-1):setCounter(0)
  // }
  // const [text,setText]=useState("")
  // const change=(eventt)=>{
  //   const newValue=eventt.target.value
  //   setText(newValue)
  // }


  // const reducer=(state, action)=>
  // {
  //   if(action.type==="INCR"){ //hum yaha switch statement b likh sakte
  //     state=state+1 //hum agar yaha or DECR wale mai b return likh le or if stat k baher return state na likhe to b kaam ho jaye ga par agar esa kare ge to DECR mai ek or condition lagi hai k state zero se bari honi chahye to agar hum zero peh le aye ge to is ka matlab yeh 2nd wali condition b false ho gai to pher wahi purani problem ah jaye gi k value show nahi hoti (wahi jo agar hum if stat k baher return state wali case mai agar na likhe return state....)
  //   }
  //   if(state>0 && action.type==="DECR"){
  //     state=state-1
  //   }
  //   return state //agar yeh na likhe to value show nahi hoti
  // }
  // const initialData=0 //yaha initialData ko declare karna lazmi hai
  // const [state, dispatch]=useReducer(reducer, initialData)

  return (
    <>
      <Resturant />
      <h1>Testing for second commit on github</h1>
      {/* <div>
        {count} <button onClick={incrementFn}>Increment</button> <button onClick={decrementFn}>Decrement</button>
      </div>
      <div>
        <input type="text" onChange={change}/>
        <p>{text}</p>
      </div>
      <br /><br />


      <div>
        {state} <button onClick={()=>dispatch({type:"INCR"})}>Increment</button> <button onClick={()=>dispatch({type:"DECR"})}>Decrement</button>
      </div> */}
    </>
  )
}

export default App
