import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'

const AddItem = (props) => {

    return(
      <Form inline onSubmit= {props.addItem}>
        <FormControl type="text"
              placeholder="Enter Task"
              value= {props.currentValue}
              onChange= {props.updateinputValue} />

        <Button type="submit">Add Task</Button>
      </Form>
    )
}

export default AddItem;