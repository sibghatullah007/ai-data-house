import Image from "next/image"
import { notFound } from "next/navigation"
import { jobs } from "../data"
import Contact from "@/components/Contact";

export default async function Page({ params }) {
  const { id } = await params;
  const job = jobs.find(job => job.id == id);
  console.log(job);
  if (!job) {
    notFound();
  }
  
  return (
    <>
      <section className="bg-white shadow-lg border-b border-gray-400 pt-20 pb-12 text-center">
        <Image
          src="/logo.png"
          alt="Services Graphic"
          width={70}
          height={50}
          className="mx-auto my-3"
        />      
        <h2 className="text-2xl font-semibold text-green-800 mt-2">{job.title}</h2>

        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 mt-4 text-gray-600 font-medium">
          <span className="text-green-900">–{job.locationType}</span>
          <span>–{job.type}</span>
          <span>–{job.category}</span>
        </div>

        <p className="text-green-900 mt-2 font-medium">{job.location}</p>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Left Column - Job Description */}
          <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 md:col-span-2 space-y-6 shadow-lg">
            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-green-800 mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h2 className="text-lg font-semibold text-green-800 mb-2">Key Responsibilities</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Required Skills & Qualifications */}
            <div>
              <h2 className="text-lg font-semibold text-green-800 mb-2">Required Skills & Qualifications</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Why Join Us */}
            <div>
              <h2 className="text-lg font-semibold text-green-800 mb-2">Why Join Us?</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Engage in transformative AI and automation projects</li>
                <li>Collaborative, forward-thinking work culture</li>
                <li>Competitive compensation and career advancement</li>
              </ul>
            </div>

            {/* How to Apply */}
            <div>
              <h2 className="text-lg font-semibold text-green-800 mb-2">How to Apply:</h2>
              <div className="text-gray-700">
                <div className="text-gray-900">
                  {job.status === 'active'
                    ? <> Submit your application at <a href="mailto:career@aidatahouse.com" className="text-green-600 underline">career@aidatahouse.com</a>.</>
                    : <span className="text-red-500 font-bold text-[16px]">(Application have been Closed)</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Job Information */}
          <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 space-y-4 text-sm text-gray-800 shadow-lg">
            <h3 className="text-green-800 font-semibold text-lg">Job Information</h3>
            <div><span className="font-semibold">Industry:</span> {job.category}</div>
            <div><span className="font-semibold">Date Opened:</span> {job.posted.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
            <div><span className="font-semibold">Job Type:</span> {job.type}</div>
            {/* <div><span className="font-semibold">Work Experience:</span> 4–6 months</div> */}
            <div><span className="font-semibold">Job Location:</span> {job.locationType}</div>
            <div><span className="font-semibold">City:</span> {job.location.split(',')[0]}</div>
            <div><span className="font-semibold">Country:</span> {job.location.split(',')[1]}</div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}