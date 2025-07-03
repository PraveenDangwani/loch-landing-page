// data/notificationCards.js

import BellIcon from '../assets/bellBlack.svg';
import GraphIcon from '../assets/bar-chart.svg';
import ClockIcon from '../assets/clock.svg';

export const notificationCards = [
  {
    id: 1,
    icon: BellIcon,
    title: "We’ll be sending notifications to you here",
    input: {
      type: "email",
      placeholder: "your@email.com",
      value: ""
    },
    showSaveButton: true,
    gradient: true
  },
  {
    id: 2,
    icon: GraphIcon,
    title: "Notify me when any wallets move more than",
    dropdown: {
      options: ["$500.00", "$1,000.00", "$10,000.00"],
      value: "$1,000.00"
    },
    selected: true,
    graph:true
  },
  {
    id: 3,
    icon: ClockIcon,
    title: "Notify me when any wallet dormant for",
    subText: "becomes active",
    dropdown: {
      options: ["> 7 days", "> 30 days", "> 90 days"],
      value: "> 30 days"
    },
    selected: true,
    clock:true
  }
];
