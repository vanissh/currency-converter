import { Spinner } from '@chakra-ui/react'

export const Loader = () => {
    return (
        <Spinner
            mt={10}
            thickness='2px'
            speed='0.8s'
            emptyColor='gray.200'
            color='black.200'
            size='xl'
        />
    )
}