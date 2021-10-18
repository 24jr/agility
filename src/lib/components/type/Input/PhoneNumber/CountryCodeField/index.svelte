<script>
  import Modal from "$lib/components/Modal/index.svelte";

  export let countryCode = "+1";
  export let isDisabled = false;

  const countries = [
    { code: "US", map: "🇺🇸", phoneCode: 1, name: "United States" },
    { code: "GB", map: "🇬🇧", phoneCode: 44, name: "United Kingdom" },
    { code: "AF", map: "🇦🇫", phoneCode: 93, name: "Afghanistan" },
    { code: "AL", map: "🇦🇱", phoneCode: 355, name: "Albania" },
    { code: "DZ", map: "🇩🇿", phoneCode: 213, name: "Algeria" },
    { code: "AS", map: "🇦🇸", phoneCode: 1684, name: "American Samoa" },
    { code: "AD", map: "🇦🇩", phoneCode: 376, name: "Andorra" },
    { code: "AO", map: "🇦🇴", phoneCode: 244, name: "Angola" },
    { code: "AI", map: "🇦🇮", phoneCode: 1264, name: "Anguilla" },
    { code: "AQ", map: "🇦🇶", phoneCode: 0, name: "Antarctica" },
    { code: "AR", map: "🇦🇷", phoneCode: 54, name: "Argentina" },
    { code: "AM", map: "🇦🇲", phoneCode: 374, name: "Armenia" },
    { code: "AW", map: "🇦🇼", phoneCode: 297, name: "Aruba" },
    { code: "AU", map: "🇦🇺", phoneCode: 61, name: "Australia" },
    { code: "AT", map: "🇦🇹", phoneCode: 43, name: "Austria" },
    { code: "AZ", map: "🇦🇿", phoneCode: 994, name: "Azerbaijan" },
    { code: "BH", map: "🇧🇭", phoneCode: 973, name: "Bahrain" },
    { code: "BD", map: "🇧🇩", phoneCode: 880, name: "Bangladesh" },
    { code: "BB", map: "🇧🇧", phoneCode: 1246, name: "Barbados" },
    { code: "BY", map: "🇧🇾", phoneCode: 375, name: "Belarus" },
    { code: "BE", map: "🇧🇪", phoneCode: 32, name: "Belgium" },
    { code: "BZ", map: "🇧🇿", phoneCode: 501, name: "Belize" },
    { code: "BJ", map: "🇧🇯", phoneCode: 229, name: "Benin" },
    { code: "BM", map: "🇧🇲", phoneCode: 1441, name: "Bermuda" },
    { code: "BT", map: "🇧🇹", phoneCode: 975, name: "Bhutan" },
    { code: "BO", map: "🇧🇴", phoneCode: 591, name: "Bolivia" },
    { code: "BW", map: "🇧🇼", phoneCode: 267, name: "Botswana" },
    { code: "BV", map: "🇧🇻", phoneCode: 0, name: "Bouvet Island" },
    { code: "BR", map: "🇧🇷", phoneCode: 55, name: "Brazil" },
    {
      code: "IO",
      map: "🇮🇴",
      phoneCode: 246,
      name: "British Indian Ocean Territory",
    },
    { code: "BN", map: "🇧🇳", phoneCode: 673, name: "Brunei" },
    { code: "BG", map: "🇧🇬", phoneCode: 359, name: "Bulgaria" },
    { code: "BF", map: "🇧🇫", phoneCode: 226, name: "Burkina Faso" },
    { code: "BI", map: "🇧🇮", phoneCode: 257, name: "Burundi" },
    { code: "KH", map: "🇰🇭", phoneCode: 855, name: "Cambodia" },
    { code: "CM", map: "🇨🇲", phoneCode: 237, name: "Cameroon" },
    { code: "CA", map: "🇨🇦", phoneCode: 1, name: "Canada" },
    { code: "CV", map: "🇨🇻", phoneCode: 238, name: "Cape Verde" },
    { code: "KY", map: "🇰🇾", phoneCode: 1345, name: "Cayman Islands" },
    {
      code: "CF",
      map: "🇨🇫",
      phoneCode: 236,
      name: "Central African Republic",
    },
    { code: "TD", map: "🇹🇩", phoneCode: 235, name: "Chad" },
    { code: "CL", map: "🇨🇱", phoneCode: 56, name: "Chile" },
    { code: "CN", map: "🇨🇳", phoneCode: 86, name: "China" },
    { code: "CX", map: "🇨🇽", phoneCode: 61, name: "Christmas Island" },
    { code: "CC", map: "🇨🇨", phoneCode: 672, name: "Cocos (Keeling) Islands" },
    { code: "CO", map: "🇨🇴", phoneCode: 57, name: "Colombia" },
    { code: "KM", map: "🇰🇲", phoneCode: 269, name: "Comoros" },
    { code: "CK", map: "🇨🇰", phoneCode: 682, name: "Cook Islands" },
    { code: "CR", map: "🇨🇷", phoneCode: 506, name: "Costa Rica" },
    { code: "CU", map: "🇨🇺", phoneCode: 53, name: "Cuba" },
    { code: "CY", map: "🇨🇾", phoneCode: 357, name: "Cyprus" },
    { code: "DK", map: "🇩🇰", phoneCode: 45, name: "Denmark" },
    { code: "DJ", map: "🇩🇯", phoneCode: 253, name: "Djibouti" },
    { code: "DM", map: "🇩🇲", phoneCode: 1767, name: "Dominica" },
    { code: "DO", map: "🇩🇴", phoneCode: 1809, name: "Dominican Republic" },
    { code: "EC", map: "🇪🇨", phoneCode: 593, name: "Ecuador" },
    { code: "EG", map: "🇪🇬", phoneCode: 20, name: "Egypt" },
    { code: "SV", map: "🇸🇻", phoneCode: 503, name: "El Salvador" },
    { code: "GQ", map: "🇬🇶", phoneCode: 240, name: "Equatorial Guinea" },
    { code: "ER", map: "🇪🇷", phoneCode: 291, name: "Eritrea" },
    { code: "EE", map: "🇪🇪", phoneCode: 372, name: "Estonia" },
    { code: "ET", map: "🇪🇹", phoneCode: 251, name: "Ethiopia" },
    { code: "FK", map: "🇫🇰", phoneCode: 500, name: "Falkland Islands" },
    { code: "FO", map: "🇫🇴", phoneCode: 298, name: "Faroe Islands" },
    { code: "FI", map: "🇫🇮", phoneCode: 358, name: "Finland" },
    { code: "FR", map: "🇫🇷", phoneCode: 33, name: "France" },
    { code: "GF", map: "🇬🇫", phoneCode: 594, name: "French Guiana" },
    { code: "PF", map: "🇵🇫", phoneCode: 689, name: "French Polynesia" },
    {
      code: "TF",
      map: "🇹🇫",
      phoneCode: 0,
      name: "French Southern Territories",
    },
    { code: "GA", map: "🇬🇦", phoneCode: 241, name: "Gabon" },
    { code: "GE", map: "🇬🇪", phoneCode: 995, name: "Georgia" },
    { code: "DE", map: "🇩🇪", phoneCode: 49, name: "Germany" },
    { code: "GH", map: "🇬🇭", phoneCode: 233, name: "Ghana" },
    { code: "GI", map: "🇬🇮", phoneCode: 350, name: "Gibraltar" },
    { code: "GR", map: "🇬🇷", phoneCode: 30, name: "Greece" },
    { code: "GL", map: "🇬🇱", phoneCode: 299, name: "Greenland" },
    { code: "GD", map: "🇬🇩", phoneCode: 1473, name: "Grenada" },
    { code: "GP", map: "🇬🇵", phoneCode: 590, name: "Guadeloupe" },
    { code: "GU", map: "🇬🇺", phoneCode: 1671, name: "Guam" },
    { code: "GT", map: "🇬🇹", phoneCode: 502, name: "Guatemala" },
    { code: "GN", map: "🇬🇳", phoneCode: 224, name: "Guinea" },
    { code: "GW", map: "🇬🇼", phoneCode: 245, name: "Guinea-Bissau" },
    { code: "GY", map: "🇬🇾", phoneCode: 592, name: "Guyana" },
    { code: "HT", map: "🇭🇹", phoneCode: 509, name: "Haiti" },
    { code: "HN", map: "🇭🇳", phoneCode: 504, name: "Honduras" },
    { code: "HU", map: "🇭🇺", phoneCode: 36, name: "Hungary" },
    { code: "IS", map: "🇮🇸", phoneCode: 354, name: "Iceland" },
    { code: "IN", map: "🇮🇳", phoneCode: 91, name: "India" },
    { code: "ID", map: "🇮🇩", phoneCode: 62, name: "Indonesia" },
    { code: "IR", map: "🇮🇷", phoneCode: 98, name: "Iran" },
    { code: "IQ", map: "🇮🇶", phoneCode: 964, name: "Iraq" },
    { code: "IE", map: "🇮🇪", phoneCode: 353, name: "Ireland" },
    { code: "IL", map: "🇮🇱", phoneCode: 972, name: "Israel" },
    { code: "IT", map: "🇮🇹", phoneCode: 39, name: "Italy" },
    { code: "JM", map: "🇯🇲", phoneCode: 1876, name: "Jamaica" },
    { code: "JP", map: "🇯🇵", phoneCode: 81, name: "Japan" },
    { code: "JO", map: "🇯🇴", phoneCode: 962, name: "Jordan" },
    { code: "KZ", map: "🇰🇿", phoneCode: 7, name: "Kazakhstan" },
    { code: "KE", map: "🇰🇪", phoneCode: 254, name: "Kenya" },
    { code: "KI", map: "🇰🇮", phoneCode: 686, name: "Kiribati" },
    { code: "KW", map: "🇰🇼", phoneCode: 965, name: "Kuwait" },
    { code: "KG", map: "🇰🇬", phoneCode: 996, name: "Kyrgyzstan" },
    { code: "LA", map: "🇱🇦", phoneCode: 856, name: "Laos" },
    { code: "LV", map: "🇱🇻", phoneCode: 371, name: "Latvia" },
    { code: "LB", map: "🇱🇧", phoneCode: 961, name: "Lebanon" },
    { code: "LS", map: "🇱🇸", phoneCode: 266, name: "Lesotho" },
    { code: "LR", map: "🇱🇷", phoneCode: 231, name: "Liberia" },
    { code: "LY", map: "🇱🇾", phoneCode: 218, name: "Libya" },
    { code: "LI", map: "🇱🇮", phoneCode: 423, name: "Liechtenstein" },
    { code: "LT", map: "🇱🇹", phoneCode: 370, name: "Lithuania" },
    { code: "LU", map: "🇱🇺", phoneCode: 352, name: "Luxembourg" },
    { code: "MK", map: "🇲🇰", phoneCode: 389, name: "Macedonia" },
    { code: "MG", map: "🇲🇬", phoneCode: 261, name: "Madagascar" },
    { code: "MW", map: "🇲🇼", phoneCode: 265, name: "Malawi" },
    { code: "MY", map: "🇲🇾", phoneCode: 60, name: "Malaysia" },
    { code: "MV", map: "🇲🇻", phoneCode: 960, name: "Maldives" },
    { code: "ML", map: "🇲🇱", phoneCode: 223, name: "Mali" },
    { code: "MT", map: "🇲🇹", phoneCode: 356, name: "Malta" },
    { code: "MH", map: "🇲🇭", phoneCode: 692, name: "Marshall Islands" },
    { code: "MQ", map: "🇲🇶", phoneCode: 596, name: "Martinique" },
    { code: "MR", map: "🇲🇷", phoneCode: 222, name: "Mauritania" },
    { code: "MU", map: "🇲🇺", phoneCode: 230, name: "Mauritius" },
    { code: "YT", map: "🇾🇹", phoneCode: 269, name: "Mayotte" },
    { code: "MX", map: "🇲🇽", phoneCode: 52, name: "Mexico" },
    { code: "FM", map: "🇫🇲", phoneCode: 691, name: "Micronesia" },
    { code: "MD", map: "🇲🇩", phoneCode: 373, name: "Moldova" },
    { code: "MC", map: "🇲🇨", phoneCode: 377, name: "Monaco" },
    { code: "MN", map: "🇲🇳", phoneCode: 976, name: "Mongolia" },
    { code: "MS", map: "🇲🇸", phoneCode: 1664, name: "Montserrat" },
    { code: "MA", map: "🇲🇦", phoneCode: 212, name: "Morocco" },
    { code: "MZ", map: "🇲🇿", phoneCode: 258, name: "Mozambique" },
    { code: "NA", map: "🇳🇦", phoneCode: 264, name: "Namibia" },
    { code: "NR", map: "🇳🇷", phoneCode: 674, name: "Nauru" },
    { code: "NP", map: "🇳🇵", phoneCode: 977, name: "Nepal" },
    { code: "NC", map: "🇳🇨", phoneCode: 687, name: "New Caledonia" },
    { code: "NZ", map: "🇳🇿", phoneCode: 64, name: "New Zealand" },
    { code: "NI", map: "🇳🇮", phoneCode: 505, name: "Nicaragua" },
    { code: "NE", map: "🇳🇪", phoneCode: 227, name: "Niger" },
    { code: "NG", map: "🇳🇬", phoneCode: 234, name: "Nigeria" },
    { code: "NU", map: "🇳🇺", phoneCode: 683, name: "Niue" },
    { code: "NF", map: "🇳🇫", phoneCode: 672, name: "Norfolk Island" },
    {
      code: "MP",
      map: "🇲🇵",
      phoneCode: 1670,
      name: "Northern Mariana Islands",
    },
    { code: "NO", map: "🇳🇴", phoneCode: 47, name: "Norway" },
    { code: "OM", map: "🇴🇲", phoneCode: 968, name: "Oman" },
    { code: "PK", map: "🇵🇰", phoneCode: 92, name: "Pakistan" },
    { code: "PW", map: "🇵🇼", phoneCode: 680, name: "Palau" },
    { code: "PA", map: "🇵🇦", phoneCode: 507, name: "Panama" },
    { code: "PY", map: "🇵🇾", phoneCode: 595, name: "Paraguay" },
    { code: "PE", map: "🇵🇪", phoneCode: 51, name: "Peru" },
    { code: "PH", map: "🇵🇭", phoneCode: 63, name: "Philippines" },
    { code: "PL", map: "🇵🇱", phoneCode: 48, name: "Poland" },
    { code: "PT", map: "🇵🇹", phoneCode: 351, name: "Portugal" },
    { code: "PR", map: "🇵🇷", phoneCode: 1787, name: "Puerto Rico" },
    { code: "QA", map: "🇶🇦", phoneCode: 974, name: "Qatar" },
    { code: "RO", map: "🇷🇴", phoneCode: 40, name: "Romania" },
    { code: "RU", map: "🇷🇺", phoneCode: 70, name: "Russia" },
    { code: "RW", map: "🇷🇼", phoneCode: 250, name: "Rwanda" },
    { code: "WS", map: "🇼🇸", phoneCode: 684, name: "Samoa" },
    { code: "SM", map: "🇸🇲", phoneCode: 378, name: "San Marino" },
    { code: "SA", map: "🇸🇦", phoneCode: 966, name: "Saudi Arabia" },
    { code: "SN", map: "🇸🇳", phoneCode: 221, name: "Senegal" },
    { code: "RS", map: "🇷🇸", phoneCode: 381, name: "Serbia" },
    { code: "SC", map: "🇸🇨", phoneCode: 248, name: "Seychelles" },
    { code: "SL", map: "🇸🇱", phoneCode: 232, name: "Sierra Leone" },
    { code: "SG", map: "🇸🇬", phoneCode: 65, name: "Singapore" },
    { code: "SK", map: "🇸🇰", phoneCode: 421, name: "Slovakia" },
    { code: "SI", map: "🇸🇮", phoneCode: 386, name: "Slovenia" },
    { code: "SB", map: "🇸🇧", phoneCode: 677, name: "Solomon Islands" },
    { code: "SO", map: "🇸🇴", phoneCode: 252, name: "Somalia" },
    { code: "ZA", map: "🇿🇦", phoneCode: 27, name: "South Africa" },
    { code: "SS", map: "🇸🇸", phoneCode: 211, name: "South Sudan" },
    { code: "ES", map: "🇪🇸", phoneCode: 34, name: "Spain" },
    { code: "LK", map: "🇱🇰", phoneCode: 94, name: "Sri Lanka" },
    { code: "SD", map: "🇸🇩", phoneCode: 249, name: "Sudan" },
    { code: "SR", map: "🇸🇷", phoneCode: 597, name: "Suriname" },
    { code: "SZ", map: "🇸🇿", phoneCode: 268, name: "Swaziland" },
    { code: "SE", map: "🇸🇪", phoneCode: 46, name: "Sweden" },
    { code: "CH", map: "🇨🇭", phoneCode: 41, name: "Switzerland" },
    { code: "SY", map: "🇸🇾", phoneCode: 963, name: "Syria" },
    { code: "TW", map: "🇹🇼", phoneCode: 886, name: "Taiwan" },
    { code: "TJ", map: "🇹🇯", phoneCode: 992, name: "Tajikistan" },
    { code: "TZ", map: "🇹🇿", phoneCode: 255, name: "Tanzania" },
    { code: "TH", map: "🇹🇭", phoneCode: 66, name: "Thailand" },
    { code: "TG", map: "🇹🇬", phoneCode: 228, name: "Togo" },
    { code: "TK", map: "🇹🇰", phoneCode: 690, name: "Tokelau" },
    { code: "TO", map: "🇹🇴", phoneCode: 676, name: "Tonga" },
    { code: "TN", map: "🇹🇳", phoneCode: 216, name: "Tunisia" },
    { code: "TR", map: "🇹🇷", phoneCode: 90, name: "Turkey" },
    { code: "TM", map: "🇹🇲", phoneCode: 7370, name: "Turkmenistan" },
    { code: "TV", map: "🇹🇻", phoneCode: 688, name: "Tuvalu" },
    { code: "UG", map: "🇺🇬", phoneCode: 256, name: "Uganda" },
    { code: "UA", map: "🇺🇦", phoneCode: 380, name: "Ukraine" },
    { code: "AE", map: "🇦🇪", phoneCode: 971, name: "United Arab Emirates" },
    { code: "UY", map: "🇺🇾", phoneCode: 598, name: "Uruguay" },
    { code: "UZ", map: "🇺🇿", phoneCode: 998, name: "Uzbekistan" },
    { code: "VU", map: "🇻🇺", phoneCode: 678, name: "Vanuatu" },
    { code: "VE", map: "🇻🇪", phoneCode: 58, name: "Venezuela" },
    { code: "VN", map: "🇻🇳", phoneCode: 84, name: "Vietnam" },
    { code: "EH", map: "🇪🇭", phoneCode: 212, name: "Western Sahara" },
    { code: "YE", map: "🇾🇪", phoneCode: 967, name: "Yemen" },
    { code: "ZM", map: "🇿🇲", phoneCode: 260, name: "Zambia" },
    { code: "ZW", map: "🇿🇼", phoneCode: 26, name: "Zimbabwe" },
  ];

  let chosenOne = {
    code: "US",
    map: "🇺🇸",
    phoneCode: 1,
    name: "United States",
  };

  function handleCountryClick(country, toggle) {
    chosenOne = country;
    toggle();
    countryCode = "+" + country.phoneCode;
  }
</script>

{#if isDisabled}
  <div class="card sortByButton" class:isDisabled>
    <p>{chosenOne.map}+{chosenOne.phoneCode}</p>
  </div>
{:else}
  <Modal targetWidth={185} type={"dropdown"}>
    <div slot="toggleButton" class="bump sortByButton">
      <p>{chosenOne.map}+{chosenOne.phoneCode}</p>
    </div>
    <div slot="modalContent" let:toggleModal>
      <div class="dropdownContainer">
        <h4 class="header">Country Code</h4>
        <div class="spacerVert" />
        {#each countries as country (country.code)}
          <div
            class="countryItem"
            on:click={() => handleCountryClick(country, toggleModal)}
          >
            <p>{country.map}{country.name}</p>
            <p>+{country.phoneCode}</p>
          </div>
        {/each}
      </div>
    </div>
  </Modal>
{/if}

<style>
  .dropdownContainer {
    max-height: 17rem;
    overflow: scroll;
    text-align: start;
  }
  .header {
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .countryItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .countryItem:hover {
    background: var(--bg-med-light);
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
</style>
