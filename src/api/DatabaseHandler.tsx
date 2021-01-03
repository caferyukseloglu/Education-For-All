import auth, { firebase } from '@react-native-firebase/auth';
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { Alert } from 'react-native';
import "./User";
import {User} from "./User";
export class DatabaseHandler{

    reference = database().ref('/users');
    private loggedUser = new User();
    private isValid:boolean;

    public validityCheck(isValid:boolean):void{
        this.isValid = isValid;
    }

    public getValidity():boolean{
        return this.isValid;
    }

    public registerUser(emailValidity: boolean, passwordValidity:boolean,readUserAgg:boolean, user:User,_callback):void{
        if(emailValidity && passwordValidity && readUserAgg){
            console.log("Registiration crediantials are valid!");
            auth().createUserWithEmailAndPassword(user.getEmail(),user.getPassword()).then(()=>{
                console.log(auth().currentUser.uid);
                user.setUserID(auth().currentUser.uid);
                this.addUserToDB(user);
                this.validityCheck(true);
                this.loggedUser.setUserID(auth().currentUser.uid);
            }).then(()=>_callback()).catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    this.validityCheck(false);
                    _callback();
                }
        })

        }
        else{
            console.log("Please check your credientials!");
            this.validityCheck(false);
            _callback();
        }
        
            
        }

    public addUserToDB(user:User): void{
        console.log("User id is" + user.getUserID());
        firebase.database().ref("users/"+user.getUserID()).set({
            userid: user.getUserID(),
            email: user.getEmail(),
            password: user.getPassword(),
            username:user.getUsername(),
            name: user.getName(),
            surname: user.getSurname(),
            usertype: user.getUserType()
        })
    }

    public loginUser(emailValidity:boolean,passwordValidity:boolean,userEmail:string,userPassword:string,_callback):void{
        if(emailValidity&&passwordValidity){
            firebase.auth().signInWithEmailAndPassword(userEmail,userPassword).then(()=>{
                console.log("User logged in succesfully!");
                console.log("User id of logged user: " + firebase.auth().currentUser?.uid);
                firebase.database().ref("/users/"+firebase.auth().currentUser?.uid).once("value").then((snapshot) => {
                    this.loggedUser.setEmail(snapshot.val().email),
                    this.loggedUser.setPassword(snapshot.val().password),
                    this.loggedUser.setName(snapshot.val().name),
                    this.loggedUser.setUserID(snapshot.val().userid),
                    this.loggedUser.setSurname(snapshot.val().surname),
                    this.loggedUser.setUserType(snapshot.val().usertype),
                    this.loggedUser.setUsername(snapshot.val().username)
                    console.log("Finished init of user object in method")
                  }).then(()=>_callback())
            }).catch(error=>{
                if(error.code==="auth/wrong-password"){
                    console.log("Password is wrong try again.");
                }
            })
            
        }
        
        else{
            console.log("Please check your credientials.");
        }


    }

    private setUser():void{
        
    }

    public getUser():User{
        return this.loggedUser;
    }
    

}