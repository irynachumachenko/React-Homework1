import './App.css';
import {Routes, Route} from 'react-router-dom';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/:id" element={<UserDetail/>}/>
        </Routes>
    );
};

export default App;
