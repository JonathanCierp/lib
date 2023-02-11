enum SIZES {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

const sizes = {
  xs: {
    base: 'py-2 px-3 text-xs font-medium',
    icon: 'w-3.5 h-3.5',
  },
  sm: {
    base: 'py-2 px-3 text-sm font-medium',
    icon: 'w-4 h-4',
  },
  md: {
    base: 'py-2.5 px-5 text-sm font-medium',
    icon: 'w-5 h-5',
  },
  lg: {
    base: 'py-3 px-5 text-base font-medium',
    icon: 'w-5 h-5',
  },
  xl: {
    base: 'py-3.5 px-6 text-base font-medium',
    icon: 'w-6 h-6',
  },
}

enum POSITIONS {
  top = 'top',
  top_right = 'top_right',
  right = 'right',
  bottom_right = 'bottom_right',
  bottom = 'bottom',
  bottom_left = 'bottom_left',
  left = 'left',
  top_left = 'top_left',
}

const positions = {
  top: {
    base: 'top-0',
    rounded: {
      base: '',
      dot: '',
    },
    square: {
      base: '',
      dot: '',
    },
  },
  top_right: {
    base: 'top-0 right-0',
    rounded: {
      base: 'translate-x-1 -translate-y-1.5',
      dot: '-translate-x-0.5',
    },
    square: {
      base: 'translate-x-1 -translate-y-1.5',
      dot: 'translate-x-0.5 -translate-y-0.5',
    },
    // square: 'translate-x-0.5 -translate-y-0.5',  translate-x-2 -translate-y-2
  },
  right: {
    base: '',
    rounded: {
      base: '',
      dot: '',
    },
    square: {
      base: '',
      dot: '',
    },
  },
  bottom_right: {
    base: '',
    rounded: {
      base: '',
      dot: '',
    },
    square: {
      base: '',
      dot: '',
    },
  },
  bottom: {
    base: '',
    rounded: {
      base: '',
      dot: '',
    },
    square: {
      base: '',
      dot: '',
    },
  },
  bottom_left: {
    base: '',
    rounded: {
      base: '',
      dot: '',
    },
    square: {
      base: '',
      dot: '',
    },
  },
  left: {
    base: '',
    rounded: {
      base: '',
      dot: '',
    },
    square: {
      base: '',
      dot: '',
    },
  },
  top_left: {
    base: '',
    rounded: {
      base: '',
      dot: '',
    },
    square: {
      base: '',
      dot: '',
    },
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
    base: 'text-gray-900 bg-white',
  },
  success: {
    base: 'text-white bg-green-500',
  },
  error: {
    base: 'text-white bg-red-500',
  },
  info: {
    base: 'text-white bg-blue-500',
  },
  warning: {
    base: 'text-white bg-orange-500',
  },
}

export { SIZES, sizes, POSITIONS, positions, COLORS, colors }
