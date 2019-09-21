import React from 'react';
import './App.scss';
import { CardList } from "./CardList";

const App: React.FC = () => {
  return (
    <div className="container">
        <h1><span role="img" aria-label="queen">👑</span> Taylor Swift</h1>
      <CardList />
    </div>
  );
}

export default App;
