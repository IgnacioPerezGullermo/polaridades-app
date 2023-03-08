import { Box, Button, HStack } from "@chakra-ui/react";
import { type Dispatch, type SetStateAction } from "react";

interface PanelSelectorProps{
    panelSet: Dispatch<SetStateAction<string>>
}

export const PanelSelector: React.FC<PanelSelectorProps> = ({panelSet}) => {  

    return (
        <> 
                <Box w={'full'} h={'full'} p={3}>
                    <HStack spacing={'10'} pt={'8vh'}>
                        <Button 
                            w={'48%'} 
                            h={'60vh'} 
                            ml={'0.5vw'} 
                            color={'white'} 
                            bg={'gray.800'}
                            _hover={{bg: 'red.700'}}
                            fontSize={'5xl'}
                            onClick={()=>{panelSet('Categorias')}}
                        >
                            Categorias
                        </Button>
                        <Button 
                            w={'48%'} 
                            h={'60vh'} 
                            ml={'3vw'} 
                            color={'white'} 
                            bg={'gray.800'}
                            _hover={{bg: 'red.700'}}
                            fontSize={'5xl'}
                            onClick={()=>{panelSet('Productos')}}
                        >
                            Productos
                        </Button>
                    </HStack>
                </Box>
        </>
    );
  };