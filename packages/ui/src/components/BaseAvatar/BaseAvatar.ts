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

export { SIZES, sizes }
