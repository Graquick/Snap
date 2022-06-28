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

            <div className="p6 w-1/2 h-screen bg-neutral-100 z-20 top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-in-out de">
                <div className="flex flex-col justify-start items-center">
                    <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100"></h1>
                </div>
                <Icon icon="ci:close-big" className="" />
            </div>
        </Disclosure>

    </>
  )
}

export default SideBar