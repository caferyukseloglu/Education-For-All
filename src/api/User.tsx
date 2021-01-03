import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export class User{

    private userID: string;
    private email: string;
    private password: string;
    private name: string;
    private surname: string;
    private username: string;
    private userType: number;

    public setEmail(userEmail:string): void{
        this.email = userEmail;
    }

    public setPassword(userPassword:string): void{
        this.password = userPassword;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public setSurname(surname:string):void{
        this.surname = surname;
    }

    public setUsername(username:string):void{
        this.username = username;
    }

    public setUserType(userType:number):void{
        this.userType = userType;
    }

    public setUserID(userID:string):void{
        this.userID=userID;
    }

    public getEmail(): string{
        return this.email;
    }

    public getPassword(): string{
        return this.password;
    }

    public getName(): string{
        return this.name;
    }

    public getSurname(): string{
        return this.surname;
    }

    public getUsername(): string{
        return this.username;
    }

    public getUserType(): number{
        return this.userType;
    }

    public getUserID(): string{
        return this.userID;
    }

}