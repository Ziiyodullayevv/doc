  import { SplashScreen, Stack } from 'expo-router';
import '../global.css';
import { useFonts } from 'expo-font';
import {
  PlusJakartaSans_200ExtraLight,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync(); // Splash Screen avtomatik yo'qolishining oldini olish

const RootLayout = () => {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        setIsReady(true);
        await SplashScreen.hideAsync(); // Splash Screen ni yashirish
      }
    };
    prepare();
  }, [fontsLoaded]);

  if (!isReady) {
    return null; // Splash Screen hali ko'rinib turadi
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='carusel' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
