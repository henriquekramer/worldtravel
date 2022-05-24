import { Flex, Grid, Icon, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header(){
  const { asPath } = useRouter()
  const notHome = asPath !== "/"

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

        {notHome && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 35]} justifySelf="start" />
            </a>
          </Link>
        )}

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