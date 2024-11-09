import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Brand = () => {
    return (
        <>
            <div className="flex flex-row w-screen justify-between font-bold mt-[19px]">
                <div>
                    <Link href={'/'}>
                        <button className="text-[#544C4C] bar1 ml-[15px] text-[35px]">
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
            <div className="mt-[20px]">
                <div className="flex flex-row justify-start ml-[15px]  gap-[30px]">
                    <div className=" relative flex flex-col gap-0 items-start w-[1000px] h-[250px]">
                        <Image
                            src="/assets/images/gray.png"
                            fill // 부모 요소에 가득 차게 함
                            alt="회색 이미지"
                            className="object-fill "
                        />
                    </div>
                    <div className="flex flex-col items-end mt-[110px] gap-[10px] mr-[15px]  text-left text-[90px]">
                        <span className="name1  text-[#544C4C]  text-[30px]">
                            THE PROJECT :{' '}
                        </span>
                        <div className="flex flex-col name2 leading-none gap-[0px] text-[#544C4C] ">
                            <span className="p-0">MARMO</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-[70px] justify-center brandExplain text-[25px] text-black">
                    <span>
                        MÁRMO는 커피의 예술성과 품격을 일상 속에서 누구나 쉽게
                        경험할 수 있도록 탄생한 브랜드입니다.
                    </span>
                    <div className="flex flex-col items-center mt-[40px] mb-[40px] gap-[5px]">
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
                    <span>
                        대리석처럼 영구적이며 변치 않는 가치를 담아, 당신의 일상
                        속 눈부신 순간을 선사하겠습니다.
                    </span>
                </div>
                <div className=" relative flex flex-col w-max-[1000px] mt-[30px] gap-0 items-start mr-[15px] ml-[15px] h-[20px]">
                    <Image
                        src="/assets/images/gray.png"
                        fill // 부모 요소에 가득 차게 함
                        alt="회색 이미지"
                        className="object-fill"
                    />
                </div>
            </div>
        </>
    )
}

export default Brand
