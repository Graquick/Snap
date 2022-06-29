import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Disclosure } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { Switch } from '@headlessui/react'

import useMounted from '../components/useMounted.js'

function Loader() {
    const [animation, cycleAnimation] = useCycle("animOne", "animTwo")

    const loaderVariants = {
        animOne: {
            x: [-20, 20],
            y: [0, -30],
            transition: {
                x: {
                    yoyo: Infinity,
                    duration: .5
                },
                y: {
                    yoyo: Infinity,
                    duration: .25,
                    ease: "easeOut"
                }
            }
        },
        animTwo: {
            x: 0,
            y: [0, -40],
            transition: {
                
                y: {
                    yoyo: Infinity,
                    duration: .25,
                    ease: "easeOut"
                }
            }
        }
    }

  return (
    <>
        <motion.div className="w-2 h-2 bg-black rounded-full"
            variants={loaderVariants}
            animate={animation}
        >
        
        </motion.div>
        <motion.div whileTap={{ scale: .5 }} className="text-black font-medium bg-amber-300 p-4 w-fit text-xs rounded-xl cursor-pointer" onClick={() => cycleAnimation()}>Cycle Loader</motion.div>
    </>
  )
}

export default Loader