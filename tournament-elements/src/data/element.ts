import type { Element } from '../types/element';
 
// Stores the information for all available elements.
export const elements: Element[] = [
    {
        id: 1,
        name: 'Fire',
        icon: 'fire-icon.png',
        color: '#F28C45',
        combatStyle: 'Aggression & Destruction',
        description:
            'Unleash devastating flames and explosive attacks. Fire rewards aggressive fighters who overwhelm their opponents with relentless offensive power.',
        characterImage: 'fire-character.png',
        abilities: [
            {
                id: 1,
                name: 'Flame Strike',
                description: 'Launch a powerful burst of fire towards an opponent.'
            },
            {
                id: 2,
                name: 'Inferno',
                description: 'Engulf the surrounding area in destructive flames.'
            },
            {
                id: 3,
                name: 'Blazing Dash',
                description: 'Dash forward while leaving a trail of fire.'
            }
        ]
    },
    {
        id: 2,
        name: 'Water',
        icon: 'water-icon.png',
        color: '#4CA9EF',
        combatStyle: 'Adaptability & Control',
        description:
            'Command powerful currents and flowing attacks. Water allows fighters to adapt to their opponents and control the battlefield.',
        characterImage: 'water-character.png',
        abilities: [
            {
                id: 1,
                name: 'Tidal Wave',
                description: 'Summon a powerful wave that pushes enemies backwards.'
            },
            {
                id: 2,
                name: 'Aqua Shield',
                description: 'Create a protective barrier of flowing water.'
            },
            {
                id: 3,
                name: 'Water Whip',
                description: 'Strike enemies using a concentrated stream of water.'
            }
        ]
    },
    {
        id: 3,
        name: 'Earth',
        icon: 'earth-icon.png',
        color: '#9AB66C',
        combatStyle: 'Strength & Defence',
        description:
            'Harness the strength of stone and nature. Earth fighters withstand powerful attacks and dominate opponents through resilience.',
        characterImage: 'earth-character.png',
        abilities: [
            {
                id: 1,
                name: 'Seismic Slam',
                description: 'Strike the ground to release a powerful shockwave.'
            },
            {
                id: 2,
                name: 'Stone Barrier',
                description: 'Raise a defensive wall of solid rock.'
            },
            {
                id: 3,
                name: 'Rock Barrage',
                description: 'Launch fragments of stone towards enemies.'
            }
        ]
    },
    {
        id: 4,
        name: 'Air',
        icon: 'air-icon.png',
        color: '#C5DDE3',
        combatStyle: 'Speed & Agility',
        description:
            'Master the movement of the wind. Air fighters rely on agility, rapid attacks and unpredictable movements to outmanoeuvre opponents.',
        characterImage: 'air-character.png',
        abilities: [
            {
                id: 1,
                name: 'Wind Blade',
                description: 'Release a concentrated blade of air.'
            },
            {
                id: 2,
                name: 'Cyclone',
                description: 'Summon a swirling vortex that disrupts enemies.'
            },
            {
                id: 3,
                name: 'Gale Step',
                description: 'Quickly evade attacks using a burst of wind.'
            }
        ]
    },
    {
        id: 5,
        name: 'Lightning',
        icon: 'lightning-icon.png',
        color: '#B49AFA',
        combatStyle: 'Speed & Burst Damage',
        description:
            'Channel devastating electrical energy. Lightning fighters specialise in rapid strikes and powerful bursts of damage.',
        characterImage: 'lightning-character.png',
        abilities: [
            {
                id: 1,
                name: 'Thunderbolt',
                description: 'Strike an opponent with concentrated lightning.'
            },
            {
                id: 2,
                name: 'Chain Lightning',
                description: 'Release electrical energy that jumps between enemies.'
            },
            {
                id: 3,
                name: 'Flash Step',
                description: 'Move rapidly across the battlefield.'
            }
        ]
    },
    {
        id: 6,
        name: 'Ice',
        icon: 'ice-icon.png',
        color: '#8DDBF4',
        combatStyle: 'Precision & Control',
        description:
            'Manipulate freezing temperatures and crystalline energy. Ice fighters restrict enemy movement and create opportunities for precise attacks.',
        characterImage: 'ice-character.png',
        abilities: [
            {
                id: 1,
                name: 'Frost Lance',
                description: 'Launch a sharp crystalline projectile.'
            },
            {
                id: 2,
                name: 'Frozen Prison',
                description: 'Temporarily restrict an enemy with surrounding ice.'
            },
            {
                id: 3,
                name: 'Glacial Shield',
                description: 'Form a defensive shield of hardened ice.'
            }
        ]
    },
    {
        id: 7,
        name: 'Light',
        icon: 'light-icon.png',
        color: '#F4D58A',
        combatStyle: 'Protection & Support',
        description:
            'Harness radiant celestial energy. Light fighters balance offensive abilities with protection, recovery and support.',
        characterImage: 'light-character.png',
        abilities: [
            {
                id: 1,
                name: 'Radiant Beam',
                description: 'Release a concentrated beam of celestial energy.'
            },
            {
                id: 2,
                name: 'Divine Barrier',
                description: 'Create a protective shield of radiant light.'
            },
            {
                id: 3,
                name: 'Celestial Renewal',
                description: 'Restore a portion of lost health.'
            }
        ]
    },
    {
        id: 8,
        name: 'Void',
        icon: 'void-icon.png',
        color: '#B48ADB',
        combatStyle: 'Disruption & Deception',
        description:
            'Manipulate mysterious energy from beyond the elemental realms. Void fighters disrupt opponents through unpredictable attacks and deception.',
        characterImage: 'void-character.png',
        abilities: [
            {
                id: 1,
                name: 'Void Rift',
                description: 'Open a rift that releases destructive energy.'
            },
            {
                id: 2,
                name: 'Shadow Step',
                description: 'Disappear briefly and reposition across the arena.'
            },
            {
                id: 3,
                name: 'Gravity Well',
                description: 'Pull nearby enemies towards a concentrated point.'
            }
        ]
    }
];