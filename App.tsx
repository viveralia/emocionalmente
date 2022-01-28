import "reflect-metadata";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { FC, useEffect, useState } from "react";
import { Provider as StoreProvider } from "react-redux";

import { getUserProfile } from "./src/actions/user.actions";
import { connectDatabase } from "./src/database/connect.db";
import RootNavigator from "./src/navigators/RootNavigator";
import { store } from "./src/store";
import { fonts, lightTheme } from "./src/themes";

const App: FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const bootUp = async () => {
      try {
        if (isReady) return;
        await Promise.all([connectDatabase(), Font.loadAsync(fonts)]);
        await store.dispatch(getUserProfile());
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    };

    bootUp();
  }, [isReady]);

  if (!isReady) return <AppLoading />;

  return (
    <NativeBaseProvider theme={lightTheme}>
      <StatusBar style="auto" />
      <StoreProvider store={store}>
        <RootNavigator />
      </StoreProvider>
    </NativeBaseProvider>
  );
};

export default App;
