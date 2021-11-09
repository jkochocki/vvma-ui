<template>
    <span>
        <a :href="venmo" class="venmo-button">
            <b-img src="~assets/icons/venmo_icon.png" class="venmo-button-icon"></b-img>
            <strong>@VolunteerVenturesMA</strong>
        </a>
    </span>
</template>

<script>
export default {
    data() {
        return {
            venmo: 'https://venmo.com/u/volunteerventuresma'
        }
    }
}
</script>

<style>
    .venmo-button:hover {
        text-decoration: none;
    }
    .venmo-button-icon {
        max-height: 35px;
        margin-top: -2px;
        margin-right: -3px;
    }
</style>
