import Card from "./components/Card/Card.jsx";
import Container from "./components/Container/Container.jsx";
import UserCard from "./components/UserCard/UserCard.jsx";
import {useEffect, useState} from "react";

function App() {
    const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

    function handleSelect(selectedTimeframe) {
        setSelectedTimeframe(selectedTimeframe);
    }

    const timeframeLabels = {
        daily: 'Yesterday - ',
        weekly: 'Last Week - ',
        monthly: 'Last Month - '
    }

    const [data, setData] = useState([]);
    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
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
                          currentTime={item.timeframes[selectedTimeframe].current}
                          previousTime={item.timeframes[selectedTimeframe].previous}>{timeframeLabels[selectedTimeframe]}</Card>)
                }
            </Container>
        </>
    )
}

export default App

