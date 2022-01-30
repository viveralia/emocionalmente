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
} from "native-base";
import { FC } from "react";
import { Resolver, Controller, useForm } from "react-hook-form";

import { updateUserProfile, logOut } from "../actions/user.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

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

const ProfileScreen: FC = () => {
  const _handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync("https://www.yadirapg.com/");
  };

  const dispatch = useAppDispatch();

  const { profile } = useAppSelector((state) => state.user);

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

  const onSubmit = (data: FormValues) => {
    dispatch(updateUserProfile({ avatar: data.avatar, name: data.name, id: profile!.id }));
  };

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <ScrollView>
      <VStack space="32" width="100%" background="darkBackground" paddingX={4} flex={1}>
        <VStack space="4">
          <Box marginTop={12} alignSelf="center">
            {avatar == "LUP" ? (
              <Box width={32} height={32} bg="warning.900">
                LUP
              </Box>
            ) : (
              <Box width={32} height={32} bg="violet.500">
                VALU
              </Box>
            )}
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
        <Box>
          <Button
            fontWeight="600"
            alignSelf="center"
            onPress={_handlePressButtonAsync}
            color="lightText"
            variant="unstyled"
          >
            © Yadira Peña
          </Button>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default ProfileScreen;
