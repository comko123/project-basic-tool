import axios from "axios"
interface info {
    id?:string,password?:string
}
export interface sinfo{
    [key:string]:string
}
export class logininformation{
    id;password;
constructor(id?:string,pw?:string){
    this.id = id
    this.password = pw}}
  
export const loginServer = async(data:info) => {
    await axios.post(``,{userData:data})
}