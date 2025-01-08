import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Brand = () => {
    // const nameVariants = {
    //     hidden: { opacity: 0, y: -100 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: { duration: 2, delay: 0.5 },
    //     },
    // }
    return (
        <div className="flex flex-col">
            <nav className="flex flex-row  justify-between  h-[60px] items-center  ">
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
            <div className="w-full h-[870px]">
                {' '}
                <Image
                    src="/assets/images/brand.svg"
                    width={1422} // 원하는 비율로 width 지정
                    height={870} // height도 지정하여 비율을 맞추기
                    alt="로고 사진"
                    className="object-fill w-full h-full"
                />
            </div>
            <div className="mt-[120px] flex flex-col items-center justify-center">
                <p className="text-[40px] mb-[20px] leading-[1] thick font-extrabold">
                    BRAND VISION
                </p>
                <div className=" mr-[80px] ml-[80px] min-w-[1257px] h-[4px] bg-[#DEDEDE]"></div>
                <div className="mt-[30px] mb-[30px] flex flex-col justify-center items-center">
                    <p className="leading-[1] text-[24px]">
                        마르모는 누구나 간편하게 고품질 커피를 즐길 수 있는
                        세상을 꿈꾸며,
                    </p>
                    <p className="leading-[1] pt-[8px] text-[24px]">
                        세 가지 철학을 실천합니다.
                    </p>
                </div>
                <div className=" mr-[80px] mb-[20px] ml-[80px] min-w-[1257px] h-[4px] bg-[#DEDEDE]"></div>
            </div>
            <div
                className=" mr-[80px] mb-[80px] ml-[80px] min-w-[1257px] h-[325px]
            flex flex-row justify-center gap-[73px]"
            >
                <div
                    className="flex-1 w-full rounded-xl border-b-white border-b-[4px] shadow-xl shadow-[#878787]  h-[325px] bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className="h-[183px]">
                        <Image
                            src="/assets/images/Vector.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        ></Image>
                    </div>
                    <div className="flex flex-row w-[250px] justify-center gap-[8px]">
                        <p className="text-[26px] text-white font-bold">
                            INNOVATION
                        </p>
                        <p className="text-[19px] pt-[4px] text-[#ABABAB]">
                            혁신
                        </p>
                    </div>
                    <div className=" mt-[12px] font-medium text-[16px] w-[240px] h-[50px] rounded-lg bg-[#F0F0F0] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1]">커피 본연의 맛을 살리는</p>
                        <p className="leading-[1] mt-[2px]">급속 냉각 기술</p>
                    </div>
                </div>
                <div
                    className="flex-1 w-full rounded-xl border-b-white border-b-[4px] shadow-xl shadow-[#878787]  h-[325px] bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className="h-[183px]">
                        <Image
                            src="/assets/images/chain.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        ></Image>
                    </div>
                    <div className="flex flex-row w-[250px] justify-center gap-[8px]">
                        <p className="text-[24px] text-white font-bold">
                            ACCESSCIBILITY
                        </p>
                        <p className="text-[19px] pt-[4px] text-[#ABABAB]">
                            접근성
                        </p>
                    </div>
                    <div className=" mt-[12px] font-medium text-[16px] w-[240px] h-[50px] rounded-lg bg-[#F0F0F0] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1]">언제 어디서나</p>
                        <p className="leading-[1] mt-[2px]">
                            간편하게 즐기는 드립커피
                        </p>
                    </div>
                </div>
                <div
                    className="flex-1 w-full rounded-xl border-b-white border-b-[4px] shadow-xl shadow-[#878787]  h-[325px] bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className="h-[183px]">
                        <Image
                            src="/assets/images/young.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        ></Image>
                    </div>
                    <div className="flex flex-row w-[250px] justify-center gap-[8px]">
                        <p className="text-[24px] text-white font-bold">
                            SUSTAINABILITY
                        </p>
                        <p className="text-[19px] pt-[4px] text-[#ABABAB]">
                            영속성
                        </p>
                    </div>
                    <div className=" mt-[12px] font-medium text-[16px] w-[240px] h-[50px] rounded-lg bg-[#F0F0F0] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1]">
                            대리석의 영구적 가치를 닮은
                        </p>
                        <p className="leading-[1] mt-[2px]">고급스러운 커피</p>
                    </div>
                </div>{' '}
            </div>

            {/* <div className="mt-[20px]">
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
                <div className=" h-[1.5px] mt-[35px] justify-self-center bg-gray-600"></div>
            </div> */}
        </div>
    )
}

export default Brand
