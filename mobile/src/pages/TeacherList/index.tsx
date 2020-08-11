import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import {
  TextInput,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';

import styles from './styles';

import PageHeader from '../../componentes/PageHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';

import api from '../../services/api';

function TeacheList() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');
  const [teacherList, setTeacherList] = useState([]);
  const [favoritedList, setFavoritedList] = useState<Array<number>>([]);

  useEffect(() => {
    updateFavoritedTeachers;
  }, []);

  async function updateFavoritedTeachers() {
    const favoritedJson = await AsyncStorage.getItem('favoritedTeachers');
    if (favoritedJson !== null) {
      setFavoritedList(JSON.parse(favoritedJson));
    }
  }

  async function handleSearchBtn() {
    const response = await api.get('classes', {
      params: {
        subject: 'Biologia',
        week_day: 0,
        time: '00:01',
      },
    });

    setTeacherList(response.data);
  }

  function handleShowFilterClick() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleToggleFavorited(id: number) {
    if (favoritedList.includes(id)) {
      await AsyncStorage.setItem(
        'favoritedTeachers',
        JSON.stringify(favoritedList.filter((value) => value !== id))
      );
    } else {
      await AsyncStorage.setItem(
        'favoritedTeachers',
        JSON.stringify([...favoritedList, id])
      );
    }
    const favoritedJson = await AsyncStorage.getItem('favoritedTeachers');
    console.log(favoritedJson);

    updateFavoritedTeachers();
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        rightComponent={
          <BorderlessButton
            onPress={handleShowFilterClick}
            style={styles.filterIconContainer}
          >
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              onChangeText={(text) => setSubject(text)}
              value={subject}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  onChangeText={(text) => setWeekday(text)}
                  value={week_day}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual a horário?"
                  placeholderTextColor="#c1bccc"
                  onChangeText={(text) => setTime(text)}
                  value={time}
                />
              </View>
            </View>
            <RectButton style={styles.searchBtn} onPress={handleSearchBtn}>
              <Text style={styles.searchBtnText}>Procurar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      >
        {teacherList.map((teacheItem: Teacher, index) => {
          return (
            <TeacherItem
              key={index}
              teacherConfig={teacheItem}
              isFavorited={favoritedList.includes(teacheItem.id)}
              onToggleFavorited={() => handleToggleFavorited(teacheItem.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacheList;
