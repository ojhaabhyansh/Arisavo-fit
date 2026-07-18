import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

interface HealthFormState {
  name: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  water: string;
  calories: string;
}

const initialForm: HealthFormState = {
  name: "",
  age: "",
  gender: "",
  height: "",
  weight: "",
  water: "",
  calories: "",
};

function getBmiLabel(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

export default function HealthForm() {
  const [form, setForm] = useState<HealthFormState>(initialForm);
  const [saved, setSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const bmi = useMemo(() => {
    const height = Number(form.height);
    const weight = Number(form.weight);

    if (!height || !weight || height <= 0 || weight <= 0) return null;

    return weight / ((height / 100) ** 2);
  }, [form.height, form.weight]);

  const calorieTarget = useMemo(() => {
    const age = Number(form.age);
    const height = Number(form.height);
    const weight = Number(form.weight);

    if (!age || !height || !weight || age <= 0 || height <= 0 || weight <= 0) return null;

    const bmr = form.gender === "Female"
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 10 * weight + 6.25 * height - 5 * age + 5;

    return Math.round(bmr * 1.55);
  }, [form.age, form.gender, form.height, form.weight]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
    setIsEditing(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaved(true);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">Health Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold">Your wellness profile</h1>
            <p className="mt-2 text-sm text-zinc-400">Fill in your details to calculate BMI and daily calorie needs locally.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="rounded-xl border border-zinc-700 bg-zinc-800 p-3" />
            <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" className="rounded-xl border border-zinc-700 bg-zinc-800 p-3" />
            <select name="gender" value={form.gender} onChange={handleChange} className="rounded-xl border border-zinc-700 bg-zinc-800 p-3">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input name="height" type="number" value={form.height} onChange={handleChange} placeholder="Height (cm)" className="rounded-xl border border-zinc-700 bg-zinc-800 p-3" />
            <input name="weight" type="number" value={form.weight} onChange={handleChange} placeholder="Weight (kg)" className="rounded-xl border border-zinc-700 bg-zinc-800 p-3" />
            <input name="water" type="number" value={form.water} onChange={handleChange} placeholder="Water (L)" className="rounded-xl border border-zinc-700 bg-zinc-800 p-3" />
            <input name="calories" type="number" value={form.calories} onChange={handleChange} placeholder="Calories today" className="rounded-xl border border-zinc-700 bg-zinc-800 p-3 md:col-span-2" />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white hover:bg-orange-600">{isEditing ? "Save changes" : "Save profile"}</button>
            <button type="button" onClick={() => { setForm(initialForm); setSaved(false); setIsEditing(false); }} className="rounded-full border border-zinc-700 px-5 py-2.5 font-semibold text-zinc-300 hover:border-orange-400 hover:text-orange-300">Reset</button>
          </div>

          {saved && <p className="mt-4 text-sm text-green-400">Your wellness profile has been updated locally.</p>}
        </form>

        <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold">Health Dashboard</h2>
          <p className="mt-2 text-sm text-zinc-400">Your latest metrics are calculated instantly.</p>

          <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Current profile</p>
            <p className="mt-2 text-xl font-semibold text-white">{form.name || "Your name"}</p>
            <p className="mt-1 text-sm text-zinc-300">{form.age ? `${form.age} years old` : "Add your age to personalize your dashboard"}</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-4">
              <p className="text-sm text-zinc-400">BMI</p>
              <p className="mt-2 text-3xl font-bold text-orange-400">{bmi ? bmi.toFixed(1) : "--"}</p>
              <p className="mt-1 text-sm text-zinc-300">{bmi ? getBmiLabel(bmi) : "Enter height and weight"}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-4">
              <p className="text-sm text-zinc-400">Daily Calories</p>
              <p className="mt-2 text-3xl font-bold text-green-400">{calorieTarget ? `${calorieTarget}` : "--"}</p>
              <p className="mt-1 text-sm text-zinc-300">Estimated maintenance target</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-4">
              <p className="text-sm text-zinc-400">Water Goal</p>
              <p className="mt-2 text-3xl font-bold text-sky-400">{form.water ? `${Number(form.water)} L` : "--"}</p>
              <p className="mt-1 text-sm text-zinc-300">Daily hydration target</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                <span>Weight trend</span>
                <span>{form.weight ? `${form.weight} kg` : "No data"}</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full rounded-full bg-orange-500" style={{ width: `${Math.min(100, Number(form.weight || 0) * 2)}%` }} />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                <span>Water intake</span>
                <span>{form.water ? `${form.water} L` : "No data"}</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full rounded-full bg-sky-500" style={{ width: `${Math.min(100, Number(form.water || 0) * 25)}%` }} />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                <span>Calories logged</span>
                <span>{form.calories ? `${form.calories}` : "No data"}</span>
              </div>
              <div className="flex h-3 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full rounded-full bg-green-500" style={{ width: `${Math.min(100, Number(form.calories || 0) / 10)}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
