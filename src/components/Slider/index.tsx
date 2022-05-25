import { Flex, Heading, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";

import { ContinentProps } from "../../pages";

export function Slider({ continents }: ContinentProps) {
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
        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.image}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">{continent.title}</Heading>
                  <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>{continent.summary}</Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
