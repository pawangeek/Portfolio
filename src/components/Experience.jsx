import { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('godaddy-iii'); // Default tab for desktop
  const [clickedSkill, setClickedSkill] = useState(null); // Track clicked skill
  const [openMobileTabs, setOpenMobileTabs] = useState(['godaddy-iii']); // Track open tabs on mobile

  // Toggle mobile tab open/close
  const toggleMobileTab = (tab) => {
    setOpenMobileTabs(prev => {
      if (prev.includes(tab)) {
        // Remove tab if it's already open
        return prev.filter(t => t !== tab);
      } else {
        // Add tab if it's not open
        return [...prev, tab];
      }
    });
  };

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
        'Engineered RESTful APIs using FastAPI for SARA Chatbot—an LLM-powered SaaS platform—running on Kubernetes with Helm for scalable, multi-tenant deployments.',
        'Implemented distributed scheduler microservice using APScheduler, Celery, and Redis, reducing background task latency from 9s to 0.3s.',
        'Scaled chatbot infrastructure to support 15+ enterprise clients with hybrid architecture, improving message turnaround time by 34%.',
        'Integrated polyglot data stores (MongoDB, AWS S3, Redis, Snowflake) achieving 99.9% uptime and 56% response speed boost.',
      ],
      skills: ['Python', 'FastAPI', 'Kubernetes', 'Helm', 'Celery', 'Redis', 'MongoDB', 'AWS S3', 'Snowflake', 'Docker'],
    },
    delhivery: {
      title: 'Data Science Intern',
      details: [
        'Collaborated with BI team to increase ETA coverage to 98.8% (6% improvement) and implemented real-time alerting for major logistics hubs.',
        'Developed address validity scoring model using ML algorithms and historical patterns for deliverability assessment.',
        'Built pre-junk address predictor using NLP techniques, achieving 32% reduction in computational overhead.',
      ],
      skills: ['Python', 'Machine Learning', 'NLP', 'Pandas', 'NumPy', 'Jupyter', 'BI Analytics', 'Django'],
    },
    fractal: {
      title: 'Data Science Intern',
      details: [
        'Analyzed employee project allocation data to identify resource misallocation patterns across departments and organizational units.',
        'Developed predictive models optimizing allocation efficiency, correlating billed vs unbilled days and revenue utilization metrics.',
        'Built automated dashboards reducing manual review time by 60% and improving forecasting accuracy for resource planning.',
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
                {/* Desktop Layout */}
                <div className="d-none d-lg-flex">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column" style={{gap: '2rem'}}>
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

                {/* Mobile Layout */}
                <div className="d-lg-none">
                  <div className="row">
                    {Object.keys(tabContent).map((tab) => (
                      <div key={tab} className="col-12 mb-4">
                        {/* Mobile Tab Header */}
                        <a
                          href="#"
                          className={`technology border border-1 rounded-3 p-3 d-block ${
                            openMobileTabs.includes(tab) ? 'active' : ''
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMobileTab(tab);
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

                        {/* Mobile Tab Content - Shows for open tabs */}
                        {openMobileTabs.includes(tab) && (
                          <div className="mt-3 ps-3">
                            <motion.div
                              key={tab}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={variants}
                              transition={{duration: 0.5, type: 'spring', bounce: 0.3}}
                            >
                              <h6 className="text-linear-4">{tabContent[tab].title}</h6>
                              <ul className="mt-4">
                                {tabContent[tab].details.map((detail, index) => (
                                  <li key={index} className="mb-3">
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                              <div className="d-flex flex-wrap gap-2 mt-4">
                                {tabContent[tab].skills.map((skill, index) => (
                                  <motion.a
                                    key={index}
                                    href="#"
                                    className="text-300 border border-1 px-3 py-1"
                                    initial="rest"
                                    animate={clickedSkill === skill ? 'clicked' : 'rest'}
                                    variants={skillVariants}
                                    transition={{duration: 0.2}}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setClickedSkill(skill);
                                    }}
                                  >
                                    {skill}
                                  </motion.a>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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
