import {
    Button, Center, FormLabel, Input, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useToast, type UseModalProps
} from "@chakra-ui/react";
import { useState } from "react";
import { createMesaInput } from "~/types";
import { api } from "~/utils/api";



export const CrearMesa: React.FC<UseModalProps> = ({onClose, isOpen}) => {  
    const toast= useToast()
    const [mesaNueva, setMesaNueva] = useState({
        name: '',
        clients: 0,
        currentClients: 0,
    });

    const trpc = api.useContext()
    
    const {mutate} = api.mesas.create.useMutation({
        onSettled: async () =>{
            await trpc.mesas.all.invalidate()
        }
    })

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                <ModalOverlay/>
                <ModalContent bg={'gray.800'}>
                    <ModalHeader color={'red.600'} textAlign={'center'} fontSize={'3xl'}>Crear Mesa</ModalHeader>
                    <ModalCloseButton bg={'red.600'} color={'white'} mt={3}/>
                    <ModalBody>
                        <form
                            onSubmit={(e)=>{
                                e.preventDefault()
                                const result = createMesaInput.safeParse(mesaNueva)
                                console.log(typeof(mesaNueva.currentClients))
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
                                mutate(mesaNueva)
                                toast({
                                    variant: 'left-accent',
                                    title: 'Success',
                                    description: 'Mesa creada con exito',
                                    status: 'success',
                                    duration: 4000,
                                })
                                onClose()
                        }}>
                            <FormLabel color={'white'} fontSize={'lg'}>Nombre</FormLabel>
                                <Input 
                                    variant={'outline'}
                                    focusBorderColor={'red.600'}
                                    type='text'
                                    color={'white'}
                                    size={'lg'}
                                    mb={'4'}
                                    name='name'
                                    onChange={(e)=>{
                                        setMesaNueva({...mesaNueva, [e.target.name]: e.target.value})
                                    }}
                                />
                            <FormLabel color={'white'} fontSize={'lg'}>Capacidad de la mesa</FormLabel>
                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    mb={'4'}
                                    max='8' 
                                    min='0'
                                    name='clients'
                                    onChange={(e)=>{
                                        setMesaNueva({...mesaNueva, [e.target.name]: Number(e.target.value)})
                                    }}
                                    />
                            <FormLabel color={'white'} fontSize={'lg'}>Comensales actuales</FormLabel>
                                <Input 
                                    variant={'outline'} 
                                    focusBorderColor={'red.600'}
                                    type='number' 
                                    color={'white'}
                                    size={'lg'}
                                    mb={'4'}
                                    max='8'
                                    min='0'
                                    name='currentClients'
                                    onChange={(e)=>{
                                        setMesaNueva({...mesaNueva, [e.target.name]: Number(e.target.value)})
                                    }}
                                    />
                        <Center w={'full'} mb={'2'} mt={'2'}>
                            <Button colorScheme={'red'} w={'full'} size={'lg'} type='submit'>
                                Crear nueva mesa
                            </Button>
                        </Center>
                    </form>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    );
  };