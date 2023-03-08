import {
    Box, Button, Table, TableCaption,
    TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr
} from "@chakra-ui/react";
import { api } from "~/utils/api";


export const CategoriasList: React.FC = () => {  
    const {data:Categorias, isLoading, isError} = api.categorias.all.useQuery()
    


    return (
        <>
            <Box bg={'gray.800'} w={'full'} h={'full'} rounded={'md'} p={'6'}>
            <TableContainer w={'full'}>
                <Table variant='simple'>
                        <Thead bg={'red.600'} >
                            <Tr >
                                <Th color={'white'}>Nombre</Th>
                                <Th color={'white'}>Descripcion</Th>
                                <Th color={'white'}>Editar</Th>
                                <Th color={'white'}>Eliminar</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Categorias?.map((cat)=>{
                                return (
                                    <Tr key={cat.id}>
                                        <Td color={'white'}>{cat.name}</Td>
                                        <Td color={'white'}>{cat.description}</Td>
                                        <Td>
                                            <Button variant={'ghost'} _hover={{bg: 'red.500'}} color={'white'}>Editar</Button>
                                        </Td>
                                        <Td>
                                            <Button variant={'ghost'} _hover={{bg: 'red.500'}} color={'white'}>Eliminar</Button>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
  };