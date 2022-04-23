/* eslint-disable no-console */
/* eslint-disable react-native/no-inline-styles */
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { format, formatRelative, isSameDay } from "date-fns";
import { es } from "date-fns/locale";
import {
  Heading,
  Text,
  Button,
  FormControl,
  TextArea,
  FlatList,
  Box,
  Popover,
  IconButton,
  KeyboardAvoidingView,
} from "native-base";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

import { createEntries } from "../actions/entries.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";
import { esShortRelativeLocale } from "../utils/dates";
import { getEmotionsByAvatar } from "../utils/emotions";
import { getProperSize } from "../utils/size";

type FormValues = {
  description: string;
  bodyExpression: string;
  emotion: string | null;
};

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const avatarSize = getProperSize(SCREEN_HEIGHT, 0.1, 80);

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const { date } = route.params as EntriesStackParamList["CreateEntry"];
  const today = new Date();
  const isToday = isSameDay(date, today);

  const onSubmit = (data: FormValues) => {
    dispatch(
      createEntries({
        emotion: data.emotion,
        description: data.description,
        bodyExpression: data.bodyExpression,
        // date:
      })
    );
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      emotion: null,
      description: "",
      bodyExpression: "",
    },
  });

  const getHeader = () => {
    return (
      <Box mt={2}>
        <Text mb="2">
          {formatRelative(date, new Date(), { locale: esShortRelativeLocale })
            .charAt(0)
            .toUpperCase()}
          {formatRelative(date, new Date(), { locale: esShortRelativeLocale }).slice(1)}
          {", "}
          {format(date, "d 'de' MMM 'de' yyyy", { locale: es })}
        </Text>
        <Box flex={1} flexDirection={"row"} alignItems={"center"}>
          <Heading>{isToday ? "¿Cómo me siento?" : "¿Cómo me sentí?"}</Heading>
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
      <Box marginTop={0}>
        <Box mb={6}>
          <FormControl isInvalid={"description" in errors}>
            <FormControl.ErrorMessage>{errors.emotion?.message}</FormControl.ErrorMessage>
          </FormControl>
        </Box>

        {/* Description */}
        <FormControl isInvalid={"description" in errors}>
          <FormControl.Label>
            <Heading size="xs">¿Qué me hizo sentir así?</Heading>
          </FormControl.Label>

          <Controller
            control={control}
            name="description"
            rules={{ required: { value: true, message: "Una descripción es requerida" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextArea
                borderColor="white"
                bg="white"
                placeholder="Acciones o pensamientos que noté."
                value={value}
                fontSize="14px"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          <FormControl.ErrorMessage>{errors.description?.message}</FormControl.ErrorMessage>
        </FormControl>

        {/* Body Expression */}
        <FormControl isInvalid={"bodyExpression" in errors} marginTop={4}>
          <FormControl.Label>
            <Heading size="xs">
              {isToday ? "¿Cómo lo expresa mi cuerpo?" : "¿Cómo lo expresó mi cuerpo?"}
            </Heading>
          </FormControl.Label>
          <Controller
            control={control}
            name="bodyExpression"
            rules={{ required: { value: true, message: "Este campo es requerido" } }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextArea
                borderColor="white"
                bg="white"
                placeholder={
                  isToday
                    ? "La sensación física que estoy experimentando."
                    : "La sensación física que estoy experimenté."
                }
                value={value}
                fontSize="14px"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          <FormControl.ErrorMessage>{errors.bodyExpression?.message}</FormControl.ErrorMessage>
        </FormControl>
        <Button my={6} onPress={handleSubmit(onSubmit)}>
          Guardar
        </Button>
      </Box>
    );
  };

  return (
    <KeyboardAvoidingView
      flex={1}
      h={{
        base: "400px",
        lg: "auto",
      }}
      behavior="position"
    >
      <FormControl>
        <Controller
          control={control}
          name="emotion"
          rules={{ required: { value: true, message: "Selecciona una emoción" } }}
          render={({ field: { onChange, value } }) => (
            <FlatList
              paddingX={4}
              numColumns={4}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              data={getEmotionsByAvatar(profile!.avatar)}
              renderItem={({ item: { EmotionSvg, name, description } }) => (
                <Popover
                  trigger={({ onPress: openPopOver, ...triggerProps }) => {
                    return (
                      <TouchableOpacity
                        {...triggerProps}
                        onPress={() => onChange(name)}
                        onLongPress={openPopOver}
                        activeOpacity={0.5}
                      >
                        <Box
                          style={name == value ? { backgroundColor: "#FBBF24" } : null}
                          borderRadius={"full"}
                        >
                          <EmotionSvg width={avatarSize} height={avatarSize} />
                        </Box>
                        <Text textAlign={"center"} fontSize="xs" textTransform={"capitalize"}>
                          {name ? name : "emoción"}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                >
                  <Popover.Content accessibilityLabel="Descripción de emoción" w="56">
                    <Popover.Arrow />
                    <Popover.CloseButton />
                    <Popover.Header>
                      {name ? name.charAt(0).toUpperCase() + name.slice(1) : "Emoción"}
                    </Popover.Header>
                    <Popover.Body>
                      {description
                        ? description
                        : "Descripción de la emoción. Donec in blandit neque. Duis congue placerat metus id porttitor. Praesent a purus eu nunc efficitur congue nec non."}
                    </Popover.Body>
                  </Popover.Content>
                </Popover>
              )}
              keyExtractor={(item) => item.id.toString()}
              ListHeaderComponent={getHeader}
              ListFooterComponent={getFooter}
            />
          )}
        />
        <FormControl.ErrorMessage>{errors.emotion?.message}</FormControl.ErrorMessage>
      </FormControl>
    </KeyboardAvoidingView>
  );
};

export default CreateEntryScreen;
