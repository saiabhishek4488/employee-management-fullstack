import React from 'react';
import { ThemeContext } from './ThemeContext';
import Dashboard from './Dashboard';

function App() {

    return (
        <div>
            <ThemeContext.Provider value="Dark">
                <Dashboard />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;