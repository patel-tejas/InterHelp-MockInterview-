import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    return (
        <header className="bg-slate-100 shadow-sm ">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <Link href={"/"} className='text-blue-500 font-bold text-xl'>InterHelp</Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-lg">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/dashboard"> Dashboard </Link>
                                </li>


                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/dashboard/resume"> Resume Checker </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> How it Works ? </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div className='sm:hidden flex items-center'>
                        <Sheet>
                            <SheetTrigger>
                                <div className='flex flex-col gap-1'>

                                    <div className='bg-black h-[2px] w-5 rounded-full'></div>
                                    <div className='bg-black h-[2px] w-5 rounded-full'></div>
                                    <div className='bg-black h-[2px] w-5 rounded-full'></div>
                                </div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className='text-left font-bold text-xl text-blue-500'>Interhelp</SheetTitle>
                                    <SheetDescription>
                                        <div className='flex flex-col gap-3 items-start justify-start mt-10'>
                                            <SheetClose asChild>
                                                <Link href={"/dashboard/resume"} className='text-gray-800 text-lg hover:text-blue-500 hover:font-semibold duration-200' > - Resume Checker</Link>
                                            </SheetClose>

                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 ">
                        <UserButton afterSignOutUrl='/' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header