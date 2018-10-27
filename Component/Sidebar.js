import React, {Component} from 'react';

import { StyleSheet, ScrollView } from 'react-native';

import { List} from 'react-native-paper';

import Article from './Article';

import {createStackNavigator} from 'react-navigation';

import Webview from './WebView';


class sidebar extends Component{
    
constructor(props){
    super(props);

}

    render(){

        return(
            <ScrollView style={styles.sidebar}>
                    <List.Accordion
            title="Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            >
            <List.Item title="مشاهده سایت"
            onPress={() => { this.props.navigation.navigate('Webview') }}
            />
            <List.Item title="Second item" />
            </List.Accordion>
                <List.Accordion
                title="Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                >
                <List.Item 
                title="صفحه اول"
                onPress={() => { this.props.navigation.navigate('Article') }}
                />
                <List.Item title="Second item" />
                </List.Accordion>
                <List.Accordion
            title="Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            >
            <List.Item title="First item" />
            <List.Item title="Second item" />
            </List.Accordion>
                <List.Accordion
                title="Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
                </List.Accordion>
    </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    sidebar:{

        flex:1,
        backgroundColor:"#fff",
        paddingHorizontal:10,
    },  

})
export default App = createStackNavigator({
    Home : {screen : sidebar
    },
    
    Webview :{
        screen : Webview,
        navigationOptions:{
            header : null,
        }
    },
    Article :{
        screen :Article,
        navigationOptions :{
            header :null,
        }
    }


})