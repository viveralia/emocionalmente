import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Box, Text } from "native-base";
import { FC, Fragment, useEffect, useState } from "react";
import { TextInput } from "react-native";

import { createTodo, getTodos } from "../actions/todos.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { RootStackParamList } from "../navigators/RootNavigator";

const OnBoardingWelcomeScreen: FC<NativeStackScreenProps<RootStackParamList>> = () => {
  const [name, setName] = useState("");

  const { error, isLoading, todos } = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(createTodo({ status: false, name }));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Box safeArea p={5}>
      <Box mb={4}>
        <Text>Todos</Text>
        {todos.length ? (
          todos.map((todo) => (
            <Fragment key={todo.id}>
              <Text>{todo.name}</Text>
              <Text>{todo.status}</Text>
            </Fragment>
          ))
        ) : (
          <Text>No todos available</Text>
        )}
      </Box>
      <TextInput placeholder="Name" value={name} onChangeText={(text) => setName(text)} />
      <Button onPress={handlePress}>Agregar</Button>
    </Box>
  );
};

export default OnBoardingWelcomeScreen;
