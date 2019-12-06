import React, { Component } from 'react';
import { Form, Card, Input, Button, message, Icon, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, InputNumber } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));
    message.success(`${userInfo.userName}: Congrats! Your password is ${userInfo.password}`);
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          userImg: imageUrl,
          loading: false,
        }),
      );
    }
  }

  render() { 
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }

    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: { span: 12, offset: 4 }
      }
    }

    return (
      <div>
        <Card title="Register Form">
          <Form layout="horizontal">
            <FormItem label="Username" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: 'Username cant be empty'
                    }
                  ]
                })(<Input placeholder="Please Enter Username" />)
              }
            </FormItem>
            <FormItem label="Password" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: 'Password can\'t be empty'
                    }
                  ]
                })(<Input type="password" placeholder="Please Enter Password" />)
              }
            </FormItem>

            <FormItem label="Gender" {...formItemLayout}>
              {
                getFieldDecorator('gender', {
                  initialValue: '2'
                })(
                  <RadioGroup>
                    <Radio value="1">Male</Radio>
                    <Radio value="2">Female</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>

            <FormItem label="Age" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(
                  <InputNumber />
                )
              }
            </FormItem>

            <FormItem label="Status" {...formItemLayout}>
              {
                getFieldDecorator('status', {
                  initialValue: '3'
                })(
                  <Select>
                    <Option value="1">Never Married</Option>
                    <Option value="2">Married</Option>
                    <Option value="3">Single</Option>
                    <Option value="4">Separated</Option>
                  </Select>
                )
              }
            </FormItem>

            <FormItem label="Hobby" {...formItemLayout}>
              {
                getFieldDecorator('hobby', {
                  initialValue: ['2', '3']
                })(
                  <Select mode="multiple">
                    <Option value="1">Listening</Option>
                    <Option value="2">Reading</Option>
                    <Option value="3">Writing</Option>
                    <Option value="4">Speaking</Option>
                    <Option value="5">Walking</Option>
                    <Option value="6">Movie</Option>
                    <Option value="7">Sports</Option>
                  </Select>
                )
              }
            </FormItem>

            <FormItem label="Is Married" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>

            <FormItem label="Birthday" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2019-11-23 12:00:59')
                })(
                  <DatePicker showTime
                              format="YYYY-MM-DD HH:mm:ss" />
                )
              }
            </FormItem>

            <FormItem label="Address" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '1 King St, Hobart, Tas 7000'
                })(
                  <TextArea autoSize={
                    {
                      minRows: 4, maxRows: 6
                    }
                  } />
                )
              }
            </FormItem>

            <FormItem label="Brekki Time" {...formItemLayout}>
              {
                getFieldDecorator('brekkiTime')(
                  <TimePicker />
                )
              }
            </FormItem>

            <FormItem label="Avatar" {...formItemLayout}>
              {
                getFieldDecorator('userImg', {
                  valuePropName: 'fileList'
                })(
                  <Upload listType="picture-card"
                          showUploadList={false}
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          //action="//jsonplaceholder.typicode.com/posts"
                          onChange={this.handleChange}>
                    {this.state.userImg ? <img src={this.state.userImg} alt="" /> : <Icon type="plus" />}
                  </Upload>
                )
              }
            </FormItem>

            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('consent', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>I've read the <a href="#">Hellobike agreement</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>Register</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
 
export default Form.create()(FormRegister);