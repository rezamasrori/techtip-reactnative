import React, { Component } from 'react';

import { Image, StyleSheet, TouchableHighlight, Alert , View } from 'react-native';

import { Card, CardItem, Left, Body, Text, Thumbnail, Icon, Button } from 'native-base';

import Loding from'./Loding';

import HTML from 'react-native-render-html';
// import {parse}from 'fast-html-parser';

import { createStackNavigator } from 'react-navigation';

import Test from'./Test';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Products: [],
            imgURL: '',
            page: 1,

        }
 

    }
    /*برای فراخوانی از 
    this.props  
    استفاده میکنیم چون تویه 
    constructor 
    ریختیم */
    componentDidMount() {

        fetch(this.props.Products.item._links['wp:featuredmedia'][0].href)
            .then(Response => Response.json())
            .then(json => {

                this.setState({
                    imgURL: json.guid.rendered
                });
            });
    }


    render() {

        const { Products } = this.props;

        const { navigate } = this.props.navigation;

        return (
            <View>
                <TouchableHighlight onPress={() =>  navigate('Test  ')}>
                <View>
                <Card style={{ flex: 0 }}>
                <View>
                    <CardItem>
                        <Left>
                            <Body>
                                <View>
                                <Text>{Products.item.title.rendered}</Text>
                                <Text note>{Products.item.alt_text}</Text>
                                </View>
                            </Body>
                            <Thumbnail source={{ uri: this.state.imgURL }} />
                        </Left>
                    </CardItem>
                    <CardItem content>
                <View>
                    <Body>
                            <Image source={{ uri: this.state.imgURL }}
                                style={{ backgroundColor: '#333', height: 200, width: 200, flex: 1 }}
                            />
                            <CardItem>
                                <View>

                                <Text numberOfLines={3}>{Products.item.content.rendered}</Text>     
                                        {/* <HTML value={Products.item.content.rendered} /> */}
                               </View>
                               
                            </CardItem>


                        </Body>
                    </View>
                       
                    </CardItem>
                    <CardItem>
                        <View>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                
                                <Text>{Products.item.date}</Text>
                                
                            </Button>
                           </Left>
                        </View>
                       
                    </CardItem>
                    </View>
                </Card>
                </View>
                
                </TouchableHighlight>
            </View>
        );
    }
}

export default createStackNavigator({ 

    Home :{
        screen : Article

    },
    Test : {
        screen : Test
    }

})