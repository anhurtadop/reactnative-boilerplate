import AuthedExample from '@/screens/AuthedExample';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

interface PublicStackProps {}
const PrivateStack: React.FC<PublicStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS} initialRouteName="Home">
      <Stack.Screen name="Home" component={AuthedExample} />
    </Stack.Navigator>
  );
};

export default PrivateStack;
