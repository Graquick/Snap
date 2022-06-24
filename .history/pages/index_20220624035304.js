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

      <main className="min-h-screen bg-green-200 flex ">
          <div className="description">

          </div>

          <div className="w-[400] h-[533px] overflow-hidden">
            <Image src="/image-hero-desktop.png"
              alt="Snap image"
              layout="fill"
              blurDataURL="/image-hero-desktop.png"
              placeholder="blure"
            />
          </div>
      </main>
    </div>
  )
}
