enum SIZES {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

const sizes = {
  xxs: {
    base: 'p-1.5 text-xs font-medium',
    icon: 0.875,
  },
  xs: {
    base: 'py-2 px-3 text-xs font-medium',
    icon: 0.875,
  },
  sm: {
    base: 'py-2 px-3 text-sm font-medium',
    icon: 1,
  },
  md: {
    base: 'py-2.5 px-5 text-sm font-medium',
    icon: 1.25,
  },
  lg: {
    base: 'py-3 px-5 text-base font-medium',
    icon: 1.25,
  },
  xl: {
    base: 'py-3.5 px-6 text-base font-medium',
    icon: 1.5,
  },
}

enum COLORS {
  default = 'default',
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
}

const colors = {
  default: {
    base: 'text-gray-900 bg-white border-2 border-white hover:bg-gray-200 hover:border-gray-200 hover:text-black focus:ring-gray-200',
    outlined:
      'text-gray-700 bg-transparent border-2 border-gray-700 hover:bg-white hover:border-white hover:text-gray-700 focus:ring-white',
    text: '',
  },
  success: {
    base: 'text-white bg-green-500 border-2 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-green-300',
    outlined:
      'text-green-500 bg-transparent border-2 border-green-500 hover:bg-green-500 hover:border-green-500 hover:text-white focus:ring-green-300',
    text: 'text-green-500 hover:bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700',
  },
  error: {
    base: 'text-white bg-red-500 border-2 border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-red-300',
    outlined:
      'text-red-500 bg-transparent border-2 border-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white focus:ring-green-300',
    text: 'text-red-500 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700',
  },
  info: {
    base: 'text-white bg-blue-500 border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 focus:ring-blue-300',
    outlined:
      'text-blue-500 bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white focus:ring-green-300',
    text: 'text-blue-500 hover:bg-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700',
  },
  warning: {
    base: 'text-white bg-orange-500 border-2 border-orange-500 hover:bg-orange-600 hover:border-orange-600 focus:ring-orange-300',
    outlined:
      'text-orange-500 bg-transparent border-2 border-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white focus:ring-green-300',
    text: 'text-orange-500 hover:bg-orange-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700',
  },
}

export { SIZES, sizes, COLORS, colors }
