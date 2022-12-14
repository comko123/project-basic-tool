import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./LoginAndSignup/LoginPage"
import SignUpPage from "./LoginAndSignup/SignUpPage"
import MainPage from "./MainPage"

function App() {
  return (
  <BrowserRouter><Routes><Route path="/"element={<MainPage/>}/>
  <Route path="/log-in"element={<LoginPage/>}/>
  <Route path="/sign-up"element={<SignUpPage/>}/>
  </Routes></BrowserRouter>)}

export default App
