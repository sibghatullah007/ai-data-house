import Image from "next/image"
import JobListings from "./components/JobListings"
import { jobs } from "./data"
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <section className="bg-white pt-20 pb-14 text-center shadow-xl border-b border-gray-300">
        <div className="max-w-3xl mx-auto px-6">
          <Image
            src="/logo.png"
            alt="Services Graphic"
            width={70}
            height={50}
            className="mx-auto my-3"
          />

          <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-4">
            Work with AI Data House
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            We're thrilled to welcome fresh talent. Explore the opportunities below to join our team and make an impact with us.
          </p>
        </div>
      </section>

      <JobListings initialJobs={jobs} />
      <Contact />
    </>
  );
}