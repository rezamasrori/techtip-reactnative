import React, { Component } from 'react';
import { Text, View , ActivityIndicator} from 'react-native';

export default class Avval extends Component {

  render() {
      
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
        <ActivityIndicator
                    // color={'red'}
                    // //  size = {'large'}
          />
            </View>
    );
  }
}