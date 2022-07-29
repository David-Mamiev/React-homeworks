import { connect } from "react-redux";

function Header({ selectedSchool, dispatch }) {
    let objSelectedSchool;
    if (selectedSchool.length){
        objSelectedSchool = selectedSchool[0];
    }
    return (
        <header className="header">
            <div className="header-block">
                <h1 className="header__title">{objSelectedSchool ?  objSelectedSchool.name : selectedSchool.name}</h1>
                <p className="header__description">{objSelectedSchool ? objSelectedSchool.description : selectedSchool.description}</p>
            </div>
            <div className="header-groups">
                <p className="header__group-count">GroupsCount: 2 / 3</p>
                <p className="header__total-students">Total amount of students: { objSelectedSchool ? objSelectedSchool.totalStudents : selectedSchool.totalStudents}</p>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({ selectedSchool: state.selectedSchool });

export default connect(mapStateToProps)(Header);