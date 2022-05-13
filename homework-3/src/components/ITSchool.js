import { Component } from "react";
import { Course } from "./Course";
import { LearningGroup } from "./LearningGroup";

export class ITSchool extends Component{
    constructor(courseName, description, maxCountOfGroup, maxCountOfStudents){
        super();
        this.courseName = courseName;
        this.description = description;
        this.maxCountOfGroup = maxCountOfGroup;
        this.maxCountOfStudents = maxCountOfStudents;
        this.avaibleCourses = [];
        this.startedGroups = [];
    }
    registerCourse(courseName, totalLessons, availableTeachersAmount){
        if(this.avaibleCourses.every((elem) => elem.courseName !== courseName)){
            this.avaibleCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
        }
    }


    startLearningGroup(courseName, teacherName, amountOfStudents){
        this.avaibleCourses.forEach((course) => {
            if(course.courseName === courseName && course.availableTeachersAmount !== 0){
                this.startedGroups.push(LearningGroup(courseName, teacherName, amountOfStudents));
                this.maxCountOfGroup--;
                course.availableTeachersAmount--;
            } else {
                console.log("Такого курса нет =(");
            }
        })
    }

    endLearningGroup(courseName, teacherName) {
        this.startedGroups = this.startedGroups.filter((group) => (group.courseName === courseName && group.teacherName !== teacherName))
            this.maxCountOfGroup++

        
        this.avaibleCourses.forEach((course) => {
            if(course.courseName === courseName){
                course.availableTeachersAmount++;
            }
        })
    }
    
    getLearningGroupByCourseName(courseName){
        const groupByCourse = this.startedGroups.filter((group) => group.courseName === courseName);
        return  groupByCourse;
    }
}

const reactCourse = new ITSchool("React", "description", 4, 15);
console.log(reactCourse);