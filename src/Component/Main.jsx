import image from "./../images/mars.png"
export default function Main(props) {
    const {data}=props;
    return (
        <div className="imgContainer">
            
            <img src={image} alt={data.title} className="bgImage" />
        </div>
    )
}
