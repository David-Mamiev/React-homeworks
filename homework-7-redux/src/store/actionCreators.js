import { ACTION_TYPES } from "./actionTypes";

export function addNewSchoolActionCreator (name, description, maxGroupsCount, maxStudentsInGroupCount)  {
    return {type: ACTION_TYPES.ADD_NEW_SCHOOL, payload: {name, description, maxGroupsCount, maxStudentsInGroupCount}}
}

export function updateDataSchoolActionCreator (id, field, value){
    return {type: ACTION_TYPES.UPDATE_DATA_SCHOOL, payload: {id, field, value}}
}

export function registerCourseActionCreator (courseName, totalLessons, avaibleTeachersAmount) {
    return {type: ACTION_TYPES.REGISTER_COURSE, payload: {courseName, totalLessons, avaibleTeachersAmount}}
}

export function startNewGroupActionCreator (courseName, teacherName, amountOfStudents){
    return {type: ACTION_TYPES.START_NEW_GROUP, payload: {courseName, teacherName, amountOfStudents}}
}

export function doneLessonActionCreator (title, topic){
    return {type: ACTION_TYPES.PASSING_LESSON, payload: {title, topic}}
}

export function endGroupActionCreator (courseName, teacherName) {
    return {type: ACTION_TYPES.END_GROUP, payload: {courseName, teacherName}}
}

export function updateSelectedCourseActionCreator (idCourse){
    return {type: ACTION_TYPES.UPDATE_SELECTED_COURSE, payload: {idCourse}}
}

export function updateSelectedSchoolActionCreator (id){
    return {type: ACTION_TYPES.UPDATE_SELECTED_SCHOOL, payload: {id}}
}