import React from 'react';
import Link from 'next/link';

const Feature2 = () => {
    return (
        <>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section>
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Ace Your Interviews with InterHelp</h2>

                            <p className="mt-4 text-gray-600">
                                Get the ultimate interview preparation experience. From tailored resume feedback to realistic mock interviews,
                                InterHelp is your go-to platform for mastering the art of job hunting.
                            </p>

                            <Link href="/dashboard">
                                <button className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                    Get Started Today!
                                </button>
                            </Link>
                        </div>


                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Personalized Feedback</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Receive detailed feedback on interview answers to understand areas of improvement.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Mock Interviews</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Simulate real interview scenarios with time-bound questions and answers.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Video Interview Practice</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Practice answering questions in a video format to prepare for virtual interviews.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Resume Optimization</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Improve your resume with actionable suggestions to enhance its effectiveness.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Industry Insights</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Gain insights into industry trends and expectations to align your preparation.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">ATS Compatibility</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Ensure your resume is optimized for Applicant Tracking Systems to get noticed.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature2;
