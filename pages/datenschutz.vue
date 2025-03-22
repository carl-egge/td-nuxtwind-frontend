<template>
	<div>
		<PageHero
			title="Datenschutz"
			:breadcrumbs="[{ label: 'HOME', to: '/' }]"
			:background-image="`url(${heroimage})`"
		/>
		<main>
			<section id="rights-general" class="my-8">
				<h2>Allgemeine Hinweise</h2>
				<p>
					Die folgenden Hinweise geben einen einfachen Überblick darüber, was
					mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
					besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
					persönlich identifiziert werden können. Ausführliche Informationen zum
					Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
					Datenschutzerklärung.
				</p>
			</section>
			<hr class="mx-auto my-2 w-6" />
			<section id="rights-data-acquisition" class="my-8">
				<h2>Datenerfassung auf unserer Website</h2>
				<UAccordion
					color="primary"
					variant="solid"
					size="md"
					:ui="{ item: { padding: 'pl-2' } }"
					:items="dataAcquistion"
				/>
			</section>
			<hr class="mx-auto my-2 w-6" />
			<section id="rights-remarks" class="my-8">
				<h2>Allgemeine Hinweise und Pflichtinformationen</h2>
				<UAccordion
					color="primary"
					variant="solid"
					size="md"
					:ui="{ item: { padding: 'pl-2' } }"
					:items="generalRemarks"
				/>
			</section>
			<hr class="mx-auto my-2 w-6" />
			<section id="rights-agb" class="my-8">
				<h2>AGB : Allgemeine Geschäftsbedingungen TheaterDECK Hamburg</h2>
				<UAccordion
					color="primary"
					variant="solid"
					size="md"
					:ui="{ item: { padding: 'pl-2' } }"
					:items="agb"
				/>
			</section>
			<hr class="mx-auto my-2 w-6" />
		</main>
	</div>
</template>

