import Link from "next/link"
import { ArrowRight, Copy, PhoneCall } from "lucide-react"
import { motion } from "motion/react"

const Footer = () => {
  return (
    <div className="z-50 absolute bg-black w-full h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-170px" }}
        transition={{ 
          duration: 0.7, 
          ease: "easeIn",
          staggerChildren: 0.2,
          delayChildren: 0.2,
          type: "spring",
          bounce: 0.7,
          mass: 1.4,
        }}
        className="relative max-w-6xl mx-18 py-32"
      >
        <div className="relative z-10">
          <h1 className="text-white text-6xl md:text-7xl font-bold pb-3 w-fit border-b border-white/20">Let&apos;s do it</h1>

          <p className="text-white/70 text-xl max-w-md mt-4 pb-3 border-b border-white/20">
            We kept it short, but there&apos;s more to see. <br />
            Any questions? Just book a call or email us, <br />
            we&apos;ll get back to
            you soon.
          </p>

          <div className="space-y-2 mt-4">
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
          </div>
        </div>

        {/* Background circles - subtle design element */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] rounded-full border border-white/10"></div>
          <div className="absolute top-[10%] right-[10%] w-[70%] h-[70%] rounded-full border border-white/10"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer
