import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen flex-col'>
            <h1 className='text-4xl font-extrabold'>Order Placed Successfully</h1>
            <img width="240" height="240" src="https://img.icons8.com/color/240/checked--v1.png" alt="checked--v1" />
            <Link href="/" className='mt-2 border p-2 hover:bg-gray-50'>Back to home</Link>
        </div>
    )
}

export default page