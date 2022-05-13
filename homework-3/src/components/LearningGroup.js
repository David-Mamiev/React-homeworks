import { Component } from "react";
import { Lesson } from "./Lesson";

export class LearningGroup extends Component{
    constructor(courseName, teacherName, countOfStudents){
        super();
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.countOfStudents = countOfStudents;
        this.passedLessons = [];
    }
    doneLesson(title, topics){
        if (this.passedLessons.length > 0) {
            this.lessonsCheck(title, topics);
            this.passedLessons.push(new Lesson(title, topics));
        }
    }
    lessonsCheck(title, topics){
        this.passedLessons.forEach((lesson) => {
            if(lesson.title !== title){
                this.passedLessons.push(new Lesson(title, topics))
            }
            else {
                console.log("Lesson ended!");
            }
        })
    }

}