import { StackParamList } from '@/router/Stacks/MainStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export interface OnlyDeeplinkedRouteParamList {
  name: string;
}
export interface OnlyDeeplinkedProps extends NativeStackScreenProps<StackParamList> {}
const OnlyDeeplinked: React.FC<OnlyDeeplinkedProps> = (props) => {
  const { navigation, route } = props;
  const { t } = useTranslation();
  const routeParams = route.params ?? {};
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{t('screen-only-deeplinks')}</Text>
      <Button onPress={() => navigation.navigate('PublicStack', { screen: 'Home' })} title={t('go-home-button')} />
      <Text>
        {t('passed-params')} {JSON.stringify(routeParams)}
      </Text>
    </View>
  );
};

//  Hide the props since its used in the stacks
export default OnlyDeeplinked as React.FC;
