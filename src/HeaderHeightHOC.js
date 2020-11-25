import React from 'react'
import ChatScreen from './ChatScreen';

//Temproary HOC, was used to try out a hook

const HeaderHeightHOC = ({navigation}) => {
    return (
        <ChatScreen navigation={navigation} headerHeight={1000}/>
    )
}

export default HeaderHeightHOC
