import { useState } from "react";
import NutritionCard from "./card/Nutritioncard";
import FoodCard from "./card/Foodcard";
import TipCard from "./card/Tipcard";

const goals = [
  { id: "muscle", label: "Muscle Gain", tagline: "Prioritize protein and recovery." },
  { id: "fatloss", label: "Fat Loss", tagline: "Choose filling, low-sugar meals." },
  { id: "energy", label: "Energy Boost", tagline: "Balance carbs and healthy fats." },
] as const;

type GoalId = (typeof goals)[number]["id"];

const goalTips: Record<GoalId, string[]> = {
  muscle: [
    "Eat enough protein daily.",
    "Recover with balanced meals after workouts.",
    "Keep your meals consistent for steady progress.",
  ],
  fatloss: [
    "Drink plenty of water throughout the day.",
    "Avoid sugary drinks and oversized portions.",
    "Add vegetables to every meal.",
  ],
  energy: [
    "Include complex carbs for sustained energy.",
    "Don’t skip breakfast.",
    "Keep healthy fats in your daily meals.",
  ],
};

export default function Nutrition() {
  const [selectedGoal, setSelectedGoal] = useState<GoalId>("muscle");

  const activeGoal = goals.find((goal) => goal.id === selectedGoal) ?? goals[0];
  const tips = goalTips[selectedGoal];

  return (
    <div className="min-h-screen text-white">

      {/* Hero */}

      <section className="py-20 text-center px-5">

        <h1 className="text-5xl text-white font-bold">
          Fuel Your Body
        </h1>

        <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
          Healthy nutrition is the key to muscle growth,
          fat loss and overall fitness.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedGoal === goal.id
                  ? "bg-green-500 text-black border-green-500"
                  : "border-gray-600 text-gray-300 hover:border-green-400"
              }`}
            >
              {goal.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-green-500/30 bg-zinc-900 p-6 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-green-400">Selected focus</p>
          <h2 className="text-2xl font-semibold mt-2">{activeGoal.label}</h2>
          <p className="text-gray-400 mt-2">{activeGoal.tagline}</p>
        </div>

      </section>

      {/* Nutrition */}

      <section className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl font-bold mb-8">
          Essential Nutrients
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <NutritionCard
            title="Protein"
            value="4 kcal/g"
            desc="Helps muscle recovery and growth."
          />

          <NutritionCard
            title="Carbohydrates"
            value="4 kcal/g"
            desc="Main source of energy."
          />

          <NutritionCard
            title="Healthy Fat"
            value="9 kcal/g"
            desc="Supports hormones and joints."
          />

          <NutritionCard
            title="Water"
            value="0 kcal"
            desc="Keeps body hydrated."
          />

        </div>

      </section>

      {/* Foods */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Healthy Foods
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <FoodCard
            name="Oats"
            calories="389"
            protein="17g"
          />

          <FoodCard
            name="Paneer"
            calories="265"
            protein="18g"
          />

          <FoodCard
            name="Brown Rice"
            calories="111"
            protein="2.6g"
          />

          <FoodCard
            name="Banana"
            calories="89"
            protein="1.1g"
          />

        </div>

      </section>

      {/* Tips */}

      <section className="max-w-7xl mx-auto px-5 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          Nutrition Tips for {activeGoal.label}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <TipCard key={tip} tip={tip} />
          ))}
        </div>

      </section>

    </div>
  );
}