import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Article from './Article';

class Corsi extends Component{
    constructor(){
        super();
        this.state = {
            corsi: []
        };
    }

    componentDidMount(){
        //Trovare modo per tirare giù solo gli articoli di una categoria
        let dataURL = "http://www.redhouselab.com/wp-json/wp/v2/posts";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    corsi: res
                })
            })
    }

    render(){
        return(
            <div>
                <Route path={`${match.url}/:slug`} component={Article}/>
            </div>
        )
    }
}

export default Corsi;