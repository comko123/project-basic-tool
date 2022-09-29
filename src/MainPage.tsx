import { Link } from "react-router-dom"
import "./css/MainPage.moudule.scss"
const MainPage = () => {
    return (<>
    <div className="contanier">
    <h1 className="ctype">Main Page</h1>
    <div className="block">
    <Link to={`/log-in`}>Log-In</Link>
    <Link to={`/sign-up`}>Sign-Up</Link>
    </div>
    </div>
    </>)
}
export default MainPage