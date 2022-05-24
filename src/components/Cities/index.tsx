import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function Cities(){
  return(
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10" >Cidades +100</Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City cityImage="londres" city="Londres" countryName="Reino Unido" countryFlag="reinounido"/>
        <City cityImage="paris" city="Paris" countryName="França" countryFlag="frança"/>
        <City cityImage="roma" city="Roma" countryName="Itália" countryFlag="italia"/>
        <City cityImage="praga" city="Praga" countryName="República Tcheca" countryFlag="reptcheca"/>
        <City cityImage="amsterda" city="Amsterdã" countryName="Holanda" countryFlag="holanda"/>
      </Grid>
    </>
  )
}