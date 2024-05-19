import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Drawer, Button } from 'antd';

const { Link: AnchorLink } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <Link to="/">Tech</Link>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <AnchorLink href="/" title="Home" />
            <AnchorLink href="/information" title="Information" />
            <AnchorLink href="/contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link to="/">Home</Link>
              <Link to="/about">Information</Link>
              {/* <Link to="/features">Features</Link>
              <Link to="/how-it-works">How it works</Link> */}
              {/* <Link to="/faq">FAQ</Link> */}
              {/* <Link to="/pricing">Pricing</Link> */}
              <Link to="/contact">Contact</Link>
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
