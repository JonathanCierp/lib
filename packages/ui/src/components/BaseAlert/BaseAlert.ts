enum COLORS {
  default = 'default',
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
}

const colors = {
  default: {
    base: 'text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-400',
    outlined: '',
  },
  success: {
    base: 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400',
    outlined: '',
  },
  error: {
    base: 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400',
    outlined: '',
  },
  info: {
    base: 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
    outlined: '',
  },
  warning: {
    base: 'text-orange-800 bg-orange-50 dark:bg-gray-800 dark:text-orange-400',
    outlined: '',
  },
}

export { COLORS, colors }
