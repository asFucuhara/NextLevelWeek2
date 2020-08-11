import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../componentes/TeacherItem';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos"/>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      >
        {/* <TeacherItem />
        <TeacherItem />
        <TeacherItem /> */}
      </ScrollView>
    </View>
  );
}

export default Favorites;
