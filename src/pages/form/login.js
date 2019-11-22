import React, { Component } from 'react';
import { Form, Card, Input, Button, message, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        message.success(`${userInfo.userName}: Congrats! Your password is ${userInfo.password}`);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="Inline Login Form" className="card-wrap">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="Please enter username" />
            </FormItem>
            <FormItem>
              <Input placeholder="Please enter password" />
            </FormItem>
            <FormItem>
              <Button type="primary">Login</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="Login Form in Multi lines" className="card-wrap">
          <Form style={{width: 300}}>
            <FormItem>
              {
                getFieldDecorator(
                  'userName', 
                  {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: 'must enter an username'
                      },
                      {
                        min: 5, max: 10,
                        message: 'Length error'
                      },
                      {
                        //pattern: /^\w+$/g,
                        pattern: new RegExp('^\\w+$', 'g'),
                        message: 'Username must be number and characters'
                      }
                    ]
                  }
                )(<Input prefix={<Icon type="user" />} placeholder="Please enter username" />)
              }
            </FormItem>
            <FormItem>
            {
              getFieldDecorator(
                'password', 
                {
                  initialValue: '',
                  rules: []
                }
              )(<Input prefix={<Icon type="lock" />} placeholder="Please enter password" />)
            }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator(
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                    rules: []
                  }
                )(<Checkbox>Remember password</Checkbox>)
              }
              <a href="#" style={{float: 'right'}}>Forget password</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>Login</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
 
export default Form.create()(FormLogin);