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
  return (
    <>
        <Disclosure as="nav">
            <Disclosure.Button className="aboslute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-3xl text-black active:transform active:scale-50 transition-all duration-150 ease-in-out group ">
                <Icon icon="uil:bars"/>
            </Disclosure.Button>
        </Disclosure>

        <div className="absolute top-0 right-0 w-[80%] h-full z-10 transition-all">
            <div className="w-full h-4 bg-orange-300">
                efge
            </div>
            <Icon icon="ci:close-big" className="" />
        </div>
    </>
  )
}

export default SideBar