import { Card, Title, BarChart, DonutChart } from '@tremor/react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axios'
import { numberWithCommas, showToastMessage } from '../../utils/helpers'

const graphPayrollMeta = [
    {
        abbreviation: 'Jan',
        name: 'January',
        cost: 0,
        index: 1,
    },
    {
        abbreviation: 'Feb',
        name: 'February',
        cost: 0,
        index: 2,
    },
    {
        abbreviation: 'Mar',
        name: 'March',
        cost: 0,
        index: 3,
    },
    {
        abbreviation: 'Apr',
        name: 'April',
        cost: 0,
        index: 4,
    },
    {
        abbreviation: 'May',
        name: 'May',
        cost: 0,
        index: 5,
    },
    {
        abbreviation: 'Jun',
        name: 'June',
        cost: 0,
        index: 6,
    },
    {
        abbreviation: 'Jul',
        name: 'July',
        cost: 0,
        index: 7,
    },
    {
        abbreviation: 'Aug',
        name: 'August',
        cost: 0,
        index: 8,
    },
    {
        abbreviation: 'Sep',
        name: 'September',
        cost: 0,
        index: 9,
    },
    {
        abbreviation: 'Oct',
        name: 'October',
        cost: 0,
        index: 10,
    },
    {
        abbreviation: 'Nov',
        name: 'November',
        cost: 0,
        index: 11,
    },
    {
        abbreviation: 'Dec',
        name: 'December',
        cost: 0,
        index: 12,
    },
]
const graphExpenseMeta = [
    {
        abbreviation: 'Jan',
        name: 'January',
        cost: 0,
        index: 1,
    },
    {
        abbreviation: 'Feb',
        name: 'February',
        cost: 0,
        index: 2,
    },
    {
        abbreviation: 'Mar',
        name: 'March',
        cost: 0,
        index: 3,
    },
    {
        abbreviation: 'Apr',
        name: 'April',
        cost: 0,
        index: 4,
    },
    {
        abbreviation: 'May',
        name: 'May',
        cost: 0,
        index: 5,
    },
    {
        abbreviation: 'Jun',
        name: 'June',
        cost: 0,
        index: 6,
    },
    {
        abbreviation: 'Jul',
        name: 'July',
        cost: 0,
        index: 7,
    },
    {
        abbreviation: 'Aug',
        name: 'August',
        cost: 0,
        index: 8,
    },
    {
        abbreviation: 'Sep',
        name: 'September',
        cost: 0,
        index: 9,
    },
    {
        abbreviation: 'Oct',
        name: 'October',
        cost: 0,
        index: 10,
    },
    {
        abbreviation: 'Nov',
        name: 'November',
        cost: 0,
        index: 11,
    },
    {
        abbreviation: 'Dec',
        name: 'December',
        cost: 0,
        index: 12,
    },
]
const chartMeta: any = [
    {
        name: 'Payroll Paid',
        amount: 50,
    },
    {
        name: 'Payroll Pending',
        amount: 20,
    },
]

const dataFormatter = (number: number) => {
    return '₹ ' + number
}

const valueFormatter = (number: number) => `₹ ${number}`

const Home = () => {
    const [mainStats, setMainStats] = useState({} as any)
    const [donutMeta, setDonutMeta] = useState(chartMeta)


    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-lg  text-gray-700'>Welcome home, </h1>

            <div className='grid grid-cols-2 gap-4 py-4 '>
                <Card>
                    <Title>Total Payroll ({moment().subtract(1, 'months').format('MMM YYYY')})</Title>
                    <div className='flex flex-row total_sales'>
                        <DonutChart
                            data={donutMeta}
                            category='amount'
                            dataKey='name'
                            valueFormatter={valueFormatter}
                            marginTop='mt-6'
                            colors={['green', 'orange']}
                        />
                        <div className='flex justify-end flex-col donut-chart pay-info-column'>
                            <div className='pay-info-item netpay'>
                                <label className='text-grey'>Payroll Paid</label>
                                <div>
                                    <span className='font-moderate font-mediumbold '>
                                        ₹ {numberWithCommas(mainStats?.total_net_paid || 0)}
                                    </span>
                                </div>
                            </div>
                            <div className='pay-info-item deductions'>
                                <label className='text-grey'>Payroll Pending</label>
                                <div>
                                    <span className='font-moderate font-mediumbold '>
                                        ₹ {numberWithCommas(mainStats?.due_amount || 0)}
                                    </span>
                                </div>
                            </div>
                            <div className='pay-info-item grosspay'>
                                <label className='text-grey'>Total Payroll Cost</label>
                                <div>
                                    <span className='font-moderate font-mediumbold '>
                                        ₹ {numberWithCommas(mainStats?.total_net_pay || 0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className='text-center m-auto'>
                        <div className='py-4'>
                            <h2> ACTIVE EMPLOYEES</h2>
                            <p className='pt-4 text-4xl text-green-500'>
                                {mainStats.total_employees}
                            </p>
                        </div>
                        <div className='mb-4'><label className='uppercase opacity-70'>Current Financial Year</label></div>
                        <div className='flex  pay-info-column gap-8 justify-center'>
                            <div className='pay-info-item ptsummary'>
                                <label className='text-grey'>Professional Tax</label>
                                <div>
                                    <span className='font-moderate font-mediumbold '>
                                        ₹ {numberWithCommas(mainStats?.professional_tax || 0)}
                                    </span>
                                </div>
                            </div>
                            <div className='pay-info-item tdssummary'>
                                <label className='text-grey'>Tax Deducted at Source (TDS)</label>
                                <div>
                                    <span className='font-moderate font-mediumbold '>
                                        ₹ {numberWithCommas(mainStats?.income_tax || 0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Home
