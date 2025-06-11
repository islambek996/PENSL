import React from 'react'
import * as motion from "motion/react-client"

const SlideInBottomDiv = ({ children, className="", duration=0.5 }) => {
  return (
    <motion.div 
        className={className}
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
            duration: duration
        }}
    >
        {children}
    </motion.div>
  )
}

export default SlideInBottomDiv