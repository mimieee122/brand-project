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
            <nav className="flex flex-row justify-between w-full  h-[60px] 2xl:h-[100px]  items-center  ">
                {/* <Link href={'/'}>
                        <button className="text-[#544C4C] button bar1 text-[35px]">
                            MÁRMO
                        </button>
                    </Link> */}
                <Link href={'/'}>
                    <div className="flex  pl-[80px] md:pl-[40px] sm:pl-[20px] h-[28px] 2xl:h-[46px] ">
                        <Image
                            src="/assets/images/fl.svg"
                            width={78} // 원하는 비율로 width 지정
                            height={28} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        />
                    </div>
                </Link>

                <div className="flex flex-row  text-[#2C2E35] pr-[80px] 2xl:text-[32px] lg:text-[24px] sm:text-[18px] bar2 gap-[80px]">
                    <Link href={'/brand'}>
                        <button className="button">BRAND</button>
                    </Link>
                    <Link href={'items'}>
                        <button className="button">PRODUCTS</button>
                    </Link>
                    <Link href={'/info'}>
                        <button className="button ">CONTACT</button>
                    </Link>
                </div>
            </nav>
            <div className="flex flex-col overflow-hidden items-center w-full overflow-y-auto ">
                <div className="w-full  lg:h-[300px] 2xl:h-[500px] overflow-y-hidden  flex flex-row items-center justify-between bg-[#DFE3E3]">
                    <div className="flex pl-[80px] md:pl-[40px] sm:pl-[20px] py-[20px] lg:h-[300px]  2xl:h-[500px]">
                        <Image
                            src="/assets/images/B_logo.svg"
                            width={296.45} // 원하는 비율로 width 지정
                            height={340} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            layout="responsive"
                            className="object-fill w-full h-full"
                        />
                    </div>
                    <div className="flex mr-0  lg:h-[300px] 2xl:h-[600px]">
                        <Image
                            src="/assets/images/cross.svg"
                            width={894} // 원하는 비율로 width 지정
                            height={400} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full  2xl:px-[160px] xl:px-[80px] lg:px-[80px] md:px-[40px] sm:px-[20px] justify-center items-center mt-[30px] 2xl:h-[400px] ">
                    <div className="flex flex-col items-center gap-[-8px] ">
                        <p className=" 2xl:text-[50px] lg:text-[40px] md:text-[30px] font-extrabold leading-[1.2] ">
                            ABOUT
                        </p>
                        <p className=" 2xl:text-[36px] lg:text-[30px] md:text-[28px] font-bold leading-[1.2] ">
                            THE BRAND
                        </p>
                    </div>
                    <div className="  2xl:mb-[32px] mt-[8px] lg:mb-[8px] w-full h-[4px]  bg-[#DEDEDE]"></div>
                    <p className=" 2xl:mt-[32px]  2xl:text-[32px] mt-[8px] xl:text-[24px]  lg:mb-[18px] lg:text-[20px] md:text-[18px]   text-[#2C2E35]  font-semibold">
                        마르모 커피는 프리미엄 드립커피를 누구나 일상에서 쉽게
                        경험할 수 있도록 탄생한, 혁신적인 브랜드입니다
                    </p>
                    <div className=" 2xl:mt-[32px] mt-[8px]  w-full  h-[4px]  bg-[#DEDEDE]"></div>
                </div>
                <div className="mt-[20px]  w-full  2xl:px-[160px] xl:px-[80px] lg:px-[80px] md:px-[40px] sm:px-[20px]  mb-[40px] flex flex-row max-w-full justify-center items-center gap-[12px]  ">
                    <div
                        className="flex-1  w-full h-[255px]  border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
                              flex flex-col"
                    >
                        <div className="flex flex-col items-center  gap-[17px] ">
                            <div className="flex 2xl:h-[58px] xl:h-[48px] lg:h-[38px] ">
                                <Image
                                    src="/assets/images/cong.svg"
                                    width={41} // 원하는 비율로 width 지정
                                    height={48} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                />
                            </div>
                            <p className=" 2xl:text-[30px] xl:text-[26px] lg:text-[24px] md:text-[20px] font-semibold">
                                최상급 원두의 깊은 풍미
                            </p>
                            <div className="flex flex-col font-medium 2xl:text-[22px] xl:text-[24px] lg:text-[20px] md:text-[14px] sm:text-[12px] justify-center items-center gap-[-2px]">
                                <p>특허 출원 추출 기술과 엄선된 원두로</p>
                                <p>풍미를 완벽하게 보존</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex-1  w-full h-[255px]  border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
                              flex flex-col"
                    >
                        <div className="flex flex-col items-center  gap-[17px]">
                            <div className="flex h-[46px] 2xl:h-[60px]">
                                <Image
                                    src="/assets/images/clock.svg"
                                    width={47} // 원하는 비율로 width 지정
                                    height={46} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                />
                            </div>
                            <p className=" 2xl:text-[30px] xl:text-[26px] lg:text-[24px] md:text-[20px] font-semibold">
                                누구나 손쉽게
                            </p>
                            <div className="flex flex-col font-medium 2xl:text-[22px] xl:text-[24px] lg:text-[20px] md:text-[14px] sm:text-[12px] justify-center items-center gap-[-2px]">
                                <p>물만 부으면 완성되는,</p>
                                <p>누구나 쉽게 만드는 드립커피</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex-1 w-full h-[255px]  border-b-[3px] border-b-[#2C2E35] items-center justify-center rounded-2xl bg-[#D7D6D2]
                              flex flex-col"
                    >
                        <div className="flex flex-col items-center  gap-[17px]">
                            <div className="flex h-[55px] 2xl:h-[60px]">
                                <Image
                                    src="/assets/images/diamond.svg"
                                    width={66} // 원하는 비율로 width 지정
                                    height={55} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                />
                            </div>
                            <p className=" 2xl:text-[30px] xl:text-[26px] lg:text-[24px] md:text-[20px] font-semibold">
                                일상의 특별한 순간
                            </p>
                            <div className="flex flex-col font-medium 2xl:text-[22px] xl:text-[24px] lg:text-[20px] md:text-[14px] sm:text-[12px] justify-center items-center gap-[-2px]">
                                <p>대리석처럼 영구적이고 고급스러운,</p>
                                <p>일상 속 특별함 선사</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={'/brand'}>
                    <div className="flex mb-[100px]  justify-center items-center  border-[2px]  border-[#D9D9D9] rounded-3xl 2xl:w-[540px] md:w-[400px] sm:w-[360px] 2xl:h-[60px] h-[50px] ">
                        <p className=" 2xl:text-[24px] xl:text-[20px] md:text-[18px] font-bold text-[#2C2E35]">
                            브랜드 상세보기
                        </p>
                    </div>
                </Link>
                <div className="flex flex-row justify-center mx-[40px]">
                    <div
                        className=" px-[60px]   mb-[100px] overflow-hidden  rounded-3xl shadow-lg border-b-[#D9D9D9] border-[4px] min-w-[800px] 2xl:h-[380px] xl:h-[280px] lg:h-[240px] md:h-[200px] sm:h-[180px] bg-[#243E45]
                          flex flex-row justify-center items-center"
                    >
                        <div className="lg:h-[232px] md:h-[180px] sm:h-[160px]  mr-[22px]">
                            <Image
                                src="/assets/images/gree.svg"
                                width={285} // 원하는 비율로 width 지정
                                height={252} // height도 지정하여 비율을 맞추기
                                alt="로고 사진"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col items-end mt-[80px] md:mt-[40px] justify-end h-full">
                            <Image
                                src="/assets/images/bottle.svg"
                                width={127} // 원하는 비율로 width 지정
                                height={234} // height도 지정하여 비율을 맞추기
                                alt="로고 사진"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="2xl:ml-[120px] lg:ml-[100px] md:ml-[80px] flex flex-col  2xl:text-[28px] xl:text-[22px] lg:text-[20px] sm:text-[14px] text-white items-start justify-center">
                            <p className="leading-[1]  mb-[48px]">
                                마르모(Marmo)는 이탈리아로 대리석을 뜻합니다.
                            </p>
                            <p className="leading-[1.5]  mb-[8px] mr-[80px]">
                                대리석이 시간이 지나도 본연의 품격과 견고함을
                                잃지 않듯, 변함없는 품질과 특별한 순간을
                                선사하겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="arch w-full mb-[100px] h-[1018px] flex flex-col items-center justify-center">
                    <div className="mt-[60px] flex flex-col gap-[22px] items-center justify-center">
                        <div className="flex  h-[36px] 2xl:h-[50px]">
                            <Image
                                src="/assets/images/fl.svg"
                                width={105} // 원하는 비율로 width 지정
                                height={36} // height도 지정하여 비율을 맞추기
                                alt="로고 사진"
                                className="object-fill w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col  items-center justify-center">
                            <p className="2xl:text-[44px] xl:text-[40px] lg:text-[34px] md:text-[32px] sm:text-[30px] 2xl:font-bold leading-[1] thick font-extrabold">
                                SPECIALTY COFFEE
                            </p>
                            <p className="text-[24px] pt-[8px] leading-[1] font-bold text-[#D9D9D9]">
                                IN MARMO
                            </p>
                        </div>
                    </div>
                    <div className="mt-[60px] w-full flex flex-row lg:gap-[16px] md:gap-[12px] sm:gap-[8px] justify-center ">
                        <div className="flex w-1/2 flex-col ml-[80px] h-[555px] gap-[22px] justify-center items-center">
                            <p className="text-[24px] 2xl:text-[32px] font-bold">
                                ORIGINAL LINE
                            </p>
                            <div className=" 2xl:w-[840px] xl:w-[540px] lg:w-[400px] md:w-[360px] sm:w-[300px]   h-[2px] bg-[#2C2E35]"></div>
                            <div className=" 2xl:w-[840px] xl:w-[540px] lg:w-[400px] md:w-[360px] sm:w-[300px] w-full 2xl:h-[840px] xl:h-[482px] lg:h-[400px] md:h-[380px] sm:h-[360px] flex flex-col items-center mt-[20px] rounded-lg  justify-center bg-white ">
                                <div className="flex flex-row  flex-1 justify-center  2xl:gap-[50px] xl:gap-[32px] lg:gap-[24px] md:gap-[20px] sm:gap-[16px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/sahara.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            사하라 노이어
                                        </p>
                                        <p className="text-[12px] hidden lg:block text-[#787878]">
                                            과테말라(Guatemala)
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/gree.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            그리지오
                                        </p>
                                        <p className="text-[12px] hidden lg:block text-[#787878]">
                                            에티오피아(Ethiopia)
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/black.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            블랙카페
                                        </p>
                                        <p className="text-[12px] hidden lg:block text-[#787878] ">
                                            콜롬비아(Columbia)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-1 justify-center 2xl:gap-[50px] xl:gap-[32px] lg:gap-[24px] md:gap-[20px] sm:gap-[16px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/agos.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            아고스블랙
                                        </p>
                                        <p className="text-[12px] hidden lg:block text-[#787878]">
                                            브라질(Brazil)
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/grand.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            그랜드 엔티크
                                        </p>
                                        <p className="text-[12px] hidden lg:block  text-[#787878]">
                                            코스타리카
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/nero.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            네로 마르퀴나
                                        </p>
                                        <p className="text-[12px] hidden lg:block text-[#787878] ">
                                            케냐(Kenya)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-1/2   flex-col mr-[80px] h-[555px] gap-[22px] justify-center items-center">
                            <p className="text-[24px] 2xl:text-[32px] font-bold">
                                PREMIUM LINE
                            </p>
                            <div className="2xl:w-[840px] xl:w-[540px] lg:w-[400px] md:w-[360px] sm:w-[300px] h-[2px] bg-[#2C2E35]"></div>
                            <div className="max-w-[840px] w-full  2xl:h-[840px] xl:h-[482px] lg:h-[400px] md:h-[380px] sm:h-[360px] flex flex-col items-center rounded-lg mt-[20px] justify-center bg-white ">
                                <div className="flex flex-row  flex-1 justify-center gap-[32px] 2xl:gap-[50px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/bed.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]   mt-[12px] font-bold">
                                            베드데알피
                                        </p>
                                        <p className="text-[12px] hidden lg:block text-[#787878] ">
                                            과테말라 게이샤
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/roso.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            로소 레판토
                                        </p>
                                        <p className="text-[12px] hidden lg:block text-[#787878] ">
                                            에티오피아 게이샤
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-1 justify-center gap-[32px] 2xl:gap-[50px]">
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/ali.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            로소 알리칸데
                                        </p>
                                        <p className="text-[12px] hidden lg:block  text-[#787878]">
                                            콜롬비아 가향원두
                                        </p>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <div className="flex  xl:h-[132px] lg:h-[100px] md:h-[86px] sm:h-[80px]">
                                            <Image
                                                src="/assets/images/tree.svg"
                                                width={150} // 원하는 비율로 width 지정
                                                height={132} // height도 지정하여 비율을 맞추기
                                                alt="로고 사진"
                                                className="object-fill rounded-lg w-full h-full"
                                            />
                                        </div>
                                        <p className="xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]  mt-[12px] font-bold">
                                            아밀릴로
                                        </p>
                                        <p className="text-[12px] hidden lg:block  text-[#787878]">
                                            파나마 게이샤
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={'/items'}>
                        <div className="flex mt-[50px] 2xl:bg-white  justify-center items-center  border-[2px]  border-[#D9D9D9] rounded-3xl  2xl:w-[540px] md:w-[400px] sm:w-[360px] 2xl:h-[60px] h-[50px] ">
                            <p className="2xl:text-[24px] xl:text-[20px] md:text-[18px] font-bold text-[#2C2E35]">
                                제품 상세보기
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="min-w-[977px] px-[40px] md:min-w-[600px] sm:min-w-[500px] md:px-[20px] xl:mx-[80px] lg:mx-[80px] md:mx-[40px] sm:mx-[20px]  flex flex-col 2xl:gap-[28px] lg:gap-[20px] md:gap-[14px] sm:gap-[14px] items-center justify-center rounded-3xl  2xl:h-[480px] xl:h-[440px] lg:h-[400px] md:h-[360px] sm:h-[320px]  bg-[#EDEDED]">
                    <p className="text-[40px] 2xl:text-[44px] xl:text-[40px] lg:text-[34px] md:text-[32px] sm:text-[30px] leading-[1] thick font-extrabold">
                        HOW TO USE
                    </p>
                    <p className="  2xl:text-[26px] xl:text-[22px] lg:text-[20px] sm:text-[16px] font-semibold">
                        마르모 커피 1: 물 4의 비율로, 마르모 커피 50ml와 물
                        200ml를 섞으면 고급 드립 커피가 완성됩니다
                    </p>
                    <div className="w-full flex flex-row justify-center items-center">
                        <div className="flex-1"></div>
                        <div className="flex-1 2xl:h-[200px] lg:h-[140px] md:h-[100px] sm:h-[80px]">
                            <Image
                                src="/assets/images/use.svg"
                                width={289} // 원하는 비율로 width 지정
                                height={161} // height도 지정하여 비율을 맞추기
                                alt="로고 사진"
                                className="object-fill rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="flex-1 flex-col ml-[20px] gap-[22px] 2xl:gap-[32px] items-start  justify-center">
                            <div className="w-[284px] md:w-[200px]  h-[2px] mb-[22px]  bg-black"></div>
                            <p className="text-[18px] md:text-[14px] thick">
                                나만의 커피 스타일링
                            </p>
                            <p className="mt-[16px] text-[12px] md:text-[10px] ">
                                마르모 원액은 우유, 탄산음료, 아이스크림 등과
                                쉽게 섞여 아이스커피, 핫커피, 라떼, 아포가토까지
                                다양한 스타일로 즐길 수 있습니다
                            </p>

                            <div className="w-[284px] md:w-[200px]  h-[2px] mt-[22px] bg-black"></div>
                        </div>
                    </div>
                </div>
                <div className=" w-full w-max-[1417px]  min-w-[977px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[500px] overflow-hidden  mt-[120px] mb-[120px]  h-[368px] 2xl:h-[480px] xl:h-[380px] lg:h-[240px] md:h-[200px] sm:h-[180px] bg-[#F2F5F1] flex flex-row justify-between pl-[80px] 2xl:pl-[160px] pr-[0px] items-center">
                    <div className="flex flex-col   items-start  gap-[44px]">
                        <p className="2xl:text-[32px] xl:text-[31px] lg:text-[30px] md:text-[28px] sm:text-[26px] thick font-semibold">
                            마지막 한 모금까지, 깊은 여운
                        </p>
                        <div className="flex flex-row justify-center items-center gap-[20px]">
                            <Link href={'/brand'}>
                                <div className="w-[326px] h-[54px]  bg-white border-[2px] rounded-3xl flex flex-row justify-center items-center">
                                    <p className="text-[20px] 2xl:text-[24px] font-bold">
                                        브랜드 철학 더 알아보기 →
                                    </p>
                                </div>
                            </Link>
                            <Link href={'/items'}>
                                <div className="w-[326px] h-[54px]  bg-white border-[2px] rounded-3xl flex flex-row justify-center items-center">
                                    <p className="text-[20px] 2xl:text-[24px] font-bold">
                                        마르모 커피 구경하기 →
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="mr-[0px]  2xl:h-[500px] xl:h-[368px] lg:max-h-none lg:block overflow-hidden hidden">
                        {' '}
                        <Image
                            src="/assets/images/banner.svg"
                            width={645} // 원하는 비율로 width 지정
                            height={368} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill  w-full h-full "
                        />
                    </div>
                </div>
                <div className="w-full mt-[20px]  mb-[80px]  h-[1px] bg-[#DEDEDE]"></div>{' '}
                <div className="flex flex-col text-[#D9D9D9] items-start  w-full px-[80px]">
                    <p className="text-[14px] mb-[20px]">
                        Ⓒ 2025 SUPERBA. All Rights Reserved.
                    </p>
                    <p className="text-[14px] mb-[20px]">COMPANY INFO</p>
                    <p className="text-[14px]">
                        상호 : 수페르바 l 대표자 : 김진표
                    </p>
                    <p className="text-[14px]">
                        전화 : 070-4114-1294 l 010-6861-1294
                    </p>
                    <p className="text-[14px]">사업자 등록번호: 554-21-01985</p>
                    <p className="text-[14px]">
                        통신판매업: 2024-대구중구-0872
                    </p>
                    <p className="text-[14px]">
                        주소 : 41933 대구광역시 중구 서성로 4 (계산동2가) 1층
                        수페르바
                    </p>
                    <p className="text-[14px]">
                        문의 및 제안 : superba1294@naver.com
                    </p>
                    <p className="text-[14px] mb-[40px]">
                        Instagram @marmocoffee
                    </p>
                    <p className="text-[14px] mb-[40px]">
                        Designed and Built by MISEONG CHO
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
