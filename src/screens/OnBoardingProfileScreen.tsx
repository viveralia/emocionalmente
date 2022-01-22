/* eslint-disable no-console */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Text,
  Heading,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Radio,
  VStack,
} from "native-base";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { RootStackParamList } from "../navigators/RootNavigator";
import EmotionHappiness from "./../components/EmotionHappiness";
import EmotionPlayfulValu from "./../components/EmotionPlayfulValu";
import Logo from "./../components/Logo";

type Inputs = {
  name: string;
};

const OnBoardingProfileScreen: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  const [avatar, setAvatar] = useState("LUP");
  const [formData, setFormData] = useState({ name: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({
        ...errors,
        name: "El nombre es requerido",
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log("Submitted") : console.log("Validation Failed");
  };

  return (
    <Box safeArea bg="brand" flex={1} alignItems="center" justifyContent="space-between">
      <Logo />

      <Button mt={2} onPress={navigation.goBack}>
        Back
      </Button>
      {avatar == "LUP" ? <EmotionHappiness /> : <EmotionPlayfulValu />}
      <VStack width="100%" mx="3" background="white">
        <FormControl isRequired isInvalid={"name" in errors}>
          <Stack mx="4">
            <Heading>Mi perfil</Heading>
            <FormControl.Label>Mi nombre es:</FormControl.Label>
            <Input
              type="text"
              defaultValue="Nombre"
              placeholder="Nombre"
              onChangeText={(value) => setFormData({ ...formData, name: value })}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              El nombre es requerido
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <Text>Mi avatar será:</Text>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={avatar}
          onChange={(nextValue) => {
            setAvatar(nextValue);
          }}
        >
          <Radio value="LUP" my={1}>
            Lup (hombre)
          </Radio>
          <Radio value="VALU" my={1}>
            Valu (mujer)
          </Radio>
        </Radio.Group>
        <Button size={"lg"} onPress={onSubmit}>
          Comenzar
        </Button>
      </VStack>
    </Box>
  );
};

export default OnBoardingProfileScreen;
