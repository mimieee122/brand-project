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
        <div className="flex flex-col min-w-full  justify-center items-center container">
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

                <div className="flex flex-row engSm  text-[#2C2E35] pr-[80px] gap-[80px]">
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
            <div className="w-full flex flex-col items-start justify-start">
                <Image
                    src="/assets/images/2.svg"
                    width={1937} // 가로 비율
                    height={1185} // 세로 비율
                    alt="로고 사진"
                    layout="responsive" // 반응형 레이아웃 유지
                    className="w-full object-cover" // 비율 유지하면서 꽉 채움
                />
            </div>
            <div className=" mt-[120px]   flex flex-col min-w-full container items-center justify-center">
                <p className="text-[40px] mb-[20px] leading-[1] thick font-extrabold">
                    BRAND VISION
                </p>
                <div className=" w-full max-w-[calc(100%-160px)] mx-auto  h-[4px] bg-[#DEDEDE]"></div>
                <div className="mt-[30px] mb-[30px] flex flex-col justify-center items-center">
                    <p className="leading-[1] korMd">
                        마르모는 누구나 간편하게 고품질 커피를 즐길 수 있는
                        세상을 꿈꾸며,
                    </p>
                    <p className="leading-[1] pt-[8px] korMd">
                        세 가지 철학을 실천합니다.
                    </p>
                </div>
                <div className=" w-full max-w-[calc(100%-160px)] mx-auto h-[4px] bg-[#DEDEDE]"></div>
            </div>
            <div
                className="mb-[100px] mt-[80px] w-full max-w-[calc(100%-160px)] mx-auto sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[360px] 2xl:h-[400px]
            flex flex-row justify-center items-center gap-[20px]"
            >
                <div
                    className="flex-1 w-full h-full rounded-xl border-b-white border-b-[4px] shadow-lg shadow-[#878787]   bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className=" sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[160px] 2xl:h-[200px]">
                        <Image
                            src="/assets/images/Vector.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill  w-full h-full"
                        ></Image>
                    </div>
                    <div className="flex flex-row justify-center gap-[8px]">
                        <p className="engSm  text-white font-bold">
                            INNOVATION
                        </p>
                    </div>
                    <div className=" mt-[18px] font-medium px-[10px]  rounded-lg bg-[white] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1] korSm pt-4">
                            커피 본연의 맛을 살리는
                        </p>
                        <p className="leading-[1] korSm mt-[2px] pb-4">
                            급속 냉각 기술
                        </p>
                    </div>
                </div>
                <div
                    className="flex-1 h-full w-full rounded-xl border-b-white border-b-[4px] shadow-lg shadow-[#878787]  bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className="sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[160px] 2xl:h-[200px]">
                        <Image
                            src="/assets/images/chain.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill shadow-white w-full h-full"
                        ></Image>
                    </div>
                    <div className="flex flex-row  justify-center gap-[8px]">
                        <p className="engSm text-white font-bold">
                            ACCESSCIBILITY
                        </p>
                    </div>
                    <div className=" mt-[18px] font-medium  px-[10px] rounded-lg bg-[white] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1] korSm pt-4">언제 어디서나</p>
                        <p className="leading-[1] korSm mt-[2px] pb-4">
                            간편하게 즐기는 드립커피
                        </p>
                    </div>
                </div>
                <div
                    className="flex-1 w-full h-full rounded-2xl border-b-white border-b-[4px] shadow-lg shadow-[#878787]   bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className="sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[160px] 2xl:h-[200px]">
                        <Image
                            src="/assets/images/young.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill w-full h-full"
                        ></Image>
                    </div>
                    <div className="flex flex-row justify-center gap-[8px]">
                        <p className="engSm text-white font-bold">
                            SUSTAINABILITY
                        </p>
                    </div>
                    <div className=" mt-[18px] font-medium px-[10px]  rounded-lg bg-[white] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1] korSm pt-4">
                            대리석의 영구적 가치를 닮은
                        </p>
                        <p className="leading-[1] mt-[2px] korSm pb-4">
                            고급스러운 커피
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center w-full">
                <div
                    className=" w-full max-w-[calc(100%-240px)] mx-auto  mb-[100px] overflow-hidden  rounded-3xl shadow-lg border-b-[#D9D9D9] border-[4px]  2xl:h-[380px] xl:h-[280px] lg:h-[240px] md:h-[200px] sm:h-[180px] bg-[#243E45]
                                  flex flex-row justify-center items-center"
                >
                    <div className=" w-[400px] h-full px-[20px] py-[20px]">
                        <Image
                            src="/assets/images/gree.svg"
                            width={285} // 원하는 비율로 width 지정
                            height={252} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            layout="responsive"
                            className="object-cover w-full h-full hidden lg:block"
                        />
                    </div>
                    <div className="flex flex-col items-end mb-[0px] justify-end h-full">
                        <Image
                            src="/assets/images/bottle.svg"
                            width={127} // 원하는 비율로 width 지정
                            height={234} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            layout="responsive"
                            className="object-cover w-full h-full hidden lg:block"
                        />
                    </div>
                    <div className=" flex flex-col pl-[40px] pr-[20px] text-white items-start justify-center ">
                        <p className="leading-[1] korLg font-bold  mb-[20px]">
                            마르모(Marmo)는 이탈리아로 대리석을 뜻합니다.
                        </p>
                        <p className="leading-[1.2] korMd  ">
                            대리석이 시간이 지나도 본연의 품격과 견고함을 잃지
                            않듯,
                        </p>
                        <p className="leading-[1.2] korMd  ">
                            변함없는 품질과 특별한 순간을 선사하겠습니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1  mb-[120px] min-w-full h-[600px] 2xl:h-[1000px] bg-[#FAFAFA] flex flex-col items-center justify-center">
                <div className="flex pt-[60px] flex-col  items-center justify-center">
                    <p className="text-[24px] leading-[1] text-[#B0AEA5] font-bold">
                        WHY MARMO
                    </p>
                    <p className="text-[30px] 2xl:text-[34px] thick leading-[1] mt-[8px] font-extrabold">
                        마르모 커피가 특별한 이유
                    </p>
                </div>
                <div className="flex flex-row items py-[30px] h-[300px] justify-center items-center gap-[20px]">
                    <div
                        className="flex-1 w-full h-full bg-white rounded-lg flex flex-col items-center justify-center
                    gap-[8px] px-[20px] py-[15px] "
                    >
                        <div className="flex  flex-row justify-center gap-[20px] ">
                            <div className="sm:w-[60px] md:w-[90px] lg:w-[120px] xl:w-[180px] 2xl:w-[200px]">
                                <Image
                                    src="/assets/images/ice.svg"
                                    width={2} // 원하는 비율로 width 지정
                                    height={1} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <p className="korMd font-semibold">
                                    급속 냉각 기술
                                </p>
                                <p className="text-[12px] text-[#B0AEA5]">
                                    (Rapid Cooling Tech)
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex-1  w-full h-full  px-[10px] rounded-md bg-[#FAFAFA]
                        flex flex-col items-center justify-center"
                        >
                            <p className="korSm leading-[1] pt-2">
                                맛과 향을 유지하는
                            </p>
                            <p className="korSm leading-[1] mt-[2px] pb-2">
                                마르모만의 혁신적 기술
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex-1 w-full h-full bg-white rounded-lg flex  flex-col items-center justify-center
                    gap-[8px] px-[20px] py-[15px] "
                    >
                        <div className="flex flex-row justify-center gap-[20px] ">
                            <div className="sm:w-[60px] md:w-[90px] lg:w-[120px] xl:w-[180px] 2xl:w-[200px]">
                                <Image
                                    src="/assets/images/intensity.svg"
                                    width={2} // 원하는 비율로 width 지정
                                    height={1} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-cover w-full h-full"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <p className="korMd font-semibold">
                                    원액 추출 기술
                                </p>
                                <p className="text-[12px] text-[#B0AEA5]">
                                    (High-Intensity Coffee)
                                </p>
                            </div>
                        </div>
                        <div
                            className=" px-[10px] w-full h-full rounded-md bg-[#FAFAFA]
                        flex flex-col items-center justify-center"
                        >
                            <p className="korSm leading-[1] pt-2">
                                단 한 방울로도 깊고 진한 커피를
                            </p>
                            <p className="korSm leading-[1] mt-[2px] pb-2">
                                즐길 수 있는 마르모만의 기술
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex-1 w-full h-full bg-white rounded-lg flex flex-col items-center justify-center
                    gap-[8px] px-[20px] py-[15px]"
                    >
                        <div className="flex flex-row justify-center gap-[20px] ">
                            <div className="sm:w-[60px] md:w-[90px] lg:w-[120px] xl:w-[180px] 2xl:w-[200px]">
                                <Image
                                    src="/assets/images/gift.svg"
                                    width={2} // 원하는 비율로 width 지정
                                    height={1} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <p className="korMd font-semibold">
                                    선물용 패키지
                                </p>
                                <p className="text-[12px] text-[#B0AEA5]">
                                    (Premium Gift)
                                </p>
                            </div>
                        </div>
                        <div
                            className=" w-full  h-full px-[10px]  rounded-md bg-[#FAFAFA]
                        flex flex-col items-center justify-center"
                        >
                            <p className="korSm leading-[1] pt-2">
                                감각적이고 고급스러운 선물로
                            </p>
                            <p className="korSm  leading-[1] mt-[2px] pb-2">
                                특별한 순간을 완성
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="mb-[120px] flex flex-row justify-center
            items-center"
            >
                <p className="text-[22px] 2xl:text-[32px] font-semibold text-[#B0AEA5]">
                    마르모의 특별함은 여기서 멈추지 않습니다. 지난 1년간 우리가
                    걸어온 길을 확인하세요.
                </p>
            </div>
            <div className="w-full  mb-[140px]">
                <Image
                    src="/assets/images/accomplish.svg"
                    width={1410} // 원하는 비율로 width 지정
                    height={1000} // height도 지정하여 비율을 맞추기
                    alt="로고 사진"
                    className="object-cover w-full h-full"
                ></Image>
            </div>
            <div className=" w-full  items  mb-[40px] flex flex-row max-w-full justify-center items-center gap-[12px]  ">
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
                        <p className=" korLg font-semibold">
                            최상급 원두의 깊은 풍미
                        </p>
                        <div className="flex flex-col font-medium justify-center items-center gap-[-2px]">
                            <p className="korSm">
                                특허 출원 추출 기술과 엄선된 원두로
                            </p>
                            <p className="korSm">풍미를 완벽하게 보존</p>
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
                        <p className=" korLg font-semibold">누구나 손쉽게</p>
                        <div className="flex flex-col font-medium korSm justify-center items-center gap-[-2px]">
                            <p className="korSm">물만 부으면 완성되는,</p>
                            <p className="korSm">누구나 쉽게 만드는 드립커피</p>
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
                        <p className="korLg font-semibold">
                            일상의 특별한 순간
                        </p>
                        <div className="flex flex-col font-medium korSm justify-center items-center gap-[-2px]">
                            <p className="korSm">
                                대리석처럼 영구적이고 고급스러운,
                            </p>
                            <p className="korSm">일상 속 특별함 선사</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-[20px]  mb-[80px]  h-[1px] bg-[#DEDEDE]"></div>{' '}
            <div className="flex flex-col text-[#D9D9D9] items-start  w-full px-[80px]">
                <p className="text-[14px] mb-[20px]">
                    Ⓒ 2025 SUPERBA. All Rights Reserved.
                </p>
                <p className="text-[14px] mb-[20px]">COMPANY INFO</p>
                <p className="text-[14px]">상호 : 수페르바 l 대표자 : 김진표</p>
                <p className="text-[14px]">
                    전화 : 070-4114-1294 l 010-6861-1294
                </p>
                <p className="text-[14px]">사업자 등록번호: 554-21-01985</p>
                <p className="text-[14px]">통신판매업: 2024-대구중구-0872</p>
                <p className="text-[14px]">
                    주소 : 41933 대구광역시 중구 서성로 4 (계산동2가) 1층
                    수페르바
                </p>
                <p className="text-[14px]">
                    문의 및 제안 : superba1294@naver.com
                </p>
                <p className="text-[14px] mb-[40px]">Instagram @marmocoffee</p>
                <p className="text-[14px] mb-[40px]">
                    Designed and Built by MISEONG CHO
                </p>
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
