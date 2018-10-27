import React, { Component } from 'react';

import { FlatList } from 'react-native';

import { Container, Drawer, Header, Left, Item, Input, Button, Spinner } from 'native-base';

import Article from './Article';

import { Icon } from 'react-native-elements'

import Sidebar from './Sidebar';


export default class Test extends Component {

    colseDrawer = () => {
        this.drawer._root.close()
    }
    openDrawer = () => {
        this.drawer._root.open()
    }
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            page: 1,
            imgURL:[],
        }

        this.getProductsRequest();
        this.handleLoadMore();
        // this.getimageRequest();
    }
    /*-------------------------------------------------------------------------------------------*/
    componentDidMount() {
        this.handleLoadMore();


    }
    render() {

        // console.log(Products)

        return (
            <Drawer                                                                                                                                                                                                                                                                           
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar />}
                onClose={() => this.colse.Drawer()}
            >


                <Container>
                    <Header
                        searchBar
                    >
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>

                                <Icon name="menu" />

                            </Button>
                        </Left>
                        <Item>
                            <Icon name="menu" />
                            <Input placeholder="Search" />
                            <Icon name="home" />
                        </Item>
                    </Header>
                    {this.state.Products &&
                        <FlatList
                            data={this.state.Products}
                            renderItem={(item) => <Article Products={item}  />}
                            keyExtractor={(item) => item.id}
                            ListEmptyComponent={() => <Spinner color='blue' />}
                            onEndReached={this.handleLoadMore.bind(this)}
                        />
                    }
                </Container>

            </Drawer>


        );
    }
    /* --------------------------------------------------------------------------------------- */

    handleLoadMore() {
        this.setState({ page: this.state.page + 1 }, () => {
            this.getProductsRequest()
        })

    }
    /* --------------------------------------------------------------------------------------- */
    renderItem({ item }) {
        return <Article Article={item} />
    }
    /* --------------------------------------------------------------------------------------- */

    getProductsRequest() {


        fetch('https://techtip.ir/wp-json/wp/v2/posts')
            .then(Response => Response.json())
            .then(json => {
                console.log(json)
                // console.log(json._links["wp:featuredmedia"].href)
                this.setState({
                    Products: json
                })
                // console.log("fuck1111")
                // console.log(json)
                // let Products = json;
                // this.setState(prevState => {

                //     Products :page ===1 ?Products:[ ...prevState.Products , ...Products];
                //     page : json.current_page
                // })
            })
            .catch(error => console.log(error))
    }
    /*---------------------------------------------------------------------------------------------------- */
    // getimageRequest(){

    //     fetch(this.props.Products.item._links['wp:featuredmedia'][0].href)
    //     .then(Response=> Response.json())
    //     .then(json => {
            
    //         console.log(json.guid.rendered)
    //         this.setState({
    //             imgURL: json.guid.rendered
    //         });
            
    //     });
    // }

}