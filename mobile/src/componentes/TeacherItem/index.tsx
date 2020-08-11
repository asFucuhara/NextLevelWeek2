import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface ToggleFavorited {
  (): any;
}

interface TeacherItemProps {
  teacherConfig: Teacher;
  isFavorited: boolean;
  onToggleFavorited: ToggleFavorited;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teacherConfig,
  isFavorited,
  onToggleFavorited,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {/* <Image style={styles.avatar} source={{ uri: teacherConfig.avatar }} /> */}
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacherConfig.name}</Text>
          <Text style={styles.subject}>{teacherConfig.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacherConfig.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'       '}
          <Text>{teacherConfig.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              isFavorited ? styles.favorited : styles.notFavorited,
            ]}
            onPress={onToggleFavorited}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={() => {
              console.log('todo implement');
            }}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
