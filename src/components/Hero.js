import { useState } from "react"
import hero from "../images/hero.svg"
import Button from "./Button"
import { data } from "../data/data"

export default function Hero() {
  const [items] = useState(data)
  const title = `${items.length} ReactJS Projects for you`

  return (
    <>
      <section className="pt-32 flex flex-col-reverse items-center justify-center px-5 md:grid grid-cols-2 gap-5">
        <article className="text-center md:text-left">
          <h1 className="text-black text-4xl lg:text-6xl 2xl:text-7xl mt-10 md:mt-0">
            {title}
          </h1>
          <p className="text-gray-500 mt-4 md:text-lg">
            Better buckle up! We are going to build 15 ReactJs Projects in this
            course, and don't worry if you've never touched React before. We
            will begin with the fundamentals to take you from !React to React 😁
            - but I do recommend you polish your JavaScript skills with this
            refresher from MDN. There being no other business, let's <Button />
          </p>
        </article>

        <article>
          <img src={hero} alt="hero" title={title} />
        </article>
      </section>
    </>
  )
}
