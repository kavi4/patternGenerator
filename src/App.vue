<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <test-component></test-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TestComponent from 'Components/TestComponent'

    export default {
        name: 'app',
        components: {TestComponent},
    }
</script>

<style lang="sass">
    .app
        background-color: aliceblue
</style>
