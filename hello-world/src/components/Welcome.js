import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>{this.props.name}</h1>
    }

    //Destructure in class componennt
    // render(){
    //     const{name} = this.props
    //     return <h1>{name}</h1>
    // }
}

export default Welcome;