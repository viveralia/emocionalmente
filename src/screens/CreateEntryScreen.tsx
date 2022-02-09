/* eslint-disable no-console */
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Box, Text, Button } from "native-base";
import { FC, Fragment, useEffect, useState } from "react";
import { TextInput } from "react-native";

import { createEntry, getEntries } from "../actions/entry.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = () => {
  const [emotion, setEmotion] = useState("");
  const [description, setDescription] = useState("");
  const [bodyExpression, setBodyExpression] = useState("");

  const { error, isLoading, entries } = useAppSelector((state) => state.entry);

  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(createEntry({ emotion, description, bodyExpression }));
    console.log(entries);
  };

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  return (
    <Box safeArea p={5} flex={1} alignItems="center" justifyContent="center">
      <Box mb={4}>
        <Text>Entries</Text>
        {entries.length ? (
          entries.map((entry) => (
            <Fragment key={entry.id}>
              <Text>{entry.emotion}</Text>
              <Text>{entry.description}</Text>
              <Text>{entry.bodyExpression}</Text>
              <Text>{JSON.stringify(entry.createdAt)}</Text>
              {/* <Text>{entry.createdAt.format("YYYY-MM-DD")}</Text> */}
            </Fragment>
          ))
        ) : (
          <Text>No entries available</Text>
        )}
      </Box>
      <TextInput placeholder="Emoción" value={emotion} onChangeText={(text) => setEmotion(text)} />
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        placeholder="Expresion corporal"
        value={bodyExpression}
        onChangeText={(text) => setBodyExpression(text)}
      />
      <Button onPress={handlePress}>Agregar</Button>
    </Box>
  );
};

export default CreateEntryScreen;
