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
        <>
            <nav className="flex flex-row justify-between  font-bold mt-[19px] ml-[15px] mr-[15px]">
                <Link href={'/'}>
                    <button className="text-[#544C4C] button bar1 text-[35px]">
                        MÁRMO
                    </button>
                </Link>
                <div className="flex flex-row text-[#949597] text-[30px] bar2 justify-center mt-[19px] gap-8">
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

            <div className="flex flex-row w-screen  justify-between gap-[50px] align-start">
                <div className="  flex flex-col ml-[15px] items-start justify-start ">
                    <div className=" relative flex mb-[20px] flex-col gap-0 items-start w-[500px] h-[350px]">
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
                            className="flex flex-col gap-[10px]  text-left text-[100px]"
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

                <div className="flex flex-row justify-center  mb-8 mt-[1px] mr-[50px] items-center gap-2 ">
                    <Link href={'/brand'}>
                        <div className="white shadow-2xl flex flex-col items-center justify-end w-[280px] flex-1  h-[650px] border-[2px] border-black border-solid rounded-2xl">
                            <div className="rotate-[-90deg] w-[200px] h-[100px] text-[100px] text-white transform origin-top-left text-end mb-[200px] ml-[180px]">
                                <span>BRAND</span>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/items'}>
                        <div className="white shadow-2xl w-[280px] flex-1 flex-row justify-center h-[650px] border-[2px] border-black border-solid rounded-2xl">
                            <div className=" relative flex mt-[225px] ml-[25px]  w-[230px] h-[450px] flex-col justify-center items-center ">
                                <Image
                                    src="/assets/images/items.png"
                                    fill // 부모 요소에 가득 차게 함
                                    alt="제품 사진"
                                    className="object-fill "
                                />
                            </div>
                        </div>
                    </Link>
                    <Link href={'/info'}>
                        <div className="white shadow-2xl flex flex-col items-center justify-end w-[280px] flex-1  h-[650px] border-[2px] border-black border-solid rounded-2xl">
                            <div className="rotate-[-90deg] w-[200px] h-[100px] text-[100px] text-white transform origin-top-left text-end mb-[200px] ml-[180px]">
                                <span>INFO.</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home
