import React from 'react'
import { Card, CardHeader } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import Link from 'next/link'

const LoginForm = ({csrfToken, onChangeUsername, onChangePassword, onSubmit}) => (
  <Card>
    <div>
      <CardHeader
          title="Login!"
          subtitle="para tus accesos!"
          avatar="static/users.png"
          actAsExpander={true}
      />
      <form method="post" onSubmit={onSubmit}>
        <input name="_csrf" type="hidden" value={csrfToken}/>
        <div className="field-line">
          <TextField 
            floatingLabelText="username"
            name="username"
            type="email"
            onChange={onChangeUsername}
            style={{height:'68px'}}
          />
        </div>
        <div className="field-line">
          <TextField 
            floatingLabelText="password"
            name="password"
            type="password"
            onChange={onChangePassword}
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
);

export default LoginForm
