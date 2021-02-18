import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Tooltip } from 'antd';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';
import styles from './form-tag-list.module.scss';
import FormTag from '../form-tag';

export default function FormTagList({ defaultTagList }) {
  const { register } = useFormContext();
  function formatDefaultTagList(arr) {
    if (arr[0] === '' && arr.length === 1) {
      return [];
    }
    const isArrEmpty = !arr.length;
    return (isArrEmpty ? [] : arr).map((item) => ({ id: nextId(), value: item }));
  }
  const [tagList, setTagList] = useState(formatDefaultTagList(defaultTagList));
  const [tag, setTag] = useState('');

  function handleTagChange(evt) {
    setTag(evt.target.value.trimLeft());
  }

  function handleTagDelete(id) {
    setTagList((state) => {
      const idx = state.findIndex((itemtag) => itemtag.id === id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    });
  }

  function handleTagAdd(event) {
    if (event.key === 'Enter') {
      const isTagFilled = Boolean(tag.trim());
      if (isTagFilled) setTagList((state) => [...state, { id: nextId(), value: tag }]);
      setTag('');
    }
  }

  const tagItems = tagList.map((item) => (
    <li key={item.id}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="tagList"
        value={item.value}
        defaultChecked
        ref={register}
      />
      <Tooltip placement="topLeft" title="Click to delete" arrowPointAtCenter>
        <input type="button" value={item.value} className={styles.item} onClick={() => handleTagDelete(item.id)} />
      </Tooltip>
    </li>
  ));

  return (
    <div className={styles.tags}>
      {Boolean(tagList.length) && <ul className={styles.container}>{tagItems}</ul>}
      <span style={{ fontSize: '14px' }}>Tags</span>
      <div className={styles.wrapper}>
        <FormTag value={tag} onChange={(evt) => handleTagChange(evt)} onKeyDown={handleTagAdd} />
      </div>
    </div>
  );
}

FormTagList.defaultProps = {
  defaultTagList: [],
};

FormTagList.propTypes = {
  defaultTagList: PropTypes.arrayOf(PropTypes.string),
};
