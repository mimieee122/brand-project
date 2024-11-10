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
            <div className="w-screen h-[3px] mt-[15px] justify-self-center bg-gray-600"></div>
            <div className="flex flex-row w-max-screen h-max-screen justify-between">
                <div className="  flex flex-col mt-8 ml-5  items-start justify-start ">
                    <div className=" relative flex mb-[20px] flex-col gap-0 items-start w-[500px] h-[350px]">
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
                <div className="flex flex-col w-1/2 mt-10 mr-10 h-[600px] items-center gap-[30px]">
                    <div className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]"></div>
                    <div className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]"></div>
                    <div className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]"></div>
                </div>
            </div>
        </>
    )
}

export default Info
