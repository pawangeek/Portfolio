import '../assets/about.css';
// Removed react-fast-marquee - using CSS marquee instead
import { motion } from 'framer-motion'; // Import Framer Motion
import {
  SiMongodb,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si';

const About = () => {
  const brandLogos = [
    <SiPython key="python" size={60} color="#306998" />,
    <SiMongodb key="mongodb" size={60} color="#4DB33D" />,
    <SiTypescript key="typescript" size={60} color="#007ACC" />,
    <SiReact key="react" size={60} color="#61DAFB" />,
    <SiNodedotjs key="nodejs" size={60} color="#3C873A" />,
    <SiPostgresql key="postgresql" size={60} color="#336791" />,
    <SiRedis key="redis" size={60} color="#D82C20" />,
  ];

  return (
    <section id="about" className="section-hero-2 position-relative pt-60 pb-3">
      <div className="container hero-2">
        <div className="border border-1 rounded-3">
          <div className="box-linear-animation position-relative z-1">
            <div className="row align-items-end py-60">
              <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
                {/* Add motion to the image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="position-relative mb-lg-0 mb-5 pe-5 ps-5"
                >
                  <img src="/assets/imgs/peepal.jpg" alt="pawan" className="styled-image" />
                </motion.div>
              </div>
              <div className="col-lg-6 mx-lg-auto col-md-12">
                <div className="p-lg-0 p-md-8 p-3">
                  <div className="text-secondary-2 d-flex align-items-center">
                    &lt;span&gt;
                    <div className="text-dark">
                      <div className="typewriter">
                        <h1 className="fs-6 fw-medium">Hey, I’m Pawan Jain</h1>
                      </div>
                    </div>
                    &lt;/span&gt;
                  </div>
                  <h1 className="fs-50 my-3">
                    Senior <span className="text-linear-4">&#123; Full Stack &#125;</span> GenAI
                    developer<span className="flicker">_</span>
                  </h1>
                  <p className="mb-6 text-secondary-2">
                    &lt;p&gt;
                    <span className="text-dark">
                      Specializing in AI-powered solutions with expertise in
                    </span>
                    <span className="text-secondary-2"> Large Language Models</span>,{' '}
                    <span className="text-secondary-2">Vector Search</span>,{' '}
                    <span className="text-secondary-2">Machine Learning</span>,{' '}
                    <span className="text-secondary-2">Python SDKs</span>, and{' '}
                    <span className="text-secondary-2">Agent Frameworks</span>
                    <span className="text-dark">
                      ... I build enterprise-grade AI systems that transform business operations and deliver intelligent automation at scale.
                    </span>
                    &lt;/p&gt;
                  </p>
                  <div className="row">
                    <div className="col-7">
                      <div className="css-marquee">
                        <div className="css-marquee-content">
                          {brandLogos.map((logo, index) => (
                            <div key={index} className="mx-3">
                              {logo}
                            </div>
                          ))}
                          {/* Duplicate content for seamless loop */}
                          {brandLogos.map((logo, index) => (
                            <div key={`duplicate-${index}`} className="mx-3">
                              {logo}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-5 d-flex align-items-end">
                      <span className="fs-6 text-300 mb-2">...and more</span>
                    </div>
                  </div>
                  <a
                    href="https://docs.google.com/document/d/1P3rI9KEz5ymdaT4lwQIEgK-fsNrLa5uFEWcqUSQrQgQ/"
                    className="btn me-2 text-300 ps-0 mt-4"
                    target="_blank"
                  >
                    <i className="ri-download-line text-primary-2"></i>
                    [ Download my CV ]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
