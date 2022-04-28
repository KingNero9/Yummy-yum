import React from 'react';
import Card from './cardRest';
import './availableResturants.css';
import { useState } from 'react';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

import { Link, BrowserRouter as Router } from 'react-router-dom';

import Moon from '../images/moon.png';
import Vivino from '../images/vivino.PNG';
import Giraffe from '../images/giraffe.PNG';
import J17 from '../images/J17.PNG';
import Arcaffe from '../images/arcaffe.PNG';
import Garage from '../images/garage.jpg';
import OnlyMeat from '../images/onlymeat.PNG';
import NonoMimi from '../images/nonomimi.PNG';
import Gluteria from '../images/gluteria.PNG';

import MoonMenu from '../pages/Menues/Moon/src/moon_Menu';
import ArcaffeMenu from '../pages/Menues/Arcaffe/src/arcaffe_Menu';



const HARDCODE_Resturants = [
    {
        id: 'r1',
        name: 'Moon - Sushi Bar',
        description: 'Sushi resturants that provides the customers the best sushi experience there is.',
        label: 'Asian',
        picture: Moon,
        phone: '03-6291155',
        address: 'Bograshov 58, Tel-Aviv',
        path: '/moon',
    },
    {
        id: 'r2',
        name: 'Vivino',
        description: 'A magical place created for familied and good friends to hang out, eat and be happy! Just like the italians know.',
        label: 'Italian',
        picture: Vivino,
        phone: '03-6550575',
        address: 'Moshe Bakar 12, Rishon Lzion',
        path: 'vivino',
    },
    {
        id: 'r3',
        name: 'Giraffe',
        description: 'An asian resturant based and inspired by the eastern culture. Noodles, sushi and western deserts.',
        label: 'Asian',
        picture: Giraffe,
        phone: '03-9592400',
        address: 'Habarzel 19, Tel-Aviv',
        path: 'giraffe',
    },
    {
        id: 'r4',
        name: 'J17',
        description: "A 100% vegan resturant. It's one of the warmest and happiest to eat and hang out.",
        label: 'Vegan',
        picture: J17,
        phone: '03-9442773',
        address: 'Yarmiyahu 17, Tel-Aviv',
        path: 'j17',
    },
    {
        id: 'r5',
        name: 'Arcaffe',
        description: 'The new generation of coffee, everything you need for the perfect coffe.',
        label: 'Coffe',
        picture: Arcaffe,
        phone: '076-8119626',
        address: 'Big Yehud, Yehud-Monosson',
        path: 'arcaffe',
    },
    {
        id: 'r6',
        name: 'The Garage',
        description: 'The best american burger, you cant find it anywhere else! Good music and fun for everyone!',
        label: 'Meat',
        picture: Garage,
        phone: '03-6499600',
        address: 'Raul Valenberg 24, Tel-Aviv',
        path: 'the-garage',
    },
    {
        id: 'r7',
        name: 'Only Meat',
        description: 'A quality meat, made with love, professinality and respect to the meat.',
        label: 'Meat',
        picture: OnlyMeat,
        phone: '170-055-0028',
        address: 'Shmotkin 10, Rishon Lzion',
        path: 'only-meat',
    },
    {
        id: 'r8',
        name: 'Nono Mimi',
        description: 'A menu inspired by southern Italy, with a warm atmosphere and good food.',
        label: 'Italian',
        picture: NonoMimi,
        phone: '09-8353600',
        address: 'Hameyasdim 3, Kiryat Ono',
        path: 'nonomimi',
    },
    {
        id: 'r9',
        name: 'Gluteria',
        description: '100% Gluten free food, for everyone who enjoys tasty meals! Come and join us!',
        label: 'Gluten Free',
        picture: Gluteria,
        phone: '03-6837680',
        address: 'Arie Dissentchik 5, Tel-Aviv',
        path: 'gluteria',
    }
];

const AvailableMeals = () => {
    const [name, setName] = useState(''); // the value of the search field 
    const [foundUsersName, setFoundUsersName] = useState(HARDCODE_Resturants);// the search result

    const filterName = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = HARDCODE_Resturants.filter((user) => {
                return user.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundUsersName(results);
        } else {
            setFoundUsersName(HARDCODE_Resturants);
            // If the text field is empty, show all users
        }

        setName(keyword);
    };


    const navigate = useNavigate();


    return (
        <React.Fragment>
            <Navbar />
            <div className="topWrapper">
                <input
                    type="search"
                    value={name}
                    onChange={filterName}
                    className="input"
                    placeholder="Search Restaurant Name"
                />
                <a href="#" className="logout">Logout</a>
            </div>
            <ul>
                {(foundUsersName && foundUsersName.length > 0) ? (
                    foundUsersName.map(item => (
                        <Card key={item.id}>
                            <div className="wrapper">
                                <div className="left">
                                    <div className="name">{item.name}</div>
                                    <div className="label">{item.label}</div>
                                    <div className="description">{item.description}</div>
                                    <Link className="read_more" to={item.path}>Go to menu</Link>
                                    <div className="details">
                                        <a href={item.phone}>{item.phone}</a>
                                        <li className="address">{item.address}</li>
                                    </div>
                                </div>
                                <div className="right">
                                    <img className="picture" src={item.picture} alt="resturant image" />
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </ul>
        </React.Fragment>
    );
};

export default AvailableMeals;
