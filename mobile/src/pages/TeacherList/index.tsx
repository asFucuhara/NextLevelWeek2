import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';

function TeacheList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacheList;
