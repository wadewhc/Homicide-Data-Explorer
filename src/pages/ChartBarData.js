
const dataByYear = {
	2012: [
		{ category: 'Handguns', count: 6012 },
		{ category: 'Firearms', count: 1663 },
		{ category: 'Other weapons', count: 1609 },
		{ category: 'Knives', count: 1541 },
		{ category: 'Personal weapons', count: 698 },
		{ category: 'Blunt objects', count: 502 },
		{ category: 'Shotgun', count: 278 },
		{ category: 'Rifles', count: 262 },
		{ category: 'Other guns', count: 107 },
		{ category: 'Asphyxiation', count: 100 },
		{ category: 'Strangulation', count: 93 },
		{ category: 'Fire', count: 67 },
		{ category: 'Narcotics', count: 37 },
		{ category: 'Poison', count: 12 },
		{ category: 'Drowning', count: 11 },
		{ category: 'Explosives', count: 6 },
	],
	2013: [
		{ category: 'Handguns', count: 5488 },
		{ category: 'Firearms', count: 1815 },
		{ category: 'Other weapons', count: 1604 },
		{ category: 'Knives', count: 1434 },
		{ category: 'Personal weapons', count: 701 },
		{ category: 'Blunt objects', count: 417 },
		{ category: 'Shotgun', count: 275 },
		{ category: 'Rifles', count: 239},
		{ category: 'Other guns', count: 116 },
		{ category: 'Asphyxiation', count: 88 },
		{ category: 'Strangulation', count: 82 },
		{ category: 'Fire', count: 76 },
		{ category: 'Narcotics', count: 55 },
		{ category: 'Poison', count: 13 },
		{ category: 'Drowning', count: 3 },
		{ category: 'Explosives', count: 2 },
	],
	2014: [
		{ category: 'Handguns', count: 5345 },
		{ category: 'Firearms', count: 1900 },
		{ category: 'Knives', count: 1545 },
		{ category: 'Other weapons', count: 1502 },
		{ category: 'Personal weapons', count: 666 },
		{ category: 'Blunt objects', count: 431 },
		{ category: 'Shotgun', count: 239 },
		{ category: 'Rifles', count: 235},
		{ category: 'Asphyxiation', count: 93 },
		{ category: 'Other guns', count: 88 },
		{ category: 'Strangulation', count: 84 },
		{ category: 'Narcotics', count: 70 },
		{ category: 'Fire', count: 55 },
		{ category: 'Drowning', count: 12 },
		{ category: 'Poison', count: 9 },
		{ category: 'Explosives', count: 6 },
	],
	2015: [
		{ category: 'Handguns', count: 6175 },
		{ category: 'Firearms', count: 2315 },
		{ category: 'Other weapons', count: 1714 },
		{ category: 'Knives', count: 1526 },
		{ category: 'Personal weapons', count: 647 },
		{ category: 'Blunt objects', count: 436 },
		{ category: 'Shotgun', count: 247 },
		{ category: 'Rifles', count: 216},
		{ category: 'Other guns', count: 151 },
		{ category: 'Asphyxiation', count: 105 },
		{ category: 'Strangulation', count: 97 },
		{ category: 'Narcotics', count: 69 },
		{ category: 'Fire', count: 63 },
		{ category: 'Drowning', count: 12 },
		{ category: 'Poison', count: 8 },
		{ category: 'Explosives', count: 1 },
	],
	2016: [
		{ category: 'Handguns', count: 6767 },
		{ category: 'Firearms', count: 2892 },
		{ category: 'Other weapons', count: 1848 },
		{ category: 'Knives', count: 1559 },
		{ category: 'Personal weapons', count: 663 },
		{ category: 'Blunt objects', count: 464 },
		{ category: 'Rifles', count: 300},
		{ category: 'Shotgun', count: 247 },
		{ category: 'Other guns', count: 172 },
		{ category: 'Narcotics', count: 118 },
		{ category: 'Strangulation', count: 97 },
		{ category: 'Asphyxiation', count: 92 },
		{ category: 'Fire', count: 78 },
		{ category: 'Poison', count: 12 },
		{ category: 'Drowning', count: 9 },
		{ category: 'Explosives', count: 1 },
	],
	2017: [
		{ category: 'Handguns', count: 7121 },
		{ category: 'Firearms', count: 3140 },
		{ category: 'Knives', count: 1612 },
		{ category: 'Other weapons', count: 973 },
		{ category: 'Personal weapons', count: 717 },
		{ category: 'Blunt objects', count: 478 },
		{ category: 'Rifles', count: 392},
		{ category: 'Shotgun', count: 264 },
		{ category: 'Other guns', count: 180 },
		{ category: 'Narcotics', count: 113 },
		{ category: 'Asphyxiation', count: 112 },
		{ category: 'Fire', count: 93 },
		{ category: 'Strangulation', count: 90 },
		{ category: 'Poison', count: 15 },
		{ category: 'Drowning', count: 8 },
		{ category: 'Explosives', count: 0 },
	],
	2018: [
		{ category: 'Handguns', count: 6744 },
		{ category: 'Firearms', count: 3106 },
		{ category: 'Knives', count: 1563 },
		{ category: 'Other weapons', count: 932 },
		{ category: 'Personal weapons', count: 719 },
		{ category: 'Blunt objects', count: 457 },
		{ category: 'Rifles', count: 304},
		{ category: 'Shotgun', count: 240 },
		{ category: 'Other guns', count: 163 },
		{ category: 'Narcotics', count: 106 },
		{ category: 'Asphyxiation', count: 93 },
		{ category: 'Fire', count: 80 },
		{ category: 'Strangulation', count: 75 },
		{ category: 'Drowning', count: 9 },
		{ category: 'Poison', count: 6 },
		{ category: 'Explosives', count: 4 },
	],
	2019: [
		{ category: 'Handguns', count: 6665 },
		{ category: 'Firearms', count: 3417 },
		{ category: 'Knives', count: 1555 },
		{ category: 'Other weapons', count: 927 },
		{ category: 'Personal weapons', count: 656 },
		{ category: 'Blunt objects', count: 420 },
		{ category: 'Rifles', count: 377},
		{ category: 'Shotgun', count: 215 },
		{ category: 'Narcotics', count: 117 },
		{ category: 'Asphyxiation', count: 95 },
		{ category: 'Fire', count: 87 },
		{ category: 'Strangulation', count: 67 },
		{ category: 'Other guns', count: 51 },
		{ category: 'Poison', count: 17 },
		{ category: 'Drowning', count: 7 },
		{ category: 'Explosives', count: 2 },
	],
	2020: [
		{ category: 'Handguns', count: 8633 },
		{ category: 'Firearms', count: 5048 },
		{ category: 'Knives', count: 1818 },
		{ category: 'Other weapons', count: 1054 },
		{ category: 'Personal weapons', count: 725 },
		{ category: 'Rifles', count: 493},
		{ category: 'Blunt objects', count: 421 },
		{ category: 'Shotgun', count: 214 },
		{ category: 'Narcotics', count: 168 },
		{ category: 'Fire', count: 114 },
		{ category: 'Other guns', count: 113 },
		{ category: 'Asphyxiation', count: 78 },
		{ category: 'Strangulation', count: 58 },
		{ category: 'Poison', count: 17 },
		{ category: 'Drowning', count: 5 },
		{ category: 'Explosives', count: 3 },
	],
	2021: [
		{ category: 'Handguns', count: 6556 },
		{ category: 'Firearms', count: 5345 },
		{ category: 'Other weapons', count: 1223 },
		{ category: 'Knives', count: 1202 },
		{ category: 'Personal weapons', count: 555 },
		{ category: 'Rifles', count: 462},
		{ category: 'Other guns', count: 296 },
		{ category: 'Blunt objects', count: 280 },
		{ category: 'Shotgun', count: 170 },
		{ category: 'Narcotics', count: 160 },
		{ category: 'Fire', count: 88 },
		{ category: 'Asphyxiation', count: 63 },
		{ category: 'Poison', count: 9 },
		{ category: 'Strangulation', count: 3 },
		{ category: 'Explosives', count: 3 },
		{ category: 'Drowning', count: 0 },
	],
	2022: [
		{ category: 'Handguns', count: 7937 },
		{ category: 'Firearms', count: 5706 },
		{ category: 'Knives', count: 1630 },
		{ category: 'Other weapons', count: 1327 },
		{ category: 'Personal weapons', count: 665 },
		{ category: 'Rifles', count: 542},
		{ category: 'Other guns', count: 422 },
		{ category: 'Blunt objects', count: 367 },
		{ category: 'Narcotics', count: 187 },
		{ category: 'Shotgun', count: 186 },
		{ category: 'Asphyxiation', count: 98 },
		{ category: 'Fire', count: 94 },
		{ category: 'Strangulation', count: 20 },
		{ category: 'Poison', count: 15 },
		{ category: 'Drowning', count: 3 },
		{ category: 'Explosives', count: 1 },
	],
};

export default dataByYear;
