import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap } from "@chakra-ui/react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { api } from "~/utils/api";
import { CrearProducto } from "./CrearProducto";

interface ProductosPanelProps{
    panelSet: Dispatch<SetStateAction<string>>
}

export const ProductosPanel: React.FC<ProductosPanelProps> = ({panelSet}) => {  

    return (
        <>
            <Box 
                bg={'gray.800'} 
                w={'74%'} 
                h={'88%'} 
                pos={'absolute'} 
                top={'6vh'} 
                right={'4vw'} 
                rounded={'md'} 
            >   
                    <Wrap bg={'gray.600'} w={'69vw'} h={'82vh'} position={'absolute'} left={'-13vw'} top={'-3vh'} spacing={'5'}  rounded={'md'}>
                        <Tabs w={'100%'} variant={'soft-rounded'} colorScheme={'red'} >
                            <TabList w={'100%'} >
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'}  _selected={{bg:'red.600', color:'white'}}>Lista de Productos</Tab>
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'} _selected={{bg:'red.600', color:'white'}}>Crear Producto</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                <p>one!</p>
                                </TabPanel>
                                <TabPanel>
                                    <CrearProducto/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>       
                    </Wrap>

                <Button pos={'absolute'} bottom={'0'} right={'0'} colorScheme={'red'} size={'lg'} onClick={()=>{panelSet('')}}>Regresar</Button>    
            </Box>
        </>
    );
  };