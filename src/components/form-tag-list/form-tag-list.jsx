import React, { useState } from 'react';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';
import Button from '../button';
import styles from './form-tag-list.module.scss';
import FormTag from '../form-tag';

export default function FormTagList({ defaultTagList }) {
  function formatDefaultTagList(arr) {
    const isArrEmpty = !arr.length;
    return (isArrEmpty ? [''] : arr).map((item) => ({ id: nextId(), value: item }));
  }
  const [tagList, setTagList] = useState(formatDefaultTagList(defaultTagList));

  function handleTagChange(id, evt) {
    setTagList((state) => {
      const idx = state.findIndex((tag) => tag.id === id);
      const updatedTag = { ...state[idx], value: evt.target.value.trimLeft() };
      return [...state.slice(0, idx), updatedTag, ...state.slice(idx + 1)];
    });
  }

  function handleTagDelete(id) {
    setTagList((state) => {
      const idx = state.findIndex((tag) => tag.id === id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    });
  }

  function handleTagAdd() {
    const isAllTagsFilled = tagList.every((item) => Boolean(item.value.trim()));
    if (isAllTagsFilled) setTagList((state) => [...state, { id: nextId(), value: '' }]);
  }

  const tagItems = tagList.map((tagItem) => (
    <li key={tagItem.id}>
      <FormTag
        value={tagItem.value}
        onChange={(evt) => handleTagChange(tagItem.id, evt)}
        onDelete={() => handleTagDelete(tagItem.id)}
      />
    </li>
  ));

  return (
    <div className={styles.tags}>
      <span style={{ fontSize: '14px' }}>Tags</span>
      <div className={styles.wrapper}>
        {Boolean(tagList.length) && <ul className={styles.tag_list}>{tagItems}</ul>}
        <Button
          label="Add tag"
          theme="primary"
          onClick={handleTagAdd}
          style={{ alignSelf: 'flex-end', paddingRight: '40px', paddingLeft: '40px' }}
        />
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
