import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
// import { Inertia } from "@inertiajs/iner";

import MainLayout from "../Layouts/MainLayout";

export default function Contact() {
	const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
	});

	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	post("/contact");
	// };
	const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
		post("/contact");

        // Inertia.post("/contact", formData, {
        //     onError: (errorBag) => {
        //         setErrors(errorBag);
        //     },
        //     onSuccess: () => {
        //         setFormData({
        //             name: "",
        //             email: "",
        //             subject: "",
        //             message: "",
        //         });
        //         setErrors({});
        //         alert("Message submitted successfully!");
        //     },
        // });
    };
	
	return (
		<MainLayout>
			<Head title="Contact" />
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body">
								<h1 className="card-title h3 mb-4">
									Contact Me
								</h1>
								<div className="mb-4">
									<p>
										Feel free to reach out to me using the
										following contact information:
									</p>
									<ul className="list-unstyled">
										<li>
											Email: teddymorwasetla@gmail.com
										</li>
										<li>Phone: 078 602 4005</li>
										<li>Location: Johannesburg, Gauteng</li>
									</ul>
									<p>
										I'm open to opportunities within South
										Africa and willing to relocate.
									</p>
								</div>
								<form onSubmit={handleSubmit}>
									<div className="mb-3">
										<label
											htmlFor="name"
											className="form-label"
										>
											Name
										</label>
										<input
											type="text"
											className={`form-control ${
												errors.name ? "is-invalid" : ""
											}`}
											id="name"
											value={data.name}
											onChange={(e) =>
												setData("name", e.target.value)
											}
											required
										/>
										{errors.name && (
											<div className="invalid-feedback">
												{errors.name}
											</div>
										)}
									</div>
									<div className="mb-3">
										<label
											htmlFor="email"
											className="form-label"
										>
											Email
										</label>
										<input
											type="email"
											className={`form-control ${
												errors.email ? "is-invalid" : ""
											}`}
											id="email"
											value={data.email}
											onChange={(e) =>
												setData("email", e.target.value)
											}
											required
										/>
										{errors.email && (
											<div className="invalid-feedback">
												{errors.email}
											</div>
										)}
									</div>
									<div className="mb-3">
										<label
											htmlFor="subject"
											className="form-label"
										>
											Subject
										</label>
										<input
											type="test"
											className={`form-control ${
												errors.subject ? "is-invalid" : ""
											}`}
											id="subject"
											value={data.subject}
											onChange={(e) =>
												setData("subject", e.target.value)
											}
											required
										/>
										{errors.subject && (
											<div className="invalid-feedback">
												{errors.subject}
											</div>
										)}
									</div>
									<div className="mb-3">
										<label
											htmlFor="message"
											className="form-label"
										>
											Message
										</label>
										<textarea
											className={`form-control ${
												errors.message
													? "is-invalid"
													: ""
											}`}
											id="message"
											rows={4}
											value={data.message}
											onChange={(e) =>
												setData(
													"message",
													e.target.value
												)
											}
											required
										></textarea>
										{errors.message && (
											<div className="invalid-feedback">
												{errors.message}
											</div>
										)}
									</div>
									<button
										type="submit"
										className="btn btn-primary"
										disabled={processing}
									>
										{processing
											? "Sending..."
											: "Send Message"}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
