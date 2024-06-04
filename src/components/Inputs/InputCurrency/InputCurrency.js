import { Text, View, Modal, Pressable, FlatList } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createRef, useState } from "react";
import { TextInputMask } from "react-native-masked-text";

import { theme } from "../../../styles/theme";
import { inputCurrencyStyles } from "./styles/InputCurrency.styles";
import CurrencyOptions from "./constants/InputCurrency.contants";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import Icon from "../../Icon/Icon";
import Dropdown from "../../../../assets/icons/Dropdown.svg";
import Error from "../../../../assets/icons/Error.svg";
import InlineButton from "../../InlineButton/InlineButton";

/**
 * This component renders a currency input with the option to change currency.
 * @prop {string} inputName required -> name of input
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {string} placeholder optional -> placeholder text to be displayed
 * @prop {string} helperText optional -> helper text to be displayed below the input
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input currency field.
 * 
 * @example 
 * <InputCurrency
    inputName={"input name"}
    inputLabel={"input label"}
    placeholder={"Placeholder Text"}
    helperText={"helper text"}
    isDisabled={disabledState}
   />
 */
const InputCurrency = ({
  inputName,
  inputLabel,
  placeholder,
  helperText,
  isDisabled,
  inputError,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currency, setCurrency] = useState({ symbol: "$", code: "USD" });
  const [count, setCount] = useState(0);
  const { control } = useForm();
  const inputRef = createRef();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleOnChange = (char) => {
    const countLength = count.length;
    const characterLength = char.length;
    if (countLength !== characterLength) {
      setCount(characterLength);
    }
  };

  return (
    <View style={inputCurrencyStyles.container}>
      <View style={inputCurrencyStyles.labelContainer}>
        <Text
          style={[
            inputCurrencyStyles.label,
            isDisabled && inputCurrencyStyles.labelDisabled,
            inputError && inputCurrencyStyles.labelError,
          ]}
        >
          {inputLabel}
        </Text>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              inputCurrencyStyles.inputContainer,
              isFocused && inputCurrencyStyles.inputContainerFocused,
              inputError && inputCurrencyStyles.inputContainerError,
              isDisabled && inputCurrencyStyles.inputContainerDisabled,
            ]}
          >
            <Text style={inputCurrencyStyles.currencySymbol}>
              {currency.symbol}
            </Text>
            <TextInputMask
              ref={inputRef}
              style={[
                inputCurrencyStyles.input,
                isDisabled && inputCurrencyStyles.inputDisabled,
              ]}
              type={"money"}
              options={{
                precision: 2,
                separator: ".",
                delimiter: ",",
                unit: "",
                suffixUnit: "",
              }}
              keyboardType="number-pad"
              placeholder={capitilaizeFirstLetter(placeholder)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChangeText={(e) => {
                handleOnChange(e), onChange;
              }}
              value={value}
              editable={!isDisabled}
            />
            {!!inputError && (
              <Icon>
                <Error color={theme.color.error.base} />
              </Icon>
            )}
            <InlineButton
              onPress={openModal}
              iconRight={<Dropdown color={theme.color.surface.onBasePrimary} />}
            >
              {currency.code}
            </InlineButton>
          </View>
        )}
        name={inputName}
      />
      {!!helperText && (
        <Text
          style={[
            inputCurrencyStyles.helperText,
            isDisabled && inputCurrencyStyles.helperTextDisabled,
          ]}
        >
          {helperText}
        </Text>
      )}
      {!!inputError && (
        <Text style={inputCurrencyStyles.errorText}>This is required.</Text>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={inputCurrencyStyles.modalContainer}>
          <View style={inputCurrencyStyles.modalContent}>
            <FlatList
              data={CurrencyOptions.CURRENCIES}
              renderItem={({ item }) => (
                <Pressable
                  style={inputCurrencyStyles.modalListItem}
                  onPress={() => {
                    setCurrency({ symbol: item.symbol, code: item.code });
                    closeModal();
                  }}
                >
                  <Text style={inputCurrencyStyles.modalText}>
                    {item.symbol}
                  </Text>
                  <Text style={inputCurrencyStyles.modalText}>{item.code}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputCurrency;
