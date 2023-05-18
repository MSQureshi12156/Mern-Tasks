import React from 'react';
import ReactDOM from 'react-dom/client';
// import UserList from './component/UserList';
// import PostList from './component/PostList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter} from 'react-router-dom';
import App from './component/App';
import Navbar from './component/Navbar';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <UserList />
  //   <PostList />
  // </React.StrictMode>
<React.StrictMode>

  <BrowserRouter>
  
    <Navbar />
    <App />

  </BrowserRouter>
</React.StrictMode>
);

