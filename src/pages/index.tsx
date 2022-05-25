import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Caracteristicas } from "../components/Caracteristicas";
import { Header } from "../components/Header";
import { Separador } from "../components/Separador";
import { Slider } from "../components/Slider";
import { getPrismicClient } from "../services/prismic";

export interface ContinentProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({ continents }: ContinentProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Header />
      <Banner />
      <Caracteristicas />
      <Separador />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={[5, 14]}
        fontSize={["lg",
        "3xl",
        "4xl"]}
      >
        Vamos nessa? <br/> Então escolha seu continente
      </Heading>

      <Slider continents={continents}/>

    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const continentsResponse = await prismic.getByType('continent');

  const continents = continentsResponse.results.map(continent =>{
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.sliderimage.url
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 1800, //30 minutos
  } 
}
