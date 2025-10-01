// server/templates/contactEmail.ts

// Generates the plain text version of the contact form email in German.
export function getContactEmailText({
	name,
	email,
	phone,
	message,
}: {
	name: string;
	email: string;
	phone: string;
	message: string;
}): string {
	return `
  Hallo ${name},
  
  vielen Dank für deine Nachricht über unser Kontaktformular!
  
  Wir haben folgende Informationen erhalten:
  - Name: ${name}
  - E-Mail: ${email}
  - Telefon: ${phone}
  
  Nachricht:
  ${message}
  
  Wir melden uns so schnell wie möglich bei dir.
  
  Ahoi,
  Dein Theaterdeck
  
  Hinweis: Diese Nachricht wurde auch an den Seiteninhaber weitergeleitet.
    `.trim();
}

// Generates the HTML version of the contact form email in German.
export function getContactEmailHtml({
	name,
	email,
	phone,
	message,
}: {
	name: string;
	email: string;
	phone: string;
	message: string;
}): string {
	return `
  <p>Hallo ${name},</p>
  <p>vielen Dank für deine Nachricht über unser Kontaktformular!</p>
  <p>Wir haben folgende Informationen erhalten:</p>
  <ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>E-Mail:</strong> ${email}</li>
    <li><strong>Telefon:</strong> ${phone}</li>
  </ul>
  <p><strong>Nachricht:</strong></p>
  <p>${message}</p>
  <p>Wir melden uns so schnell wie möglich bei dir.</p>
  <p>Ahoi,<br>Dein Theaterdeck</p>
  <hr>
  <p><em>Hinweis: Diese Nachricht wurde auch an den Seiteninhaber weitergeleitet.</em></p>
    `.trim();
}
