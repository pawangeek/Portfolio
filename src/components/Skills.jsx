import Marquee from "react-marquee-slider";
import { FaNodeJs, FaReact, FaVuejs, FaAngular, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../assets/skills.css";
import "../assets/carousel.css";

const Skills = () => {
  const skillIcons = [
    { icon: <FaNodeJs size={40} color="#68A063" />, label: "NodeJS" },
    { icon: <SiNextdotjs size={40} color="#000000" />, label: "NextJS" },
    { icon: <SiFirebase size={40} color="#FFCA28" />, label: "Firebase" },
    { icon: <SiMongodb size={40} color="#47A248" />, label: "MongoDB" },
    { icon: <FaReact size={40} color="#61DAFB" />, label: "React" },
  ];

  const additionalIcons = [
    { icon: <FaVuejs size={40} color="#4FC08D" />, label: "VueJS" },
    { icon: <FaAngular size={40} color="#DD0031" />, label: "Angular" },
    { icon: <FaLaravel size={40} color="#FF2D20" />, label: "Laravel" },
    { icon: <SiTailwindcss size={40} color="#38B2AC" />, label: "Tailwind" },
  ];

  // Intersection Observer hook
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-skills-2 pt-5">
      <div className="container">
        <div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
          <div className="position-relative z-1 py-60">
            <div className="text-center">
              <h3>My Skills</h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
                      <Marquee velocity={15} resetAfterTries={200}>
                        {skillIcons.map((item, index) => (
                          <div
                            key={index}
                            className="carouselTicker__item mt-6 text-center"
                          >
                            <div className="brand-logo icon_80 icon-shape rounded-3">
                              {item.icon}
                            </div>
                            <span className="tool-tip">{item.label}</span>
                          </div>
                        ))}
                      </Marquee>
                    </div>
                    <div className="col-lg-8 col-md-9 mx-auto overflow-hidden">
                      <Marquee
                        velocity={15}
                        resetAfterTries={200}
                        direction="right"
                      >
                        {additionalIcons.map((item, index) => (
                          <div
                            key={index}
                            className="carouselTicker__item mt-6 text-center"
                          >
                            <div className="brand-logo icon_80 icon-shape rounded-3">
                              {item.icon}
                            </div>
                            <span className="tool-tip">{item.label}</span>
                          </div>
                        ))}
                      </Marquee>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 border-start-md mt-5" ref={ref}>
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="h-100 position-relative">
                        <motion.ul
                          className="ps-3 d-flex flex-column justify-content-between h-100 position-relative"
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.2,
                              },
                            },
                          }}
                        >
                          <motion.li className="mb-3" variants={listItemVariants}>
                            <div className="d-flex flex-column flex-md-row gap-2">
                              <p className="text-dark text-nowrap mb-0">Front-End:</p>
                              <span className="text-300">
                                HTML, CSS, JavaScript, React
                              </span>
                            </div>
                          </motion.li>
                          <motion.li className="mb-3" variants={listItemVariants}>
                            <div className="d-flex flex-column flex-md-row gap-2">
                              <p className="text-dark text-nowrap mb-0">Back-End:</p>
                              <span className="text-300">
                                Python, FastApi, Django, Golang, Node.js,
                              </span>
                            </div>
                          </motion.li>
                          <motion.li className="mb-3" variants={listItemVariants}>
                            <div className="d-flex flex-column flex-md-row gap-2">
                              <p className="text-dark text-nowrap mb-0">Databases:</p>
                              <span className="text-300">
                                MySQL, PostgreSQL, MongoDB, DynamoDB, Redis,
                                Snowflake
                              </span>
                            </div>
                          </motion.li>
                          <motion.li className="mb-3" variants={listItemVariants}>
                            <div className="d-flex flex-column flex-md-row gap-2">
                              <p className="text-dark text-nowrap mb-0">
                                Tools & Platforms:
                              </p>
                              <span className="text-300">
                                Git, Docker, AWS, Heroku, GCP
                              </span>
                            </div>
                          </motion.li>
                          <motion.li className="mb-3" variants={listItemVariants}>
                            <div className="d-flex flex-column flex-md-row gap-2">
                              <p className="text-dark text-nowrap mb-0">Others:</p>
                              <span className="text-300">
                                RESTful APIs, GraphQL, Agile Methodologies
                              </span>
                            </div>
                          </motion.li>
                        </motion.ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
