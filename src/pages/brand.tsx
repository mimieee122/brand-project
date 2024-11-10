import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Brand = () => {
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
                    <Link href={'items'}>
                        <button className="button">ITEMS</button>
                    </Link>
                    <Link href={'/info'}>
                        <button className="button">INFO</button>
                    </Link>
                </div>
            </div>
            <div className="w-screen h-[3px] mt-[15px] justify-self-center bg-gray-600"></div>

            <div className="mt-[20px]">
                <div className="flex flex-row justify-start ml-[15px]  gap-[30px]">
                    <div className=" relative flex flex-col gap-0 items-start w-[1000px] h-[250px]">
                        <Image
                            src="/assets/images/coffee.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                    <div className="flex flex-col items-end mt-[115px] gap-[5px] mr-[15px]  text-left text-[90px]">
                        <span className="name1  text-[#6b8e6d]  text-[30px]">
                            THE PROJECT :{' '}
                        </span>
                        <div className="flex flex-col name2 leading-none gap-[0px] text-[#544C4C] ">
                            <span className="p-0">MARMO</span>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={nameVariants}
                    className="flex flex-col items-center mt-[50px] justify-center brandExplain text-[28px] text-black"
                >
                    <span>
                        MÁRMO는 커피의 예술성과 품격을 일상 속에서 누구나 쉽게
                        경험할 수 있도록 탄생한 브랜드입니다.
                    </span>
                    <div className="flex flex-col items-center text-[black] mt-[40px] mb-[40px] gap-[5px]">
                        <span>
                            대리석의 고귀한 이미지에서 영감을 받은 MÁRMO는,{' '}
                        </span>
                        <span>
                            복잡한 도구 없이도 고품질의 드립 커피를 즐길 수
                            있도록 설계되어{' '}
                        </span>
                        <span>
                            바쁜 현대인들에게 일상 속 최적화된 커피 경험을
                            제공합니다.{' '}
                        </span>
                    </div>
                    <span className="text-[#836d4c]">
                        대리석처럼 영구적이며 변치 않는 가치를 담아, 당신의 일상
                        속 눈부신 순간을 선사하겠습니다.
                    </span>
                </motion.div>
                <div className="w-screen h-[3px] mt-[35px] justify-self-center bg-gray-600"></div>
            </div>
        </>
    )
}

export default Brand
