import { motion } from "framer-motion";
import HeroImage from "../../assets/Images/brand/dashboardImage.svg";
import { fadeIn, slideIn } from "../../../utils/motion";
const HeroSection = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center relative overflow-hidden">
      <motion.section
        className="flex-grow py-20 md:py-12 flex flex-col justify-center"
        variants={fadeIn("tween", 0, 3)}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-4 justify-center md:p-10 text-center">
          <h2 className="font-brightFlicks text-lg text-homeSecondary md:text-6xl ">
            Seamless Borderless <br /> crypto-fiat transactions
          </h2>
          <p className="text-neutral-7 text-sm md:text-base">
            Effortlessly accept crypto payments directly to your bank account
            <br />
            on our secure and reliable platform
          </p>
        </div>
      </motion.section>
      <motion.section
        className="w-screen h-full px-10 flex justify-center"
        variants={slideIn("up", "tween", 0, 2)}
        initial="hidden"
        animate="show"
      >
        <img src={HeroImage} alt="Hero Image" />
      </motion.section>
    </div>
  );
};

export default HeroSection;
