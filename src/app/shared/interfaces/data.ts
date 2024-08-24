export interface registerData extends loginData {
    name:string;
    phone:string;
    rePassword:string;
}

export interface loginData{
    email:string;
    password:string;
}
