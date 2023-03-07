import { Box, Button, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";


// import { AuthShowcase } from "~/components/AuthShowcase";
// import { api } from "~/utils/api";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Polaridades Menu App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgGradient='linear(to-b, red.600, gray.900)' w={'full'} h={'100vh'} py={"72"}>
        <Flex direction={'column'}>
          <Center>
            <VStack>
              <Heading textTransform={'uppercase'} color={'white'} fontSize={'5xl'} mb={'5'} letterSpacing={'wider'}>
                Polarides Menu App
              </Heading> 
              <Link href='/overview'>
                <Button variant={'solid'} colorScheme={'blackAlpha'} size={'lg'} w={'10vw'} h={'8vh'} fontSize={'2xl'}>
                  Ingresa
                </Button>     
              </Link>
            </VStack>
          </Center>
        </Flex>
      </Box>
    </>
  );
};

export default Home;


