import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter
    };
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  
  render() {
    return (
      <View>
        <Text>Current Count: {this.state.counter}</Text>
        <Button title = {"Click Me!"} onPress = {this.clickHandler} />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <CounterButton counter={0} />
        <CounterButton counter={1} />
        <CounterButton counter={2} />
        <CounterButton counter={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
