import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'DASHBOARD',
    path: '/admin-dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Add Coin',
  //   path: '/add-coin',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text'
  // },
  {
    title: 'COINS',
    path: '/coins-list',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Edit Coin',
  //   path: '/edit-coin',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text'
  // },
  {
    title: 'News',
    path: '/add-news',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'News List',
    path: '/news-list',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Edit News',
    path: '/edit-news',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
