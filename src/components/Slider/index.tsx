import { Flex, Heading, Text } from "@chakra-ui/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Link from "next/link";
import { Slide } from "./Slide";


export function Slider() {
  return (
    <Flex w="100%" maxW="1240px" h={["250px", "450px"]} mb={[5, 10]} mx="auto">
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 4000}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        style={{width: '100%', flex:'1'}}
      >
        <SwiperSlide>
          <Slide continent="europe" continentName="Europa" description="O continente mais antigo."/>
        </SwiperSlide>

        <SwiperSlide>
          <Slide continent="asia" continentName="Asia" description="O maior continente."/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide continent="americadosul" continentName="América do Sul" description="O continente mais lindo."/>
        </SwiperSlide>

        <SwiperSlide>
          <Slide continent="africa" continentName="África" description="O continente mais incrível."/>
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}
