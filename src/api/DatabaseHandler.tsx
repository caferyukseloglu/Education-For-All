import auth, {firebase} from '@react-native-firebase/auth';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import {Alert} from 'react-native';
import {Category} from './Category';
import {Course} from './Course';
import { Exam } from './Exam';
import { Lesson } from './Lesson';
import {Student} from './Student';
import {Teacher} from './Teacher';
import './User';
import {User} from './User';
export class DatabaseHandler {
  reference = database().ref('/users');
  private loggedUser: User;
  private isValid: boolean;
  private courseList = new Array<Course>();
  private categoryList = new Array<Category>();
  private toCheck = new Array<String>();

  public validityCheck(isValid: boolean): void {
    this.isValid = isValid;
  }

  public getValidity(): boolean {
    return this.isValid;
  }

  public registerUser(
    emailValidity: boolean,
    passwordValidity: boolean,
    readUserAgg: boolean,
    user: User,
    _callback,
  ): void {
    if (emailValidity && passwordValidity && readUserAgg) {
      console.log('Registiration crediantials are valid!');
      auth()
        .createUserWithEmailAndPassword(user.getEmail(), user.getPassword())
        .then(() => {
          if (user.getUserType() == 1) {
            this.loggedUser = new Student();
          } else {
            this.loggedUser = new Teacher();
          }
          console.log(auth().currentUser.uid);
          user.setUserID(auth().currentUser.uid);
          this.addUserToDB(user);
          this.validityCheck(true);
          this.loggedUser.setUserID(auth().currentUser.uid);
        })
        .then(() => _callback())
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            this.validityCheck(false);
            _callback();
          }
        })
        .then(() => _callback())
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            this.validityCheck(false);
            _callback();
          }
        });
    }
  }

  public addUserToDB(user: User): void {
    firebase
      .database()
      .ref('users/' + '/' + user.getUserID())
      .set({
        userid: user.getUserID(),
        email: user.getEmail(),
        password: user.getPassword(),
        username: user.getUsername(),
        name: user.getName(),
        surname: user.getSurname(),
        usertype: user.getUserType(),
      });
    console.log('User created with user id: ' + user.getUserID());



    var typeofuser: string;
    if(user.getUserType()==1){
      typeofuser= "students";
    }
    else{
      typeofuser="teachers";
    }
    firebase
      .database()
      .ref(typeofuser +"/"+ user.getUserID())
      .set({
        userid: user.getUserID(),
        email: user.getEmail(),
        password: user.getPassword(),
        username: user.getUsername(),
        name: user.getName(),
        surname: user.getSurname(),
        usertype: user.getUserType(),
      });
      console.log("CREATED TEACHER OR USER ");
  }
    

  public loginUser(
    emailValidity: boolean,
    passwordValidity: boolean,
    userEmail: string,
    userPassword: string,
    _callback,
  ): void {
    if (emailValidity && passwordValidity) {
      firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
          console.log('User logged in succesfully!');
          console.log(
            'User id of logged user: ' + firebase.auth().currentUser?.uid,
          );
          firebase
            .database()
            .ref('/users/' + firebase.auth().currentUser?.uid)
            .once('value')
            .then((snapshot) => {
              if (snapshot.val().usertype == 1) {
                this.loggedUser = new Student();
              } else {
                this.loggedUser = new Teacher();
              }
              this.loggedUser.setEmail(snapshot.val().email),
                this.loggedUser.setPassword(snapshot.val().password),
                this.loggedUser.setName(snapshot.val().name),
                this.loggedUser.setUserID(snapshot.val().userid),
                this.loggedUser.setSurname(snapshot.val().surname),
                this.loggedUser.setUserType(snapshot.val().usertype),
                this.loggedUser.setUsername(snapshot.val().username);
              console.log('Finished init of user object in method');
            })
            .then(() => _callback());
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            console.log('Password is wrong try again.');
          }
        });
    } else {
      console.log('Please check your credientials.');
    }
  }

  public setCourses(_callback): void {
    firebase.database().ref("courses2").once("value").then(snapshot=>{
      snapshot.forEach(x=>{
        const eachCourse: Course = new Course();
        eachCourse.setCourseName(x.val().coursename);
        eachCourse.setCourseDescription(x.val().coursedescription);
        eachCourse.setCourseCategory(x.val().coursecategory);
        if(this.toCheck.includes(x.val().coursename)==false){
          console.log("Added.");
          this.toCheck.push(x.val().coursename);
          this.courseList.push(eachCourse);
          if (this.courseList.length == 3) {
            _callback();
          }
        }
      })
    })
  }

  public getCourses(): Array<Course> {
    return this.courseList;
  }

  public getUser(): User {
    return this.loggedUser;
  }


  public setCategories(_callback) {
    firebase.database().ref("/categories/").once("value").then(snapshot=>{
      const categoryCount= snapshot.numChildren();
      snapshot.forEach(x=>{
        const eachCourse: Category = new Category();
        eachCourse.setCategoryId(x.val().categoryid);
        eachCourse.setCategoryDescription(x.val().categorydescription);
        eachCourse.setCategoryName(x.val().categoryname)
        if(!this.categoryList.includes(eachCourse)){
          this.categoryList.push(eachCourse);
          if(this.categoryList.length==categoryCount){
            _callback();
          }
        }
      })
    })
  }

  public getCategories(): Array<Category> {
    return this.categoryList;
  }


  public async teachCourse(teacher:Teacher,course:Course):Promise<void>{
    await firebase.database().ref("courses"+"/"+teacher.getUserID()+"/"+course.getCourseName()).set({
      coursecategory:course.getCourseCategory(),
      coursedescription:course.getCourseDescription(),
      coursename:course.getCourseName()
    })

    firebase.database().ref("categories/"+course.getCourseCategory()+"/teachers/"+teacher.getUserID()).set({
        userid: teacher.getUserID(),
        email: teacher.getEmail(),
        password: teacher.getPassword(),
        username: teacher.getUsername(),
        name: teacher.getName(),
        surname: teacher.getSurname(),
        usertype: teacher.getUserType(),
    })

  }

  public getTeachersByCategory(category:Category,_callback):void{
    category.resetTeachers();
    firebase.database().ref("categories/"+category.getCategoryName()+"/teachers").once("value").then(snapshot=>{
      const teacherCount=snapshot.numChildren();
      console.log(snapshot);
      snapshot.forEach(teacher=>{
        const eachTeacher: Teacher = new Teacher();
        eachTeacher.setName(teacher.val().name);
        eachTeacher.setEmail(teacher.val().email);
        eachTeacher.setUserID(teacher.val().userid);
        eachTeacher.setUserType(teacher.val().usertype);
        eachTeacher.setPassword(teacher.val().password);
        eachTeacher.setSurname(teacher.val().surname);
        category.addTeacher(eachTeacher);
        console.log(category.getTeachers().length);
        console.log("teacher count: "+teacherCount);
        if(category.getTeachers().length==teacherCount){
          console.log("calling back");
          _callback();
        }
      })
    })
  }

  public getCoursesOfTeacher(teacher:Teacher, category:Category,_callback):void{
    teacher.resetCoursesGiven();
    var count=0;
    firebase.database().ref("courses2/"+teacher.getUserID()).once("value").then(snapshot=>{
      snapshot.forEach(course=>{
        if(course.val().coursecategory==category.getCategoryName()){
          count++
        }
      })
      snapshot.forEach(course=>{
        const eachCourse: Course = new Course();
        if(course.val().coursecategory==category.getCategoryName()){
          eachCourse.setCourseName(course.val().coursename);
          eachCourse.setCourseDescription(course.val().coursedescription);
          eachCourse.setCourseCategory(course.val().coursecategory);
          eachCourse.setTeacher(teacher);
          teacher.addCoursesGiven(eachCourse);
          if(teacher.getCoursesGiven().length==count){
            console.log("calling back on get hcourses");
            _callback();
          }
        }
      })
    })
  }

  public studentCourseEnroll(student:Student,teacher:Teacher,course:Course,_callback):void{
    console.log(course);
    firebase.database().ref("studentsenrolled/"+student.getUserID()+"/"+course.getCourseName()).set({
      coursename:course.getCourseName(),
      coursecategory:course.getCourseCategory(),
      coursedescription:course.getCourseDescription(),
      courseteacher:teacher.getUserID(),
    }).then(()=>_callback())

  }

  public updateUser(user:User,name:string,surname:string,password:string,passwordValidity:boolean){
    var typeofuser;
    if(user.getUserType()==1){
      typeofuser="students";
    }
    else{
      typeofuser="teachers";
    }

    if(name!=""){
      firebase.database().ref(typeofuser+"/"+user.getUserID()).update({
        name:name
      })
      firebase.database().ref("users/"+user.getUserID()).update({
        name:name
      })
      this.loggedUser.setName(name);
    }

    if(surname!=""){
      firebase.database().ref(typeofuser+"/"+user.getUserID()).update({
        surname:surname
      })

      firebase.database().ref("users/"+user.getUserID()).update({
        surname:surname
      })
      this.loggedUser.setSurname(surname);
    }

    if(passwordValidity){
      firebase.database().ref(typeofuser+"/"+user.getUserID()).update({
        password:password
      })

      firebase.database().ref("users/"+user.getUserID()).update({
        password:password
      })

      firebase.auth().currentUser?.updatePassword(password).then(()=>console.log("Password changed succesfully."));

      this.loggedUser.setPassword(password);
    }


  }

  public addLessonToCourse(teacher:Teacher,course:Course,lessonname:any,lessondescription:any,lessoncontent:any){
    firebase.database().ref("lessons/"+teacher.getUserID()+"/"+course.getCourseName()+"/"+lessonname).set({
      lessonname:lessonname,
      lessondescription:lessondescription,
      lessoncourse:lessoncontent,
    })
  }

  public getLessonsForCourse(teacher:Teacher,course:Course,_callback){
    firebase.database().ref("lessons/"+teacher.getUserID()+"/"+course.getCourseName()).once("value").then(snapshot=>{
      const lessonCount=snapshot.numChildren();
      snapshot.forEach(lesson=>{
        const eachLesson: Lesson = new Lesson();
        eachLesson.setLessonDescription(lesson.val().lessondescription);
        eachLesson.setLessonContent(lesson.val().lessoncourse)
        eachLesson.setLessonName(lesson.val().lessonname);
        console.log(eachLesson);
        if(course.getCourseLessons().findIndex((data)=>data.getLessonName()==lesson.val().lessonname) === -1){
          course.setCourseLessons(eachLesson);
          if(course.getCourseLessons().length==lessonCount){
            _callback();
          }
        }    
      })
    })
  }

  public addExam(teacher:Teacher,course:Course,exam:any,examnamein:any,examdescription){
      firebase.database().ref("exams/"+teacher.getUserID()+"/"+course.getCourseName()+"/"+examnamein).set({
        examname:examnamein,
        examdescription:examdescription,
      }).then(()=>exam.map(x=>{
        firebase.database().ref("exams/"+teacher.getUserID()+"/"+course.getCourseName()+examnamein+"/"+x.name).set({
          questiontitle:x.name,
        }).then(()=> x["answers"].map(eachanswer=>{
          firebase.database().ref("exams/"+teacher.getUserID()+"/"+course.getCourseName()+examnamein+"/"+x.name+"/"+eachanswer["title"]).set({
            answertitle:eachanswer["title"],
            answercorrect:eachanswer["correct"],
          })
        }))
      }))

  }

  public getAllCoursesForSpesificTeacher(teacher:Teacher,_callback){
    firebase.database().ref("courses/"+teacher.getUserID()).once("value").then(snapshot=>{
      const courseCount=snapshot.numChildren();
      console.log("corusecount"+courseCount);
      snapshot.forEach(course=>{
        console.log(teacher.getCoursesGiven().length);
        const eachCourse: Course = new Course();
        eachCourse.setCourseName(course.val().coursename),
        eachCourse.setCourseDescription(course.val().coursedescription),
        eachCourse.setCourseCategory(course.val().coursecategory),
        eachCourse.setTeacher(course.val().teacher);
        if(teacher.getCoursesGiven().findIndex((data)=>data.getCourseName()==course.val().coursename) === -1){
          teacher.addCoursesGiven(eachCourse);
          if(teacher.getCoursesGiven().length==courseCount){
            _callback();
          }
        }    
      })
    })
  }

  public getAllCoursesForSpesificStudent(student:Student,_callback){
    firebase.database().ref("studentsenrolled/"+student.getUserID()).once("value").then(snapshot=>{
      const courseCount=snapshot.numChildren();
      snapshot.forEach(course=>{
        const eachCourse: Course = new Course();
        eachCourse.setCourseName(course.val().coursename),
        eachCourse.setCourseDescription(course.val().coursedescription),
        eachCourse.setCourseCategory(course.val().coursecategory),
        eachCourse.setTeacher(course.val().teacher),
        student.addCoursesTaken(eachCourse);
        if(student.getCoursesTaken().length==courseCount){
          _callback();
        }
      })

    })
  }

  public async getTeacherById(teacherid:string): Promise<Teacher>{
    const eTeacher: Teacher = new Teacher();
    const snapshot = await firebase.database().ref("teachers/"+teacherid).once("value");
    eTeacher.setName(snapshot.val().name);
    eTeacher.setEmail(snapshot.val().email);
    eTeacher.setUserID(snapshot.val().userid);
    eTeacher.setUserType(snapshot.val().usertype);
    eTeacher.setPassword(snapshot.val().password);
    eTeacher.setSurname(snapshot.val().surname);
    return eTeacher;
  }

  public getExamsForCourse(teacher:Teacher,course:Course,_callback){
    firebase.database().ref("exams/"+teacher.getUserID()+"/"+course.getCourseName()).once("value").then(snapshot=>{
      snapshot.forEach(examname=>{
        const eachExam: Exam = new Exam();
        eachExam.setExamName(examname.val().examname),
        eachExam.setExamDescription(examname.val().examdescription),
        console.log(examname.val().examname);
      })
  })}


}
