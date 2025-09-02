import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.max(1, Math.ceil(totalCount / Math.max(1, itemsCountForPage)))

    const onChangeCallback = (_event: React.ChangeEvent<unknown>, newPage: number) => {
        onChange(newPage, itemsCountForPage)
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCount = Number(event.target.value)
        onChange(1, newCount)
    }

    const onChangeSelectOption = (option: number | string) => {
        const newCount = Number(option)
        onChange(1, newCount)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '.MuiPagination-ul': { justifyContent: 'center' },
                    '.MuiPaginationItem-root': { borderRadius: '8px' },
                    mb: 1,
                }}
                page={Math.min(page, lastPage)}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>показать</span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
                onChangeOption={onChangeSelectOption}
            />

            <span className={s.text2}>строк в таблице</span>
        </div>
    )
}

export default SuperPagination
