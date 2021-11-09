<template>
    <div>
        <b-row>
                <b-col>
                    <br>
                    <h5>How It Started</h5>
                    <br>
                    <p class="text-justify">
                        Desk Mates was launched in January 2021 to provide young students with desks to set up a
                        personal study space at home. School closures due to the pandemic and the shift to home-based
                        virtual learning amplified the problem that many students did not have a dedicated study space
                        and needed to work in common areas of their homes. It is known that having a dedicated
                        personal study space can enhance a student’s learning experience, so we set out to provide desks
                        for those who needed them.
                    </p>
                    <p class="text-justify">
                        January 2021 was also a time of restricted activity with no public gathering in order to limit the
                        spread of COVID. So, Volunteer Ventures (VVMA) founder Barry Glass and friends designed a
                        desk ‘kit’ – complete with all the wood pieces, materials and supplies - so volunteer builders
                        could build and finish a desk safely at home using some basic common tools. VVMA volunteers
                        cut and put together the kits in the VVMA workshop, volunteer builders picked up kits and
                        returned completed desks to the workshop, and VVMA arranged for delivery of desks to the
                        recipient partner communities: public schools, homeless shelters, youth organizations and social
                        assistance agencies.
                    </p>
                    <p class="text-justify">
                        Fast forward to November 2021 and we are proud to report that over 220 desks have been
                        distributed to students and families from 16 schools and organizations that service youth. The
                        over 150 volunteer builders have included individuals and groups, parents and their children,
                        many from civic and faith organizations such as church and temple groups as well as the Girl
                        Scouts and private high schools.
                    </p>
                    <p class="text-justify">
                        The need for desks remains high, and so Desk Mates is continuing its production to meet that
                        need. As pandemic restrictions are easing, we are also now conducting in-person build events
                        with schools and service groups. These build events are great ways to build community, learn
                        building skills and give back to the community all while helping improve the at-home learning
                        experience for young students.
                    </p>
                    <p class="text-justify">
                        For more information on Desk Mates and Volunteer Ventures MA, contact us at
                        <span class="dummy-link">admin@volunteerventuresma.org</span>
                    </p>
                </b-col>
            </b-row>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('setBannerImg', {
            name: 'deskmates_builder_3-1'
        });
    }
}
</script>