import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Items = () => {
    return (
        <>
            <nav className="flex flex-row justify-between w-full  h-[60px] 2xl:h-[100px]  items-center  ">
                {/* <Link href={'/'}>
                        <button className="text-[#544C4C] button bar1 text-[35px]">
                            MÁRMO
                        </button>
                    </Link> */}
                <Link href={'/'}>
                    <div className="flex  pl-[80px] h-[28px] 2xl:h-[46px] ">
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
            <div className="w-full h-[732px] 2xl:h-[1000px] mb-[100px]">
                <Image
                    src="/assets/images/products.svg"
                    width={1419} // 원하는 비율로 width 지정
                    height={732} // height도 지정하여 비율을 맞추기
                    alt="로고 사진"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="mt-[120px] flex flex-col items-center justify-center">
                <div className=" mr-[80px] ml-[80px] min-w-[1257px] h-[2px] bg-[#DEDEDE]"></div>
                <div className="mt-[30px] mb-[30px] flex flex-col justify-center items-center">
                    <p className="leading-[1] text-[24px] 2xl:text-[28px] 2xl:font-bold">
                        마르모 커피는 커피의 라인별 특성에 맞는 카테고리를
                        대리석별 텍스처와 이미지의 매칭을 통해 표현합니다.
                    </p>
                </div>
                <div className=" mr-[80px] mb-[60px] ml-[80px] min-w-[1257px] h-[2px] bg-[#DEDEDE]"></div>
            </div>
            <div className="arch w-full mb-[180px] h-[1018px] flex flex-col items-center justify-center">
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
                        <p className="text-[40px] 2xl:text-[54px] 2xl:font-bold leading-[1] thick font-extrabold">
                            SPECIALTY COFFEE
                        </p>
                        <p className="text-[24px] pt-[8px] leading-[1] font-bold text-[#D9D9D9]">
                            IN MARMO
                        </p>
                    </div>
                </div>
                <div className="mt-[60px] w-full flex flex-row gap-[16px] justify-center ">
                    <div className="flex w-1/2 flex-col ml-[80px] h-[555px] gap-[22px] justify-center items-center">
                        <p className="text-[24px] 2xl:text-[32px] font-bold">
                            ORIGINAL LINE
                        </p>
                        <div className="w-[540px] 2xl:w-[840px]   h-[4px] bg-[#2C2E35]"></div>
                        <div className="max-w-[840px] w-full  h-[482px] 2xl:h-[840px] flex flex-col items-center mt-[20px] rounded-lg  justify-center bg-white ">
                            <div className="flex flex-row  flex-1 justify-center gap-[32px] 2xl:gap-[50px]">
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
                                </div>
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
                            <div className="flex flex-row flex-1 justify-center gap-[32px] 2xl:gap-[50px]">
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
                                </div>
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
                        <p className="text-[24px] 2xl:text-[32px] font-bold">
                            PREMIUM LINE
                        </p>
                        <div className="w-[540px] 2xl:w-[840px] h-[2px] bg-[#2C2E35]"></div>
                        <div className="max-w-[840px] w-full  h-[482px] flex flex-col items-center rounded-lg mt-[20px] justify-center bg-white ">
                            <div className="flex flex-row  flex-1 justify-center gap-[32px] 2xl:gap-[50px]">
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
                                </div>
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
                            <div className="flex flex-row flex-1 justify-center gap-[32px] 2xl:gap-[50px]">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[20px] mr-[80px] ml-[80px] mb-[80px] min-w-[1257px] h-[2px] bg-[#D9D9D9]"></div>
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
            {/* <div className="w-screen h-[1.5px] mt-[15px] justify-self-center bg-gray-600"></div>
            <div className="flex flex-row mt-[35px] justify-center gap-[30px]">
                <div className="item relative flex mt-[25px] ml-[10px]  w-[550px] h-[500px] flex-col justify-center items-center group">
                    <Image
                        src="/assets/images/guatemala.png"
                        fill // 부모 요소에 가득 차게 함
                        alt="제품 사진"
                        className="object-fill"
                    />
                </div>
                <Link href={'/details'}>
                    <div className=" relative flex mt-[165px]  w-[230px] h-[450px] flex-col justify-center items-center group">
                        <div className="absolute flex flex-col items-center gap-[0px] leading-none top-25 click text-[#56bdb8] text-[85px] z-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[20px] transition-all duration-500">
                            <span>CLICK</span>
                            <span className="text-[36px] small text-[#56bdb8]">
                                for more detail!
                            </span>
                        </div>
                        <Image
                            src="/assets/images/items.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="제품 사진"
                            className="object-fill transition-transform duration-300 group-hover:scale-110 group-hover:opacity-60"
                        />
                    </div>
                </Link>
                <div className="item relative flex mt-[25px]  w-[550px] h-[500px] flex-col justify-center items-center group ">
                    <Image
                        src="/assets/images/ethiopia.png"
                        fill // 부모 요소에 가득 차게 함
                        alt="제품 사진"
                        className="object-fill"
                    />
                </div>
            </div> */}
        </>
    )
}

export default Items
