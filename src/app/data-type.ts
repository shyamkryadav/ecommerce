export interface SignUp{
    name:string,
    password:string,
    email:string
}
export interface login{
    // name:string,
    email:string
    password:string,
}
export interface product{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined | number;
}
