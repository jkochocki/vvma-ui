<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row>
                <b-col class="text-center">
                    <h3 class="text-italic">
                        Our Mission
                    </h3>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col class="text-justify">
                    The enduring and spirited work of volunteers really makes the world go ‘round. There’s so much
of what we are able to do and experience because volunteers step up and say “I’ll do it.” From
coaching youth sports to serving on school PTA’s and community boards, to being reading
buddies and mentors to helping rebuild homes and lives, to making food and stocking pantry
shelves, there are few areas of our lives that aren’t touched by the work of volunteers.
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col class="text-justify">
                    At Volunteer Ventures MA, our mission is to harness the volunteer energy and spirit to have a
direct and positive impact on peoples lives. Through hands-on experiences, as individuals or in
groups, we aim to provide meaningful and vital services to our community partners and to
individuals and families. With projects such as food production and building items and repairing
homes, our projects offer volunteers the opportunity to use current and build new skills as they
work to heal a part of the world. Our projects aim to help uplift people, to invest in their well-
being and to provide hope and opportunity for a healthy and secure future.
                </b-col>
            </b-row>
            <br>
            <br>
        </b-container>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('setBannerImg', {
            name: 'group_build_pan'
        });
    }
}
</script>