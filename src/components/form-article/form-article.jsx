import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../form-field';
import FormArea from '../form-area';
import FormTagList from '../form-tag-list';

export default function FormArticle({ defaultTitle, defaultDescription, defaultBody, defaultTagList }) {
    return (
        <>
            <FormField
                label="Title"
                attributes={{ type: 'text', name: 'title', placeholder: 'Title', defaultValue: defaultTitle }}
                validation={{ required: 'this is required' }}
            />
            <FormField
                label="Description"
                attributes={{ type: 'text', name: 'description', placeholder: 'Description', defaultValue: defaultDescription }}
                validation={{ required: 'this is required' }}
            />
            <FormArea
                label="Text"
                attributes={{ name: 'body', minRows: 6, placeholder: 'Text', defaultValue: defaultBody }}
                validation={{ required: 'this is required' }}
            />
            <FormTagList defaultTagList={defaultTagList} />
        </>
    );
}

FormArticle.defaultProps = {
    defaultTitle: '',
    defaultDescription: '',
    defaultBody: '',
    defaultTagList: [''],
};

FormArticle.propTypes = {
    defaultTitle: PropTypes.string,
    defaultDescription: PropTypes.string,
    defaultBody: PropTypes.string,
    defaultTagList: PropTypes.arrayOf(PropTypes.string),
};