import React from 'react';
import { FormProvider } from 'react-hook-form';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './form-box.module.scss';

export default function FormBox({ methods, onSubmit, title, children, button, footnote, size }) {
    const formClassName = classnames(styles.form, { [styles['form--size_s']]: size === 's' });

    const prevDefault = (event) => {
        if (event.key === 'Enter' && event.target.name === 'taginput') {
            event.preventDefault();
        }
    }

    return (
        <div>
            <FormProvider {...methods}>
                <form className={formClassName} onSubmit={methods.handleSubmit(onSubmit)} role="presentation" onKeyDown={prevDefault} autoComplete="off" noValidate>
                    <h2 className={styles.title}>{title}</h2>
                    {children}
                    <button className={styles.submit} name="btn-send" type="submit">
                        {button}
                    </button>

                    {footnote ? <span className={styles.footnote}>{footnote}</span> : null}
                </form>
            </FormProvider>
        </div>
    );
}

FormBox.defaultProps = {
    footnote: null,
    onSubmit: () => {},
    size: '',
};

FormBox.propTypes = {
    methods: PropTypes.instanceOf(Object).isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    footnote: PropTypes.node,
    onSubmit: PropTypes.func,
    size: PropTypes.oneOf(['', 's']),
};
