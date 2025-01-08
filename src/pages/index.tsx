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
                    <div className="flex mr-0 h-[400px]">
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
                        className="flex-1 min-w-[399px] w-auto h-[255px] border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
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
                        className="flex-1 min-w-[399px] h-[255px] border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
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
                        className="flex-1 min-w-[399px] h-[255px] border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
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
                    <div className="flex mb-[100px]  justify-center items-center mt-[40px] border-[2px]  border-[#D9D9D9] rounded-3xl  w-[399px] h-[50px] ">
                        <p className="text-[20px] font-bold text-[#2C2E35]">
                            브랜드 상세보기
                        </p>
                    </div>
                </Link>
                <div className="arch w-full h-[1018px] flex flex-col items-center justify-center">
                    <div className="mt-[60px] flex flex-col gap-[22px] items-center justify-center">
                        <div className="flex  h-[36px]">
                            <Image
                                src="/assets/images/fl.svg"
                                width={105} // 원하는 비율로 width 지정
                                height={36} // height도 지정하여 비율을 맞추기
                                alt="로고 사진"
                                className="object-fill w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col  items-center justify-center">
                            <p className="text-[44px] leading-[1] thick font-extrabold">
                                SPECIALTY COFFEE
                            </p>
                            <p className="text-[24px] pt-[8px] leading-[1] font-bold text-[#D9D9D9]">
                                IN MARMO
                            </p>
                        </div>
                    </div>
                    <div className="mt-[60px] w-full flex flex-row gap-[16px] justify-center ">
                        <div className="flex w-1/2 flex-col ml-[80px] h-[555px] gap-[22px] justify-center items-center">
                            <p className="text-[24px] font-bold">
                                ORIGINAL LINE
                            </p>
                            <div className="max-w-[638px] w-full  h-[2px] bg-[#2C2E35]"></div>
                            <div className="max-w-[638px] w-full  h-[482px] flex flex-col items-center mt-[20px] rounded-lg  justify-center bg-white ">
                                <div className="flex flex-row  flex-1 justify-center gap-[32px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/sahara.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            사하라 노이어
                                        </p>
                                        <p className="text-[12px]  text-[#787878]">
                                            과테말라(Guatemala)
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/gree.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            그리지오 카르니코
                                        </p>
                                        <p className="text-[12px]  text-[#787878]">
                                            에티오피아(Ethiopia)
                                        </p>
                                    </div>{' '}
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/black.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            블랙카페
                                        </p>
                                        <p className="text-[12px] text-[#787878] ">
                                            콜롬비아(Columbia)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-1 justify-center gap-[32px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/agos.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            아고스블랙
                                        </p>
                                        <p className="text-[12px]  text-[#787878]">
                                            브라질(Brazil)
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/grand.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            그랜드 엔티크
                                        </p>
                                        <p className="text-[12px]  text-[#787878]">
                                            코스타리카(Coasta Rica)
                                        </p>
                                    </div>{' '}
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/nero.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            네로 마르퀴나
                                        </p>
                                        <p className="text-[12px] text-[#787878] ">
                                            케냐(Kenya)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-1/2   flex-col mr-[80px] h-[555px] gap-[22px] justify-center items-center">
                            <p className="text-[24px] font-bold">
                                PREMIUM LINE
                            </p>
                            <div className="max-w-[638px] w-full  h-[2px] bg-[#2C2E35]"></div>
                            <div className="max-w-[638px] w-full  h-[482px] flex flex-col items-center rounded-lg mt-[20px] justify-center bg-white ">
                                <div className="flex flex-row  flex-1 justify-center gap-[32px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/bed.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px]  mt-[12px] font-bold">
                                            베드데알피
                                        </p>
                                        <p className="text-[12px] text-[#787878] ">
                                            과테말라 게이샤
                                        </p>
                                    </div>{' '}
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/roso.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            로소 레판토
                                        </p>
                                        <p className="text-[12px] text-[#787878] ">
                                            에티오피아 게이샤
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-1 justify-center gap-[32px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/ali.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            로소 알리칸데
                                        </p>
                                        <p className="text-[12px]  text-[#787878]">
                                            콜롬비아 가향원두
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  h-[132px]">
                                            <Image
                                                src="/assets/images/tree.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="text-[20px] mt-[12px] font-bold">
                                            아밀릴로 트리아나
                                        </p>
                                        <p className="text-[12px]  text-[#787878]">
                                            파나마 게이샤
                                        </p>
                                    </div>{' '}
                                </div>
                            </div>{' '}
                        </div>
                    </div>
                    <Link href={'/items'}>
                        <div className="flex mb-[100px]  justify-center items-center mt-[44px] border-[2px]  border-[#D9D9D9] rounded-3xl  w-[399px] h-[50px] ">
                            <p className="text-[20px] font-bold text-[#2C2E35]">
                                모든 커피 상세보기
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
