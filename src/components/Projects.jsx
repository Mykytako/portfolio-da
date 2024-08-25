import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const imageStyle = {
    transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
    filter: "brightness(80%)", // Initial brightness
  };

  const hoverStyle = {
    transform: "scale(1.1)", // Increase size on hover
    filter: "brightness(100%)", // Normal brightness on hover
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block" }}
                onMouseOver={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  img.style.transform = hoverStyle.transform;
                  img.style.filter = hoverStyle.filter;
                }}
                onMouseOut={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  img.style.transform = "scale(1)";
                  img.style.filter = imageStyle.filter;
                }}
              >
                <img
                  src={project.image}
                  width={200} // Adjust size as needed
                  height={200} // Adjust size as needed
                  alt={project.title}
                  style={imageStyle}
                  className="mb-6 cursor-pointer rounded"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
