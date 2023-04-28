import { withRouter } from 'react-router';
import {
  Row,
  Col,
  Breadcrumb,
  Card,
  Form,
  Input,
  DatePicker,
  Button,
  Select,
  Divider,
  TimePicker,
  InputNumber,
} from 'antd';
import { DashboardOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { generateEmployeeID } from '@utils/commonUtil';
import moment from 'moment';

export const EditEmployee = (props) => {
  const { editEmployee, redirect, initialValues } = props;
  const [form] = Form.useForm();

  const onFinish = (formValues) => {
    editEmployee(formValues);
    redirect('/', 'EMPLOYEES');
  };

  // if(!initialValues){
  //   return <>No CONTENT</>
  // }
  return (
    <>
      <div className="container-fluid no-breadcrumb page-dashboard">
        <article className="article" id="components-form-demo-advanced-search">
          {' '}
          <Row type="flex" justify="space-between">
            <Col xl={16} lg={16} md={24} xs={24} sm={24}>
              <h4 className="article-title">Add Employee</h4>
            </Col>
            <Col>
              <Breadcrumb separator="/">
                <Breadcrumb.Item>
                  <DashboardOutlined />
                  <Link to={'/'}>Managed Users</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item> Employees</Breadcrumb.Item>

                <Breadcrumb.Item>Add Employee</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Card>
            <Form
              form={form}
              className="user-form"
              initialValues={{
                ...initialValues,
                dob: moment(initialValues.dob),
                startsAt: moment(initialValues.startsAt),
                endsIn: moment(initialValues.endsIn),
              }}
              onFinish={onFinish}
            >
              <div>
                <h6 style={{ fontWeight: 'bold' }}>Basic Information</h6>
                <Divider />
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'firstName'}
                      label="First Name"
                      rules={[{ required: true, message: 'First Name is required.' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'middleName'}
                      label="Middle Name"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'lastName'}
                      label="Last name"
                      rules={[{ required: true, message: 'Name is required.' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'dob'}
                      label="Date of Birth"
                      rules={[{ required: true, message: 'Date of Birth is required.' }]}
                    >
                      <DatePicker />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'gender'}
                      label="Gender"
                      rules={[{ required: true, message: 'Gender is required' }]}
                    >
                      <Select
                        options={[
                          {
                            value: 'MALE',
                            label: 'Male',
                          },
                          {
                            value: 'FEMALE',
                            label: 'Female',
                          },
                          {
                            value: 'OTHERS',
                            label: 'Others',
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'address'}
                      label="Address"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'phone'}
                      label="Phone"
                      rules={[{ required: true, message: 'Phone is required' }]}
                    >
                      <Input maxLength={10} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'email'}
                      label="Email"
                      rules={[{ required: true, message: 'Email is required' }]}
                    >
                      <Input maxLength={60} />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <Divider />
              <div>
                <h6 style={{ fontWeight: 'bold' }}>Working Hour</h6>
                <Divider />
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'startsAt'}
                      label="Starts At"
                      rules={[{ required: true, message: 'Starting hour is required.' }]}
                    >
                      <TimePicker minuteStep={30} format="HH:mm" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'endsIn'}
                      label="Ends In"
                      rules={[{ required: true, message: 'Ending hour is required.' }]}
                    >
                      <TimePicker minuteStep={30} format="HH:mm" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div>
                <h6 style={{ fontWeight: 'bold' }}>Job</h6>
                <Divider />
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'jobPosition'}
                      label="Job Position"
                      rules={[{ required: true, message: 'Job Position is required.' }]}
                    >
                      <Select
                        options={[
                          {
                            value: 'Electrical',
                            label: 'Electrical',
                          },
                          {
                            value: 'Fabricator',
                            label: 'Fabricator',
                          },
                          {
                            value: 'Paint',
                            label: 'Paint',
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'team'}
                      label="Team"
                    >
                      <Select />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div>
                <h6 style={{ fontWeight: 'bold' }}>Billable Information</h6>
                <Divider />
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 6 }}
                      name={'billableHours'}
                      label="Billable Hours"
                    >
                      <InputNumber
                        controls={false}
                        addonAfter={
                          <div>
                            <span>Hours</span>
                          </div>
                        }
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <Row className="mt-5" type="flex" justify="space-between">
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Row>
            </Form>
          </Card>
        </article>
      </div>
    </>
  );
};

export default withRouter(EditEmployee);
