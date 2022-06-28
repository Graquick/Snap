import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Disclosure } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { Switch } from '@headlessui/react'

function SideBar() {
    const [open, setOpen] = useState(false)

    const variantsIcon = {
        open: {
            rotate: 45
        },
        closed: {
            rotate: 0
        }
    }

    const variantsMenu = {
        open: {
            x: 500,
            opacity: 1,
            transitionEnd: {
                display: flex
            }
        },
        closed: {
            x: 0,
            opacity: 0,
            transitionEnd: {
                display: "none"
            }
        }
    }

  return (
    <>  
        <motion.div className="absolute top-4 right-4 z-20 text-black text-[2.75rem] cursor-pointer" onClick={() => setOpen(state => !state)}
            variants={variantsIcon}
            animate={open ? "open" : "close"}
        >
            <Icon icon="iconoir:plus" />
        </motion.div>
        <motion.div className="bg-orange-400 h-[820px] w-[80%] absolute top-0 right-0  z-10 flex flex-col justify-center items-center text-white"
            initial={false}
            variants={variantsMenu}
            animate={open ? "open" : "close"}
        >

        </motion.div>
    </>
  )
}

export default SideBar