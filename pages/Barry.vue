<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row>
                <b-col>
                    <h3 class="center-text">
                        Barry Glass
                    </h3>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <b-img class="center-img" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                </b-col>
                <b-col>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </b-col>
            </b-row>
            <br>
            <br>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainProps: { blank: true, blankColor: '#777', width: 200, height: 200, class: 'm2' }
        }
    }
}
</script>

<style>

</style>