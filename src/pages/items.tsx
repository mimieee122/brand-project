import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Items = () => {
    return (
        <>
            {' '}
            <nav className="flex flex-row justify-between  h-[60px] items-center  ">
                {/* <Link href={'/'}>
                        <button className="text-[#544C4C] button bar1 text-[35px]">
                            MÁRMO
                        </button>
                    </Link> */}
                <Link href={'/'}>
                    <div className="flex  pl-[80px] h-[28px]">
                        <Image
                            src="/assets/images/fl.svg"
                            width={78} // 원하는 비율로 width 지정
                            height={28} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        />
                    </div>
                </Link>

                <div className="flex flex-row  text-[#2C2E35] pr-[80px]  text-[24px] bar2 gap-[80px]">
                    <Link href={'/brand'}>
                        <button className="button">ABOUT</button>
                    </Link>
                    <Link href={'items'}>
                        <button className="button">PRODUCTS</button>
                    </Link>
                    <Link href={'/info'}>
                        <button className="button ">CONTACT</button>
                    </Link>
                </div>
            </nav>
            <div className="w-full h-[731px] mb-[100px]">
                {' '}
                <Image
                    src="/assets/images/1.svg"
                    width={1415} // 원하는 비율로 width 지정
                    height={731} // height도 지정하여 비율을 맞추기
                    alt="로고 사진"
                    className="object-cover w-full h-full"
                />
            </div>
            {/* <div className="w-screen h-[1.5px] mt-[15px] justify-self-center bg-gray-600"></div>
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
            </div> */}
        </>
    )
}

export default Items
