<template>
    <div class="footer">
        <div>
            <b-container class="tight-container">
                <b-row cols="12" class="py-4">
                    <b-col cols="4">
                        <b-row>
                            <b-col><small>Office Address: </small></b-col>
                        </b-row>
                        <b-row>
                            <b-col><small>Tel: (339) 440-0133</small></b-col>
                        </b-row><b-row>
                            <b-col><small>Email: admin@VolunteerVenturesMA.org</small></b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="3">
                        <b-row cols=1>
                            <strong>Useful Links</strong>
                        </b-row>
                        <b-row cols=1>
                            <router-link to="/resources">Volunteerism Resources</router-link>
                        </b-row>
                        <b-row cols=1>
                            <router-link to="/contact">Contact</router-link>
                        </b-row>
                    </b-col>
                    <b-col cols="5">
                        <b-row class="mb-2">
                            <b-col>
                                <strong>Sign up for our newsletter:</strong>
                            </b-col>
                        </b-row>
                        <b-row class="mb-22">
                            <b-col>
                                <p>Coming soon!</p>
                            </b-col>
                        </b-row>
                        <!-- <b-row class="mb-2">
                            <b-col style="padding-right: 15px">
                                <b-form-input v-model="text" required placeholder="First Name"></b-form-input>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="text" required placeholder="Last Name"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mb-2">
                            <b-col>
                                <b-form-input v-model="text" required placeholder="Email"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mb-2">
                            <b-col style="padding-right: 15px">
                                <b-form-input v-model="text" placeholder="City"></b-form-input>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="text" placeholder="State"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <p>We will never share your information.</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-button squared variant="success" to="/">Submit</b-button>
                            </b-col>
                        </b-row> -->
                    </b-col>
                </b-row>
                <hr>
                <b-row>
                    <b-col>
                        VVMA
                    </b-col>
                </b-row>
                <br>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    }
}
</script>

<style scoped>

    * {
        font-size: 16px;
    }

    hr {
        background-color: white;
    }
    
    .footer {
        background-color: #252594;
        color: #fff;
    }

    a {
        color:#fff;
    }
    a:hover {
        color: #2B9720;
        text-decoration: none;
}
    
</style>