import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width:'147px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    borderRadius: '50%',
                    backgroundColor: '#00CC22',
                    border: '7px solid white',
                    boxShadow: '0px 0px 0px 1px #00CC22',
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
