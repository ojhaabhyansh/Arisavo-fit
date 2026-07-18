interface FoodCardProps {
    name: string;
    calories: string;
    protein: string;
}

export default function FoodCard({
    name,
    calories,
    protein
}: FoodCardProps) {

    return (

        <div className="bg-zinc-900 rounded-xl p-6">

            <h2 className="text-2xl font-bold">

                {name}

            </h2>

            <p className="mt-3">

                Calories : {calories}

            </p>

            <p>

                Protein : {protein}

            </p>

        </div>

    );
}