import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { FC, useEffect, useState } from "react";

import RootNavigator from "./src/navigators/RootNavigator";
import { fonts, lightTheme } from "./src/themes";

const App: FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const bootUp = async () => {
      try {
        await Font.loadAsync(fonts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    };

    bootUp();
  }, []);

  if (!isReady) return <AppLoading />;

  return (
    <NativeBaseProvider theme={lightTheme}>
      <StatusBar style="auto" />
      <RootNavigator />
    </NativeBaseProvider>
  );
};

export default App;
