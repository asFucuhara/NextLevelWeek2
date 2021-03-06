import React from 'react';

import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateStudyPage() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>Oque deseja fazer?</Text>
      </Text>
      <View style={styles.buttonContainer}>
        <RectButton
          onPress={handleNavigateStudyPage}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon}></Image>
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClasses}></Image>
          <Text style={styles.buttonText}>Dar Aula</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de X conexões já realizadas <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
