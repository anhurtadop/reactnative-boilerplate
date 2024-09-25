import Example from '@/screens/Example';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

interface PublicStackProps {}
const PublicStack: React.FC<PublicStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS} initialRouteName="Home">
      <Stack.Screen name="Home" component={Example} />
    </Stack.Navigator>
  );
};

export default PublicStack;
