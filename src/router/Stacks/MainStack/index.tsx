import { selectExampleIsAuth } from '@/store/selectors';
import { NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PrivateStack, { PrivateStackParamList } from '../PrivateStack';
import PublicStack, { PublicStackParamList } from '../PublicStack';

export type StackParamList = {
  PublicStack: NavigatorScreenParams<PublicStackParamList>;
  PrivateStack: NavigatorScreenParams<PrivateStackParamList>;
};

const Stack = createNativeStackNavigator<StackParamList>();
const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

interface MainStackProps {}
const MainStack: React.FC<MainStackProps> = () => {
  const isAuth = useSelector(selectExampleIsAuth);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  useEffect(() => {
    if (isAuth) {
      navigation.navigate({
        name: 'PrivateStack',
        params: {
          screen: 'Home',
        },
      });
    } else {
      navigation.navigate({
        name: 'PublicStack',
        params: {
          screen: 'Home',
        },
      });
    }
  }, [isAuth, navigation]);
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS} initialRouteName="PublicStack">
      <Stack.Screen name="PublicStack" component={PublicStack} />
      <Stack.Screen name="PrivateStack" component={PrivateStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
