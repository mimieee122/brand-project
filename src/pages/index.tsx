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
            transition: { duration: 1, delay: 1 },
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
        <>
            <nav className="flex flex-row justify-between  font-bold mt-[29px] ml-[50px] mr-[50px]">
                <button className="text-[#544C4C] bar1 text-[100px]">
                    MÁRMO
                </button>
                <div className="flex flex-row mr-[50px] text-[#949597] text-[90px] bar2 justify-center mt-[40px] gap-40">
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

            <div className="flex flex-row w-screen justify-between align-center">
                <div className=" mt-10 ml-[50px] flex flex-col items-start justify-center ">
                    <div className=" relative flex mb-[100px] flex-col gap-0 items-start w-[1600px] h-[900px]">
                        <Image
                            src="/assets/images/gray.png"
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
                            className="flex flex-col gap-[50px]  text-left text-[320px]"
                        >
                            <span className="name1 text-[#544C4C]  text-[120px]">
                                THE PROJECT :{' '}
                            </span>
                            <div className="flex flex-col name2 leading-none gap-[0px] text-[#544C4C] ">
                                <span className="p-0">MARMO</span>
                                <span className="p-0 mt-0">COFFEE</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-row justify-center mb-8 mt-[40px] mr-[50px] items-center gap-10 ">
                    <div className="white shadow-2xl w-[800px] flex-1 h-[1850px] border-[1px] border-black border-solid rounded-3xl"></div>
                    <div className="white shadow-2xl w-[800px] flex-1 h-[1850px] border-[1px] border-black border-solid rounded-3xl"></div>
                    <div className="white shadow-2xl w-[800px] flex-1 h-[1850px] border-[1px] border-black border-solid rounded-3xl"></div>
                </div>
            </div>
        </>
    )
}

export default Home
