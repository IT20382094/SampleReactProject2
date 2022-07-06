import React from "react";

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello 1</h1>
    //     </div>
    // )

    //(String html tag, optional properties, children of html element)
    // return React.createElement('div', null, 'h1','Hello navoda');
    return React.createElement('div', 
    {id:'hello', className:'dummyClass'},
    null, React.createElement('h1',null,'Hello Vishwas'));
}

export default Hello;