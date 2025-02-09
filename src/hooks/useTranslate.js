import {useContext} from "react";
import {LanguageContext} from "../context";

const useTranslate = () => {
    const languageContext = useContext(LanguageContext); //{lang, setLang, en, fr}


    const translate = (msg) => {
        const lang = languageContext[`${languageContext.lang}`];
        const translation = lang[`${msg}`];
        return `${translation??msg}`;
    }


    return {
        translate
    }
}

export default useTranslate;