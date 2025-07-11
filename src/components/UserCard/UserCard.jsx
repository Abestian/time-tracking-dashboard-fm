import './UserCard.scss';
import TimeframeButton from "../TimeframeButton/TimeframeButton.jsx";
import jeremyPfp from "../../assets/images/image-jeremy.png";

function UserCard({selectedTimeframe, handleSelect}) {

    return (
        <div className="user-card">
            <div className="user-card__info">
                <div className="user-card__image-box">
                    <img className={"user-card__image"} src={jeremyPfp} alt="Jeremy Robson's profile picture"/>
                </div>
                <div className="user-card__person-info">
                    <p className={"user-card__report-text"}>Report for</p>
                    <h2 className={"user-card__report-for"}>Jeremy Robson</h2>
                </div>
            </div>
            <div className="user-card__timeframe-box">
                <menu className="user-card__timeframes">
                    <TimeframeButton isSelected={selectedTimeframe === 'daily'}
                                     onSelect={() => handleSelect('daily')}>Daily</TimeframeButton>
                    <TimeframeButton isSelected={selectedTimeframe === 'weekly'}
                                     onSelect={() => handleSelect('weekly')}>Weekly</TimeframeButton>
                    <TimeframeButton isSelected={selectedTimeframe === 'monthly'}
                                     onSelect={() => handleSelect('monthly')}>Monthly</TimeframeButton>
                </menu>
            </div>


        </div>
    )
}

export default UserCard;