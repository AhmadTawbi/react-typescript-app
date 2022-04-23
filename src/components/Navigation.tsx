// this is the navigation component
// to add more navigation items just add the navigation name and the url
// example: <li><Link to='/newUrl here'>Navigation Name here</Link></li>

import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/reports'>Reports</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;

