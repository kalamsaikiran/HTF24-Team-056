import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

// Meal data
const mealData = [
  { meal: "Oatshake,2banana", Carbohydrates: 40, Protein: 20, Fat: 20, Fiber: 10, Vitamins: 10 },
  { meal: "50g rice,100g chicken,2boiledeggs", Carbohydrates: 35, Protein: 25, Fat: 20, Fiber: 10, Vitamins: 10 },
  { meal: "50g rice,100g chicken,2boiledegg", Carbohydrates: 30, Protein: 20, Fat: 30, Fiber: 10, Vitamins: 10 },
  { meal: "oatshake,2banana", Carbohydrates: 50, Protein: 10, Fat: 10, Fiber: 20, Vitamins: 10 },
];

// Checklist and Chart component
const Trackyourmeal = () => {
  const [checkedMeals, setCheckedMeals] = useState([]);

  // Toggle meal selection
  const toggleMeal = (meal) => {
    setCheckedMeals((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal]
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Daily Meal Tracker</h2>

      {/* Checklist */}
      <div style={{ marginBottom: "20px", textAlign: "left" }}>
        <h3>Meals Checklist</h3>
        {mealData.map(({ meal }) => (
          <label key={meal} style={{ display: "block", margin: "5px 0" }}>
            <input
              type="checkbox"
              checked={checkedMeals.includes(meal)}
              onChange={() => toggleMeal(meal)}
            />
            {` ${meal}`}
          </label>
        ))}
      </div>

      {/* Nutrient Chart */}
      <ResponsiveContainer width="90%" height={400}>
        <BarChart data={mealData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="meal" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Carbohydrates" stackId="a" fill="#8884d8" />
          <Bar dataKey="Protein" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Fat" stackId="a" fill="#ffc658" />
          <Bar dataKey="Fiber" stackId="a" fill="#ff7f50" />
          <Bar dataKey="Vitamins" stackId="a" fill="#8dd1e1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Trackyourmeal;
