import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon, isPlatformWeb } from 'renative';
import styles from '../sharedStyles/chatStyles';
import colors from '../../platformAssets/runtime/colors.json';
import CustomTextInput from './CustomTextInput';
import textInputStyles from '../sharedStyles/textInputStyles';

const ChatInput = ({ handleKeyPress, handleButtonPress }) => {
    const [textInputVal, setTextInputVal] = useState('');

    return (
        <View style={styles.inputContainer}>
            <CustomTextInput
                blurredStyle={textInputStyles.inActive}
                focusedStyle={textInputStyles.active}
                value={textInputVal}
                autofocus={isPlatformWeb}
                style={styles.chatInput}
                selectionColor={colors.activeColorPrimary}
                placeholder="Type a message ..."
                placeholderTextColor={colors.activeColorPrimary}
                outline="none"
                onChangeText={(value) => {
                    setTextInputVal(value);
                    console.log(textInputVal);
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

export default ChatInput;
