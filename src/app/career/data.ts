export type Job = {
    id: string;
    title: string;
    type: string;
    category: string;
    locationType: string;
    location: string;
    posted: Date;
    status: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
  };
  
  

export const jobs: Job[] = [
    {
      "id": "1712844000000-1",
      "title": "Senior Data Engineer",
      "type": "Full Time",
      "category": "Data Engineering",
      "locationType": "On-Site",
      "location": "Islamabad, Pakistan",
      "posted":  new Date(Date.now()),
      "status": "active",
      "description": "Architect and manage scalable data pipelines, collaborate with teams to ensure high data quality, and drive data strategy across the organization.",
      "responsibilities": [
        "Design and develop data pipelines and ETL frameworks",
        "Collaborate with analytics and engineering teams",
        "Optimize data systems and build scalable solutions",
        "Maintain data governance and security protocols",
        "Mentor junior team members"
      ],
      "requirements": [
        "Bachelor\u2019s or Master\u2019s in Computer Science or related field",
        "5+ years experience in data engineering",
        "Expertise in Python, SQL, Spark, and cloud platforms",
        "Strong problem-solving and communication skills",
        "Experience with Airflow and data warehousing tools"
      ]
    },
    {
      "id": "1712840400000-2",
      "title": "Junior Data Analyst",
      "type": "Full Time",
      "category": "Data Engineering",
      "locationType": "On-Site",
      "location": "Islamabad, Pakistan",
      "posted":  new Date(Date.now() - 1 * 60 * 60 * 1000),
      "status": "active",
      "description": "Support data initiatives by generating reports, conducting exploratory analysis, and translating business needs into actionable insights.",
      "responsibilities": [
        "Analyze datasets to uncover trends and patterns",
        "Prepare dashboards and reports using BI tools",
        "Collaborate with business units for data needs",
        "Assist in data cleaning and preprocessing",
        "Document processes and analysis results"
      ],
      "requirements": [
        "Bachelor\u2019s in Statistics, Economics, or related field",
        "1+ years of experience in a similar role",
        "Knowledge of Excel, SQL, and Tableau/PowerBI",
        "Analytical mindset and attention to detail",
        "Good communication and teamwork skills"
      ]
    },
    {
      "id": "1744370400000-3",
      "title": "AI Research Scientist",
      "type": "Part Time",
      "category": "AI Development",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a AI Research Scientist and work on cutting-edge projects in the AI Development domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of AI Development",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in AI Development",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-4",
      "title": "Full Stack Developer",
      "type": "Full Time",
      "category": "Software Engineering",
      "locationType": "Hybrid",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a Full Stack Developer and work on cutting-edge projects in the Software Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Software Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Software Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-5",
      "title": "Data Architect",
      "type": "Full Time",
      "category": "Data Engineering",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a Data Architect and work on cutting-edge projects in the Data Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Data Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Data Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-6",
      "title": "Machine Learning Engineer",
      "type": "Full Time",
      "category": "AI Development",
      "locationType": "On-Site",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a Machine Learning Engineer and work on cutting-edge projects in the AI Development domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of AI Development",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in AI Development",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-7",
      "title": "Frontend Developer",
      "type": "Full Time",
      "category": "Software Engineering",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted":  new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a Frontend Developer and work on cutting-edge projects in the Software Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Software Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Software Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-8",
      "title": "Backend Developer",
      "type": "Full Time",
      "category": "Software Engineering",
      "locationType": "Hybrid",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a Backend Developer and work on cutting-edge projects in the Software Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Software Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Software Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-9",
      "title": "ETL Developer",
      "type": "Full Time",
      "category": "Data Engineering",
      "locationType": "On-Site",
      "location": "Islamabad, Pakistan",
      "posted":  new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a ETL Developer and work on cutting-edge projects in the Data Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Data Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Data Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-10",
      "title": "Computer Vision Engineer",
      "type": "Full Time",
      "category": "AI Development",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted":  new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a Computer Vision Engineer and work on cutting-edge projects in the AI Development domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of AI Development",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in AI Development",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-11",
      "title": "DevOps Engineer",
      "type": "Full Time",
      "category": "Software Engineering",
      "locationType": "Hybrid",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-11T14:00:00"),
      "status": "closed",
      "description": "Join our team as a DevOps Engineer and work on cutting-edge projects in the Software Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Software Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Software Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-12",
      "title": "Database Administrator",
      "type": "Full Time",
      "category": "Data Engineering",
      "locationType": "On-Site",
      "location": "Islamabad, Pakistan",
      "posted":  new Date("2025-04-11T14:00:00"),
      "status": "closed",
      "description": "Join our team as a Database Administrator and work on cutting-edge projects in the Data Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Data Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Data Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-13",
      "title": "NLP Engineer",
      "type": "Part Time",
      "category": "AI Development",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted":  new Date("2025-04-11T14:00:00"),
      "status": "active",
      "description": "Join our team as a NLP Engineer and work on cutting-edge projects in the AI Development domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of AI Development",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in AI Development",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-14",
      "title": "QA Engineer",
      "type": "Full Time",
      "category": "Software Engineering",
      "locationType": "On-Site",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-10T14:00:00"),
      "status": "closed",
      "description": "Join our team as a QA Engineer and work on cutting-edge projects in the Software Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Software Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Software Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-15",
      "title": "Big Data Engineer",
      "type": "Full Time",
      "category": "Data Engineering",
      "locationType": "Hybrid",
      "location": "Islamabad, Pakistan",
      "posted":  new Date("2025-04-09T14:00:00"),
      "status": "closed",
      "description": "Join our team as a Big Data Engineer and work on cutting-edge projects in the Data Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Data Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Data Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-16",
      "title": "AI Infrastructure Engineer",
      "type": "Full Time",
      "category": "AI Development",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-08T14:00:00"),
      "status": "active",
      "description": "Join our team as a AI Infrastructure Engineer and work on cutting-edge projects in the AI Development domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of AI Development",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in AI Development",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-17",
      "title": "Mobile Developer",
      "type": "Full Time",
      "category": "Software Engineering",
      "locationType": "Hybrid",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-07T14:00:00"),
      "status": "active",
      "description": "Join our team as a Mobile Developer and work on cutting-edge projects in the Software Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Software Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Software Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-18",
      "title": "Data Quality Analyst",
      "type": "Part Time",
      "category": "Data Engineering",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-06T14:00:00"),
      "status": "closed",
      "description": "Join our team as a Data Quality Analyst and work on cutting-edge projects in the Data Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Data Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Data Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-19",
      "title": "AI Product Manager",
      "type": "Full Time",
      "category": "AI Development",
      "locationType": "On-Site",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-05T14:00:00"),
      "status": "active",
      "description": "Join our team as a AI Product Manager and work on cutting-edge projects in the AI Development domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of AI Development",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in AI Development",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    },
    {
      "id": "1744370400000-20",
      "title": "Cloud Solutions Architect",
      "type": "Full Time",
      "category": "Software Engineering",
      "locationType": "Remote",
      "location": "Islamabad, Pakistan",
      "posted": new Date("2025-04-04T14:00:00"),
      "status": "closed",
      "description": "Join our team as a Cloud Solutions Architect and work on cutting-edge projects in the Software Engineering domain, delivering impactful results in a collaborative environment.",
      "responsibilities": [
        "Develop and maintain solutions in the field of Software Engineering",
        "Collaborate with cross-functional teams to define and implement new features",
        "Participate in code reviews and system design discussions",
        "Continuously improve system performance and scalability",
        "Stay updated with the latest industry trends"
      ],
      "requirements": [
        "Bachelor\u2019s degree in a relevant technical field",
        "2+ years of industry experience",
        "Experience with tools and technologies used in Software Engineering",
        "Strong analytical and problem-solving skills",
        "Ability to work independently and as part of a team"
      ]
    }
  ]; 

