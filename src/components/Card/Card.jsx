import './Card.scss'
import iconEllipsis from '../../assets/images/icon-ellipsis.svg';

function Card({title, currentTime, previousTime, children, image}) {
    return (
        <div className="card">
            <div className="card__cosmetic">
                {/* alt tag empty, because it's purely cosmetic */}
                <img src={image} alt=""/>
            </div>
            <div className="card__title-group row">
                <h2 className="card__name">{title}</h2>
                <img src={iconEllipsis} alt="" className="card__dots"/>
            </div>

            {currentTime === 1 ? <h3 className="card__time">{currentTime} hr</h3> :
                <h3 className="card__time">{currentTime} hrs</h3>}
            {previousTime === 1 ? <h3 className="card__last-week">{children} {previousTime} hr</h3> :
                <h3 className="card__last-week">{children} {previousTime} hrs</h3>}


        </div>
    )
}

export default Card