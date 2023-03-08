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
        stock : 0,
        description: '',
        thumbnail: '',
        image: '',
    });

    const trpc = api.useContext()
    
    const {data:Categorias} = api.categorias.all.useQuery()
    const {mutate} = api.productos.create.useMutation({
        onSettled: async () =>{
            await trpc.productos.all.invalidate()
        }
    })

    return (
        <>
            <Box bg={'gray.800'} h={'full'} px={6} py={2} rounded={'base'}>
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
                                    size={'md'}
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
                                    color={'white'}
                                    size={'md'}
                                    mb={'4'}
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
                                    size={'md'}
                                    w={'49%'}
                                    mb={'4'}
                                    mt={'4'}
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
                                    size={'md'}
                                    w={'49%'}
                                    mb={'4'}
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
                                    size={'md'}
                                    w={'49%'}
                                    mb={'4'}
                                    mt={'4'}
                                    name='categoriasId'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: e.target.value})
                                    }}
                                    >
                                        <option className='text-black'>Selection una opcion</option>
                                        {Categorias?.map((cat)=>{
                                            return (
                                                <option className='text-black' key={cat.id} value={cat.id}>{cat.name}</option>
                                            )
                                        })
                                        }
                                    </Select>

                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='text' 
                                    color={'white'}
                                    size={'md'}
                                    w={'49%'}
                                    mb={'4'}
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
                                    color={'white'}
                                    size={'md'}
                                    w={'49%'}
                                    mb={'4'}
                                    mt={'4'}
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
                                    size={'md'}
                                    w={'49%'}
                                    mb={'4'}
                                    min='0'
                                    name='stock'
                                    onChange={(e)=>{
                                        setProductoNuevo({...productoNuevo, [e.target.name]: Number(e.target.value)})
                                    }}
                                    />                                
                            </HStack>
                            <Button colorScheme={'red'} size={'lg'} w={'50%'} type='submit'>
                                Crear nuevo producto
                            </Button>
                    </form>

            </Box>
        </>
    );
  };