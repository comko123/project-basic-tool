import { useForm } from "react-hook-form"
import { sinfo } from "../classAndApi"
import "../css/SignUpPage.moudule.scss"
const SignUpPage = () => {
 const {register,handleSubmit,setError} = useForm<sinfo>({mode:"onBlur",defaultValues:{email:"@naver.com"}})
 const valied = (value:sinfo) => {
    console.log(value)
    if(value.password!==value.confirmPassword){
    return setError("Password",{message:"비밀번호를 확인 해주세요..."},{shouldFocus:true})}
    setError("Sever Or Network",{message:"서버 혹은 네트워그 에러 발생"})}
return(<>
<div className="sbody"><div>
 <h1 className="stitle">Sign-Up</h1>
<form onSubmit={handleSubmit(valied)}>
 <input className="sid" placeholder="ID" {...register("Id",{required:true , minLength:{value:5,message:"At Lest 5"}})}/>
 <br/>
 <input className="spw" type="password" placeholder="비밀번호" {...register("password",{required:true ,  minLength:{value:8,message:"At Lest 8"}})}/>
 <br/>
 <input className="scpw" type="password" placeholder="비밀번호 확인" {...register("cofirmPassword",{required:true , minLength:{value:8,message:"At Lest 8"}})}/>   
 <br/>
 <input className="sem" placeholder="e-mail" {...register("e-mail", {required:true,pattern:{value:/^[A-Za-z0-9._%+-]+@naver.com$/,message:"email"}})}/>
 <br/>
 <input className="sbtn" type="submit" value="회원가입"/>
</form></div></div>
</>)}
export default SignUpPage