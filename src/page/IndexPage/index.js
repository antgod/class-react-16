import React from '@alipay/bigfish/react';
import { Link } from '@alipay/bigfish/sdk/router';
import DocumentTitle from '@alipay/bigfish/util/title';
import styles from './index.less';

const IndexPage = () => (
  <DocumentTitle title="设置标题">
    <div>
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/hdLRtDYtUQduRpETNOSh.jpeg"
        style={{
          width: 200,
        }}
        alt=""
      />
      <div className={styles.link}>
        <Link to="/userlist">用户列表页</Link>
      </div>
    </div>
  </DocumentTitle>
);

export default IndexPage;
