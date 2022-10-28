let arr = [
    { "country": "Afghanistan", "alpha2": "AF", "alpha3": "AFG", "numeric": 4, "lat": 33, "lon": 65 },
    { "country": "Albania", "alpha2": "AL", "alpha3": "ALB", "numeric": 8, "lat": 41, "lon": 20 },
    { "country": "Algeria", "alpha2": "DZ", "alpha3": "DZA", "numeric": 12, "lat": 28, "lon": 3 },
    { "country": "American Samoa", "alpha2": " AS", "alpha3": " ASM", "numeric": 16, "lat": -14.3333, "lon": -170 },
    { "country": "Andorra", "alpha2": "AD", "alpha3": "AND", "numeric": 20, "lat": 42.5, "lon": 1.6 },
    { "country": "Angola", "alpha2": "AO", "alpha3": "AGO", "numeric": 24, "lat": -12.5, "lon": 18.5 },
    { "country": "Anguilla", "alpha2": "AI", "alpha3": "AIA", "numeric": 660, "lat": 18.25, "lon": -63.1667 },
    { "country": "Antarctica", "alpha2": "AQ", "alpha3": "ATA", "numeric": 10, "lat": -90, "lon": 0 },
    { "country": "Antigua and Barbuda", "alpha2": "AG", "alpha3": "ATG", "numeric": 28, "lat": 17.05, "lon": -61.8 },
    { "country": "Argentina", "alpha2": "AR", "alpha3": "ARG", "numeric": 32, "lat": -34, "lon": -64 },
    { "country": "Armenia", "alpha2": "AM", "alpha3": "ARM", "numeric": 51, "lat": 40, "lon": 45 },
    { "country": "Aruba", "alpha2": "AW", "alpha3": "ABW", "numeric": 533, "lat": 12.5, "lon": -69.9667 },
    { "country": "Australia", "alpha2": "AU", "alpha3": "AUS", "numeric": 36, "lat": -27, "lon": 133 },
    { "country": "Austria", "alpha2": "AT", "alpha3": "AUT", "numeric": 40, "lat": 47.3333, "lon": 13.3333 },
    { "country": "Azerbaijan", "alpha2": "AZ", "alpha3": "AZE", "numeric": 31, "lat": 40.5, "lon": 47.5 },
    { "country": "Bahamas", "alpha2": "BS", "alpha3": "BHS", "numeric": 44, "lat": 24.25, "lon": -76 },
    { "country": "Bahrain", "alpha2": "BH", "alpha3": "BHR", "numeric": 48, "lat": 26, "lon": 50.55 },
    { "country": "Bangladesh", "alpha2": "BD", "alpha3": "BGD", "numeric": 50, "lat": 24, "lon": 90 },
    { "country": "Barbados", "alpha2": "BB", "alpha3": "BRB", "numeric": 52, "lat": 13.1667, "lon": -59.5333 },
    { "country": "Belarus", "alpha2": "BY", "alpha3": "BLR", "numeric": 112, "lat": 53, "lon": 28 },
    { "country": "Belgium", "alpha2": "BE", "alpha3": "BEL", "numeric": 56, "lat": 50.8333, "lon": 4 },
    { "country": "Belize", "alpha2": "BZ", "alpha3": "BLZ", "numeric": 84, "lat": 17.25, "lon": -88.75 },
    { "country": "Benin", "alpha2": "BJ", "alpha3": "BEN", "numeric": 204, "lat": 9.5, "lon": 2.25 },
    { "country": "Bermuda", "alpha2": "BM", "alpha3": "BMU", "numeric": 60, "lat": 32.3333, "lon": -64.75 },
    { "country": "Bhutan", "alpha2": "BT", "alpha3": "BTN", "numeric": 64, "lat": 27.5, "lon": 90.5 },
    { "country": "Bolivia, Plurinational State of", "alpha2": "BO", "alpha3": "BOL", "numeric": 68, "lat": -17, "lon": -65 },
    { "country": "Bosnia and Herzegovina", "alpha2": "BA", "alpha3": "BIH", "numeric": 70, "lat": 44, "lon": 18 },
    { "country": "Botswana", "alpha2": "BW", "alpha3": "BWA", "numeric": 72, "lat": -22, "lon": 24 },
    { "country": "Bouvet Island", "alpha2": "BV", "alpha3": "BVT", "numeric": 74, "lat": -54.4333, "lon": 3.4 },
    { "country": "Brazil", "alpha2": "BR", "alpha3": "BRA", "numeric": 76, "lat": -10, "lon": -55 },
    { "country": "British Indian Ocean Territory", "alpha2": "IO", "alpha3": "IOT", "numeric": 86, "lat": -6, "lon": 71.5 },
    { "country": "Brunei Darussalam", "alpha2": "BN", "alpha3": "BRN", "numeric": 96, "lat": 4.5, "lon": 114.6667 },
    { "country": "Bulgaria", "alpha2": "BG", "alpha3": "BGR", "numeric": 100, "lat": 43, "lon": 25 },
    { "country": "Burkina Faso", "alpha2": "BF", "alpha3": "BFA", "numeric": 854, "lat": 13, "lon": -2 },
    { "country": "Burundi", "alpha2": "BI", "alpha3": "BDI", "numeric": 108, "lat": -3.5, "lon": 30 },
    { "country": "Cambodia", "alpha2": "KH", "alpha3": "KHM", "numeric": 116, "lat": 13, "lon": 105 },
    { "country": "Cameroon", "alpha2": "CM", "alpha3": "CMR", "numeric": 120, "lat": 6, "lon": 12 },
    { "country": "Canada", "alpha2": "CA", "alpha3": "CAN", "numeric": 124, "lat": 60, "lon": -95 },
    { "country": "Cape Verde", "alpha2": "CV", "alpha3": "CPV", "numeric": 132, "lat": 16, "lon": -24 },
    { "country": "Cayman Islands", "alpha2": "KY", "alpha3": "CYM", "numeric": 136, "lat": 19.5, "lon": -80.5 },
    { "country": "Central African Republic", "alpha2": "CF", "alpha3": "CAF", "numeric": 140, "lat": 7, "lon": 21 },
    { "country": "Chad", "alpha2": "TD", "alpha3": "TCD", "numeric": 148, "lat": 15, "lon": 19 },
    { "country": "Chile", "alpha2": "CL", "alpha3": "CHL", "numeric": 152, "lat": -30, "lon": -71 },
    { "country": "China", "alpha2": "CN", "alpha3": "CHN", "numeric": 156, "lat": 35, "lon": 105 },
    { "country": "Christmas Island", "alpha2": "CX", "alpha3": "CXR", "numeric": 162, "lat": -10.5, "lon": 105.6667 },
    { "country": "Cocos (Keeling) Islands", "alpha2": "CC", "alpha3": "CCK", "numeric": 166, "lat": -12.5, "lon": 96.8333 },
    { "country": "Colombia", "alpha2": "CO", "alpha3": "COL", "numeric": 170, "lat": 4, "lon": -72 },
    { "country": "Comoros", "alpha2": "KM", "alpha3": "COM", "numeric": 174, "lat": -12.1667, "lon": 44.25 },
    { "country": "Congo", "alpha2": "CG", "alpha3": "COG", "numeric": 178, "lat": -1, "lon": 15 },
    { "country": "Congo, the Democratic Republic of the", "alpha2": "CD", "alpha3": "COD", "numeric": 180, "lat": 0, "lon": 25 },
    { "country": "Cook Islands", "alpha2": "CK", "alpha3": "COK", "numeric": 184, "lat": -21.2333, "lon": -159.7667 },
    { "country": "Costa Rica", "alpha2": "CR", "alpha3": "CRI", "numeric": 188, "lat": 10, "lon": -84 },
    { "country": "Côte d'Ivoire", "alpha2": "CI", "alpha3": "CIV", "numeric": 384, "lat": 8, "lon": -5 },
    { "country": "Croatia", "alpha2": "HR", "alpha3": "HRV", "numeric": 191, "lat": 45.1667, "lon": 15.5 },
    { "country": "Cuba", "alpha2": "CU", "alpha3": "CUB", "numeric": 192, "lat": 21.5, "lon": -80 },
    { "country": "Cyprus", "alpha2": "CY", "alpha3": "CYP", "numeric": 196, "lat": 35, "lon": 33 },
    { "country": "Czech Republic", "alpha2": "CZ", "alpha3": "CZE", "numeric": 203, "lat": 49.75, "lon": 15.5 },
    { "country": "Denmark", "alpha2": "DK", "alpha3": "DNK", "numeric": 208, "lat": 56, "lon": 10 },
    { "country": "Djibouti", "alpha2": "DJ", "alpha3": "DJI", "numeric": 262, "lat": 11.5, "lon": 43 },
    { "country": "Dominica", "alpha2": "DM", "alpha3": "DMA", "numeric": 212, "lat": 15.4167, "lon": -61.3333 },
    { "country": "Dominican Republic", "alpha2": "DO", "alpha3": "DOM", "numeric": 214, "lat": 19, "lon": -70.6667 },
    { "country": "Ecuador", "alpha2": "EC", "alpha3": "ECU", "numeric": 218, "lat": -2, "lon": -77.5 },
    { "country": "Egypt", "alpha2": "EG", "alpha3": "EGY", "numeric": 818, "lat": 27, "lon": 30 },
    { "country": "El Salvador", "alpha2": "SV", "alpha3": "SLV", "numeric": 222, "lat": 13.8333, "lon": -88.9167 },
    { "country": "Equatorial Guinea", "alpha2": "GQ", "alpha3": "GNQ", "numeric": 226, "lat": 2, "lon": 10 },
    { "country": "Eritrea", "alpha2": "ER", "alpha3": "ERI", "numeric": 232, "lat": 15, "lon": 39 },
    { "country": "Estonia", "alpha2": "EE", "alpha3": "EST", "numeric": 233, "lat": 59, "lon": 26 },
    { "country": "Ethiopia", "alpha2": "ET", "alpha3": "ETH", "numeric": 231, "lat": 8, "lon": 38 },
    { "country": "Falkland Islands (Malvinas)", "alpha2": "FK", "alpha3": "FLK", "numeric": 238, "lat": -51.75, "lon": -59 },
    { "country": "Faroe Islands", "alpha2": "FO", "alpha3": "FRO", "numeric": 234, "lat": 62, "lon": -7 },
    { "country": "Fiji", "alpha2": "FJ", "alpha3": "FJI", "numeric": 242, "lat": -18, "lon": 175 },
    { "country": "Finland", "alpha2": "FI", "alpha3": "FIN", "numeric": 246, "lat": 64, "lon": 26 },
    { "country": "France", "alpha2": "FR", "alpha3": "FRA", "numeric": 250, "lat": 46, "lon": 2 },
    { "country": "French Guiana", "alpha2": "GF", "alpha3": "GUF", "numeric": 254, "lat": 4, "lon": -53 },
    { "country": "French Polynesia", "alpha2": "PF", "alpha3": "PYF", "numeric": 258, "lat": -15, "lon": -140 },
    { "country": "French Southern Territories", "alpha2": "TF", "alpha3": "ATF", "numeric": 260, "lat": -43, "lon": 67 },
    { "country": "Gabon", "alpha2": "GA", "alpha3": "GAB", "numeric": 266, "lat": -1, "lon": 11.75 },
    { "country": "Gambia", "alpha2": "GM", "alpha3": "GMB", "numeric": 270, "lat": 13.4667, "lon": -16.5667 },
    { "country": "Georgia", "alpha2": "GE", "alpha3": "GEO", "numeric": 268, "lat": 42, "lon": 43.5 },
    { "country": "Germany", "alpha2": "DE", "alpha3": "DEU", "numeric": 276, "lat": 51, "lon": 9 },
    { "country": "Ghana", "alpha2": "GH", "alpha3": "GHA", "numeric": 288, "lat": 8, "lon": -2 },
    { "country": "Gibraltar", "alpha2": "GI", "alpha3": "GIB", "numeric": 292, "lat": 36.1833, "lon": -5.3667 },
    { "country": "Greece", "alpha2": "GR", "alpha3": "GRC", "numeric": 300, "lat": 39, "lon": 22 },
    { "country": "Greenland", "alpha2": "GL", "alpha3": "GRL", "numeric": 304, "lat": 72, "lon": -40 },
    { "country": "Grenada", "alpha2": "GD", "alpha3": "GRD", "numeric": 308, "lat": 12.1167, "lon": -61.6667 },
    { "country": "Guadeloupe", "alpha2": "GP", "alpha3": "GLP", "numeric": 312, "lat": 16.25, "lon": -61.5833 },
    { "country": "Guam", "alpha2": "GU", "alpha3": "GUM", "numeric": 316, "lat": 13.4667, "lon": 144.7833 },
    { "country": "Guatemala", "alpha2": "GT", "alpha3": "GTM", "numeric": 320, "lat": 15.5, "lon": -90.25 },
    { "country": "Guernsey", "alpha2": "GG", "alpha3": "GGY", "numeric": 831, "lat": 49.5, "lon": -2.56 },
    { "country": "Guinea", "alpha2": "GN", "alpha3": "GIN", "numeric": 324, "lat": 11, "lon": -10 },
    { "country": "Guinea-Bissau", "alpha2": "GW", "alpha3": "GNB", "numeric": 624, "lat": 12, "lon": -15 },
    { "country": "Guyana", "alpha2": "GY", "alpha3": "GUY", "numeric": 328, "lat": 5, "lon": -59 },
    { "country": "Haiti", "alpha2": "HT", "alpha3": "HTI", "numeric": 332, "lat": 19, "lon": -72.4167 },
    { "country": "Heard Island and McDonald Islands", "alpha2": "HM", "alpha3": "HMD", "numeric": 334, "lat": -53.1, "lon": 72.5167 },
    { "country": "Holy See (Vatican City State)", "alpha2": "VA", "alpha3": "VAT", "numeric": 336, "lat": 41.9, "lon": 12.45 },
    { "country": "Honduras", "alpha2": "HN", "alpha3": "HND", "numeric": 340, "lat": 15, "lon": -86.5 },
    { "country": "Hong Kong", "alpha2": "HK", "alpha3": "HKG", "numeric": 344, "lat": 22.25, "lon": 114.1667 },
    { "country": "Hungary", "alpha2": "HU", "alpha3": "HUN", "numeric": 348, "lat": 47, "lon": 20 },
    { "country": "Iceland", "alpha2": "IS", "alpha3": "ISL", "numeric": 352, "lat": 65, "lon": -18 },
    { "country": "India", "alpha2": "IN", "alpha3": "IND", "numeric": 356, "lat": 20, "lon": 77 },
    { "country": "Indonesia", "alpha2": "ID", "alpha3": "IDN", "numeric": 360, "lat": -5, "lon": 120 },
    { "country": "Iran", "alpha2": "IR", "alpha3": "IRN", "numeric": 364, "lat": 32, "lon": 53 },
    { "country": "Iraq", "alpha2": "IQ", "alpha3": "IRQ", "numeric": 368, "lat": 33, "lon": 44 },
    { "country": "Ireland", "alpha2": "IE", "alpha3": "IRL", "numeric": 372, "lat": 53, "lon": -8 },
    { "country": "Isle of Man", "alpha2": "IM", "alpha3": "IMN", "numeric": 833, "lat": 54.23, "lon": -4.55 },
    { "country": "Israel", "alpha2": "IL", "alpha3": "ISR", "numeric": 376, "lat": 31.5, "lon": 34.75 },
    { "country": "Italy", "alpha2": "IT", "alpha3": "ITA", "numeric": 380, "lat": 42.8333, "lon": 12.8333 },
    { "country": "Jamaica", "alpha2": "JM", "alpha3": "JAM", "numeric": 388, "lat": 18.25, "lon": -77.5 },
    { "country": "Japan", "alpha2": "JP", "alpha3": "JPN", "numeric": 392, "lat": 36, "lon": 138 },
    { "country": "Jersey", "alpha2": "JE", "alpha3": "JEY", "numeric": 832, "lat": 49.21, "lon": -2.13 },
    { "country": "Jordan", "alpha2": "JO", "alpha3": "JOR", "numeric": 400, "lat": 31, "lon": 36 },
    { "country": "Kazakhstan", "alpha2": "KZ", "alpha3": "KAZ", "numeric": 398, "lat": 48, "lon": 68 },
    { "country": "Kenya", "alpha2": "KE", "alpha3": "KEN", "numeric": 404, "lat": 1, "lon": 38 },
    { "country": "Kiribati", "alpha2": "KI", "alpha3": "KIR", "numeric": 296, "lat": 1.4167, "lon": 173 },
    { "country": "Kolonia", "alpha2": "FM", "alpha3": "FSM", "numeric": 583, "lat": 6.9167, "lon": 158.25 },
    { "country": "Korea, Republic of", "alpha2": "KR", "alpha3": "KOR", "numeric": 410, "lat": 37, "lon": 127.5 },
    { "country": "Kuwait", "alpha2": "KW", "alpha3": "KWT", "numeric": 414, "lat": 29.3375, "lon": 47.6581 },
    { "country": "Kyrgyzstan", "alpha2": "KG", "alpha3": "KGZ", "numeric": 417, "lat": 41, "lon": 75 },
    { "country": "Laos", "alpha2": "LA", "alpha3": "LAO", "numeric": 418, "lat": 18, "lon": 105 },
    { "country": "Latvia", "alpha2": "LV", "alpha3": "LVA", "numeric": 428, "lat": 57, "lon": 25 },
    { "country": "Lebanon", "alpha2": "LB", "alpha3": "LBN", "numeric": 422, "lat": 33.8333, "lon": 35.8333 },
    { "country": "Lesotho", "alpha2": "LS", "alpha3": "LSO", "numeric": 426, "lat": -29.5, "lon": 28.5 },
    { "country": "Liberia", "alpha2": "LR", "alpha3": "LBR", "numeric": 430, "lat": 6.5, "lon": -9.5 },
    { "country": "Libyan Arab Jamahiriya", "alpha2": "LY", "alpha3": "LBY", "numeric": 434, "lat": 25, "lon": 17 },
    { "country": "Liechtenstein", "alpha2": "LI", "alpha3": "LIE", "numeric": 438, "lat": 47.1667, "lon": 9.5333 },
    { "country": "Lithuania", "alpha2": "LT", "alpha3": "LTU", "numeric": 440, "lat": 56, "lon": 24 },
    { "country": "Luxembourg", "alpha2": "LU", "alpha3": "LUX", "numeric": 442, "lat": 49.75, "lon": 6.1667 },
    { "country": "Macao", "alpha2": "MO", "alpha3": "MAC", "numeric": 446, "lat": 22.1667, "lon": 113.55 },
    { "country": "North Macedonia", "alpha2": "MK", "alpha3": "MKD", "numeric": 807, "lat": 41.8333, "lon": 22 },
    { "country": "Madagascar", "alpha2": "MG", "alpha3": "MDG", "numeric": 450, "lat": -20, "lon": 47 },
    { "country": "Malawi", "alpha2": "MW", "alpha3": "MWI", "numeric": 454, "lat": -13.5, "lon": 34 },
    { "country": "Malaysia", "alpha2": "MY", "alpha3": "MYS", "numeric": 458, "lat": 2.5, "lon": 112.5 },
    { "country": "Maldives", "alpha2": "MV", "alpha3": "MDV", "numeric": 462, "lat": 3.25, "lon": 73 },
    { "country": "Mali", "alpha2": "ML", "alpha3": "MLI", "numeric": 466, "lat": 17, "lon": -4 },
    { "country": "Malta", "alpha2": "MT", "alpha3": "MLT", "numeric": 470, "lat": 35.8333, "lon": 14.5833 },
    { "country": "Marshall Islands", "alpha2": "MH", "alpha3": "MHL", "numeric": 584, "lat": 9, "lon": 168 },
    { "country": "Martinique", "alpha2": "MQ", "alpha3": "MTQ", "numeric": 474, "lat": 14.6667, "lon": -61 },
    { "country": "Mauritania", "alpha2": "MR", "alpha3": "MRT", "numeric": 478, "lat": 20, "lon": -12 },
    { "country": "Mauritius", "alpha2": "MU", "alpha3": "MUS", "numeric": 480, "lat": -20.2833, "lon": 57.55 },
    { "country": "Mayotte", "alpha2": "YT", "alpha3": "MYT", "numeric": 175, "lat": -12.8333, "lon": 45.1667 },
    { "country": "Mexico", "alpha2": "MX", "alpha3": "MEX", "numeric": 484, "lat": 23, "lon": -102 },
    { "country": "Moldova, Republic of", "alpha2": "MD", "alpha3": "MDA", "numeric": 498, "lat": 47, "lon": 29 },
    { "country": "Monaco", "alpha2": "MC", "alpha3": "MCO", "numeric": 492, "lat": 43.7333, "lon": 7.4 },
    { "country": "Mongolia", "alpha2": "MN", "alpha3": "MNG", "numeric": 496, "lat": 46, "lon": 105 },
    { "country": "Montenegro", "alpha2": "ME", "alpha3": "MNE", "numeric": 499, "lat": 42, "lon": 19 },
    { "country": "Montserrat", "alpha2": "MS", "alpha3": "MSR", "numeric": 500, "lat": 16.75, "lon": -62.2 },
    { "country": "Morocco", "alpha2": "MA", "alpha3": "MAR", "numeric": 504, "lat": 32, "lon": -5 },
    { "country": "Mozambique", "alpha2": "MZ", "alpha3": "MOZ", "numeric": 508, "lat": -18.25, "lon": 35 },
    { "country": "Myanmar", "alpha2": "MM", "alpha3": "MMR", "numeric": 104, "lat": 22, "lon": 98 },
    { "country": "Namibia", "alpha2": "NA", "alpha3": "NAM", "numeric": 516, "lat": -22, "lon": 17 },
    { "country": "Nauru", "alpha2": "NR", "alpha3": "NRU", "numeric": 520, "lat": -0.5333, "lon": 166.9167 },
    { "country": "Nepal", "alpha2": "NP", "alpha3": "NPL", "numeric": 524, "lat": 28, "lon": 84 },
    { "country": "Netherlands", "alpha2": "NL", "alpha3": "NLD", "numeric": 528, "lat": 52.5, "lon": 5.75 },
    { "country": "Netherlands Antilles", "alpha2": "AN", "alpha3": "ANT", "numeric": 530, "lat": 12.25, "lon": -68.75 },
    { "country": "New Caledonia", "alpha2": "NC", "alpha3": "NCL", "numeric": 540, "lat": -21.5, "lon": 165.5 },
    { "country": "New Zealand", "alpha2": "NZ", "alpha3": "NZL", "numeric": 554, "lat": -41, "lon": 174 },
    { "country": "Nicaragua", "alpha2": "NI", "alpha3": "NIC", "numeric": 558, "lat": 13, "lon": -85 },
    { "country": "Niger", "alpha2": "NE", "alpha3": "NER", "numeric": 562, "lat": 16, "lon": 8 },
    { "country": "Nigeria", "alpha2": "NG", "alpha3": "NGA", "numeric": 566, "lat": 10, "lon": 8 },
    { "country": "Niue", "alpha2": "NU", "alpha3": "NIU", "numeric": 570, "lat": -19.0333, "lon": -169.8667 },
    { "country": "Norfolk Island", "alpha2": "NF", "alpha3": "NFK", "numeric": 574, "lat": -29.0333, "lon": 167.95 },
    { "country": "North Korea", "alpha2": "KP", "alpha3": "PRK", "numeric": 408, "lat": 40, "lon": 127 },
    { "country": "Northern Mariana Islands", "alpha2": "MP", "alpha3": "MNP", "numeric": 580, "lat": 15.2, "lon": 145.75 },
    { "country": "Norway", "alpha2": "NO", "alpha3": "NOR", "numeric": 578, "lat": 62, "lon": 10 },
    { "country": "Oman", "alpha2": "OM", "alpha3": "OMN", "numeric": 512, "lat": 21, "lon": 57 },
    { "country": "Pakistan", "alpha2": "PK", "alpha3": "PAK", "numeric": 586, "lat": 30, "lon": 70 },
    { "country": "Palau", "alpha2": "PW", "alpha3": "PLW", "numeric": 585, "lat": 7.5, "lon": 134.5 },
    { "country": "Palestinian Territory, Occupied", "alpha2": "PS", "alpha3": "PSE", "numeric": 275, "lat": 32, "lon": 35.25 },
    { "country": "Panama", "alpha2": "PA", "alpha3": "PAN", "numeric": 591, "lat": 9, "lon": -80 },
    { "country": "Papua New Guinea", "alpha2": "PG", "alpha3": "PNG", "numeric": 598, "lat": -6, "lon": 147 },
    { "country": "Paraguay", "alpha2": "PY", "alpha3": "PRY", "numeric": 600, "lat": -23, "lon": -58 },
    { "country": "Peru", "alpha2": "PE", "alpha3": "PER", "numeric": 604, "lat": -10, "lon": -76 },
    { "country": "Philippines", "alpha2": "PH", "alpha3": "PHL", "numeric": 608, "lat": 13, "lon": 122 },
    { "country": "Pitcairn", "alpha2": "PN", "alpha3": "PCN", "numeric": 612, "lat": -24.7, "lon": -127.4 },
    { "country": "Poland", "alpha2": "PL", "alpha3": "POL", "numeric": 616, "lat": 52, "lon": 20 },
    { "country": "Portugal", "alpha2": "PT", "alpha3": "PRT", "numeric": 620, "lat": 39.5, "lon": -8 },
    { "country": "Puerto Rico", "alpha2": "PR", "alpha3": "PRI", "numeric": 630, "lat": 18.25, "lon": -66.5 },
    { "country": "Qatar", "alpha2": "QA", "alpha3": "QAT", "numeric": 634, "lat": 25.5, "lon": 51.25 },
    { "country": "Réunion", "alpha2": "RE", "alpha3": "REU", "numeric": 638, "lat": -21.1, "lon": 55.6 },
    { "country": "Romania", "alpha2": "RO", "alpha3": "ROU", "numeric": 642, "lat": 46, "lon": 25 },
    { "country": "Russian Federation", "alpha2": "RU", "alpha3": "RUS", "numeric": 643, "lat": 60, "lon": 100 },
    { "country": "Rwanda", "alpha2": "RW", "alpha3": "RWA", "numeric": 646, "lat": -2, "lon": 30 },
    { "country": "Saint Helena, Ascension and Tristan da Cunha", "alpha2": "SH", "alpha3": "SHN", "numeric": 654, "lat": -15.9333, "lon": -5.7 },
    { "country": "Saint Kitts and Nevis", "alpha2": "KN", "alpha3": "KNA", "numeric": 659, "lat": 17.3333, "lon": -62.75 },
    { "country": "Saint Lucia", "alpha2": "LC", "alpha3": "LCA", "numeric": 662, "lat": 13.8833, "lon": -61.1333 },
    { "country": "Saint Pierre and Miquelon", "alpha2": "PM", "alpha3": "SPM", "numeric": 666, "lat": 46.8333, "lon": -56.3333 },
    { "country": "Saint Vincent and the Grenadines", "alpha2": "VC", "alpha3": "VCT", "numeric": 670, "lat": 13.25, "lon": -61.2 },
    { "country": "Samoa", "alpha2": "WS", "alpha3": "WSM", "numeric": 882, "lat": -13.5833, "lon": -172.3333 },
    { "country": "San Marino", "alpha2": "SM", "alpha3": "SMR", "numeric": 674, "lat": 43.7667, "lon": 12.4167 },
    { "country": "Sao Tome and Principe", "alpha2": "ST", "alpha3": "STP", "numeric": 678, "lat": 1, "lon": 7 },
    { "country": "Saudi Arabia", "alpha2": "SA", "alpha3": "SAU", "numeric": 682, "lat": 25, "lon": 45 },
    { "country": "Senegal", "alpha2": "SN", "alpha3": "SEN", "numeric": 686, "lat": 14, "lon": -14 },
    { "country": "Serbia", "alpha2": "RS", "alpha3": "SRB", "numeric": 688, "lat": 44, "lon": 21 },
    { "country": "Seychelles", "alpha2": "SC", "alpha3": "SYC", "numeric": 690, "lat": -4.5833, "lon": 55.6667 },
    { "country": "Sierra Leone", "alpha2": "SL", "alpha3": "SLE", "numeric": 694, "lat": 8.5, "lon": -11.5 },
    { "country": "Singapore", "alpha2": "SG", "alpha3": "SGP", "numeric": 702, "lat": 1.3667, "lon": 103.8 },
    { "country": "Slovakia", "alpha2": "SK", "alpha3": "SVK", "numeric": 703, "lat": 48.6667, "lon": 19.5 },
    { "country": "Slovenia", "alpha2": "SI", "alpha3": "SVN", "numeric": 705, "lat": 46, "lon": 15 },
    { "country": "Solomon Islands", "alpha2": "SB", "alpha3": "SLB", "numeric": 90, "lat": -8, "lon": 159 },
    { "country": "Somalia", "alpha2": "SO", "alpha3": "SOM", "numeric": 706, "lat": 10, "lon": 49 },
    { "country": "South Africa", "alpha2": "ZA", "alpha3": "ZAF", "numeric": 710, "lat": -29, "lon": 24 },
    { "country": "South Georgia and the South Sandwich Islands", "alpha2": "GS", "alpha3": "SGS", "numeric": 239, "lat": -54.5, "lon": -37 },
    { "country": "Spain", "alpha2": "ES", "alpha3": "ESP", "numeric": 724, "lat": 40, "lon": -4 },
    { "country": "Sri Lanka", "alpha2": "LK", "alpha3": "LKA", "numeric": 144, "lat": 7, "lon": 81 },
    { "country": "Sudan", "alpha2": "SD", "alpha3": "SDN", "numeric": 736, "lat": 15, "lon": 30 },
    { "country": "Suricountry", "alpha2": "SR", "alpha3": "SUR", "numeric": 740, "lat": 4, "lon": -56 },
    { "country": "Svalbard and Jan Mayen", "alpha2": "SJ", "alpha3": "SJM", "numeric": 744, "lat": 78, "lon": 20 },
    { "country": "Swaziland", "alpha2": "SZ", "alpha3": "SWZ", "numeric": 748, "lat": -26.5, "lon": 31.5 },
    { "country": "Sweden", "alpha2": "SE", "alpha3": "SWE", "numeric": 752, "lat": 62, "lon": 15 },
    { "country": "Switzerland", "alpha2": "CH", "alpha3": "CHE", "numeric": 756, "lat": 47, "lon": 8 },
    { "country": "Syrian Arab Republic", "alpha2": "SY", "alpha3": "SYR", "numeric": 760, "lat": 35, "lon": 38 },
    { "country": "Taiwan, Province of China", "alpha2": "TW", "alpha3": "TWN", "numeric": 158, "lat": 23.5, "lon": 121 },
    { "country": "Tajikistan", "alpha2": "TJ", "alpha3": "TJK", "numeric": 762, "lat": 39, "lon": 71 },
    { "country": "Tanzania, United Republic of", "alpha2": "TZ", "alpha3": "TZA", "numeric": 834, "lat": -6, "lon": 35 },
    { "country": "Thailand", "alpha2": "TH", "alpha3": "THA", "numeric": 764, "lat": 15, "lon": 100 },
    { "country": "Timor-Leste", "alpha2": "TL", "alpha3": "TLS", "numeric": 626, "lat": -8.55, "lon": 125.5167 },
    { "country": "Togo", "alpha2": "TG", "alpha3": "TGO", "numeric": 768, "lat": 8, "lon": 1.1667 },
    { "country": "Tokelau", "alpha2": "TK", "alpha3": "TKL", "numeric": 772, "lat": -9, "lon": -172 },
    { "country": "Tonga", "alpha2": "TO", "alpha3": "TON", "numeric": 776, "lat": -20, "lon": -175 },
    { "country": "Trinidad and Tobago", "alpha2": "TT", "alpha3": "TTO", "numeric": 780, "lat": 11, "lon": -61 },
    { "country": "Tunisia", "alpha2": "TN", "alpha3": "TUN", "numeric": 788, "lat": 34, "lon": 9 },
    { "country": "Turkey", "alpha2": "TR", "alpha3": "TUR", "numeric": 792, "lat": 39, "lon": 35 },
    { "country": "Turkmenistan", "alpha2": "TM", "alpha3": "TKM", "numeric": 795, "lat": 40, "lon": 60 },
    { "country": "Turks and Caicos Islands", "alpha2": "TC", "alpha3": "TCA", "numeric": 796, "lat": 21.75, "lon": -71.5833 },
    { "country": "Tuvalu", "alpha2": "TV", "alpha3": "TUV", "numeric": 798, "lat": -8, "lon": 178 },
    { "country": "Uganda", "alpha2": "UG", "alpha3": "UGA", "numeric": 800, "lat": 1, "lon": 32 },
    { "country": "Ukraine", "alpha2": "UA", "alpha3": "UKR", "numeric": 804, "lat": 49, "lon": 32 },
    { "country": "United Arab Emirates", "alpha2": "AE", "alpha3": "ARE", "numeric": 784, "lat": 24, "lon": 54 },
    { "country": "United Kingdom", "alpha2": "GB", "alpha3": "GBR", "numeric": 826, "lat": 54, "lon": -2 },
    { "country": "United States", "alpha2": "US", "alpha3": "USA", "numeric": 840, "lat": 38, "lon": -97 },
    { "country": "United States Minor Outlying Islands", "alpha2": "UM", "alpha3": "UMI", "numeric": 581, "lat": 19.2833, "lon": 166.6 },
    { "country": "Uruguay", "alpha2": "UY", "alpha3": "URY", "numeric": 858, "lat": -33, "lon": -56 },
    { "country": "Uzbekistan", "alpha2": "UZ", "alpha3": "UZB", "numeric": 860, "lat": 41, "lon": 64 },
    { "country": "Vanuatu", "alpha2": "VU", "alpha3": "VUT", "numeric": 548, "lat": -16, "lon": 167 },
    { "country": "Venezuela, Bolivarian Republic of", "alpha2": "VE", "alpha3": "VEN", "numeric": 862, "lat": 8, "lon": -66 },
    { "country": "Viet Nam", "alpha2": "VN", "alpha3": "VNM", "numeric": 704, "lat": 16, "lon": 106 },
    { "country": "Virgin Islands, British", "alpha2": "VG", "alpha3": "VGB", "numeric": 92, "lat": 18.5, "lon": -64.5 },
    { "country": "Virgin Islands, U.S.", "alpha2": "VI", "alpha3": "VIR", "numeric": 850, "lat": 18.3333, "lon": -64.8333 },
    { "country": "Wallis and Futuna", "alpha2": "WF", "alpha3": "WLF", "numeric": 876, "lat": -13.3, "lon": -176.2 },
    { "country": "Western Sahara", "alpha2": "EH", "alpha3": "ESH", "numeric": 732, "lat": 24.5, "lon": -13 },
    { "country": "Yemen", "alpha2": "YE", "alpha3": "YEM", "numeric": 887, "lat": 15, "lon": 48 },
    { "country": "Zambia", "alpha2": "ZM", "alpha3": "ZMB", "numeric": 894, "lat": -15, "lon": 30 },
    { "country": "Zimbabwe", "alpha2": "ZW", "alpha3": "ZWE", "numeric": 716, "lat": -20, "lon": 30 }

];