<script setup>
	/**
	 * PAGE: datenschutz.vue
	 *
	 * Page for Datenschutzerklärung.
	 */
	import heroimage from '../assets/images/hero-highkey-petterson.jpg';

	const dataAcquistion = [
		{
			id: 0,
			label:
				'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
			content:
				'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
		},
		{
			id: 1,
			label: 'Wie erfassen wir Ihre Daten?',
			content:
				'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.',
		},
		{
			id: 2,
			label: 'Wofür nutzen wir Ihre Daten?',
			content:
				'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
		},
		{
			id: 3,
			label: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
			content:
				'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
		},
		// {
		// 	id: 4,
		// 	label: 'Analyse-Tools und Tools von Drittanbietern',
		// 	content:
		// 		'Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung. Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.',
		// },
		{
			id: 100,
			label: 'Wie werden Ihre Daten im Kontaktformular verarbeitet?',
			content:
				'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten (z. B. Name, E-Mail, Telefonnummer) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
		},
		{
			id: 101,
			label:
				'Auf welcher Rechtsgrundlage erfolgt die Verarbeitung der Kontaktdaten?',
			content:
				'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen zusammenhängt. In allen übrigen Fällen stützt sich die Verarbeitung auf unser berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).',
		},
		{
			id: 102,
			label: 'Wie funktioniert die Newsletter-Anmeldung?',
			content:
				'Wenn Sie über das Kontaktformular unseren Newsletter abonnieren, verwenden wir Ihre E-Mail-Adresse ausschließlich für den Versand unseres Newsletters. Die Anmeldung erfolgt im sogenannten Double-Opt-In-Verfahren: Sie erhalten nach der Anmeldung eine E-Mail, in der Sie die Anmeldung bestätigen müssen. Erst nach dieser Bestätigung wird Ihre E-Mail-Adresse in den Verteiler aufgenommen.',
		},
		{
			id: 103,
			label: 'Auf welcher Rechtsgrundlage versenden wir den Newsletter?',
			content:
				'Der Versand des Newsletters erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können diese Einwilligung jederzeit widerrufen, etwa über den Abmeldelink im Newsletter oder durch eine formlose Mitteilung an uns.',
		},
		{
			id: 104,
			label: 'Wie lange speichern wir Ihre Daten?',
			content:
				'Die im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Gesetzliche Aufbewahrungsfristen bleiben unberührt.',
		},
	];

	const generalRemarks = [
		{
			id: 0,
			label: 'I. Verantwortlicher',
			content:
				'Der Verantwortliche im Sinne der Datenschutzgrundverordnung (im Folgenden: „DSGVO“) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist: THEATERDECK HAMBURG - Niklas Heinecke | Maurienstr. 19 | 22305 Hamburg Tel. (+49) 40 632 13 22 - E-Mail: info@theaterdeck.de',
		},
		{
			id: 1,
			label: 'II. Allgemeines zur Datenverarbeitung',
			content:
				'Datenschutz hat für das THEATERDECK HAMBURG einen besonderen Stellenwert. Aus diesem Grund erheben und verwenden wir personenbezogene Daten unserer Nutzer grundsätzlich auch nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden: „betroffene Person“) beziehen. Die Erhebung und Verwendung personenbezogener Daten unserer Nutzer erfolgt stets im Einklang mit der DSGVO und den geltenden landesspezifischen Datenschutzregeln. Ist die Verarbeitung personenbezogener Daten erforderlich und ist eine solche Verarbeitung nicht durch gesetzliche Vorschriften gestattet, holen wir immer eine Einwilligung der betroffenen Person ein. Eine Weitergabe von persönlichen Daten an Dritte findet grundsätzlich nicht statt. Eine Übermittlung erfolgt nur, wenn Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 S. 1 lit. a DSGVO); für die Weitergabe ein berechtigtes Interesse und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben (Art. 6 Abs. 1 S. 1 lit. f DSGVO); für die Weitergabe eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 S. 1 lit. c DSGVO); oder eine Weitergabe zulässig ist im Rahmen der Erfüllung eines Vertrages mit Ihnen (Art. 6 Abs. 1 S. 1 lit. b DSGVO)',
		},
		{
			id: 2,
			label:
				'III. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website',
			content:
				'Bei jedem Aufruf unserer Website www.theaterdeck.de werden durch den von Ihnen genutzten Browser automatisiert Informationen an den Server unserer Website übermittelt. Folgende Informationen werden dabei erfasst und bis zur automatischen Löschung gespeichert: 1. IP-Adresse des anfragenden Rechners, 2. Datum und Uhrzeit des Zugriffs, 3. Name und URL der abgerufenen Datei, 4. die Referrer-URL, d.h. die Website, von der aus der Zugriff erfolgte, 5. Informationen über den verwendeten Browsertyp, 6. das Betriebssystem Ihres Rechners, 7. der Name Internet-Service-Providers. Diese Daten werden nur temporär in einem sog. Logfile gespeichert. Nicht hiervon betroffen sind die IP-Adressen des Nutzers oder andere Daten, die die Zuordnung der Daten zu einem Nutzer ermöglichen. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Bei der Nutzung dieser Daten ziehen wir keinerlei Rückschlüsse auf die betroffene Person. Die Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Bereitstellung einer funktionsfähigen Website mit korrekt ausgelieferten Inhalten, in der Optimierung unserer Systeme und darin, Strafverfolgungsbehörden im Falle eines Cyberangriffs die zur Strafverfolgung notwendigen Informationen bereitzustellen. Sobald kein berechtigtes Interesse mehr besteht und keine gesetzliche Aufbewahrungspflicht besteht, werden diese Daten routinemäßig gelöscht. Darüber hinaus nutzen wir Cookies und setzen Analysedienste ein. Nähere Informationen dazu finden Sie unter den Ziffern IV. und V. dieser Datenschutzerklärung.',
		},
		{
			id: 3,
			label: 'IV. Cookies',
			content:
				'Auf unserer Website setzen wir Cookies ein. Bei Cookies handelt es sich um kleine Textdateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden können. Dieser Cookie enthält eine charakteristische Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen der Website ermöglicht. Dies bedeutet nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten. Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. Darüber hinaus setzen wir Cookies zur Optimierung der Benutzerfreundlichkeit und unseres Angebots und zur statistischen Erfassung ein. Wir setzen sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese Cookies werden nach Verlassen unserer Seite automatisch gelöscht. Darüber hinaus setzen wir temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal eingeben zu müssen. Zu den erhobenen Daten gehören die Häufigkeit von Seitenaufrufen, eingegebene Suchbegriffe und die Inanspruchnahme von Websiten-Funktionen. Der Einsatz von Cookies zur statistischen Erfassung und Auswertung unseres Angebots ist in Ziffer V. genauer beschrieben. Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht. Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich. Unser berechtigtes Interesse liegt in der Bereitstellung einer funktionalen und benutzerfreundlichen Website. Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.',
		},
		{
			id: 4,
			label: 'V. Einsatz von Analysediensten',
			content:
				'Google Analytics Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden Optimierung unserer Seiten nutzen wir Google Analytics, ein Webanalysedienst der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (im Folgenden: „Google“) ( https://www.google.de/intl/de/about/). Wir setzen Google Analytics auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO ein. Wir wollen damit eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Website sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen. In diesem Zusammenhang werden pseudonymisierte Nutzungsprofile erstellt und Cookies (siehe unter Ziffer IV.) verwendet. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website wie 1. Browser-Typ/-Version, 2. verwendetes Betriebssystem, 3. Referrer-URL (die zuvor besuchte Seite), 4. Hostname des zugreifenden Rechners (IP-Adresse), 5. Uhrzeit der Serveranfrage, werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Diese Informationen werden gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag verarbeiten. Es wird in keinem Fall die von Ihrem Browser übertragene IP-Adresse mit anderen Daten von Google zusammengeführt. Die IP-Adressen werden anonymisiert, so dass eine Zuordnung nicht möglich ist (IP-Masking). Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. In unserem Auftrag wird Google diese Information benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiten-Aktivitäten zusammenzustellen und um weitere mit der Websiten-Nutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung der Browser-Software verhindern; wir weisen jedoch darauf hin, dass in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich genutzt werden können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie ein Browser-Add-on herunterladen und installieren ( https://tools.google.com/dlpage/gaoptout?hl=de). Alternativ zum Browser-Add-on, insbesondere bei Browsern auf mobilen Endgeräten, können Sie die Erfassung durch Google Analytics zudem verhindern, indem Sie auf diesen LINK klicken. Es wird ein Opt-out-Cookie gesetzt, sodass zukünftig die Erfassung Ihrer Daten beim Besuch dieser Website verhindert wird. Der Opt-out-Cookie wird auf Ihrem Gerät abgelegt und gilt nur in diesem Browser und nur für unsere Website. Löschen Sie die Cookies in diesem Browser, müssen Sie das Opt-out-Cookie erneut setzen. Weitere Informationen zum Datenschutz im Zusammenhang mit Google Analytics finden Sie etwa in der Google Analytics-Hilfe: https://support.google.com/analytics/answer/6004245?hl=de.',
		},
		{
			id: 5,
			label: 'VI. Kontaktaufnahme über die Website',
			content:
				'Unsere Seite enthält aufgrund gesetzlicher Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen mit uns ermöglichen (insb. E-Mail-Adresse). Sofern sie per E-Mail Kontakt zu uns aufnehmen, werden Ihre freiwillig übermittelten personenbezogenen Daten zum Zwecke der Bearbeitung oder der Kontaktaufnahme zu Ihnen automatisch gespeichert. Eine Weitergabe dieser Daten findet nicht statt. Die Daten werden gelöscht, wenn keine gesetzliche Aufbewahrungsfrist mehr besteht und sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind. Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Das berechtigte Interesse im Sinne der DSGVO ist die Bearbeitung und Beantwortung Ihrer Kontaktaufnahme. Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes nicht weiter benötigt werden. Dies ist dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist. Sie haben die Möglichkeit, der Speicherung Ihrer personenbezogener Daten jederzeit zu widersprechen. Wenden Sie sich dazu an den in Ziffer I. genannten Verantwortlichen (schriftlich, per E-Mail oder telefonisch). Die Daten aus der bisherigen Kommunikation werden dann gelöscht, eine weitere Konversation ist nicht mehr möglich.',
		},
		{
			id: 200,
			label: 'Hinweis zur Datenverarbeitung bei Kontaktaufnahme',
			content:
				'Wenn Sie uns kontaktieren (z. B. per E-Mail oder über das Kontaktformular), verarbeiten wir Ihre personenbezogenen Daten zur Bearbeitung Ihrer Anfrage. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage mit der Durchführung vorvertraglicher Maßnahmen zusammenhängt, oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bei sonstigen Anfragen. Weitere Informationen finden Sie unter „Datenerfassung auf unserer Website“.',
		},
		{
			id: 6,
			label: 'VII. Online Kartenverkauf',
			content:
				'Nutzer unserer Website haben die Möglichkeit, über ein „Bestellformular“ Karten für verschiedene Veranstaltungen zu reservieren. Nehmen Sie diese Möglichkeit wahr, werden die in der Eingabemaske angegebenen Daten an uns übermittelt und gespeichert. Diese Daten sind: 1. Name der betreffenden Veranstaltung, 2. Name, 3. Telefonnummer, 4. E-Mail-Adresse, 5. ggf. Ihre personenbezogenen Angaben im Betreff oder Freitext. Im Zeitpunkt der Absendung der Reservierung werden zudem folgende Daten gespeichert: 1. IP-Adresse des aufrufenden Rechners, 2. Datum und Uhrzeit der Registrierung. Die Daten werden gelöscht, wenn keine gesetzliche Aufbewahrungsfrist mehr besteht und sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind. Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Das berechtigte Interesse im Sinne der DSGVO ist die Bearbeitung und Beantwortung Ihrer Reservierungsanfrage. Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes nicht weiter benötigt werden. Dies ist dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist. Sie haben die Möglichkeit, der Speicherung Ihrer personenbezogener Daten jederzeit zu widersprechen. Wenden Sie sich dazu an den in Ziffer I. genannten Verantwortlichen (schriftlich, per E-Mail oder telefonisch). Die Daten aus der bisherigen Kommunikation werden dann gelöscht, eine weitere Konversation ist nicht mehr möglich.',
		},
		{
			id: 7,
			label: 'VIII. Newsletter',
			content:
				'Indem Sie unseren Newsletter abonnieren, erklären Sie sich mit den folgenden Hinweisen zu Anmelde-, Versand- und statistischen Auswertungsverfahren sowie Ihren Widerrufsrecht einverstanden. E-Mails, Newsletter sowie weitere elektronische Nachrichten mit werblichen Informationen (im Folgenden „Newsletter“) werden von uns nur mit der Einwilligung der Empfänger versandt. Wenn Sie sich über unsere Website für den Newsletter anmelden, werden die in der Eingabemaske angegebenen Daten an uns übermittelt und gespeichert. Diese Daten sind: 1. Name, 2. E-Mail-Adresse, Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. a DSGVO. Für die Verarbeitung dieser Daten wird im Rahmen des Absendevorgangs Ihre Einwilligung eingeholt und auf diese Datenschutzerklärung verwiesen. Den rechtlichen Anforderungen entsprechend werden die Newsletteranmeldungen protokolliert, indem Anmelde- und Bestätigungszeitpunkt sowie die IP-Adresse gespeichert werden. Auch werden Veränderungen an Ihren dort gespeicherten Daten vermerkt. Der Newsletterversand erfolgt durch die Newsletterversandplattform „MailChimp“ des US-Anbieters Rocket Science Group, LLC, 675 Ponce De Leon Ave NE, Suite 5000. Atlanta, GA 30308, USA. Die in diesen Hinweisen beschriebenen Daten inklusive der E-Mail-Adressen der Newsletterempfänger werden auf den MailChimp-Servern in den USA gespeichert. MailChimp nutzt diese Daten zum Versand und zur Auswertung der Newsletter in unserem Auftrag sowie zur Verbesserung ihres eigenen Service durch beispielsweise Darstellungs- und Versandoptimierung. Diese Informationen werden von MailChimp weder an Dritte weitergegeben, noch für eigene Werbeaktionen verwendet. Durch die Zertifizierung von MailChimp im US-EU-Datenschutzabkommen „Privacy Shield“ und den Abschluss eines Vertrags zur Auftragsvereinbarung mit uns, verpflichtet sich MailChimp dazu, sich an die EU-Datenschutzvorgaben zu halten und die Daten entsprechend der Datenschutzbestimmungen von MailChimp in unserem Auftrag zu verarbeiten. Zur Verbesserung und dem Verständnis für die Interessen unserer Kunden enthält der Newsletter einen „web-beacon“, eine pixelgroße Datei, welche beim Öffnen des Newsletters vom MailChimp-Server abgerufen wird. Hierdurch werden technische Daten wie die IP-Adresse und Informationen zum verwendeten Browser und System abgerufen. Zusätzlich wird erfasst ob und zu welcher Zeit der Newsletter geöffnet wird und welche Links angeklickt werden. Ziel dieser Analysen ist das Leseverhalten der Nutzer besser zu kennen und die Inhalte des Newsletters stetig verbessern und interessanter gestalten zu können. Die Informationen lassen sich technisch zwar einzelnen Abonnenten zuordnen, es liegt aber weder in unserem noch im Interesse von MailChimp einzelne Nutzer zu überwachen. Unser berechtigtes Interesse liegt ausschließlich darin, statistische Werte zu erfassen. Da wir in seltenen Ausnahmen unsere Newsletterempfänger auf eine Website von MailChimp leiten, z.B. um den Newsletter bei Darstellungsproblemen online abzurufen oder die Datenschutzerklärung von MailChimp einsehen zu können, möchten wir an dieser Stelle darauf hinweisen, dass auch MailChimp Cookies auf den Webseiten verwendet. Die Protokollierung des Anmeldeverfahrens, die Erfassung und Auswertung der statistischen Daten sowie der Einsatz von MailChimp erfolgen aufgrund unserer berechtigten Interessen gem. Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser Interesse ist hierbei ein nutzerfreundlicher und sicherer Newsletter, der den Bedürfnissen der Nutzer entspricht und gleichzeitig unserem geschäftlichen Interesse dient, sowie Missbrauch unserer Angebote zu verhindern. Sie haben die Möglichkeit, Ihre Einwilligung in die Verarbeitung und Speicherung Ihrer Daten jederzeit mit Wirkung für die Zukunft zu widerrufen. Wenden Sie sich dazu an den in Ziffer I. genannten Verantwortlichen (schriftlich, per E-Mail oder telefonisch) oder nutzen Sie den „Abmelde-Link“, den Sie am Ende jedes Newsletters finden. Gleichzeitig erlischt damit Ihre Einwilligung in den Versand via MailChimp sowie die statistische Auswertung. Eine weitere Zusendung des Newsletters ist nach dem Widerruf Ihrer Einwilligung nicht möglich, außer Sie melden sich erneut an.',
		},
	];

	const agb = [
		{
			id: 1,
			label: 'Geltungsbereich',
			content:
				'Die allgemeinen Geschäftsbedingungen (nachfolgend AGB) regeln die rechtlichen Beziehungen zwischen dem Theaterdeck Hamburg (nachfolgend Theater) und ihren Besucher:innen (nachfolgend Kunde). Mit Erwerb einer Eintrittskarte gelten diese Bedingungen als vereinbart.',
		},
		{
			id: 2,
			label: 'Spielplan und Anfangszeiten',
			content:
				'Die gültigen Spielpläne mit den Anfangszeiten und Besetzungen werden in den regelmäßigen Veröffentlichungen des Theaters bekannt gegeben. Änderungen bleiben vorbehalten. Im Falle von Änderungen bemüht sich das Theater, die Besucher:innen rechtzeitig zu informieren. Für Angaben in externen Medien übernimmt das Theater keine Gewähr.',
		},
		{
			id: 3,
			label: 'Öffnungszeiten',
			content:
				'3.1 Die Tageskasse und der telefonische Vorverkauf sind zu den angegebenen Zeiten geöffnet. 3.2 Die Abendkasse öffnet spätestens eine Stunde vor Vorstellungsbeginn und schließt mit Beginn der Vorstellung. Reservierte Karten müssen spätestens 30 Minuten vor Beginn abgeholt werden.',
		},
		{
			id: 4,
			label: 'Vertragsschluss',
			content:
				'Angebote des Theaters sind freibleibend. Ein verbindlicher Vertrag kommt erst mit der Annahme des Kundenantrags durch das Theater zustande, z. B. per Bestellbestätigung oder durch Zusendung/Hinterlegung der Karten.',
		},
		{
			id: 5,
			label: 'Bezahlung',
			content:
				'5.1 Die Bezahlung kann bar, per Rechnung, Lastschrift, Kreditkarte (Visa/MasterCard) oder PayPal erfolgen. 5.2 Gutscheine können eingelöst werden, sofern sie nach dem 01.07.2021 erworben wurden. 5.3 Rückbuchungen verursachen Gebühren, die der Kunde trägt.',
		},
		{
			id: 6,
			label: 'Bestellung, Reservierung und Versand',
			content:
				'6.1 Kartenreservierungen gelten erst mit Bezahlung als verbindlich. 6.2 Versand auf Kundenrisiko möglich; keine Pflicht zum Postversand. 6.3 Kunden müssen fehlenden Posteingang spätestens vier Tage vor Veranstaltung melden. 6.4 Bei Online-Kartenbestellungen über die Website oder per Telefon gilt gemäß § 312g Abs. 2 Nr. 9 BGB, dass kein Widerrufsrecht besteht. Die Bestellung ist verbindlich. 6.5 Bei print@home ist der Kunde für den Ausdruck verantwortlich.',
		},
		{
			id: 7,
			label: 'print@home-Karten',
			content:
				'7.1 Kein Umtausch möglich. 7.2 Es darf nur ein Ausdruck existieren. 7.3 Karten sind wie Bargeld aufzubewahren. 7.4 Bei Missbrauch kann der Zutritt verweigert werden.',
		},
		{
			id: 8,
			label: 'Preise',
			content:
				'8.1 Preise variieren je nach Veranstaltung. Sonderpreise möglich. 8.2 Preise sind aktuellen Veröffentlichungen zu entnehmen. 8.3 Zusatzleistungen wie Garderobe oder Programmhefte sind nicht im Preis enthalten.',
		},
		{
			id: 9,
			label: 'Ermäßigungen',
			content:
				'9.1 Ermäßigungen für Kinder, Schüler:innen, Studierende etc. 9.2 Auch für Schwerbehinderte und Begleitpersonen bei Eintrag „B“. 9.3 Schulgruppen ab 12 Schüler:innen. 9.4 Keine Kombination von Ermäßigungen. 9.5 Änderungen vorbehalten. 9.6 Nachträgliche Ermäßigungen ausgeschlossen.',
		},
		{
			id: 10,
			label: 'Rückgabe gelöster Eintrittskarten',
			content:
				'10.1 Kein generelles Rückgaberecht. 10.2 Bei Werkänderung Rückgabe bis Vorstellungsbeginn. 10.3 Besetzungsänderungen sind kein Rückgabegrund. 10.4 Bei höherer Gewalt keine Ansprüche. 10.5 Abgebrochene Vorstellungen gelten als erfüllt, wenn mehr als die Hälfte gespielt wurde. 10.6 Erstattungsansprüche verfallen nach 10 Tagen.',
		},
		{
			id: 11,
			label: 'Verlust von Eintrittskarten',
			content:
				'11.1 Ersatzkarten bei glaubhaftem Nachweis möglich. Gebühren können erhoben werden. 11.2 Originalkarte hat Vorrang vor Ersatzkarte.',
		},
		{
			id: 12,
			label: 'Datenschutz',
			content:
				'Die personenbezogenen Daten der Kunden werden unter Beachtung der geltenden Datenschutzbestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO), verarbeitet. Die Verarbeitung erfolgt ausschließlich zum Zweck der Vertragsabwicklung, insbesondere zur Abwicklung von Kartenkäufen und zur Information über Änderungen. Eine Weitergabe an Dritte erfolgt nur, sofern diese im Auftrag des Theaters tätig werden (z. B. Kartenvertrieb). Weitere Informationen finden Sie in unserer Datenschutzerklärung. Mit dem Kartenkauf bestätigen Sie, die Datenschutzerklärung zur Kenntnis genommen zu haben.',
		},
		{
			id: 13,
			label: 'Einlass zu den Aufführungen',
			content:
				'13.1 Eintrittskarte und ggf. Nachweis für Ermäßigung erforderlich. 13.2 Nach Beginn kann Einlass erst zu geeignetem Zeitpunkt erfolgen. 13.3 Eintrittskarte verliert nach Verlassen der Räumlichkeiten ihre Gültigkeit.',
		},
		{
			id: 14,
			label: 'Fundsachen',
			content:
				'Gefundene Gegenstände werden zunächst beim Theater verwahrt und anschließend ggf. an das öffentliche Fundbüro übergeben.',
		},
		{
			id: 15,
			label: 'Hausrecht',
			content:
				'15.1 Theater kann Hausverweise aussprechen. 15.2 Nur der ausgewiesene Platz darf eingenommen werden. 15.3 Kartenverkauf im Theater verboten. 15.4 Mobilgeräte müssen ausgeschaltet sein. 15.5 Rauchverbot. 15.6 Bei Gefahr Anweisungen des Personals befolgen und sofort aus dem Gebäude gehen.',
		},
		{
			id: 16,
			label: 'Bild- und/oder Tonaufnahmen',
			content:
				'16.1 Aufnahmen sind untersagt. 16.2 Geräte können eingezogen werden. 16.3 Besucher stimmen öffentlichen Aufzeichnungen ohne Vergütung zu.',
		},
		{
			id: 17,
			label: 'Haftung',
			content:
				'Das Theater haftet nur bei Vorsatz oder grober Fahrlässigkeit. Ausnahmen gelten bei Verletzung von Leben, Körper oder Gesundheit.',
		},
		{
			id: 18,
			label: 'Anwendbares Recht / Gerichtsstand',
			content:
				'Es gilt deutsches Recht. Erfüllungsort und Gerichtsstand ist Hamburg.',
		},
		{
			id: 19,
			label: 'Abweichende Regelungen',
			content:
				'Das Theater kann im Einzelfall von diesen AGB abweichende Regelungen treffen.',
		},
		{
			id: 20,
			label: 'Inkrafttreten',
			content:
				'Diese Allgemeinen Geschäftsbedingungen treten am 01.01.2015 in Kraft und ersetzen alle früheren Fassungen. Diese AGB wurden am 01.04.2025 aktualisiert.',
		},
	];
</script>

<style lang="scss" scoped></style>
