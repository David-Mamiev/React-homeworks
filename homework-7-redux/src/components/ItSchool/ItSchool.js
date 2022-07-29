import Header from "./Header";
import "./style.scss";
import CoursesMap from "./CoursesComponents/CoursesMap";
import MapLearningGroups from "./LearningGroups/MapLearningGroups";

export function ItSchool () {
    return(
        <div className="school">
            <Header />
            <div className="school__courses">
                <CoursesMap />
                <MapLearningGroups />
            </div>
        </div>
    )
}