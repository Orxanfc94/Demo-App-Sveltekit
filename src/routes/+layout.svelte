<script>
    export let data
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '/src/styles//main.css'
    </script>
    
    <Header data={data}/>
    <main>
    <slot />
    </main>
    <Footer data={data}/>