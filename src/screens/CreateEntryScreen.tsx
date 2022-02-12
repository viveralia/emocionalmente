import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Heading, Text, Button, ScrollView, FormControl, Input, FlatList } from "native-base";
import { FC } from "react";
import { useForm, Controller, Resolver } from "react-hook-form";
import { TouchableOpacity } from "react-native";

import { createEntries } from "../actions/entries.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";
import { getEmotionsByAvatar } from "../utils/emotions";

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = () => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);

  const onSubmit = (data: FormValues) => {
    dispatch(
      createEntries({
        emotion: "feliz",
        description: data.description,
        bodyExpression: data.bodyExpression,
      })
    );
  };

  type FormValues = {
    description: string;
    bodyExpression: string;
    emotion: string;
  };

  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.description && values.bodyExpression ? values : {},
      errors:
        !values.description || !values.bodyExpression
          ? {
              description: {
                type: "required",
                message: "Una descripción es requerida",
              },
              bodyExpression: {
                type: "required",
                message: "La sensación fisica es requerida",
              },
            }
          : {},
    };
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    defaultValues: {
      emotion: "feliz",
      description: "",
      bodyExpression: "",
    },
  });

  return (
    <ScrollView flex={1}>
      <Text mb="2">Hoy, 8 de enero de 2022</Text>
      <Heading mb="4">¿Cómo me siento?</Heading>
      {/* Emotion */}
      <FlatList
        numColumns={4}
        data={getEmotionsByAvatar(profile!.avatar)}
        renderItem={({ item: { EmotionSvg, name } }) => (
          <TouchableOpacity>
            <EmotionSvg width="80" height="80" />
            <Text>{name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Description */}
      <FormControl isInvalid={"description" in errors}>
        <FormControl.Label>
          <Heading size="xs">¿Qué me hizo sentir así?</Heading>
        </FormControl.Label>

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              borderColor="white"
              bg="white"
              placeholder="Acciones o pensamientos que noté."
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              height="100"
            />
          )}
        />
        <FormControl.ErrorMessage>{errors.description?.message}</FormControl.ErrorMessage>
      </FormControl>
      {/* Body Expression */}
      <FormControl isInvalid={"bodyExpression" in errors}>
        <FormControl.Label>
          <Heading size="xs">¿Cómo lo expresa mi cuerpo?</Heading>
        </FormControl.Label>
        <Controller
          control={control}
          name="bodyExpression"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              borderColor="white"
              bg="white"
              placeholder="La sensación física que estoy experimentando."
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        <FormControl.ErrorMessage>{errors.bodyExpression?.message}</FormControl.ErrorMessage>
      </FormControl>
      <Button mb="4" mx={4} onPress={handleSubmit(onSubmit)}>
        Guardar
      </Button>
    </ScrollView>
  );
};

export default CreateEntryScreen;
