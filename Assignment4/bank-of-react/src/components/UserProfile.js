import { Link } from 'react-router-dom';

function UserProfile({ user }) {
    return (
        <div>
            <h1>User Profile</h1>
            <div>Username: {user.userName}</div>
            <div>Member Since: {user.memberSince}</div>
            <Link to="/bank-of-react">Return to Home</Link>
        </div>
    );
}

export default UserProfile;