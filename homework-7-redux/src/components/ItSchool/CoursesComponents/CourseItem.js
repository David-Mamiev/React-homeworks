import {connect} from "react-redux";

function CourseItem ({selectedSchool, dispatch, idCourse}) {
    return(
        <li className="courses__li" onClick={dispatch}>
            {selectedSchool.length ? selectedSchool[0].courses[idCourse].courseName : selectedSchool.courses[idCourse].courseName}
        </li>
    )
}

const mapStateToProps = (state) => ({selectedSchool: state.selectedSchool});

export default connect(mapStateToProps)(CourseItem);