import Card from "./components/Card/Card.jsx";
import Container from "./components/Container/Container.jsx";
import UserCard from "./components/UserCard/UserCard.jsx";
import {useEffect, useState} from "react";

function App() {
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
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <Container>
                <UserCard/>
                {
                    data && data.length > 0 && data.map((item) =>
                        <Card key={item.title} title={item.title}
                              currentTime={item.timeframes.daily.current}
                              previousTime={item.timeframes.daily.previous}/>)
                }

            </Container>
        </>
    )
}

export default App

