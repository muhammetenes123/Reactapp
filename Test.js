import React, { Component } from 'react'
//json-server --watch src/compenents/api/db.json --port 3004
 class Test extends Component {
    constructor(props){
           super(props); 
           this.state = {
               a:10
           }
           console.log("Constructor");
    }
    componentDidMount() {
        console.log("componentDidMount");
        this.setState({
            a:20
        })
    }
    componentDidUpdate=(prevProps, prevState )=> {
        console.log("componentDidUpdate")
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return  true;
    }
    
    
    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;