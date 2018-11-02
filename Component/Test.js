import React,{component} from 'react';

import {View} from 'react-native';

import {createStackNavigator} from 'react-navigation';

export default class Test extends component{
    render(){
        const { navigate } = this.props.navigation;

        return(
            <View>
                Hello
            </View>
        )
    }
} 
