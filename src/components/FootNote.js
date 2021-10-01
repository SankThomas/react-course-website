import { useState } from "react"
import { data } from "../data/data"

export default function FootNote() {
  const [items] = useState(data)

  return (
    <>
      <section className="text-gray-500 md:text-lg pt-10 lg:max-w-4xl lg:mx-auto">
        <p>
          I made this course because I want to help web developers learn how to
          build user experiences.
        </p>
        <p>
          Thank you for buying the course. In the {items.length} projects we
          will cover the building blocks of React from components to props to
          state management, and steadily make our way up to more and more
          advanced concepts like passing down props, making network requests and
          finalize everything with the context api - which was the hardest thing
          for me to learn in React. I hope this course makes it easier for you.
        </p>
      </section>
    </>
  )
}
