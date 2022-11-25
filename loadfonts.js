import * as Font from "expo-font";
import { useFonts, Cabin_400Regular, Cabin_700Bold  } from '@expo-google-fonts/cabin';
import { DaysOne_400Regular } from '@expo-google-fonts/days-one';
 
export default useFonts = async () =>
  await Font.loadAsync({
    DaysOne_400Regular,
    Cabin_400Regular,
    Cabin_700Bold 
  });