import React, { useState } from 'react';
import { render } from 'react-dom';
import TopBar from './TopBar';
import Main from './Main';

const userId = "user1"

export default function App(props) {
  const [isPopUpOpen, setPopUpState] = useState(false);

  return (
    <div id="appcontainer">
      <TopBar setPopUpState={setPopUpState} />
      <Main isPopUpOpen={isPopUpOpen} setPopUpState={setPopUpState} userId={userId} />
    </div>
  );
}

const root = document.getElementById('app');
render(<App />, root);
