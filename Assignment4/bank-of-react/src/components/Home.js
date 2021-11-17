import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

function Home({ balance }) {
    return (
        <div>
            <h1>Bank of React</h1>

            <Link to="/bank-of-react/userProfile">User Profile</Link> {" "}
            <Link to="/bank-of-react/Debit">Debit</Link> {" "}
            <Link to="/bank-of-react/Credit">Credit</Link>
            <AccountBalance balance={balance} />
        </div>
    )
}

export default Home;