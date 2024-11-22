import React from 'react';
import { Col, Divider, Row } from 'antd';
import './App.css';

//const style: React.CSSProperties = { background: '#0092ff', padding: '5 0' };

const App: React.FC = () => (
  <>
    <Row gutter={[8, 8]}>
      <Col className="gutter-row" span={12} offset={12}>
        <div >col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
    </Row>
  </>
);

export default App;
