import { connect } from "react-redux";

import CourseItem from "./CourseItem";

function CoursesMap({ courses, dispatch }) {
    return (
        <div className="courses">
            <h6 className="courses__title">Courses</h6>
            <ul className="courses__list">
                {courses.map((course, id) => <CourseItem key={id} idCourse={id} />)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({ courses: state.selectedSchool.length ? state.selectedSchool[0].courses : state.selectedSchool.courses });

export default connect(mapStateToProps)(CoursesMap);