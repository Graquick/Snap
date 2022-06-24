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

      <main className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-[1220px] h-[669px] bg-red-300 grid grid-cols-[45% 45%] grid-rows-[]">
          <h1>Red</h1>
        </div>
      </main>
    </div>
  )
}
