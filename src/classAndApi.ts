import axios from "axios"
interface info {
    id?:string,password?:string
}
export interface sinfo{
    [key:string]:string
}
export class userLonginInformation{
    id;password;
constructor(id?:string,pw?:string){
    this.id = id
    this.password = pw}}

export class userSignUpInformation extends userLonginInformation{
    email;
    constructor(id:string,pw:string,email:string){
    super(id,pw)
    this.email =  email}} 
    
export const server = async(link:string,data:info) => {
    await axios.post(link,data)
    console.log(await axios.post(link,data))
}