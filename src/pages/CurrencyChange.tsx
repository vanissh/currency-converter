import { useEffect } from 'react'
import { fetchCurrency } from '../slices/currencySlice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { useParams } from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    Text,
    Flex
} from '@chakra-ui/react'
import { Error } from '../components/Error'
import { Loader } from '../components/Loader'
import LineChart from '../components/LineChart';

const CurrencyChange = () => {

    const dispatch = useAppDispatch()
    const { info, loading, code, name } = useAppSelector(state => state.currencyReducer)
    let { id } = useParams();

    useEffect(() => {
        code ?
            dispatch(fetchCurrency(code))
            :
            dispatch(fetchCurrency(id!))
    }, [])

    return (
        <Container textAlign={['center', 'center']} maxW={'100%'} >
            <Text m={5} fontSize='2xl'>{name}</Text>
            {loading === 'loading' && <Loader />}
            {loading === 'error' && <Error />}
            {loading === 'idle' &&
                <Flex>
                    <TableContainer w='35%' borderRadius="10" mr={10} ml={10}>
                        <Table>
                            <Thead backgroundColor="blackAlpha.200">
                                <Tr>
                                    <Th p={5}>Дата</Th>
                                    <Th p={5}>Курс</Th>
                                    <Th p={5}>Изменение</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {info?.map((item, j) => <Tr key={j} _hover={{ backgroundColor: "purple.100" }}>
                                    {item.map((elem, i) => {
                                        if (i === 2) {
                                            return <Td
                                                key={i}
                                                color={elem[0] === '+' ? 'green.500' : 'red.500'}
                                            >{elem || 0}</Td>
                                        } else if (i === 0) {
                                            return <Td key={i} fontWeight="bold">{elem}</Td>
                                        } else {
                                            return <Td key={i}>{elem}</Td>
                                        }
                                    })}
                                </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <div style={{ width: 600, height: 400 }}>
                        <LineChart chartData={info} />
                    </div>
                </Flex>
            }
        </Container>
    )
}

export default CurrencyChange