import ItemCounter from './ItemCounter'

const mockProps = {
  id: 'item-counter',
  label: 'Items',
  helperText: 'Select the number of items',
  count: 0,
  setCount: () => {},
}

export default { component: ItemCounter, args: { ...mockProps } }

{
  /* <ItemCounter {...mockProps} /> */
}

export const Primary = {}
