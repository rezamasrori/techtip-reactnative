import React ,{Component} from 'react';

import {Text , StyleSheet , View, TextInput, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation';

import Loding from './Loding';

import Lod from './Lod';



 class Login extends Component {

    static navigationOptions = {
        title: 'ثبت نام کنید',

        
        headerStyle :{
            backgroundColor :'#A9A9A9',


        },
        headerTintColor: '#696969',
        headerTitleStyle : {
            fontWeight : 'bold',
 

        } 
          };

    render() {

        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                    
                    <Text style={styles.title}> ورود به اکانت</Text>
                    <View style={styles.box}>
                        <Text style={styles.lable}>نام ونام خانوادگی :</Text>
                        <TextInput style={styles.input} underlineColorAndroid='transparent'/>
                        <Text style={styles.lable}>رمز :</Text>
                        <TextInput secureTextEntry={true} style={styles.input} />

                        <TouchableOpacity style={styles.btn}
                        onPress={() => navigate('Lod')}
                        >
                            <Text style={styles.btnText}>ورود</Text>
                        </TouchableOpacity>

                    </View>

            </View>
        );
    }
}


export default App = createStackNavigator ({
    Home : {screen : Login
    },
    Loding : {
        screen : Loding ,
        navigationOptions: {
            header: null,
          }
        },
    Lod: {
        screen : Lod,
        navigationOptions: {
            header: null,
          }
    }
})


const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    title: {
        fontSize: 25,
        color: '#1abc9c',
    },
    box: {
        backgroundColor: 'white',
        marginTop: 30,
        borderRadius: 5,
        elevation: 2,
        width: '80%',
        padding: 15,
    },
    input: {
        marginBottom: 40,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 4,
    },
    btn: {
        backgroundColor: '#1abc9c',
        padding: 13,
        borderRadius: 100,
        marginRight: 15,
        marginLeft: 15,
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
    }
});