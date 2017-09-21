import React from 'react'
import { Card, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Link from 'next/link'

const LoginForm = ({csrfToken}) => (
  <div className="container">
    <Card>
      <div className="container">
        <CardHeader
            title="Login!"
            subtitle="para tus accesos!"
            avatar="static/users.png"
            actAsExpander={true}
        />
        <form method="post" action="/auth/login">
          <input name="_csrf" type="hidden" value={csrfToken}/>
          <div className="field-line">
            <TextField 
              floatingLabelText="username"
              name="username"
              type="email"
            />
          </div>
          <div className="field-line">
            <TextField 
              floatingLabelText="password"
              name="password"
              type="password"
            />
          </div>
          <br />
          <div className="field-line">
            <RaisedButton
              type="submit"
              label="Login!"
              primary
            />
          </div>
        </form>
      </div>
    </Card>
  </div>
);

export default LoginForm
