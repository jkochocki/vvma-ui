<template>
    <div class="footer">
        <div>
            <b-container class="tight-container">
                <b-row class="py-4">
                    <b-col>
                        <p>Office Address</p>
                        <p>Tel: </p>
                        <p>Email: </p>
                    </b-col>
                    <b-col>
                        <p>Useful Links</p>
                    </b-col>
                    <b-col cols="6">
                        <b-row class="mb-2">
                            <b-col>
                                <strong>Sign up for our newsletter:</strong>
                            </b-col>
                        </b-row>
                        <b-row class="mb-2" no-gutters="true">
                            <b-col style="padding-right: 15px">
                                <b-form-input v-model="text" placeholder="First Name"></b-form-input>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="text" placeholder="Last Name"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mb-2">
                            <b-col>
                                <b-form-input v-model="text" placeholder="Email"></b-form-input>
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
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

    * {
        font-size: 16px;
    }

    .footer {
        background-color: #252594;
        color: #fff;
    }

    .tight-container {
        max-width: 50%;
        margin: auto;
    }

    
</style>