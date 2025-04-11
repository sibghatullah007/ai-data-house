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
      "description": "We are seeking a Senior Data Engineer to join our team. In this role, you will design, build, and maintain scalable data pipelines and infrastructure, ensuring data reliability and accessibility across our organization.",
      "responsibilities": [
        "Design and implement data models, ETL pipelines, and data integration solutions",
        "Optimize and improve existing data systems for performance, reliability, and scalability",
        "Develop and maintain data warehousing solutions",
        "Collaborate with data scientists and analysts to deliver data-driven insights",
        "Implement data governance and security protocols"
      ],
      "requirements": [
        "5+ years of experience in data engineering or similar role",
        "Strong SQL skills and experience with data warehousing concepts",
        "Proficiency in Python, Scala, or similar programming languages",
        "Experience with big data technologies (Hadoop, Spark, Kafka)",
        "Knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving skills and attention to detail"
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
      "description": "We are looking for a Junior Data Analyst to support our data team in gathering, processing, and analyzing data to help drive business decisions. This is an excellent opportunity for someone starting their career in data analytics.",
      "responsibilities": [
        "Collect and process data from various sources",
        "Create reports and visualizations to communicate findings",
        "Assist in developing and maintaining dashboards",
        "Support data quality assurance processes",
        "Help identify trends and insights from data analysis"
      ],
      "requirements": [
        "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field",
        "Basic knowledge of SQL and data manipulation",
        "Familiarity with data visualization tools (Power BI, Tableau)",
        "Strong analytical and problem-solving skills",
        "Good communication and presentation abilities",
        "Attention to detail and accuracy"
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
      "description": "Join our AI Research team to advance the state-of-the-art in artificial intelligence. You will conduct innovative research and develop novel AI algorithms and models to address complex problems.",
      "responsibilities": [
        "Conduct research in machine learning, deep learning, and other AI domains",
        "Develop and implement novel algorithms and approaches",
        "Publish research findings in top-tier conferences and journals",
        "Collaborate with engineering teams to implement research into products",
        "Stay current with latest advances in AI and machine learning"
      ],
      "requirements": [
        "PhD or MS in Computer Science, Machine Learning, or related field",
        "Strong publication record or demonstrated research ability",
        "Experience with deep learning frameworks (PyTorch, TensorFlow)",
        "Solid programming skills in Python",
        "Knowledge of natural language processing, computer vision, or reinforcement learning",
        "Excellent analytical and problem-solving abilities"
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
      "description": "We are looking for a Full Stack Developer to build and maintain web applications. You will work on both frontend and backend development to create seamless user experiences and robust application functionality.",
      "responsibilities": [
        "Develop responsive and user-friendly web interfaces using modern frameworks",
        "Build and maintain server-side applications and APIs",
        "Implement database designs and data models",
        "Ensure cross-platform optimization and compatibility",
        "Collaborate with design and product teams to implement features"
      ],
      "requirements": [
        "3+ years experience in full stack development",
        "Proficiency in frontend technologies (HTML, CSS, JavaScript, React/Angular/Vue)",
        "Experience with backend frameworks (Node.js, Django, Ruby on Rails)",
        "Knowledge of database systems (SQL and NoSQL)",
        "Familiarity with version control systems (Git)",
        "Strong problem-solving skills and attention to detail"
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
      "description": "We are seeking an experienced Data Architect to design and implement our data management systems. You will be responsible for defining data structures, models, and integration patterns across our organization.",
      "responsibilities": [
        "Design comprehensive data architecture solutions",
        "Create and maintain data models and schemas",
        "Establish data governance policies and procedures",
        "Guide implementation of data management solutions",
        "Ensure data quality, security, and compliance"
      ],
      "requirements": [
        "7+ years of experience in data architecture or similar roles",
        "Strong understanding of data modeling techniques",
        "Experience with data warehousing and business intelligence",
        "Knowledge of big data technologies and cloud platforms",
        "Excellent communication and stakeholder management skills",
        "Certifications in data management a plus"
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

// Add default values for remaining jobs (will display generic content)
for (let i = 6; i <= 20; i++) {
  const id = i < 10 ? `1744370400000-${i}` : `174${4370400000 - (i-9)*86400000}-${i}`;
  
  if (!jobs.find(job => job.id === id)) {
    jobs.push({
      ...jobs.find(job => +job.id.split('-')[1] === (i <= 5 ? i : 5))!,
      id,
      title: jobs.find(job => job.id === id)?.title || "Position Open",
      category: jobs.find(job => job.id === id)?.category || "General",
      status: jobs.find(job => job.id === id)?.status || "active",
      description: "Detailed job description will be provided during the interview process.",
      responsibilities: [
        "Complete assigned tasks and projects within deadlines",
        "Collaborate with team members to achieve objectives",
        "Stay updated with industry trends and best practices",
        "Participate in team meetings and provide input",
        "Document processes and procedures as required"
      ],
      requirements: [
        "Relevant degree or certification in the field",
        "Experience with industry-standard tools and technologies",
        "Strong analytical and problem-solving skills",
        "Excellent communication and teamwork abilities",
        "Attention to detail and commitment to quality"
      ]
    });
  }
}

