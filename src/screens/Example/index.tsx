import { StackParamList } from '@/router/Stacks/MainStack';
import { exampleAction, setAuth } from '@/store/example/action';
import { selectExampleName } from '@/store/selectors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

export interface ExampleProps extends NativeStackScreenProps<StackParamList> {}
const Example: React.FC<ExampleProps> = () => {
  const { t } = useTranslation();
  const name = useSelector(selectExampleName);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{t('start-text')}</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          const newName = getRandomName();
          dispatch(exampleAction(newName));
        }}
        title={t('change-name-button')}
      />
      <Text>{name}</Text>
      <Button
        onPress={() => {
          dispatch(setAuth(true));
        }}
        title={t('sign-in-button')}
      />
    </View>
  );
};

const names = [
  'Amelia',
  'Jasper',
  'Lila',
  'Rowan',
  'Felix',
  'Zara',
  'Silas',
  'Maya',
  'Theo',
  'Iris',
  'Orion',
  'Clara',
  'Hugo',
  'Sienna',
  'Quinn',
  'Leo',
  'Evangeline',
  'Nolan',
  'Tessa',
  'Asher',
];
const getRandomName = () => names[Math.floor(Math.random() * names.length)];

export default Example as React.FC;
