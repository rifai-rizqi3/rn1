/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {colors, responsiveHeight} from '../../../utils';
import {IconCari, IconKeranjang} from '../../../assets';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <View style={styles.searchSection}>
            <IconCari />
            <TextInput placeholder="Cari Jersey ..." style={styles.input} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(60),
  },
  input: {
    fontSize: 16,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 7,
    alignItems: 'center',
    paddingLeft: 10,
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
});
