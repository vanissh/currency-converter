import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    useColorModeValue
} from '@chakra-ui/react'
import { Error } from '../components/Error'
import { Loader } from '../components/Loader'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { useNavigate } from 'react-router-dom'
import { setCurrency } from '../slices/currencySlice'

const Current = () => {

    const navigate = useNavigate()
    const { loading, info } = useAppSelector(state => state.dataReducer)
    const linkHoverColor = useColorModeValue('purple.600', 'white');

    const dispatch = useAppDispatch()

    const getCurrencyChange = (...param: string[]) => {
        dispatch(setCurrency(param))
        navigate('/current/' + param[0])
    }

    return (
        <Container textAlign={['center', 'center']} maxW={'100%'} >

            {loading === 'loading' && <Loader />}
            {loading === 'error' && <Error />}
            {loading === 'idle' &&
                <TableContainer m={5} w='80%' borderRadius="10">
                    <Table>
                        <Thead backgroundColor="blackAlpha.200">
                            <Tr>
                                <Th p={5}>Валюта</Th>
                                <Th p={5}>Курс</Th>
                                <Th p={5}>Изменение</Th>
                                <Th p={5}>Код</Th>
                                <Th p={5}>Единицы</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {info?.map((item, j) => <Tr key={j} _hover={{ backgroundColor: "purple.100" }}>
                                {item.map((elem, i, arr) => {
                                    if (i === 2) {
                                        return <Td
                                            key={i}
                                            color={elem[0] === '+' ? 'green.500' : 'red.500'}
                                        >{elem}</Td>
                                    } else if (i === 0) {
                                        return <Td
                                            key={i}
                                            onClick={() => getCurrencyChange(arr[3].toLowerCase(), arr[0])}
                                            cursor="pointer"
                                            _hover={{
                                                textDecoration: 'none',
                                                color: linkHoverColor,
                                            }}
                                        >
                                            {elem}
                                        </Td>
                                    } else {
                                        return <Td key={i}>{elem}</Td>
                                    }
                                })}
                            </Tr>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            }
        </Container>
    )
}

export default Current