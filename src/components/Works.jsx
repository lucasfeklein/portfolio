import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Projects Projects Projects Projects Projects ProjectsProjects Projects
          ProjectsProjects Projects ProjectsProjects Projects Projects Projects
          Projects ProjectsProjects Projects ProjectsProjects Projects
          ProjectsProjects Projects Projects Projects Projects ProjectsProjects
          Projects ProjectsProjects Projects Projects
        </motion.p>
      </div>

      <div></div>
    </>
  );
};

export default SectionWrapper(Works, "");
