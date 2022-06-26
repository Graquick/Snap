import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

function Header() {
  return (
    <>
      <header>
          <div className="font-[Arial, Helvetica, sans-serif] text-[4rem] font-bold text-black cursor-default transition-all w-fit duration-150 ease-in-out relative group dark:text-white">  <svg
            className="absolute top-[2.5rem] -right-8 w-[26px] h-[26px] transition-all duration-500 ease-in-out"
            width={26}
            height={24}
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" strokeWidth="2.4" className="fill-white stroke-black dark:fill-black dark:stroke-white" />
            <rect
              className="fill-black stroke-black dark:fill-white dark:stroke-white"
              x="1.2"
              y="1.2"
              width="17.6"
              height="17.6"
              rx="1.8"
              strokeWidth="2.4"
            />
            <circle cx={13} cy={7} r="2.5" className="stroke-white fill-black dark:stroke-black/50 dark:fill-white"/>
          </svg>snap</div>

          <div>
            <ul>
              <li className="flex items-center justify-center w-fit">Features <Icon icon="akar-icons:chevron-down" /></li>
              <li className="flex items-center justify-center w-fit">Company <Icon icon="akar-icons:chevron-down" /></li>
            </ul>
          </div>

      </header>


    </>
  )
}

export default Header