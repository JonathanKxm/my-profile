import SocialMedia from "../SocialMedia"

export default function Footer() {
  return (
    <div className="max-w-screen-lg mx-auto md:flex justify-between items-end py-6 md:py-20 px-10 text-sm lg:text-lg mt-12 split-line">
      <div>
        <h3 className="text-2xl text-gray-200 font-semibold mb-5">
          Jonathan
        </h3>
        <SocialMedia />
      </div>
      <p className="text-gray-400 mt-5 text-right md:mt-0">@2026 Jonathan</p>
    </div>
  )
}
