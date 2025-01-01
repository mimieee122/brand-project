import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
    const nameVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.5 },
        },
    }

    // const helloVariants = {
    //     hidden: { opacity: 0, y: 100 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: { duration: 2, delay: 2 },
    //     },
    // }

    return (
        <div className="flex flex-col w-screen h-screen overflow-hidden  justify-start items-start gap-[10px]">
            <nav className="flex flex-row w-screen justify-between  font-bold mt-[19px] ml-[20px]">
                <div>
                    {/* <Link href={'/'}>
                        <button className="text-[#544C4C] button bar1 text-[35px]">
                            MÁRMO
                        </button>
                    </Link> */}
                </div>
                <div className="flex flex-row justify-end text-[#949597] text-[30px] bar2 gap-8 mr-[50px]">
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
            </nav>

            <div className="flex flex-row w-screen h-screen justify-between gap-[50px] align-start">
                <div className="  flex flex-col ml-[15px] items-start justify-start ">
                    <div className=" relative flex mb-[20px] flex-col gap-0 items-start w-[520px] h-[220px]">
                        <Image
                            src="/assets/images/photos.svg"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                    <div className="flex flex-row w-full justify-center items-center">
                        <div className="flex w-[200px] h-[200px]">
                            <Image
                                src="/assets/images/로고.svg"
                                width={500} // 원하는 비율로 width 지정
                                height={500} // height도 지정하여 비율을 맞추기
                                alt="로고 사진"
                                className="object-fill w-full h-full"
                            />
                            {/* <span className="name1  text-[#544C4C]  text-[35px]">
                                THE PROJECT :{' '}
                            </span>
                            <div className="flex flex-col name2 leading-none gap-[0px] text-[#544C4C] ">
                                <span className="p-0">MARMO</span>
                                <span className="p-0 mt-0">COFFEE</span>
                            </div> */}
                        </div>
                    </div>
                    <div className=" relative flex mb-[20px] flex-col gap-0 items-start w-[520px] h-[220px]">
                        <Image
                            src="/assets/images/photos.svg"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                </div>

                <div className="flex flex-row  justify-end items-center w-full h-full mr-[30px]  gap-4">
                    <div className="w-[200px] h-[650px] mb-[40px]">
                        <Link href={'/brand'}>
                            <div className="white shadow-2xl flex flex-col w-[200px] h-[650px] border-[0px] border-black border-solid">
                                {/* <div className="rotate rotate-[-90deg] pt-16 mb-[60px] text-[120px] w-[200px] h-[100px] flex items-start justify-start text-white transform origin-left-bottom">
                                    <span>BRAND</span>
                                </div> */}
                            </div>
                        </Link>
                    </div>

                    <div className="w-[200px] h-[650px] mb-[40px]">
                        <Link href={'/items'}>
                            <div className="white group relative shadow-2xl flex justify-center items-center w-full h-full border-[0px] border-black border-solid ">
                                {/* <div className="relative flex w-full h-full flex-col justify-center items-center">
                                    <Image
                                        src="/assets/images/items.png"
                                        layout="intrinsic" // 여기에 'intrinsic' 또는 'responsive'로 변경
                                        width={200} // 원하는 비율로 width 지정
                                        height={100} // height도 지정하여 비율을 맞추기
                                        alt="제품 사진"
                                        className="object-fill w-full h-full pr-6 pl-6 pt-20 pb-16 group-hover:scale-110"
                                    />
                                </div> */}
                            </div>
                        </Link>
                    </div>

                    <div className="w-[200px] h-[650px] mb-[40px]">
                        <Link href={'/info'}>
                            <div className="white shadow-2xl flex flex-col justify-end w-full h-full border-[0px] border-black border-solid ">
                                {/* <div className="rotate rotate-[-90deg] pt-16  mb-[60px] text-[120px] w-[200px] h-[100px] flex items-start justify-start text-start text-white transform origin-left-bottom">
                                    <span>INFO.</span>
                                </div> */}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