let inp = document.getElementById("loc");

let currentFocus = 0;
let filteredata = [];
let selectedLoc = [];

// Using keyup eventHandler to call the function everytime any key from keyboard is clicked.
//Using keyup insted keydown and keypress because it updates the values and run javascript simultanously
inp.addEventListener("keyup", (event) => {
    if (event.target.value.length === 0) {
        document.getElementById("list").style.display = 'none';
        locationList();
        inp.style.borderBottomLeftRadius = "25px";
        inp.style.borderBottomRightRadius = "25px";
        currentFocus = 0;
    } else {

        document.getElementById("list").style.display = 'block';
        // console.log("Insidee ELSE");
        filteredata = arr.filter((item, index) => {
            return (item.country.substr(0, event.target.value.length).toLocaleLowerCase() === event.target.value.toLocaleLowerCase());
        });

        if (filteredata.length > 0) {
            locationList(filteredata);
            inp.style.borderBottomLeftRadius = "0";
            inp.style.borderBottomRightRadius = "0";
            for(let i=1; i <= filteredata.length; i++){
                document.getElementById(`c${i}`).style.background = "#000000e0";
            }
            // document.getElementById("list").style.backgroundColor = "#000000e0"
        } else {
            locationList();
            inp.style.borderBottomLeftRadius = "25px";
            inp.style.borderBottomRightRadius = "25px";
        }

    }

    if (event.key === "ArrowDown" && currentFocus <= filteredata.length) {
        if (currentFocus < filteredata.length) {
            ++currentFocus;
            const loc = document.getElementById(`c${currentFocus}`).innerHTML;

            selectedLoc = filteredata.filter((item) => {
                return loc === item.country;
            });
        }
        if (currentFocus <= filteredata.length) {
            document.getElementById(`c${currentFocus}`).style.background = "#707070";
            document.getElementById(`c${currentFocus}`).style.color = "#000";
        }

    } else if (event.key === "ArrowUp" && currentFocus >= 1) {
        if (currentFocus > 1) {
            --currentFocus;
            const loc = document.getElementById(`c${currentFocus}`).innerHTML;

            console.log(loc);
            selectedLoc = filteredata.filter((item) => {
                return loc === item.country;
            });
        }
        if (currentFocus >= 1) {
            document.getElementById(`c${currentFocus}`).style.background = "#908e94e3";
            document.getElementById(`c${currentFocus}`).style.color = "#000";
        }

    } else if ((event.key >= "A" && event.key <= 'Z') || (event.key >= "a" && event.key <= 'z')) {
        currentFocus = 0;
    }

    if (event.key === "Enter") {

        if (selectedLoc.length === 0 || event.target.value.length === 0) {
            const cond = filteredata.find((item) => {
                return event.target.value.toLowerCase() === item.country.toLowerCase();
            });

            if (!cond) {
                alert("Please enter valid country name! or select from the list");
            } else {
                selectedLoc = filteredata.filter((item) => {
                    return cond.country.toLowerCase() === item.country.toLowerCase();
                });

                console.log("ELSE");
                console.log(selectedLoc)
                display(selectedLoc[0]);
                document.getElementById("list").style.display = 'none';
                inp.style.borderBottomLeftRadius = "25px";
                inp.style.borderBottomRightRadius = "25px";
            }
        } else {
            console.log("ENTER else");

            event.target.value = selectedLoc[0].country;

            document.getElementById("list").style.display = 'none';
            inp.style.borderBottomLeftRadius = "25px";
            inp.style.borderBottomRightRadius = "25px";
            currentFocus = 0;

            display(selectedLoc[0]);
            selectedLoc = [];
        }


    }
    // console.log(event.target.value);
});

