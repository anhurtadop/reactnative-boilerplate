import { setAuth } from '@/store/example/action';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';

export interface AuthedExampleProps {}
const AuthedExample: React.FC<AuthedExampleProps> = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>SIGNED IN</Text>
      <Button
        onPress={() => {
          dispatch(setAuth(false));
        }}
        title="Sign out"
      />
    </View>
  );
};

export default AuthedExample;
