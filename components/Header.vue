<template>
    <div id="header" :class="{ 'nav-transparent': !showNavbar, 'nav-opaque': showNavbar}">
        <b-navbar>
            <b-navbar-brand class="ml-5 vv-brand">
                <b-img src="~assets/VVMA logo RG.png" height="125" alt="Responsive image"></b-img>
                <!-- <p style="display: block">Volunteer Ventures of MA</p> --> 
                &emsp; Volunteer Ventures of MA
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto mr-5">
                <b-nav-item :href="instagram">
                    <b-icon icon="instagram" scale="1.5" class="pr-4 nav-icon"></b-icon>
                </b-nav-item>
                <b-nav-item :href="facebook">
                    <b-icon icon="facebook" scale="1.5" class="pr-4 nav-icon"></b-icon>
                </b-nav-item>
                <b-nav-item href="#">
                    <b-button squared variant="success" to="/donate">Donate</b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <b-row id="navigation">
            <b-col class="mb-3">
                <b-nav pills align-content="center" align="center">
                    <b-nav-item link-classes="navigation-item" to="/">HOME</b-nav-item>
                    <b-dropdown id="nav-dd" toggle-class="nav-dd" menu-class="nav-dd-menu" text="DESK MATES" class="m-md-2">
                        <b-dropdown-item link-class="dd-item" to="/deskmates/howitstarted">HOW IT STARTED</b-dropdown-item>
                        <b-dropdown-item link-class="dd-item" to="/deskmates/howitworks">HOW IT WORKS</b-dropdown-item>
                        <b-dropdown-item link-class="dd-item" to="/deskmates/builders">BUILDERS</b-dropdown-item>
                        <b-dropdown-item link-class="dd-item" to="/deskmates/recipients">RECIPIENTS</b-dropdown-item>
                    </b-dropdown>
                    <b-nav-item link-classes="navigation-item" to="/news">NEWS</b-nav-item>
                    <b-dropdown id="nav-dd" toggle-class="nav-dd" menu-class="nav-dd-menu" text="ABOUT US" class="m-md-2">
                        <b-dropdown-item link-class="dd-item" to="/our-mission">OUR MISSION</b-dropdown-item>
                        <b-dropdown-item link-class="dd-item" to="/barry">BARRY GLASS</b-dropdown-item>
                        <b-dropdown-item link-class="dd-item" to="/leadership">LEADERSHIP</b-dropdown-item>
                        <b-dropdown-item link-class="dd-item" to="/partners">COMMUNITY PARTNERS</b-dropdown-item>
                    </b-dropdown>
                    <b-nav-item link-classes="navigation-item" to="/contact">CONTACT US</b-nav-item>
                    <b-dropdown id="nav-dd" toggle-class="nav-dd" menu-class="nav-dd-menu" text="RESOURCES" class="m-md-2">
                        <b-dropdown-item link-class="dd-item" to="/resources/events">EVENTS CALENDAR</b-dropdown-item>
                    </b-dropdown>
                </b-nav>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showNavbar: false,
            instagram: 'https://instagram.com/VolVenMA2021',
            facebook: 'https://facebook.com/volunteerventuresma'
        };
    },
    methods: {
        handleScroll() {
            window.pageYOffset > 0 ? this.showNavbar = true: this.showNavbar = false;
        }
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
        
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>


<style>

#header {
    position: fixed;
    width: 100%;
    z-index: 100;
}

#titleRow {
    height: 90px;
}

.nav-opaque {
    background-color: #fff;
    border-bottom: 1px solid #999;
    transition: all 1s;
}

.nav-transparent {
    background-color: rgba(255, 255, 255, 0);
    transition: all 1s;
}

.navigation-item {
    font-size: large;
}

.navigation-item:hover, .nav-dd:hover {
    color: #DD6F40 !important;
}

.vv-brand {
    font-size: 1.5rem !important;
}

.vv-brand:focus, .vv-brand:hover {
    color: #2B9720 !important;
}

.nav-opaque > nav > div.navbar-brand,
.nav-opaque > nav > ul.navbar-nav > li.nav-item > a > svg.bi-instagram, 
.nav-opaque > nav > ul.navbar-nav > li.nav-item > a > svg.bi-facebook,
.nav-opaque > div > div > ul > li > .navigation-item,
.nav-opaque > div > div > ul > div > .nav-dd,
.nav-opaque > div > div > ul > div.show > .nav-dd {
    /* color: #000A29; */
    color: #252594;
    transition: all 1s;
}

/* .nav-opaque > .navbar {
    height: 60px;
    transition: all 1s;
} */
.nav-opaque > #navigation {
    height: 30px;
    transition: all 1s;
}

.nav-opaque > #navigation > div > ul {
  
    transform: translateY(-40px);
    transition: all 1s;
}

.nav-transparent > #navigation {
    height: 70px;
    transition: all 1s;
}

.nav-transparent > #navigation > div > ul {
  
    transform: translateY(0px);
    transition: all 1s;
}

.nav-transparent > nav > div.navbar-brand,
.nav-transparent > nav > ul.navbar-nav > li.nav-item > a > svg.bi-instagram, 
.nav-transparent > nav > ul.navbar-nav > li.nav-item > a > svg.bi-facebook,
.nav-transparent > div > div > ul > li > .navigation-item,
.nav-transparent > div > div > ul > div > .nav-dd {
    color: #FFF;
    transition: all 1s;
}

.nav-dd {
    font-size: large;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
}

.nav-dd:hover, .nav-dd:focus, .nav-dd:active, .nav-dd:focus-within, .show > .nav-dd {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
}

.dd-item {
    /* color: #000A29; */
    color: #252594;
}

.nav-icon {
    margin-top: 12px;
}

.nav-icon:hover {
    color:#DD6F40 !important;
}

@media screen and (max-width: 1180px) {
  .nav-pills {
      margin-top: 30px;
  }
  .nav-opaque > #navigation {
      height: 50px;
  }
}
</style>