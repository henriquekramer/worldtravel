import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url(/banner.png)"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      <Flex
        w="100%"
        mx="auto"
        maxW="1240px"
        justify={["center","space-between"]}
        align="center"
        px={["4"]}
      >
        <div>
          <Heading
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
            color="gray.100"
            fontWeight="500"
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            fontSize={["xs", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </div>

        <Image 
          src="/airplane.png"
          alt="avião amarelo voando"
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          transform="translateY(48px)"
          ml="8"
        />

      </Flex>
    </Flex>
  )
}