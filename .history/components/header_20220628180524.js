import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Menu } from '@headlessui/react'
import { Switch } from '@headlessui/react'

 // import { useTheme } from 'next-themes';
 import useMounted from '../components/useMounted.js'
 import useMounted from '../components/useMounted.js'

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

MyLink.displayName = 'MyLink';

function Header() {

  const [enabled, setEnabled] = useState(false)
  const [enabledTwo, setEnabledTwo] = useState(false)

  const mounted = useMounted()

  // const { systemTheme, theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //     setMounted(true)
  // }, [])
  
  // const currentTheme = theme === "system" ? systemTheme : theme;

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };


  return mounted && (
    <>
      <header className="flex w-full mx-auto justify-between sticky top-0 z-10 bg-neutral-100 h-28 items-center lg:h-24 lg:px-4 dark:bg-neutral-80">
        <div className="flex w-[850px] justify-between items-center 2xl:w-[750px] xl:w-[600px]">
            <div className="font-[Arial, Helvetica, sans-serif] text-[4rem] font-bold text-black cursor-default transition-all w-fit duration-150 ease-in-out relative group dark:text-white lg:text-[3rem]"> 
            <svg
              className="absolute top-[2.5rem] -right-8 w-[26px] h-[26px] transition-all duration-500 ease-in-out lg:hidden"
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
            </svg>
            
            {/* // Mobile // */}
            <svg
              width={23}
              height={22}
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[2.1rem] -right-8 w-[22.6px] h-[21.6px] transition-all duration-500 ease-in-out"
              preserveAspectRatio="none"
            >
              <path
                d="M6.8 5H20.8C21.2418 5 21.6 5.35817 21.6 5.8V19.8C21.6 20.2418 21.2418 20.6 20.8 20.6H6.8C6.35817 20.6 6 20.2418 6 19.8V5.8C6 5.35817 6.35817 5 6.8 5Z"
                fill="white"
                stroke="black"
                stroke-width={2}
              />
              <path
                d="M15.8 0H1.8C0.805887 0 0 0.805887 0 1.8V15.8C0 16.7941 0.805887 17.6 1.8 17.6H15.8C16.7941 17.6 17.6 16.7941 17.6 15.8V1.8C17.6 0.805887 16.7941 0 15.8 0Z"
                fill="black"
              />
              <path
                d="M13.8 5.79999C13.8 6.90456 12.9046 7.79999 11.8 7.79999C10.6954 7.79999 9.79999 6.90456 9.79999 5.79999C9.79999 4.69542 10.6954 3.79999 11.8 3.79999C12.9046 3.79999 13.8 4.69542 13.8 5.79999Z"
                fill="black"
                stroke="white"
              />
            </svg>
            {/* // Mobile // */}

            snap
            </div>

            <div className="w-[600px] 2xl:w-[500px] xl:w-[360px] lg:hidden ">
              <ul className="flex justify-between w-full text-xl 2xl:text-[1rem] xl:text-[.75rem]">


                <li className="flex items-center cursor-pointer text-gray-500 font-semibold justify-between w-[20%] transition-all ease-in-out duration-300 relative dark:text-white 2xl:w-[15%] xl:w-[10%]">
                  <Menu>
                    {({open}) => (
                      <>
                        <Switch checked={enabled} onChange={setEnabled} className="flex items-center justify-center gap-2 xl:gap-1">
                          Features <Icon icon="akar-icons:chevron-down"  className={`${enabled ? 'rotate-180' : 'rotate-0'} transition-all duration-150 ease-in-out 2xl:text-sm xl:text-xs`}/>
                        </Switch>
                        {enabled && (
                          <>
                            <Menu.Items static 
                              className="absolute left-0 z-10 flex flex-col justify-center bg-white border-2 rounded-md h-[13.25rem] focus:outline-none w-44 top-12 dark:border-neutral-500 2xl:w-32 2xl:h-36 2xl:gap-2 xl:w-24"
                              as={motion.div}
                              initial={{ y: 100}}
                              animate={{ y: 0}}
                              transition={spring}
                              
                            >
                              <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full 2xl:text-[.85rem] 2xl:gap-1 2xl:py-0 2xl:px-1  xl:text-[.7rem]`}
                                    >
                                      <Icon icon="uil:clipboard-notes" className="text-xl xl:text-sm" /> Features
                                    </MyLink>
                                  )}
                              </Menu.Item>
                              
                              <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full  2xl:text-[.85rem] 2xl:gap-1 2xl:py-0 2xl:px-1  xl:text-[.7rem]`}
                                    >
                                      <Icon icon="uil:calendar-alt" className="text-xl xl:text-sm" /> Calendar
                                    </MyLink>
                                  )}
                              </Menu.Item>
                              
                              <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full 2xl:text-[.85rem] 2xl:gap-1 2xl:py-0 2xl:px-1  xl:text-[.7rem]`}
                                    >
                                      <Icon icon="uil:lightbulb-alt" className="text-xl xl:text-sm" /> Reminders
                                    </MyLink>
                                  )}
                              </Menu.Item>
                              
                              <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                  {({ active }) => (
                                    <MyLink href="#"
                                      className={`${
                                        active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                      } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full 2xl:text-[.85rem] 2xl:gap-1 2xl:py-0 2xl:px-1  xl:text-[.7rem]`}
                                    >
                                      <Icon icon="uil:clock-three" className="text-xl xl:text-sm" /> Planning
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


                <li className="flex items-center cursor-pointer text-gray-500 font-semibold justify-between w-[20%]  transition-all ease-in-out duration-300 relative dark:text-white 2xl:w-[15%]">
                  <Menu>
                      {({open}) => (
                        <>
                          <Switch checked={enabledTwo} onChange={setEnabledTwo} className="flex items-center justify-center gap-2">
                            Company <Icon icon="akar-icons:chevron-down"  className={`${enabledTwo ? 'rotate-180' : 'rotate-0'} transition-all duration-150 ease-in-out 2xl:text-sm xl:text-xs`}/>
                          </Switch>
                          {enabledTwo && (
                            <>
                              <Menu.Items static 
                                className="absolute left-0 z-10 flex flex-col justify-center bg-white border-2 rounded-md h-[10.025rem] focus:outline-none w-44 top-12 dark:border-neutral-500 2xl:w-24 xl:w-20 2xl:h-[6.5rem] xl:h-24"
                                as={motion.div}
                                initial={{ y: 100}}
                                animate={{ y: 0}}
                                transition={spring}
                                
                              >
                                <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                    {({ active }) => (
                                      <MyLink href="#"
                                        className={`${
                                          active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                        } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full 2xl:text-md 2xl:gap-1 2xl:py-0 2xl:px-1  xl:text-[.7rem]`}
                                      >
                                        History
                                      </MyLink>
                                    )}
                                </Menu.Item>
                                
                                <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                    {({ active }) => (
                                      <MyLink href="#"
                                        className={`${
                                          active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                        } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full 2xl:text-md 2xl:gap-1 2xl:py-0 2xl:px-1  xl:text-[.7rem]`}
                                      >
                                        Our Team
                                      </MyLink>
                                    )}
                                </Menu.Item>
                                
                                <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                    {({ active }) => (
                                      <MyLink href="#"
                                        className={`${
                                          active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-black'
                                        } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full 2xl:text-md 2xl:gap-1 2xl:py-0 2xl:px-1  xl:text-[.7rem]`}
                                      >
                                        Blog
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


                <li className="flex items-center justify-center font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-pointer w-fit dark:text-white">Careers</li>
                <li className="flex items-center justify-center font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-pointer w-fit dark:text-white">About</li>
              </ul>
            </div>
        </div>


        <div className="flex items-center justify-center gap-4 2xl:w-[16%] xl:w-[12%] lg:hidden">
            <motion.div className="cursor-pointer w-[170px] h-[55px] font-epilogue text-[18px] font-semibold no-underline flex items-center justify-center text-black dark:text-white 2xl:w-16 2xl:text-sm 2xl:h-12 xl:w-4 xl:text-[.5rem] xl:h-4"
                whileTap={{ x: 0, scale: 0.5 }}
              >
                Login
              </motion.div>

            <motion.div className="cursor-pointer w-[170px] h-[55px] border border-black rounded-[15px] font-epilogue text-[18px] font-semibold no-underline flex items-center justify-center text-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition-all duration-150 ease-out 2xl:w-24 2xl:text-sm 2xl:h-12 xl:w-[2.95rem] xl:text-[.5rem] xl:h-[1.95rem]"
                whileTap={{ x: 0, scale: 0.5 }}
              >
                Register
              </motion.div>
        </div>

        <div>
          <SideBar />
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