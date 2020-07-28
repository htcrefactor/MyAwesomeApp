import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet,  ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Text style={{ fontSize: 96 }}>Scroll Me Please</Text>
          <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />

          <Text style={{ fontSize: 96 }}>Scroll Me Please</Text>
          <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />

          <Text style={{ fontSize: 96 }}>Scroll Me Please</Text>
          <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />

          <Text style={{ fontSize: 96 }}>Scroll Me Please</Text>
          <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />

          <Text style={{ fontSize: 96 }}>Scroll Me Please</Text>
          <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />

          <Text style={{ fontSize: 96 }}>Scroll Me Please</Text>
          <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        </ScrollView>
        <StatusBar style="auto" />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});