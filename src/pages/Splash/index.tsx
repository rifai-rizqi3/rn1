import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Logo1, Logo2} from '../../assets';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('MainApp');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.pages}>
        <Logo1 />
        <View style={styles.ilustrasi}>
          <Logo2 />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
