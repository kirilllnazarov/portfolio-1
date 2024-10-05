import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import emailjs from "@emailjs/browser";
import React, { ElementRef, useRef } from "react";
import { S } from "./Contact_Style";

export const Contact: React.FC = () => {
	const form = useRef<ElementRef<'form'>>(null);

	const sendEmail = (e: any) => {
		e.preventDefault();
		if (!form.current) {
			return;
		}
		emailjs
			.sendForm("service_qelri5j", "template_xs2hptt", form.current, {
				publicKey: "7JJbqQw0GzfpO2ari",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
			e.target.reset()
	};

	return (
		<S.Contact id={"contact"}>
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<S.Form ref={form} onSubmit={sendEmail}>
					<S.Field required placeholder={"name"} name={"user_name"} />
					<S.Field required placeholder={"email"} name={"email"} />
					<S.Field required placeholder={"subject"} name={"subject"} />
					<S.Field required placeholder={"massage"} as={"textarea"} name={""} />
					<Button type={"submit"}>Send message</Button>
				</S.Form>
			</Container>
		</S.Contact>
	);
};
