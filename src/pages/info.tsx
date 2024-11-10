import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Info = () => {
    const nameVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.5 },
        },
    }
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
            <div className="w-screen h-[1.5px] mt-[15px] justify-self-center bg-gray-600"></div>
            <div className="flex flex-row w-max-screen h-max-screen justify-between">
                <div className="  flex flex-col mt-8 ml-5  items-start justify-start ">
                    <div className=" relative flex mb-[20px] flex-col gap-0 items-start w-[600px] h-[350px]">
                        <Image
                            src="/assets/images/coffee.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                    <div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={nameVariants}
                            className="flex flex-col gap-[10px]  text-left text-[90px]"
                        >
                            <span className="name1  text-[#544C4C]  text-[35px]">
                                THE PROJECT :{' '}
                            </span>
                            <div className="flex flex-col name2 leading-none gap-[0px] text-[#544C4C] ">
                                <span className="p-0">MARMO</span>
                                <span className="p-0 mt-0">COFFEE</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 mt-10 mr-10 h-[600px] gap-[30px] items-center">
                    <div
                        className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]
                        
                    flex flex-col"
                    >
                        <div className="infos text-[35px] w-[650px] h-[100px] m-5 border-black  border-solid border-[0px] rounded-2xl flex flex-col items-center justify-center">
                            <span>MARMO</span>
                            <span>대표 김진표</span>
                        </div>
                        <div className=" w-[200px] h-[10px] flex flex-col relative text-[75px] text-[white] text-start">
                            <span className="absolute z-10 mt-[-30px]">
                                PROFILE
                            </span>
                        </div>
                    </div>
                    <div
                        className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]
                        
                    flex flex-col"
                    >
                        <div className="infos text-[35px] w-[650px] h-[100px] m-5 border-black  border-solid border-[0px] rounded-2xl flex flex-col items-center justify-center">
                            <span>대구광역시 중구 서성로4 1층 수페르바</span>
                        </div>{' '}
                        <div className=" w-[200px] h-[10px] flex flex-col relative text-[75px] text-[white] text-start">
                            <span className="absolute z-10 mt-[-30px]">
                                LOCATION
                            </span>
                        </div>
                    </div>
                    <div
                        className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]
                        
                    flex flex-col"
                    >
                        <div className="infos text-[35px] w-[650px] h-[100px] m-5 border-black  border-solid border-[0px] rounded-2xl flex flex-col items-center justify-center">
                            <span>Superba1294@naver.com</span>
                            <span>010-6861-1294</span>
                        </div>{' '}
                        <div className=" w-[200px] h-[10px] flex flex-col relative text-[75px] text-[white] text-start">
                            <span className="absolute z-10 mt-[-30px]">
                                CONTACT
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info
