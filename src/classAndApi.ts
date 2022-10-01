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
  
export const server = async(link:string,data:info) => {
    await axios.post(link,data)
    console.log(await axios.post(link,data))
}