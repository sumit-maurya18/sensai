import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu';

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">

      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="SensAI Logo" width={200} height={60} className="h-12 py-1 w-auto object-contain" />
        </Link>

        <div className='flex items-center space-x-2 md:space-x-4'>

          {/* {"Side links which expands on clicking when user is signed in"} */}
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant='outline'>
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'>Industry Insights</span>
              </Button>
            </Link>


            <DropdownMenu>

              {/* {"side bar which opens as drop down"} */}

              {/* {"Main drop down button which contains options"} */}

              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className='h-4 w-4' />
                  <span className='hidden md:block'>Growth Tools</span>
                  <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>

                {/* {"resume button"} */}

                <DropdownMenuItem>
                  <Link href={"/resume"} className='flex items-center gap-2'>
                    <FileText className='h-4 w-4' />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>

                {/* {"cover letter button"} */}

                <DropdownMenuItem>
                  <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                    <PenBox className='h-4 w-4' />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>

                {/* {"interview prep button button"} */}

                <DropdownMenuItem>
                  <Link href={"/interview-page"} className='flex items-center gap-2'>
                    <GraduationCap className='h-4 w-4' />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>

          </SignedIn>

          {/* {"sign in button when user is logged out which appear at the top left in the nav bar"} */}

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{
              elements: {
                avatarBox: 'w-10 h-10',
                userButtonPopoverCard: 'shadow-xl',
                userPreviewMainIdentifier: 'font-semibold'
              }
            }}
              afterSignOutUrl='/'
            />
          </SignedIn>

        </div>
      </nav>


    </header>
  )
}

export default Header;