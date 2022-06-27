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

                <li className="flex items-center cursor-pointer text-gray-500 font-semibold justify-between w-[20%] transition-all ease-in-out duration-300 relative dark:text-white">
                  <Menu>
                    {({open}) => (
                      <>
                        <Menu.Button className="flex items-center justify-center gap-4" onClick={() => setOpen()}>Features <Icon icon="akar-icons:chevron-down" />
                        </Menu.Button>
                        {open && (
                          <>
                            <Menu.Items static className={`${open ? 'hidden' :' dark:border-neutral-500 border rounded-md'}`}
                              style={{ position: "absolute", top: "3rem", left: 0, zIndex: 10, width: "11rem", height: "14rem", background: "white"  }}
                            // className="absolute left-0 z-10 h-56 bg-white border rounded-md focus:outline-none w-44 top-12 dark:border-neutral-500"
                              as={motion.div}
                              initial={{ x: -100, y: -100}}
                              animate={{ x: 0, y: 0}}
                              transition={spring}
                              
                            >
                              <Menu.Item>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      }`}
                                      style={{ whiteSpace: "nowrap", padding: " .75rem 1.25rem", display: "flex", gap: ".75rem", justifyContent: "flex-start", alignItems: "center", width: "100%" }}
                                    >
                                      <Icon icon="uil:clipboard-notes" /> Features
                                    </MyLink>
                                  )}
                              </Menu.Item>
                              
                              <Menu.Item>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      }`}
                                      style={{ whiteSpace: "nowrap", padding: " .75rem 1.25rem", display: "flex", gap: ".75rem", justifyContent: "flex-start", alignItems: "center", width: "100%"  }}
                                    >
                                      <Icon icon="uil:calendar-alt" /> Calendar
                                    </MyLink>
                                  )}
                              </Menu.Item>
                              
                              <Menu.Item>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      }`}
                                      style={{ whiteSpace: "nowrap", padding: " .75rem 1.25rem", display: "flex", gap: ".75rem", justifyContent: "flex-start", alignItems: "center", width: "100%"  }}
                                    >
                                      <Icon icon="uil:lightbulb-alt" /> Reminders
                                    </MyLink>
                                  )}
                              </Menu.Item>
                              
                              <Menu.Item>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      }`}
                                      style={{ whiteSpace: "nowrap", padding: " .75rem 1.25rem", display: "flex", gap: ".75rem", justifyContent: "flex-start", alignItems: "center", width: "100%"  }}
                                    >
                                      <Icon icon="uil:clock-three" /> Planning
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


                <li className="flex items-center cursor-pointer text-gray-500 font-semibold justify-between w-[20%]  transition-all ease-in-out duration-300 dark:text-white">Company <motion.div
                  
                ><Icon icon="akar-icons:chevron-down" /></motion.div></li>


                <li className="flex items-center justify-center font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-pointer w-fit dark:text-white">Careers</li>
                <li className="flex items-center justify-center font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-pointer w-fit dark:text-white">About</li>
              </ul>
            </div>
        </div>

        <div>
            <motion.button className="w-[170px] h-[55px] font-epilogue text-[18px] font-semibold no-underline dark:text-white"
                whileHover={{ x: 5, transition: { ease: "easeOut" } }}
                whileTap={{ x: 0, scale: 0.5 }}
              >
                Login
              </motion.button>

            <motion.button className="w-[170px] h-[55px] border border-black rounded-[15px] font-epilogue text-[18px] font-semibold no-underline dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition-all duration-150 ease-out"
                whileHover={{ x: 10, transition: { ease: "easeOut" } }}
                whileTap={{ x: 0, scale: 0.5 }}
              >
                Register
              </motion.button>
        </div>

      </header>


    </>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default Header