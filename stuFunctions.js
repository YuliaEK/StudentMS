const ps=require('prompt-sync');
const prompt=ps();

const fs=require('fs');

const {Student}=require('./Student.js');

var studentDetails = new Array();
​
function regStudents()
{
    let sno = "";
    let sname = "";
    let bday = "";
    let email = "";
    let sclass = "";
​
    while(true){
        if(sno.length == 5){
            if(sname.length > 3){
                if(bday.length == 8){
                    email=prompt('Enter Student Email :');
                    sclass=prompt('Enter Student Class :');
                    break;
                } 
                else {
                    bday=prompt('Enter Student Birthday (ddmmyyy):'); 
                }
            } 
            else {
                sname=prompt('Enter Student Name :');
            }
        } 
        else {
            sno=prompt('Enter Student No (5 characters): ');
        }
    }
    
    const stu=new Student();
    stu.studentNo=sno;
    stu.studentName=sname;
    stu.studentBirthday=bday;
    stu.studentEmail=email;
    stu.studentClass=sclass;
    stu.studentMarks=0;
    studentRegistration(stu);
}
​
function addStudentMarks(studentID, studentMarks){
    for(var i = 0 ; i < studentDetails.length; i++){
​
        if(studentDetails[i].studentNo == studentID){
            console.log("Current Marks: " + studentDetails[i].studentMarks);
            studentDetails[i].studentMarks=studentMarks;
            break;
        }
    }
​
    console.log(studentDetails);
}
function studentRegistration(student)
{
    studentDetails.push(student);
   
    console.log(studentDetails);
}
​
function writeStudentDetails(studentID)
{
    for(var i = 0 ; i < studentDetails.length; i++){
​
        if(studentDetails[i].studentNo == studentID){
            const stuDetails=fs.writeFileSync(studentDetails[i].studentNo+'.txt','Student No: '+studentDetails[i].studentNo+'\nStudent Name: '+studentDetails[i].studentName+'\nMarks: '+studentDetails[i].studentMarks);
            break;
        }
    }
}
​
​
module.exports={regStudents,addStudentMarks,writeStudentDetails};