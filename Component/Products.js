import React, { Component } from 'react';

import {  FlatList } from 'react-native';

import { Container } from 'native-base';

import Article from './Article';

export default class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Products: [],
            page: 1,
        }

        const  {Products} = this.props;

        this.getProductRequest();
        this.renderItem();

    }
    componentDidMount(){
        
        fetch('http://roocket.org/api/products?page=1')


            .then(response =>response.json())
            .then(json => {

                console.log(json)

                // this.setState({

                //     Products : json.data.item
                // })
            })
            .catch(error =>console.log(error))
    }



    render() {

        // console.log(Products)

        return (

            <Container>

                <FlatList
                    data={this.state.Products}
                    // keyExtractor={(a, b) => b.toString()}
                    // renderItem={(item) => <Article item={item} />}
                />

            </Container>


        );
    }
    getProductRequest = () => {

        fetch('http://roocket.org/api/products?page=1')
        .then (response => response.json())
        .then(json  => {
            console.log(json);
            console.log("fuck")

            // this.setState({
            //     Products : json.data.item
            // })
        })
        .catch(error =>console.log(error))

    };

    renderItem({data})
    {

        return <Test2 Test2={data}/>
    }
    

}