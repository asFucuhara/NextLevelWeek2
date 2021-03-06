import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
  rightComponent?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { navigate } = useNavigation();
  function handleGoback() {
    navigate('Landing');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoback}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode={'contain'} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{props.title}</Text>

        {props.rightComponent}
      </View>
      {props.children}
    </View>
  );
};

export default PageHeader;
