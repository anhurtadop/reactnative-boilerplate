import useAwaitableSagaAction from '@/hooks/useAwaitableSagaAction';
import { getTime, setAuth } from '@/store/example/action';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';

export interface AuthedExampleProps {}
const AuthedExample: React.FC<AuthedExampleProps> = () => {
  const { t } = useTranslation();
  const { dispatchAction: dispatchGetTime, busy: busyGetTime } = useAwaitableSagaAction(getTime);
  const [timeString, setTimeString] = useState(t('slow-to-respond'));
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{t('signed-in')}</Text>
      <Button
        onPress={() => {
          dispatch(setAuth(false));
        }}
        title={t('sign-out-button')}
      />
      <Button
        onPress={async () => {
          const result = await dispatchGetTime();
          if (result.ok && result.data) {
            setTimeString(JSON.stringify(result.data));
          } else {
            setTimeString(String(result.message));
          }
        }}
        title={t('get-time-button')}
        disabled={busyGetTime}
      />
      <Text>
        {t('time-string')} {timeString}
      </Text>
    </View>
  );
};

export default AuthedExample;
