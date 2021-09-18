[
    {
        "id": "aa3a12acc02bb823",
        "type": "tab",
        "label": "Flow 3",
        "disabled": false,
        "info": ""
    },
    {
        "id": "f78a0212134a9db1",
        "type": "ui_numeric",
        "z": "aa3a12acc02bb823",
        "name": "",
        "label": "numeric",
        "tooltip": "",
        "group": "5abeb8689d44b5ed",
        "order": 2,
        "width": 4,
        "height": 1,
        "wrap": false,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "step": 1,
        "x": 170,
        "y": 160,
        "wires": [
            [
                "7ff6e697bed4b62e"
            ]
        ]
    },
    {
        "id": "7ff6e697bed4b62e",
        "type": "ui_chart",
        "z": "aa3a12acc02bb823",
        "name": "",
        "group": "5abeb8689d44b5ed",
        "order": 1,
        "width": 0,
        "height": 0,
        "label": "GRID VOLTAGE",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "10",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#5c88c1",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 410,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "00402a7bd8042874",
        "type": "ui_switch",
        "z": "aa3a12acc02bb823",
        "name": "",
        "label": "switch",
        "tooltip": "",
        "group": "dcfdfada66cb4a0b",
        "order": 1,
        "width": 8,
        "height": 2,
        "passthru": true,
        "decouple": "false",
        "topic": "topic",
        "topicType": "msg",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "animate": false,
        "x": 150,
        "y": 280,
        "wires": [
            [
                "f97e83fca4e979df"
            ]
        ]
    },
    {
        "id": "f97e83fca4e979df",
        "type": "ui_colour_picker",
        "z": "aa3a12acc02bb823",
        "name": "",
        "label": "",
        "group": "dcfdfada66cb4a0b",
        "format": "hex",
        "outformat": "string",
        "showSwatch": true,
        "showPicker": false,
        "showValue": false,
        "showHue": true,
        "showAlpha": false,
        "showLightness": false,
        "square": "true",
        "dynOutput": "false",
        "order": 3,
        "width": 8,
        "height": 2,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "x": 430,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "55f92e4938b5412f",
        "type": "ui_dropdown",
        "z": "aa3a12acc02bb823",
        "name": "",
        "label": "P",
        "tooltip": "",
        "place": "Select option",
        "group": "74b4c5ec9531db81",
        "order": 1,
        "width": 9,
        "height": 5,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "",
                "value": "",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "topic",
        "topicType": "msg",
        "x": 350,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "aec4c1dbcb3425fb",
        "type": "ui_spacer",
        "z": "aa3a12acc02bb823",
        "name": "spacer",
        "group": "5abeb8689d44b5ed",
        "order": 3,
        "width": 4,
        "height": 1
    },
    {
        "id": "f848494d5be5665f",
        "type": "ui_spacer",
        "z": "aa3a12acc02bb823",
        "name": "spacer",
        "group": "dcfdfada66cb4a0b",
        "order": 2,
        "width": 8,
        "height": 1
    },
    {
        "id": "5abeb8689d44b5ed",
        "type": "ui_group",
        "name": "PV",
        "tab": "3b4c934ca74f3026",
        "order": 1,
        "disp": true,
        "width": 8,
        "collapse": false
    },
    {
        "id": "dcfdfada66cb4a0b",
        "type": "ui_group",
        "name": "INVERTER",
        "tab": "3b4c934ca74f3026",
        "order": 2,
        "disp": true,
        "width": "8",
        "collapse": false
    },
    {
        "id": "74b4c5ec9531db81",
        "type": "ui_group",
        "name": "GRID",
        "tab": "3b4c934ca74f3026",
        "order": 3,
        "disp": true,
        "width": 9,
        "collapse": false
    },
    {
        "id": "3b4c934ca74f3026",
        "type": "ui_tab",
        "name": "SOLAR",
        "icon": "wi-wu-sunny",
        "order": 3,
        "disabled": false,
        "hidden": false
    }
]
