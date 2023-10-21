import {
    Box,
    Button,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text
} from "@chakra-ui/react";
import logo from './hello-logo.svg';

export function HelloModal({onClose}) {
    return (
        <Modal isOpen={true} onClose={onClose} className='HelloModal' isCentered={true} size={'lg'}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader fontSize={'2xl'} paddingTop={{base: '80px', md: '110px'}}>
                    <Stack>
                        <Image src={logo} maxH={{base: '120px', md: '150px'}} position={'absolute'} top={{base: '-40px', md: '-50px'}} left={'50%'} transform={'translateX(-50%)'} ></Image>
                        <Box>Witaj w Generatorze Nightscout&nbsp;MultiView</Box>
                    </Stack>

                </ModalHeader>
                <ModalBody>
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
                </ModalBody>

                <ModalFooter justifyContent={'center'}>
                    <Button size={'lg'}
                            colorScheme={'teal'} onClick={onClose}>Zaczynamy</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}