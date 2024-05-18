import React from 'react'
import './index.scss'
import { IItems, ISideBarProps } from '../../../lib/types';
import sidebarData from '../../../lib/data/sidebarData.json';

const SideBar: React.FC<ISideBarProps> = ({ visible }) => {

  return (
      <div className={`sidebar ${visible ? 'sidebar--visible' : 'sidebar--hidden'}`}>
        {sidebarData.sections.map((section, index) => (
          <div key={index} className='sidebar-content'>
            <div className="sidebar-header">
              <p>{section.header}</p>
            </div>
            <ul className="sidebar-list">
              {section.items.map((item: IItems, idx: number) => (
                <li key={idx} className={item.active ? "active" : "inactive"}>
                  <span><img src={item.icon} alt="" /></span>
                  <span className="name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  )
}

export default SideBar