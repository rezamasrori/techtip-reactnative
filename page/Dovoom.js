import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
 
import { DrawerNavigator , StackNavigator  } from 'react-navigation';
 
 
class HamburgerIcon extends Component {
 
  toggleDrawer = () => {
 
    console.log(this.props.navigationProps);
 
    this.props.navigationProps.toggleDrawer();
 
  }
 
  render() {
 
    return (
 
      <View style={{ flexDirection: 'row' }}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
 
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
 
        </TouchableOpacity>
 
      </View>
 
    );
 
 
  }
}
 
class Custom_Side_Menu extends Component {
 
 render() {
 
 return (
 
 <View style={styles.sideMenuContainer}>
 
   <Image 
     source={require('./../img/reza.png')}
     style={styles.sideMenuProfileIcon} />
 
     <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
 
      <View style={{width: '100%'}}>
 
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
  
           <Image 
            source={{ uri: 'http://reactapp.ir/wp-content/uploads/social.jpg' }}
             style={styles.sideMenuIcon} />
 
             <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('First') }} > First Activity </Text>
 
 
         </View>
 
         <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
             <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg' }}
             style={styles.sideMenuIcon} />

                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Second') }} > Second Activity </Text>
 
         </View> 
 
         <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
 
            <Image 
              source={{ uri: 'http://reactapp.ir/wp-content/uploads/outbox.jpg' }} 
              style={styles.sideMenuIcon} />

                  <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Third Activity </Text>
 
          </View> 
 
 
        </View>
 
           <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />
 
 
     </View>
   );
  }
}
 
 
class MainActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> This is Activity - 1 </Text>
 
      </View>
    );
  }
}
 
class SecondActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> This is Activity - 2 </Text>
 
      </View>
    );
  }
}
 
class ThirdActivity extends Component {
 
  constructor(props) {
 
    super(props);
 
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={{ fontSize: 23 }}> This is Activity - 3 </Text>
 
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = StackNavigator({
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
 
export default Dovoom = DrawerNavigator({
  MainStack: {
    screen: FirstActivity_StackNavigator
  },
 
  SecondStack: {
    screen: SecondActivity_StackNavigator
  },
 
  ThirdStack: {
    screen: ThirdActivity_StackNavigator
  }
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  });
 
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    ...Platform.select({
      ios :{
        paddingTop:20,
      },
      android:{
        paddingTop:20,
      }
    }),
    backgroundColor:'skyblue',
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
    borderRadius: 150/2
  },
 
  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 28, 
    height: 28, 
    marginRight: 10,
    marginLeft: 20
    
  },
 
  menuText:{
 
    fontSize: 15,
    color: '#222222',
    
  }
 
});
