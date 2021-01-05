import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import FormBuilder from "antd-form-builder";

// import BX24 from './BX24'

// import { BX24 } from 'bx24';
import BX24Wrapper from './wrapper'

// const bx24 = new BX24(window, parent);

// bx24.getAuth().then(function (auth) {
//   console.log(auth);
// });


const onClick = (field) => console.log(field)
const Demo = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const itemColumns = [
    { key: 'key', dataIndex: 'name', placeholder: 'ware_key' },
    { key: 'ware_key', dataIndex: 'name', placeholder: 'ware_key' },
    { key: 'name', dataIndex: 'name', placeholder: 'name' },
    { key: 'quantity', dataIndex: 'quantity', placeholder: 'quantity', widget: 'number' },
    { key: 'remove', render: (field) => <MinusCircleOutlined onClick={(field) => onClick} /> }
  ]

  let orderMeta = [
    { key: 'key', dataIndex: 'number', placeholder: 'number', colSpan: 2 },
    { key: 'customer.name', dataIndex: 'customer.name', placeholder: 'customer.name', colSpan: 2 },
    { key: 'customer.phone', dataIndex: 'customer.phone', placeholder: 'customer.phone' },
    { key: 'customer.email', dataIndex: 'customer.email', placeholder: 'customer.email' },
    { key: 'customer.city', dataIndex: 'customer.city', placeholder: 'customer.city' },
    { key: 'delivery.service', dataIndex: 'delivery.service', placeholder: 'delivery.service', widget: 'select' },
    { key: 'delivery.type', dataIndex: 'customer.email', placeholder: 'customer.email' },
    { key: 'delivery.cost', dataIndex: 'delivery.cost', placeholder: 'delivery.cost', widget: 'number' },
  ]
  return (
    <Form layout="horizontal" name="order" onFinish={onFinish} autoComplete="off">

      <FormBuilder name="items" form="order" meta={orderMeta} />

      <Form.List name="items">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >



                <Form.Item
                  {...field}
                  name={[field.name, "ware_key"]}
                  fieldKey={[field.fieldKey, "ware_key"]}
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "last"]}
                  fieldKey={[field.fieldKey, "last"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "last"]}
                  fieldKey={[field.fieldKey, "last"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, "last"]}
                  fieldKey={[field.fieldKey, "last"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add item
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<Demo />, document.getElementById("container"));
