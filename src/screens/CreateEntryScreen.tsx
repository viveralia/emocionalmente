import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Box, Heading, Button, ScrollView } from "native-base";
import { FC, useState } from "react";
import { TextInput } from "react-native";

import { createEntry } from "../actions/entry.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = () => {
  const [emotion, setEmotion] = useState("");
  const [description, setDescription] = useState("");
  const [bodyExpression, setBodyExpression] = useState("");

  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(createEntry({ emotion, description, bodyExpression }));
  };

  return (
    <ScrollView>
      <Box safeArea p={5} flex={1} alignItems="center" justifyContent="center">
        <Heading>Crear nueva entrada</Heading>
        <TextInput
          placeholder="Emoción"
          value={emotion}
          onChangeText={(text) => setEmotion(text)}
        />
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
    </ScrollView>
  );
};

export default CreateEntryScreen;
