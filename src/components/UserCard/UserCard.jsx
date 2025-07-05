import './UserCard.scss';
import TimeframeButton from "../TimeframeButton/TimeframeButton.jsx";

function UserCard({selectedTimeframe, handleSelect}) {

    return (
        <div className="user-card">
            <h2>Hello</h2>
            <p>Name Surname</p>
            <menu>
                <TimeframeButton isSelected={selectedTimeframe === 'daily'}
                                 onSelect={() => handleSelect('daily')}>Daily</TimeframeButton>
                <TimeframeButton isSelected={selectedTimeframe === 'weekly'}
                                 onSelect={() => handleSelect('weekly')}>Weekly</TimeframeButton>
                <TimeframeButton isSelected={selectedTimeframe === 'monthly'}
                                 onSelect={() => handleSelect('monthly')}>Monthly</TimeframeButton>
            </menu>
        </div>
    )
}

export default UserCard;