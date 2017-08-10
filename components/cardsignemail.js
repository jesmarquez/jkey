import React from 'react'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Link from 'next/link'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const CardSignUpEmail = ({onSubmit}) => (
  <div className="container">
    <Card>
      <div className="container">
        <CardHeader
          title="Registro por email"
          subtitle="Email"
          actAsExpander={false}
          showExpandableButton={false}
        />
        <form method="post" action="/email/signin" onSubmit={onSubmit}>
          <div className="field-line">
            <TextField 
              floatingLabelText="email"
              name="email"
              type="email"
            />
          </div>
          <br />
          <div className="field-line">
            <RaisedButton
              type="submit"
              label="Enviar email"
              primary
            />
          </div>
        </form>
      </div>
    </Card>
  </div> // div container
)

export default CardSignUpEmail
