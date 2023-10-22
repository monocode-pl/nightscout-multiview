import {Box, Button, Card, CardBody, CardFooter, Container, Heading, Image, Link, Text} from "@chakra-ui/react";
import logo from './hello-logo.svg';
import {useTranslation} from "react-i18next";
import {LanguageSelector} from "./LanguageSelector";

export function Welcome({onClose}) {
    const {t} = useTranslation();

    return (
        <>
            <Box position={'absolute'} top='0' right='0' padding='2'>
                <LanguageSelector></LanguageSelector>
            </Box>

            <Container position='relative' top='50px'>
                <Card variant={'elevated'}>
                    <Box paddingTop={{base: '80px', md: '110px'}}>
                        <Image src={logo} maxH={{base: '120px', md: '150px'}} position={'absolute'} top={{base: '-40px', md: '-50px'}} left={'50%'} transform={'translateX(-50%)'} ></Image>
                    </Box>
                    <CardBody>
                        <Heading as='h1' fontSize='1.5em' mb='5'>{t('Welcome to Nightscout Multivew Generator')}</Heading>
                        <Text mb={5}>
                            {t('Using the Generator you can easily create a panel allowing for simultaneus monitoring of multiple people.')}
                        </Text>
                        <Text mb={5}>
                            {t('Specify how many people you want to monitor, and provide a Nightscout page address for each person.')}
                        </Text>
                        <Text mb={5}>
                            {t('The Generator will create a file with the panel which you can download on your computer.')}
                        </Text>
                        <Text>
                            {t('Open the downloaded file in any internet browser.')}
                        </Text>
                    </CardBody>

                    <CardFooter justifyContent={'center'}>
                        <Button size={'lg'}
                                colorScheme={'teal'}
                                onClick={onClose}>
                            {t('Let\'s begin')}
                        </Button>
                    </CardFooter>
                </Card>
                <Box fontSize='xs'
                     color='gray.500'
                     textAlign='center' mt='8'>
                    <Text mb={{base: 2, sm: 0}}>
                        {t('Created by MONOCODE Paweł Smoleński for Technologie diabetyka under MIT license.')}
                    </Text>
                    <Text>
                        {t('You want to help translating this page? Get in touch with us: ')} <Link href={"mailto://admin@techdiab.pl"}>admin@techdiab.pl</Link>
                    </Text>
                </Box>
            </Container>
        </>


    )
}