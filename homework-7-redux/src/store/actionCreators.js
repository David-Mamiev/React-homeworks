import { ACTION_TYPES } from "./actionTypes";

export function addNewSchool (name, description, maxGroupsCount, maxStudentsInGroupCount)  {
    return {type: ACTION_TYPES.ADD_NEW_SCHOOL, payload: {name, description, maxGroupsCount, maxStudentsInGroupCount}}
}

export function updateDataSchool (id, field, value){
    return {type: ACTION_TYPES.UPDATE_DATA_SCHOOL, payload: {id, field, value}}
}

export function registerCourse (courseName, totalLessons, avaibleTeachersAmount) {
    return {type: ACTION_TYPES.REGISTER_COURSE, payload: {courseName, totalLessons, avaibleTeachersAmount}}
}

export function startNewGroup (courseName, teacherName, amountOfStudents){
    return {type: ACTION_TYPES.START_NEW_GROUP, payload: {courseName, teacherName, amountOfStudents}}
}

export function doneLesson (title, topic){
    return {type: ACTION_TYPES.PASSING_LESSON, payload: {title, topic}}
}

export function endGroup (courseName, teacherName) {
    return {type: ACTION_TYPES.END_GROUP, payload: {courseName, teacherName}}
}