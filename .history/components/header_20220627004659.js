import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Menu } from '@headlessui/react'

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

function Header() {

  const [open, setOpen] = useState(false)

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <>
      <header className="flex max-w-[75%] m-auto justify-between sticky top-0 h-36 items-center">
        <div className="flex w-[45%] justify-between items-center">
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

            <div className="w-[70%]">
              <ul className="flex justify-between w-full text-xl">

                <li className="flex items-center cursor-pointer text-gray-500 font-semibold justify-between w-[20%] hover:text-black transition-all ease-in-out duration-300 relative">
                  <Menu>
                    {({open}) => (
                      <>
                        <Menu.Button className="flex items-center justify-center gap-4" >Features     <Icon icon="akar-icons:chevron-down" />
                        </Menu.Button>
                        {open && (
                          <>
                            <Menu.Items className="absolute left-0 bg-white border rounded-md w-44 top-12 h-44">
                              <Menu.Item>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                      }`}
                                      style={{ whiteSpace: "nowrap", padding: " .75rem 1.25rem" }}
                                    >
                                      Features <Icon icon="uil:clipboard" />
                                    </MyLink>
                                  )}
                              </Menu.Item>
                            </Menu.Items> 
                          </>
                        )}
                      </>
                    )}
                  </Menu>
                </li>


                <li className="flex items-center cursor-pointer text-gray-500 font-semibold justify-between w-[20%] hover:text-black transition-all ease-in-out duration-300">Company <motion.div
                  
                ><Icon icon="akar-icons:chevron-down" /></motion.div></li>


                <li className="flex items-center justify-center font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-pointer w-fit hover:text-black">Careers</li>
                <li className="flex items-center justify-center font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-pointer w-fit hover:text-black">About</li>
              </ul>
            </div>
        </div>

        <div>
            <motion.button className="w-[170px] h-[55px] font-epilogue text-[18px] font-semibold no-underline"
                whileHover={{ x: 5, transition: { ease: "easeOut" } }}
                whileTap={{ x: 0, scale: 0.5 }}
              >
                Login
              </motion.button>

            <motion.button className="w-[170px] h-[55px] border border-black rounded-[15px] font-epilogue text-[18px] font-semibold no-underline"
                whileHover={{ x: 10, background: "black", color: "white", transition: { ease: "easeOut" } }}
                whileTap={{ x: 0, scale: 0.5 }}
              >
                Register
              </motion.button>
        </div>

      </header>


    </>
  )
}

export default Header