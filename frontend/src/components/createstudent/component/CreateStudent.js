import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Select from "./Select";
import { SELCECTIONS } from "./constant";
import { Wrapper, Form, Button, ImageWrapper } from "./createstudent.styles";
import DEFAULTIMAGE from "../assets/nopics.webp";

import axios from "axios";

const CreateStudent = () => {
	const [showModal, setShowModal] = useState(false);
	const [message, setMessage] = useState("");
	const [files, setFiles] = useState(DEFAULTIMAGE);
	const [modalError, setModalError] = useState(false);
	const [formData, setFormData] = useState({
		img: DEFAULTIMAGE,
		firstName: "",
		lastName: "",
		age: "",
		gender: "",
		Dept: "",
		apiError: false,
		formError: false,
	});

	const createStudent = async () => {
		try {
			const { data } = await axios.post("http://localhost:5000/students", {
				img: formData.img,
				name: `${formData.firstName} ${formData.lastName}`,
				age: Number(formData.age),
				gender: formData.gender,
				Dept: formData.Dept,
			});
			const {
				created_student: { name },
			} = data;
			const message_ = `${name} was sucessfully added to the student records`;
			setMessage(message_);
			handleModal(true);
			setModalError(false);
			resetForm();
		} catch (err) {
			const message_ = `An unexpected error occured. Try again another time`;
			handleModal(true);
			setModalError(true);
			setMessage(message_);
			console.log(err);
			setFormData({ ...formData, apiError: true });
		}
	};

	/*Reset form and image */
	const resetForm = () => {
		setFormData({
			img: DEFAULTIMAGE,
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			Dept: "",
			apiError: false,
			formError: false,
		});

		setFiles(DEFAULTIMAGE);
	};

	const handleModal = () => {
		setShowModal(!showModal);
	};
	/*Validate age as number */
	const validateAge = (e) => {
		const age = e.target.value.trim();
		if (!isNaN(age) && age) {
			e.target.classList.remove("error");
			setFormData({ ...formData, age: age });
		} else {
			e.target.classList.add("error");
			setFormData({ ...formData, formError: true, age: age });
		}
	};

	/* Validate gender and Dept input*/
	const validateSelect = (e) => {
		e.preventDefault();
		if (!formData.gender || !formData.Dept) {
			setFormData({ ...formData, formError: true });
		} else {
			setFormData({ ...formData, formError: false });
			createStudent();
		}
	};

	/*creates file Url and update File */
	const handleFile = (e) => {
		setFiles(URL.createObjectURL(e.target.files[0]));
	};

	useEffect(() => {
		setFormData({ ...formData, img: files });
	}, [files]);

	return (
		<Wrapper>
			<Form onSubmit={validateSelect}>
				<Wrapper style={{ flexDirection: "column" }}>
					<ImageWrapper>
						<img src={files} alt="profile" />
					</ImageWrapper>
					<Input
						label="Image"
						id="image"
						type="file"
						style={{ width: "140px", padding: "10px" }}
						onChange={(e) => handleFile(e)}
					/>
				</Wrapper>

				<Input
					label="First Name"
					id="first_name"
					onChange={(e) =>
						setFormData({ ...formData, firstName: e.target.value })
					}
					value={formData.firstName}
					required
				/>
				<Input
					label="Last Name"
					id="last_name"
					onChange={(e) =>
						setFormData({ ...formData, lastName: e.target.value })
					}
					value={formData.lastName}
					required
				/>
				<Input
					label="Age"
					id="age"
					onChange={(e) => validateAge(e)}
					value={formData.age}
					required
				/>
				{SELCECTIONS.map((options, i) => {
					return (
						<Select
							key={i}
							options={options}
							placeHolder={i === 0 ? "Select Gender" : "Select your Depertment"}
							onChange={(op) =>
								setFormData({ ...formData, [`${op.key}`]: op.name })
							}
							error={formData.formError}
						/>
					);
				})}

				<Button type="submit">Create Student</Button>
			</Form>
			<Modal
				message={message}
				error={modalError}
				handleModal={handleModal}
				showModal={showModal}
			/>
		</Wrapper>
	);
};
export default CreateStudent;
