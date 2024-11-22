import React, { useState } from 'react';
import { Button, Modal, Form, InputNumber, Select, DatePicker } from 'antd';

const App: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [form] = Form.useForm();

	const showModal = () => {
		setVisible(true)
	}

	const handleSubmit = (values) => {
		alert(JSON.stringify(values))
		setVisible(false)
		form.resetFields()
	}

	const handleCancel = () => {
		setVisible(false)
		form.resetFields()
	};

	return (
		<>
			<Button onClick={showModal}>Open Modal</Button>

			<Modal open={visible} onOk={form.submit} onCancel={handleCancel} title="Modal">
				<Form form={form} onFinish={handleSubmit}>
					<Form.Item name="name" label="Input" rules={[{ required: true, message: "This field is required." }]}>
						<DatePicker />
					</Form.Item>
					<Form.Item name="select" label="Select" rules={[{ message: "This field is required." }]}>
						<Select options={[{ value: 'sample', label: 'sample' }]} />
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}

export default App;

