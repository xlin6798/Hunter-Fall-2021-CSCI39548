import { Redirect } from 'react-router-dom';
import { useState } from 'react';

function LogIn({ mockLogIn }) {
    const [user, setUser] = useState({
        userName: '',
        password: ''
    }
    );

    const [redirect, setRedirect] = useState(
        false
    )

    function handleChange(e) {
        const updatedUser = {user};
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;
        setUser(updatedUser);
    }

    function handleSubmit(e) {
        e.preventDefault();
        mockLogIn(user);
        setRedirect(true);
    };

    return (
        <>
            {redirect ?
                (<Redirect to="/userProfile" />)
                : (
                    <div>
                        <form onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="userName">User Name</label>
                                <input type="text" name="userName" onChange={handleChange} value={user.userName} />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" onChange={handleChange} value={user.password} />
                            </div>
                            <button>Log In</button>
                        </form >
                    </div >
                )}
        </>
    )
}

export default LogIn;