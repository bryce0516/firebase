import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { GiftedChat, Bubble,Send } from 'react-native-gifted-chat';

export default function RoomScreen() {
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    // example of chat message
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  function renderBubble(props){
    return (
      <Bubble 
      {...props}
      wrapperStyle={{
        right:{
          backgroundColor:'#6646ee'
        }
      }}
      textStyle={{
        right:{
          color:'#fff'
        }
      }}
      />
    )
  }
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={32} color='#6646ee' />
        </View>
      </Send>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name:'User Test' }}
      renderBubble={renderBubble}
      placeholder='Type your message here...'
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      renderLoading={renderLoading}
    />
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});