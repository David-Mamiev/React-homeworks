import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const initState = {
    schools: [{
        name: "DEMO SCHOOL",
        description: "bla bla bla",
        id: 1,
        maxGroupCount: 3,
        maxStudentsInGroupCount: 10,
        courses: [
            {
                courseName: "HTML",
                countOfLessons: 12,
                availableTeachersAmount: 6,
            },
            {
                courseName: "CSS",
                countOfLessons: 18,
                availableTeachersAmount: 6,
            },
        ],
        avaibleCourses: [],
        startedGroups: []
    }],
    // selectedSchool: this.schools[0],
    passedLessons: [],
    history: [],
};

const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(thunk)));

export default store;