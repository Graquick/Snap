import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Disclosure } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { Switch } from '@headlessui/react'

import useMounted from '../components/useMounted.js'

function Loader() {

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
        animTwo {
            
        }
    }

  return (
    <>
        <motion.div className="w-2 h-2 bg-black rounded-full"
            variants={loaderVariants}
            animate="animOne"
        >
        
        </motion.div>
    </>
  )
}

export default Loader