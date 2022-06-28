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
            
        },
        closed: {

        }
    }

  return (
    <>  
        <motion.div>
            <Icon icon="iconoir:plus" />
        </motion.div>
        <div className="bg-orange-400 h-[820px] w-[80%] absolute top-0 right-0  z-10 flex flex-col justify-center items-center text-white">

        </div>
    </>
  )
}

export default SideBar