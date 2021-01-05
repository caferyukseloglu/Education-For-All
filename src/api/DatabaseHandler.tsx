import auth, { firebase } from '@react-native-firebase/auth';
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { Alert } from 'react-native';
import { Category } from './Category';
import { Course } from './Course';
import { Student } from './Student';
import { Teacher } from './Teacher';
import "./User";
import {User} from "./User";
export class DatabaseHandler{

    reference = database().ref('/users');
    private loggedUser :User;
    private isValid:boolean;
    private courseList = new Array<Course>();
    private categoryList = new Array<Category>();

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
                if(user.getUserType()==1){
                    this.loggedUser= new Student();
                }
                else{
                    this.loggedUser= new Teacher();
                }
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
        
        firebase.database().ref("users/"+"/"+user.getUserID()).set({
            userid: user.getUserID(),
            email: user.getEmail(),
            password: user.getPassword(),
            username:user.getUsername(),
            name: user.getName(),
            surname: user.getSurname(),
            usertype: user.getUserType()
        })
        console.log("User created with user id: " + user.getUserID());
    } 

    public loginUser(emailValidity:boolean,passwordValidity:boolean,userEmail:string,userPassword:string,_callback):void{
        if(emailValidity&&passwordValidity){
            firebase.auth().signInWithEmailAndPassword(userEmail,userPassword).then(()=>{
                console.log("User logged in succesfully!");
                console.log("User id of logged user: " + firebase.auth().currentUser?.uid);
                firebase.database().ref("/users/"+firebase.auth().currentUser?.uid).once("value").then((snapshot) => {
                    if(snapshot.val().usertype==1){
                        this.loggedUser= new Student();
                    }
                    else{
                        this.loggedUser=new Teacher();
                    };
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

    public setCourses(_callback):void{
        var courseCount: number;
        firebase.database().ref("courses").once("value").then(snapshot=>{
            courseCount = Object.keys(snapshot.val()).length;
            console.log("COURSE COUNT IS: "+courseCount);
            Object.keys(snapshot.val()).forEach(courseTitle=>{
                const eachCourse: Course = new Course();
                firebase.database().ref("/courses/"+courseTitle).once("value").then(snapshot=>{
                    eachCourse.setCourseId(snapshot.val().courseid);
                    eachCourse.setCourseName(snapshot.val().coursename);
                    eachCourse.setCourseDescription(snapshot.val().coursedescription);
                    this.courseList.push(eachCourse);
                    if(this.courseList.length==courseCount){
                        _callback();
                    }
                })
            });
        })
    }

    public getCourses():Array<Course>{
        return this.courseList;
    }


    public getUser():User{
        return this.loggedUser;
    }
    

	public getCourseExams(): Array<Course> {
		return this.courseExams;
	}

	public setCourseExams(value: Course) {
		this.courseExams.push(value);
    }
    
    /*public addTeacherToCourse(teacher:Teacher,course:Course){
        firebase.database().ref("courses/"+course.getCourseId()+"/"+"/teachers/"+teacher.getUserID()).set({
            userid: teacher.getUserID(),
            email: teacher.getEmail(),
            password: teacher.getPassword(),
            username:teacher.getUsername(),
            name: teacher.getName(),
            surname: teacher.getSurname(),
            usertype: teacher.getUserType()
        })
    }

    public enrollCourse(student:Student,course:Course,teacher:Teacher){
        firebase.database().ref("courses/"+course.getCourseId()+"/"+"/teachers/"+teacher.getUserID()+"students/"+student.getUserID()).set({
            userid: student.getUserID(),
            email: student.getEmail(),
            password: student.getPassword(),
            username:student.getUsername(),
            name: student.getName(),
            surname: student.getSurname(),
            usertype: student.getUserType()
        })
    }*/

    public setCategories(_callback){
        firebase.database().ref("courses/categories").once("value").then((snapshot)=>{
            const categoryCount: number= Object.keys(snapshot.val()).length;
            Object.keys(snapshot.val()).forEach(category=>{
                const eachCategory: Category = new Category();
                eachCategory.setCategoryName(category);
                this.categoryList.push(eachCategory);
                if(this.categoryList.length == categoryCount){
                    _callback();
                }
            })
        })
    }

    public getCategories():Array<Category>{
        return this.categoryList;
    }

}