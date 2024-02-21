import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

import { Loading } from "@/components/Loading";
import { Routes } from "@/navigation/routes";

export default function App() {
  const [fontLoaded] = useFonts({
    "Sora-Thin": require("@/assets/fonts/Sora-Thin.ttf"),
    "Sora-ExtraLight": require("@/assets/fonts/Sora-ExtraLight.ttf"),
    "Sora-Light": require("@/assets/fonts/Sora-Light.ttf"),
    "Sora-Regular": require("@/assets/fonts/Sora-Regular.ttf"),
    "Sora-Medium": require("@/assets/fonts/Sora-Medium.ttf"),
    "Sora-SemiBold": require("@/assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Bold": require("@/assets/fonts/Sora-Bold.ttf"),
    "Sora-ExtraBold": require("@/assets/fonts/Sora-ExtraBold.ttf"),
  });

  if(!fontLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <SafeAreaView> */}
        <Routes />
      {/* </SafeAreaView> */}
    </>
  );
}