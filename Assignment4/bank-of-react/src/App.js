import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './Login';
import Debit from './components/Debit';
import Credit from './components/Credit';

function App() {
    const [user, setUser] = useState(
        {
            accountBalance: 14568.27,
            currentUser: {
                userName: 'joe_shmo',
                memberSince: '07/23/96',
            },
            debits: [{ date: "9/14", amount: 1, description: "hi" }],
            credits: [{ date: "9/14", amount: 1, description: "hi" }],
        }
    )

    function mockLogIn(logInInfo) {
        const newUser = user.currentUser;
        newUser.userName = logInInfo.userName
        setUser({ currentUser: newUser })
    }

    function addDebit(deb) {
        setUser(...user.debits, deb);
    }

    function addCredit(cred) {
        setUser(...user.credits, cred);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LogIn mockLogIn={mockLogIn} />
                </Route>
                <Route exact path="/" component={Home}>
                    <Home user={user} />
                </Route>
                <Route exact path="/userProfile">
                    <UserProfile user={user.currentUser} />
                </Route>
                <Route exact path="/Debit">
                    <Debit debits={user.debits} />
                </Route>
                <Route exact path="/Credit">
                    <Credit credits={user.credits} />
                </Route>
            </Switch>
        </BrowserRouter>
    );

}

export default App;