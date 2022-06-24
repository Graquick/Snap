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
        <div className="flex w-[1440px] h-[1024px] justify-between bg-blue-400 ">
            <div className=" bg-purple-100 w-[718px] h-[669px] flex flex-col justif">
              <h1 className="text-[84px] w-[560px] font-extrabold font-epilogue">Make remote work</h1>
              <p className="text-[18px] w-[434px] font-epilogue font-semibold text-gray-500 text-justify">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
              <button className="w-[150px] h-[55px] border border-black rounded-[15px] font-epilogue text-[18px] font-semibold">
                Learn more
              </button>
              <div className="flex gap-8">

                <svg width="114" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.887 20c.838 0 1.576-.183 2.213-.55a4.977 4.977 0 0 0 1.584-1.429v1.638h3.195V0h-3.195v8.191A4.848 4.848 0 0 0 25.1 6.756c-.637-.362-1.375-.544-2.213-.544-.951 0-1.842.18-2.67.538-.83.358-1.561.854-2.194 1.487a6.996 6.996 0 0 0-1.486 2.196A6.68 6.68 0 0 0 16 13.106c0 .953.179 1.844.537 2.674.358.83.853 1.562 1.486 2.195a6.989 6.989 0 0 0 2.193 1.488c.83.358 1.72.537 2.671.537Zm.04-3.08a3.42 3.42 0 0 1-1.827-.511 3.826 3.826 0 0 1-1.827-3.303c0-.708.166-1.35.498-1.926a3.9 3.9 0 0 1 1.322-1.383 3.379 3.379 0 0 1 1.834-.518c.672 0 1.272.17 1.8.511.528.341.94.802 1.237 1.383.297.581.445 1.225.445 1.933 0 .7-.148 1.34-.445 1.92a3.53 3.53 0 0 1-1.23 1.383c-.524.34-1.127.511-1.807.511ZM39.294 20c.794 0 1.486-.181 2.075-.544a4.375 4.375 0 0 0 1.434-1.422l.13 1.625h3.209V6.553h-3.195l.144 1.678a5.992 5.992 0 0 0-1.748-1.468c-.685-.385-1.464-.577-2.337-.577-.934 0-1.807.175-2.619.524a6.818 6.818 0 0 0-2.147 1.455c-.62.62-1.1 1.341-1.44 2.163a6.81 6.81 0 0 0-.511 2.634 6.935 6.935 0 0 0 2.042 4.967 7.16 7.16 0 0 0 2.24 1.52c.846.368 1.754.551 2.723.551Zm.091-3.08a3.51 3.51 0 0 1-1.813-.498 4.227 4.227 0 0 1-1.395-1.33 4.049 4.049 0 0 1-.654-1.842c-.061-.734.057-1.4.353-1.998a3.592 3.592 0 0 1 1.264-1.435 3.3 3.3 0 0 1 1.853-.538 3.32 3.32 0 0 1 1.794.498c.532.332.968.776 1.309 1.33.34.555.541 1.173.602 1.855.053.725-.054 1.387-.32 1.986a3.384 3.384 0 0 1-1.172 1.435c-.516.358-1.122.537-1.82.537Zm14.378 2.74V9.75h2.54V6.553h-2.54V2.438h-3.195v4.115H48.63v3.198h1.938v9.908h3.195Zm11.273.34c.795 0 1.486-.181 2.076-.544a4.375 4.375 0 0 0 1.433-1.422l.131 1.625h3.208V6.553H68.69l.145 1.678a5.992 5.992 0 0 0-1.749-1.468c-.685-.385-1.464-.577-2.337-.577-.934 0-1.807.175-2.619.524a6.818 6.818 0 0 0-2.147 1.455c-.62.62-1.1 1.341-1.44 2.163a6.81 6.81 0 0 0-.51 2.634 6.935 6.935 0 0 0 2.042 4.967 7.16 7.16 0 0 0 2.239 1.52c.847.368 1.754.551 2.723.551Zm.092-3.08a3.51 3.51 0 0 1-1.814-.498 4.227 4.227 0 0 1-1.394-1.33 4.049 4.049 0 0 1-.655-1.842c-.06-.734.057-1.4.354-1.998a3.592 3.592 0 0 1 1.263-1.435 3.3 3.3 0 0 1 1.853-.538 3.32 3.32 0 0 1 1.794.498c.532.332.969.776 1.31 1.33.34.555.54 1.173.602 1.855.052.725-.055 1.387-.321 1.986a3.384 3.384 0 0 1-1.172 1.435c-.515.358-1.122.537-1.82.537ZM81.993 20c.96 0 1.857-.18 2.69-.537a6.968 6.968 0 0 0 3.687-3.696 6.774 6.774 0 0 0 .536-2.687c0-1.267-.31-2.423-.93-3.467a7.027 7.027 0 0 0-2.5-2.496c-1.048-.62-2.209-.93-3.483-.93-.82 0-1.547.185-2.18.556a5.15 5.15 0 0 0-1.591 1.448V0h-3.195v19.66h3.195v-1.665a5.15 5.15 0 0 0 1.59 1.448c.634.371 1.36.557 2.18.557Zm-.04-3.093c-.663 0-1.256-.17-1.78-.511a3.53 3.53 0 0 1-1.231-1.383 4.187 4.187 0 0 1-.445-1.933c0-.69.148-1.326.445-1.907a3.58 3.58 0 0 1 1.23-1.39 3.164 3.164 0 0 1 1.782-.517c.672 0 1.287.17 1.846.511.558.341 1.004.802 1.335 1.383.332.58.498 1.221.498 1.92 0 .708-.166 1.35-.498 1.927a3.88 3.88 0 0 1-1.329 1.382 3.435 3.435 0 0 1-1.852.518ZM92.874 4.6c.463 0 .854-.155 1.173-.465.318-.31.478-.701.478-1.173 0-.463-.16-.852-.478-1.166a1.604 1.604 0 0 0-1.172-.472c-.463 0-.856.157-1.179.472a1.563 1.563 0 0 0-.484 1.166c0 .472.161.863.484 1.173.323.31.716.465 1.179.465Zm19 5c.463 0 .854-.155 1.173-.465.318-.31.478-.701.478-1.173 0-.463-.16-.852-.478-1.166a1.604 1.604 0 0 0-1.172-.472c-.463 0-.856.157-1.179.472a1.563 1.563 0 0 0-.484 1.166c0 .472.161.863.484 1.173.323.31.716.465 1.179.465ZM6.979 19.324c1.835 0 3.385-.616 4.65-1.846 1.264-1.23 1.896-2.782 1.896-4.654 0-1.838-.632-3.38-1.897-4.628-1.264-1.248-2.814-1.872-4.65-1.872-1.835 0-3.393.624-4.675 1.872C1.021 9.444.38 10.986.38 12.824c0 1.872.64 3.423 1.922 4.654 1.282 1.23 2.84 1.846 4.676 1.846Zm87.48.335V6.553h-3.195V19.66h3.195Zm14.399 0v-3.198h-6.573l6.573-6.71V6.553H97.675v3.198h6.586l-6.586 6.71v3.198h11.182Z" fill="#ADADAD"/></svg>

                <svg width="73" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M6.476 17.85c1.434 0 2.715-.47 3.726-1.287l.364.87h3.289V5.126h-3.17l-.436.952C9.23 5.238 7.93 4.754 6.476 4.754 2.699 4.754 0 7.467 0 11.28c0 3.825 2.7 6.571 6.476 6.571Zm.568-3.754c-1.593 0-2.764-1.2-2.764-2.807 0-1.598 1.161-2.797 2.764-2.797 1.594 0 2.765 1.2 2.765 2.797 0 1.607-1.171 2.807-2.765 2.807Zm15.422 3.754c3.648 0 6.078-2.243 6.078-5.687V5.138H24.29v6.84c0 1.286-.687 2.064-1.824 2.064-1.136 0-1.837-.765-1.837-2.064v-6.84h-4.254v7.025c0 3.444 2.443 5.687 6.091 5.687Zm14.361.013c1.439 0 2.72-.488 3.725-1.33l.401.914h3.148V.694h-4.205v4.895a5.78 5.78 0 0 0-3.069-.854c-3.79 0-6.489 2.732-6.489 6.557 0 3.826 2.7 6.571 6.49 6.571Zm.57-3.754c-1.594 0-2.765-1.21-2.765-2.816 0-1.608 1.17-2.817 2.764-2.817 1.594 0 2.765 1.21 2.765 2.817 0 1.607-1.171 2.816-2.765 2.816ZM50.99 3.598V0H46.8v3.598h4.19Zm.032 13.848V5.138H46.77v12.308h4.254Zm8.88.404c4.014 0 6.925-2.755 6.925-6.558 0-3.815-2.911-6.557-6.924-6.557-4.027 0-6.925 2.742-6.925 6.557 0 3.803 2.898 6.558 6.925 6.558Zm9.76-9.573c.463 0 .853-.156 1.172-.466.318-.31.478-.7.478-1.173 0-.463-.16-.852-.478-1.166A1.604 1.604 0 0 0 69.663 5c-.463 0-.856.157-1.179.472A1.563 1.563 0 0 0 68 6.638c0 .472.161.863.484 1.173.323.31.716.466 1.179.466Zm-9.76 5.765c-1.55 0-2.663-1.122-2.663-2.75 0-1.627 1.113-2.748 2.664-2.748 1.55 0 2.663 1.131 2.663 2.749 0 1.627-1.112 2.749-2.663 2.749Zm-39.676 21.86v-4.846a5.789 5.789 0 0 0 3.01.817c3.777 0 6.476-2.735 6.476-6.57 0-3.835-2.7-6.558-6.475-6.558-1.468 0-2.775.506-3.79 1.381l-.533-.977h-2.893v16.753h4.205Zm2.442-7.783c-1.594 0-2.765-1.2-2.765-2.816 0-1.617 1.171-2.817 2.765-2.817 1.593 0 2.764 1.2 2.764 2.817 0 1.617-1.18 2.816-2.764 2.816Zm13.25 3.338v-6.573c0-1.58.802-2.49 2.09-2.49 1.11 0 1.61.724 1.61 2.144v6.919h4.253v-7.412c0-3.19-1.822-5.26-4.657-5.26a5.28 5.28 0 0 0-3.297 1.174v-5.255h-4.253v16.753h4.253Zm14.718-13.849V14.01h-4.189v3.598h4.189Zm.033 13.849V19.148h-4.254v12.309h4.254Zm6.929 0V14.704h-4.254v16.753H57.6Zm8.664.404c3.099 0 5.597-1.755 6.466-4.564h-4.233c-.409.72-1.24 1.154-2.233 1.154-1.343 0-2.243-.73-2.52-2.142h9.17c.055-.38.087-.752.087-1.122 0-3.611-2.756-6.442-6.737-6.442-3.876 0-6.708 2.775-6.708 6.548 0 3.76 2.855 6.568 6.708 6.568Zm2.547-7.9h-4.993c.344-1.222 1.206-1.894 2.446-1.894 1.284 0 2.173.664 2.547 1.894Z" fill="#ADADAD"/></svg>

                <svg width="90" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM15 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm16.515 18.34V9.964c.226-.293.5-.513.824-.66.324-.146.689-.22 1.095-.22.587 0 1.058.205 1.412.614.353.408.53.945.53 1.608v7.034h3.658v-7.543a7.069 7.069 0 0 0-.045-.787c.241-.293.527-.52.858-.683.331-.162.7-.242 1.107-.242.587 0 1.057.204 1.411.613.354.408.53.945.53 1.608v7.034h3.659v-7.543c0-1.435-.433-2.615-1.299-3.54-.865-.926-1.976-1.389-3.33-1.389-.783 0-1.506.147-2.168.44a4.968 4.968 0 0 0-1.716 1.25 4.316 4.316 0 0 0-1.524-1.239 4.504 4.504 0 0 0-2.021-.45c-.557 0-1.088.084-1.592.254-.505.17-.967.424-1.389.763V6.1h-3.658v12.24h3.658Zm23.168.231c.993 0 1.885-.146 2.675-.44.79-.292 1.562-.763 2.315-1.41l-2.416-2.199c-.286.293-.632.52-1.039.683a3.63 3.63 0 0 1-1.355.243c-.692 0-1.294-.182-1.806-.544a3.22 3.22 0 0 1-1.13-1.4h8.514v-.926a7.74 7.74 0 0 0-.452-2.672c-.301-.825-.719-1.531-1.253-2.117A5.875 5.875 0 0 0 56.828 6.4a5.71 5.71 0 0 0-2.416-.509c-.873 0-1.69.162-2.45.486a6.032 6.032 0 0 0-1.976 1.342 6.357 6.357 0 0 0-1.321 2.025 6.418 6.418 0 0 0-.486 2.487c0 .88.17 1.709.508 2.488a6.378 6.378 0 0 0 1.378 2.024 6.268 6.268 0 0 0 2.066 1.343 6.717 6.717 0 0 0 2.552.485Zm2.167-7.682h-4.99c.18-.617.49-1.095.926-1.434.436-.34.956-.51 1.558-.51.587 0 1.103.178 1.547.533.444.355.764.825.96 1.411Zm11.268 7.682c.994 0 1.885-.146 2.676-.44.79-.292 1.562-.763 2.314-1.41l-2.416-2.199c-.286.293-.632.52-1.039.683a3.63 3.63 0 0 1-1.354.243c-.693 0-1.295-.182-1.807-.544a3.22 3.22 0 0 1-1.129-1.4h8.513v-.926a7.74 7.74 0 0 0-.452-2.672c-.3-.825-.718-1.531-1.253-2.117A5.875 5.875 0 0 0 70.263 6.4a5.71 5.71 0 0 0-2.416-.509c-.873 0-1.69.162-2.45.486a6.032 6.032 0 0 0-1.976 1.342 6.357 6.357 0 0 0-1.32 2.025 6.418 6.418 0 0 0-.486 2.487c0 .88.17 1.709.508 2.488a6.378 6.378 0 0 0 1.377 2.024 6.268 6.268 0 0 0 2.066 1.343 6.717 6.717 0 0 0 2.552.485Zm2.168-7.682h-4.99c.18-.617.489-1.095.925-1.434.437-.34.956-.51 1.558-.51.587 0 1.103.178 1.547.533.444.355.764.825.96 1.411Zm11.335 7.613c.346 0 .775-.035 1.287-.104a7.37 7.37 0 0 0 1.265-.266V15.1c-.301.092-.58.158-.836.196a5.456 5.456 0 0 1-.813.058c-.587 0-.997-.112-1.23-.335-.234-.224-.35-.606-.35-1.146v-4.65h3.342V6.1h-3.342V2.143l-3.658.81V6.1H74.87v3.123h2.416v5.392c0 1.28.365 2.248 1.095 2.904.73.655 1.81.983 3.24.983Zm6.042-13.225c.462 0 .853-.156 1.172-.466.318-.31.478-.7.478-1.173 0-.463-.16-.852-.478-1.166A1.604 1.604 0 0 0 87.663 2c-.463 0-.856.157-1.179.472A1.563 1.563 0 0 0 86 3.638c0 .472.161.863.484 1.173.323.31.716.466 1.179.466Z" fill="#ADADAD" fill-rule="evenodd"/></svg>

                <svg width="83" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M35.276 17.143V11.76c0-.51.141-.925.424-1.246.282-.321.656-.482 1.123-.482.488 0 .87.164 1.148.49.277.326.415.783.415 1.37v5.25h2.238V11.76c0-.34.065-.64.194-.9.129-.261.308-.464.539-.61.23-.145.502-.218.814-.218.489 0 .871.164 1.148.49.277.326.416.783.416 1.37v5.25h2.238V11.3c0-.971-.26-1.757-.778-2.358-.518-.6-1.285-.9-2.3-.9-.592 0-1.131.13-1.616.39-.486.26-.873.624-1.16 1.09l.062-.096-.037-.07a2.632 2.632 0 0 0-.687-.768l-.145-.103c-.447-.296-1.02-.444-1.716-.444-.609 0-1.159.134-1.65.403-.327.18-.61.401-.848.666l-.102.12v-.975h-1.975v8.887h2.255Zm15.305.247c.768 0 1.403-.133 1.905-.4.39-.206.76-.514 1.109-.921l.014-.018v1.092h1.958v-5.431c0-.406-.016-.773-.049-1.103a2.653 2.653 0 0 0-.313-.987 2.61 2.61 0 0 0-1.382-1.25c-.609-.242-1.306-.363-2.09-.363-1.07 0-1.915.23-2.534.691a3.434 3.434 0 0 0-1.268 1.794l2.025.642c.142-.406.392-.688.748-.848.357-.159.7-.238 1.029-.238.592 0 1.015.123 1.267.37.177.173.292.414.345.724l.015.116-.357.053-.366.055-.353.052c-.576.085-1.091.174-1.547.267-.455.094-.847.2-1.176.321-.478.176-.858.394-1.14.654-.283.261-.487.561-.613.901a3.22 3.22 0 0 0-.19 1.128c0 .493.114.945.342 1.353.228.409.562.735 1.004.98.442.244.98.366 1.617.366Zm.477-1.761c-.258 0-.48-.039-.666-.115a.953.953 0 0 1-.432-.334.89.89 0 0 1-.153-.522c0-.148.032-.283.095-.403.063-.121.162-.232.296-.334.135-.101.312-.196.531-.284.192-.07.414-.137.667-.197.252-.06.584-.128.995-.202.257-.046.564-.1.92-.16l.03-.004v.007a15.73 15.73 0 0 1-.014.333l-.01.186c-.02.321-.086.603-.202.844-.06.126-.174.282-.341.469a2.32 2.32 0 0 1-.675.498c-.282.145-.63.218-1.04.218Zm8.92 1.514v-4.279l3.077 4.279h2.913l-3.423-4.444 3.21-4.443H62.99l-3.012 4.279V5.294h-2.271l-.017 11.849h2.288Zm14.968-3.818c.093-1.075-.017-2.01-.33-2.806-.312-.796-.795-1.413-1.448-1.852-.652-.438-1.445-.658-2.378-.658-.877 0-1.654.199-2.328.597a4.192 4.192 0 0 0-1.589 1.674c-.384.719-.576 1.564-.576 2.535 0 .888.197 1.677.589 2.365a4.244 4.244 0 0 0 1.63 1.621c.693.393 1.495.589 2.406.589.856 0 1.644-.225 2.366-.675a3.937 3.937 0 0 0 1.584-1.893l-2.239-.641c-.164.362-.403.639-.715.83-.313.193-.689.289-1.128.289-.696 0-1.224-.227-1.584-.68-.248-.313-.411-.716-.488-1.21l-.012-.085h6.24Zm-2.265-1.662h-3.915l.016-.076c.077-.323.191-.6.345-.83l.08-.11c.359-.464.92-.696 1.682-.696.653 0 1.123.199 1.411.597.177.244.3.585.368 1.022l.013.093Zm6.37 5.48V12.6c0-.34.047-.646.14-.918a2.02 2.02 0 0 1 .412-.707c.181-.2.403-.361.667-.482.263-.126.558-.201.884-.226.327-.025.613.001.86.078v-2.09a4.173 4.173 0 0 0-.806-.02c-.27.019-.53.065-.782.14a2.869 2.869 0 0 0-.7.308c-.28.164-.515.373-.707.625a3.2 3.2 0 0 0-.212.316l-.035.063V8.256h-1.975v8.887h2.255ZM10.972 0c5.466 0 9.999 3.997 10.834 9.228A8.914 8.914 0 0 1 9.228 21.805C3.998 20.97 0 16.438 0 10.971 0 4.912 4.912 0 10.97 0Zm4.099 6.171a8.914 8.914 0 0 0-5.842 15.634 11.095 11.095 0 0 0 2.639.102 7.543 7.543 0 0 1 3.226-14.364 7.55 7.55 0 0 1 6.813 4.322 10.972 10.972 0 0 1-10.04 10.042 7.543 7.543 0 0 0 10.04-10.042 11.052 11.052 0 0 0-.1-2.637 8.892 8.892 0 0 0-6.736-3.057Z" fill="#ADADAD"/></svg>

              </div>
            </div> 

            <div className="bg-red-500 w-[502px] h-[669px]">
              <Image src="/image-hero-desktop.png"
                alt="Snap"
                width={502}
                height={669}
                layout="responsive"
                blurDataURL="/image-hero-desktop.png"
              />
            </div>
        </div>
      </main>
    </div>
  )
}
