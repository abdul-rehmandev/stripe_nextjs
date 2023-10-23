import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen flex-col'>
            <h1 className='text-4xl font-extrabold'>Something Went Wrong</h1>
            <img width="240" height="240" src="https://img.icons8.com/office/240/cancel.png" alt="cancel" />
            <Link href="/" className='mt-2 border p-2 hover:bg-gray-50'>Back to home</Link>
        </div>
    )
}

export default page