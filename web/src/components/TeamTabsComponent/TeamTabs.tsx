import React from 'react';
import _ from 'lodash';
import { TeamContent } from './TeamContent';

//Define keys and titles of tabs
const tabsKeys = [
  { key: 'dev', title: 'dev' },
  { key: 'sound', title: 'Audio' },
  { key: 'prod', title: 'Produção' },
  { key: 'art', title: 'Arte' },
  { key: 'game', title: 'Game Design' },
];

interface TeamsTabProps {}

export default class TeamTabs extends React.Component<TeamsTabProps> {
  active = '';

  activeTeam = () => {
    this.active += 'active show';
  };

  //First active tab controller
  first = true;

  //Verify if is first tab
  isFirst = () => {
    let active = this.first === true ? 'active' : '';
    this.first = false;
    return active;
  };

  render() {
    return (
      <>
        <ul className="nav nav-tabs noselect" id="myTab" role="tablist">
          <h2>Time</h2>
          {/* Lodash map tabsKeys object to tabs whith title and keys */}
          {_.map(tabsKeys, ({ key, title }) => {
            return (
              <li key={key + title} className="nav-item" role="presentation">
                <a
                  key={'a' + key}
                  className={`nav-link btn-font ${this.isFirst()}`}
                  id={`${key}-tab`}
                  data-toggle="tab"
                  href={`#${key}`}
                  role="tab"
                  aria-controls={key}
                  aria-selected="true"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Lodash map tabKeys object to components whith member teams */}
        <div className="tab-content" id="myTabContent">
          {_.map(tabsKeys, ({ key }) => {
            return (
              <TeamContent key={key + 'team-content'} team={key} active="dev" />
            );
          })}
        </div>
      </>
    );
  }
}
