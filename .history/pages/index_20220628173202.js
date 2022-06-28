import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import Header from '../components/header.js'
import useMounted from '../components/useMounted.js'

export default function Home() {
  const mounted = useMounted()

  return mounted && (
    <div className="px-8 py-0 bg-neutral-100 dark:bg-neutral-800">
      <Head>
        <title>Snap</title>
        <meta name="description" content="Developed by Brima Freeman" />
        <link rel="icon" href="" />
      </Head>

      

      <main className="flex flex-col items-center justify-center w-full min-h-screen">
        <div className="flex flex-col w-[1440px] h-[924px] justify-between items-center 2xl:w-[1000px] xl:w-[750px] xl:h-[624px] lg:w-[400px] lg:h-[820px]">

            <Header />
            <div className="flex w-[95%] h-[75%] lg:h-full lg:flex-col lg:items-center bg-green-300 lg:mt-8">
              <div className=" w-[60%] h-full flex flex-col justify-between pt-16 2xl:h-[82%] xl:h-full xl:relative lg:order-2 lg:w-full mt-0 lg:pt-0">
                <div className="flex flex-col justify-between h-[70%] relative xl:h-full lg:items-center lg:h-[340px] lg:justify-around">
                  <h1 className="text-[84px] leading-tight cursor-default w-[89%] font-extrabold font-epilogue text-black dark:text-white 2xl:text-[67px] xl:text-[57px] lg:text-[2rem] lg:w-[311px]">Make remote work</h1>

                  <p className="text-[18px] cursor-default w-[434px] font-epilogue font-semibold text-gray-500 text-justify xl:w-[340px]">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

                  <motion.div className="w-[170px] h-[55px] border border-black rounded-[15px] font-epilogue text-[18px] font-semibold no-underline cursor-pointer flex items-center justify-center text-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition-all duration-150 ease-out hover:bg-black hover:text-white"
                    whileTap={{ x: 0, scale: 0.5 }}
                  >
                    Learn more
                  </motion.div>
                </div>
                <div className="flex gap-12 xl:absolute xl:bottom-[.5rem] xl:left-56 lg:hidden">

                  <svg width="114" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.887 20c.838 0 1.576-.183 2.213-.55a4.977 4.977 0 0 0 1.584-1.429v1.638h3.195V0h-3.195v8.191A4.848 4.848 0 0 0 25.1 6.756c-.637-.362-1.375-.544-2.213-.544-.951 0-1.842.18-2.67.538-.83.358-1.561.854-2.194 1.487a6.996 6.996 0 0 0-1.486 2.196A6.68 6.68 0 0 0 16 13.106c0 .953.179 1.844.537 2.674.358.83.853 1.562 1.486 2.195a6.989 6.989 0 0 0 2.193 1.488c.83.358 1.72.537 2.671.537Zm.04-3.08a3.42 3.42 0 0 1-1.827-.511 3.826 3.826 0 0 1-1.827-3.303c0-.708.166-1.35.498-1.926a3.9 3.9 0 0 1 1.322-1.383 3.379 3.379 0 0 1 1.834-.518c.672 0 1.272.17 1.8.511.528.341.94.802 1.237 1.383.297.581.445 1.225.445 1.933 0 .7-.148 1.34-.445 1.92a3.53 3.53 0 0 1-1.23 1.383c-.524.34-1.127.511-1.807.511ZM39.294 20c.794 0 1.486-.181 2.075-.544a4.375 4.375 0 0 0 1.434-1.422l.13 1.625h3.209V6.553h-3.195l.144 1.678a5.992 5.992 0 0 0-1.748-1.468c-.685-.385-1.464-.577-2.337-.577-.934 0-1.807.175-2.619.524a6.818 6.818 0 0 0-2.147 1.455c-.62.62-1.1 1.341-1.44 2.163a6.81 6.81 0 0 0-.511 2.634 6.935 6.935 0 0 0 2.042 4.967 7.16 7.16 0 0 0 2.24 1.52c.846.368 1.754.551 2.723.551Zm.091-3.08a3.51 3.51 0 0 1-1.813-.498 4.227 4.227 0 0 1-1.395-1.33 4.049 4.049 0 0 1-.654-1.842c-.061-.734.057-1.4.353-1.998a3.592 3.592 0 0 1 1.264-1.435 3.3 3.3 0 0 1 1.853-.538 3.32 3.32 0 0 1 1.794.498c.532.332.968.776 1.309 1.33.34.555.541 1.173.602 1.855.053.725-.054 1.387-.32 1.986a3.384 3.384 0 0 1-1.172 1.435c-.516.358-1.122.537-1.82.537Zm14.378 2.74V9.75h2.54V6.553h-2.54V2.438h-3.195v4.115H48.63v3.198h1.938v9.908h3.195Zm11.273.34c.795 0 1.486-.181 2.076-.544a4.375 4.375 0 0 0 1.433-1.422l.131 1.625h3.208V6.553H68.69l.145 1.678a5.992 5.992 0 0 0-1.749-1.468c-.685-.385-1.464-.577-2.337-.577-.934 0-1.807.175-2.619.524a6.818 6.818 0 0 0-2.147 1.455c-.62.62-1.1 1.341-1.44 2.163a6.81 6.81 0 0 0-.51 2.634 6.935 6.935 0 0 0 2.042 4.967 7.16 7.16 0 0 0 2.239 1.52c.847.368 1.754.551 2.723.551Zm.092-3.08a3.51 3.51 0 0 1-1.814-.498 4.227 4.227 0 0 1-1.394-1.33 4.049 4.049 0 0 1-.655-1.842c-.06-.734.057-1.4.354-1.998a3.592 3.592 0 0 1 1.263-1.435 3.3 3.3 0 0 1 1.853-.538 3.32 3.32 0 0 1 1.794.498c.532.332.969.776 1.31 1.33.34.555.54 1.173.602 1.855.052.725-.055 1.387-.321 1.986a3.384 3.384 0 0 1-1.172 1.435c-.515.358-1.122.537-1.82.537ZM81.993 20c.96 0 1.857-.18 2.69-.537a6.968 6.968 0 0 0 3.687-3.696 6.774 6.774 0 0 0 .536-2.687c0-1.267-.31-2.423-.93-3.467a7.027 7.027 0 0 0-2.5-2.496c-1.048-.62-2.209-.93-3.483-.93-.82 0-1.547.185-2.18.556a5.15 5.15 0 0 0-1.591 1.448V0h-3.195v19.66h3.195v-1.665a5.15 5.15 0 0 0 1.59 1.448c.634.371 1.36.557 2.18.557Zm-.04-3.093c-.663 0-1.256-.17-1.78-.511a3.53 3.53 0 0 1-1.231-1.383 4.187 4.187 0 0 1-.445-1.933c0-.69.148-1.326.445-1.907a3.58 3.58 0 0 1 1.23-1.39 3.164 3.164 0 0 1 1.782-.517c.672 0 1.287.17 1.846.511.558.341 1.004.802 1.335 1.383.332.58.498 1.221.498 1.92 0 .708-.166 1.35-.498 1.927a3.88 3.88 0 0 1-1.329 1.382 3.435 3.435 0 0 1-1.852.518ZM92.874 4.6c.463 0 .854-.155 1.173-.465.318-.31.478-.701.478-1.173 0-.463-.16-.852-.478-1.166a1.604 1.604 0 0 0-1.172-.472c-.463 0-.856.157-1.179.472a1.563 1.563 0 0 0-.484 1.166c0 .472.161.863.484 1.173.323.31.716.465 1.179.465Zm19 5c.463 0 .854-.155 1.173-.465.318-.31.478-.701.478-1.173 0-.463-.16-.852-.478-1.166a1.604 1.604 0 0 0-1.172-.472c-.463 0-.856.157-1.179.472a1.563 1.563 0 0 0-.484 1.166c0 .472.161.863.484 1.173.323.31.716.465 1.179.465ZM6.979 19.324c1.835 0 3.385-.616 4.65-1.846 1.264-1.23 1.896-2.782 1.896-4.654 0-1.838-.632-3.38-1.897-4.628-1.264-1.248-2.814-1.872-4.65-1.872-1.835 0-3.393.624-4.675 1.872C1.021 9.444.38 10.986.38 12.824c0 1.872.64 3.423 1.922 4.654 1.282 1.23 2.84 1.846 4.676 1.846Zm87.48.335V6.553h-3.195V19.66h3.195Zm14.399 0v-3.198h-6.573l6.573-6.71V6.553H97.675v3.198h6.586l-6.586 6.71v3.198h11.182Z" fill="#ADADAD"/></svg>

                  <svg width="73" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M6.476 17.85c1.434 0 2.715-.47 3.726-1.287l.364.87h3.289V5.126h-3.17l-.436.952C9.23 5.238 7.93 4.754 6.476 4.754 2.699 4.754 0 7.467 0 11.28c0 3.825 2.7 6.571 6.476 6.571Zm.568-3.754c-1.593 0-2.764-1.2-2.764-2.807 0-1.598 1.161-2.797 2.764-2.797 1.594 0 2.765 1.2 2.765 2.797 0 1.607-1.171 2.807-2.765 2.807Zm15.422 3.754c3.648 0 6.078-2.243 6.078-5.687V5.138H24.29v6.84c0 1.286-.687 2.064-1.824 2.064-1.136 0-1.837-.765-1.837-2.064v-6.84h-4.254v7.025c0 3.444 2.443 5.687 6.091 5.687Zm14.361.013c1.439 0 2.72-.488 3.725-1.33l.401.914h3.148V.694h-4.205v4.895a5.78 5.78 0 0 0-3.069-.854c-3.79 0-6.489 2.732-6.489 6.557 0 3.826 2.7 6.571 6.49 6.571Zm.57-3.754c-1.594 0-2.765-1.21-2.765-2.816 0-1.608 1.17-2.817 2.764-2.817 1.594 0 2.765 1.21 2.765 2.817 0 1.607-1.171 2.816-2.765 2.816ZM50.99 3.598V0H46.8v3.598h4.19Zm.032 13.848V5.138H46.77v12.308h4.254Zm8.88.404c4.014 0 6.925-2.755 6.925-6.558 0-3.815-2.911-6.557-6.924-6.557-4.027 0-6.925 2.742-6.925 6.557 0 3.803 2.898 6.558 6.925 6.558Zm9.76-9.573c.463 0 .853-.156 1.172-.466.318-.31.478-.7.478-1.173 0-.463-.16-.852-.478-1.166A1.604 1.604 0 0 0 69.663 5c-.463 0-.856.157-1.179.472A1.563 1.563 0 0 0 68 6.638c0 .472.161.863.484 1.173.323.31.716.466 1.179.466Zm-9.76 5.765c-1.55 0-2.663-1.122-2.663-2.75 0-1.627 1.113-2.748 2.664-2.748 1.55 0 2.663 1.131 2.663 2.749 0 1.627-1.112 2.749-2.663 2.749Zm-39.676 21.86v-4.846a5.789 5.789 0 0 0 3.01.817c3.777 0 6.476-2.735 6.476-6.57 0-3.835-2.7-6.558-6.475-6.558-1.468 0-2.775.506-3.79 1.381l-.533-.977h-2.893v16.753h4.205Zm2.442-7.783c-1.594 0-2.765-1.2-2.765-2.816 0-1.617 1.171-2.817 2.765-2.817 1.593 0 2.764 1.2 2.764 2.817 0 1.617-1.18 2.816-2.764 2.816Zm13.25 3.338v-6.573c0-1.58.802-2.49 2.09-2.49 1.11 0 1.61.724 1.61 2.144v6.919h4.253v-7.412c0-3.19-1.822-5.26-4.657-5.26a5.28 5.28 0 0 0-3.297 1.174v-5.255h-4.253v16.753h4.253Zm14.718-13.849V14.01h-4.189v3.598h4.189Zm.033 13.849V19.148h-4.254v12.309h4.254Zm6.929 0V14.704h-4.254v16.753H57.6Zm8.664.404c3.099 0 5.597-1.755 6.466-4.564h-4.233c-.409.72-1.24 1.154-2.233 1.154-1.343 0-2.243-.73-2.52-2.142h9.17c.055-.38.087-.752.087-1.122 0-3.611-2.756-6.442-6.737-6.442-3.876 0-6.708 2.775-6.708 6.548 0 3.76 2.855 6.568 6.708 6.568Zm2.547-7.9h-4.993c.344-1.222 1.206-1.894 2.446-1.894 1.284 0 2.173.664 2.547 1.894Z" fill="#ADADAD"/></svg>

                  <svg width="90" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM15 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm16.515 18.34V9.964c.226-.293.5-.513.824-.66.324-.146.689-.22 1.095-.22.587 0 1.058.205 1.412.614.353.408.53.945.53 1.608v7.034h3.658v-7.543a7.069 7.069 0 0 0-.045-.787c.241-.293.527-.52.858-.683.331-.162.7-.242 1.107-.242.587 0 1.057.204 1.411.613.354.408.53.945.53 1.608v7.034h3.659v-7.543c0-1.435-.433-2.615-1.299-3.54-.865-.926-1.976-1.389-3.33-1.389-.783 0-1.506.147-2.168.44a4.968 4.968 0 0 0-1.716 1.25 4.316 4.316 0 0 0-1.524-1.239 4.504 4.504 0 0 0-2.021-.45c-.557 0-1.088.084-1.592.254-.505.17-.967.424-1.389.763V6.1h-3.658v12.24h3.658Zm23.168.231c.993 0 1.885-.146 2.675-.44.79-.292 1.562-.763 2.315-1.41l-2.416-2.199c-.286.293-.632.52-1.039.683a3.63 3.63 0 0 1-1.355.243c-.692 0-1.294-.182-1.806-.544a3.22 3.22 0 0 1-1.13-1.4h8.514v-.926a7.74 7.74 0 0 0-.452-2.672c-.301-.825-.719-1.531-1.253-2.117A5.875 5.875 0 0 0 56.828 6.4a5.71 5.71 0 0 0-2.416-.509c-.873 0-1.69.162-2.45.486a6.032 6.032 0 0 0-1.976 1.342 6.357 6.357 0 0 0-1.321 2.025 6.418 6.418 0 0 0-.486 2.487c0 .88.17 1.709.508 2.488a6.378 6.378 0 0 0 1.378 2.024 6.268 6.268 0 0 0 2.066 1.343 6.717 6.717 0 0 0 2.552.485Zm2.167-7.682h-4.99c.18-.617.49-1.095.926-1.434.436-.34.956-.51 1.558-.51.587 0 1.103.178 1.547.533.444.355.764.825.96 1.411Zm11.268 7.682c.994 0 1.885-.146 2.676-.44.79-.292 1.562-.763 2.314-1.41l-2.416-2.199c-.286.293-.632.52-1.039.683a3.63 3.63 0 0 1-1.354.243c-.693 0-1.295-.182-1.807-.544a3.22 3.22 0 0 1-1.129-1.4h8.513v-.926a7.74 7.74 0 0 0-.452-2.672c-.3-.825-.718-1.531-1.253-2.117A5.875 5.875 0 0 0 70.263 6.4a5.71 5.71 0 0 0-2.416-.509c-.873 0-1.69.162-2.45.486a6.032 6.032 0 0 0-1.976 1.342 6.357 6.357 0 0 0-1.32 2.025 6.418 6.418 0 0 0-.486 2.487c0 .88.17 1.709.508 2.488a6.378 6.378 0 0 0 1.377 2.024 6.268 6.268 0 0 0 2.066 1.343 6.717 6.717 0 0 0 2.552.485Zm2.168-7.682h-4.99c.18-.617.489-1.095.925-1.434.437-.34.956-.51 1.558-.51.587 0 1.103.178 1.547.533.444.355.764.825.96 1.411Zm11.335 7.613c.346 0 .775-.035 1.287-.104a7.37 7.37 0 0 0 1.265-.266V15.1c-.301.092-.58.158-.836.196a5.456 5.456 0 0 1-.813.058c-.587 0-.997-.112-1.23-.335-.234-.224-.35-.606-.35-1.146v-4.65h3.342V6.1h-3.342V2.143l-3.658.81V6.1H74.87v3.123h2.416v5.392c0 1.28.365 2.248 1.095 2.904.73.655 1.81.983 3.24.983Zm6.042-13.225c.462 0 .853-.156 1.172-.466.318-.31.478-.7.478-1.173 0-.463-.16-.852-.478-1.166A1.604 1.604 0 0 0 87.663 2c-.463 0-.856.157-1.179.472A1.563 1.563 0 0 0 86 3.638c0 .472.161.863.484 1.173.323.31.716.466 1.179.466Z" fill="#ADADAD" fillRule="evenodd"/></svg>

                  <svg width="83" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M35.276 17.143V11.76c0-.51.141-.925.424-1.246.282-.321.656-.482 1.123-.482.488 0 .87.164 1.148.49.277.326.415.783.415 1.37v5.25h2.238V11.76c0-.34.065-.64.194-.9.129-.261.308-.464.539-.61.23-.145.502-.218.814-.218.489 0 .871.164 1.148.49.277.326.416.783.416 1.37v5.25h2.238V11.3c0-.971-.26-1.757-.778-2.358-.518-.6-1.285-.9-2.3-.9-.592 0-1.131.13-1.616.39-.486.26-.873.624-1.16 1.09l.062-.096-.037-.07a2.632 2.632 0 0 0-.687-.768l-.145-.103c-.447-.296-1.02-.444-1.716-.444-.609 0-1.159.134-1.65.403-.327.18-.61.401-.848.666l-.102.12v-.975h-1.975v8.887h2.255Zm15.305.247c.768 0 1.403-.133 1.905-.4.39-.206.76-.514 1.109-.921l.014-.018v1.092h1.958v-5.431c0-.406-.016-.773-.049-1.103a2.653 2.653 0 0 0-.313-.987 2.61 2.61 0 0 0-1.382-1.25c-.609-.242-1.306-.363-2.09-.363-1.07 0-1.915.23-2.534.691a3.434 3.434 0 0 0-1.268 1.794l2.025.642c.142-.406.392-.688.748-.848.357-.159.7-.238 1.029-.238.592 0 1.015.123 1.267.37.177.173.292.414.345.724l.015.116-.357.053-.366.055-.353.052c-.576.085-1.091.174-1.547.267-.455.094-.847.2-1.176.321-.478.176-.858.394-1.14.654-.283.261-.487.561-.613.901a3.22 3.22 0 0 0-.19 1.128c0 .493.114.945.342 1.353.228.409.562.735 1.004.98.442.244.98.366 1.617.366Zm.477-1.761c-.258 0-.48-.039-.666-.115a.953.953 0 0 1-.432-.334.89.89 0 0 1-.153-.522c0-.148.032-.283.095-.403.063-.121.162-.232.296-.334.135-.101.312-.196.531-.284.192-.07.414-.137.667-.197.252-.06.584-.128.995-.202.257-.046.564-.1.92-.16l.03-.004v.007a15.73 15.73 0 0 1-.014.333l-.01.186c-.02.321-.086.603-.202.844-.06.126-.174.282-.341.469a2.32 2.32 0 0 1-.675.498c-.282.145-.63.218-1.04.218Zm8.92 1.514v-4.279l3.077 4.279h2.913l-3.423-4.444 3.21-4.443H62.99l-3.012 4.279V5.294h-2.271l-.017 11.849h2.288Zm14.968-3.818c.093-1.075-.017-2.01-.33-2.806-.312-.796-.795-1.413-1.448-1.852-.652-.438-1.445-.658-2.378-.658-.877 0-1.654.199-2.328.597a4.192 4.192 0 0 0-1.589 1.674c-.384.719-.576 1.564-.576 2.535 0 .888.197 1.677.589 2.365a4.244 4.244 0 0 0 1.63 1.621c.693.393 1.495.589 2.406.589.856 0 1.644-.225 2.366-.675a3.937 3.937 0 0 0 1.584-1.893l-2.239-.641c-.164.362-.403.639-.715.83-.313.193-.689.289-1.128.289-.696 0-1.224-.227-1.584-.68-.248-.313-.411-.716-.488-1.21l-.012-.085h6.24Zm-2.265-1.662h-3.915l.016-.076c.077-.323.191-.6.345-.83l.08-.11c.359-.464.92-.696 1.682-.696.653 0 1.123.199 1.411.597.177.244.3.585.368 1.022l.013.093Zm6.37 5.48V12.6c0-.34.047-.646.14-.918a2.02 2.02 0 0 1 .412-.707c.181-.2.403-.361.667-.482.263-.126.558-.201.884-.226.327-.025.613.001.86.078v-2.09a4.173 4.173 0 0 0-.806-.02c-.27.019-.53.065-.782.14a2.869 2.869 0 0 0-.7.308c-.28.164-.515.373-.707.625a3.2 3.2 0 0 0-.212.316l-.035.063V8.256h-1.975v8.887h2.255ZM10.972 0c5.466 0 9.999 3.997 10.834 9.228A8.914 8.914 0 0 1 9.228 21.805C3.998 20.97 0 16.438 0 10.971 0 4.912 4.912 0 10.97 0Zm4.099 6.171a8.914 8.914 0 0 0-5.842 15.634 11.095 11.095 0 0 0 2.639.102 7.543 7.543 0 0 1 3.226-14.364 7.55 7.55 0 0 1 6.813 4.322 10.972 10.972 0 0 1-10.04 10.042 7.543 7.543 0 0 0 10.04-10.042 11.052 11.052 0 0 0-.1-2.637 8.892 8.892 0 0 0-6.736-3.057Z" fill="#ADADAD"/></svg>

                </div>

                {/* // Mobile */}
                <div className="lg:flex hidden self-center w-[349px] gap-[20px]">
                  <svg
                    width={92}
                    height={17}
                    viewBox="0 0 92 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M18.2254 16.6734C18.904 16.6734 19.5016 16.5252 20.0174 16.228C20.5236 15.9395 20.9612 15.5448 21.3001 15.0709V16.3973H23.8873V0.478088H21.3001V7.11087C20.9643 6.63294 20.5261 6.23595 20.0174 5.94886C19.5016 5.65572 18.904 5.50835 18.2254 5.50835C17.4553 5.50835 16.7338 5.65411 16.0633 5.944C15.3912 6.2339 14.7993 6.63554 14.2867 7.14812C13.7759 7.65875 13.3675 8.26233 13.0834 8.92636C12.7912 9.6103 12.6431 10.3471 12.6485 11.0909C12.6485 11.8626 12.7935 12.5841 13.0834 13.2562C13.3733 13.9283 13.7741 14.521 14.2867 15.0336C14.7964 15.5448 15.3991 15.9538 16.0625 16.2385C16.7346 16.5284 17.4553 16.6734 18.2254 16.6734V16.6734ZM18.2578 14.1793C17.7355 14.1837 17.2226 14.0402 16.7783 13.7655C16.3215 13.4857 15.9451 13.0921 15.6858 12.6233C15.4265 12.1546 15.2932 11.6266 15.2989 11.0909C15.2989 10.5176 15.4333 9.99768 15.7021 9.53126C15.9605 9.07486 16.3284 8.68998 16.7727 8.41135C17.2172 8.13194 17.7327 7.98633 18.2578 7.9919C18.8019 7.9919 19.2878 8.12956 19.7153 8.40569C20.1429 8.68182 20.4765 9.05512 20.717 9.52559C20.9575 9.99606 21.0774 10.5176 21.0774 11.0909C21.0774 11.6577 20.9575 12.176 20.717 12.6456C20.4905 13.1009 20.1467 13.4874 19.721 13.7655C19.2967 14.0408 18.8084 14.1793 18.2578 14.1793V14.1793ZM31.5112 16.6734C32.1541 16.6734 32.7145 16.5268 33.1914 16.2329C33.663 15.9449 34.0607 15.5505 34.3527 15.0814L34.4579 16.3973H37.0565V5.78448H34.4693L34.5859 7.14326C34.1946 6.65998 33.714 6.25641 33.1704 5.95453C32.6157 5.64277 31.9849 5.48729 31.278 5.48729C30.5217 5.48729 29.8147 5.629 29.1572 5.91161C28.5076 6.18949 27.9174 6.58946 27.4186 7.08982C26.9166 7.59187 26.5279 8.17571 26.2526 8.84134C25.9746 9.51784 25.8339 10.2429 25.8388 10.9743C25.8332 11.7209 25.9765 12.4612 26.2604 13.1519C26.5443 13.8425 26.9631 14.4695 27.4923 14.9964C28.0132 15.5182 28.6288 15.936 29.3062 16.2272C29.9913 16.5252 30.7265 16.6734 31.5112 16.6734V16.6734ZM31.5849 14.1793C31.0679 14.1809 30.5604 14.0415 30.1168 13.776C29.6623 13.5088 29.2757 13.1403 28.9871 12.6991C28.6915 12.2526 28.5096 11.7405 28.4576 11.2075C28.4082 10.6131 28.5037 10.0738 28.7434 9.58956C28.9733 9.11685 29.327 8.71528 29.767 8.42755C30.2125 8.13609 30.735 7.98438 31.2674 7.9919C31.7802 7.98501 32.2843 8.12493 32.7202 8.39516C33.151 8.664 33.504 9.02354 33.7801 9.47215C34.0555 9.92157 34.2182 10.422 34.2676 10.9743C34.3105 11.5613 34.2239 12.0974 34.0085 12.5825C33.8064 13.0505 33.4777 13.453 33.0595 13.7445C32.6416 14.0344 32.1509 14.1793 31.5857 14.1793H31.5849ZM43.2277 16.3981V8.3733H45.2845V5.78448H43.2277V2.4523H40.6405V5.78448H39.0712V8.37411H40.6405V16.3973H43.2277V16.3981ZM52.3562 16.6734C52.9999 16.6734 53.5595 16.5268 54.0372 16.2329C54.5085 15.9448 54.9059 15.5504 55.1976 15.0814L55.3037 16.3973H57.9014V5.78448H55.315L55.4325 7.14326C55.0409 6.6599 54.5601 6.25633 54.0162 5.95453C53.4615 5.64277 52.8307 5.48729 52.1238 5.48729C51.3674 5.48729 50.6605 5.629 50.003 5.91161C49.3534 6.18949 48.7632 6.58946 48.2644 7.08982C47.7624 7.59187 47.3737 8.17571 47.0983 8.84134C46.8206 9.51789 46.6802 10.2429 46.6854 10.9743C46.6797 11.7209 46.8231 12.4612 47.107 13.1519C47.3909 13.8425 47.8097 14.4695 48.3389 14.9964C48.8595 15.5182 49.4749 15.9359 50.152 16.2272C50.8378 16.5252 51.5723 16.6734 52.357 16.6734H52.3562ZM52.4307 14.1793C51.9134 14.181 51.4056 14.0416 50.9617 13.776C50.5076 13.5087 50.1213 13.1402 49.8329 12.6991C49.5369 12.2527 49.3548 11.7405 49.3025 11.2075C49.2539 10.6131 49.3487 10.0738 49.5892 9.58956C49.8189 9.11695 50.1723 8.7154 50.6119 8.42755C51.0575 8.13609 51.58 7.98438 52.1124 7.9919C52.6252 7.98501 53.1293 8.12493 53.5651 8.39516C53.9959 8.664 54.3498 9.02354 54.6259 9.47215C54.9012 9.92157 55.0632 10.422 55.1134 10.9743C55.1555 11.5613 55.0689 12.0974 54.8535 12.5825C54.6514 13.0505 54.3227 13.453 53.9044 13.7445C53.4874 14.0344 52.9959 14.1793 52.4307 14.1793V14.1793ZM66.0873 16.6734C66.8647 16.6734 67.5911 16.5276 68.2656 16.2385C69.611 15.6655 70.6815 14.5925 71.2512 13.2457C71.5426 12.5575 71.6903 11.8171 71.6852 11.0698C71.6852 10.0438 71.4342 9.10775 70.9322 8.26236C70.4405 7.42724 69.7437 6.73153 68.9077 6.24118C68.0591 5.73913 67.119 5.4881 66.0873 5.4881C65.4233 5.4881 64.8346 5.63791 64.3221 5.93833C63.8149 6.23413 63.3758 6.63369 63.0337 7.11087V0.478088H60.4465V16.3981H63.0337V15.0498C63.3756 15.5269 63.8143 15.9265 64.3212 16.2223C64.8346 16.5228 65.4225 16.6734 66.0865 16.6734H66.0873ZM66.0549 14.1688C65.5181 14.1688 65.0379 14.0311 64.6136 13.755C64.1876 13.477 63.8435 13.0904 63.6167 12.6351C63.373 12.1497 63.2494 11.6129 63.2564 11.0698C63.2564 10.5111 63.3762 9.99606 63.6167 9.52559C63.844 9.06936 64.1876 8.68112 64.6128 8.40002C65.0411 8.1194 65.5437 7.97358 66.0558 7.98137C66.5999 7.98137 67.0979 8.11903 67.5506 8.39516C68.0024 8.67129 68.3636 9.04459 68.6316 9.51506C68.9005 9.98473 69.0349 10.5038 69.0349 11.0698C69.0349 11.6431 68.9005 12.163 68.6316 12.6302C68.3722 13.0874 68.0021 13.4722 67.5554 13.7493C67.1057 14.0291 66.5854 14.1746 66.0558 14.1688H66.0549ZM74.8984 4.20301C75.2733 4.20301 75.5899 4.07749 75.8482 3.82647C76.1057 3.57544 76.2353 3.25882 76.2353 2.87661C76.2353 2.50169 76.1057 2.18669 75.8482 1.93243C75.7242 1.80779 75.5761 1.70964 75.4129 1.64394C75.2498 1.57824 75.075 1.54636 74.8992 1.55022C74.5243 1.55022 74.206 1.67735 73.9445 1.93243C73.8171 2.0539 73.7164 2.20061 73.649 2.36319C73.5815 2.52576 73.5486 2.70063 73.5526 2.87661C73.5526 3.25882 73.6829 3.57544 73.9445 3.82647C74.206 4.07749 74.5243 4.20301 74.8992 4.20301H74.8984ZM90.2839 8.25183C90.6588 8.25183 90.9755 8.12632 91.2338 7.87529C91.4913 7.62426 91.6208 7.30765 91.6208 6.92544C91.6208 6.55051 91.4913 6.23552 91.2338 5.98125C91.1097 5.85661 90.9616 5.75846 90.7985 5.69276C90.6353 5.62707 90.4606 5.59518 90.2847 5.59904C89.9098 5.59904 89.5916 5.72617 89.33 5.98125C89.2026 6.10272 89.102 6.24944 89.0345 6.41201C88.967 6.57459 88.9342 6.74945 88.9381 6.92544C88.9381 7.30765 89.0685 7.62426 89.33 7.87529C89.5916 8.12632 89.9098 8.25183 90.2847 8.25183H90.2839ZM5.34364 16.126C6.82956 16.126 8.08469 15.6272 9.10904 14.6312C10.1326 13.6351 10.6444 12.3784 10.6444 10.8625C10.6444 9.37417 10.1326 8.12551 9.10823 7.11492C8.08469 6.10433 6.82956 5.59904 5.34283 5.59904C3.85691 5.59904 2.5953 6.10433 1.55718 7.11492C0.519059 8.12551 0 9.37417 0 10.8625C0 12.3784 0.51825 13.6343 1.55637 14.6312C2.59449 15.6272 3.8561 16.126 5.34283 16.126H5.34364ZM76.1819 16.3973V5.78448H73.5947V16.3981H76.1819V16.3973ZM87.8417 16.3973V13.8076H82.5191L87.8417 8.37411V5.78448H78.7861V8.37411H84.1192L78.7861 13.8076V16.3973H87.8409H87.8417Z"
                      fill="#ADADAD"
                    />
                  </svg>

                  <svg
                    width={60}
                    height={30}
                    viewBox="0 0 60 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5.90682 14.4543C7.06802 14.4543 8.10533 14.0737 8.924 13.4121L9.21876 14.1166H11.8821V4.15085H9.31512L8.96206 4.92175C8.13691 4.24155 7.08422 3.84962 5.90682 3.84962C2.84834 3.84962 0.662781 6.04651 0.662781 9.13415C0.662781 12.2315 2.84915 14.4551 5.90682 14.4551V14.4543ZM6.36676 11.4144C5.07681 11.4144 4.12857 10.4427 4.12857 9.14143C4.12857 7.84743 5.06871 6.87652 6.36676 6.87652C7.65753 6.87652 8.60576 7.84824 8.60576 9.14143C8.60576 10.4427 7.65753 11.4144 6.36676 11.4144V11.4144ZM18.855 14.4543C21.809 14.4543 23.7767 12.638 23.7767 9.84917V4.16057H20.332V9.69936C20.332 10.7407 19.7757 11.3707 18.855 11.3707C17.9351 11.3707 17.3674 10.7512 17.3674 9.69936V4.16057H13.9227V9.84917C13.9227 12.638 15.9009 14.4543 18.855 14.4543ZM30.484 14.4648C31.6492 14.4648 32.6866 14.0697 33.5004 13.3878L33.8251 14.128H36.3742V0.561977H32.9692V4.52578C32.2219 4.06703 31.3608 3.82741 30.484 3.83424C27.415 3.83424 25.2294 6.04651 25.2294 9.14386C25.2294 12.242 27.4158 14.4648 30.4848 14.4648H30.484ZM30.9456 11.425C29.6548 11.425 28.7066 10.4452 28.7066 9.14467C28.7066 7.84257 29.654 6.86357 30.9447 6.86357C32.2355 6.86357 33.1837 7.84338 33.1837 9.14467C33.1837 10.446 32.2355 11.425 30.9447 11.425H30.9456ZM41.9527 2.91353V0H38.5598V2.91353H41.9527V2.91353ZM41.9786 14.1272V4.16057H38.5355V14.1272H41.9802H41.9786ZM49.1693 14.4543C52.4197 14.4543 54.7769 12.2234 54.7769 9.14386C54.7769 6.05461 52.4197 3.83424 49.1701 3.83424C45.9092 3.83424 43.5625 6.05461 43.5625 9.14386C43.5625 12.2234 45.9092 14.4543 49.1701 14.4543H49.1693ZM57.0726 6.70242C57.4475 6.70242 57.7633 6.5761 58.0217 6.32507C58.2792 6.07405 58.4087 5.75824 58.4087 5.37522C58.4087 5.0003 58.2792 4.6853 58.0217 4.43103C57.8977 4.30649 57.7497 4.2084 57.5867 4.14271C57.4237 4.07701 57.2491 4.04507 57.0734 4.04882C56.6985 4.04882 56.3803 4.17596 56.1187 4.43103C55.9913 4.55251 55.8907 4.69922 55.8232 4.86179C55.7557 5.02437 55.7229 5.19924 55.7268 5.37522C55.7268 5.75743 55.8572 6.07405 56.1187 6.32507C56.3803 6.5761 56.6985 6.70242 57.0734 6.70242H57.0726ZM49.1693 11.3707C47.9142 11.3707 47.0129 10.4622 47.0129 9.14386C47.0129 7.82638 47.9142 6.91863 49.1701 6.91863C50.4253 6.91863 51.3265 7.83447 51.3265 9.14467C51.3265 10.4622 50.4261 11.3707 49.1701 11.3707H49.1693ZM17.0411 29.0722V25.1481C17.7777 25.5874 18.6208 25.8162 19.4785 25.8096C22.537 25.8096 24.7225 23.5949 24.7225 20.4895C24.7225 17.384 22.5361 15.179 19.4793 15.179C18.2906 15.179 17.2322 15.5888 16.4103 16.2973L15.9787 15.5062H13.636V29.0722H17.0411V29.0722ZM19.0185 22.7698C17.7278 22.7698 16.7795 21.7981 16.7795 20.4895C16.7795 19.1801 17.7278 18.2084 19.0185 18.2084C20.3085 18.2084 21.2567 19.1801 21.2567 20.4895C21.2567 21.7989 20.3012 22.7698 19.0185 22.7698ZM29.7479 25.4728V20.1502C29.7479 18.8708 30.3973 18.1339 31.4403 18.1339C32.3392 18.1339 32.744 18.7201 32.744 19.87V25.4728H36.188V19.4708C36.188 16.8876 34.7126 15.2114 32.4169 15.2114C31.4448 15.2156 30.5031 15.5509 29.7471 16.1621V11.9068H26.3032V25.4728H29.7471H29.7479ZM41.666 14.2583V11.3448H38.2739V14.2583H41.666ZM41.6928 25.4728V15.5054H38.248V25.4728H41.6928ZM47.3036 25.4728V11.9068H43.8589V25.4728H47.3052H47.3036ZM54.3194 25.7999C56.8289 25.7999 58.8517 24.3788 59.5554 22.1042H56.1276C55.7964 22.6872 55.1235 23.0386 54.3194 23.0386C53.2319 23.0386 52.5031 22.4475 52.2788 21.3041H59.7044C59.7489 20.9964 59.7748 20.6952 59.7748 20.3955C59.7748 17.4715 57.5431 15.179 54.3194 15.179C51.1808 15.179 48.8875 17.4261 48.8875 20.4814C48.8875 23.5261 51.1994 25.7999 54.3194 25.7999V25.7999ZM56.3819 19.4028H52.3387C52.6173 18.4132 53.3153 17.8691 54.3194 17.8691C55.3592 17.8691 56.079 18.4068 56.3819 19.4028Z"
                      fill="#ADADAD"
                    />
                  </svg>

                  <svg
                    width={73}
                    height={17}
                    viewBox="0 0 73 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.31225 8.57574C5.38607 8.57574 6.4159 9.00231 7.1752 9.76161C7.93451 10.5209 8.36108 11.5507 8.36108 12.6246C8.36108 13.6984 7.93451 14.7282 7.1752 15.4875C6.4159 16.2468 5.38607 16.6734 4.31225 16.6734C3.23844 16.6734 2.2086 16.2468 1.4493 15.4875C0.689999 14.7282 0.263428 13.6984 0.263428 12.6246C0.263428 11.5507 0.689999 10.5209 1.4493 9.76161C2.2086 9.00231 3.23844 8.57574 4.31225 8.57574V8.57574ZM12.4099 0.478088C13.4837 0.478088 14.5135 0.90466 15.2729 1.66396C16.0322 2.42326 16.4587 3.4531 16.4587 4.52691C16.4587 5.60073 16.0322 6.63056 15.2729 7.38986C14.5135 8.14917 13.4837 8.57574 12.4099 8.57574C11.3361 8.57574 10.3063 8.14917 9.54695 7.38986C8.78765 6.63056 8.36108 5.60073 8.36108 4.52691C8.36108 3.4531 8.78765 2.42326 9.54695 1.66396C10.3063 0.90466 11.3361 0.478088 12.4099 0.478088V0.478088ZM25.7832 15.3292V8.54659C25.9662 8.30932 26.1881 8.13118 26.4504 8.01214C26.7128 7.89391 27.0083 7.83399 27.3371 7.83399C27.8124 7.83399 28.1938 7.99999 28.4805 8.33119C28.7663 8.66157 28.9097 9.09642 28.9097 9.63329V15.3292H31.8718V9.22112C31.8715 9.00818 31.8593 8.79542 31.8353 8.58383C32.0305 8.34657 32.2621 8.16276 32.5301 8.03076C32.7982 7.89958 33.097 7.8348 33.4265 7.8348C33.9019 7.8348 34.2825 7.99999 34.5691 8.33119C34.8558 8.66157 34.9983 9.09642 34.9983 9.63329V15.3292H37.9612V9.22112C37.9612 8.05911 37.6106 7.10358 36.9093 6.35455C36.2089 5.60471 35.3092 5.22979 34.2128 5.22979C33.5788 5.22979 32.9933 5.34882 32.4572 5.58609C31.9265 5.81942 31.4525 6.16471 31.0677 6.59829C30.7389 6.17346 30.3166 5.83014 29.8336 5.59499C29.3238 5.34809 28.7635 5.22333 28.1971 5.2306C27.746 5.2306 27.3161 5.29862 26.9079 5.43628C26.499 5.57394 26.1249 5.77962 25.7832 6.05413V5.41765H22.821V15.3292H25.7832V15.3292ZM44.5438 15.5162C45.3479 15.5162 46.0702 15.398 46.7099 15.1599C47.3496 14.9235 47.9748 14.5421 48.5845 14.0182L46.6281 12.2375C46.3965 12.4748 46.1164 12.6586 45.7868 12.7906C45.4369 12.9255 45.0645 12.9923 44.6896 12.9873C44.1292 12.9873 43.6417 12.84 43.2271 12.5468C42.8206 12.2636 42.5032 11.8703 42.3121 11.4132H49.2064V10.6633C49.2126 9.92617 49.0887 9.19371 48.8404 8.49962C48.5967 7.83156 48.2582 7.25987 47.8258 6.78535C47.3921 6.30978 46.8665 5.92714 46.2807 5.66058C45.6665 5.38216 44.9987 5.24148 44.3244 5.24841C43.6174 5.24841 42.9559 5.37959 42.3404 5.64196C41.74 5.89391 41.1959 6.26339 40.7403 6.72866C40.2822 7.20179 39.919 7.75845 39.6706 8.36844C39.4069 9.00691 39.2731 9.69154 39.2771 10.3823C39.2771 11.0949 39.4147 11.7662 39.6884 12.397C39.9511 13.0103 40.33 13.5669 40.8043 14.036C41.2845 14.5056 41.8532 14.8753 42.4773 15.1235C43.134 15.3876 43.836 15.521 44.5438 15.5162V15.5162ZM46.2986 9.29562H42.2578C42.4036 8.79599 42.6546 8.40893 43.0077 8.13442C43.3607 7.8591 43.7818 7.72143 44.2693 7.72143C44.7446 7.72143 45.1625 7.86557 45.522 8.15304C45.8815 8.44051 46.1407 8.8211 46.2994 9.29562H46.2986ZM55.423 15.5162C56.2279 15.5162 56.9494 15.398 57.5899 15.1599C58.2296 14.9235 58.8548 14.5421 59.4637 14.0182L57.5073 12.2375C57.2757 12.4748 56.9956 12.6586 56.666 12.7906C56.3164 12.9254 55.9442 12.9922 55.5696 12.9873C55.0084 12.9873 54.5209 12.84 54.1063 12.5468C53.7001 12.2634 53.383 11.8702 53.1921 11.4132H60.0856V10.6633C60.0918 9.92617 59.9679 9.19371 59.7196 8.49962C59.4767 7.83156 59.1382 7.25987 58.705 6.78535C58.2713 6.30978 57.7457 5.92714 57.1599 5.66058C56.5457 5.38216 55.8779 5.24148 55.2035 5.24841C54.4966 5.24841 53.835 5.37959 53.2196 5.64196C52.6192 5.89391 52.0751 6.26339 51.6195 6.72866C51.1616 7.20186 50.7988 7.75851 50.5506 8.36844C50.2869 9.00691 50.1531 9.69154 50.1571 10.3823C50.1571 11.0949 50.2948 11.7662 50.5685 12.397C50.8308 13.0102 51.2095 13.5668 51.6835 14.036C52.1637 14.5056 52.7323 14.8753 53.3565 15.1235C54.0132 15.3876 54.7152 15.521 55.423 15.5162V15.5162ZM57.1786 9.29562H53.1378C53.2836 8.79599 53.5338 8.40893 53.8869 8.13442C54.2407 7.8591 54.661 7.72143 55.1485 7.72143C55.6238 7.72143 56.0416 7.86557 56.4012 8.15304C56.7607 8.44051 57.0198 8.8211 57.1786 9.29562ZM66.3572 15.4604C66.6374 15.4604 66.9848 15.432 67.3994 15.3761C67.7465 15.3345 68.0893 15.2624 68.4238 15.1607V12.7055C68.18 12.78 67.9541 12.8335 67.7468 12.8643C67.5288 12.8963 67.3088 12.912 67.0885 12.9112C66.6131 12.9112 66.2811 12.8205 66.0925 12.6399C65.903 12.4586 65.809 12.1492 65.809 11.712V7.94655H68.5153V5.41765H65.809V2.21341L62.8469 2.86932V5.41765H60.8905V7.94655H62.8469V12.3128C62.8469 13.3493 63.1425 14.1332 63.7336 14.6644C64.3247 15.1948 65.1993 15.4604 66.3572 15.4604V15.4604ZM71.2498 4.75122C71.624 4.75122 71.9406 4.62489 72.1989 4.37387C72.4564 4.12284 72.586 3.80703 72.586 3.42401C72.586 3.04909 72.4564 2.73409 72.1989 2.47983C72.0748 2.35519 71.9267 2.25704 71.7636 2.19134C71.6004 2.12564 71.4257 2.09376 71.2498 2.09762C70.8749 2.09762 70.5567 2.22475 70.2951 2.47983C70.1677 2.6013 70.0671 2.74801 69.9996 2.91059C69.9321 3.07317 69.8993 3.24803 69.9032 3.42401C69.9032 3.80622 70.0336 4.12284 70.2951 4.37387C70.5567 4.62489 70.8749 4.75122 71.2498 4.75122V4.75122Z"
                      fill="#ADADAD"
                    />
                  </svg>

                  <svg
                    width={67}
                    height={20}
                    viewBox="0 0 67 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M29.1532 14.3599V10.0009C29.1532 9.58794 29.2673 9.25189 29.4965 8.99196C29.7248 8.73202 30.0277 8.60165 30.4059 8.60165C30.801 8.60165 31.1104 8.73445 31.3355 8.99843C31.5598 9.26242 31.6715 9.63248 31.6715 10.1078V14.3591H33.4838V10.0009C33.4838 9.7256 33.5364 9.48267 33.6409 9.27213C33.7453 9.06079 33.8903 8.8964 34.0773 8.77818C34.2636 8.66076 34.4838 8.60165 34.7365 8.60165C35.1325 8.60165 35.4418 8.73445 35.6661 8.99843C35.8904 9.26242 36.003 9.63248 36.003 10.1078V14.3591H37.8152V9.62843C37.8152 8.84215 37.6047 8.20567 37.1852 7.71901C36.7658 7.23315 36.1447 6.99022 35.3228 6.99022C34.8434 6.99022 34.4069 7.09549 34.0142 7.30603C33.6206 7.51656 33.3072 7.81132 33.0748 8.18867L33.125 8.11093L33.0951 8.05425C32.9524 7.81232 32.7634 7.60097 32.5388 7.43235L32.4214 7.34894C32.0594 7.10925 31.5954 6.98941 31.0318 6.98941C30.5387 6.98941 30.0933 7.09792 29.6957 7.31574C29.4309 7.4615 29.2017 7.64046 29.009 7.85505L28.9264 7.95222V7.1627H27.3271V14.3591H29.1532V14.3599ZM41.5466 14.5599C42.1685 14.5599 42.6827 14.4522 43.0892 14.236C43.405 14.0692 43.7046 13.8198 43.9872 13.4902L43.9986 13.4756V14.3599H45.5841V9.96205C45.5841 9.63329 45.5711 9.33611 45.5444 9.06888C45.5132 8.78841 45.4271 8.51683 45.291 8.26965C45.0552 7.80604 44.6567 7.44565 44.1719 7.25744C43.6787 7.06148 43.1143 6.9635 42.4795 6.9635C41.613 6.9635 40.9288 7.14974 40.4275 7.52304C39.9354 7.88179 39.5747 8.39215 39.4007 8.97576L41.0405 9.49563C41.1555 9.16687 41.3579 8.93851 41.6462 8.80895C41.9353 8.6802 42.213 8.61623 42.4795 8.61623C42.9588 8.61623 43.3014 8.71583 43.5054 8.91584C43.6488 9.05593 43.7419 9.25108 43.7848 9.50211L43.7969 9.59604L43.5079 9.63896L43.2115 9.6835L42.9256 9.7256C42.4592 9.79443 42.0422 9.8665 41.6729 9.94181C41.3045 10.0179 40.9871 10.1038 40.7206 10.2017C40.3336 10.3443 40.0259 10.5208 39.7975 10.7313C39.5683 10.9427 39.4032 11.1856 39.3011 11.4609C39.1957 11.7538 39.1436 12.0631 39.1473 12.3743C39.1473 12.7736 39.2396 13.1396 39.4242 13.47C39.6088 13.8012 39.8793 14.0651 40.2372 14.2635C40.5951 14.4611 41.0308 14.5599 41.5466 14.5599ZM41.9329 13.1339C41.7239 13.1339 41.5442 13.1023 41.3936 13.0408C41.2531 12.9867 41.1315 12.8927 41.0437 12.7703C40.9593 12.6458 40.916 12.498 40.9198 12.3476C40.9198 12.2278 40.9458 12.1185 40.9968 12.0213C41.0478 11.9233 41.128 11.8334 41.2365 11.7508C41.3458 11.669 41.4891 11.5921 41.6664 11.5209C41.8219 11.4642 42.0017 11.4099 42.2066 11.3613C42.4106 11.3127 42.6795 11.2577 43.0123 11.1978C43.2204 11.1605 43.469 11.1168 43.7573 11.0682L43.7816 11.065V11.0706C43.7787 11.1605 43.7749 11.2504 43.7702 11.3403L43.7621 11.4909C43.7459 11.7508 43.6925 11.9792 43.5985 12.1743C43.55 12.2764 43.4576 12.4027 43.3224 12.5541C43.1662 12.7206 42.981 12.8573 42.7758 12.9574C42.5475 13.0748 42.2657 13.1339 41.9337 13.1339H41.9329ZM49.156 14.3599V10.8949L51.6476 14.3599H54.0065L51.2346 10.7613L53.834 7.16351H51.595L49.156 10.6285V4.76498H47.317L47.3032 14.3599H49.156V14.3599ZM61.2765 11.2682C61.3518 10.3977 61.2628 9.64058 61.0093 8.99601C60.7567 8.35143 60.3655 7.85181 59.8368 7.49632C59.3088 7.14164 58.6667 6.9635 57.9111 6.9635C57.201 6.9635 56.5718 7.12464 56.026 7.44692C55.4787 7.76947 55.0329 8.23912 54.7393 8.80247C54.4283 9.38469 54.2729 10.0689 54.2729 10.8552C54.2729 11.5743 54.4324 12.2132 54.7498 12.7703C55.0607 13.321 55.5174 13.7752 56.0697 14.0829C56.6309 14.4012 57.2803 14.5599 58.018 14.5599C58.7112 14.5599 59.3493 14.3777 59.9339 14.0133C60.5148 13.653 60.9644 13.1157 61.2166 12.4804L59.4035 11.9614C59.2707 12.2545 59.0772 12.4788 58.8246 12.6335C58.5711 12.7898 58.2666 12.8675 57.9111 12.8675C57.3475 12.8675 56.92 12.6837 56.6285 12.3169C56.4277 12.0634 56.2957 11.7371 56.2333 11.337L56.2236 11.2682H61.2765V11.2682ZM59.4424 9.92238H56.2722L56.2851 9.86083C56.3475 9.59928 56.4398 9.37497 56.5645 9.18873L56.6293 9.09966C56.92 8.72392 57.3743 8.53606 57.9913 8.53606C58.5201 8.53606 58.9007 8.6972 59.1339 9.01949C59.2772 9.21707 59.3768 9.4932 59.4319 9.84707L59.4424 9.92238ZM64.6006 14.3599V10.6811C64.6006 10.4058 64.6387 10.158 64.714 9.93776C64.785 9.72616 64.8985 9.53133 65.0476 9.36526C65.1942 9.20331 65.3739 9.07293 65.5877 8.97495C65.8007 8.87292 66.0396 8.81219 66.3035 8.79194C66.5683 8.7717 66.7999 8.79275 66.9999 8.85511V7.1627C66.7834 7.13625 66.5648 7.13082 66.3473 7.1465C66.1286 7.16189 65.9181 7.19914 65.714 7.25987C65.5148 7.31734 65.3242 7.40122 65.1472 7.50928C64.9205 7.64208 64.7302 7.81132 64.5747 8.01538C64.5124 8.09719 64.4551 8.18264 64.403 8.27127L64.3747 8.32228V7.16351H62.7754V14.3599H64.6014H64.6006ZM9.47263 0.478088C13.8988 0.478088 17.5695 3.71472 18.2456 7.9506C19.4492 9.3291 20.0842 11.1133 20.0223 12.9422C19.9604 14.7712 19.2061 16.5083 17.9121 17.8023C16.618 19.0962 14.8808 19.8503 13.0519 19.9121C11.2229 19.9739 9.43881 19.3387 8.0604 18.135C3.82533 17.4589 0.587891 13.789 0.587891 9.36202C0.587891 4.45565 4.56546 0.478088 9.47101 0.478088H9.47263ZM12.7919 5.47515C11.3231 5.47757 9.88999 5.928 8.68394 6.76631C7.47789 7.60462 6.55628 8.7909 6.04215 10.1668C5.52803 11.5426 5.44587 13.0426 5.80664 14.4664C6.16741 15.8901 6.95394 17.17 8.06121 18.135C8.7677 18.2475 9.48511 18.2753 10.1982 18.2176C8.94289 17.625 7.92692 16.6224 7.31765 15.3751C6.70837 14.1278 6.54213 12.7102 6.84632 11.3557C7.15051 10.0013 7.90697 8.79091 8.9911 7.92393C10.0752 7.05695 11.4223 6.58511 12.8105 6.58614C13.9669 6.588 15.0991 6.91782 16.0756 7.5373C17.0522 8.15679 17.833 9.04053 18.3274 10.0859C18.1559 12.185 17.2443 14.155 15.7553 15.6443C14.2662 17.1337 12.2964 18.0457 10.1974 18.2176C11.3354 18.7546 12.6115 18.927 13.8512 18.7113C15.0909 18.4955 16.2338 17.9022 17.1235 17.0123C18.0132 16.1224 18.6063 14.9795 18.8218 13.7397C19.0373 12.4999 18.8646 11.2239 18.3274 10.0859C18.3858 9.37349 18.3586 8.65659 18.2464 7.9506C17.5682 7.17067 16.73 6.5459 15.7888 6.11875C14.8476 5.6916 13.8254 5.4721 12.7919 5.47515V5.47515Z"
                      fill="#ADADAD"
                    />
                  </svg>
                </div>
                {/* // Mobile */}

              </div> 

              <div className="w-[502px] h-fit dark:bg-white dark:rounded-[15px] overflow-hidden lg:w-[450px] xl:w-[250px] lg:hidden">
                <Image src="/image-hero-desktop.png"
                  alt="Snap"
                  width={502}
                  height={669}
                  layout="responsive"
                  blurDataURL="/image-hero-desktop.png"
                  priority
                />
              </div>

              {/* // Mobile */}
              <div className="w-[375px] h-[450px] dark:bg-white dark:rounded-[15px] overflow-hidden hidden lg:block">
                <Image src="/image-hero-mobile.png"
                  alt="Snap"
                  width={375}
                  height={282}
                  layout="responsive"
                  blurDataURL="/image-hero-desktop.png"
                  priority
                />
              </div>
              {/* // Mobile */}
            </div>
        </div>
      </main>
    </div>
  )
}
