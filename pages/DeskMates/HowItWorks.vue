<template>
    <div>
        <b-row>
            <b-col>
                <br>
                <h5>How It Works</h5>
                <br>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p class="text-justify">
                    Desk Mates, a program of Volunteer Ventures MA Inc., was developed to provide volunteer-
built wooden desks at no cost to students who lack a personal study and learning space at home.
                </p>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <p class="text-justify">
                    Launched in January 2021 amidst the COVID pandemic, Desk Mates has been a smashing
success, with over 220 quality hand-made desks provided to students, families and nonprofit
programs for youth. Our 150+ volunteer builders have included youth and adult groups from
synagogues and churches, high school service groups, civic organizations such as the Girl
Scouts, and scores of individuals with a wide range of building skill and experience.
The key innovation of Desk Mates is that volunteer builders are supplied with a ‘build-it-yourself
kit’ that contains all the materials, components and instructions necessary to construct, sand and
finish a desk. The kit materials are all pre-cut and pre-drilled so builders are able to build without
needing to purchase, measure or cut any materials. The kits have enabled volunteer builders to
continue to participate in meaningful, impactful community service, safely at home during the
COVID pandemic when gathering in groups was not recommended.
Builders need to supply their own power drill/driver and sander, and familiarity with basic
woodworking methods is very helpful. Teams of 2-3 builders is recommended. An instructional
video and written directions are available.
                </p>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col cols="8" class="vert-center-contents">
                    <p class="text-justify">
                    Desk Mates’ initial design was aimed for use by young elementary school children. However,
after several inquiries about desks for larger people, we now offer three sizes to meet user needs:
                    <ul>
                        <li>18 inches deep x 24 inches wide x 26 inches tall</li>
                        <li>18 inches deep x 24 inches wide x 30 inches tall</li>
                        <li>18 inches deep x 30 inches wide x 30 inches tall (for a wider work surface)</li>
                    </ul>
                    We are now also offering single shelf bookshelves to fit on top of each desk. The bookshelves
are also offered to builders in a ‘kit’ with all supplies and ready for construction.
Kits are picked up from and completed items are returned to the VVMA workshop in Lexington.
                </p>
            </b-col>
            
            <b-col cols="4">
                <b-img src="~assets/photos/desk-shelf setup 11-10-21.jpg" alt="desk" class="rounded-1" fluid-grow></b-img>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <p class="text-justify">
                    Desk and bookshelf kits are available at a per-unit price.
Group desk-building events with Desk Mates leaders are arranged on an individual basis and can
take place in a group’s home community or at a Desk Mates site.
Delivery to a Desk Mates Community Partner or school is arranged through Volunteer Ventures.
                </p>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <p>
                    For more information, contact Barry Glass at <span class="dummy-link">barry@volunteerventuresma.org</span>
                </p>
            </b-col>
        </b-row>
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

<style>
    ul {
        list-style-type: disc;
    }
</style>