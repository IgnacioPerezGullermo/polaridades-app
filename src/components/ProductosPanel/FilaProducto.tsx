import {
    Box, Button, Table, TableCaption,
    TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr
} from "@chakra-ui/react";
import { type ReactNode } from 'react';
import { type createProductoInput } from "~/types";
import { api } from "~/utils/api";

interface FilaProductoProps{
    key: string| null,
    name: string| null,
    code: number| null,
    price: number| null,
    categoriasId: string,
    stock: number | null,
}


export const FilaProducto: React.FC<FilaProductoProps> = ({key, name, code, price, categoriasId, stock}) => {  
    
    const {data:Categoria} = api.categorias.getCategoria.useQuery(categoriasId)
    return (
        <>

                                    <Tr>
                                        <Td color={'white'}>{name}</Td>
                                        <Td color={'white'}>{code}</Td>
                                        <Td color={'white'}>{price}</Td>
                                        <Td color={'white'}>{Categoria?.name}</Td>
                                        <Td color={'white'}>{stock}</Td>
                                        <Td>
                                            <Button variant={'ghost'} _hover={{bg: 'red.500'}} color={'white'}>Editar</Button>
                                        </Td>
                                        <Td>
                                            <Button variant={'ghost'} _hover={{bg: 'red.500'}} color={'white'}>Eliminar</Button>
                                        </Td>
                                    </Tr>
        </>
    );
  };