import {Button, Image, Stack} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {LANGUAGES} from "./i18n";

export function LanguageSelector() {
    const {i18n} = useTranslation()

    function changeLanguage(code) {
        return () => i18n.changeLanguage(code);
    }

    return (
        <Stack direction='row'>
            {LANGUAGES.map(lang => (
                <Button size={'sm'}
                        variant='ghost'
                        isActive={i18n.resolvedLanguage === lang.code}
                        onClick={changeLanguage(lang.code)}
                        key={lang.code}>
                    <Flag code={lang.flag} w='32px'></Flag>
                </Button>
            ))}
        </Stack>
    )
}

function Flag({code, w}) {
    return (
        <Image src={`https://flagcdn.com/${code.toLowerCase()}.svg`} w={w}></Image>
        // <Image src={`https://flagsapi.com/${code}/flat/32.png`}></Image>
    )
}