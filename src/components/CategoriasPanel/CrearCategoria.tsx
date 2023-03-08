import {
    Box, Button, Center, FormLabel, HStack, Input, Select, useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { createCategoryInput } from "~/types";
import { api } from "~/utils/api";



export const CrearCategoria: React.FC = () => {  
    const toast= useToast()
    const [CategoriaNueva, setCategoriaNueva] = useState({
        name: '',
        description: '',
        thumbnail: '',
    });

    const trpc = api.useContext()
    
    const {mutate} = api.categorias.create.useMutation({
        onSettled: async () =>{
            await trpc.categorias.all.invalidate()
        }
    })

    return (
        <>
            <Box bg={'gray.800'} p={6} rounded={'base'}>
                        <form
                            onSubmit={(e)=>{
                                e.preventDefault()
                                const result = createCategoryInput.safeParse(CategoriaNueva)
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
                                mutate(CategoriaNueva)
                                toast({
                                    variant: 'left-accent',
                                    title: 'Success',
                                    description: 'Mesa creada con exito',
                                    status: 'success',
                                    duration: 4000,
                                })
                                setCategoriaNueva({
                                    name: '',
                                    description: '',
                                    thumbnail: '',
                                })
                                

                        }}>
                            <FormLabel color={'white'} fontSize={'lg'} mt={'4'}>Nombre</FormLabel>
                                <Input 
                                    variant={'outline'}
                                    focusBorderColor={'red.600'}
                                    type='text'
                                    value={CategoriaNueva.name}
                                    color={'white'}
                                    size={'lg'}
                                    mb={'2'}
                                    name='name'
                                    onChange={(e)=>{
                                        setCategoriaNueva({...CategoriaNueva, [e.target.name]: e.target.value})
                                    }}
                                />
                            <FormLabel color={'white'} fontSize={'lg'} mt={'4'}>Descripcion</FormLabel>
                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type={'text'}
                                    value={CategoriaNueva.description}
                                    color={'white'}
                                    size={'lg'}
                                    mb={'4'}
                                    name='description'
                                    onChange={(e)=>{
                                        setCategoriaNueva({...CategoriaNueva, [e.target.name]: e.target.value})
                                    }}
                                    />
                                <FormLabel color={'white'} fontSize={'lg'} w={'49%'} >Miniatura</FormLabel>
                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type={'text'}
                                    value={CategoriaNueva.thumbnail}
                                    color={'white'}
                                    size={'lg'}
                                    mb={'4'}
                                    mt={'4'}
                                    name='thumbnail'
                                    onChange={(e)=>{
                                        setCategoriaNueva({...CategoriaNueva, [e.target.name]: e.target.value})
                                    }}
                                    />
                        <Center w={'full'} mb={'2'} mt={'2'}>
                            <Button colorScheme={'red'} w={'full'} size={'lg'} type='submit'>
                                Crear nueva categoria
                            </Button>
                        </Center>
                    </form>

            </Box>
        </>
    );
  };