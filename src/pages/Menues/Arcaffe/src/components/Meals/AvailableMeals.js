import { useEffect, useState } from 'react';
import React from 'react';


import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {

  const HARDCODE_Resturants = [
    {
      id: 'r1',
      name: 'Pizza - Margarita',
      description: 'Mozzarella, bazilikum leaves and olive oil.',
      price: '50.00'
    },
    {
      id: 'r2',
      name: 'Pizza - Fungi',
      description: 'Mushrooms, mozzarella, and olive oil.',
      price: '55.00',
    },
    {
      id: 'r3',
      name: 'Pizza - Goat Cheese and Arugula',
      description: 'Mozzarella, goat cheese, arugula leaves and parmesan.',
      price: '55.00',
    },
    {
      id: 'r4',
      name: 'Fettuccine Tomatoes',
      description: "Tomatoe souce, parmesan and fresh bazilikum leaves.",
      price: '48.00',
    },
    {
      id: 'r5',
      name: 'Sweet Potato Ravioli',
      description: 'Filled with sweet popato cream, with cream souce, parmesan and fresh bazilikum leaves.',
      price: '62.00',
    },
    {
      id: 'r6',
      name: 'Chesnut Tortellini',
      description: 'Filled with chesnut cream, with cream souce, parmesan and fresh bazilikum leaves.',
      price: '64.00',
    },
    {
      id: 'r7',
      name: 'Mozzarella Toast',
      description: 'Mozzarella, parmesan, tomatoes, bazilikum and pesto,',
      price: '48.00',
    },
    {
      id: 'r8',
      name: 'Spinach and Mushroom Toast',
      description: 'Mozzarella, mushrooms in balsami souce, onion jam and spinach.',
      price: '48.00',
    },
    {
      id: 'r9',
      name: 'Mediterranean Salad',
      description: 'Cherry tomatoes, cucumber, chickpeas, roasted eggplant, Bulgarian cheese, kalamata olives, rocket leaves, mint leaves, parsley leaves, coriander leaves, blush, chili pepper in olive oil vinaigrette and lemon.',
      price: '56.00',
    },
    {
      id: 'r10',
      name: 'Quinoa and Lentil Aalad (Vegan)',
      description: 'Quinoa, black lentils, roasted sweet potato cubes, cranberries, rocket leaves, lettuce, mint, parsley, seed mixture in olive oil and lemon vinaigrette. * Served with personal cereal bread from the oven and butter.',
      price: '56.00',
    },
    {
      id: 'r11',
      name: 'Asian Chicken Salad / Tofu (Vegan)',
      description: 'Chunks of chicken breast in teriyaki, rocket leaves, lettuce, burgul, cucumber, cabbage, radish, kohlrabi, carrots, scallions, mint, coriander, roasted peanuts and peanut sauce.',
      price: '58.00',
    },
    {
      id: 'r12',
      name: 'Soup - Tomatoes / lentils / minestrone',
      description: 'Served with house bread and butter.',
      price: '34.00',
    }
    ,
    {
      id: 'r13',
      name: 'Salmon Piccolo Sandwich',
      description: 'Challah bun, smoked salmon, cream cheese, slice of fresh lemon, cucumber and scallions.',
      price: '19.00',
    }
    ,
    {
      id: 'r14',
      name: 'Avocado Piccolo Sandwich',
      description: 'Healthy bun, guacamole, roasted pepper, tomato and arugula.',
      price: '18.00',
    }
    ,
    {
      id: 'r15',
      name: 'Morning Bri Sandwich',
      description: 'Bread, berry cheese, olive tapenade, tomato tapenade and arugula.',
      price: '18.00',
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