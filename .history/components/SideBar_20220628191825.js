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
        opened: {
            rotate: 90
        },
        closed: {
            rotate: 0
        }
    }

    const variantsMenu = {
        opened: {
            x: 0,
            display: 
        },
        closed: {
            x: 500,
            display: "none"
        }
    }

  return (
    <>  
        <motion.div className="absolute top-4 right-4 z-20 text-black text-[2.5rem] cursor-pointer" onClick={() => setOpen(state => !state)}
            variants={variantsIcon}
            animate={open ? "opened" : "closed"}
        >
            <Icon icon={open ? "ei:close" : "clarity:bars-line"} />
        </motion.div>
        <motion.div className="bg-neutral-100 shadow h-[820px] w-[80%] absolute top-0 right-0  z-10 flex flex-col justify-center items-center text-white"
            initial={false}
            variants={variantsMenu}
            animate={open ? "opened" : "closed"}
        >

        </motion.div>
    </>
  )
}

export default SideBar