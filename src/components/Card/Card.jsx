import './Card.scss'
import iconEllipsis from '../../assets/images/icon-ellipsis.svg';

function Card() {
    return (
        <div className="card">
            <div className="card__title-group row">
                <h2 className="card__name">Work</h2>
                <img src={iconEllipsis} alt="" className="card__dots"/>
            </div>
            <h3 className="card__time">32hrs</h3>
            <h3 className="card__last-week">Last Week - 36hrs</h3>
        </div>
    )
}

export default Card