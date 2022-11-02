enum SIZES {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}
const sizes = {
  sm: {
    base: 'text-xs font-semibold',
    icon: 1.25,
  },
  lg: {
    base: 'text-sm font-medium',
    icon: 1.35,
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
    base: 'bg-gray-400 text-gray-100 dark:bg-gray-600',
    outlined:
      'bg-transparent border-2 border-gray-400 text-gray-400 dark:border-gray-300 dark:text-gray-300',
    link: 'cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500',
  },
  success: {
    base: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
    outlined: 'bg-transparent border-2 border-green-500 text-green-500',
    link: 'cursor-pointer hover:bg-green-200 dark:hover:bg-green-300',
  },
  error: {
    base: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
    outlined: 'bg-transparent border-2 border-red-500 text-red-500',
    link: 'cursor-pointer hover:bg-red-200 dark:hover:bg-red-300',
  },
  info: {
    base: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900',
    outlined: 'bg-transparent border-2 border-blue-500 text-blue-500',
    link: 'cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-300',
  },
  warning: {
    base: 'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-900',
    outlined: 'bg-transparent border-2 border-orange-500 text-orange-500',
    link: 'cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-300',
  },
}

export { SIZES, sizes, COLORS, colors }
