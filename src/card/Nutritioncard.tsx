interface NutritionCardProps {
    title: string;
    value: string;
    desc: string;
}

export default function NutritionCard({
    title,
    value,
    desc
}: NutritionCardProps) {
    return (

        <div className="bg-zinc-900 rounded-xl p-6 hover:scale-105 transition">

            <h2 className="text-2xl font-bold">

                {title}

            </h2>

            <p className="text-green-400 mt-3">

                {value}

            </p>

            <p className="text-gray-400 mt-4">

                {desc}

            </p>

        </div>

    );
}