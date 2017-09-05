import React, { Component } from 'react';

class Home extends Component{
    constructor() {
        super();
        this.state = {
            message: ""
        };
    }

    componentDidMount() {
        let dataURL = "http://www.redhouselab.com/wp-json/wp/v2/pages/2";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    message: res.title.rendered
                })
            })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Home;