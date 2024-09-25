import { selectExampleIsAuth } from '@/store/selectors';
import { useSelector } from 'react-redux';
import PrivateStack from '../Stacks/PrivateStack';
import PublicStack from '../Stacks/PublicStack';

interface AppNavigationProps {}

const AppNavigation: React.FC<AppNavigationProps> = () => {
  const isAuth = useSelector(selectExampleIsAuth);
  return <>{isAuth ? <PrivateStack /> : <PublicStack />}</>;
};

export default AppNavigation;
