import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Info = () => {
    return (
        <>
            {' '}
            <div className="flex flex-row w-screen justify-between font-bold mt-[19px]">
                <div>
                    <Link href={'/'}>
                        <button className="text-[#544C4C] button bar1 ml-[15px] text-[35px]">
                            MÁRMO
                        </button>
                    </Link>
                </div>
                <div className="flex flex-row text-[#949597] mr-[15px] text-[30px] bar2 justify-center mt-[5px] gap-8">
                    <Link href={'/brand'}>
                        <button className="button">BRAND</button>
                    </Link>
                    <Link href={'items'}>
                        <button className="button">ITEMS</button>
                    </Link>
                    <Link href={'/info'}>
                        <button className="button">INFO</button>
                    </Link>
                </div>
            </div>
            <div className="w-screen h-[3px] mt-[15px] justify-self-center bg-gray-600"></div>
            <div className="flex flex-row w-max-screen h-max-screen">
                <div className="flex flex-col items-center m-10 w-1/2 h-[600px] relative">
                    {' '}
                    <Image
                        src="/assets/images/gray.png"
                        fill
                        alt="items"
                        className="object-fill rounded-2xl"
                    />
                </div>
                <div className="flex flex-col w-1/2 mt-10 h-[600px] items-center gap-[30px]">
                    <div className="profile rounded-2xl w-[600px] border-[1px] border-black border-solid h-[180px]"></div>
                    <div className="profile rounded-2xl w-[600px] border-[1px] border-black border-solid h-[180px]"></div>
                    <div className="profile rounded-2xl w-[600px] border-[1px] border-black border-solid h-[180px]"></div>
                </div>
            </div>
        </>
    )
}

export default Info
