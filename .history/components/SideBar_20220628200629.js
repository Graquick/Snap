import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Disclosure } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { Switch } from '@headlessui/react'

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

function SideBar() {
    const [open, setOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [enabledTwo, setEnabledTwo] = useState(false)
  
    const mounted = useMounted()

    const variantsIcon = {
        opened: {
            rotate: 90
        },
        closed: {
            rotate: 0
        }
    }

    const variantsMenu = {
        opened: {
            x: 0,
            display: "block"
        },
        closed: {
            x: 300,
            transitionEnd: {
                display: "none"
            }
        }
    }

  return mounted && (
    <>  

        <AnimatePresence>
            <motion.div className="absolute top-[1.5rem] right-[1rem] z-20 text-black cursor-pointer dark:text-white" onClick={() => setOpen(state => !state)}
                variants={variantsIcon}
                animate={open ? "opened" : "closed"}
                exit="closed"
            >
                <Icon icon={open ? "ei:close" : "clarity:bars-line"} className={open ? "text-[2.5rem]" : "text-[2rem]"} />
            </motion.div>
            
            <motion.div className="bg-neutral-100/80 backdrop-blur-sm h-[850px] w-[90%] absolute top-0 -right-12  z-10 flex flex-col justify-center items-center text-black dark:bg-neutral-800/80 dark:text-white"
                initial={false}
                variants={variantsMenu}
                animate={open ? "opened" : "closed"}
                exit="closed"
            >
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
            </motion.div>
        </AnimatePresence>
    </>
  )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  

export default SideBar