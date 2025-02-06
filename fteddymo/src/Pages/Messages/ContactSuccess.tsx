
import { Link } from "react-router-dom";
import BlankMainLayout from "../../Layouts/BlankMainLayout";

const ContactSuccess = () => {
    return (
		<BlankMainLayout title="Contact Success">
			<div className="container w-100 vh-100 d-flex justify-content-around">
				<div
					className="row m-auto w-100 vh-100 justify-content-evenly"
					style={{ height: 300 }}
				>
					<div className="col-5 d-flex align-items-center">
						<div className="w-100">
							<div className="col-12">
								<div className="fw-normal">
                                    <h1>Thank You!</h1>
                                    <p>Your message has been successfully submitted. We will get back to you soon.</p>
                                </div>
								<Link className="btn btn-secondary" to="/">
                                    Go Back to Home
								</Link>
							</div>
						</div>
					</div>
					<div className="col-auto d-flex align-items-center">
						<img
							src="/imgs/profile.jpg"
							className="rounded-circle w-100"
							alt="Logichog logo"
							style={{ height: 300 }}
						/>
					</div>
				</div>
			</div>
		</BlankMainLayout>
    );
};

export default ContactSuccess;
