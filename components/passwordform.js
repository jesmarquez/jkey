import React from 'react'
import { Card, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const PasswordForm = ({onSubmit, csrfToken}) => (
  <div className="container">
    <Card>
      <div className="container">
        <CardHeader
            title="Password"
            subtitle="escriba su contraseña"
            avatar="../static/key.png"
            actAsExpander={true}
        />
        <form action="/auth/savepassword" method="post">
          <input name="_csrf" type="hidden" value={csrfToken}/>
          <div className="field-line">
            <TextField 
              floatingLabelText="contraseña"
              name="password"
              type="password"
            />
          </div>
          <div className="field-line">
            <TextField 
              floatingLabelText="contraseña confirmada"
              name="password-confirm"
              type="password"
            />
          </div>
          <br />
          <div className="field-line">
            <RaisedButton
              type="submit"
              label="Crear password!"
              primary
            />
          </div>
        </form>
      </div>
    </Card>
  </div>
)

export default PasswordForm
