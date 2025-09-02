import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

export type SelectOption = { id: number | string; value: number | string }

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: SelectOption[]
    onChangeOption?: (option: number | string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions = (options ?? []).map((o) => (
        <option
            id={'hw7-option-' + o.id}
            className={s.option}
            key={o.id}
            value={o.id}
        >
            {o.value}
        </option>
    ))

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e) // пробрасываем DOM-событие
        const raw = e.currentTarget.value
        const num = Number(raw)
        onChangeOption?.(Number.isNaN(num) ? raw : num) // и готовое значение
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
