import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import Header from '../components/header.js'

export default function Home() {
  return (
    <div className="py-0 px-8">
      <Head>
        <title>Snap</title>
        <meta name="description" content="Developed by Brima Freeman" />
        <link rel="icon" href="" />
      </Head>

      <Header />

      <main className="min-h-screen bg-green-200 flex flex-col items-center justify-center w-full">
        <div className="flex m w-[1440px] h-[1000px] justify-between bg-blue-400 ">
            <div className=" bg-purple-500">

            </div> 

            <div className="bg-red-500">
              <Image src="/image-hero-desktop.png"
                alt="Snap"
                width={400}
                height={533}
                layout="responsive"
                blurDataURL="/image-hero-desktop.png"
              />
            </div>
        </div>
      </main>
    </div>
  )
}
