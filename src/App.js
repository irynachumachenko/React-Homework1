import React from 'react';
import { Provider } from 'react-redux';
import Counter from '../src/components/Counter/Counter';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
            </div>
        </Provider>
    );
}

export default App;
