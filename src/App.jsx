import Card from "./components/Card/Card.jsx";
import Container from "./components/Container/Container.jsx";
import UserCard from "./components/UserCard/UserCard.jsx";
import {useEffect, useState} from "react";

import iconWork from "./assets/images/icon-work.svg";
import iconExercise from "./assets/images/icon-exercise.svg";
import iconPlay from "./assets/images/icon-play.svg";
import iconSelfCare from "./assets/images/icon-self-care.svg";
import iconSocial from "./assets/images/icon-social.svg";
import iconStudy from "./assets/images/icon-study.svg";

function App() {
    const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

    function handleSelect(selectedTimeframe) {
        setSelectedTimeframe(selectedTimeframe);
    }

    // helper array to set correct timeframe when choosing different options
    const timeframeLabels = {
        daily: 'Yesterday - ',
        weekly: 'Last Week - ',
        monthly: 'Last Month - '
    }

    // helper array to dynamically set colors and icons of cards' cosmetic part
    const images = {
        "Work": {
            icon: iconWork,
            className: "card__work",
        },
        "Exercise": {
            icon: iconExercise,
            className: "card__exercise",
        },
        "Play": {
            icon: iconPlay,
            className: "card__play",
        },
        "Self Care": {
            icon: iconSelfCare,
            className: "card__self-care",
        },
        "Social": {
            icon: iconSocial,
            className: "card__social",
        },
        "Study": {
            icon: iconStudy,
            className: "card__study",
        },
    }

    const [data, setData] = useState([]);
    const getData = () => {
        fetch('data.json'
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <Container>
                <UserCard selectedTimeframe={selectedTimeframe} handleSelect={handleSelect}/>
                {data.length > 0 && data.map((item) =>
                    <Card key={item.title}
                          title={item.title}
                          image={images[item.title].icon}
                          typeClass={images[item.title].className}
                          currentTime={item.timeframes[selectedTimeframe].current}
                          previousTime={item.timeframes[selectedTimeframe].previous}>{timeframeLabels[selectedTimeframe]}</Card>)
                }
            </Container>
        </>
    )
}

export default App

