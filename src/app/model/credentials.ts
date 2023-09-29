export class Credentials{
  userid: string;
  password: string;
  roles:string[];

constructor(userid: string, password: string){
  this.userid = userid;
  this.password = password;
  this.roles = [];
}

}
