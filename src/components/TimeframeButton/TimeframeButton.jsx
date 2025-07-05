import './TimeframeButton.scss';

function TimeframeButton({isSelected, onSelect, children}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined}
                    onClick={onSelect}>{children}</button>
        </li>
    )
}

export default TimeframeButton;