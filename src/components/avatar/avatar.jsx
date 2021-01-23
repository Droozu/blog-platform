import React from 'react';
import { Avatar as AvatarAntd } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function Avatar({ avatar }) {
  return <AvatarAntd src={avatar} icon={<UserOutlined />} size={46} alt="Avatar" />;
}

Avatar.defaultProps = {
  avatar: null,
};

Avatar.propTypes = {
  avatar: PropTypes.oneOfType([PropTypes.string]),
};
