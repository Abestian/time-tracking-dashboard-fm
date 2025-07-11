import './Card.scss'
import iconEllipsis from '../../assets/images/icon-ellipsis.svg';

function Card({title, currentTime, previousTime, children, image, typeClass}) {
    return (
        <div className="card">
            <div className={"card__cosmetic " + typeClass}>
                {/* alt tag empty, because it's purely cosmetic */}
                <img className={"card__icon"} src={image} alt=""/>
            </div>
            <div className="card__content">
                <div className="card__title-group row">
                    <h2 className="card__name">{title}</h2>
                    {/* alt tag empty, because it's purely cosmetic */}
                    <img src={iconEllipsis} alt="" className=""/>
                </div>

                {currentTime === 1 ? <h3 className="card__time">{currentTime} hr</h3> :
                    <h3 className="card__time">{currentTime} hrs</h3>}
                {previousTime === 1 ? <h4 className="card__last-time">{children} {previousTime} hr</h4> :
                    <h4 className="card__last-time">{children} {previousTime} hrs</h4>}
            </div>
        </div>
    )
}

export default Card