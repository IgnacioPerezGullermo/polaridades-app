import { Badge, Box, Button, Card, CardHeader, HStack, Spinner, Text, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { api } from "~/utils/api";
import { CrearMesa } from "./CrearMesa";


export const PanelMesas: React.FC = () => {  
    const {data:Mesas, isLoading, isError} = api.mesas.all.useQuery()
    const {isOpen, onClose, onOpen} = useDisclosure()


    return (
        <>
            <Box bg={'gray.800'} w={'74%'} h={'88%'} pos={'absolute'} top={'6vh'} right={'4vw'} rounded={'md'} p={'6'}>
                {isLoading ? (
                    <Spinner  
                        pos={"absolute"}
                        top={'50%'}
                        left={'50%'}
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='red.500'
                        size='xl'
                    /> 
                    ) : (
                    <Wrap bg={'gray.600'} w={'full'} h={'full'} spacing={'5'} p={3}>
                        {Mesas?.map((mesa)=>{
                            return (
                                <WrapItem key={mesa.id} w={'11vw'}>
                                    <Card w={'100%'} h={'auto'} p={3} bg={'gray.800'}>
                                        <CardHeader>
                                            <HStack justifyContent={'space-between'}>
                                                <Text fontSize={'xl'} color={'red.600'} textTransform={'uppercase'}>{mesa.name}</Text>
                                                <Badge variant={'solid'} colorScheme={mesa.closed === false ? 'green' : 'red'}>
                                                    {mesa.closed === false ? 'Libre' : 'Ocupada'}
                                                </Badge>
                                            </HStack>
                                        </CardHeader>
                                        <Button colorScheme={'red'} color={'black'}>{mesa.closed === false ? 'Agregar pedido' : 'Detalle de mesa'}</Button>
                                    </Card>
                                </WrapItem>
                            )
                        })}
                        <Button 
                            pos={'absolute'} 
                            colorScheme={'red'} 
                            rounded={'full'} 
                            w={'14'} 
                            h={'14'} 
                            fontSize={'5xl'} 
                            bottom={'7'} 
                            right={'7'}
                            onClick={onOpen}>
                                +
                        </Button>
                    </Wrap>
                )}
                <CrearMesa isOpen={isOpen} onClose={onClose}/>
            </Box>
        </>
    );
  };