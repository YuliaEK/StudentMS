const ps=require('prompt-sync');
const prompt=ps();

const {Student}=require('./Student.js');
const stuFunctions=require('./stuFunctions.js');
var choice = 0;

while(true)
{
    if(choice==0){
        console.log('==================');
        console.log('Select your choice');
        console.log('\t1.Register Students\n\t2.Record Student Marks\n\t3.Check Students Grades\n\t4.Write students Details  to a Text file\n\t5.Show average marks for the class\n\t6.Exit');
        choice=prompt('Enter your choice [1,2,3,4,5,6] : ');
    }

    if(choice==1)
    {
        stuFunctions.regStudents();
        choice = 0;
    }
    else if(choice==2)
    {

        let stuno=prompt('Enter studentNo :');
        let stumarks=prompt('Enter student marks :');
        stuFunctions.addStudentMarks(stuno,stumarks);
        choice = 0;
    }
    else if(choice==3){

    }
    else if(choice==4){
        let studentID = prompt('Enter Student No (5 characters): ');
        myFunctions.writeStudentDetails(studentID);
        choice=0;
        choice=0;

    }
    else if(choice==5)
    {
      
        choice=0;
        

    }
    else if(choice==6){
        break;
    }
}