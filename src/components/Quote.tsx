'use client'
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";
import { motion } from "framer-motion";

const Quote = () => {
    return (
        <section className="py-8 px-4">
            <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white shadow-lg border-l-4 border-light-green-custom p-6 md:px-10 rounded-lg max-w-[55rem] mx-auto relative"
            >
                <p className="text-lg text-dark-green-custom font-semibold leading-relaxed text-justify hyphens-auto pe-10 md:pe-4">
                    Artificial Intelligence, data analysis, and automation are no longer
                    optional they are the driving forces behind modern business success.
                    These technologies empower organizations to uncover valuable insights,
                    streamline operations, enhance customer engagement, and unlock
                    unprecedented growth opportunities in an ever-changing market.
                </p>

                <div className="absolute top-0 right-0 text-gray-400 font-bold">
                    <MdOutlineFormatQuote className="h-[60px] w-[60px]"/>
                </div>

                <div className="flex items-center mt-6">
                    <Image
                        src="/Awais.jpg"
                        alt="Awais Rafeeq - Ai Data House"
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-gray-300"
                    />
                    <div className="ml-3">
                        <p className="font-bold text-dark-green-custom">Awais Rafeeq</p>
                        <p className="text-gray-600 text-sm">
                            Founder & CEO at AI Data House
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Quote;