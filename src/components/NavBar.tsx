import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} align="center" justify="start">
                    <Text
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        Currency Converter
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Text
                                p={2}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                <NavLink to={navItem.href}>{navItem.label}</NavLink>
                            </Text>
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

interface NavItem {
    label: string;
    href: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'О приложении',
        href: '/'
    },
    {
        label: 'Курс ЦБ',
        href: '/current',
    },
    {
        label: 'Конвертер по курсу ЦБ',
        href: '/converter',
    },
];
