import React from 'react'
import * as motion from "motion/react-client"

const SlideInLeftDiv = ({ children, className="", duration=0.5 }) => {
  return (
    <motion.div 
        className={className}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
            duration: duration
        }}
    >
        {children}
    </motion.div>
  )
}

export default SlideInLeftDiv