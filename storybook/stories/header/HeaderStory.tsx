import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderProps, Header} from '../../../src';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface HeaderStoryProps extends HeaderProps {}

export default function HeaderStory({
  title = 'TITLE',
  titleStyle,
  leftComponent,
  rightComponent,
  ...props
}: HeaderStoryProps) {
  return (
    <View style={styles.container}>
      <Header
        {...props}
        title={title}
        titleStyle={StyleSheet.flatten([styles.title, titleStyle])}
        leftComponent={
          leftComponent || <Icon style={styles.icon} name="th-list" />
        }
        rightComponent={
          rightComponent || <Icon style={styles.icon} name="home" />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
