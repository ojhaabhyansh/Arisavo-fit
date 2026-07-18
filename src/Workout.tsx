import { useEffect, useMemo, useState } from "react";

type Exercise = {
  id: number;
  name: string;
  category: string;
  duration: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  calories: number;
  image: string;
};

const exercises: Exercise[] = [
  {
    id: 1,
    name: "Push Ups",
    category: "Chest",
    duration: 15,
    difficulty: "Beginner",
    calories: 80,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
  },
  {
    id: 2,
    name: "Pull Ups",
    category: "Back",
    duration: 20,
    difficulty: "Intermediate",
    calories: 120,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
  },
  {
    id: 3,
    name: "Squats",
    category: "Legs",
    duration: 18,
    difficulty: "Beginner",
    calories: 100,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
  },
  {
    id: 4,
    name: "Shoulder Press",
    category: "Shoulders",
    duration: 15,
    difficulty: "Intermediate",
    calories: 90,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
  },
];

const categories = ["All", "Chest", "Back", "Legs", "Shoulders"];

type CardProps = {
  title: string;
  value: string;
};

function Card({ title, value }: CardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default function WorkoutPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const filtered = useMemo(() => {
    return exercises.filter(
      (item) =>
        (selectedCategory === "All" ||
          item.category === selectedCategory) &&
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, selectedCategory]);

  const completed = 2;
  const total = 5;
  const progress = (completed / total) * 100;

  const formatTime = (value: number) => {
    const hrs = Math.floor(value / 3600);
    const mins = Math.floor((value % 3600) / 60);
    const secs = value % 60;

    return [hrs, mins, secs]
      .map((t) => String(t).padStart(2, "0"))
      .join(":");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Workout Dashboard
      </h1>

      {/* Top Cards */}
      <div className="grid gap-5 md:grid-cols-4 mb-8">

        <Card title="Workout Time" value={formatTime(seconds)} />

        <Card title="Calories Target" value="500 kcal" />

        <Card title="Exercises" value={`${completed}/${total}`} />

        <Card title="Streak" value="12 Days" />

      </div>

      {/* Timer */}
      <div className="bg-slate-900 rounded-xl p-6 mb-8">

        <h2 className="text-2xl font-semibold mb-4">
          Workout Timer
        </h2>

        <div className="text-5xl font-bold mb-5">
          {formatTime(seconds)}
        </div>

        <div className="flex gap-4">

          <button
            onClick={() => setRunning(true)}
            className="bg-green-500 px-5 py-2 rounded-lg"
          >
            Start
          </button>

          <button
            onClick={() => setRunning(false)}
            className="bg-yellow-500 px-5 py-2 rounded-lg"
          >
            Pause
          </button>

          <button
            onClick={() => {
              setRunning(false);
              setSeconds(0);
            }}
            className="bg-red-500 px-5 py-2 rounded-lg"
          >
            Reset
          </button>

        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Exercise..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-800 mb-5 outline-none"
      />

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-green-500"
                : "bg-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-8">

        <div className="flex justify-between mb-2">
          <span>Today's Progress</span>
          <span>{completed}/{total}</span>
        </div>

        <div className="h-3 bg-slate-800 rounded-full">

          <div
            style={{ width: `${progress}%` }}
            className="bg-green-500 h-full rounded-full"
          />

        </div>

      </div>

      {/* Exercise Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filtered.map((exercise) => (

          <div
            key={exercise.id}
            className="bg-slate-900 rounded-xl overflow-hidden"
          >

            <img
              src={exercise.image}
              alt={exercise.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-semibold">
                {exercise.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {exercise.category}
              </p>

              <div className="flex justify-between mt-4 text-sm">

                <span>{exercise.duration} mins</span>

                <span>{exercise.calories} kcal</span>

              </div>

              <p className="mt-3 text-green-400">
                {exercise.difficulty}
              </p>

              <button
                className="w-full mt-5 bg-green-500 py-3 rounded-lg font-semibold hover:bg-green-600"
              >
                Start Workout
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

