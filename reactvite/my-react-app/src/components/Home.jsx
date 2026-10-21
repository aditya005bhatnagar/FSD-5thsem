import { Link } from 'react-router'

function Home() {
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home