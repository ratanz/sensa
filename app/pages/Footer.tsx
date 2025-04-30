import Link from "next/link"
import { useRef } from "react"
import { ArrowRight, Copy, PhoneCall } from "lucide-react"
import { motion, useInView } from "motion/react"

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-200px" })

  return (
    <div className="z-50 absolute bg-black w-full h-screen">
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.7, 
          ease: "easeIn",
          type: "spring",
          bounce: 0.5,
          mass: 1.2,
        }}
        className="relative max-w-6xl mx-18 py-32"
      >
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -70 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }}
            transition={{ 
              ease: "easeIn",
              type: "spring",
              mass: 1.1,
              duration: 0.7, 
              delay: 0.2
            }}
            className="text-white text-6xl md:text-7xl font-bold pb-3 w-fit border-b border-white/20"
          >
            Let&apos;s do it
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/70 text-xl max-w-md mt-4 pb-3 border-b border-white/20"
          >
            We kept it short, but there&apos;s more to see. <br />
            Any questions? Just book a call or email us, <br />
            we&apos;ll get back to
            you soon.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-2 mt-4"
          >
            <Link href="#" className="flex items-center text-white/80 hover:text-white transition-colors group">
              <PhoneCall className="mr-2 h-5 w-5" />
              <span className="text-xl mr-2">book a call</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="mailto:hi@sensa.co"
              className="flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <Copy className="mr-2 h-5 w-5" />
              <span className="text-xl mr-2">hi@sensa.co</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Background circles - subtle design element */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] rounded-full border border-white/10"></div>
          <div className="absolute top-[10%] right-[10%] w-[70%] h-[70%] rounded-full border border-white/10"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Footer
