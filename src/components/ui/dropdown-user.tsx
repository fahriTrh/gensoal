import { Button } from "@/components/ui/button"
import { User } from 'lucide-react';
import { LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu" 

export default function DropdownUser() {
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
            <DropdownMenuContent>
                <DropdownMenuItem>
                    user@gmail.com
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer">
                    Logout <LogOut />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}