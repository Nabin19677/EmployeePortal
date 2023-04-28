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
import { DashboardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { generateID } from '@utils/commonUtil';

export const CreateTeam = (props) => {
  const {
    addTeam,
    redirect,
    employeeState: { employees },
  } = props;
  const [form] = Form.useForm();

  const onFinish = (formValues) => {
    let id = generateID();
    addTeam({ id, ...formValues });
    redirect('/', 'TEAMS');
  };
  return (
    <>
      <div className="container-fluid no-breadcrumb page-dashboard">
        <article className="article" id="components-form-demo-advanced-search">
          {' '}
          <Row type="flex" justify="space-between">
            <Col xl={16} lg={16} md={24} xs={24} sm={24}>
              <h4 className="article-title">Add Team</h4>
            </Col>
            <Col>
              <Breadcrumb separator="/">
                <Breadcrumb.Item>
                  <DashboardOutlined />
                  <Link to={'/'}>Managed Users</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item> Teams</Breadcrumb.Item>

                <Breadcrumb.Item>Add Team</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Card>
            <Form form={form} className="user-form" onFinish={onFinish}>
              <div>
                <h6 style={{ fontWeight: 'bold' }}>Basic Information</h6>
                <Divider />
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 8 }}
                      name={'teamName'}
                      label="Team Name"
                      rules={[{ required: true, message: 'Team Name is required.' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 8 }}
                      name={'teamPassword'}
                      label="Team Password"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div>
                <h6 style={{ fontWeight: 'bold' }}>Members</h6>
                <Divider />
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 8 }}
                      name={'members'}
                      label="Memebers"
                    >
                      <Select
                        mode="multiple"
                        options={employees.map((emp) => ({
                          value: emp.id,
                          label: [emp.firstName, emp.middleName, emp.lastName].join(' '),
                        }))}
                        onChange={(values) => {
                          let totalSum = employees
                            .filter((emp) => values.includes(emp.id))
                            .map((emp) => emp.billableHours)
                            .reduce((partialSum, a) => partialSum + a, 0);
                            console.log(totalSum)
                          form.setFieldsValue({
                            billableHours :  totalSum
                          })
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={8}>
                    <Form.Item
                      wrapperCol={{ span: 24 }}
                      labelCol={{ span: 8 }}
                      name={'billableHours'}
                      label="Billable Hours"
                    >
                      <Input disabled suffix="Hours" />
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

export default withRouter(CreateTeam);
