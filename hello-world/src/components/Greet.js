import React from "react";

// function Greet(){
//     return <h1>Hello World</h1>
// }

// Arrow function
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>

    )
}

//Destructure in parameter
// const Greet = ({name}) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             {props.children}
//         </div>

//     )
// }

//Destructure in the function body
// const Greet = props => {
//     const {name} =  props
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             {props.children}
//         </div>

//     )
// }

export default Greet;