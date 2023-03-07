import {
    Box, Button, Center, FormLabel, HStack, Input, Select, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { createProductoInput } from "~/types";
import { api } from "~/utils/api";



export const CrearProducto: React.FC = () => {  
    const toast= useToast()
    const [productoNuevo, setProductoNuevo] = useState({
        code: 0,
        name: '',
        price: 0,
        categoriasId: '',
        stock: 0,
        description: '',
        thumbnail: '',
        image: '',
    });

    const trpc = api.useContext()
    
    const {mutate} = api.productos.create.useMutation({
        onSettled: async () =>{
            await trpc.productos.all.invalidate()
        }
    })

    return (
        <>
            <Box>
                        <form
                            onSubmit={(e)=>{
                                e.preventDefault()
                                const result = createProductoInput.safeParse(productoNuevo)
                                if(!result.success){
                                    result.error.errors.map((err)=>{
                                        toast({
                                            variant:'left-accent',
                                            title: 'Error',
                                            description: err.message,
                                            status: 'error',
                                            duration: 6000,
                                            isClosable: true,
                                          })
                                    }
                                    )
                                    return
                                }
                                mutate(productoNuevo)
                                toast({
                                    variant: 'left-accent',
                                    title: 'Success',
                                    description: 'Mesa creada con exito',
                                    status: 'success',
                                    duration: 4000,
                                })

                        }}>
                            <FormLabel color={'white'} fontSize={'lg'} mt={'4'}>Nombre</FormLabel>
                                <Input 
                                    variant={'outline'}
                                    focusBorderColor={'red.600'}
                                    type='text'
                                    color={'white'}
                                    size={'lg'}
                                    mb={'2'}
                                    name='name'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: e.target.value})
                                    }}
                                />
                            <FormLabel color={'white'} fontSize={'lg'} mt={'4'}>Descripcion</FormLabel>
                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    mb={'4'}
                                    max='8' 
                                    min='0'
                                    name='description'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: e.target.value})
                                    }}
                                    />
                            <HStack mb={'0'}>
                                <FormLabel color={'white'} fontSize={'lg'} w={'49%'} >Codigo</FormLabel>
                                <FormLabel color={'white'} fontSize={'lg'} w={'49%'} >Precio</FormLabel>
                            </HStack>
                            <HStack>
                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    w={'49%'}
                                    mb={'4'}
                                    mt={'4'}
                                    max='8'
                                    min='0'
                                    name='code'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: Number(e.target.value)})
                                    }}
                                    />

                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    w={'49%'}
                                    mb={'4'}
                                    max='8'
                                    min='0'
                                    name='price'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: Number(e.target.value)})
                                    }}
                                    />                                
                            </HStack>
                            <HStack mb={'0'}>
                                <FormLabel color={'white'} fontSize={'lg'} w={'49%'} >Categoria</FormLabel>
                                <FormLabel color={'white'} fontSize={'lg'} w={'49%'} >Imagen</FormLabel>
                            </HStack>
                            <HStack>
                                <Select 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    color={'white'}
                                    size={'lg'}
                                    w={'49%'}
                                    mb={'4'}
                                    mt={'4'}
                                    name='categoria'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: e.target.value})
                                    }}
                                    >
                                        <option>Selection una opcion</option>
                                    </Select>

                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    w={'49%'}
                                    mb={'4'}
                                    max='8'
                                    min='0'
                                    name='image'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: e.target.value})
                                    }}
                                    />                                
                            </HStack>
                            <HStack mb={'0'}>
                                <FormLabel color={'white'} fontSize={'lg'} w={'49%'} >Miniatura</FormLabel>
                                <FormLabel color={'white'} fontSize={'lg'} w={'49%'} >Stock</FormLabel>
                            </HStack>
                            <HStack>
                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    w={'49%'}
                                    mb={'4'}
                                    mt={'4'}
                                    max='8'
                                    min='0'
                                    name='thumbnail'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: e.target.value})
                                    }}
                                    />

                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    w={'49%'}
                                    mb={'4'}
                                    max='8'
                                    min='0'
                                    name='stock'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: Number(e.target.value)})
                                    }}
                                    />                                
                            </HStack>
                        <Center w={'full'} mb={'2'} mt={'2'}>
                            <Button colorScheme={'red'} w={'full'} size={'lg'} type='submit'>
                                Crear nueva mesa
                            </Button>
                        </Center>
                    </form>

            </Box>
        </>
    );
  };