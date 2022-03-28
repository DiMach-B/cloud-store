
interface IUser {
    id?: number,
    email?: string
}


export class UserStore {

    private user: IUser = {};
    private isAuth: boolean = false;
 
    public getIsAuth(): boolean {
        return this.isAuth;
    } 

    public setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    public getuser(): IUser {
        return this.user;
    } 

    public setuser(user: IUser) {
        this.user = user;
    }
}