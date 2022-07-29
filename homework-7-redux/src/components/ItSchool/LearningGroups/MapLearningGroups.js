import { connect } from "react-redux";
import { LearningGroup } from "./LearningGroup";

import "./learningGroupsStyle.scss";

function MapLearningGroups({ selectedCourseId, courses }) {
    const selectedCourse = courses[selectedCourseId];
    return (
        <div className="learning-group">
            <h3 className="learning-group__title">Learning Groups for course {selectedCourse.courseName}</h3>
            <ul className="learning-group__list">
                {
                    selectedCourse.learningGroups.map((learningGroup, id) =>
                        <LearningGroup key={id} dataGroup={learningGroup}
                            countOfLessons={selectedCourse.countOfLessons}
                            countMaxStudents={selectedCourse.maxStudentsInGroupCount}
                        />)
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({ courses: state.selectedSchool.length ? state.selectedSchool[0].courses : state.selectedSchool.courses, selectedCourseId: state.selectedSchool.length ? state.selectedSchool[0].selectedCourseId : state.selectedSchool.selectedCourseId });

export default connect(mapStateToProps)(MapLearningGroups);