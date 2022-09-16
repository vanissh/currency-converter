import { Flex, Container } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

const About = () => {
    return (
        <Container maxW='100%'>
            <Flex m={5} borderRadius={10}
                alignItems='center'
                justifyContent='space-between'
                borderColor="blackAlpha.200"
                borderWidth={2}
                padding={10}
                maxW="30%"
            >
                Версия приложения: v1.0
                <InfoIcon />
            </Flex>
        </Container>
    )
}

export default About