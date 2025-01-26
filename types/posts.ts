
export interface post{
    id:string,
    title:string,
    body:string,
    author:string,
    date:string,
    comments:postComments[]
}
export interface postComments{
    id:string,
    text:string,
    username:string
}