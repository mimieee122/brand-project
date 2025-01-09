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
            <div className="w-full h-[731px]">
                {' '}
                <Image
                    src="/assets/images/2.svg"
                    width={1415} // 원하는 비율로 width 지정
                    height={731} // height도 지정하여 비율을 맞추기
                    alt="로고 사진"
                    className="object-cover w-full h-full"
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
                <div className=" mr-[80px] mb-[60px] ml-[80px] min-w-[1257px] h-[4px] bg-[#DEDEDE]"></div>
            </div>
            <div
                className=" mr-[80px] mb-[80px] ml-[80px] min-w-[1257px] h-[325px]
            flex flex-row justify-center gap-[73px]"
            >
                <div
                    className="flex-1 w-full rounded-xl border-b-white border-b-[4px] shadow-lg shadow-[#878787]  h-[325px] bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className="h-[183px] ">
                        <Image
                            src="/assets/images/Vector.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill  w-full h-full"
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
                    <div className=" mt-[12px] font-medium text-[16px] w-[240px] h-[50px] rounded-lg bg-[white] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1]">커피 본연의 맛을 살리는</p>
                        <p className="leading-[1] mt-[2px]">급속 냉각 기술</p>
                    </div>
                </div>
                <div
                    className="flex-1 w-full rounded-xl border-b-white border-b-[4px] shadow-lg shadow-[#878787]  h-[325px] bg-[#2C2E35] flex
                flex-col items-center justify-center"
                >
                    <div className="h-[183px]">
                        <Image
                            src="/assets/images/chain.svg"
                            width={183} // 원하는 비율로 width 지정
                            height={183} // height도 지정하여 비율을 맞추기
                            alt="로고 사진"
                            className="object-fill shadow-white w-full h-full"
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
                    <div className=" mt-[12px] font-medium text-[16px] w-[240px] h-[50px] rounded-lg bg-[white] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1]">언제 어디서나</p>
                        <p className="leading-[1] mt-[2px]">
                            간편하게 즐기는 드립커피
                        </p>
                    </div>
                </div>
                <div
                    className="flex-1 w-full rounded-2xl border-b-white border-b-[4px] shadow-lg shadow-[#878787]  h-[325px] bg-[#2C2E35] flex
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
                    <div className=" mt-[12px] font-medium text-[16px] w-[240px] h-[50px] rounded-lg bg-[white] shadow-lg flex flex-col items-center justify-center">
                        <p className="leading-[1]">
                            대리석의 영구적 가치를 닮은
                        </p>
                        <p className="leading-[1] mt-[2px]">고급스러운 커피</p>
                    </div>
                </div>{' '}
            </div>
            <div
                className=" mt-[80px] mb-[20px] overflow-hidden px-[20px] rounded-2xl mr-[120px] ml-[120px] shadow-lg border-b-[#D9D9D9] border-[4px] min-w-[857px] h-[280px] bg-[#243E45]
            flex flex-row justify-center items-center"
            >
                <div className="h-[232px] mr-[22px]">
                    {' '}
                    <Image
                        src="/assets/images/gree.svg"
                        width={285} // 원하는 비율로 width 지정
                        height={252} // height도 지정하여 비율을 맞추기
                        alt="로고 사진"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col items-end mt-[80px] justify-end h-full">
                    <Image
                        src="/assets/images/bottle.svg"
                        width={127} // 원하는 비율로 width 지정
                        height={234} // height도 지정하여 비율을 맞추기
                        alt="로고 사진"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="ml-[120px] flex flex-col  text-[20px] text-white items-start justify-center">
                    <p className="leading-[1]  mb-[48px]">
                        마르모(Marmo)는 이탈리아어로 '대리석'을 뜻합니다.{' '}
                    </p>
                    <p className="leading-[1]  mb-[8px]">
                        대리석이 시간이 지나도 본연의 품격과 견고함을 잃지 않듯,
                    </p>
                    <p className="leading-[1]">
                        변함없는 품질과 특별한 순간을 선사하겠습니다.{' '}
                    </p>
                </div>
            </div>
            <div className="mt-[40px] mb-[120px] w-full h-[600px] bg-[#FAFAFA] flex flex-col items-center justify-center">
                <div className="flex  flex-col  items-center justify-center">
                    <p className="text-[24px] leading-[1] text-[#B0AEA5] font-bold">
                        WHY MARMO
                    </p>
                    <p className="text-[30px] thick leading-[1] mt-[8px] font-extrabold">
                        마르모 커피가 특별한 이유
                    </p>
                </div>
                <div className="flex flex-row w-full px-[80px] py-[60px] justify-center items-center gap-[40px]">
                    <div
                        className="flex-1 w-full bg-white rounded-lg h-[206px] flex-col items-center justify-center
                    gap-[20px] px-[40px] py-[30px]"
                    >
                        <div className="flex flex-row justify-center gap-[20px] ">
                            <div className="w-[180px] h-[92px]">
                                <Image
                                    src="/assets/images/ice.svg"
                                    width={2} // 원하는 비율로 width 지정
                                    height={1} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start justify-end">
                                <p className="text-[20px] font-semibold">
                                    급속 냉각 기술
                                </p>
                                <p className="text-[12px] text-[#B0AEA5]">
                                    (Rapid Cooling Technology)
                                </p>
                            </div>
                        </div>
                        <div
                            className="mt-[10px]  w-full min-w-[298px]  h-[53px] rounded-md bg-[#FAFAFA]
                        flex flex-col items-center justify-center"
                        >
                            <p className="text-[16px] leading-[1]">
                                맛과 향을 유지하는
                            </p>
                            <p className="text-[16px] leading-[1] mt-[2px]">
                                마르모만의 혁신적 기술
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex-1 w-full bg-white rounded-lg h-[206px] flex-col items-center justify-center
                    gap-[20px] px-[40px] py-[30px]"
                    >
                        <div className="flex flex-row justify-center gap-[20px] ">
                            <div className="w-[180px] h-[92px]">
                                <Image
                                    src="/assets/images/intensity.svg"
                                    width={2} // 원하는 비율로 width 지정
                                    height={1} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start justify-end">
                                <p className="text-[20px] font-semibold">
                                    원액 추출 기술
                                </p>
                                <p className="text-[12px] text-[#B0AEA5]">
                                    (High-Intensity Coffee Technology)
                                </p>
                            </div>
                        </div>
                        <div
                            className="mt-[10px]  w-full min-w-[298px]  h-[53px] rounded-md bg-[#FAFAFA]
                        flex flex-col items-center justify-center"
                        >
                            <p className="text-[16px] leading-[1]">
                                단 한 방울로도 깊고 진한 커피를
                            </p>
                            <p className="text-[16px] leading-[1] mt-[2px]">
                                즐길 수 있는 마르모만의 기술
                            </p>
                        </div>
                    </div>{' '}
                    <div
                        className="flex-1 w-full bg-white rounded-lg h-[206px] flex-col items-center justify-center
                    gap-[20px] px-[40px] py-[30px]"
                    >
                        <div className="flex flex-row justify-center gap-[20px] ">
                            <div className="w-[180px] h-[92px]">
                                <Image
                                    src="/assets/images/gift.svg"
                                    width={2} // 원하는 비율로 width 지정
                                    height={1} // height도 지정하여 비율을 맞추기
                                    alt="로고 사진"
                                    className="object-fill w-full h-full"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start justify-end">
                                <p className="text-[20px] font-semibold">
                                    선물용 패키지
                                </p>
                                <p className="text-[12px] text-[#B0AEA5]">
                                    (Premium Gift Package)
                                </p>
                            </div>
                        </div>
                        <div
                            className="mt-[10px]  w-full min-w-[298px]  h-[53px] rounded-md bg-[#FAFAFA]
                        flex flex-col items-center justify-center"
                        >
                            <p className="text-[16px] leading-[1]">
                                감각적이고 고급스러운 선물로
                            </p>
                            <p className="text-[16px] leading-[1] mt-[2px]">
                                특별한 순간을 완성
                            </p>
                        </div>
                    </div>{' '}
                </div>
            </div>
            <div
                className="mb-[120px] flex flex-row justify-center
            items-center"
            >
                <p className="text-[22px] font-semibold text-[#B0AEA5]">
                    마르모의 특별함은 여기서 멈추지 않습니다. 지난 1년간 우리가
                    걸어온 길을 확인하세요.
                </p>
            </div>
            <div className="w-full h-[1000px] mb-[140px]">
                <Image
                    src="/assets/images/accomplish.svg"
                    width={1410} // 원하는 비율로 width 지정
                    height={1000} // height도 지정하여 비율을 맞추기
                    alt="로고 사진"
                    className="object-fill w-full h-full"
                ></Image>
            </div>
            <div className="mt-[20px] px-[80px] mb-[180px] flex flex-row max-w-full justify-center items-center gap-[29px] ">
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
            <div className=" mr-[80px] ml-[80px] mb-[80px] min-w-[1257px] h-[2px] bg-[#D9D9D9]"></div>
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
