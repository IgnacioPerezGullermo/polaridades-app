import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap } from "@chakra-ui/react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { api } from "~/utils/api";
import { CrearCategoria } from "./CrearCategoria";

interface CategoriasPanelProps{
    panelSet: Dispatch<SetStateAction<string>>
}

export const CategoriasPanel: React.FC<CategoriasPanelProps> = ({panelSet}) => {  

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
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'}  _selected={{bg:'red.600', color:'white'}}>Lista de Categorias</Tab>
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'} _selected={{bg:'red.600', color:'white'}}>Crear Categoria</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                <p>one!</p>
                                </TabPanel>
                                <TabPanel>
                                    <CrearCategoria/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>       
                    </Wrap>

                <Button pos={'absolute'} bottom={'0'} right={'0'} colorScheme={'red'} size={'lg'} onClick={()=>{panelSet('')}}>Regresar</Button>    
            </Box>
        </>
    );
  };