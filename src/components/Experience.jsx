import { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('godaddy-iii'); // Default tab
  const [clickedSkill, setClickedSkill] = useState(null); // Track clicked skill

  const tabContent = {
    'godaddy-iii': {
      title: 'Software Engineer III',
      details: [
        'Migrated ASM APIs to a modern V2 architecture and implemented search backed by DocumentDB and Kinesis, improving performance and maintainability.',
        'Collaborated in the GoKnowb platform from ground-up to a production-ready MVP, meeting goals on stability, scalability, and observability.',
        'Onboarded 7 clients using MCPify in prod and 30+ non-prod servers, rolling out MCPify to staging for enabling clients to experiment and fail fast.',
        'Architected and delivered Agent Discovery with AOSS vector search, KNN indexing, and comprehensive search APIs for CAAS and ANS.',
      ],
      skills: ['Python', 'FastAPI', 'AWS', 'Docker', 'GoLang', 'GraphQL', 'OpenSearch', 'DynamoDB'],
    },
    'godaddy-ii': {
      title: 'Software Engineer II',
      details: [
        'Built the complete Python SDK (go-agent-python) enabling enterprise-grade AI agent development with 4 auth methods, 5-layer MCP security, and SDM compliance.',
        'Worked on Node.js to integrate cloudwatch alarms and metrics for various AWS stack, like DynamoDB, S3, Lambda, etc.',
        'Helped the team in creation of agent-api service using FastAPI and Python for agent management.',
        'Collaborated for creating the conversation setup for the chatbot using React and TypeScript.',
      ],
      skills: ['Node.js', 'Python', 'React', 'TypeScript', 'DynamoDB', 'FastAPI'],
    },
    innovaccer: {
      title: 'Software Engineer I',
      details: [
        'Engineered and deployed RESTful APIs using FastAPI (Python 3) for SARA Chatbot—an LLM-powered SaaS platform—running on Kubernetes (K8s) with Helm for scalable, secure, and multi-tenant deployments.',
        'Designed and implemented a distributed scheduler microservice using APScheduler, Celery, and Redis, reducing background task latency from 9s to 0.3s, optimizing task execution throughput under load.',
        'Scaled chatbot infrastructure to support 15+ enterprise clients, leveraging a hybrid architecture (FastAPI + Celery + Redis) to improve message turnaround time by 34% and ensure low-latency, bidirectional communication.',
        'Integrated polyglot data stores—MongoDB for real-time conversations, AWS S3 for dynamic KB ingestion, Redis for session management, and Snowflake for analytics—achieving 99.9% uptime and a 56% boost in response speed.',
        'Migrated sync pipelines to fully async, adopting aiobotocore, aioredis, httpx, aiohttp, and motor, resulting in a 56% drop in CPU usage during peak workloads and improved system throughput.',
      ],
      skills: ['Python', 'FastAPI', 'Kubernetes', 'Helm', 'Celery', 'Redis', 'MongoDB', 'AWS S3', 'Snowflake', 'Docker'],
    },
    delhivery: {
      title: 'Data Science Intern',
      details: [
        'Collaborated with the BI team to increase ETA coverage for packages to 98.8% (6% improvement) and implemented real-time alerting systems for major logistics hubs to detect volume spikes and operational anomalies.',
        'Developed a comprehensive address validity scoring model using machine learning algorithms, incorporating multiple attributes and historical delivery patterns to assess address authenticity and deliverability confidence.',
        'Built an intelligent pre-junk address predictor leveraging pattern recognition and NLP techniques, achieving 32% reduction in computational overhead and preventing invalid shipment processing.',
        'Designed automated monitoring dashboards for logistics operations, enabling proactive identification of delivery bottlenecks and optimizing resource allocation across distribution centers.',
      ],
      skills: ['Python', 'Machine Learning', 'NLP', 'Pandas', 'NumPy', 'Jupyter', 'BI Analytics', 'Django'],
    },
    fractal: {
      title: 'Data Science Intern',
      details: [
        'Analyzed Fractal employee project allocation data to examine errors in Full-Time Engagement allocation across departments and organizational units, identifying critical resource misallocation patterns.',
        'Developed predictive models to optimize resource allocation efficiency, correlating billed vs unbilled days, revenue utilization metrics, and departmental capacity planning.',
        'Visualized complex workforce analytics using advanced data visualization techniques, enabling leadership to make data-driven decisions for intelligent project staffing.',
        'Built automated reporting dashboards that reduced manual allocation review time by 60% and improved forecasting accuracy for project resource planning.',
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Data Visualization', 'Predictive Analytics'],
    },
  };

  // Animation variants for skills
  const skillVariants = {
    rest: { scale: 1, backgroundColor: '#f8f9fa' },
    clicked: { scale: 1.1, backgroundColor: '#dafaba' },
  };

  const variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section id="portfolio" className="section-experience pt-5">
      <div className="container">
        <div className="rounded-3 border border-1 position-relative overflow-hidden">
          <div className="box-linear-animation position-relative z-1">
            <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
              <div className="d-flex align-items-center">
                <svg
                  className="text-primary-2 me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 5 6"
                  fill="none"
                >
                  <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
                </svg>
                <span className="text-linear-4 d-flex align-items-center">Experience</span>
              </div>
              <h3>
                +5
                <span className="text-300"> years of </span>
                passion
                <span className="text-300"> for <br />programming techniques</span>
              </h3>
              <div className="row mt-5">
                {/* Tabs */}
                <div className="col-lg-4">
                  <div className="d-flex flex-column" style={{gap: window.innerWidth <= 468 ? '12px' : '2rem',}}>
                    {Object.keys(tabContent).map((tab) => (
                      <a
                        key={tab}
                        href="#"
                        className={`technology border border-1 rounded-3 p-3 ${
                          activeTab === tab ? 'active' : ''
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab);
                        }}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={`/assets/experience/${tab.startsWith('godaddy') ? 'godaddy' : tab}.svg`}
                            alt={tab}
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">
                              {tab.startsWith('godaddy') ? 'Godaddy' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </h5>
                            <span className="text-300">
                              {tab === 'godaddy-iii'
                                ? 'Jan 2026 - Present'
                                : tab === 'godaddy-ii'
                                  ? 'Oct 2024 - Dec 2025'
                                  : tab === 'innovaccer'
                                    ? 'Aug 2021 - Sep 2024'
                                    : tab === 'delhivery'
                                      ? 'Jan 2021 - Aug 2021'
                                      : 'May 2020 - Jul 2020'}
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="col-lg-8 ps-lg-5 mt-3">
                  <motion.div
                    key={ activeTab }
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={ variants }
                    transition={ {duration: 0.5, type: 'spring', bounce: 0.3} }
                  >
                    <h6 className="text-linear-4">{ tabContent[activeTab].title }</h6>
                    <ul className="mt-4">
                      { tabContent[activeTab].details.map((detail, index) => (
                        <li key={ index } className="text-dark mb-3" style={{fontSize: window.innerWidth <= 768 ? '15px' : '18px',}}>
                          { detail }
                        </li>
                      )) }
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      { tabContent[activeTab].skills.map((skill, index) => (
                        <motion.a
                          key={ index }
                          href="#"
                          className="text-300 border border-1 px-3 py-1"
                          initial="rest"
                          animate={ clickedSkill === skill ? 'clicked' : 'rest' }
                          variants={ skillVariants }
                          transition={ {duration: 0.2} }
                          onClick={ (e) => {
                            e.preventDefault();
                            setClickedSkill(skill);
                          } }
                        >
                          { skill }
                        </motion.a>
                      )) }
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="position-absolute d-none d-md-block decorate">
              <div className="rotateme">
                <div className="circle-1-1"></div>
                <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                <svg
                    className="mb-5 position-absolute bottom-0 start-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                  </svg>
                </div>
                <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                  <svg
                    className="mb-3 position-absolute bottom-0 end-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
