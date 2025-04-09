'use client'
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// import scipy from "../../public/logos/scipy.png";
// import chatgpt from "../../public/logos/chatgpt.svg";
// import flask from "../../public/logos/flask.png";
// import numpy from "../../public/logos/numpy.png";
// import langchain from "../../public/logos/langchain.png";
// import yolo from "../../public/logos/langchain.png";
// import seaborn from "../../public/logos/seaborn.png";
// import pytorch from "../../public/logos/pytorch.png";
import { StaticImageData } from "next/image";
import botpress from "../../public/logos/BotPress.png";
import voiceflow from "../../public/logos/voiceflow.png";
import dialogflow from "../../public/logos/Dialogflow.png";
import manychat from "../../public/logos/manychat.png";
import langchain from "../../public/logos/langchain.png";
import rag from "../../public/logos/rag.png";
import assistantApi from "../../public/logos/assistant-api.png";
import gpt4 from "../../public/logos/gpt-4.webp";
import llama from "../../public/logos/Llama.png";
import huggingFace from "../../public/logos/HuggingFace.png";

import excel from "../../public/logos/excel.png";
import googleSheets from "../../public/logos/google-sheets.svg";
import powerBi from "../../public/logos/Power-bi.png";
import tableau from "../../public/logos/Tableau.png";
import lookerStudio from "../../public/logos/looker-studio.png";
import airtable from "../../public/logos/airtable.png";
import bigdata from "../../public/logos/bigdata.png";

import python from "../../public/logos/Python.png";
import pytorch from "../../public/logos/pytorch.png";
import tensorflow from "../../public/logos/tensorflow.webp";
import opencv from "../../public/logos/opencv.png";
import scikitLearn from "../../public/logos/scikit-learn.png";
import spacy from "../../public/logos/spacy.webp";
import onnx from "../../public/logos/ONNX.png";

import make from "../../public/logos/make.png";
import zapier from "../../public/logos/zapier.png";
import n8n from "../../public/logos/n8n.png";
import revalance from "../../public/logos/relavance.png";
import rust from "../../public/logos/rust.png";
import flask from "../../public/logos/flask.png";


type TabKey = "Chatbots" | "Data Engineering" | "AI & ML" | "Automation";

type Tool = {
  name: string;
  logo: StaticImageData;
};

const tools: Record<TabKey, Tool[]> = {
    Chatbots: [
      { name: "Botpress", logo: botpress },
      { name: "Voiceflow", logo: voiceflow },
      { name: "Dialogflow", logo: dialogflow },
      { name: "Manychat", logo: manychat },
      { name: "Langchain", logo: langchain },
      { name: "RAG", logo: rag },
      { name: "Assistant APIs", logo: assistantApi },
      { name: "GPT-4", logo: gpt4 },
      { name: "Llama", logo: llama },
      { name: "Hugging Face Transformers", logo: huggingFace },
    ],
    "Data Engineering": [
      { name: "Excel", logo: excel },
      { name: "Google Sheet", logo: googleSheets },
      { name: "PowerBi", logo: powerBi },
      { name: "Tablaue", logo: tableau },
      { name: "Looker Studio", logo: lookerStudio },
      { name: "AirTable", logo: airtable },
      { name: "BigData", logo: bigdata },
    ],
    "AI & ML": [
      { name: "Python", logo: python },
      { name: "PyTorch", logo: pytorch },
      { name: "Tensorflow", logo: tensorflow },
      { name: "OpenCV", logo: opencv },
      { name: "Scikit-learn", logo: scikitLearn },
      { name: "SpaCy", logo: spacy },
      { name: "ONNX", logo: onnx },
    ],
    Automation: [
      { name: "Make.com", logo: make },
      { name: "Zapier", logo: zapier },
      { name: "n8n", logo: n8n },
      { name: "Relevance", logo: revalance },
      { name: "Rust APIs", logo: rust },
      { name: "Flask Apps", logo: flask },
    ]
  };

const tabKeys: TabKey[] = ["Data Engineering", "Chatbots", "AI & ML", "Automation"];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Chatbots");
  const [prevTabIndex, setPrevTabIndex] = useState(0);

  const currentTabIndex = tabKeys.indexOf(activeTab);
  const direction = currentTabIndex > prevTabIndex ? 1 : -1;

  const handleTabClick = (tab: TabKey) => {
    setPrevTabIndex(tabKeys.indexOf(activeTab));
    setActiveTab(tab);
  };

  return (
    <section className="pt-16 text-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-sm text-gray-600">
          Driving Innovation with the Best Tools and Technologies
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 my-2">
          Our Cutting-Edge Tech Stack
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8">
          We use industry-leading tools in AI, data engineering, automation, and chatbot development to deliver exceptional solutions and empower your business.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 flex-wrap mb-10">
          {tabKeys.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-lg font-semibold transition 
                ${activeTab === tab ? "text-green-700" : "text-gray-400"} 
                ${activeTab === tab ? "border-b-green-700 border-[2px] border-t-0 border-l-0 border-r-0" : "border-none"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Logos */}
        <div className="relative h-[200px] sm:h-[220px] md:h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-start gap-y-6"
            >
              <>
                <div className="flex justify-center gap-16 ">
                  {tools[activeTab].slice(0, 4).map((tool, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center">
                      <Image src={tool.logo} alt={tool.name} width={140} height={140} className="mb-2 h-auto w-[40px] sm:w-[60px] md:w-[90px]" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-16 ">
                  {tools[activeTab].slice(4, 7).map((tool, idx) => (
                    <div key={idx + 4} className="flex flex-col items-center justify-center">
                      <Image src={tool.logo} alt={tool.name} width={90} height={90} className="mb-2 h-auto w-[40px] sm:w-[60px] md:w-[80px] " />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-16 ">
                  {tools[activeTab].slice(7, 9).map((tool, idx) => (
                    <div key={idx + 7} className="flex flex-col items-center justify-center">
                      <Image src={tool.logo} alt={tool.name} width={90} height={90} className="mb-2 h-auto w-[40px] sm:w-[60px] md:w-[80px] " />
                    </div>
                  ))}
                </div>
              </>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
