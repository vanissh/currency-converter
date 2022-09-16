import { Container, Flex, Text, Input, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hook'

const Converter = () => {

    const { info } = useAppSelector(state => state.dataReducer)

    const [inValue, setInValue] = useState<number>(0)
    const [outValue, setOutValue] = useState<number>(0)
    const [userValue, setUserValue] = useState<number | string>('')
    const [result, setResult] = useState<number>(0)

    useEffect(() => {
        if (info.length) {
            setInValue(+info[0][1])
            setOutValue(+info[0][1])
        }
    }, [info])

    useEffect(() => {
        toConvert()
    }, [userValue, inValue, outValue])


    const toConvert = () => {
        if (userValue && outValue && inValue) {
            let result = (inValue / outValue) * +userValue
            setResult(+result.toFixed(3))
        }
    }

    return (
        <Container m={10}>
            <Flex >
                {info[0] &&
                    <>
                        <InputGroup mr={5} ml={5}>
                            <InputLeftAddon h={50} w={100} bgColor='blackAlpha.200' p={0}>
                                <Select defaultValue={inValue} _hover={{ outline: 'none', cursor: 'pointer' }}>
                                    {options(info, setInValue)}
                                </Select>
                            </InputLeftAddon>
                            <Input
                                type="number"
                                w={300}
                                h={50}
                                value={userValue}
                                onChange={e => setUserValue(e.target.value)}
                            />
                        </InputGroup>
                        <Text w={70} display='flex'
                            justifyContent='center'
                            alignItems='center'
                            fontSize='25px'
                            cursor='pointer'
                            transition='0.3s all'
                            _hover={{
                                color: 'blackAlpha.400'
                            }}
                        >
                            &#8596;
                        </Text>
                        <InputGroup mr={5} ml={5}>
                            <InputLeftAddon h={50} w={100} bgColor='blackAlpha.200' p={0}>
                                <Select defaultValue={outValue} _hover={{ outline: 'none', cursor: 'pointer' }}>
                                    {options(info, setOutValue)}
                                </Select>
                            </InputLeftAddon>
                            <Input
                                type="number"
                                w={300}
                                h={50}
                                value={result}
                                isReadOnly
                            />
                        </InputGroup>
                    </>}
            </Flex>
        </Container>
    )
}

export default Converter

const options = (data: string[][], setValue: Function) => {
    return (
        data.map(item =>
            <option
                value={item[1]}
                key={item[3]}
                label={item[3]}
                onClick={() => setValue(item[1])}
            />
        )
    )
}