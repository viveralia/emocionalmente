/* eslint-disable no-console */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text, Heading, FormControl, Input, Radio, VStack } from "native-base";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

import { RootStackParamList } from "../navigators/RootNavigator";
import EmotionHappiness from "./../components/EmotionHappiness";
import EmotionPlayfulValu from "./../components/EmotionPlayfulValu";
import Logo from "./../components/Logo";

const OnBoardingProfileScreen: FC<NativeStackScreenProps<RootStackParamList>> = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const avatar = watch("gender");

  // const onSubmit = (data) => {
  //   console.log("submiting with ", data);
  // };

  return (
    <Box safeAreaTop bg="brand" flex={1} alignItems="center" justifyContent="space-between">
      <Logo />
      {avatar == "LUP" ? <EmotionHappiness /> : <EmotionPlayfulValu />}
      <VStack space={4} width="100%" background="white" paddingY={8} paddingX={4} rounded="2xl">
        <Heading>Mi perfil</Heading>
        <FormControl>
          <FormControl.Label>Mi nombre es:</FormControl.Label>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                placeholder="Nombre"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
            rules={{ min: 3, required: "El nombre es requerido" }}
          />
          <FormControl.ErrorMessage>{errors.name?.message}</FormControl.ErrorMessage>
          <Text>Mi avatar será:</Text>
          <Controller
            control={control}
            defaultValue="LUP"
            name="gender"
            render={({ field: { onChange, name, value } }) => (
              <Radio.Group
                name={name}
                value={value}
                onChange={(avatar) => {
                  onChange(avatar);
                }}
              >
                <Radio value="LUP" my={1}>
                  Lup (hombre)
                </Radio>
                <Radio value="VALU" my={1}>
                  Valu (mujer)
                </Radio>
              </Radio.Group>
            )}
          />
        </FormControl>
        {/* <Button onPress={handleSubmit(onSubmit)}>Comenzar</Button> */}
      </VStack>
    </Box>
  );
};

export default OnBoardingProfileScreen;
