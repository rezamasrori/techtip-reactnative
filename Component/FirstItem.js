import React ,{Component} from 'React';

import {View , StyleSheet , Text , Platform , FlatList} from 'react-native';

import Products from './Products';

export default class FirstItem_StackNavigator extends Component {




    constructor(props){
        super(props);

        this.state = {
            Products : [],
            page : 1,
        }

        this.getProductRequest();
    }
 
            render(){
                return(
                    <View style={{
                        backgroundColor: 'skyblue',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >

                        <Text>
                            Hi
                        </Text>

                        {/* <FlatList 
                            data={this.state.Products}
                            renderItem = {this.renderItem}
                        /> */}

                    </View>
                );
            }


    renderItem(item)
    {
        return <Products Products={item}/>
    }




}

