import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Details = () => {
    const nameVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, delay: 0.5 },
        },
    }
    return (
        <>
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
            <div className="w-screen h-[2px] mt-[15px] justify-self-center bg-gray-600"></div>
            <div className="flex flex-col items-center gap-[10px] mt-[20px]">
                <div className=" relative flex flex-col gap-0 items-center w-[410px] h-[300px]">
                    <Image
                        src="/assets/images/marimo.png"
                        fill // 부모 요소에 가득 차게 함
                        alt="회색 이미지"
                        className="object-fill "
                    />
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={nameVariants}
                    className="flex flex-col items-center mt-[40px] justify-center brandExplain text-[24px] text-black"
                >
                    <span className="text-[#9c753a]">
                        원액은 1회분(50ml) 개별 포장되며, 물(200ml)과 약 1:4
                        비율로 섞으면 됩니다.
                    </span>
                    <div className="flex flex-col items-center text-[black] mt-[40px] mb-[40px] gap-[5px]">
                        <span>
                            마르모는 전문점 수준의 드립커피를 세상에서 가장
                            간편하게 경험할 수 있는 기회를
                        </span>
                        <span>여러분들께 제공합니다.</span>
                        <span>
                            언제 어디서든, 최상의 바리스타가 내린 드립커피를
                            즐기십시오.
                        </span>
                    </div>
                </motion.div>
                <div className="w-screen h-[2px] mt-[5px] justify-self-center bg-gray-600"></div>
                <Link href={'/items'}>
                    <div className="relative flex flex-col gap-0 justify-start items-start w-[50px] h-[50px]">
                        <Image
                            src="/assets/images/arrow.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Details
