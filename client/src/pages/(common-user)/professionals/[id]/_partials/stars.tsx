import { Star } from "lucide-react"

interface StarsProps {
    reviewCount: number
}

export function Stars({ reviewCount }: StarsProps) {
    return (
        <>
            {Array.from({
                length: Math.floor(reviewCount),
            }).map(() => (
                <Star className="text-yellow-500 fill-yellow-500" />
            ))}
            {Array.from({
                length: Math.floor(5 - reviewCount),
            }).map(() => (
                <Star className="text-yellow-500" />
            ))}
        </>
    )
}
