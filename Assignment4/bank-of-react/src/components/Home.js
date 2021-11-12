import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

function Home({ user }) {
    return (
        <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
            <h1>Bank of React</h1>

            <Link to="/userProfile">User Profile</Link> {" "}
            <Link to="/Debit">Debit</Link>
            <Link to="/Credit">Credit</Link>
            <AccountBalance user={user} />
        </div>
    )
}

export default Home;