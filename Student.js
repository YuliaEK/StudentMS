class Student{
    constructor()
    {

    }
    set studentNo(stuno)
    {
        if(stuno.length==5)
        {
        this.stu_no=stuno
        }
        else
        {
            console.log('Invalid Student No');
        }
    }
    get studentNo(){
        return this.stu_no;
    }
    set studentName(sname)
    {
        if(sname.length>=3)
        {
        this.stu_name=sname;
        }
        else
        {
            console.log('Student Name should contain at least 3 characters');
        }
    }
    get studentName()
    {
        return this.stu_name;
    }
    set studentBirthday(sBday)
    {
        if(sBday.length==8)
        {
            this.stu_birthday=sBday;
        }
    
        else
        {
            console.log('Invalid Input');
        }
    }
    set studentEmail(email){
        this.stu_email=email;
    }
    get studentEmail()
    {
        return this.stu_email;
    }

    set studentClass(sClass)
    {
        this.stu_class=sClass;
    }
    get studentClass(){
        return this.stu_class;
    }

    set studentMarks(marks)
    {
        if(marks>=0 && marks<=100)
        {
            this.stu_marks=marks;
        }
        else
        {
            console.log('Invalid Input');
        }
    }
    get studentMarks()
    {
        return this.stu_marks;
    }
}

module.exports={Student};