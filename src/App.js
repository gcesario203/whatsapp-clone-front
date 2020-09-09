import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar com contatos e grupos*/}
        <Sidebar></Sidebar>
        {/* Componente de chat */}
        <Chat></Chat>
      </div>

    </div>
  );
}

export default App;