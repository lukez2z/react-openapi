import { i18n } from './i18n'
import { namespaces } from './i18n.constants'

type OptionsType = {
    value: number;
    label: string;
    locale: string;
}[]

export const i18nSelectOption = (options: OptionsType) => {
    let optionList = options
    optionList.map(item => item.label = i18n.t(`${item.locale}`, { ns: namespaces.common }))
    return optionList
}