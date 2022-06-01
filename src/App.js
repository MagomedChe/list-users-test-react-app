import Users from './components/Users/index';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import UserInfo from './components/UserInfoAndPosts';
import Comments from './components/Comments';
import NotPages from './components/Comments/NonPages'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="user/:id" element={<UserInfo />} />
        <Route path="user/:id/post/:post" element={<Comments />} />
        <Route path="*" component={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
