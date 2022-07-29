import { ACTION_TYPES } from "../actionTypes";

const refreshState = (prevState, freshState) => ({ ...prevState, ...freshState });


export const reducer = (prevState, { type, payload }) => {
    console.log(prevState, {type, payload});
    switch (type) {
        case ACTION_TYPES.ADD_NEW_SCHOOL:
            return refreshState(prevState, {
                schools: [...prevState.schools, {
                    id: prevState.schools.length + 1,
                    name: payload.name,
                    description: payload.description,
                    maxGroupCount: payload.maxGroupCount,
                    maxStudentsInGroupCount: payload.maxStudentsInGroupCount,
                }],
            })
        case ACTION_TYPES.UPDATE_DATA_SCHOOL:
            return refreshState(prevState, {
                schools: prevState.schools.map((school) =>
                    school.id === payload.id && { ...school, [payload.field]: payload.value }),
            })
        case ACTION_TYPES.REGISTER_COURSE:
            return refreshState(prevState, {
                [prevState.schools.avaibleCourses]: [...prevState.schools.avaibleCourses,
                { courseName: payload.courseName, totalLessons: payload.totalLessons, availableTeachersAmount: payload.availableTeachersAmount }]
            })
        case ACTION_TYPES.START_NEW_GROUP:
            prevState.schools.forEach((school) => school.courses.forEach((course) => {
                if (course.courseName === payload.courseName && course.availableTeachersAmount !== 0) {
                    school.maxGroupCount--;
                    school.availableTeachersAmount--;
                    school.startedGroups.push({ courseName: payload.courseName, teacherName: payload.teacherName, amountOfStudents: payload.amountOfStudents })
                }
            }))
        case ACTION_TYPES.PASSING_LESSON:
            const newPassedLessons = prevState.schools.passedLessons.forEach((lesson) => {
                if (lesson.title !== payload.title) {
                    return { title: payload.title, topics: payload.topics }
                }
            })
            return refreshState(prevState,
                { passedLessons: [...prevState.schools.passedLessons, newPassedLessons] })
        case ACTION_TYPES.END_GROUP:
            const newStartedGroups = prevState.schools.startedGroups.filter((group) =>
                (group.courseName === payload.courseName && group.teacherName !== payload.teacherName));
            const newAvaibleCourses = prevState.schools.avaibleCourses.map((course) => {
                if (course.courseName === payload.courseName) {
                    course.availableTeachersAmount++;
                }
            });
            return refreshState(prevState,
                {
                    startedGroups: newStartedGroups, maxGroupCount: prevState.schools.maxGroupCount + 1,
                    avaibleCourses: newAvaibleCourses
                })
        case ACTION_TYPES.UPDATE_SELECTED_SCHOOL: {
            return refreshState(prevState, {selectedSchool: prevState.schools.filter((school) => school.id === payload.id)})
        }
        case ACTION_TYPES.UPDATE_SELECTED_COURSE: {
            return refreshState(prevState, {selectedSchool: refreshState(prevState.selectedSchool, {selectedCourseId: payload.id})
        })
        }
        default:
            return prevState;
    }
}
