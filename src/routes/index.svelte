<script type="ts" context="module">
	import { sortedByTimestamp as contacts, contactToString } from '$lib/contacts';

	export const prerender = true;
</script>

<h1>WA6PMC</h1>
<h2>Contacts</h2>
<ul>
	{#each contacts() as contact}
		<li><a href="/contacts/{contact.id}">{contactToString(contact)}</a></li>
	{/each}
</ul>
