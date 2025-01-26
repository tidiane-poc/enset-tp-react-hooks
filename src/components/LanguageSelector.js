import {LanguageContext, ThemeContext} from "../App";
import {useContext} from "react";

const LanguageSelector = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { isDarkTheme } = useContext(ThemeContext);
    return <select value={lang} onChange={event => setLang(event.target.value)}
                   className={`form-select form-select-sm ${
                       isDarkTheme
                           ? 'bg-dark text-light border border-light'
                           : 'bg-light text-dark border border-dark'
                   }`} style={{maxWidth:'100px'}}>
        <option value="fr" label={"Français"}/>
        <option value="en" label={"Anglais"}/>
    </select>
}

export default LanguageSelector;