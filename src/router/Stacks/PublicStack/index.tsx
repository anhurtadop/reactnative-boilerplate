import Example from '@/screens/Example';
import OnlyDeeplinked, { OnlyDeeplinkedRouteParamList } from '@/screens/OnlyDeeplinked';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Home: undefined;
  Deeplinked: OnlyDeeplinkedRouteParamList;
};
const Stack = createNativeStackNavigator<PublicStackParamList>();
const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

interface PublicStackProps {}
const PublicStack: React.FC<PublicStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS} initialRouteName="Home">
      <Stack.Screen name="Home" component={Example} />
      <Stack.Screen name="Deeplinked" component={OnlyDeeplinked} />
    </Stack.Navigator>
  );
};

export default PublicStack;
