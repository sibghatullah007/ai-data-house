"use client";

import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaTimesCircle, FaMobileAlt, FaClock, FaMoneyBillWave, FaLock, FaUsers, FaUserCircle, FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { FaBrain, FaChartLine, FaMobile, FaRecycle } from "react-icons/fa6";
import { motion} from "framer-motion";
import Masonry from 'react-masonry-css';
import MagneticButton from "@/components/MagneticButton";
import Link from 'next/link';

export default function PrintingCRMLandingPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "Can I try the CRM for free?",
            answer: "Yes! Our Starter plan is free to help you get started."
        },
        {
            question: "Is it mobile-friendly?",
            answer: "Absolutely. You can manage everything on the go."
        },
        {
            question: "Do I need to install anything?",
            answer: "No installations required. Everything runs in your browser."
        },
        {
            question: "Can I switch plans later?",
            answer: "Yes, upgrade or downgrade anytime from your dashboard."
        },
        {
            question: "Is my data safe?",
            answer: "Your data is protected with top-tier security measures."
        }
    ];
    const testimonials = [
        {
            name: "Sophia Carter",
            position: "Print Shop Owner",
            message: "This CRM changed the game for us. From missed deadlines to total control. I can't imagine working without it now! It has allowed us to streamline our processes, keep track of every project, and ensure that we never miss a deadline again. Our team is more efficient and productive than ever before.",
            rating: 5
        },
        {
            name: "Dylan Brooks",
            position: "Operations Lead",
            message: "Love how mobile-friendly it is. I can check job status while grabbing coffee! It's great because I don't have to be at my desk all the time. I can monitor progress and make adjustments on the go. This has really boosted my productivity and kept me in the loop no matter where I am.",
            rating: 4
        },
        {
            name: "Avery Quinn",
            position: "Production Manager",
            message: "We finally have a dashboard that shows financials and efficiency in one place. So smooth and powerful. It helps us stay on top of our budgets, track our spending, and see how our production is performing in real time. The ease of access to this data has made decision-making much faster and more informed.",
            rating: 5
        },
        {
            name: "Jordan Miles",
            position: "Customer Service",
            message: "Our entire team is way more aligned. Jobs no longer fall through the cracks. The CRM ensures that every job is tracked, and communication is seamless. Everyone knows what needs to be done, when, and how, making the process smoother for everyone involved. It's been a huge improvement in our workflow.",
            rating: 4
        },
        {
            name: "Taylor Lee",
            position: "CEO, QuickPrint Co.",
            message: "The automation helped us scale up without hiring more people. Absolute win. The platform handles so much of the routine work automatically, allowing us to focus on higher-value tasks. We've been able to take on more clients and complete jobs faster, all while maintaining the same team size. It has been a huge benefit to our company's growth. The CRM has made me feel like I have a full team behind me, even though I'm working solo.",
            rating: 5
        },
        {
            name: "Morgan Ellis",
            position: "Freelance Designer",
            message: "Even as a solo designer, this platform makes client orders much easier to manage. It helps me keep track of all my deadlines, communication, and billing in one place, which is invaluable. No more sticky notes or scattered spreadsheets! ",
            rating: 4
        },
        {
            name: "Hannah Green",
            position: "Marketing Director",
            message: "The insights we get from this CRM help us make smarter decisions every day. Couldn't ask for a better tool. The detailed analytics it provides help us adjust our marketing strategies in real time, making sure that we're always ahead of the curve. We've seen a noticeable improvement in our campaign effectiveness since we started using it.",
            rating: 5
        },
        {
            name: "Liam Fisher",
            position: "Business Analyst",
            message: "It's been a game-changer for tracking our KPIs and analyzing trends. We're making data-driven decisions now! The platform allows us to visualize complex data in easy-to-understand formats, giving us clear insights into how our business is performing. It's become an essential tool for all our strategic planning.",
            rating: 4
        },
        {
            name: "Olivia Parker",
            position: "Account Manager",
            message: "Managing client relationships has never been easier. I can see everything I need in one place! I can track conversations, projects, deadlines, and even client feedback all in a single dashboard. It's made client communication and management so much more efficient. My clients are happier because we're always on top of their needs, and that makes my job much easier too.",
            rating: 5
        }
    ];




    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };


    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };


    return (
        <div className="pt-[70px] bg-gray-50 text-gray-800">
            <section
                onMouseMove={handleMouseMove}
                className="relative px-6 md:px-16 py-20 text-center bg-white min-h-screen flex flex-col justify-center items-center overflow-hidden"
            >
                {/* 🔥 Spotlight reveal background image */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url('/bg-prod.png')`, // ⬅️ Replace with your image
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                />

                {/* 🔤 Foreground content */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10">
                    Revolutionize Your Printing Business
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto z-10">
                    Powerful automation, seamless scheduling, and financial clarity—all in one tailored CRM platform.
                </p>
                <div className="z-10">
                    <Link href="/contact">
                        <MagneticButton>Get Started for Free</MagneticButton>
                    </Link>
                </div>
            </section>
            {/* Problem / Pain Points Section */}
            <section className="px-6 md:px-16 py-20 bg-gray-100">
                <h2 className="text-3xl font-bold mb-12 text-center">Challenges Print Shops Face</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <FaClock className="text-3xl text-red-500" />,
                            title: "Missed Deadlines",
                            desc: "Due to poor scheduling and lack of automation."
                        },
                        {
                            icon: <FaChartLine className="text-3xl text-orange-500" />,
                            title: "Manual Tracking",
                            desc: "Jobs and finances tracked without digital tools."
                        },
                        {
                            icon: <FaMobile className="text-3xl text-blue-500" />,
                            title: "No Mobile Access",
                            desc: "Limited insights when you're on the move."
                        },
                        {
                            icon: <FaRecycle className="text-3xl text-yellow-500" />,
                            title: "Resource Wastage",
                            desc: "Overlapping allocations lead to unnecessary costs."
                        },
                        {
                            icon: <FaBrain className="text-3xl text-purple-600" />,
                            title: "Poor Efficiency Insights",
                            desc: "Hard to understand where bottlenecks exist."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:border hover:border-gray-300 cursor-pointer hover:relative hover:z-10"
                        >
                            {item.icon}
                            <div>
                                <h4 className="font-semibold text-lg">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <Link href="/contact">
                        <MagneticButton>Let's Talk</MagneticButton>
                    </Link>
                </div>
            </section>



            <section className="px-6 md:px-16 py-20 bg-white">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    With vs. Without Our Product
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* With Product */}
                    <div className="bg-white border border-green-200 rounded-xl shadow-md text-center hover:scale-105 hover:rotate-1 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white bg-green-600 py-3 rounded-t-md mb-4">
                            With Our Product
                        </h3>
                        <ul className="space-y-4 px-6 pb-4 text-green-700 text-left">
                            <li>
                                <FaCheckCircle className="inline mr-2 text-green-500" />
                                Instant job scheduling
                            </li>
                            <li>
                                <FaCheckCircle className="inline mr-2 text-green-500" />
                                Smart efficiency tracking
                            </li>
                            <li>
                                <FaCheckCircle className="inline mr-2 text-green-500" />
                                Mobile-ready dashboard
                            </li>
                            <li>
                                <FaCheckCircle className="inline mr-2 text-green-500" />
                                Financial insights in real-time
                            </li>
                            <li>
                                <FaCheckCircle className="inline mr-2 text-green-500" />
                                Better collaboration
                            </li>
                        </ul>
                    </div>

                    {/* Without Product */}
                    <div className="bg-white border border-red-200 rounded-xl shadow-md text-center hover:scale-105 hover:-rotate-1 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white bg-red-600 py-3 rounded-t-md mb-4">
                            Without Our Product
                        </h3>
                        <ul className="space-y-4 px-6 pb-4 text-red-700 text-left">
                            <li>
                                <FaTimesCircle className="inline mr-2 text-red-500" />
                                Manual planning chaos
                            </li>
                            <li>
                                <FaTimesCircle className="inline mr-2 text-red-500" />
                                Low visibility into operations
                            </li>
                            <li>
                                <FaTimesCircle className="inline mr-2 text-red-500" />
                                Difficult data access on mobile
                            </li>
                            <li>
                                <FaTimesCircle className="inline mr-2 text-red-500" />
                                Missed revenue opportunities
                            </li>
                            <li>
                                <FaTimesCircle className="inline mr-2 text-red-500" />
                                Team silos and miscommunication
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* How It Works */}
            <section className="px-6 md:px-16 py-16 bg-gradient-to-r from-green-50 to-green-200">
                <h2 className="text-4xl font-bold mb-8 text-center text-dark-green-custom">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Smart Scheduling */}
                    <div className="p-6 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-50 cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }} // Icon hover effect, applies to the whole div
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="mx-auto mb-4 text-dark-green-custom"
                        >
                            <FaClock size={40} />
                        </motion.div>
                        <h4 className="font-semibold text-xl mb-2 text-dark-green-custom">Smart Scheduling</h4>
                        <p className="text-gray-600">Automate job assignments to the right teams at the right time, ensuring no task is missed.</p>
                    </div>

                    {/* Mobile Control */}
                    <div className="p-6 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-50 cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }} // Icon hover effect, applies to the whole div
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="mx-auto mb-4 text-dark-green-custom"
                        >
                            <FaMobileAlt size={40} />
                        </motion.div>
                        <h4 className="font-semibold text-xl mb-2 text-dark-green-custom">Mobile Control</h4>
                        <p className="text-gray-600">Track job status and performance directly from your mobile device, no matter where you are.</p>
                    </div>

                    {/* Financial Clarity */}
                    <div className="p-6 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-50 cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }} // Icon hover effect, applies to the whole div
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="mx-auto mb-4 text-dark-green-custom"
                        >
                            <FaMoneyBillWave size={40} />
                        </motion.div>
                        <h4 className="font-semibold text-xl mb-2 text-dark-green-custom">Financial Clarity</h4>
                        <p className="text-gray-600">Gain clarity into your financials with visual insights that show where you're making or losing money.</p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <MagneticButton>Try it Now</MagneticButton>
                </div>
            </section>



            <section className="px-6 md:px-16 py-20 bg-gray-50">
                <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-6"
                    columnClassName="space-y-6"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-700"
                        >
                            <p className="text-gray-700 italic mb-4">"{item.message}"</p>
                            <div className="flex items-center gap-3 mt-4">
                                <FaUserCircle className="text-3xl text-dark-green-custom" />
                                <div>
                                    <div className="text-sm font-semibold text-dark-green-custom">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.position}</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-3">
                                {[...Array(5)].map((_, i) => (
                                    i < item.rating ? (
                                        <FaStar key={i} className="text-yellow-500" />
                                    ) : (
                                        <FaRegStar key={i} className="text-yellow-500" />
                                    )
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </Masonry>
            </section>
            {/* Visual/Product Demo */}
            <section className="px-6 md:px-16 py-20 text-center bg-white">
                <h2 className="text-3xl font-bold mb-6">See It In Action</h2>
                <div className="relative mx-auto w-full md:w-[700px] h-[400px]">
                    <iframe
                        src="https://www.youtube.com/embed/6t_fUu9lROE?si=Io3Yq-SeFDl4qcNk" title="YouTube video player"
                        className="w-full h-full rounded-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 md:px-16 py-20 bg-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold flex justify-between items-center"
                            >
                                {faq.question}
                                <span className="text-xl">{openFAQ === index ? "−" : "+"}</span>
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: openFAQ === index ? "auto" : 0, opacity: openFAQ === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden px-4"
                            >
                                <div className="py-3 text-gray-700">{faq.answer}</div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-6 md:px-16 py-20 text-center bg-dark-green-custom text-white">
                <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Printing Business?</h2>
                <p className="text-lg mb-8">Start optimizing today—no credit card required.</p>
                <Link href="/contact">
                    <Button className="bg-white text-dark-green-custom px-8 py-3 text-lg">
                        Get Started for Free
                    </Button>
                </Link>
            </section>
        </div>
    );
}
