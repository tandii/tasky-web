import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Gear, House, MagnifyingGlass, SignOut, User } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
    const { user, signOut } = useContext(AuthGoogleContext)

    return (
        <nav className="h-14 w-screen px-16 bg-green-700 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link to='/home'>
                    <House width={30} height={30} />
                </Link>
                <div className="flex bg-green-400 items-center gap-3 rounded pl-3">
                    <MagnifyingGlass width={20} height={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-44 h-8 rounded bg-green-400 focus:outline-none placeholder:text-gray-700 text-gray-700 font-medium"
                    />
                </div>
            </div>


            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="focus:outline-none" asChild>
                    <div className="h-8 pl-3 pr-6 bg-green-400 flex items-center gap-3 rounded cursor-pointer">
                        <User width={20} height={20} />
                        <span className="font-medium ">
                            {JSON.parse(user).name}
                        </span>
                    </div>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content className="w-44 h-28 bg-white flex flex-col gap-2 px-3 py-2 border-[1px] border-solid border-green-400 rounded drop-shadow-lg" sideOffset={4}>
                        <DropdownMenu.Item
                            className="focus:outline-none flex items-center gap-2"
                        >
                            <Gear width={16} height={16} />
                            <span className="text-sm">
                                Settings
                            </span>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            className="focus:outline-none flex items-center gap-2 cursor-pointer"
                            onClick={() => signOut()}
                        >
                            <SignOut width={16} height={16} />
                            <span className="text-sm">
                                Sign out
                            </span>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </nav>
    )
}