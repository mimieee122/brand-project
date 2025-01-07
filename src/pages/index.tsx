import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
    // const nameVariants = {
    //     hidden: { opacity: 0, x: -100 },
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //         transition: { duration: 1, delay: 0.5 },
    //     },
    // }

    // const helloVariants = {
    //     hidden: { opacity: 0, y: 100 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: { duration: 2, delay: 2 },
    //     },
    // }

    return (
        <div>
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
            <div className="flex flex-col items-center  max-w-full overflow-y-auto ">
                <div className="w-full h-[400px]   flex flex-row items-center justify-between bg-[#DFE3E3]">
                    <div className="flex pl-[80px] h-[340px]">
                        <Image
                            src="/assets/images/B_logo.svg"
                            width={296.45} // 원하는 비율로 width 지정
                            height={340} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        />
                    </div>
                    <div className="flex w-[894px] h-[400px]">
                        <Image
                            src="/assets/images/cross.svg"
                            width={894} // 원하는 비율로 width 지정
                            height={400} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col  justify-center items-center mt-[16px] h-[260px] ">
                    <div className="flex flex-col items-center gap-[-8px] ">
                        <p className="text-[40px] font-extrabold leading-[1.2] ">
                            ABOUT
                        </p>
                        <p className="text-[28px] font-bold leading-[1.2] ">
                            THE BRAND
                        </p>
                    </div>
                    <div className="mt-[20px] mr-[80px] ml-[80px] min-w-[1257px] h-[4px] bg-[#DEDEDE]"></div>
                    <p className="mt-[20px] text-[#2C2E35] text-[24px] font-semibold">
                        마르모 커피는 프리미엄 드립커피를 누구나 일상에서 쉽게
                        경험할 수 있도록 탄생한, 혁신적인 커피 브랜드입니다
                    </p>
                    <div className="mt-[20px] mr-[80px] ml-[80px] min-w-[1257px] h-[4px] bg-[#DEDEDE]"></div>
                </div>
                <div className="mt-[20px] flex flex-row max-w-full justify-center items-center gap-[29px] ">
                    <div
                        className="w-[399px] h-[255px] border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
                flex flex-col"
                    >
                        <div className="flex flex-col items-center  gap-[17px]">
                            <div className="flex h-[48px]">
                                <Image
                                    src="/assets/images/cong.svg"
                                    width={41} // 원하는 비율로 width 지정
                                    height={48} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                />
                            </div>
                            <p className="text-[26px] font-semibold">
                                최상급 원두의 깊은 풍미
                            </p>
                            <div className="flex flex-col font-medium text-[19px] justify-center items-center gap-[-2px]">
                                <p>특허 출원 추출 기술과 엄선된 원두로</p>
                                <p>풍미를 완벽하게 보존</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[399px] h-[255px] border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
                flex flex-col"
                    >
                        <div className="flex flex-col items-center  gap-[17px]">
                            <div className="flex h-[46px]">
                                <Image
                                    src="/assets/images/clock.svg"
                                    width={47} // 원하는 비율로 width 지정
                                    height={46} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                />
                            </div>
                            <p className="text-[26px] font-semibold">
                                드립커피를 누구나 손쉽게
                            </p>
                            <div className="flex flex-col font-medium text-[19px] justify-center items-center gap-[-2px]">
                                <p>물만 부으면 완성되는,</p>
                                <p>누구나 쉽게 만드는 드립커피</p>
                            </div>
                        </div>
                    </div>{' '}
                    <div
                        className="w-[399px] h-[255px] border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
                flex flex-col"
                    >
                        <div className="flex flex-col items-center  gap-[17px]">
                            <div className="flex h-[55px]">
                                <Image
                                    src="/assets/images/diamond.svg"
                                    width={66} // 원하는 비율로 width 지정
                                    height={55} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                />
                            </div>
                            <p className="text-[26px] font-semibold">
                                일상의 특별한 순간
                            </p>
                            <div className="flex flex-col font-medium text-[19px] justify-center items-center gap-[-2px]">
                                <p>대리석처럼 영구적이고 고급스러운,</p>
                                <p>일상 속 특별함 선사</p>
                            </div>
                        </div>
                    </div>{' '}
                </div>
                <Link href={'/brand'}>
                    <div className="flex mb-[160px]  justify-center items-center mt-[40px] border-[2px]  border-[#D9D9D9] rounded-3xl  w-[399px] h-[50px] ">
                        <p className="text-[20px] font-bold text-[#2C2E35]">
                            브랜드 상세보기
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home
