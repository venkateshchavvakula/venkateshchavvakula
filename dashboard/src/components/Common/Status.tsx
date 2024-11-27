import React from 'react'

const statusList = [
  {
    list: ['Active', 'Closed', 'Interested', 'ASSIGNED','PAID'],
    class: 'bg-LimeGreen',
  },
  {
    list: ['Inactive', 'In Progress', 'CALL_BACK'],
    class: 'bg-YellowOrange',
  },

  {
    list: ['Open', 'Interested', 'CONVERTED'],
    class: 'bg-Azure',
  },

  {
    list: ['UN_ASSIGNED'],
    class: 'bg-StatusGray',
  },
]

const getBgClass = (status: string) => {
  let className = 'bg-GlowingBrakeDisc'
  for (const item of statusList) {
    if (item?.list.some((x) => x?.toLowerCase() === status?.toLowerCase())) {
      className = item?.class
      break
    }
  }

  return className
}

interface Props {
  children: any
}
const Status: React.FC<Props> = ({ children }) => (
  <div
    className={`font-nunitoRegular ${getBgClass(
      children,
    )} bg-opacity-20 w-fit py-1.5 flex space-x-2 items-center pr-4 pl-2 rounded-[44px]`}
  >
    <div className={`w-3 h-3 ${getBgClass(children)} rounded-md border-2 border-white`} />

    <p
      className={`font-nunitoRegular font-bold ${getBgClass(children).replace(
        'bg-',
        'text-',
      )}  text-xs`}
    >
      {children}
    </p>
  </div>
)

export default Status
