import { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('godaddy'); // Default tab
  const [clickedSkill, setClickedSkill] = useState(null); // Track clicked skill

  const tabContent = {
    godaddy: {
      title: 'Software Engineer II',
      details: [
        'Worked on Node.js to integrate cloudwatch alarms and metrics for various AWS stack, like DynamoDB, S3, Lambda, etc.',
        'Helped the team in creation of agent-api service using FastAPI and Python for agent management.',
        'Collaborated for creating the conversation setup for the chatbot using React and TypeScript.',
      ],
      skills: ['Node.js', 'Python', 'React', 'TypeScript', 'Python', 'DynamoDB'],
    },
    innovaccer: {
      title: 'Software Engineer I',
      details: [
        'Engineered chatbot infrastructure that converts natural language into SQL queries by implementing FastAPI WebSockets and Asyncio.',
        'Integrated MongoDB, Elasticsearch, Redis, Snowflake for difference purpose achieving a 56% reduction in response time.',
        'Led a Django and Celery-based NLP application that stores PDF into structured data using Azure OCR'
      ],
      skills: ['Python', 'FastAPI', 'AWS', 'Docker', 'MongoDB', 'Redis', 'Snowflake'],
    },
    delhivery: {
      title: 'Data Science Intern',
      details: [
        'Worked with team to increase coverage for the Estimated Time of Arrival (ETA) of shipments to 98.8%, a 6% increase,',
        'Built a pre-junk predictor for addresses based on various recognized patterns to save computation time. Benchmarking data showed a 32% reduction in additional computational resources required to process junk addresses.',
      ],
      skills: ['Python', 'Jupyter', 'Numpy', 'Pandas', 'Django'],
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
                +3
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
                            src={`/assets/experience/${tab}.svg`}
                            alt={tab}
                          />
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">
                              {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </h5>
                            <span className="text-300">
                              {tab === 'godaddy'
                                ? 'Oct 2024 - Present'
                                : tab === 'innovaccer'
                                  ? 'Aug 2021 - Sep 2024'
                                  : 'Jan 2021 - Aug 2021'}
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
