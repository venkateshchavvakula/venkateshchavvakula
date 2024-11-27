import { makeStyles } from '@mui/styles'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

interface Props {
  name?: string
  value?: string
  label?: string
  error?: boolean
  helperText?: string
  handleChange?: any
  options: any
  width?: string
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

export const AutoCompleteSelect: React.FC<Props> = ({
  handleChange,
  value,
  label,
  error,
  helperText,
  options,
  // width,

  name,
}) => {
  const classes = useStyles()

  return (
    <div>
      <Autocomplete
        id={name}
        onChange={handleChange}
        className={!error ? classes.root : classes.error}
        fullWidth
        options={options}
        getOptionLabel={(option: any) => option.name}
        style={{ width: '100%' }}
        renderInput={(params) => (
          <TextField
            style={{ color: 'white' }}
            error={error}
            helperText={helperText}
            {...params}
            label={label}
            variant='outlined'
            fullWidth
            value={value}
            name={name}
          />
        )}
      />
    </div>
  )
}
