import { Link } from "react-router";
export default function Navbar() {
    return (
        <nav>
        <Link to="/"><div>Home</div></Link>
        <Link to="/introduction"><div>Introduction</div></Link>
        <Link to="/contract"><div>Contract</div></Link>
        <Link to="/students"><div>Students</div></Link>
        </nav>
    );
}
