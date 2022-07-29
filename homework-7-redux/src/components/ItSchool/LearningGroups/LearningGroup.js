import { PassedLessonsItem } from "./PassedLessonsItem";

export function LearningGroup({ dataGroup, countOfLessons, countMaxStudents }) {
    
    return (
        <li className="group-list__li">
            <span className="group-list__title">Learning Group</span>
            <span className="group-list__text-blocks">
                <span className="group-list__text-block">
                    <h5 className="group-list__title-li">{dataGroup.teacherName}</h5>
                    <p className="group-list__title-par">teacher</p>
                </span>
                <span className="group-list__text-block">
                    <h5 className="group-list__title-li">{dataGroup.passedLessons} / {countOfLessons}</h5>
                    <p className="group-list__title-par">passed lessons</p>
                </span>
                <span className="group-list__text-block">
                    <h5 className="group-list__title-li">{dataGroup.countOfstudents} / {countMaxStudents}</h5>
                    <p className="group-list__title-par">students</p>
                </span>
                <span className="group-list__text-block">
                    <h5 className="group-list__title-li">{dataGroup.startGroupData}</h5>
                    <p className="group-list__title-par">group started</p>
                </span>
            </span>
        </li>
    )
}