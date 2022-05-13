import { Component } from "react";

export class Course extends Component{
    constructor(courseName, countOfLessons, availableTeachersAmount){
        super();
        this.courseName = courseName;
        this.countOfLessons = countOfLessons;
        this.availableTeachersAmount = availableTeachersAmount;
    };
}