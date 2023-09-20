/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHomeactive,
  IconHome,
  IconProfileActive,
  IconProfile,
  IconJerseyActive,
  IconJersey,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({index, isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeactive /> : <IconHome />;
    }

    if (label === 'Jersey') {
      return isFocused ? <IconJerseyActive /> : <IconJersey />;
    }

    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
  }),
});
