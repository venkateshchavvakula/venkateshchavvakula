import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props {
    label?:any
    startDate: any
    onChange: any
    endDate: any
}

export const DateRangePicker: React.FC<Props> = ({ startDate, onChange, endDate,label }) => {
    const today = new Date()
    return (
        <div className='bg-white h-12 sm:h-14 px-3 flex justify-between rounded-lg items-center gap-2 sm:gap-5 date-range-picker  border hover:border-2 cursor-pointer hover:border-WaterBlue  border-[#E7E8ED] '>
            <div>
                <label
                    htmlFor='datepicker datediv'
                    className={` custom-label block text-text text-md ${
                        startDate ? 'toggle-label' : ''
                    }`}
                >
                    {label ?? 'Date Range'}
                </label>
                <DatePicker
                    onKeyDown={(e) => {
                        e.preventDefault()
                    }}
                    className='cursor-pointer '
                    id='datepicker'
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    // maxDate={today}
                    selectsRange
                />
            </div>
            <label htmlFor='datepicker'>
                <svg
                    className='cursor-pointer'
                    width='17'
                    height='18'
                    viewBox='0 0 17 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M1.07422 6.92317H15.3334'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M11.7536 10.0482H11.761'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M8.20279 10.0482H8.2102'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M4.6481 10.0482H4.65552'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M11.7536 13.1566H11.761'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M8.20279 13.1566H8.2102'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M4.6481 13.1566H4.65552'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M11.4331 1V3.63262'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M4.97212 1V3.63262'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.5906 2.26367H4.81677C2.46742 2.26367 1 3.57242 1 5.97809V13.2178C1 15.6613 2.46742 17.0003 4.81677 17.0003H11.5832C13.94 17.0003 15.4 15.684 15.4 13.2783V5.97809C15.4074 3.57242 13.9474 2.26367 11.5906 2.26367Z'
                        stroke='#141C4C'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </label>
        </div>
    )
}
