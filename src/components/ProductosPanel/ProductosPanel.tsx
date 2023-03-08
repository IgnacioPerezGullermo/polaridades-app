import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap } from "@chakra-ui/react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { api } from "~/utils/api";
import { CrearProducto } from "./CrearProducto";
import { ProductosList } from "./ProductosList";

interface ProductosPanelProps{
    panelSet: Dispatch<SetStateAction<string>>
}

export const ProductosPanel: React.FC<ProductosPanelProps> = ({panelSet}) => {  

    return (
        <>
            <Box 
                w={'full'} 
                h={'99%'} 
                pos={'absolute'} 
                top={'0'} 
                right={'0'} 
                rounded={'md'} 
                px={6}
                mt={2}
            >   
                        <Tabs w={'100%'} variant={'soft-rounded'} colorScheme={'red'} isLazy={true}>
                            <TabList w={'100%'} >
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'}  _selected={{bg:'red.600', color:'white'}}>Lista de Productos</Tab>
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'} _selected={{bg:'red.600', color:'white'}}>Crear Producto</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <ProductosList/>
                                </TabPanel>
                                <TabPanel>
                                    <CrearProducto/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>       
                <Button pos={'absolute'} bottom={'13.8vh'} right={'20'} colorScheme={'red'} size={'lg'} w={'42%'} onClick={()=>{panelSet('')}}>Regresar</Button>    
            </Box>
        </>
    );
  };