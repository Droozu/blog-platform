const ValidationRule = {
  USERNAME: {
    required: { value: true, message: 'this is required' },
    minLength: { value: 3, message: 'your username needs to be at least 3 characters' },
    maxLength: { value: 20, message: 'your username must be no more than 20 characters' },
  },
  EMAIL: {
    required: { value: true, message: 'this is required' },
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'this is not correct email address',
    },
  },
  PASSWORD: {
    required: { value: true, message: 'this is required' },
    minLength: { value: 8, message: 'your password needs to be at least 8 characters' },
    maxLength: { value: 40, message: 'your password must be no more than 40 characters' },
  },
  URL: {
    pattern: {
      value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
      message: 'this is not correct URL',
    },
  },
};

export default ValidationRule;
