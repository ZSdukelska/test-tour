var APP_DATA = {
  "scenes": [
    {
      "id": "0-uebna-2-stupn",
      "name": "učebna 2 stupně",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6655859799013166,
          "pitch": 0.20291921981710814,
          "rotation": 0,
          "target": "2-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-uebna-prvnho-stupn",
      "name": "učebna prvního stupně",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.683318025302624,
          "pitch": -0.12961441454032396,
          "rotation": 0,
          "target": "2-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-chodba",
      "name": "chodba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.9881359861161965,
        "pitch": 0.011921475781926816,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6861965252227549,
          "pitch": -0.16678426450114436,
          "rotation": 5.497787143782138,
          "target": "0-uebna-2-stupn"
        },
        {
          "yaw": -2.6840461981122417,
          "pitch": 0.14060636856145692,
          "rotation": 7.853981633974483,
          "target": "3-kabinet-it"
        },
        {
          "yaw": 0.2237757028714924,
          "pitch": 0.060981085103925636,
          "rotation": 1.5707963267948966,
          "target": "1-uebna-prvnho-stupn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kabinet-it",
      "name": "kabinet it",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8928910287989105,
          "pitch": 0.11738818586208843,
          "rotation": 0,
          "target": "1-uebna-prvnho-stupn"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "test tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
