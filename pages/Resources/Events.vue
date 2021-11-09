<template>
    <div>
        <b-container class="narrow-container">
            <br>
            <br>
            <b-row>
                <b-col class="text-center">
                    <h3 class="text-italic">
                        Events Calendar
                    </h3>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col class="text-center">
                    <h5 class="text-italic">
                        September 2021 - June 2022
                    </h5>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    September 17:
                </b-col>
            </b-row>
            <b-row>
                <b-col offset=1>
                    Desk and bookshelf building event with 10<sup>th</sup> grade class of Newton Country Day School
of the Sacred Heart.
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    October 17:
                </b-col>
            </b-row>
            <b-row>
                <b-col offset=1>
                    Bookshelf building event with Temple Beth El Sudbury’s 7<sup>th</sup> grade b’nei
mitzvah class at Beth El.
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    November 6:
                </b-col>
            </b-row>
            <b-row>
                <b-col offset=1>
                    Desk building event with Teenz4Good (Winchester) at VVMA workshop,
Lexington
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    November 21:
                </b-col>
            </b-row>
            <b-row>
                <b-col offset=1>
                    Build event with Temple Shir Tikvah Winchester’s 5<sup>th</sup> grade class and parents at
Ambrose School, Winchester
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    December TBD:
                </b-col>
            </b-row>
            <b-row>
                <b-col offset=1>
                    At-home build event with Gann Academy, Waltham
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    January 2022:
                </b-col>
            </b-row>
            <b-row>
                <b-col offset=1>
                    Sunday January 16, 1-4 PM.
MLK Day of Service event with JLOFT: Jewish Learning Opportunities for Teens and
the Jewish Teen Initiative at Temple Beth Am, Framingham.
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

<style>
    .narrow-container {
        width: 60%;
    }
</style>