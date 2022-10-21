import { useRef } from "react"
import { userLonginInformation, server } from "../classAndApi"
import "../css/LoginPage.moudule.scss"
const LoginPage = () => {
const idValue = useRef<HTMLInputElement>(null)
const pwValue= useRef<HTMLInputElement>(null)
    return(<>
    <div className="lbody"><div>
    <h1 className="title">Log-In</h1>
    <form className="frm" onSubmit={e=>e.preventDefault()}>
    <input type="text" placeholder="아이디를 입력 하세요." ref={idValue} required/>
    <br/> <br/> 
    <input type = "password" placeholder="비밀번호를 입력 하세요." ref={pwValue} required/>
    &nbsp;&nbsp;
    <input type="submit" value = "로그인" onClick = {()=>{
    const userInfo = new userLonginInformation(idValue.current?.value , pwValue.current?.value)
    console.log(userInfo) 
    server(`/log-in`,userInfo)}}/></form></div></div></>)}
export default LoginPage