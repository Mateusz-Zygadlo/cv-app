const FinalCv = (props) => {
    return (
        <div className="finalCv">
            <div className="header">
                <div className="firstAndFastName">{props.firstName} {props.lastName}</div>
                <div className="phone">[phone]: {props.number}</div>
                <div className="email">{props.email}</div>
            </div>
            <div className="main">
                <div className="schoolName">[shoolName]: {props.schoolName}</div>
                <div className="titleOfStudy">[titleOfStudy]: {props.titleOfStudy}</div>
                <div className="degree">[degree]: {props.degree}</div>
                <div className="city">[city]: {props.city}</div>
                <div className="dateOfStudy">[dateOfStudy]: {props.dateOfStudy}</div>
            </div>
            <div className="footer">
                <div className="companyName">[companyName]: {props.companyName}</div>
                <div className="positionTitle">[positionTitle]: {props.positionTitle}</div>
                <div className="mainTasks">[mainTasks]: {props.mainTasks}</div>
                <div className="city">[city]: {props.cityCompany}</div>
            </div>
        </div>
    )
}

export default FinalCv;