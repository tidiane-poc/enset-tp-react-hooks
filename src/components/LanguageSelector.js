import {LanguageContext} from "../App";
import {useContext} from "react";

const LanguageSelector = () => {
    const { lang, setLang } = useContext(LanguageContext);
    return <select value={lang} onChange={event => setLang(event.target.value)} className="form-select form-select-sm" style={{maxWidth:'100px'}}>
        <option value="fr" label={"Français"}/>
        <option value="en" label={"Anglais"}/>
    </select>
}

export default LanguageSelector;