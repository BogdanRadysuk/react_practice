import logo from './logo.svg';
import './App.css';
import UserComponent from "./components/UserComponent";
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити (описати) 6 персонажів з цьго апі.
function App() {
    return (
        <>
            <div>
                <UserComponent
                    id={'84'}
                    name={'Cult Leader Morty'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={<img src="https://rickandmortyapi.com/api/character/avatar/84.jpeg" alt="error"/>}
                />
            </div>
            <div>
                <UserComponent
                    id={'5'}
                    name={'Jerry Smith'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={<img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt="error"/>}
                />
            </div>
            <div>
                <UserComponent
                    id={'55'}
                    name={'Boobloosian'}
                    status={'Dead'}
                    species={'Alien'}
                    gender={'unknown'}
                    image={<img src="https://rickandmortyapi.com/api/character/avatar/55.jpeg" alt="error"/>}
                />
            </div>
            <div>
                <UserComponent
                    id={'78'}
                    name={'Cowboy Rick'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={<img src="https://rickandmortyapi.com/api/character/avatar/78.jpeg" alt="error"/>}
                />
            </div>
            <div>
                <UserComponent
                    id={'292'}
                    name={'Rick K-22'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                    image={<img src="https://rickandmortyapi.com/api/character/avatar/292.jpeg" alt="error"/>}
                />
            </div>
            <div>
                <UserComponent
                    id={'411'}
                    name={'Alien Mexican Armada'}
                    status={'unknown'}
                    species={'Alien'}
                    gender={'Male'}
                    image={<img src="https://rickandmortyapi.com/api/character/avatar/411.jpeg" alt="error"/>}
                />
            </div>
        </>
    );
}

export default App;