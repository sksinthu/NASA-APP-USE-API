export default function SideBar(props) {
    const {handleClick,data }=props;
    return (
        <div className="sidebar">
            <div  className="bgOverlay"></div>
            <div className="sidebarContents">
            <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleClick}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}