import Footer from "@/components/Footer"
import Link from "next/link"

const Page = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Thank You for Reaching Out!
          </h2>
          <p className="text-gray-700 mb-3">
            We've received your message and our team is already reviewing it. We'll get back to you shortly with the next steps.
          </p>
          <p className="text-gray-700 mb-8">
            While you wait, take a moment to explore some of our latest projects and see how we're helping businesses like yours achieve success.
          </p>
          <Link
            href="/case-studies"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Explore Projects
          </Link>
        </div>
      </section>
      <Footer />
    </>

  )
}

export default Page