import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps{
  continent: string;
  continentName: string;
  description: string;
}

export function Slide({ continent, continentName, description}: SlideProps){
  return (
    <Flex
    w="100%"
    h="100%"
    align="center"
    justify="center"
    direction="column"
    bgImage={`url(/sliders/${continent}.png)`}
    bgRepeat="no-repeat"
    bgSize="cover"
    textAlign="center"
    bgPosition="center"
  >
    <Link href={`/continent/${continent}`}>
      <a>
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          color="gray.100"
          fontWeight="700"
        >
          {continentName}
        </Heading>
        <Text
          fontSize={["0.8rem", "1xl", "2xl"]}
          color="gray.300"
          fontWeight="700"
          mt={[2, 4]}
        >
          {description}
        </Text>
      </a>
    </Link>
  </Flex>
  )
}