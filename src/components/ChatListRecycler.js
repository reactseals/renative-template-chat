/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
// eslint-disable-next-line no-unused-vars
import React, { Component, useState, useEffect, useRef } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import ChatMessage from './ChatMessage';

const ViewTypes = {
    SIMPLE_MESSAGE: 0,
};
const { width } = Dimensions.get('window');

const ChatListRecycler = ({ messageArray, nickname }) => {
    const [dataProvider, setDataProvider] = useState(new DataProvider((r1, r2) => r1 !== r2));
    const recyclerRef = useRef();

    useEffect(() => {
        const newProvider = dataProvider.cloneWithRows(messageArray);
        recyclerRef.current.scrollToTop();
        setDataProvider(newProvider);
    }, [messageArray]);

    const [_layoutProvider] = useState(
        new LayoutProvider(
            (index) => ViewTypes.SIMPLE_MESSAGE,
            (type, dim) => {
                dim.width = width;
                dim.height = 50;
            }
        )
    );
    const _rowRenderer = (type, data) => (
        <ChatMessage
            belongsToUser={nickname === data.nickname}
            message={{
                nickname: data.nickname,
                msg: data.msg,
            }}
        />
    );

    return (
        <RecyclerListView
            forceNonDeterministicRendering
            layoutProvider={_layoutProvider}
            dataProvider={dataProvider}
            rowRenderer={_rowRenderer}
            ref={recyclerRef}
            style={{ transform: [{ scaleY: -1 }] }}
        />
    );
};

export default ChatListRecycler;
