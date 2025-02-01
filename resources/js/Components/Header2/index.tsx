import { Fragment, useEffect, useState } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import { Link, usePage } from "@inertiajs/react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

type Header2Props = {
    user: any;
};

const Header2 = ({ user }: Header2Props) => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);

    const { pathUrl } = usePage().props;

    // Sticky menu
    const handleStickyMenu = () => {
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyMenu);
    });

    return (
        <header
            className={`fixed left-0 top-0 z-99999 w-full py-7 ${
                stickyMenu
                    ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
                    : ""
            }`}
        >
            <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
                <div className="flex w-full items-center justify-between xl:w-1/4">
                    <a href="/">
                        <img
                            src="/images/logo/2.svg"
                            alt="logo"
                            width={119.03}
                            height={30}
                            className="hidden w-full dark:block"
                        />
                        <img
                            src="/images/logo/1.svg"
                            alt="logo"
                            width={119.03}
                            height={30}
                            className="w-full dark:hidden"
                        />
                    </a>

                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-label="hamburger Toggler"
                        className="block xl:hidden"
                        onClick={() => setNavigationOpen(!navigationOpen)}
                    >
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                            <span className="absolute right-0 block h-full w-full">
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? "!w-full delay-300"
                                            : "w-0"
                                    }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? "delay-400 !w-full"
                                            : "w-0"
                                    }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? "!w-full delay-500"
                                            : "w-0"
                                    }`}
                                ></span>
                            </span>
                            <span className="du-block absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? "!h-0 delay-[0]"
                                            : "h-full"
                                    }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? "!h-0 delay-200"
                                            : "h-0.5"
                                    }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}
                </div>

                {/* Nav Menu Start   */}
                <div
                    className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
                        navigationOpen &&
                        "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
                    }`}
                >
                    <nav>
                        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                            {menuData.map((menuItem, key) => (
                                <li
                                    key={key}
                                    className={
                                        menuItem.submenu && "group relative"
                                    }
                                >
                                    {menuItem.submenu ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setDropdownToggler(
                                                        !dropdownToggler
                                                    )
                                                }
                                                className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                                            >
                                                {menuItem.title}
                                                <span>
                                                    <svg
                                                        className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </span>
                                            </button>

                                            <ul
                                                className={`dropdown ${
                                                    dropdownToggler
                                                        ? "flex"
                                                        : ""
                                                }`}
                                            >
                                                {menuItem.submenu.map(
                                                    (item, key) => (
                                                        <li
                                                            key={key}
                                                            className="hover:text-primary"
                                                        >
                                                            <Link
                                                                href={
                                                                    item.path ||
                                                                    "#"
                                                                }
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            href={`${menuItem.path}`}
                                            className={
                                                pathUrl === menuItem.path
                                                    ? "text-primary hover:text-red-500"
                                                    : "hover:text-red-500"
                                            }
                                        >
                                            {menuItem.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-7 flex items-center gap-6 xl:mt-0">
                        <ThemeToggler />

                        {user ? (
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <div>
                                    <Menu.Button className="flex items-center gap-2 rounded-full bg-red-700 px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-red-600">
                                        <UserCircleIcon className="h-6 w-6" />
                                        <span>{user.name}</span>
                                        <ChevronDownIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="/my-booking"
                                                        className={`${
                                                            active
                                                                ? "bg-red-500 text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                    >
                                                        My Booking
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        href="/pembayaran"
                                                        className={`${
                                                            active
                                                                ? "bg-red-500 text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                    >
                                                        Pembayaran
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        method="post"
                                                        href={route("logout")}
                                                        as="button"
                                                        className={`${
                                                            active
                                                                ? "bg-red-500 text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                                                    >
                                                        Logout
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="flex items-center justify-center rounded-full bg-red-700 px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-red-600"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex items-center justify-center rounded-full bg-red-700 px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-red-600"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

// w-full delay-300

export default Header2;
