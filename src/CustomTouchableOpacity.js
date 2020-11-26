import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';

const CustomTouchableOpacity = ({ focusedStyle, blurredStyle, ...rest }) => {
    const buttonRef = useRef(null);

    const setNativeStyles = (component, newStyle) => {
        component.setNativeProps({
            style: newStyle,
        });
    };

    return (
        <TouchableOpacity
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
            ref={buttonRef}
            onFocus={() => setNativeStyles(buttonRef.current, focusedStyle)}
            onBlur={() => setNativeStyles(buttonRef.current, blurredStyle)}
        />
    );
};

export default CustomTouchableOpacity;
