import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Details = () => {
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
            <div className="w-screen h-[3px] mt-[15px] justify-self-center bg-[#6b8e6d]"></div>

            <div className="flex flex-col items-center gap-[10px] mt-[20px]">
                <div className="flex flex-row w-max-screen justify-between gap-[100px] ml-[140px]">
                    <div className="flex flex-col shadow-2xl rounded-2xl mt-[5px] w-[850px] h-[580px] border-[#544c4c] border-[3px] border-solid items-center">
                        <div className="flex flex-row justify-center mt-[5px] relative gap-[30px]">
                            <div className="relative flex flex-col  w-[150px] h-[280px] items-center">
                                <Image
                                    src="/assets/images/option.png"
                                    fill
                                    alt="items"
                                    className="object-fill"
                                />
                            </div>
                            <div className=" relative  flex flex-col gap-0 items-center w-[400px] h-[280px]">
                                <Image
                                    src="/assets/images/marimo.png"
                                    fill // 부모 요소에 가득 차게 함
                                    alt="회색 이미지"
                                    className="object-fill "
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-[5px] justify-center brandExplain text-[24px] text-black">
                            <span className="name2 mb-[2px] text-[55px] text-[#544c4c] underline">
                                DETAILS
                            </span>
                            <span className="text-[#6b8e6d]">
                                원액은 1회분(50ml) 개별 포장되며, 물(200ml)과 약
                                1:4 비율로 섞으면 됩니다.
                            </span>
                            <div className="flex box flex-col items-center shadow-2xl pt-[10px] w-[800px] h-[140px] rounded-2xl pl-3 pr-3 border-[1.5px] border-solid border-[#949597] text-[black] mt-[13px] mb-[5px] gap-[5px]">
                                <span>
                                    마르모는 여러분께 전문점 수준의 드립커피를
                                    세상에서 가장
                                </span>
                                <span>
                                    간편하게 경험할 수 있는 기회를 제공합니다.
                                </span>
                                <span>
                                    언제 어디서든, 최상의 바리스타가 내린
                                    드립커피를 즐겨보세요.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-0 mr-0 pr-0 w-[330px] h-[580px]">
                        <Image
                            src="/assets/images/drink.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                </div>

                <div className="w-screen h-[3px] mt-[10px] justify-self-center bg-[#6b8e6d]"></div>
                <Link href={'/items'}>
                    <div className="relative flex flex-col gap-0 justify-start items-start w-[60px] h-[45px]">
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
