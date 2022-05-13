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
        if(this.avaibleCourses.some((course) => course.courseName === courseName && course.availableTeachersAmount !== 0)){
            this.startedGroups.push(LearningGroup(courseName, teacherName, amountOfStudents));
            this.maxCountOfGroup--;
        }
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
        // if(courseName && teacherName !== 0){
            // availableTeachersAmount--;
            // return new LearningGroup();
        // }
        return false;
    }
    
    getLearningGroupByCourseName(courseName){
        const groupByCourse = this.startedGroups.filter((group) => group.courseName === courseName);
        return  groupByCourse;
    }
}