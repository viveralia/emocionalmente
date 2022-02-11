import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import {
  Box,
  Heading,
  Text,
  Button,
  ScrollView,
  FormControl,
  Input,
  VStack,
  FlatList,
} from "native-base";
import { FC } from "react";
import { useForm, Controller, Resolver } from "react-hook-form";

import { createEntries } from "../actions/entries.actions";
import { useAppDispatch } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = () => {
  const dispatch = useAppDispatch();

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

  const pets = [
    { name: "momma", id: 1 },
    { name: "momma1", id: 2 },
    { name: "momma2", id: 3 },
    { name: "momma3", id: 4 },
    { name: "momma4", id: 5 },
    { name: "momma5", id: 6 },
    { name: "momma6", id: 7 },
    { name: "momma7", id: 8 },
    { name: "momma8", id: 9 },
    { name: "momma9", id: 10 },
  ];

  return (
    <VStack flex={1} alignItems="center" justifyContent="space-between">
      <ScrollView paddingX={4} paddingY={8}>
        <Text mb="2">Hoy, 8 de enero de 2022</Text>
        <Heading mb="4">¿Cómo me siento?</Heading>
        {/* Emotion */}
        <FlatList
          numColumns={3}
          data={pets}
          renderItem={({ item }) => (
            <Box marginX={2} marginY={2} width="20" height="20" bg="brand">
              <Text>{item.name}</Text>
            </Box>
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
    </VStack>
  );
};

export default CreateEntryScreen;
