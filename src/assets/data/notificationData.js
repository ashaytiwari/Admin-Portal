import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const newNotificationList = [
  {
    Icon: LocalShippingOutlinedIcon,
    title: 'Your order is placed',
    description: 'waiting for shipping',
    timeline: 'about 1 hour ago'
  },
  {
    Icon: PersonOutlinedIcon,
    title: 'Sylvan King',
    description: 'answered to your comment on Fundo',
    timeline: 'about 5 hours ago'
  }
];

export const oldNotificationList = [
  {
    Icon: ChatOutlinedIcon,
    title: 'You have new message',
    description: '5 unread messages',
    timeline: '2 days ago'
  },
  {
    Icon: EmailOutlinedIcon,
    title: 'You have new email',
    description: 'sent from Digital Hub organization',
    timeline: '2 days ago'
  },
  {
    Icon: LocalShippingOutlinedIcon,
    title: 'Delivery Processing',
    description: 'your order is being placed',
    timeline: '3 days ago'
  },
];