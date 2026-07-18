interface TipCardProps {
    tip: string;
}

export default function TipCard({ tip }: TipCardProps) {

    return (

        <div className="bg-zinc-900 p-6 rounded-xl">

            <p>

                {tip}

            </p>

        </div>

    );
}