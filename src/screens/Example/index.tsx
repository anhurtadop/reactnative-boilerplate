import { exampleAction, setAuth } from '@/store/example/action';
import { selectExampleName } from '@/store/selectors';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

export interface ExampleProps {}
const Example: React.FC<ExampleProps> = () => {
  const name = useSelector(selectExampleName);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          const newName = getRandomName();
          dispatch(exampleAction(newName));
        }}
        title="Change name"
      />
      <Text>{name}</Text>
      <Button
        onPress={() => {
          dispatch(setAuth(true));
        }}
        title="Sign in"
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

export default Example;
