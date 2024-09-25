import useAwaitableSagaAction from '@/hooks/useAwaitableSagaAction';
import { getTime, setAuth } from '@/store/example/action';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';

export interface AuthedExampleProps {}
const AuthedExample: React.FC<AuthedExampleProps> = () => {
  const { dispatchAction: dispatchGetTime, busy: busyGetTime } = useAwaitableSagaAction(getTime);
  const [timeString, setTimeString] = useState('');
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
      <Button
        onPress={async () => {
          const result = await dispatchGetTime();
          if (result.ok && result.data) {
            setTimeString(JSON.stringify(result.data));
          }
        }}
        title="Get Time"
        disabled={busyGetTime}
      />
      <Text>TIME STRING: {timeString}</Text>
    </View>
  );
};

export default AuthedExample;
