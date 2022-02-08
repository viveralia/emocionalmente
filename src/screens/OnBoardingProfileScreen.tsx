import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Text,
  Heading,
  FormControl,
  Input,
  Radio,
  VStack,
  ScrollView,
  KeyboardAvoidingView,
} from "native-base";
import { FC } from "react";
import { useForm, Controller, Resolver } from "react-hook-form";
import { Dimensions, Platform, SafeAreaView } from "react-native";

import { signUp } from "../actions/user.actions";
import { profileCharacters } from "../constants/emotions";
import { useAppDispatch } from "../hooks/redux";
import { RootStackParamList } from "../navigators/RootNavigator";
import { getProperSize } from "../utils/size";
import Logo from "./../components/Logo";

type FormValues = {
  name: string;
  avatar: "LUP" | "VALU";
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "El nombre es requerido",
          },
        }
      : {},
  };
};

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const avatarSize = getProperSize(SCREEN_HEIGHT, 0.2, 180);

const OnBoardingProfileScreen: FC<NativeStackScreenProps<RootStackParamList>> = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    defaultValues: {
      avatar: "LUP",
      name: "",
    },
  });

  const avatar = watch("avatar");

  const onSubmit = (data: FormValues) => {
    dispatch(signUp({ avatar: data.avatar, name: data.name }));
  };

  const { EmotionSvg } = profileCharacters[avatar]!;

  return (
    // TODO: Add Keyboard avoiding view functionality
    <VStack safeAreaTop bg="brand" flex={1} alignItems="center" justifyContent="space-between">
      <Box marginTop="12" height="1/3" justifyContent="space-between" pb={6}>
        <Box alignItems="center">
          <Logo />
        </Box>
        <Box alignItems="center" pt={2}>
          <EmotionSvg width={avatarSize} height={avatarSize} />
        </Box>
      </Box>
      <KeyboardAvoidingView
        flex={1}
        justifyContent="space-between"
        width="100%"
        background="darkBackground"
        borderTopLeftRadius="2xl"
        borderTopRightRadius="2xl"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView paddingX={4} paddingY={8}>
          <Heading mb="4">Mi perfil</Heading>
          <FormControl isInvalid={"name" in errors}>
            <FormControl.Label>
              <Heading size="xs">Mi nombre es:</Heading>
            </FormControl.Label>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  borderColor="white"
                  bg="white"
                  placeholder="Nombre"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              )}
            />
            <FormControl.ErrorMessage>{errors.name?.message}</FormControl.ErrorMessage>
            <FormControl.Label paddingTop={8}>
              <Heading size="xs">Mi avatar será:</Heading>
            </FormControl.Label>
            <Controller
              control={control}
              defaultValue="LUP"
              name="avatar"
              render={({ field: { onChange, name, value } }) => (
                <Radio.Group
                  name={name}
                  value={value}
                  onChange={(value) => {
                    onChange(value);
                  }}
                >
                  <Radio value="LUP" my={1}>
                    <Text bold> Lup </Text>
                    <Text>(hombre)</Text>
                  </Radio>
                  <Radio value="VALU" my={1}>
                    <Text bold> Valu </Text>
                    <Text>(mujer)</Text>
                  </Radio>
                </Radio.Group>
              )}
            />
          </FormControl>
        </ScrollView>
        <SafeAreaView>
          <Button mb="4" mx={4} onPress={handleSubmit(onSubmit)}>
            Comenzar
          </Button>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </VStack>
  );
};

export default OnBoardingProfileScreen;
