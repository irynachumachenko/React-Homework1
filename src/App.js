import './App.css';
import { createContext } from "react";
import Home from './components/Home/Home';
export const UserInfoContext = createContext(null);

const App = () => {
    const userInfo = {
        name: 'Joe',
        age: '18',
    };
    return (
        <UserInfoContext.Provider value={userInfo}>
           <Home />
        </UserInfoContext.Provider>
    );
};

export default App;
