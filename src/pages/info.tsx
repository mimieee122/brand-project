import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Info = () => {
    // const nameVariants = {
    //     hidden: { opacity: 0, x: -100 },
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //         transition: { duration: 1, delay: 0.5 },
    //     },
    // }
    return (
        <>
            {' '}
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
                    src="/assets/images/last.svg"
                    width={1415} // 원하는 비율로 width 지정
                    height={732} // height도 지정하여 비율을 맞추기
                    alt="로고 사진"
                    className="object-cover w-full h-full"
                />
            </div>
            {/* <div className="flex flex-row  justify-between">
                <div className="  flex flex-col mt-8 ml-5  items-start justify-start ">
                    <div className=" relative flex mb-[20px] flex-col gap-0 items-start w-[600px] h-[350px]">
                        <Image
                            src="/assets/images/coffee.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                </div>
                <div className="flex flex-col w-1/2 mt-10 mr-10 h-[600px] gap-[30px] items-center">
                    <div
                        className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]
                        
                    flex flex-col"
                    >
                        <div className="infos text-[35px] w-[650px] h-[100px] m-5 border-black  border-solid border-[0px] rounded-2xl flex flex-col items-center justify-center">
                            <span>MARMO</span>
                            <span>대표 김진표</span>
                        </div>
                        <div className=" w-[200px] h-[10px] flex flex-col relative text-[75px] text-[white] text-start">
                            <span className="absolute z-10 mt-[-30px]">
                                PROFILE
                            </span>
                        </div>
                    </div>
                    <div
                        className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]
                        
                    flex flex-col"
                    >
                        <div className="infos text-[35px] w-[650px] h-[100px] m-5 border-black  border-solid border-[0px] rounded-2xl flex flex-col items-center justify-center">
                            <span>대구광역시 중구 서성로4 1층 수페르바</span>
                        </div>{' '}
                        <div className=" w-[200px] h-[10px] flex flex-col relative text-[75px] text-[white] text-start">
                            <span className="absolute z-10 mt-[-30px]">
                                LOCATION
                            </span>
                        </div>
                    </div>
                    <div
                        className="profile rounded-2xl w-[700px] border-[1px] border-black border-solid h-[180px]
                        
                    flex flex-col"
                    >
                        <div className="infos text-[35px] w-[650px] h-[100px] m-5 border-black  border-solid border-[0px] rounded-2xl flex flex-col items-center justify-center">
                            <span>Superba1294@naver.com</span>
                            <span>010-6861-1294</span>
                        </div>{' '}
                        <div className=" w-[200px] h-[10px] flex flex-col relative text-[75px] text-[white] text-start">
                            <span className="absolute z-10 mt-[-30px]">
                                CONTACT
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Info
