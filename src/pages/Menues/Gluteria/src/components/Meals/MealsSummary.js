import classes from './MealsSummary.module.css';
import React from 'react';


const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Gluteria, 100% Gluten Free</h2>
      <p>
      Alongside the unique coffee, we opened our bakery and confectionery where the pastries and breads inspired by the great patisserie and bolognese in France were born. 

      </p>
      <p>
      As in coffee, here too we use the best raw materials, natural sourdough, fine flour, quality butter and everything in regular French baking to bring you the perfect bite every day.
      </p>
    </section>
  );
};

export default MealsSummary;
