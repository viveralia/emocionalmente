import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text, Heading, FormControl, Input, Radio, VStack } from "native-base";
import { FC } from "react";
import { useForm, Controller, Resolver } from "react-hook-form";

import { signUp } from "../actions/user.actions";
import { useAppDispatch } from "../hooks/redux";
import { RootStackParamList } from "../navigators/RootNavigator";
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

  return (
    // TODO: Add Keyboard avoiding view functionality
    <VStack safeAreaTop bg="brand" flex={1} alignItems="center" justifyContent="space-between">
      <Box marginTop={24}>
        <Logo />
        <Box marginTop={12}>
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
      </Box>
      <VStack
        space={6}
        width="100%"
        height="50%"
        background="darkBackground"
        paddingY={8}
        paddingX={4}
        rounded="2xl"
      >
        <Heading>Mi perfil</Heading>
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
                  <Text bold> LUP </Text>
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
        <Button bg="buttonPrimary" onPress={handleSubmit(onSubmit)}>
          Comenzar
        </Button>
      </VStack>
    </VStack>
  );
};

export default OnBoardingProfileScreen;
