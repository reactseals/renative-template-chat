import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import textInputStyles from './styles';

const CustomTextInput = ({ name, onChangeText, ...rest }) => {
    const InputRef = useRef(null);

    const setNativeStyles = (component, newStyle) => {
        component.setNativeProps({
            style: newStyle,
        });
    };

    return (
        <TextInput
            ref={InputRef}
            onFocus={() => setNativeStyles(InputRef.current, textInputStyles.active)}
            onBlur={() => setNativeStyles(InputRef.current, textInputStyles.inActive)}
            onChangeText={(value) => onChangeText(value, name)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        />
    );
};

export default CustomTextInput;
