import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }
    return (
    <div>
        {/* //If we add paranthethis like clickHandler() its a function call
        //Event handing  */}
      <button onClick={clickHandler}>Click</button>
    </div>
    )
}

export default FunctionClick
