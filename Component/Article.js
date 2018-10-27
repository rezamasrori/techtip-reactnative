import React , {Component} from 'react';

import { Image , StyleSheet , TouchableHighlight} from 'react-native';

import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , Drawer, Container, Right } from 'native-base';


export default class Article extends Component{


    
    
    constructor(props) {
        super(props);

        this.state = {
            Products:[],
            imgURL: '',
            page: 1,
            // LinkURL:[],
        }

    }
    /*برای فراخوانی از 
    this.props  
    استفاده میکنیم چون تویه 
    constructor 
    ریختیم */
    componentDidMount(){

        fetch(this.props.Products.item._links['wp:featuredmedia'][0].href)
        .then(Response=> Response.json())
        .then(json => {
            
            console.log(json.guid.rendered)
            this.setState({
                imgURL: json.guid.rendered
            });
            // console.log("HERE");
            // console.log(this.state.imgURL);
            
        });


        // console.log(this.props.Products.item._links['wp:featuredmedia'][0].href)

    }
    render()
    {
        const {Products} =this.props;
         return( 

                <TouchableHighlight>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left> 
                                <Body>
                                    <Text>{Products.item.title.rendered}</Text>  
                                        <Text note>{Products.item.alt_text}</Text>
                                            </Body>
                                            <Thumbnail source={{uri:this.state.imgURL}} />                       
                                                </Left>
                                                    </CardItem>
                                                        <CardItem>
                                                            <Body>
                                                                <Image source={{uri:this.state.imgURL}} 
                                                                style={{ backgroundColor:'#333', height: 200, width: 200, flex: 1}}
                                                                />
                                                                <Text numberOfLines={3}>
                                                                   {Products.item.content.rendered}
                                                                </Text>
   
                                                            </Body>
                                                            </CardItem>
                                                        <CardItem>
                                                    <Left>
                                                <Button transparent textStyle={{color: '#87838B'}}>
                                            <Icon name="logo-github" />
                                        <Text >{Products.item.date}</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card> 
                </TouchableHighlight>
            
         );
     }
    }

















