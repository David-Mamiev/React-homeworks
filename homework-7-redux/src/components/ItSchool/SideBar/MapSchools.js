import { connect } from "react-redux";
import { useEffect } from "react";

import "./style.scss";
import ItemSchool from "./ItemSchool";
import { updateDataSchoolActionCreator } from "../../../store";

export function SideBar({ schools, dispatch }) {

    return (
        <div className="side-bar">
            {schools.map((school, id) => <ItemSchool key={id} idSchool={id} />)}
        </div>
    )
}

const mapStateToProps = (state) => ({ schools: state.schools });
export default connect(mapStateToProps)(SideBar);
