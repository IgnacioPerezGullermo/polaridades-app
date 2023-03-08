import {
    Box, Button, Table, TableCaption,
    TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr
} from "@chakra-ui/react";
import { type ReactNode } from 'react';
import { api } from "~/utils/api";
import { FilaProducto } from "./FilaProducto";


export const ProductosList: React.FC = () => {  
    const {data:Productos, isLoading, isError} = api.productos.all.useQuery()


    return (
        <>
            <Box bg={'gray.800'} w={'full'} h={'full'} rounded={'md'} p={'6'}>
            <TableContainer w={'full'}>
                <Table variant='simple'>
                        <Thead bg={'red.600'} >
                            <Tr >
                                <Th color={'white'}>Nombre</Th>
                                <Th color={'white'}>Codigo</Th>
                                <Th color={'white'}>Precio</Th>
                                <Th color={'white'}>Categoria</Th>
                                <Th color={'white'}>Stock</Th>
                                <Th color={'white'}>Editar</Th>
                                <Th color={'white'}>Eliminar</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Productos?.map((prod)=>{
                                return (
                                    <FilaProducto key={prod.id} name={prod.name} code={prod.code} price={prod.price} categoriasId={prod.categoriasId} stock={prod.stock} />
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
  };