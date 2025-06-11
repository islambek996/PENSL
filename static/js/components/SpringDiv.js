import React from 'react'
import * as motion from "motion/react-client"

const SpringDiv = ({ children, className = "", duration=0.4 }) => {
  return (
    <div className={className}>
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
            duration: duration,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
    >
            {children}
        </motion.div>
    </div>
  )
}

export default SpringDiv