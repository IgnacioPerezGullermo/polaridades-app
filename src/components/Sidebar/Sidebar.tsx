import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { type Dispatch, type SetStateAction } from 'react';

interface SidebarProps{
    displaySet: Dispatch<SetStateAction<string>>
}

export const Sidebar: React.FC<SidebarProps> = ({ displaySet}) => {  
    return (
        <>
        <Box bg={'gray.800'} w={'22%'} pos={'absolute'} h={'full'} left={'0'}>
            <div className="flex flex-col items-center justify-between">
                <Heading color={'white'} textTransform={'uppercase'} mt={'5vh'}>
                    Logo
                </Heading>
                <VStack className="md:flex flex-col space-y-6 items-center mt-16">
                    <Button colorScheme={'red'} w={'14vw'} h={'7vh'} fontSize={'xl'} fontFamily={'body'} 
                        onClick={()=> {displaySet('Panel')}}>
                        Panel Principal
                    </Button>
                    <Button colorScheme={'red'} w={'14vw'} h={'7vh'} fontSize={'xl'} fontFamily={'body'} 
                        onClick={()=> {displaySet('Catalogo')}}>
                        Catalogo
                    </Button>
                    <Button colorScheme={'red'} w={'14vw'} h={'7vh'} fontSize={'xl'} fontFamily={'body'}
                    onClick={()=> {displaySet('Estadisticas')}}>
                        Estadisticas
                    </Button>
                    <Button colorScheme={'red'} w={'14vw'} h={'7vh'} fontSize={'xl'} fontFamily={'body'}
                    onClick={()=> {displaySet('Reservas')}}>
                        Reservas
                    </Button>
                </VStack>
                    <Link href='/'>
                        <Center>
                            <Button w={'8vw'} h={'6vh'} rounded={'full'} bg={'red.600'} color={'white'} pos={'absolute'} bottom={'5vh'}>
                                Cerrar Sesion
                            </Button>
                        </Center>
                    </Link>
            </div>
        </Box>
        </>
    );
  };