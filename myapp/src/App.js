import React from 'react';
import { useRoutes } from "react-router-dom";
import Home from './pages/home.js';
import View from './pages/view.js';

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/view", element: <View /> },
  ];

  const element = useRoutes(routes);  // Use the hook
  return element;
}

export default App;
