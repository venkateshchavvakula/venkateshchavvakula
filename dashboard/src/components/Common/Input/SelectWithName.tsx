import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'
import { makeStyles } from '@mui/styles'
import { uuid } from '../../../utils/helpers'

interface Props {
  name?: string
  value?: any
  label?: string
  error?: boolean
  helperText?: string
  handleChange?: any
  options?: any
  width?: string
  required?: boolean
  readonly?: boolean
  disabled?: boolean
}

const useStyles = makeStyles({
  error: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'red',
      borderRadius: '8px',
    },
  },
  select: {
    '& ul': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '& li': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  icon: {
    fill: 'white',
  },
  root: {
    '& .MuiOutlinedInput-input': {
      color: '#141C4C',
    },
    '& .MuiInputLabel-root': {
      color: '#6A6A78',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E7E8ED',
      borderRadius: '8px',
    },
    '&:hover .MuiOutlinedInput-input': {
      color: '#141C4C',
    },
    '&:hover .MuiInputLabel-root': {
      color: '#6A6A78',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#141C4C',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#141C4C',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#0C8EC7',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0C8EC7',
    },
  },
})

export const SelectWithName: React.FC<Props> = ({
  handleChange,
  value,
  label,
  error,
  helperText,
  options,
  width,
  name,
  required,
  readonly,
  disabled,
}) => {
  const classes = useStyles()
  return (
    <div className='w-full'>
      <FormControl
        disabled={disabled}
        className={!error ? classes.root : classes.error}
        fullWidth
        error={error}
      >
        <InputLabel id='select-input-label'>{label}</InputLabel>
        <Select
          labelId='select-input-label'
          style={{
            width,
          }}
          // IconComponent={KeyboardArrowDownIcon}
          MenuProps={{
            sx: {
              '&& .MuiMenuItem-root': {
                backgroundColor: '#F5FBFD',
                border: '1px solid #E7E8ED !important',
                color: '#141C4C',
                '&:hover': {
                  backgroundColor: '#F5FBFD !important',
                },
              },
              '&& .MuiMenu-list': {
                padding: '0',
              },

              '&& .Mui-selected': {
                color: '#0C8EC7 !important',
                backgroundColor: '#F5FBFD',
              },
            },
          }}
          sx={{
            color: '#141C4C',
            '.MuiSvgIcon-root ': {
              fill: '#141C4C !important',
            },
          }}
          required={required}
          value={value}
          onChange={handleChange}
          label={label}
          name={name}
          error={error}
          fullWidth
          readOnly={readonly}
        >
          {options.length > 0 ? (
            options?.map((item: any) => (
              <MenuItem key={uuid()} value={item.name}>
                {item.name}
              </MenuItem>
            ))
          ) : (
            <p className='text-white p-4 text-xl'>Not found !</p>
          )}
        </Select>

        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  )
}
