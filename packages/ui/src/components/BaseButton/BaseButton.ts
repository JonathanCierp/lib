enum SIZES {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}
const sizes = {
  xs: {
    button: 'py-2 px-3 text-xs font-medium',
    icon: 'w-3.5 h-3.5',
  },
  sm: {
    button: 'py-2 px-3 text-sm font-medium',
    icon: 'w-4 h-4',
  },
  md: {
    button: 'py-2.5 px-5 text-sm font-medium',
    icon: 'w-5 h-5',
  },
  lg: {
    button: 'py-3 px-5 text-base font-medium',
    icon: 'w-5 h-5',
  },
  xl: {
    button: 'py-3.5 px-6 text-base font-medium',
    icon: 'w-6 h-6',
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
    button:
      'text-gray-900 bg-white border-2 border-white hover:bg-gray-200 hover:border-gray-200 hover:text-black focus:ring-gray-200',
    outlined:
      'text-gray-700 bg-transparent border-2 border-gray-700 hover:bg-white hover:border-white hover:text-gray-700 focus:ring-white',
  },
  success: {
    button:
      'text-white bg-green-700 border-2 border-green-700 hover:bg-green-800 hover:border-green-800 focus:ring-green-300',
    outlined:
      'text-green-700 bg-transparent border-2 border-green-700 hover:bg-green-700 hover:border-green-700 hover:text-white focus:ring-green-300',
  },
  error: {
    button:
      'text-white bg-red-700 border-2 border-red-700 hover:bg-red-800 hover:border-red-800 focus:ring-red-300',
    outlined:
      'text-red-700 bg-transparent border-2 border-red-700 hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-red-300',
  },
  info: {
    button:
      'text-white bg-blue-700 border-2 border-blue-700 hover:bg-blue-800 hover:border-blue-800 focus:ring-blue-300',
    outlined:
      'text-blue-700 bg-transparent border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-700 hover:text-white focus:ring-blue-300',
  },
  warning: {
    button:
      'text-white bg-orange-700 border-2 border-orange-700 hover:bg-orange-800 hover:border-orange-800 focus:ring-orange-300',
    outlined:
      'text-orange-700 bg-transparent border-2 border-orange-700 hover:bg-orange-700 hover:border-orange-700 hover:text-white focus:ring-orange-300',
  },
}

export { SIZES, sizes, COLORS, colors }
