import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

interface CityProps {
  cityImage: string;
  city: string;
  countryName: string;
  countryFlag: string;
}

export function City({ cityImage, city, countryName, countryFlag }: CityProps) {
  return (
    <Box>
      <Image src={`/cities/${cityImage}.png`} w="100%" h="170px"/>
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">{city}</Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{countryName}</Text>
        </Flex>
        <Image src={`/flags/${countryFlag}.png`} w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
      </Flex>
    </Box>
  )
}