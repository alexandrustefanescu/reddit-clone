import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
  PhoneIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()

  return (
    <div className='flex bg-white px-4 py-2 shadow-sm sticky top-0'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        {/* <Image
          objectFit='contain'
          src='https://links.papareact.com/23l'
          layout='fill'
          alt='LOGO'
        /> */}
      </div>

      <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5' />
        <p></p>
      </div>

      {/* Search Input */}
      <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
        <input
          type='text'
          placeholder='Search...'
          className='flex-1 bg-transparent outline-none'
        />
        <button
          type='submit'
          hidden
        ></button>
      </form>

      <div className='flex text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex'>
        <SparklesIcon className='icon' />
        <GlobeAltIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChatBubbleOvalLeftEllipsisIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <PhoneIcon className='icon' />
      </div>

      <div className='ml-5 flex items-center lg:hidden '>
        <Bars3Icon className='icon' />
      </div>

      {/* Authentification button */}

      {session ? (
        <div
          onClick={() => signOut()}
          className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2'
        >
          <div className='relative h-5 w-5 flex-shrink-0'>
            {/* <Image
            objectFit='contain'
            src='links.papareact.com/23l'
            layout='fill'
            alt='Image'
            /> */}
          </div>
          <div className='flex-1 text-xs'>
            <p>{session.user?.name}</p>
            <p className='text-gray-400'>1 Karma</p>
          </div>

          <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2'
        >
          <div className='relative h-5 w-5 flex-shrink-0'>
            {/* <Image
            objectFit='contain'
            src='links.papareact.com/23l'
            layout='fill'
            alt='Image'
            /> */}
          </div>

          <p className='text-gray-400'>Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header
