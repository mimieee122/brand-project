import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Items = () => {
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
                    <Link href={'/items'}>
                        <button className="button">ITEMS</button>
                    </Link>
                    <Link href={'/info'}>
                        <button className="button">INFO</button>
                    </Link>
                </div>
            </div>
            <div className="w-screen h-[1.5px] mt-[15px] justify-self-center bg-gray-600"></div>
            <div className="flex flex-row mt-[35px] justify-center gap-[30px]">
                <div className="item relative flex mt-[25px] ml-[10px]  w-[550px] h-[500px] flex-col justify-center items-center group">
                    <Image
                        src="/assets/images/guatemala.png"
                        fill // 부모 요소에 가득 차게 함
                        alt="제품 사진"
                        className="object-fill"
                    />
                </div>
                <Link href={'/details'}>
                    <div className=" relative flex mt-[165px]  w-[230px] h-[450px] flex-col justify-center items-center group">
                        <div className="absolute flex flex-col items-center gap-[0px] leading-none top-25 click text-[#56bdb8] text-[85px] z-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[20px] transition-all duration-500">
                            <span>CLICK</span>
                            <span className="text-[36px] small text-[#56bdb8]">
                                for more detail!
                            </span>
                        </div>
                        <Image
                            src="/assets/images/items.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="제품 사진"
                            className="object-fill transition-transform duration-300 group-hover:scale-110 group-hover:opacity-60"
                        />
                    </div>
                </Link>
                <div className="item relative flex mt-[25px]  w-[550px] h-[500px] flex-col justify-center items-center group ">
                    <Image
                        src="/assets/images/ethiopia.png"
                        fill // 부모 요소에 가득 차게 함
                        alt="제품 사진"
                        className="object-fill"
                    />
                </div>
            </div>
        </>
    )
}

export default Items
