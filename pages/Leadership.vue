<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row cols=1>
                <h3 class="center-text">Leadership</h3>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <h5 class="center-text">Board Member</h5>
                    <b-img class="center-img" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                </b-col>
                <b-col>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </b-col>
            </b-row>
        </b-container>
        <br>
        <div class="clip-left">
        </div>
        <br>
        <b-container>
            <b-row>
                <b-col>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </b-col>
                <b-col>
                    <h5 class="center-text">Leader</h5>
                    <b-img class="center-img" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
                </b-col>
            </b-row>
        </b-container>
        <br>
        <div class="clip-right">
        </div>
        <b-container style="height: 500px">

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