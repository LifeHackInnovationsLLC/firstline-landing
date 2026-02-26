"use server";

export async function contactFormAction(formData: FormData) {
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");
	console.log(name, email, message);

	return {
		success: true,
		message: "Message sent successfully",
	};
}
