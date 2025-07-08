import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Row,
	Section,
	Text,
} from "@react-email/components";

export const ConfirmationEmail = ({ name }: { name: string }) => {
	return (
		<Html>
			<Head />

			<Body style={main}>
				<Section style={main}>
					<Container style={container}>
						<Section style={{ paddingBottom: "20px" }}>
							<Row>
								<Text style={heading}>Thanks for Contacting Me, {name}</Text>
								<Text style={review}>
									Your email has been received by me and I will be responding to
									it in a few business days!
								</Text>
								<Text style={paragraph}>
									Note: This is an automated email. Please do not reply to this
								</Text>

								<Button style={button} href="https://arinji.com/">
									Check out my website
								</Button>
							</Row>
						</Section>

						<Hr style={hr} />
					</Container>
				</Section>
			</Body>
		</Html>
	);
};

export default ConfirmationEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "580px",
};

const heading = {
	fontSize: "32px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "18px",
	lineHeight: "1.4",
	color: "#484848",
};

const review = {
	...paragraph,
	padding: "24px",
	backgroundColor: "#f2f3f3",
	borderRadius: "4px",
};

const button = {
	backgroundColor: "#ff5a5f",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "18px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	width: "100%",
	paddingTop: "19px",
	paddingBottom: "19px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};
