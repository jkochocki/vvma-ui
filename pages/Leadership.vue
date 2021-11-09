<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row cols=1>
                <h3 class="center-text">Leadership</h3>
            </b-row>
            <br>
            <h4>Officers</h4>
            <b-row class="col-text-italic">
                <b-col md="6" lg="3">
                    <strong>Barry Glass</strong>
                    <div>President</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Alison Abdu</strong>
                    <div>Secretary</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Jonathan Budd</strong>
                    <div>Bookkeeper</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Howard Goldstein</strong>
                    <div>Vice President, Finance</div>
                </b-col>
            </b-row>
        </b-container>
        <br>
        <div class="clip-left">
        </div>
        <br>
        <b-container>
            <h4>Directors</h4>
            <b-row>
                <b-col md="6" lg="3">
                    <strong>Peter Feinmann</strong>
                    <div>Feinmann, Inc.</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Catharyn Gildesgame</strong>
                    <div>Community Volunteer</div>
                    <div>Member of Boards of Directors (Combined Jewish Philanthropies, Jewish Community Relations Council, 2 Life Communities)</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Neva Goldstein</strong>
                    <div>Community Volunteer</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Barry Star</strong>
                    <div>Wall Street Horizon</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Heidi Star</strong>
                    <div>Community Volunteer</div>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Richard Udell</strong>
                    <div>Environmental Justice Attorney</div>
                </b-col>
            </b-row>
        </b-container>
        <br>
        <div class="clip-right">
        </div>
        <b-container>
            <h4>Board of Advisors</h4>
            <b-row>
                <b-col md="6" lg="3">
                    <strong>Jill Goldberg Arnold</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Joan Atlas</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Shira Burns</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Janet Iraola</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Alisa Kotler-Berkowitz</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Paul Morse</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Laura Mann, Esq.</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Robert Ruxin, Esq.</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Marc Seigle</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Ellen Sturgis</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Danny Watt</strong>
                </b-col>
                <b-col md="6" lg="3">
                    <strong>Leslie Zales</strong>
                </b-col>
            </b-row>
        </b-container>
        <br><br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainProps: { blank: true, blankColor: '#777', width: 200, height: 200, class: 'm2' }
        }
    },
    created() {
        this.$store.commit('setBannerImg', {
            name: 'group_build_pan'
        });
    }
}
</script>

<style>
    h4 {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    [class*="col-"] {
        padding-bottom: 15px;
    }

    .col-text-italic > [class*="col-"] > div {
        font-style: italic;
    }
</style>