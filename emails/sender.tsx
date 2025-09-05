import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Row,
	Section,
	Text,
} from "@react-email/components";

export const SenderEmail = ({
	name,
	email,
	subject,
	body,
}: {
	name: string;
	email: string;
	subject: string;
	body: string;
}) => {
	return (
		<Html>
			<Head />

			<Body style={main}>
				<Section style={main}>
					<Container style={container}>
						<Section style={{ paddingBottom: "20px" }}>
							<Row>
								<Text style={heading}>New Contact Form Submission</Text>
								<Text style={review}>Name: {name}</Text>
								<Text style={review}>Email: {email}</Text>
								<Text style={review}>Subject: {subject}</Text>
								<Text style={review}>Body: {body}</Text>
							</Row>
						</Section>

						<Hr style={hr} />
					</Container>
				</Section>
			</Body>
		</Html>
	);
};

export default SenderEmail;

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
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};
