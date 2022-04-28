import { useEffect, useState } from 'react';
import React from 'react';


import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {

  const HARDCODE_Resturants = [
    {
      id: 'r1',
      name: 'Maki I/O Oscar',
      description: 'Burned salmon and butter, spicy salmon and avocado. 6 pcs.',
      price: '54.00'
    },
    {
      id: 'r2',
      name: 'Maki I/O Rainbow Roll',
      description: 'Salmon, avocado or mango. 6 pcs.',
      price: '44.00',
    },
    {
      id: 'r3',
      name: 'OSHI SUBAN Spicy Maki',
      description: 'A spiced mix of salmon and tuna, sweet potato and tampura. 4 pcs.',
      price: '45.00',
    },
    {
      id: 'r4',
      name: 'CHILLI LEMON Maki',
      description: "Tuna, bass, avocado, lemon and chilli. 6 psc.",
      price: '52.00',
    },
    {
      id: 'r5',
      name: 'MR. PERFECT Maki',
      description: 'Roasted Salmon, avocado, sweet popato and a souce of sake and red wine. 4 pcs.',
      price: '53.00',
    },
    {
      id: 'r6',
      name: 'Ramen Soup',
      description: 'Noodles, carrot, shitake mushrooms, egg and bonito.',
      price: '47.00',
    },
    {
      id: 'r7',
      name: 'Misu Soup',
      description: 'Soy beans soup and tofu, wakama seeweeds and green onion.',
      price: '25.00',
    },
    {
      id: 'r8',
      name: 'White Steamed Rice',
      description: '',
      price: '16.00',
    },
    {
      id: 'r9',
      name: 'Vegtable Roll',
      description: 'Avocado, shitake mushrooms, topping of your choice. 6 pcs.',
      price: '33.00',
    },
    {
      id: 'r10',
      name: 'Vegetarian Rainbow Roll',
      description: 'Avocado, shitake mushrooms, carrot, cucamber with sweet potato topping. 6 pcs.',
      price: '33.00',
    },
    {
      id: 'r11',
      name: 'Vegetarian Napoleon',
      description: 'Avocado, carrot, cucamber, molten gauda cheese with taryaki sause. 4 pcs.',
      price: '48.00',
    },
    {
      id: 'r12',
      name: 'Peanut Maki',
      description: 'Avocado, peanuts and whole rice. 6 pcs.',
      price: '25.00',
    }
    ,
    {
      id: 'r13',
      name: 'Nigiri Avocado',
      description: '2 pcs.',
      price: '12.00',
    }
    ,
    {
      id: 'r14',
      name: 'Nigiri Tamago',
      description: '2 pcs.',
      price: '12.00',
    }
    ,
    {
      id: 'r15',
      name: 'California Roll',
      description: 'Salmon and avocado. 6 pcs.',
      price: '39.00',
    }
  ];

  const mealsList = HARDCODE_Resturants.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;