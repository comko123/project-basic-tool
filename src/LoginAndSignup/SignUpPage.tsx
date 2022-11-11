import { useForm } from "react-hook-form"
import { server, sinfo,userSignUpInformation } from "../classAndApi"
import "../css/SignUpPage.moudule.scss"
const SignUpPage = () => {
 const {register,handleSubmit,setError} = useForm<sinfo>({mode:"onBlur"})
 const valied = (value:sinfo) => {
    try {
        if(value.password!==value.cofirmPassword){
            alert("비밀번호를 확인 해주세요...")
       setError("password",{},{shouldFocus:true})}
    else{
        const sign = new userSignUpInformation(value.id,value.password,value.email)
        console.log(sign) 
        server(`/sign-up`,sign)}} 
    catch (error) {
       setError("Sever Or Network",{message:"서버 혹은 네트워그 에러 발생"})
       console.log(error)}}
return(<>
<div className="sbody"><div>
 <h1 className="stitle">Sign-Up</h1>
<form onSubmit={handleSubmit(valied)}>
 <input type = "text" placeholder="ID" {...register("id",{required:true , minLength:{value:5,message:"At Lest 5"}})}/>
 <br/>
 <input type="password" placeholder="비밀번호" {...register("password",{required:true ,  minLength:{value:8,message:"At Lest 8"}})}/>
 <br/>
 <input type="password" placeholder="비밀번호 확인" {...register("cofirmPassword",{required:true , minLength:{value:8,message:"At Lest 8"}})}/>   
 <br/>
 <input type = "text" placeholder="e-mail" {...register("email", {required:true,pattern:{value:/^[A-Za-z0-9._%+-]+@(naver|gmail)\.com$/,message:"email"}})}/>
 <br/>
 <input type="submit" value="회원가입"/>
</form></div></div></>)}
export default SignUpPage