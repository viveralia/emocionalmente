import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import {
  Heading,
  Text,
  Button,
  FormControl,
  Input,
  FlatList,
  Box,
  Popover,
  IconButton,
} from "native-base";
import { FC, useState } from "react";
import { useForm, Controller, Resolver } from "react-hook-form";
import { TouchableOpacity } from "react-native";

import { createEntries } from "../actions/entries.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";
import { getEmotionsByAvatar } from "../utils/emotions";

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = () => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const onSubmit = (data: FormValues) => {
    dispatch(
      createEntries({
        emotion: data.emotion,
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

  const getHeader = () => {
    return (
      <Box>
        {" "}
        <Text mb="2">Hoy, 8 de enero de 2022</Text>
        <Box flex={1} flexDirection={"row"} alignItems={"center"}>
          <Heading>¿Cómo me siento?</Heading>
          <Popover
            trigger={({ onPress: openPopOver, ...triggerProps }) => {
              return (
                <IconButton {...triggerProps} onPress={openPopOver}>
                  <Ionicons name="ios-help-circle-outline" size={24} color="#0891B2" />
                </IconButton>
              );
            }}
          >
            <Popover.Content accessibilityLabel="Instrucciones" w="56">
              <Popover.Arrow />
              <Popover.CloseButton />
              <Popover.Header>Instrucciones</Popover.Header>
              <Popover.Body>
                {"Mantén presionada una emoción para consultar su descripción"}
              </Popover.Body>
            </Popover.Content>
          </Popover>
        </Box>
      </Box>
    );
  };

  const getFooter = () => {
    return (
      <Box>
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
        <Button my={6} mx={4} onPress={handleSubmit(onSubmit)}>
          Guardar
        </Button>
      </Box>
    );
  };

  // eslint-disable-next-line no-console
  // console.log(selectedId);
  return (
    <FlatList
      numColumns={4}
      mb="6"
      data={getEmotionsByAvatar(profile!.avatar)}
      renderItem={({ item: { EmotionSvg, name, id, description } }) => (
        <Popover
          trigger={({ onPress: openPopOver, ...triggerProps }) => {
            return (
              <TouchableOpacity
                {...triggerProps}
                onPress={() => setSelectedId(id)}
                onLongPress={openPopOver}
                activeOpacity={0.5}
              >
                <Box
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={id == selectedId ? { backgroundColor: "#FBBF24" } : null}
                  borderRadius={"full"}
                >
                  <EmotionSvg width="80" height="80" />
                </Box>
                <Text textAlign={"center"} fontSize="xs">
                  {name ? name : "emoción"}
                </Text>
              </TouchableOpacity>
            );
          }}
        >
          <Popover.Content accessibilityLabel="Delete Customerd" w="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>{name ? name : "emoción"}</Popover.Header>
            <Popover.Body>
              {description
                ? description
                : "Descripción de la emoción. Donec in blandit neque. Duis congue placerat metus id porttitor. Praesent a purus eu nunc efficitur congue nec non."}
            </Popover.Body>
          </Popover.Content>
        </Popover>
      )}
      extraData={selectedId}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={getHeader}
      ListFooterComponent={getFooter}
    />
  );
};

export default CreateEntryScreen;
