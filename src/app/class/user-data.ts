
export class UserData {

  constructor(data:{loginID: string, authorization?: string}){
    this.loginID = data.loginID;
    this.authorization = data.authorization;
  }
  loginID: string;
  authorization: string;
}