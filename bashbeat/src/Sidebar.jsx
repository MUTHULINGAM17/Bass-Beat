import React, { useState } from 'react';
import {
  PlayCircleOutlined,
  CustomerServiceOutlined,
  UnorderedListOutlined,
  HeartOutlined,
  FolderOutlined,
  CompassOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import './Sidebar.css';

const Sidebar = ({ isPlayerVisible }) => {
  const [expanded, setExpanded] = useState(false);

  const items = [
    {
      key: '1',
      icon: <PlayCircleOutlined />,
      label: 'Now Playing',
    },
    {
      key: '2',
      icon: <CustomerServiceOutlined />,
      label: 'Library',
    },
    {
      key: '3',
      icon: <UnorderedListOutlined />,
      label: 'Playlists',
    },
    {
      key: '4',
      icon: <CompassOutlined />,
      label: 'Browse',
    },
    {
      key: '5',
      icon: <HeartOutlined />,
      label: 'Liked',
    },
    {
      key: '6',
      icon: <FolderOutlined />,
      label: 'Local Files',
    },
  ];

  return (
    <div 
      className={`sidebar ${expanded ? 'expanded' : isPlayerVisible ? '' : 'extended'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={!expanded}
        items={items}
      />
    </div>
  );
};

export default Sidebar;