import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions , ScrollView } from 'react-native';

import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Webview from './../Component/WebView';

import FirstItem from './../Component/FirstItem';

import Products from './../Component/Products';

import { List, Checkbox } from 'react-native-paper';



class HamburgerIcon extends Component {



  toggleDrawer = () => {

    //console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();

  }

  render() {


    return (

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

          <Image
            source={require('./../img/hamburger.png')}
            style={{ width: 25, height: 25, marginLeft: 330 }}
          />

        </TouchableOpacity>

      </View>

    );


  }
}

class Custom_Side_Menu extends Component {



  render() {

    return (
      <ScrollView>
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
            onPress={() => { this.props.navigation.navigate('FirstItem') }}
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
      
      

      //  <View style={styles.sideMenuContainer}>

      //   <Image 
      //     source={require('./../img/reza.png')}
      //     style={styles.sideMenuProfileIcon} />

      //      <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

      //       <View style={{width: '100%'}}>

      //         <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

      //           <Image 
      //             source={require('./../img/social.png') }
      //             style={styles.sideMenuIcon} />

      //              <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('FirstItem') }} > صفحه نخست </Text>


      //          </View>

      //          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

      //              <Image source={require('./../img/promotions.png')}
      //              style={styles.sideMenuIcon} />

      //                 <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Webview') }} > مشاهده سایت </Text>

      //          </View> 

      //          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

      //             <Image 
      //               source={require('./../img/outbox.png')} 
      //               style={styles.sideMenuIcon} />

      //                   <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > برنامه ها </Text>

      //           </View> 


      //         </View>

      //            <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />


      //      </View>
    );
  }
}


class MainActivity extends Component {

  // constructor(props) {

  //   super(props);

  //   YellowBox.ignoreWarnings([
  //     'Warning: componentWillMount is deprecated',
  //     'Warning: componentWillReceiveProps is deprecated',
  //   ]);

  // }

  render() {
    return (
      <FirstItem />

    );
  }
}

class SecondActivity extends Component {

  // constructor(props) {

  //   super(props);

  //   YellowBox.ignoreWarnings([
  //     'Warning: componentWillMount is deprecated',
  //     'Warning: componentWillReceiveProps is deprecated',
  //   ]);

  // }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 23 }}> This is Activity - 2 </Text>

      </View>
    );
  }
}

class ThirdActivity extends Component {

  // constructor(props) {

  //   super(props);

  //   YellowBox.ignoreWarnings([
  //     'Warning: componentWillMount is deprecated',
  //     'Warning: componentWillReceiveProps is deprecated',
  //   ]);

  // }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 23 }}> This is Activity - 3 </Text>

      </View>
    );
  }
}

const FirstItem_StackNavigator = StackNavigator({
  First: {

    screen: MainActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'MosioGroup',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});


const SecondActivity_StackNavigator = StackNavigator({
  Second: {
    screen: SecondActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'SecondActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});


const ThirdActivity_StackNavigator = StackNavigator({
  Third: {
    screen: ThirdActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'ThirdActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff',
    })
  },
});

export default MyDrawerNavigator = DrawerNavigator({



  FirstItem: {
    screen: FirstItem_StackNavigator
  },

  SecondStack: {
    screen: SecondActivity_StackNavigator
  },

  ThirdStack: {
    screen: ThirdActivity_StackNavigator
  },
  Webview: {
    screen: Webview
  }

},


  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
    drawerPosition: 'right',

  });




const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: 20,
      }
    }),
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sideMenuContainer: {

    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },

  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2
  },

  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 20

  },

  menuText: {

    fontSize: 15,
    color: '#222222',

  }

});
