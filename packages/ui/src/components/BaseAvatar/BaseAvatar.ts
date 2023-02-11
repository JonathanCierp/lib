enum SIZES {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

const sizes = {
  sm: {
    base: 'w-6 h-6',
    placeholder: 'w-[1.75rem] h-[1.75rem]',
    letters: 'text-xs',
  },
  md: {
    base: 'w-10 h-10',
    placeholder: 'w-[2.75rem] h-[2.75rem]',
    letters: '',
  },
  lg: {
    base: 'w-14 h-14',
    placeholder: 'w-[3.75rem] h-[3.75rem] top-1',
    letters: 'text-xl',
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
