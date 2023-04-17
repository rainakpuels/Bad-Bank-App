

import React, {useState} from 'react';

const defaultValue = {

    // App version
    Version: "<No Context Provider>",
    setVersion: () => { },

    // Index to the active User, currently logged in
    UserIndex: 0,
    setUserIndex: () => { },

    // Value indicating whether or not anyone is currently logged in
    LoggedIn: false,
    setLoggedIn: () => { },

    // Value indicating who is currently logged in
    CurrentUser: '',
    setCurrentUser: () => { },

    // User List
    Users: {},
    setUsers: () => { },

};

// App Context holding User information
const AppContext = React.createContext(defaultValue);

// Our global Context Provider
const AppContextProvider = (props) =>
{
    const [LoggedIn, setLoggedIn] = useState(false);
    const [UserIndex, setUserIndex] = useState(0);
    const [CurrentUser, setCurrentUser] = useState('');
    const [Users, setUsers] = useState(
        [{name: 'meow', email: 'meow@wordpress.com', password: 'secrets are fun', balance: 23000}]);

    return (
        <AppContext.Provider

            value={{

                Users,
                setUsers,

                LoggedIn,
                setLoggedIn,

                UserIndex,
                setUserIndex,

                CurrentUser,
                setCurrentUser,
            }}
        >
            {props.children}

        </AppContext.Provider>
    );
};


export {AppContext, AppContextProvider};
