<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row class="text-center">
                <b-col>
                    <h3>
                        Contact us and support our projects!
                    </h3>
                </b-col>
            </b-row>
            <br>
            <b-row class="text-center">
                <b-col>
                    We’d love to be in touch with you!
                </b-col>
            </b-row>
            <br>
            <br>
            <b-row class="text-justify">
                <b-col>
                    Volunteer Ventures MA invites you to connect with us and to help us be an even greater force
                    for good through our volunteer projects and organization. For more information or to get on our
                    mailing list, contact us by email at <span class="dummy-link">admin@volunteerventuresma.org</span>
                    <br>  
                    We will NOT sell or distribute your contact information.
                </b-col>
            </b-row>
            <br>
            <b-row class="text-justify">
                <b-col>
                    To support our efforts and keep the desks available at no cost to recipients, you can donate to
                    Desk Mates and Volunteer Ventures MA though Venmo <VenmoButton></VenmoButton>
                    or via check mailed to:
                </b-col>
            </b-row>
            <br>
            <b-row class="text-justify">
                <b-col offset-lg="5" offset-md="3" offset-sm="2">
                    Volunteer Ventures MA Inc. <br>
                    4 Bryant Road <br> 
                    Lexington, MA 02420
                </b-col>
            </b-row>
            <br>
            <b-row class="text-justify">
                <b-col>
                    Your donations are tax deductible pending our approval as a 501(c)(3) tax exempt public charity.
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
            venmoUrl: 'https://venmo.com/u/volunteerventuresma'
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