import { useState } from "react"

export default function Filter({ cards, filterCards }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <article className="mb-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center"
        >
          <label htmlFor="category" className="mb-2 md:text-lg">
            Search project categories
          </label>
          <select
            name="category"
            id="category"
            className="py-2 px-4 bg-white shadow rounded w-full sm:w-96"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate Beginner">Intermediate Beginner</option>
            <option value="Advanced Beginner">Advanced Beginner</option>
          </select>
        </form>
      </article>
    </>
  )
}
