import { Heading, Button, FormControl, TextArea, Box } from "native-base";
import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { GestureResponderEvent } from "react-native";

type FormValues = {
  description: string;
  bodyExpression: string;
  emotion: string | null;
};

export interface EntryFooterProps {
  onPress: (event: GestureResponderEvent) => void;
  control: Control<FormValues, object>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  isToday: boolean;
}

const EntryFooter: FC<EntryFooterProps> = ({ control, errors, onPress, isToday }) => {
  return (
    <Box marginTop={0}>
      <Box mb={6}>
        <FormControl isInvalid={"emotion" in errors}>
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
      <Button my={6} onPress={onPress}>
        Guardar
      </Button>
    </Box>
  );
};

export default EntryFooter;
