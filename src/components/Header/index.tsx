import { Flex, Grid, Image } from '@chakra-ui/react'

export function Header(){
  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "100px"]}
      px="1rem"
      bg="white"
      mx="auto"
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        w="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          src="/logo.svg"
          alt="logomarca avião voando sobre a palavra wordtrip"
          w={["81px", "184px"]}
          justifySelf="center" 
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}