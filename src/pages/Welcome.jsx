import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Descriptions, Tag } from 'antd';
import { connect } from 'umi';
import styles from './Welcome.less';
const colorList = ['red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']

const Welcome = (props) => {
  const { currentUser } = props
  console.log(currentUser)
  return (
    <PageContainer>
      <Card>
        <Descriptions title="用户信息" bordered>
          <Descriptions.Item label="姓名">{currentUser.name}</Descriptions.Item>
          <Descriptions.Item label="国籍">{currentUser.country}</Descriptions.Item>
          <Descriptions.Item label="邮箱">{currentUser.email}</Descriptions.Item>
          <Descriptions.Item label="电话">{currentUser.phone}</Descriptions.Item>
          <Descriptions.Item label="团队" span={2}>
            {currentUser.group}
          </Descriptions.Item>

          <Descriptions.Item label="座右铭">{currentUser.signature}</Descriptions.Item>
          <Descriptions.Item label="标签">
            {currentUser.tags && currentUser.tags.length > 0 && (
              currentUser.tags.map((item, index) => {
                var bgColor = colorList[index]
                return <Tag color={bgColor}>{item.label}</Tag>
              })
            )
            }

          </Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
}
export default connect(({ user }) => ({
  currentUser: user.currentUser
}))(Welcome);