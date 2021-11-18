import { Link } from 'react-router-dom';

function UserProfile({ user }) {
    return (
        <div className="container text-center">
            <h1 className="display-1"> User Profile </h1>
            <div>Username: {user.userName}</div>
            <div>Member Since: {user.memberSince}</div>
            <Link to="/bank-of-react">Return to Home</Link>
        </div>
    );
}

export default UserProfile;