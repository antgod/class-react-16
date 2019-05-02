import React, { PureComponent } from '@alipay/bigfish/react';
import { Alert } from '@alipay/bigfish/antd';
import styles from './index.less';

class LayoutPage extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Alert
          message="bigfish 运行成功"
          type="success"
          showIcon
          description="layout"
        />
        <div className={styles.info}>{children}</div>
      </div>
    );
  }
}

export default LayoutPage;
