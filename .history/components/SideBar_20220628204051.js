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
                <ul className="absolute top-32 left-0 flex flex-col gap-8 items-start text-left bg-red-300 w-[250px] h-[650px] text-xl">
                            <li className="flex flex-col items-center cursor-pointer text-gray-500 font-semibold justify-between transition-all ease-in-out duration-300 relative dark:text-white">
                            <Menu>
                                {({open}) => (
                                <>
                                    <Switch checked={enabled} onChange={setEnabled} className={`${enabled ? 'text-yellow-400' : 'text-white'} flex items-center justify-center gap-4`}>
                                    Features <Icon icon="akar-icons:chevron-down"  className={`${enabled ? 'rotate-180' : 'rotate-0'} transition-all duration-150 ease-in-out`}/>
                                    </Switch>
                                    {enabled && (
                                    <>
                                        <Menu.Items static 
                                        className="flex flex-col justify-center text-black h-[13rem] focus:outline-none w-44 mt-2 ml-20 dark:text-white"
                                        as={motion.div}
                                        initial={{ y: 100}}
                                        animate={{ y: 0}}
                                        transition={spring}
                                        
                                        >
                                        <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                            {({ active }) => (
                                                <MyLink href="#"
                                                className={`${
                                                    active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-te'
                                                } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                >
                                                <Icon icon="uil:clipboard-notes" /> Features
                                                </MyLink>
                                            )}
                                        </Menu.Item>
                                        
                                        <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                            {({ active }) => (
                                                <MyLink href="#"
                                                className={`${
                                                    active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-te'
                                                } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                >
                                                <Icon icon="uil:calendar-alt" /> Calendar
                                                </MyLink>
                                            )}
                                        </Menu.Item>
                                        
                                        <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                            {({ active }) => (
                                                <MyLink href="#"
                                                className={`${
                                                    active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                >
                                                <Icon icon="uil:lightbulb-alt" /> Reminders
                                                </MyLink>
                                            )}
                                        </Menu.Item>
                                        
                                        <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                            {({ active }) => (
                                                <MyLink href="#"
                                                className={`${
                                                    active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-te'
                                                } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
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


                            <li className="flex flex-col cursor-pointer text-gray-500 font-semibold justify-between  transition-all ease-in-out duration-300 relative dark:text-white">
                            <Menu>
                                {({open}) => (
                                    <>
                                    <Switch checked={enabledTwo} onChange={setEnabledTwo} className={`${enabledTwo ? 'text-purple-400' : 'text-white'} flex items-center justify-center gap-4`}>
                                        Company <Icon icon="akar-icons:chevron-down"  className={`${enabledTwo ? 'rotate-180' : 'rotate-0'} transition-all duration-150 ease-in-out`}/>
                                    </Switch>
                                    {enabledTwo && (
                                        <>
                                        <Menu.Items static 
                                            className="flex flex-col justify-center bg-fuchsia-200 text-black h-[10rem] mt-2 ml-20 focus:outline-none w-44 top-12 dark:text-white"
                                            as={motion.div}
                                            initial={{ y: 100}}
                                            animate={{ y: 0}}
                                            transition={spring}
                                            
                                        >
                                            <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                                {({ active }) => (
                                                <MyLink href="#"
                                                    className={`${
                                                    active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                    } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                >
                                                    History
                                                </MyLink>
                                                )}
                                            </Menu.Item>
                                            
                                            <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                                {({ active }) => (
                                                <MyLink href="#"
                                                    className={`${
                                                    active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                    } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                >
                                                    Our Team
                                                </MyLink>
                                                )}
                                            </Menu.Item>
                                            
                                            <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                                {({ active }) => (
                                                <MyLink href="#"
                                                    className={`${
                                                    active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                    } whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
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