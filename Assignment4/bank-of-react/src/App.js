import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './Login';
import Debit from './components/Debit';
import Credit from './components/Credit';
import axios from 'axios';

function App() {
    const [accountBalance, setAccountBalance] = useState();
    const [currentUser, setCurrentUser] = useState({
        userName: 'joe_shmo',
        memberSince: '07/23/96',
    });
    const [credits, setCredits] = useState([{amount: 0, description: "hi", date: "1"}]);
    const [debits, setDebits] = useState();

    useEffect(() => {
        async function fetchData() {
            let debits = await axios.get("https://moj-api.herokuapp.com/debits");
            let credits = await axios.get("https://moj-api.herokuapp.com/credits");
            debits = debits.data;
            credits = credits.data;
            setDebits(debits);
            setCredits(credits);
            let debitSum = 0, creditSum = 0;
            debits.forEach((debit) => {
                debitSum += debit.amount
            })
            credits.forEach((credit) => {
                creditSum += credit.amount
            })
            setAccountBalance((creditSum - debitSum).toFixed(2));
        }
        fetchData();
    }, [])

    function mockLogIn(logInInfo) {
        const newUser = currentUser;
        newUser.userName = logInInfo.userName
        setCurrentUser(newUser);
    }

    function addDebit(deb) {
        setDebits(debits.concat(deb));
    }

    function addCredit(cred) {
        setCredits(credits.concat(cred));
        updateBal();
    }

    function updateBal() {
        let balance = 0;
        credits.map(cred => (
            balance -= cred.amount
        ))
        debits.map(deb => (
            balance += deb.amount
        ))
        setAccountBalance(balance);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/bank-of-react/" component={Home}>
                    <Home balance={accountBalance} />
                </Route>
                <Route exact path="/bank-of-react/login">
                    <LogIn mockLogIn={mockLogIn} />
                </Route>
                <Route exact path="/bank-of-react/userProfile">
                    <UserProfile user={currentUser} />
                </Route>
                <Route exact path="/bank-of-react/Debit">
                    <Debit balance={accountBalance} debits={debits} />
                </Route>
                <Route exact path="/bank-of-react/Credit">
                    <Credit balance={accountBalance} addCredit={addCredit} credits={credits} />
                </Route>
            </Switch>
        </BrowserRouter>
    );

}

export default App;