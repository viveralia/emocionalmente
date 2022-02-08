import * as WebBrowser from "expo-web-browser";
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
  useToast,
} from "native-base";
import { FC } from "react";
import { Resolver, Controller, useForm } from "react-hook-form";
import { Dimensions } from "react-native";

import { updateUserProfile, logOut } from "../actions/user.actions";
import { profileCharacters } from "../constants/emotions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getProperSize } from "../utils/size";

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

const ProfileScreen: FC = () => {
  const _handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync("https://www.yadirapg.com/");
  };

  const dispatch = useAppDispatch();
  const toast = useToast();

  const { profile, error } = useAppSelector((state) => state.user);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    defaultValues: {
      avatar: profile?.avatar,
      name: profile?.name,
    },
  });

  const avatar = watch("avatar");

  const onSubmit = async (data: FormValues) => {
    if (profile!.avatar == data.avatar && profile!.name == data.name) return;
    dispatch(updateUserProfile({ avatar: data.avatar, name: data.name, id: profile!.id }));

    if (error) {
      toast.show({
        title: "Ocurrió un error",
        description: "Intentalo de nuevo más tarde",
        status: "error",
        mx: "4",
      });
    } else {
      toast.show({
        title: "Información actualizada",
        description: "Tu información ha sido actualizada exitosamente",
        status: "success",
        mx: "4",
      });
    }
  };

  const logout = () => {
    dispatch(logOut());
  };

  const { EmotionSvg } = profileCharacters[avatar]!;

  return (
    <ScrollView>
      <VStack paddingX={4} flex={1} justifyContent="space-between" minH="100%">
        <VStack space="4">
          <Box marginY={8} alignSelf="center">
            <EmotionSvg width={avatarSize} height={avatarSize} />
          </Box>
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
                    <Text fontWeight="600"> LUP </Text>
                    <Text>(hombre)</Text>
                  </Radio>
                  <Radio value="VALU" my={1}>
                    <Text fontWeight="600"> Valu </Text>
                    <Text>(mujer)</Text>
                  </Radio>
                </Radio.Group>
              )}
            />
          </FormControl>
          <Button onPress={handleSubmit(onSubmit)}>Actualizar</Button>
          <Button variant="outline" onPress={logout}>
            Cerrar sesión
          </Button>
        </VStack>

        <Text
          fontWeight="600"
          alignSelf="center"
          onPress={_handlePressButtonAsync}
          color="lightText"
          my="4"
        >
          © Yadira Peña
        </Text>
      </VStack>
    </ScrollView>
  );
};

export default ProfileScreen;
