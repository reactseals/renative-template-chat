import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import buttonStyles from './styles';

const CustomTouchableOpacity = (props) => {
    const buttonRef = useRef(null);

    const setNativeStyles = (component, newStyle) => {
        component.setNativeProps({
            style: newStyle,
        });
    };

    return (
        <TouchableOpacity
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            ref={buttonRef}
            onFocus={() => setNativeStyles(buttonRef.current, buttonStyles.active)}
            onBlur={() => setNativeStyles(buttonRef.current, buttonStyles.inActive)}
        />
    );
};

export default CustomTouchableOpacity;
