import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox.jsx';
import Input from './components/Input.jsx';
import Game from './components/Game.jsx';
import Sidebar from './components/Sidebar.jsx';


class App extends React.Component {
  render(){
    return (
      <div className="grid grid-cols-5 grid-rows-4 gap-2 bg-violet-900 h-screen p-2">
        <Sidebar/>
        <Game/>
        <ChatBox/>
        <Input/>
      </div>      
    );
  }
}

export default App;