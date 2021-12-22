<script type="ts" context="module">
	import { Contact, indexByID as contacts } from '$lib/contacts';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		const contact = contacts()[page.params.id];
		if (contact) {
			return {
				status: 200,
				props: {
					contact
				}
			};
		} else {
			return {
				status: 404
			};
		}
	}
</script>

<script type="ts">
	export let contact: Contact;
</script>

<h1>QSL</h1>
<p>{contact.partyA} was in contact with {contact.partyB} at {contact.timestamp.toLocaleString()}</p>
{#if contact.comment}
	<p>{contact.comment}</p>
{/if}
