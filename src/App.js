import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Pusher from 'pusher-js'
import api from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(()=>[
    api.get('/messages/sync')
      .then(res => {
        setMessages(res.data)
      })
  ], [])

  useEffect(()=>{
    const pusher = new Pusher('b452de844577660cf20a', {
      cluster: 'us2'
    })
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      setMessages([...messages,newMessages])
    })

    return () =>{
      channel.unbind_all()
      channel.unsubscribe()
    }

  },[messages])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar></Sidebar>
        <Chat messages={messages}></Chat>
      </div>

    </div>
  );
}

export default App;
