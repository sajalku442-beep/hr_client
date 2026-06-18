import React from "react";
import { motion } from "framer-motion";

import { Mail, Linkedin, Instagram } from "lucide-react";

import xLogo from "../assets/x.svg";

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const NewsletterSection = () => {
  return (
    <section
      className="
        overflow-hidden
        bg-[linear-gradient(90deg,#ff5f6d_0%,#7b1fa2_35%,#1565c0_70%,#1faa59_100%)]
        px-4
        py-8
        sm:px-6
        lg:px-8
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          mx-auto
          flex
          max-w-[1500px]
          flex-col
          items-center
          justify-between
          gap-8
          md:flex-row
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            flex
            flex-1
            items-center
            gap-4
            text-white
          "
        >
          {/* Icon */}
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              relative
              rounded-full
              bg-white/20
              p-3
              backdrop-blur-sm
            "
          >
            <Mail size={24} />

            <div
              className="
                absolute
                right-1
                top-1
                h-2.5
                w-2.5
                rounded-full
                border-2
                border-accent
                bg-red-500
              "
            />
          </motion.div>

          {/* Text */}
          <p
            className="
              max-w-sm
              text-sm
              font-semibold
              leading-tight
              sm:text-base
            "
          >
            Stay updated with the latest stories,
            <br />
            insights & offers from HR Mirror 500
          </p>
        </motion.div>

        {/* MIDDLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            flex
            w-full
            max-w-md
            flex-1
            rounded-xl
            bg-white
            p-1
            shadow-inner
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              flex-1
              bg-transparent
              px-4
              py-2
              text-sm
              text-gray-700
              outline-none
            "
          />

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              rounded-md
              bg-yellow-500
              px-4
              py-2
              text-sm
              font-bold
              text-gray-900
              shadow
              transition-colors
              hover:bg-yellow-600
              sm:px-6
            "
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-4
            md:justify-end
          "
        >
          <div className="mr-2 hidden h-8 w-px bg-white/30 md:block"></div>
          <div className="mr-2 hidden text-xs font-semibold text-white sm:block">
            Follow us for daily insights
          </div>
          {/* Linkedin */}{" "}
          <motion.a
            custom={0}
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/hranalytics-mirror/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded
              bg-blue-600
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <Linkedin size={16} />{" "}
          </motion.a>{" "}
          {/* Instagram */}{" "}
          <motion.a
            custom={1}
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/hranalyticsmirror/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded
              bg-gradient-to-tr
              from-yellow-400
              via-pink-500
              to-purple-500
              text-white
              transition
              hover:opacity-90
            "
          >
            {" "}
            <Instagram size={16} />
          </motion.a>
          {/* X */}
          <motion.a
            custom={2}
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://x.com/HRMirror"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded
              transition
            "
          >
            {" "}
            <img src={xLogo} alt="X" />
          </motion.a>
          {/* Mail */}
          <motion.a
            custom={3}
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:discover@talent-synergy.com"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded
              border
              border-white/40
              bg-green-500/20
              text-white
              transition
              hover:bg-white/20
            "
          >
            {" "}
            <Mail size={16} />
          </motion.a>{" "}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
