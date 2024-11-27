import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

interface Props {
  defaultChecked?: boolean
  handleCheck: any
  ischecked?: boolean //   Label?: string;
  name: string
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const GreenSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#0C8EC7',
    '&:hover': {
      backgroundColor: 'rgba(20, 28, 76,0.1)',
    },
  },
  ' & .MuiSwitch-switchBase': {
    color: '#141C4C',
    '&:hover': {
      backgroundColor: 'rgba(0, 133, 255, 0.1)',
    },
  },
  '.MuiSwitch-track': {
    backgroundColor: '#141C4C',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#0C8EC7',
  },
}));

const Toggle: React.FC<Props> = ({
  ischecked,
  handleCheck,
  defaultChecked,

  name,
}) => (
  <div>
    <GreenSwitch name={name} checked={ischecked} onChange={handleCheck} {...label} />
  </div>
);

export default Toggle;
