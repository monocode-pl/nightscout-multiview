import {Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Image, Stack, Text} from "@chakra-ui/react";
import logo from './hello-logo.svg';

export function Welcome({onClose}) {
    return (
        <Container marginTop={'50px'}>
            <Card variant={'elevated'}>
                <CardHeader fontSize={'2xl'} fontWeight={600} paddingTop={{base: '80px', md: '110px'}}>
                    <Stack>
                        <Image src={logo} maxH={{base: '120px', md: '150px'}} position={'absolute'} top={{base: '-40px', md: '-50px'}} left={'50%'} transform={'translateX(-50%)'} ></Image>
                        <Box>Witaj w Generatorze Nightscout&nbsp;MultiView</Box>
                    </Stack>

                </CardHeader>
                <CardBody>
                    <Text mb={5}>
                        Używając Generatora możesz w prosty sposób stworzyć panel pozwalający jednocześnie monitorować wiele
                        osób.
                    </Text>
                    <Text mb={5}>
                        Określ ile osób ma być monitorowanych, a następnie podaj adres strony Nightscout dla każdej osoby.
                    </Text>
                    <Text mb={5}>
                        Generator stworzy plik z panelem, który można będzie pobrać na Twój komputer.
                    </Text>
                    <Text mb={5}>
                        Pobrany plik otwórz w dowolnej przeglądarce internetowej.
                    </Text>
                </CardBody>

                <CardFooter justifyContent={'center'}>
                    <Button size={'lg'}
                            colorScheme={'teal'}
                            onClick={onClose}>Zaczynamy</Button>
                </CardFooter>
            </Card>
        </Container>
    )
}