inp.addEventListener('blur', (event) => {
    document.getElementById("list").style.display = 'none';
    inp.style.borderBottomLeftRadius = "25px";
    inp.style.borderBottomRightRadius = "25px";
});
inp.addEventListener('focus', (event) => {
    document.getElementById("list").style.display = 'block';
    let listNodes = document.getElementById("list").childNodes;
    
    if (listNodes.length > 0) {
        inp.style.borderBottomLeftRadius = "0";
        inp.style.borderBottomRightRadius = "0";
    }
});

// This function is use to build the list of the countries. 
function locationList(arr) {
    let listOfLoc = "";
    let locationArray = [];
    arguments.length == 1 ? locationArray = arr : locationArray;
    for (let i = 1; i <= locationArray.length; i++) {
        //here in array used i-1 because we are using the index from 1 and series from 1 is used to build ids of the list together
        listOfLoc += `<li id="c${i}">${arr[i - 1].country}</li>`
    }
    document.getElementById("list").innerHTML = listOfLoc;
    // console.log(listOfLoc);
}





// Getting weather details 
function display(data) {
    const countryName = document.getElementById("countryName");
    const temp = document.getElementById("temp");
    const cloud = document.getElementById("cloud");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    let responseData = {};
    if (data) {

        const xhr = new XMLHttpRequest();

        xhr.onload = function (req, res) {
            responseData = JSON.parse(this.response);
            console.log(responseData)
            countryName.innerHTML = `Weather in ${responseData.name}`;
            temp.innerHTML = `${(responseData.main.temp - 273).toFixed(3)}<sup>o</sup>C`;
            cloud.innerHTML = `<img src="./images/cloud.png" alt="cloud">${responseData.weather[0].description}`;
            humidity.innerHTML = `Humidity: ${responseData.main.humidity.toFixed(3)}%`;
            windSpeed.innerHTML = `Wind speed: ${((responseData.wind.speed * 18)/5).toFixed(3)}km/h`;
        }
        xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=145e37af6c5af4a0f26e98d08627d274`, true);
        xhr.send();
    }else {
        const xhr = new XMLHttpRequest();

        xhr.onload = function (req, res) {
            responseData = JSON.parse(this.response);
            console.log(responseData)
            countryName.innerHTML = `Weather in ${responseData.name}`;
            temp.innerHTML = `${(responseData.main.temp - 273).toFixed(3)}<sup>o</sup>C`;
            cloud.innerHTML = `<img src="./images/cloud.png" alt="cloud">${responseData.weather[0].description}`;
            humidity.innerHTML = `Humidity: ${responseData.main.humidity.toFixed(3)}%`;
            windSpeed.innerHTML = `Wind speed: ${((responseData.wind.speed * 18)/5).toFixed(3)}km/h`;
        }
        xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${20}&lon=${77}&appid=145e37af6c5af4a0f26e98d08627d274`, true);
        xhr.send();
    }
}


// 145e37af6c5af4a0f26e98d08627d274
// https://api.openweathermap.org/data/2.5/weather?lat={20.5937}&lon={78.8718}&appid={145e37af6c5af4a0f26e98d08627d274}


//continuous arrow key press not work
// on mouse cick no select
