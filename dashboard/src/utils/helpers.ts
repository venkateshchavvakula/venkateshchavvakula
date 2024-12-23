import * as _ from 'lodash'
import moment from 'moment'
import { toast } from 'react-toastify'

/* eslint-disable */
export const uuid = () => {
  let uuid = ''
  let i
  for (i = 0; i < 32; i += 1) {
    switch (i) {
      case 8:
      case 20:
        uuid += '-'
        uuid += (Math.random() * 16 || 0).toString(16)
        break
      case 12:
        uuid += '-'
        uuid += '4'
        break
      case 16:
        uuid += '-'
        uuid += (Math.random() * 4 || 8).toString(16)
        break
      default:
        uuid += (Math.random() * 16 || 0).toString(16)
    }
  }
  return uuid
}
/* eslint-enable */
export const capitalize = (string: string) => {
  if (!string) {
    return ''
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const capitalizeUppertoLower = (string: string) => {
  if (!string) {
    return ''
  }

  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1)
}

export const getValueAsFloatWithNDecimalPlaces = (value: number, decimalPlaces: number) => {
  if (['0', 0].includes(value)) {
    return value
  }

  return Number(value).toFixed(decimalPlaces)
}

export const validateArray = (array: any[]) => {
  if (!array || !Array.isArray(array) || !array.length) {
    return []
  }

  return array
}

export const copyToClipboard = (value: any) => {
  navigator.clipboard.writeText(_.unescape(value))
}

export const showToastMessage = (message: string, type: string) => {
  if (type === 'error') {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  } else {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }
}
export const defaultFiltersDropDown = [
  {
    id: 'ALL',
    name: 'All',
  },
  {
    id: '0',
    name: 'Today',
  },
  {
    id: '-1',
    name: 'Yesterday',
  },
  {
    id: '-7',
    name: 'Last 7 Days',
  },
  {
    id: '-30',
    name: 'Last 30 Days',
  },
  {
    id: 'TM',
    name: 'This Month',
  },
  {
    id: 'LM',
    name: 'Last Month',
  },
  {
    id: 'custom',
    name: 'Custom Date',
  },
]

export const dummyOptions = [
  { id: 1, name: 'Facebook' },
  { id: 2, name: 'Instagram' },
  { id: 3, name: 'Linkedin' },
  { id: 4, name: 'Farukh bhai' },
  { id: 5, name: 'Raw Agent from SCUBE' },
  { id: 6, name: 'Dubai' },
]

export const dateRange = (type: any) => {
  let range: any = []

  switch (type) {
    case '0':
      range = [
        moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'),
      ]
      break
    case '-1':
      range = [
        moment().subtract(1, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        moment().subtract(1, 'days').endOf('day').format('YYYY-MM-DD HH:mm:ss'),
      ]
      break
    case '-7':
      range = [
        moment().subtract(6, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'),
      ]
      break
    case '-30':
      range = [
        moment().subtract(29, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'),
      ]
      break
    case 'TM':
      range = [
        moment().startOf('month').format('YYYY-MM-DD HH:mm:ss'),
        moment().endOf('month').format('YYYY-MM-DD HH:mm:ss'),
      ]
      break
    case 'LM':
      range = [
        moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD HH:mm:ss'),
        moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD HH:mm:ss'),
      ]
      break
    default:
      range = []
  }
  return range
}

/* eslint-disable */
export const CountItems = (data: any) => {
  let total = 0
  Object.values(data).forEach((val) => {
    if (val === null || val === undefined || val === '') {
      return true
    }
    total += 1
  })
  // console.log(total, 'tpta;')
  return total
}
/* eslint-enable */

export const isDate = (params: any) => {
  for (let key in params) {
    if (params[key].toString().includes('-')) return true
  }
}

// get Age by dob

export const getAge = (dateString: any) => {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}


export function numberWithCommas(x:any) {
  x = typeof x === 'string' ? Number(x).toFixed(2).toString() : x.toFixed(2).toString()
  if (Number(x) < 999) return Number(x).toFixed(2).toString()
  let hundredsIndex = x.indexOf('.') - 3
  return (
    x.substr(0, hundredsIndex).replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
    `,${x.substr(hundredsIndex)}`
  )
}