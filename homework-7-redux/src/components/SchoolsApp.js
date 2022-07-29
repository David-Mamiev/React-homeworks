import  SideBar  from "./ItSchool/SideBar/MapSchools";
import { ItSchool } from "./ItSchool/ItSchool";

export function SchoolsApp () {
    return(
        <div className="it-school">
            <SideBar />
            <ItSchool />
        </div>
    )
}
