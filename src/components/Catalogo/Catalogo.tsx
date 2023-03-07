import { Badge, Box, Button, Card, CardHeader, HStack, Spinner, Text, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "~/utils/api";
import { CategoriasPanel } from "../CategoriasPanel/CategoriaPanel";
import { ProductosPanel } from "../ProductosPanel/ProductosPanel";
import { PanelSelector } from "./PanelSelector";


export const Catalogo: React.FC = () => {  
    const {data:Mesas, isLoading, isError} = api.mesas.all.useQuery()
    const {isOpen, onClose, onOpen} = useDisclosure()
    const [panel, panelSet] = useState<string>('')

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
                p={'6'}
            >   
                {panel === "" ? (<PanelSelector panelSet={panelSet} />): null}
                {panel === 'Productos'? (<ProductosPanel panelSet={panelSet}/>) : null}      
                {panel === 'Categorias'? (<CategoriasPanel panelSet={panelSet}/>) : null}              
            </Box>
        </>
    );
  };