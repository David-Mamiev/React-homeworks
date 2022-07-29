import { connect } from "react-redux";
import {updateSelectedSchoolActionCreator} from "../../../store";

function ItemSchool ({schools, dispatch, idSchool}) {
    return (
        <div className="side-bar__item" onClick={() => dispatch(updateSelectedSchoolActionCreator(idSchool))}>{schools[idSchool].name}</div>
    )
}
const mapStateToProps = (state) => ({schools: state.schools});

export default connect(mapStateToProps)(ItemSchool)   