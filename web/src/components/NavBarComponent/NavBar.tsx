import React from 'react';
import { connect } from 'react-redux';

import { Logo } from './Logo';
import { LocalesButtons } from './LocalesButtons'
import { navThemeEnum, Theme } from '../../actions';
import { StoreState } from '../../reducers';

interface NavBarProps {
  overEmit?: boolean;
  theme: Theme;
}

class _NavBar extends React.Component<NavBarProps> {

  navColor = (theme: navThemeEnum) => {
    if (theme) return theme === navThemeEnum.DARK ? 'dark-nav' : 'white-nav';
  };

  renderItems = (render: boolean) => {
    if (render === true) {
      return (
        <>
          <div id="hambuger-menu" className="hambuger-menu">
            <span />
            <span />
            <span />
          </div>
          <ul id="items-container" className="items-container">
            <li className="nav-item btn-font">
              <a className="nav-link" href="#about">
                sobre
              </a>
            </li>
            <li className="nav-item btn-font">
              <a className="nav-link" href="#games">
                games
              </a>
            </li>
            <li className="nav-item btn-font">
              <a className="nav-link" href="#team">
                time
              </a>
            </li>
            <li className="nav-item">
              <LocalesButtons />
            </li>
          </ul>
        </>
      );
    }
    return;
  };

  render() {
    const {
      theme: { navMenus, navTheme },
    } = this.props;

    return (
      <>
        <div
          className={`noselect navbar navbar-dark custom-nav ${this.navColor(
            navTheme
          )}`}
        >
          <div className="container">
            <a className="custom-brand" href="/">
              <Logo
                color={navTheme === navThemeEnum.DARK ? 'white' : 'black'}
              />
            </a>
            {this.renderItems(navMenus)}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { theme: state.theme };
};

export const NavBar = connect(mapStateToProps)(_NavBar);
