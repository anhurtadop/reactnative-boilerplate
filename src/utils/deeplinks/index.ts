import { LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';

export const DeepLinkConfig: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['grandma-patient://'],
  getInitialURL: async () => {
    const url = await Linking.getInitialURL();
    return url;
  },

  subscribe: (listener: (url: string) => void) => {
    const onReceiveURL = ({ url }: { url: string }) => {
      listener(url);
    };
    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', onReceiveURL);
    return () => {
      linkingSubscription.remove();
    };
  },
  // config: deepLinks,
};
