export interface Contact {
	id: string;
	partyA: string;
	partyB: string;
	timestamp: Date;
	comment: string;
}

const uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/;

function contact(id: string, otherParty: string, ts: number, comment = ''): Contact {
	if (!uuidRegex.test(id)) {
		throw new Error('Contact ID must be a UUID');
	}
	return {
		id,
		partyA: 'WA6PMC',
		partyB: otherParty,
		timestamp: new Date(ts * 1000),
		comment
	};
}

function delay<T>(f: () => T): () => T {
	let res: T | null = null;
	return () => {
		if (res) {
			return res;
		} else {
			res = f();
			return res;
		}
	};
}

export function contactToString(contact: Contact): string {
	return `${contact.partyA} ⇒ ${contact.partyB} at ${contact.timestamp.toLocaleString()}`;
}

export const contacts = [
	contact('5cf1b6c0-0689-4439-a6a4-ae837199f1eb', 'WA6PMC', 1640208403, 'Test contact - not real')
];

export const indexByID = delay((): { [id: string]: Contact } =>
	Object.fromEntries(contacts.map((contact) => [contact.id, contact]))
);

export const sortedByTimestamp = delay((): Contact[] =>
	contacts.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
);

export const reverseSortedByTimestamp = delay((): Contact[] => [...sortedByTimestamp()].reverse());
