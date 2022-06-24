import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import Header from 

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
        <div className="max-w-[1400px] h-[1000px] bg-red-500">

        </div>
      </main>
    </div>
  )
}
