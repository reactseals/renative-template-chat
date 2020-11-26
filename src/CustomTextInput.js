import React, { useRef } from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ focusedStyle, blurredStyle, name, onChangeText, ...rest }) => {
    const InputRef = useRef(null);

    const setNativeStyles = (component, newStyle) => {
        component.setNativeProps({
            style: newStyle,
        });
    };

    return (
        <TextInput
            ref={InputRef}
            onFocus={() => setNativeStyles(InputRef.current, focusedStyle)}
            onBlur={() => setNativeStyles(InputRef.current, blurredStyle)}
            onChangeText={(value) => onChangeText(value, name)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
        />
    );
};

export default CustomTextInput;
