import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa"
import type { SkillItem } from "../../types/skill"

function Skill({ icon, name, stars, halfStars }: SkillItem) {
  return (
    <div className="flex justify-between items-center gap-20 md:gap-5">
      <div className="flex items-center space-x-2">
        <span>{icon}</span>
        <span className="whitespace-nowrap">{name}</span>
      </div>
      <div className="flex gap-1">
        <>
          {[...Array(stars)].map((_, idx) => (
            <FaStar key={idx} className="text-yellow-500" />
          ))}
        </>
        <>
          {[...Array(halfStars)].map((_, idx) => (
            <FaStarHalf key={idx} className="text-yellow-500" />
          ))}
        </>
        <>
          {[...Array(5 - stars - halfStars)].map((_, idx) => (
            <FaRegStar key={idx} className="text-gray-500" />
          ))}
        </>
      </div>
    </div>
  )
}

export default Skill
