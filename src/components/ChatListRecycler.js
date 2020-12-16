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
import React, { Component, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import ChatMessage from './ChatMessage';

const ViewTypes = {
    SIMPLE_MESSAGE: 0,
};
const { width } = Dimensions.get('window');

const ChatListRecycler = ({ messageArray, nickname }) => {
    const [dataProvider, setDataProvider] = useState(new DataProvider((r1, r2) => r1 !== r2));
    const _layoutProvider = new LayoutProvider(
        (index) => {
            return ViewTypes.SIMPLE_MESSAGE;
        },
        (type, dim) => {
            dim.width = width;
            dim.height = 50;
        }
    );
    const _rowRenderer = (type, data) => {
        return (
            <ChatMessage
                belongsToUser={nickname === data.nickname}
                message={{
                    nickname: data.nickname,
                    msg: data.msg,
                }}
            />
        );
    };

    useEffect(() => {
        setDataProvider(dataProvider.cloneWithRows(messageArray));
    }, [messageArray]);

    return (
        <RecyclerListView
            forceNonDeterministicRendering
            layoutProvider={_layoutProvider}
            // eslint-disable-next-line react/destructuring-assignment
            dataProvider={dataProvider}
            rowRenderer={_rowRenderer}
        />
    );
};

export default ChatListRecycler;

/***
 * To test out just copy this component and render in you root component
 */
/* export default class RecycleTestComponent extends React.Component {
    constructor(args) {
        super(args);

        //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
        //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
        const dataProvider = new DataProvider((r1, r2) => r1 !== r2);

        //Create the layout provider
        //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
        //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
        //If you need data based check you can access your data provider here
        //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
        //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
        this._layoutProvider = new LayoutProvider(
            (index) => {
                return ViewTypes.SIMPLE_MESSAGE;
            },
            (type, dim) => {
                dim.width = width;
                dim.height = 50;
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            dataProvider: dataProvider.cloneWithRows(exampleData),
        };
    }

    //Given type and data return the view component
    _rowRenderer(type, data) {
        return (
            <ChatMessage
                belongsToUser={this.test}
                message={{
                    nickname: data.nickname,
                    msg: data.msg,
                }}
            />
        );
    }

    render() {
        return (
            <RecyclerListView
                forceNonDeterministicRendering
                layoutProvider={this._layoutProvider}
                // eslint-disable-next-line react/destructuring-assignment
                dataProvider={this.state.dataProvider}
                rowRenderer={this._rowRenderer}
            />
        );
    }
}
 */
