import React, { Component } from 'react';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        let dataURL = "http://www.redhouselab.com/wp-json/wp/v2/posts";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    articles: res
                })
            })
    }

    render() {
        let content = "";
        if(this.state.articles.length !== 0)
            content = this.state.articles[0].content;

        return (
            <div>{content.rendered}</div>
    );
    }
}

export default Article;
