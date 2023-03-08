import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap } from "@chakra-ui/react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { api } from "~/utils/api";
import { CategoriasList } from "./CategoriasList";
import { CrearCategoria } from "./CrearCategoria";

interface CategoriasPanelProps{
    panelSet: Dispatch<SetStateAction<string>>
}

export const CategoriasPanel: React.FC<CategoriasPanelProps> = ({panelSet}) => {  

    return (
        <>
            <Box 
                w={'full'} 
                h={'full'} 
                pos={'absolute'} 
                top={'0'} 
                right={'0'} 
                rounded={'md'} 
                p={6}
            >   
                        <Tabs w={'100%'} variant={'soft-rounded'} colorScheme={'red'} >
                            <TabList w={'100%'} >
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'}  _selected={{bg:'red.600', color:'white'}}>Lista de Categorias</Tab>
                                <Tab w={'50%'} fontSize={'2xl'} color={'white'} _selected={{bg:'red.600', color:'white'}}>Crear Categoria</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <CategoriasList/>
                                </TabPanel>
                                <TabPanel>
                                    <CrearCategoria/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>       

                <Button pos={'absolute'} bottom={'3'} right={'3'} colorScheme={'red'} size={'lg'} onClick={()=>{panelSet('')}}>Regresar</Button>    
            </Box>
        </>
    );
  };