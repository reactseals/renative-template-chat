import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, isPlatformWeb } from 'renative';
import { theme as colors } from '../../../platformAssets/renative.runtime.json';
import CustomTextInput from '../CustomTextInput';

const ChatInput = ({ handleKeyPress, handleButtonPress }) => {
    const [textInputVal, setTextInputVal] = useState('');

    return (
        <View style={styles.inputContainer}>
            <CustomTextInput
                value={textInputVal}
                autofocus={isPlatformWeb}
                style={styles.chatInput}
                selectionColor={colors.activeColorPrimary}
                placeholder="Type a message ..."
                placeholderTextColor={colors.activeColorPrimary}
                outline="none"
                onChangeText={(value) => {
                    setTextInputVal(value);
                }}
                onKeyPress={(e) => handleKeyPress(e, textInputVal, setTextInputVal)}
                maxLength={6018}
            />
            <Icon
                iconFont="ionicons"
                iconName="md-send"
                iconColor={colors.activeColorPrimary}
                style={{ width: 35, height: 35, alignSelf: 'center' }}
                onPress={() => handleButtonPress(textInputVal, setTextInputVal)}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        position: isPlatformWeb ? 'fixed' : null,
        bottom: 0,
        backgroundColor: colors.backgroundColor,
    },
    chatInput: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 10,
        borderColor: colors.activeColorSecondary,
        borderWidth: 1,
        alignItems: 'center',
        color: colors.textColor,
        textAlign: 'left',
    },
});
export default ChatInput;
