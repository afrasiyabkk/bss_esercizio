import en from "../assets/en.json"
import it from "../assets/it.json"
import fr from "../assets/fr.json"

import VueI18n from "vue-i18n"
import Vue from "vue"

Vue.use(VueI18n)

export default new VueI18n({
    locale: localStorage.getItem("lang") || "en",
    messages: {
        en: en,
        it: it,
        fr: fr,
    }
})