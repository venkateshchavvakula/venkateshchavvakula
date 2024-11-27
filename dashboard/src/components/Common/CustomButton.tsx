import Button from '@mui/material/Button'
import React from 'react'

interface Props {
  disabled?: boolean
  children?: React.ReactNode | null
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: any
  width?: any
  size?: any
  icon?: any
  borderRadius?: any
  type?: any
  isdeletebtn?: boolean
}

const CustomButton: React.FC<Props> = ({
  disabled,
  children,
  onClick,
  variant = 'outlined',
  width,
  size,
  icon,
  borderRadius,
  type = 'button',
  isdeletebtn,
}) => {
  const styles: any = {
    border: `1px solid ${isdeletebtn ? '#EF4949' : '#141C4C'}`,
    color: `${isdeletebtn ? '#EF4949' : '#141C4C'}`,
    '&:hover': {
      border: '1px solid #141C4C',
      backgroundColor: 'rgba(20, 28, 76, 0.1);',
    },
    '&:active': {
      background: 'rgba(20, 28, 76, 0.1);',
    },
  }
  const styles1: any = {
    border: 'none',
    color: 'white',
    fontWeight: '700',
    background: isdeletebtn ? '#EF4949' : '#0C8EC7',
    backgroundColor: isdeletebtn ? '#EF4949' : '#0C8EC7',
    '&:hover': {
      border: 'none',
      background: isdeletebtn ? '#EF4949' : '#4FBAE9',
      backgroundColor: isdeletebtn ? '#EF4949' : '#4FBAE9',
      opacity: isdeletebtn ? '0.8' : '',
    },
    '&:active': {
      background: isdeletebtn ? '#EF4949' : '#8EDDFF',
    },
  }

  const disabledStyles: any = {
    '&:disabled': {
      fontWeight: '700',
      border: 'none ',
      color: '#797979',
      backgroundColor: '#D9D9D9',
    },
  }
  const secondayStyles: any = {
    border: '1px solid #0C8EC7',
    color: '#0C8EC7',
    '&:hover': {
      // border: '1px solid #141C4C',
      backgroundColor: 'rgba(20, 28, 76, 0.1);',
    },
    '&:active': {
      background: 'rgba(12, 142, 199, 0.1)',
    },
  }
  return (
    <div className={width}>
      <Button
        style={{ borderRadius, textTransform: 'none' }}
        fullWidth
        size={size}
        disabled={disabled}
        onClick={onClick}
        variant={variant}
        startIcon={icon}
        className='font-nunitoRegular'
        type={type}
        sx={
          variant === 'secondary' && !disabled
            ? secondayStyles
            : variant === 'outlined' && !disabled
            ? styles
            : variant === 'contained' && !disabled
            ? styles1
            : disabled && variant === 'contained'
            ? {
                '&:disabled': {
                  fontWeight: '700',
                  border: 'none',
                  color: '#6A6A78 !important',
                  // backgroundColor: '#2F3344',
                },
              }
            : disabled
            ? disabledStyles
            : ''
        }
      >
        <p className='w-full font-bold font-nunitoRegular text-sm'>{children}</p>
      </Button>
    </div>
  )
}
CustomButton.defaultProps = {
  disabled: false,
  children: null,
  variant: '',
  width: '',
  size: '',
  icon: '',
  borderRadius: '',
  onClick: function test() {},
}
export default CustomButton
