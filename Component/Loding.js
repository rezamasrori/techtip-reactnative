import React, { Component } from "react";
import { View, Animated, Easing } from "react-native";

export default class Loding extends Component {
  state = { spinValue: new Animated.Value(0) };

  componentDidMount() {
    let { spinValue } = this.state;
    Animated.timing(spinValue, {
      duration: 4000,
      toValue: 1,
      easing: Easing.linear()
    }).start();
  }

  render() {
    let { spinValue } = this.state;
    let spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "760deg"]
    });
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Animated.Image
          source={require("./../img/techtip.png")}
          style={{
            transform: [{ rotate: spin }],
            height: 200,
            width: 225
          }}
        />
      </View>
    );
  }
}
