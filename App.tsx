import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

import nunitoRegular from "@fonts/nunito-sans.regular.ttf";
import nunitoBold from "@fonts/nunito-sans.bold.ttf";

import { ThemeProvider } from "styled-components";
import theme from "src/theme";

import { Loading } from "@components/Loading";
import { Routes } from "src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": nunitoRegular,
    "Nunito-Bold": nunitoBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
        animated
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
