import Link from 'next/link'

export const Header = () => {
  return (
    <header className='bg-gray-200  py-4 text-black'>
      <div className='container mx-auto flex justify-between items-center px-6'>
        <h1 className='text-lg font-bold'>
          <Link href='/'>Welcome</Link>
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/' className='hover:text-gray-300'>
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
