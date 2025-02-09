import {useContext} from "react";
import {LanguageContext} from "../context";

const Translate = ({msg}) => {
    const languageContext = useContext(LanguageContext); //{lang, setLang, en, fr}
    const lang = languageContext[`${languageContext.lang}`];
    const translation = lang[`${msg}`];
    return `${translation??msg}`;
}

export default Translate;