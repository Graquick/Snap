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
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <Icon
                icon="uil:bars"
                className="block md:hidden h-6 w-6"
                aria-hidden="true"
            />
            </Disclosure.Button>
            
            <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
                <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                Virtual Dashboard
                </h1>
                <div className=" my-4 border-b border-gray-100 pb-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Dashboard
                    </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Profile
                    </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Comments
                    </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Analytics
                    </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Messages
                    </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Integration
                    </h3>
                </div>
                </div>
                {/* setting  */}
                <div className=" my-4 border-b border-gray-100 pb-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Settings
                    </h3>
                </div>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    More
                    </h3>
                </div>
                </div>
                {/* logout */}
                <div className=" my-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Logout
                    </h3>
                </div>
                </div>
            </div>
            </div>
      </Disclosure>

    </>
  )
}

export default SideBar