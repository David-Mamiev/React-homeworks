import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from "./reducers/reducer";

const initState = {
    schools: [
        {
            name: "Demo School 1",
            description: "description of Demo School 1. description of Demo School 1. description of Demo School 1",
            id: 0,
            maxGroupCount: 3,
            totalStudents: 145,
            selectedCourseId: 0,
            avaibleCourses: [],
            startedGroups: [],
            courses: [
                {
                    courseName: "HTML",
                    id: 0,
                    countOfLessons: 12,
                    availableTeachersAmount: 6,
                    maxStudentsInGroupCount: 20,
                    learningGroups: [
                        {
                            teacherName: "Andrii D.",
                            id: 1,
                            passedLessons: 3,
                            countOfstudents: 14,
                            startGroupData: "2022/04/22"
                        },
                        {
                            teacherName: "Rick D.",
                            id: 2,
                            passedLessons: 7,
                            countOfstudents: 17,
                            startGroupData: "2022/02/06"
                        },
                        {
                            teacherName: "Oleg B.",
                            id: 3,
                            passedLessons: 11,
                            countOfstudents: 14,
                            startGroupData: "2022/03/25"
                        }
                    ]
                },
                {
                    courseName: "CSS",
                    id: 1,
                    countOfLessons: 18,
                    availableTeachersAmount: 6,
                    maxStudentsInGroupCount: 15,
                    learningGroups: [
                        {
                            teacherName: "Andrii D.",
                            id: 1,
                            passedLessons: 3,
                            countOfstudents: 11,
                            startGroupData: "2022/02/06"
                        },
                        {
                            teacherName: "Oleg B.",
                            id: 2,
                            passedLessons: 11,
                            countOfstudents: 14,
                            startGroupData: "2022/03/25"
                        }
                    ]

                },
                {
                    courseName: "JS",
                    id: 2,
                    countOfLessons: 29,
                    availableTeachersAmount: 9,
                    maxStudentsInGroupCount: 30,
                    learningGroups: [
                        {
                            teacherName: "Rick D.",
                            id: 1,
                            passedLessons: 20,
                            countOfstudents: 17,
                            startGroupData: "2022/02/06"
                        },
                        {
                            teacherName: "Oleg B.",
                            id: 2,
                            passedLessons: 11,
                            countOfstudents: 14,
                            startGroupData: "2022/03/25"
                        }
                    ]
                },
            ],

        },
        {
            name: "Step",
            description: "it is desctription",
            id: 1,
            maxGroupCount: 3,
            totalStudents: 120,
            selectedCourseId: 0,
            courses: [
                {
                    courseName: "QA Testing",
                    id: 0,
                    countOfLessons: 26,
                    availableTeachersAmount: 4,
                    maxStudentsInGroupCount: 25,
                    learningGroups: [
                        {
                            teacherName: "Dmitriy A.",
                            id: 1,
                            passedLessons: 3,
                            countOfstudents: 14,
                            startGroupData: "2021/10/02"
                        },
                        {
                            teacherName: "Marta D.",
                            id: 2,
                            passedLessons: 2,
                            countOfstudents: 17,
                            startGroupData: "2022/02/06"
                        },
                    ]
                },
                {
                    courseName: "Node JS",
                    id: 1,
                    countOfLessons: 14,
                    availableTeachersAmount: 2,
                    maxStudentsInGroupCount: 17,
                    learningGroups: [
                        {
                            teacherName: "Walter M.",
                            id: 1,
                            passedLessons: 3,
                            countOfstudents: 11,
                            startGroupData: "2022/02/06"
                        },
                        {
                            teacherName: "Britson B.",
                            id: 2,
                            passedLessons: 11,
                            countOfstudents: 14,
                            startGroupData: "2022/03/25"
                        }
                    ]

                },
                {
                    courseName: "Managment",
                    id: 2,
                    countOfLessons: 17,
                    availableTeachersAmount: 9,
                    maxStudentsInGroupCount: 30,
                    learningGroups: [
                        {
                            teacherName: "Rick D.",
                            id: 1,
                            passedLessons: 20,
                            countOfstudents: 17,
                            startGroupData: "2022/02/06"
                        },
                        {
                            teacherName: "Oleg B.",
                            id: 2,
                            passedLessons: 11,
                            countOfstudents: 14,
                            startGroupData: "2022/03/25"
                        }
                    ]
                },
            ],
        },
        {
            name: "Hillel",
            selectedCourseId: 0,
            description: "Hillel school description",
            id: 2,
            totalStudents: 95,
            courses: [
                {
                    courseName: "QA Proffesional",
                    id: 0,
                    countOfLessons: 26,
                    availableTeachersAmount: 4,
                    maxStudentsInGroupCount: 25,
                    learningGroups: [
                        {
                            teacherName: "Dmitriy A.",
                            id: 1,
                            passedLessons: 3,
                            countOfstudents: 14,
                            startGroupData: "2021/10/02"
                        },
                        {
                            teacherName: "Marta D.",
                            id: 2,
                            passedLessons: 2,
                            countOfstudents: 17,
                            startGroupData: "2022/02/06"
                        },
                    ]
                },
                {
                    courseName: "React",
                    id: 1,
                    countOfLessons: 14,
                    availableTeachersAmount: 2,
                    maxStudentsInGroupCount: 17,
                    learningGroups: [
                        {
                            teacherName: "Walter M.",
                            id: 1,
                            passedLessons: 3,
                            countOfstudents: 11,
                            startGroupData: "2022/02/06"
                        },
                        {
                            teacherName: "Britson B.",
                            id: 2,
                            passedLessons: 11,
                            countOfstudents: 14,
                            startGroupData: "2022/03/25"
                        }
                    ]

                },
                {
                    courseName: "Angular",
                    id: 2,
                    countOfLessons: 17,
                    availableTeachersAmount: 9,
                    maxStudentsInGroupCount: 30,
                    learningGroups: [
                        {
                            teacherName: "Rick D.",
                            id: 1,
                            passedLessons: 20,
                            countOfstudents: 17,
                            startGroupData: "2022/02/06"
                        },
                        {
                            teacherName: "Oleg B.",
                            id: 2,
                            passedLessons: 11,
                            countOfstudents: 14,
                            startGroupData: "2022/03/25"
                        }
                    ]
                },
            ],
        }
    ],
    selectedSchool: [],
};
initState.selectedSchool = initState.schools[0];

export const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(thunk)));
