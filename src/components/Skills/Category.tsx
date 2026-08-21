import Skill from "./Skill"
import type { SkillCategory } from "../../types/skill"

type Props = {
  index: number
  sc: SkillCategory
}
function Category({ index, sc }: Props) {
  return (
    <div
      className={`border border-jonathan-main/60 p-6 bg-jonathan-main/20 rounded-md ${
        index === 0 && "lg:col-span-2"
      }`}
    >
      <h3 className="text-lg md:text-xl font-bold mb-4 text-center">
        {sc.category}
      </h3>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 lg:gap-x-20 ${
          index === 0 && "lg:grid-cols-4"
        }`}
      >
        {sc.items.map((item, idx) => (
          <Skill key={idx} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Category
