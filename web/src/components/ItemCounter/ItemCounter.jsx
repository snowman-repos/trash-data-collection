import { Form } from '@govtechsg/sgds-react/Form'
import { QuantityToggle } from '@govtechsg/sgds-react/QuantityToggle'

const ItemCounter = (props) => {
  return (
    <div className="rounded mb-3 p-3 border">
      <Form.Label id={props.id}>{props.label}</Form.Label>
      {props.helperText && (
        <Form.Text className="lh-sm" muted>
          {props.helperText}
        </Form.Text>
      )}

      <QuantityToggle
        size="lg"
        variant="secondary"
        count={props.count}
        setCount={props.setCount}
        aria-describedby={props.id}
      />
    </div>
  )
}

export default ItemCounter
