import { Button, Flex, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { ContinentProps } from "../../pages/continent/[slug]";

export function Infos({continent}: ContinentProps){
  return (
    <Flex
      align="center"
      justify="space-between"
    >
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="500"
        >
          {continent.countries}
        </Heading>
        <Text
          fontWeight="600"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="500"
        >
          {continent.languages}
        </Heading>
        <Text
          fontWeight="600"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.400"
          fontWeight="500"
        >
          {continent.cities}
        </Heading>
        <Text
          fontWeight="600"
          fontSize={["md", "xl"]}
          color="gray.700"
        >
          cidades +100
          <Tooltip label={continent.cities_list} fontWeight="700" fontSize="lg" color="yellow.400" bg="gray.100" textAlign="justify">
            <span>
              <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px","16px"]} h={["10px","16px"]}/>
            </span>
          </Tooltip>
        </Text>
      </Flex>
      
    </Flex>
  )
}