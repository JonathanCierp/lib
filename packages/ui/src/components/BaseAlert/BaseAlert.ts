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
    outlined:
      'text-gray-800 border-2 border-gray-300 dark:text-gray-400 dark:border-gray-700',
    bordered:
      'text-gray-800 bg-gray-50 border-2 border-gray-300 dark:text-gray-400 dark:border-gray-700',
  },
  success: {
    base: 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400',
    outlined:
      'text-green-800 border-2 border-green-300 dark:text-green-400 dark:border-green-700',
    bordered:
      'text-green-800 bg-green-50 border-2 border-green-300 dark:text-green-400 dark:border-green-700',
  },
  error: {
    base: 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400',
    outlined:
      'text-red-800 border-2 border-red-300 dark:text-red-400 dark:border-red-700',
    bordered:
      'text-red-800 bg-red-50 border-2 border-red-300 dark:text-red-400 dark:border-red-700',
  },
  info: {
    base: 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
    outlined:
      'text-blue-800 border-2 border-blue-300 dark:text-blue-400 dark:border-blue-700',
    bordered:
      'text-blue-800 bg-blue-50 border-2 border-blue-300 dark:text-blue-400 dark:border-blue-700',
  },
  warning: {
    base: 'text-orange-800 bg-orange-50 dark:bg-gray-800 dark:text-orange-400',
    outlined:
      'text-orange-800 border-2 border-orange-300 dark:text-orange-400 dark:border-orange-700',
    bordered:
      'text-orange-800 bg-orange-50 border-2 border-orange-300 dark:text-orange-400 dark:border-orange-700',
  },
}

export { COLORS, colors }
