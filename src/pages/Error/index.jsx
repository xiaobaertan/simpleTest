
import { Result, Button } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { history } from 'umi';
import styles from './error.less';


const Error = (props) => {



    return (
        <div className={styles.main}>
            <Result
                title="用户登录失败"
                extra={
                    <Button type="primary" onClick={() => history.push('/login')}>
                        回到登录页
                    </Button>
                }
            />,
        </div>
    );
};

export default Error
