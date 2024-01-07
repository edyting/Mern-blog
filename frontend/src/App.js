import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home.js'
import PostDetail from './pages/PostDetail.js'
import Register from './pages/Register.js';
import Authors from './pages/Authors.js';
import CreatePost from './pages/CreatePost.js';
import Login from './pages/Login.js';
import Logout from './pages/Logout.js';
import EditPost from './pages/EditPost.js';
import UserProfile from './pages/UserProfile.js';
import Dashboard from './pages/Dashboard.js';
import CategoryPost from './pages/CategoryPost.js';
import AuthorPost from './pages/AuthorPost.js';
import DeletePost from './pages/DeletePost.js';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/posts/:id",element:<PostDetail/>},
      {path:"/register",element:<Register/>},
      {path:"/login",element:<Login/>},
      {path:"/profile/:id",element:<UserProfile/>},
      {path:"/authors",element: <Authors/> },

      {path:"/create",element:<CreatePost/> },

      {path:"/posts/:id/edit",element: <EditPost/> },
      {path:"/posts/:id/delete",element: <DeletePost/> },

      {path:"/posts/users/:id",element: <AuthorPost/> },

      {path:"/myposts/:id/",element: <Dashboard/> },

      {path:"/posts/categories/:category",element: <CategoryPost/> },
      {path:"/logout",element: <Logout/> },
    ]
  }
]);

function App() {
  return (
   <RouterProvider router={router}>
     
   </RouterProvider>
  );
}

export default App;
