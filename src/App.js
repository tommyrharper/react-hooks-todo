import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build todo app',
      isCompleted: false
    }
  ])
}

export default App;
