'use client'
import { Button } from "@/components/ui/button"
import { User } from 'lucide-react';
import { LogOut, LogIn } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";


export default function DropdownUser() {

    const { data: session } = useSession()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="hover:cursor-pointer"
                    variant='outline'
                    size='icon'>
                    <User />
                </Button>
            </DropdownMenuTrigger>
            {
                session ? (
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            {session.user?.email}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => signOut()} className="hover:cursor-pointer">
                            Logout <LogOut />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                ) : (
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => signIn()} className="hover:cursor-pointer">
                            Login <LogIn />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                )
            }
        </DropdownMenu>
    )
}