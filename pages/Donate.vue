<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row cols=1>
                <h3 class="center-text">Donate</h3>
                <br>
                <h5 class="center-text">Support our mission today.</h5>
            </b-row>
            <hr>
            <br>
            
            <b-row class="text-center">
                <b-col>
                    We are currently taking donations via
                        <div>
                            Venmo:  <VenmoButton></VenmoButton>
                        </div>
                        <div>
                            Physical checks mailed to <strong>Volunteer Ventures MA, 4 Bryant Road, Lexington, MA 02420</strong>
                        </div>
                </b-col>
            </b-row>
            <br>
            <br>
            <b-row class="text-center">
                <b-col>
                    We're so excited to continue work on Desk Mates and to develop other new, innovative projects.
                </b-col>
            </b-row>
            <br>
            <hr>
            <br>
            <b-row class="text-center">
                <b-col class="text-italic">
                    Volunteer Ventures MA Inc. is a qualified 501(c)(3) tax exempt organization.
                </b-col>
            </b-row>
            <br>
            <br>
        </b-container>
    </div>
</template>

<script>
import VenmoButton from '../components/VenmoButton.vue';
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$store.commit('setBannerImg', {
            name: 'group_build_pan'
        });
    },
    components: {
        VenmoButton
    }
}
</script>

<style>
</style>