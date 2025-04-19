// Categories for places
const categories = {
    'Museums & Galleries': ['museum', 'art_gallery'],
    'Historical Sites': ['mosque', 'tourist_attraction', 'place_of_worship'],
    'Shopping': ['store', 'book_store', 'home_goods_store'],
    'Food & Drink': ['restaurant', 'cafe', 'food'],
    'Entertainment': ['night_club', 'bar'],
    'Spa': ['spa'],
    'Other': []
};
let data = {
    "link": "https://www.google.com/maps/@41.01661,29.0073459,14.39z/data=!4m7!1m3!11m2!2saEzefuruT36E_kFsODK07g!3e3!11m2!2saEzefuruT36E_kFsODK07g!3e3?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D",
    "waypoints": [
      {
        "latitude": 41.016732499999996,
        "longitude": 28.972152599999998,
        "name": "Yeni Mosque",
        "description": "Surprisingly, this mosque is widely regarded as being bluer than the blue mosque.",
        "place_id": "ChIJjaSroOu5yhQRnCP86smBM2U",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJjaSroOu5yhQRnCP86smBM2U",
        "place_name": "Yeni Mosque",
        "formatted_address": "Rüstem Paşa, Yeni Cami Cd. No:3, 34116 Fatih/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "3",
            "short_name": "3",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Yeni Cami Caddesi",
            "short_name": "Yeni Cami Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Rüstem Paşa",
            "short_name": "Rüstem Paşa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Fatih",
            "short_name": "Fatih",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34116",
            "short_name": "34116",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.fatih.gov.tr/yeni-camii",
        "phone": null,
        "rating": 4.7,
        "rating_count": 11580,
        "price_level": null,
        "categories": [
          "mosque",
          "tourist_attraction",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcK5R69XKomqY8vzVxaJUeyy0qG5RIyAQOrLjAiQzh530BmmH7SvKJ4mh8h3i1KRVJlC0sOb7Q1uz_gUKKPvPZfiHZ3vtxdsez9AabO41XObL9rOMoO3if16_nfj9F2o6Eun41impHTLznPII-TMsl2EDI4JDpA7jhqVTqpXydcE5m1uEL0OFH52XYHTTogRBMNjYr_BPHd8UhEwhXjXJroGm7PNExT736rlrl5q07HmkUIq5FrJliyMEslxduXwRJpmzTiOGG00xcuVBfhKclD6GPRQsHhSfRdp3DwFxGIcG0R5fwgXgGROFJLRHTGwsNYvmmzxFWFQxlm54kTX9WcSiB5EsanRfxooq_IkIvTFDzhagCcOUY0L_S9QG-yGssTvko9HapZG6vDgFyoapgk3qVpwMICjBH7A1HxSbopJ3J2Y1yaLtr7JQrs9coUmp5MjLmD-d3gTsWMSQ1bb4lq16YIcMKnjVrPWeKM6z-BwdZQ4u1gBpdrUQp34aHZIPEUh070xpNbvFdalWl2oQpheKy__rOpqE2iLyRwhGACu-il1co_SakI2_md-5EqZIkKmZFKvil-ilEmBcaPSCdZ5i4aSUKvn2E3U2bwQjfBLEONmkOmpN4TGlIpvdgg21RLuSw&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "yeni_mosque_8de99a1ac5a54bf54a4b65638b536ca4.jpg",
          "width": 2664,
          "height": 1696,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/108928652906839060511\">10versite2023</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0054096,
        "longitude": 28.9768138,
        "name": "The Blue Mosque",
        "description": "Some people think this is more beautiful than Hagia Sofia - same deal applies - beautiful inside, takes five minutes to see, sometimes need to wait due to prayer times, I never fully understand the schedule.",
        "place_id": "ChIJ4fRwZb25yhQRpHwVijb3LeU",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ4fRwZb25yhQRpHwVijb3LeU",
        "place_name": "The Blue Mosque",
        "formatted_address": "Binbirdirek, At Meydanı Cd No:10, 34122 Fatih/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:10",
            "short_name": "No:10",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "At Meydanı Caddesi",
            "short_name": "At Meydanı Cd",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Binbirdirek",
            "short_name": "Binbirdirek",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Fatih",
            "short_name": "Fatih",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34122",
            "short_name": "34122",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": null,
        "phone": null,
        "rating": 4.7,
        "rating_count": 104612,
        "price_level": null,
        "categories": [
          "mosque",
          "tourist_attraction",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKYDyI_Bl_15xbs1AOPIxmFB87PrTHsVS_4VpA4W9pM9MEe2msjZl276RP_AILLLzp_lJSx34Thjw3V75RFRFxZ1l4tV8s2PX8sHlRBBcsQc-hIz3eKFExwwV2ekpsKapek3WTbNJGUrfc6oBsLOrycNn8N2VRDl0FteupNrrH3rCPQzebfVWko13ubqLLHGBr52Hn6sqsTComW-7xUmexvxPdebpEIjaq5UD1KYIVuK1dVSkBn-V3_bxBjttjCGn_ehcYlgW_1HeXzyFDw48kyw4IkO6Z4TZ5dS_Q-l4K3-O9jbaLNEjDgf-DwU3CYf9o0BDARzqK2Uh_GuIc1G-sn5iCSC8GkW2FgiqgFvF_HWW6vHeGrzTINW-svJIutw5YdT0BtBJCDOqxx8i-GKKsxc21QVP0Fjv-H8hq1E0NcMfmN4TS-aJ5tQJEFFwqOdUMSKY07qbuMF3NYTL_z8yTZv6xRavi-u5h6vqlbxqRNqmbC1PW4hQQOdb4tvGlYBh4xC0sTUC4ADCA9wk4r1RR2xX4sBratf6BXtTnfM3yOJJt1SAwTjkewDMpj7A2mN_g8ZPiLCFAoYBDCur9uXW809VlkzcEzSszC6o_IMAKhnKlXUbvCVaN5YBP0nUvu9qCcTA&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "the_blue_mosque_2449ebc486cfedddd1fdc16dbcb3ccc4.jpg",
          "width": 4032,
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/108807650327955658025\">Olajire A Adeleke</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.031684299999995,
        "longitude": 28.980459099999997,
        "name": "Çukurcuma Hamamı",
        "description": "Alternative hamam (turkish ritual bath) - less fancy.",
        "place_id": "ChIJhxZ6Fca3yhQRvNfqa4zXroY",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJhxZ6Fca3yhQRvNfqa4zXroY",
        "place_name": "Çukurcuma Hamamı",
        "formatted_address": "Firuzağa, Çukur Cuma Cd. NO : 43, 34425 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "NO : 43",
            "short_name": "NO : 43",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Çukur Cuma Caddesi",
            "short_name": "Çukur Cuma Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34425",
            "short_name": "34425",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://cukurcumahamami.com/",
        "phone": "0530 933 05 13",
        "rating": 4.8,
        "rating_count": 992,
        "price_level": null,
        "categories": [
          "spa",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 9:00 AM – 10:00 PM",
          "Tuesday: 9:00 AM – 10:00 PM",
          "Wednesday: 9:00 AM – 10:00 PM",
          "Thursday: 9:00 AM – 10:00 PM",
          "Friday: 9:00 AM – 10:00 PM",
          "Saturday: 9:00 AM – 10:00 PM",
          "Sunday: 9:00 AM – 10:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJTBPJlSTT5UrgWwwS_uL6CZ0JDhNIhP30gSBYeBKDGf4sUxZ8NwvR9jcVUlpvVEjDDi1QdeBIDdXuZRtmBX6CGFAKARXlZzjW8Gg6kHxF5FHsPKj-xEONf27OoRPa4lbVeKt1aINltcBEAFvH0p38HskQDHooHTuEu0FbyFvnWBAqsVMW52kgW9DLieS9xxqAe8xk-CQfwXVIKNRwAql1QcRhr9crBnOSO48qqG-J6OLJcL9lm1ATWavzjG1dOTnb40hAPdM4R5EH5lmv9Euk5wr9DaIyJCcStNsSsQ0s4jMFb5ey52D6AuNDLHpuMbAfL_qu-tn0&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "çukurcuma_hamamı_911c1d0a2625f4c19c2954642e783f78.jpg",
          "width": 5616,
          "height": 3744,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/114370372608075080227\">Çukurcuma Hamamı</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0072579,
        "longitude": 28.9791368,
        "name": "Hurrem Sultan Hammam",
        "description": "Alternative hamam (turkish ritual bath) - fancier.",
        "place_id": "ChIJaYWmtb25yhQRtbo2Z_rcXa0",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJaYWmtb25yhQRtbo2Z_rcXa0",
        "place_name": "Hurrem Sultan Hammam",
        "formatted_address": "Cankurtaran, Ayasofya Meydanı No:2, 34122 Fatih/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "2",
            "short_name": "2",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Ayasofya Meydanı",
            "short_name": "Ayasofya Meydanı",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Cankurtaran",
            "short_name": "Cankurtaran",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Fatih",
            "short_name": "Fatih",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34122",
            "short_name": "34122",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.hurremsultanhamami.com/",
        "phone": "(0212) 517 35 35",
        "rating": 4.6,
        "rating_count": 3314,
        "price_level": null,
        "categories": [
          "spa",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 8:00 AM – 10:00 PM",
          "Tuesday: 8:00 AM – 10:00 PM",
          "Wednesday: 8:00 AM – 10:00 PM",
          "Thursday: 8:00 AM – 10:00 PM",
          "Friday: 8:00 AM – 10:00 PM",
          "Saturday: 8:00 AM – 10:00 PM",
          "Sunday: 8:00 AM – 10:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJUbkGkrpSbjmljJ66IJ0QCC_VeAkOd_cQfNa2roQvO-u-4bKsTETtSQ8qABhQ-p4d7z7iwHPiWaqEZeG546kxj4NVCzqSkTEo-j2QoLSlZaCQZ1yhSHMh303vXSVP46vQ-A-iHyPYICa2Snkf5ToXzYIU8HPJd4343D_PkgDi95mCs79MZEt5GOY-T7LLNaxQLpdsy2hJx4Asw3EkRXC_7LzlTx1tpS5aLqxUpvsSxoD6VXu8th_mGv17O4XP6SwKOIVvktQHlW5sSr-VssWasPftxqxLq0VRymbfJINNhsCWaRmxcOn0i40wfCn1kORgW0Z_q5rM&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "hurrem_sultan_hammam_077d12706da0d2fa4a4339faa95ebb8f.jpg",
          "width": 2048,
          "height": 1365,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/107660508396681440167\">Hürrem Sultan Hamamı</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.03604,
        "longitude": 28.981721,
        "name": "İnci Pastanesi",
        "description": "Classic profiterole destination - which in Turkey is something more akin to a chocolate pudding parfait - lots of shops sell it.",
        "place_id": "ChIJhXvtGGG3yhQRuoMr9a3nk70",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJhXvtGGG3yhQRuoMr9a3nk70",
        "place_name": "İnci Pastanesi",
        "formatted_address": "Mahallesi, Şehit Muhtar, Mis Sk. 18/A, 34435 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "Mahallesi",
            "short_name": "Mahallesi",
            "types": [
              "point_of_interest",
              "establishment"
            ]
          },
          {
            "long_name": "18/A",
            "short_name": "18/A",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Mis Sokak",
            "short_name": "Mis Sk.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Şehit Muhtar",
            "short_name": "Şehit Muhtar",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34435",
            "short_name": "34435",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": null,
        "phone": "(0212) 243 24 12",
        "rating": 4.1,
        "rating_count": 5486,
        "price_level": 2,
        "categories": [
          "bakery",
          "store",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 7:00 AM – 11:00 PM",
          "Tuesday: 7:00 AM – 11:00 PM",
          "Wednesday: 7:00 AM – 11:00 PM",
          "Thursday: 7:00 AM – 11:00 PM",
          "Friday: 7:00 AM – 11:00 PM",
          "Saturday: 7:00 AM – 11:00 PM",
          "Sunday: 7:00 AM – 11:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcIvjRYh3T3LLHO3dMmhhqvLRE2H3gsAUrUCVAHCm2Hw-QOQjoLZxXJkqx2wXVBQ3pccsrlhKgxkvV9O92sG_eymza1u7zB0gpJ1lCLSYGu27A-ktH1czD7aAkN_3_8cFuO2fDV_8c527J38PcSIoLeckWXo0az-KsOaH16jDZMrHJaDm3Y6pVltj0F9rYKSlcSK9ImfrieO13kRsSLs_rq6eL_dq0PHoowEd8hYxc4pnvbFY1UszKYv8g7ql8kSnobUSt02gnkSQx-8_oCZDGJsiOw49l9omU9bREOsEPtcPVr7xOM-o8TZOd3GzB4yJlF4usgp&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "i̇nci_pastanesi_b0be3d034a09d12320f5e68fd232624a.jpg",
          "width": 1200,
          "height": 1218,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/106616714328702960478\">İnci Pastanesi</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0106848,
        "longitude": 28.9680681,
        "name": "Grand Bazaar",
        "description": "I don't quite know what to say about this place. I want to love it, but it ends up feeling less grand than I'd like. There are fun streets in the Mahmutpaşa distict to explore all around it, like one entire street that's nothing but rivets, another that's nothing but yarn, though lots of the streets are nothing but knock-off clothing. https://nomadicniko.com/turkey/istanbul/mahmutpasa/",
        "place_id": "ChIJJwXXYpG5yhQRq5jBWgtoyGQ",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJJwXXYpG5yhQRq5jBWgtoyGQ",
        "place_name": "Grand Bazaar",
        "formatted_address": "Beyazıt, 34126 Fatih/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "Beyazıt",
            "short_name": "Beyazıt",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Fatih",
            "short_name": "Fatih",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34126",
            "short_name": "34126",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.kapalicarsi.com.tr/",
        "phone": "(0212) 519 12 48",
        "rating": 4.4,
        "rating_count": 163423,
        "price_level": null,
        "categories": [
          "tourist_attraction",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 8:30 AM – 7:00 PM",
          "Tuesday: 8:30 AM – 7:00 PM",
          "Wednesday: 8:30 AM – 7:00 PM",
          "Thursday: 8:30 AM – 7:00 PM",
          "Friday: 8:30 AM – 7:00 PM",
          "Saturday: 8:30 AM – 7:00 PM",
          "Sunday: Closed"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJu-hGBSekfqSH13FuJSlrEamMzCgrP7YjeYWGPdt5Z6Lvy6qOfsoo9xC33A3ZVHw9Mhqn5Vmbk8VVPAavO-9pk9gFlVD3cyHiysIRSVqCwaj8cDOqr0lkfxqt8NfytoBvZB4eRJoX22x5uwUZ4NOxSZeXys1gK7kLkVG688QMpPk8aYXOAGbEAJn2zJ0UzoZiTk1Zt8I5t3QCZInlVIyWWzbLRhgCkIOv67UH_Kn3zldtFGSqh7U2WDfZoRK1eaO0MZ9ktTJLMPGguLiE8TDbWjn2Gn7fZxjRlkCZlqrDPRaZ1bcC_BxY1yB5lnjlHQJl-mDW98H_uZtqDKf904iqv6b9Ok4y87GdBd363Zu6N0X1j1DzAuaQw01mveYoapwy1ydBhG_QAzdLUFUreZeKx0LKN8rIp4fxa9HH-07GbDZ6wUXab3vzLoZsNfsudV6-2y7REJ98b_Dy2zu5YoYC7IL3FJiXWeuNyLdE9VD8gm2kn4wofI-8EB4m-M32xdsEGaBw-SQGZWdbhrf68up-x-vsX_NWFnyD3x4V-E2c0D82Wf5oE_Kv1D5dE-RtCPYzGos_IZx0Js5iWuER56bwcpufC0_dXoQC4V-dmYX5JMyhGhNIhL06tgtno_XjFuaIETN-M&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "grand_bazaar_21d26abba7af0f18ba985bd881532892.jpg",
          "width": 4080,
          "height": 3060,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101037161479866710975\">Iwona Adamczuk</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.016500099999995,
        "longitude": 28.970519399999997,
        "name": "Egyptian Bazaar",
        "description": "Feels like a tourist trap but the quality of the sundries  (spices, fruits, nuts, teas) is quite good, though you can find similar quality on many blocks of the city - including in outdoor markets in Moda. It's a beautiful ancient building.",
        "place_id": "ChIJn9t8b-u5yhQRXVCwl43vu0Q",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJn9t8b-u5yhQRXVCwl43vu0Q",
        "place_name": "Egyptian Bazaar",
        "formatted_address": "Rüstem Paşa, 34116 Fatih/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "Rüstem Paşa",
            "short_name": "Rüstem Paşa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Fatih",
            "short_name": "Fatih",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34116",
            "short_name": "34116",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.misircarsisi.org.tr/",
        "phone": "(0212) 513 65 97",
        "rating": 4.5,
        "rating_count": 177907,
        "price_level": null,
        "categories": [
          "tourist_attraction",
          "point_of_interest",
          "establishment",
          "store"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 8:00 AM – 7:30 PM",
          "Tuesday: 8:00 AM – 7:30 PM",
          "Wednesday: 8:00 AM – 7:30 PM",
          "Thursday: 8:00 AM – 7:30 PM",
          "Friday: 8:00 AM – 7:30 PM",
          "Saturday: 8:00 AM – 7:30 PM",
          "Sunday: 8:00 AM – 7:30 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcIyKkctkYkOitesg5C9SDTwhF4xYc7Tm3qS1qT9DNa1pt6Fk4iKMjhsv78Mpqhp76dbSB2whCQf_iNFFrlVKSqAOUUlgaMku6SGsZJsfEpaj3vf6b0bqCdaF_kqHuTdF-qPRVWY-VfNfT6WDQ32MBOEJvJLw_uY0sWWd-9UHVNCKLKunUadECvxDzb44iHaOLzbDNxXXbbMM_4zBwg_o49SAlGp4FWR19ziU_MyfgMv7GPcwTFdbhvcE_ZbmB7BDya0Goub94Vs0hQmQMMhXO06BqCq8QvUiswI3G4BajFYeDkbkIEC-Azrm3TzQsGE7kdOA7HJSb0I3joIBmDIvm8zQShPcW9XRvDGeJCVquuU32iKFQDyuLkhnsHVjFF3Lwp0bVIjHAy6K5YV3D7sbV2vM9GXdrE6khyXcKUTEWbghg9jLCsgAPAwCLJaPhJYOsfUgPGpKI5ptbvtparPexZ2zFhloMFVNRojYzr8ZSZLPCY1M2y9AQwqWAfR6Gm7t3zMyxMlvqSTPDZ3r4QN51dXNfjsSIAD5FC5Wom245NVcRNZ-OdxOTSrDnlZ1iU3kTRzgboPcef1aca3vYZdTSmSZJ8Mq4zqNZ87aR5C9EzglYKwSjz4N1jKwtUTuJcOQg4Mvg&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "egyptian_bazaar_83d6e818e10fb3e03832bf835ed402ed.jpg",
          "width": 4032,
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/103160039450449481365\">Mos Hsieh</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0589927,
        "longitude": 28.9492193,
        "name": "Miniaturk",
        "description": "Oh god how have I not been here yet?! MINIATURE DIORAMAS!!! (oh, because it's far)",
        "place_id": "ChIJ9WsAScqwyhQRHNfCzoxQiTE",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ9WsAScqwyhQRHNfCzoxQiTE",
        "place_name": "Miniaturk",
        "formatted_address": "Örnektepe, İmrahor Cd. No:7, 34445 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:7",
            "short_name": "No:7",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "İmrahor Caddesi",
            "short_name": "İmrahor Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Örnektepe",
            "short_name": "Örnektepe",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34445",
            "short_name": "34445",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://miniaturk.com.tr/",
        "phone": "(0212) 222 28 82",
        "rating": 4.6,
        "rating_count": 35027,
        "price_level": null,
        "categories": [
          "museum",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 9:00 AM – 7:00 PM",
          "Tuesday: 9:00 AM – 7:00 PM",
          "Wednesday: 9:00 AM – 7:00 PM",
          "Thursday: 9:00 AM – 7:00 PM",
          "Friday: 9:00 AM – 7:00 PM",
          "Saturday: 9:00 AM – 7:00 PM",
          "Sunday: 9:00 AM – 7:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcIB2WFbM4Srid42T1_soeR3fCp8nY8bhc-A2D9bouKtJF9J9uUaUbtmnpj7T27m9axZdq3gSeMBOBHf_4gBDzhoFbjyavnoBA2aLJeBWqR9YQ3DOcp25BmpmRRjZtuGFSWbP5A-188BWkuGfMsAW_0nXr-pbdDfVLQa8NdxtWj6unWaKtvzo19bOtPOoX9j6wrIuCxk8TOoTgkcn-_HE7sOp_BfwvqFeIrqSUR04j5YyisfpWCDuWdhWdsrzVt24EmXqV75MJZdnu_xi67mPv3EXFA40QtxAiI8rbiRgPHf_ZvBcOpuIAQgOI9Lx7EK_3F6vx5ZREhnUWe2WLBoXe7giAp0wTmC2CAdlU1RRiGdrGT_9Ocrfkj5qpd1C6TkUHn2cxvF15ueuVe2JaWSP9827hivoMr0RVkycHqvqaiDPBr9vkkUx4mSVF8wCa4l2tRPkbQax1Af-m5VgmXmaajzRmpqyeVSgWvYCT91SXSzPCmCVYeyLREVQQezuHXdB87pY7rqbQfFHfqIrCN-Vhm8rS1HJ-pq2fm-prD0V0bjqnhSUlk6_NNCD57eonvEPSafkxLtGJcNJRWZAwYTkPq-d6zKbemRXH4G7Qq8Nk-HTd969qJF751996Fj6I-B68YfHw&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "miniaturk_9c43546c8f93e83e337f86a8585829e5.jpg",
          "width": 4000,
          "height": 3000,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/108225193524147486073\">NoOne</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0403204,
        "longitude": 28.9770909,
        "name": "Dirimart",
        "description": "Art gallery, wanted to explore but haven't had the chance.",
        "place_id": "ChIJ8epbh2i3yhQRKwmGaMZs8F4",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ8epbh2i3yhQRKwmGaMZs8F4",
        "place_name": "Dirimart",
        "formatted_address": "Hacı Ahmet Mahallesi Irmak Caddesi DLP 1-9, Hacıahmet, 34440 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "Hacıahmet",
            "short_name": "Hacıahmet",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34440",
            "short_name": "34440",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": null,
        "phone": "(0212) 232 66 66",
        "rating": 4.6,
        "rating_count": 169,
        "price_level": null,
        "categories": [
          "art_gallery",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 10:00 AM – 7:00 PM",
          "Wednesday: 10:00 AM – 7:00 PM",
          "Thursday: 10:00 AM – 7:00 PM",
          "Friday: 10:00 AM – 7:00 PM",
          "Saturday: 10:00 AM – 7:00 PM",
          "Sunday: 12:00 – 7:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKgq3qODDac3NHAR5IVYgTimzHxYHNv47aJnjxpvQysgjMebBhd8BXHeoI1sM95FSMkinHQ2o6nqcbhiUGH83wsDyhTPR9eqj3fHUQ4RCW10VF8oNnSNyEt5XrJiiXyA9xHgNGMdQUknsO338SxciJlXzv-a74dQ1_hP-ar7mjC1Htl1u25mzgMoEiEn3n22xtJocSxFWxdoPHTnCOftnGCb1k4gay-X525T4FYN6p7okB_VDe2UjUjHWdbNWDZ7yqHxvL6hW4JwTsaIiUA5QnOH3oWGVtvQov_pJw805o77E0_yYtiklUYnZq3NqBNn_nG7CBq534&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "dirimart_163b696452f521f654563bb05cf5378f.jpg",
          "width": 2048,
          "height": 1152,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/118061671362993451257\">Dirimart</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0413436,
        "longitude": 28.9796603,
        "name": "PİLEVNELİ",
        "description": "Only worth it if you're going to Arter - small gallery. Funny part is how much it feels like early Soho - million dollar white box off the side of a highway next to junkyards.",
        "place_id": "ChIJo0gzjGi3yhQRdHDGQVImzEk",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJo0gzjGi3yhQRdHDGQVImzEk",
        "place_name": "PİLEVNELİ",
        "formatted_address": "Yenişehir, Irmak Cd. No:25, 34435 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "25",
            "short_name": "25",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Irmak Caddesi",
            "short_name": "Irmak Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Yenişehir",
            "short_name": "Yenişehir",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34435",
            "short_name": "34435",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.pilevneli.com/",
        "phone": "(0212) 327 16 76",
        "rating": 4.3,
        "rating_count": 714,
        "price_level": null,
        "categories": [
          "art_gallery",
          "point_of_interest",
          "establishment"
        ],
        "open_now": false,
        "opening_hours": [
          "Monday: 10:00 AM – 5:00 PM",
          "Tuesday: 10:00 AM – 5:00 PM",
          "Wednesday: 10:00 AM – 5:00 PM",
          "Thursday: 10:00 AM – 5:00 PM",
          "Friday: 10:00 AM – 5:00 PM",
          "Saturday: Closed",
          "Sunday: Closed"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKRV2W_VeqxumrQuLY122lHbnrHj40VxyRvW8xrstTmJ87KBPmzIstwzUNO54Tn8oaLa479ktwOK6h3h2sEUk5bQktowdQea39Vg_dZ2iQ3t7o9Yxrmr4Qt1zFK5UB2zog0piFGbcfcQ26kR652V2TcipcXpMvfuaZqNq5z7-HgBGKxN5GLdrWdqwBWCsikh6IEFfyvG2zQKmEIl1BXWHg80IwuzViQG1S_pfq7RtkaPckjjTP9p2VolW7Oh-0qHJwvHeXIqp7qGZCwBpzmMPgH-YpBaXdFMu8wclBDPn7ISatIwDFOxbctggWrRqVo_er9IKyLbxB0En1RvGxtEkZWGh9NmGKMBXK8FJJO2MQf95kAtUIHX2aE63H6wh1bkU7Jub0q0R5NODEL664wh4dMEwAvYgrGwFU2meRXr4SGWmHAlpfKfFTchTTSr_2x-0Gj-FYUxiFz4JdJX6dLQHJPag82-9jyZBvA0VzwTvXbYk0tjRMgZF_RLw0eZhkHel2N7SzCLtWUSIeQFT3W6MchiUliUroAWzPA0tynhSVuckAwpgmWwGGkTugg66XqtoKdmfKQQ9TPbI_XtEWlLhl1Su8BZc9V9Z96I58bt7MrngA74EfMg9cVW0zqcEgLC5FQIw&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "pi̇levneli̇_42ca38402952e119dba2ae30d7f80ced.jpg",
          "width": 4032,
          "height": 2268,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/112599501715284863704\">Yasin Baydar</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0297622,
        "longitude": 28.979388399999998,
        "name": "Craft Workshop",
        "description": "Tea garden in a courtyard that's lovely to take a moment away from the noise and bustle of the city",
        "place_id": "ChIJ3WnwC9-5yhQRLbohpWYR7ms",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ3WnwC9-5yhQRLbohpWYR7ms",
        "place_name": "Craft Workshop",
        "formatted_address": "Tomtom, Boğazkesen Cd. No:67, 34433 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "67",
            "short_name": "67",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Boğazkesen Caddesi",
            "short_name": "Boğazkesen Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Tomtom",
            "short_name": "Tomtom",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34433",
            "short_name": "34433",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": null,
        "phone": null,
        "rating": 4.2,
        "rating_count": 318,
        "price_level": 2,
        "categories": [
          "cafe",
          "restaurant",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 9:00 AM – 11:30 PM",
          "Tuesday: 9:00 AM – 11:30 PM",
          "Wednesday: 9:00 AM – 11:30 PM",
          "Thursday: 9:00 AM – 11:30 PM",
          "Friday: 9:00 AM – 11:30 PM",
          "Saturday: 9:00 AM – 11:30 PM",
          "Sunday: 9:00 AM – 11:30 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKuLvJYWXTUhxHFS5p1bRLS35-MBy1KbxwadjbvWb6_s2XaJxAJsObGw6BBrPVh4Bz0uvS59Hm-4QYjfZ-7f-OWpwlm5liA2kuzbd5x3vzk4m6aiMi5mW-Uo4itWQekTcSlrJf_kHHpMdgPB2HEcMP1L31aI4ZG1DGphMxQPefwX2DyCPE5ikdI2c8mhxRLxMkZ96d6vkxOwr1FBOIAH2ZcICBvBM4U5ED6vOYDzWgM_Afhoxd-MY2jvNtANewOXE3J_0ShCa48WKxuoneAHoHexJsIe1c6ha3xdQsVrcvc2dxIoyaUKsos0g6_SEW3-ZTifXfV9Ywwza4Z7HOd0ot3_yKJ0pjWQdoOrzmNV_JKvBMtkN2iyCUkxEy5HkaZXrW0suDJmlSMv9zMFb8Z3V57hVS3nDqnZUJ6qLdKIXALyloKLOHzcr_Yht62NH2dovv6uTOEyUSOMZwvEcZwrfgLbuUECm_AA278pGvvQdpG68R2sX2ZzbrhcLLjzV603gvbHjvVTj3qrq-dgRMwZBmbNLinbwmokqxHaQv9glOw2UUFsDonImJSkIyOsQUQZSZMqimNkas-3egkBuqw2SC4h3GxEV9c5tSlu6R_21VWXe822XIEXZ1cVF7qGU2qxpCsOg&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "craft_workshop_ddff661962ed583b4f21222ba82fab20.jpg",
          "width": 3024,
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/107405346474031259552\">Selin Özmen</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.025919599999995,
        "longitude": 28.982838299999997,
        "name": "Istanbul Museum of Modern Art",
        "description": "We'll be going here on Sunday!",
        "place_id": "ChIJw8JuD9m5yhQRnegQbG9Irjs",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJw8JuD9m5yhQRnegQbG9Irjs",
        "place_name": "Istanbul Museum of Modern Art",
        "formatted_address": "Kılıçali Paşa, Tophane İskele Cd. No:1/1, 34433 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:1/1",
            "short_name": "No:1/1",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Tophane İskele Caddesi",
            "short_name": "Tophane İskele Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Kılıçali Paşa",
            "short_name": "Kılıçali Paşa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34433",
            "short_name": "34433",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.istanbulmodern.org/",
        "phone": "(0212) 334 73 00",
        "rating": 4.4,
        "rating_count": 9357,
        "price_level": null,
        "categories": [
          "museum",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 10:00 AM – 6:00 PM",
          "Wednesday: 10:00 AM – 6:00 PM",
          "Thursday: 10:00 AM – 6:00 PM",
          "Friday: 10:00 AM – 8:00 PM",
          "Saturday: 10:00 AM – 6:00 PM",
          "Sunday: 10:00 AM – 6:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcL9fcdyos6RYNYKcXEZf7utVnqFFyNpTIt-NWkCr8Mc4wGT2908fynyyOHQvmf5nKuWCxPxJk8nbuTLDtm0Tge0td5igTD_WjcU75NGhXqNleUvLBQC_qH-W54t3GBhI7G-Yx5c6fDbAbaoKXlwSaOgZ57SFzBQPaYS3eyRUTwdDtCBOIlXj391XmTex4ZP9pB1lnIdMnrExo4yT8bIHBpw_dSEjyGG1vgdqKNt70qam9aoqby-IzEMG2O5TTne1nWPsWXqgJWkA5IsTzuQIIjoETm_DzpPKeO1nYAwf7-A8OhKtFCFsDPCdJjSdmWq5aji7kCP9n7GHwViP5x7VjyrEinFq3Ty3gqy5c9-OMbbdvEcys6vBOpcKlgmLpWQ5Ona0qKAT6b8QJrrUvqc9njvRMORybOy007oQNAwYB24XDJ2bt-2CbS3fhcHwQ_drzxOuroqemrBLo6_YDlHqFbfTHyotFX1cCj6LhDIx2MgBClZrtqw6es6HUfPTCYX2Q1i54-ZUSgfyqHaf7xyj5bI8tDOxrDJ_4jmKrGQegkvK4sR9Roxyk8QNG2Vm2mfCc8jC5WlbGyyAZEv4HNdgkuv_c92AkaSKOT2bWGjrc5zJ1RiYKpy22A2B-RdyfbZW1mvbg&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "istanbul_museum_of_modern_art_d6f755f6ac9809558705f12ac7507b8d.jpg",
          "width": 6240,
          "height": 4160,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/103182317186098102094\">Gela Riabukha</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.008583,
        "longitude": 28.980175,
        "name": "Hagia Sophia Grand Mosque",
        "description": "Beautiful mosque, takes five minutes to see, sometimes need to wait due to prayer times, I never fully understand the schedule.",
        "place_id": "ChIJJxwBkr65yhQRrk9EN29vbiM",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJJxwBkr65yhQRrk9EN29vbiM",
        "place_name": "Hagia Sophia Grand Mosque",
        "formatted_address": "Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:1",
            "short_name": "No:1",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Ayasofya Meydanı",
            "short_name": "Ayasofya Meydanı",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Sultan Ahmet",
            "short_name": "Sultan Ahmet",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Fatih",
            "short_name": "Fatih",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34122",
            "short_name": "34122",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://ayasofyacamii.gov.tr/",
        "phone": "(0212) 522 17 50",
        "rating": 4.8,
        "rating_count": 133412,
        "price_level": null,
        "categories": [
          "mosque",
          "tourist_attraction",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Open 24 hours",
          "Tuesday: Open 24 hours",
          "Wednesday: Open 24 hours",
          "Thursday: Open 24 hours",
          "Friday: Open 24 hours",
          "Saturday: Open 24 hours",
          "Sunday: Open 24 hours"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcI9rxuWXQzPyRf-tEs0PaBw_aPCE6yWyaV90P3kDM0vVNGd2hDAu-l0G2Ea6YxDQ2rPUc069g2YYbUrgOmPaVMecbXP8uobakRz6cKvM6o0WIWD8TFgLfP3iielisn06VqEn4HBYFjjWEVWxBQfRTZAOLxDSBTrgpdJv7II4Zmc4PJSu-rcaYG1TRLdrcrOmCBRk9Un-cAThJbE4TP7Ehnae7TvHPWrC15nfsG_aOXXmy8XWloULhSBV40l9r0GTJQuU4uYBhoz_S6ePdWuNfJrSuV6rfWlRbsKkGjRsVeImm8csiMWGr4tU5qxCB_cx_nBC8oAB4qPLVICguBijgTElIOsxW-LBHKaOQ4EJM6nyKDBuF4aPCQg5Zd5D5oFaBAySatWex3ZUA12gY23sqYBtCAitoo56Ky8_ziGS-_NoF962tDR2pSGQ20WZxc7BqQsF2dcO7P4qYrBKkaFwMuVyTrG1sFYMUXO3i3qv9BBS00f63nTzxnEb1x3rACqOwA9kbnl2t9RgUfbBGmMJORUdJvCx2lmJvO7XCGI7oC_MohyuJEmN2YGdqIZ9ikJroudsvaek3oguSen6oSjvQq1fA-SlK0ZAzNLBaX6rdTgdtgouZAg5qtpIXK1CWTwJqeQ9g&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "hagia_sophia_grand_mosque_8334c9080f18467288dfcd6aaeedcd0e.jpg",
          "width": 12000,
          "height": 9000,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101274992099723972939\">Muhittin Bayram</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0115195,
        "longitude": 28.983378899999998,
        "name": "Topkapi Palace Museum",
        "highly_recommended": true,
        "description": "The other big palace to visit - this is the ottoman one, it's much weirder (and therefore more interesting) to me than Dohmabace - feels like one could imagine some scene in Star Wars happening here.",
        "place_id": "ChIJM_ilr7i5yhQRAFMBw0MZqhU",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJM_ilr7i5yhQRAFMBw0MZqhU",
        "place_name": "Topkapi Palace Museum",
        "formatted_address": "Cankurtaran, 34122 Fatih/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "Cankurtaran",
            "short_name": "Cankurtaran",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Fatih",
            "short_name": "Fatih",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34122",
            "short_name": "34122",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.millisaraylar.gov.tr/saray-kosk-ve-kasirlar/topkapi-sarayi",
        "phone": "(0212) 512 04 80",
        "rating": 4.6,
        "rating_count": 104932,
        "price_level": null,
        "categories": [
        //   "museum",
          "tourist_attraction",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 9:00 AM – 5:00 PM",
          "Tuesday: Closed",
          "Wednesday: 9:00 AM – 5:00 PM",
          "Thursday: 9:00 AM – 5:00 PM",
          "Friday: 9:00 AM – 5:00 PM",
          "Saturday: 9:00 AM – 5:00 PM",
          "Sunday: 9:00 AM – 5:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJCo7ecQt7sOUHmFxMLpU-2veR4-6sb8AIjPc8XNQjV8JtwAG2dCPceBQVe8O-d63fLqAhZ5BZ_S2TzmRHwKYkZNjjNixwzYvSYZ3WmXMrwEwd2Swx-i6ECX_HCf0PSz3IEzXuehh1cjAJz_1-VQxllLloXFhshPQYpOAzM3TT1KD20nv_EfkkQN2gZTs63QXhAL84lwkEsF6OK1UHSzoW-1qXS3tYXUaQeoPPQkquRljJUeKcLv9NAJv6uDyHzsMkKvdyvz_iXtf3lGLPzSQ1kViag8UBS2Qhc78hsrp6JOJI-xXQWLZbSSV59kzdCbnld1HlCrOHsAJ9L53MUV7PmaDTjw3mh55LXmNL5Ohbeha876Q4jP53j2O5_KS-OV2BouI5t-0Ow1cRlNAARF3MwVbo3rPkdQ9zfbCuiH2bAeovhS5mcQROAcm2p8k52Uzq83peygIDSR9dup1ILuAmRdbZc45Ghq3JWFvBsbikNXpvw6Gybu9SkkpspsNdvLoZ2mmd1xedM0cADu6n1BJBiFvX6LFQmZIMKQcSC9w071IhNVXopnGz0LqaWVOogVewf6UgPAPsxgN3VTOS3A7jAvaOidjZgD3iLr55Wm_zI2Dp1Eikmf_bESC3p6_jmGSHTqjTs&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "topkapi_palace_museum_1cb6ac1b13ad03d6fb288d458de843bd.jpg",
          "width": 1000,
          "height": 666,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101396056507742303979\">Ali KILIÇ</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0482738,
        "longitude": 29.026639499999998,
        "name": "DESTINA KUMPIR",
        "description": "A sea-side outdoor \"mall\" made up entirely of places that sell overstuffed potatoes.",
        "place_id": "ChIJhycK4mm3yhQRMWaiCP1FLdk",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJhycK4mm3yhQRMWaiCP1FLdk",
        "place_name": "DESTINA KUMPIR",
        "formatted_address": "Ortaköy, Mecidiye Köprüsü Sk. No:1 D:3, 34347 Beşiktaş/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "D:3",
            "short_name": "D:3",
            "types": [
              "subpremise"
            ]
          },
          {
            "long_name": "No:1",
            "short_name": "No:1",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Mecidiye Köprüsü Sokak",
            "short_name": "Mecidiye Köprüsü Sk.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Ortaköy",
            "short_name": "Ortaköy",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beşiktaş",
            "short_name": "Beşiktaş",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34347",
            "short_name": "34347",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.instagram.com/egeliikumpir/profilecard/?igsh=bzM4bGV3eW8xMGhk",
        "phone": "0542 584 98 21",
        "rating": 4.1,
        "rating_count": 69,
        "price_level": null,
        "categories": [
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Open 24 hours",
          "Tuesday: Open 24 hours",
          "Wednesday: Open 24 hours",
          "Thursday: Open 24 hours",
          "Friday: Open 24 hours",
          "Saturday: Open 24 hours",
          "Sunday: Open 24 hours"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcLz7Uyl6nGIbKwfhd62gG-uE7aPkiQ8J9sWEJ2qHlvH-tleCN0bqEqFv8s8075NlKJQVpju_TQn8V8-4rkB3n29QEjnEbI4BlzS3OAVk1Gld3Nkq73OcJgKYzJ7VyhrS8lrLvZNrsVocdlyzE3zOFYPMTUVfk6j4EkAVFQNp0OVsxHBNbc8jl_cEGUGAJrkwq_vPsIWb714TnkTmITs50TDT2IBMTYYsYXqa83KFO7wcDiN3P6tWC9sNPPSbSL574oYAbCSfvMcXcUpfUytrHBCC9iHJtCHfq-UWO-2K6noUCcKb7QMQT_qiDcxGg0KYjMekITHeIjG9ctJFoWaXtWeVwcw2p-8F9_RoJM5f3Qnk9F7CMWDetUuIX-CYqJ7RGJqoJO94uNYfcNEWo1e799d-N0rAoB-K4hEU0gHzhXDoHi4kwtgsP-_7G2bzwSfW0c0em7prt7L1gJNch-A5o_2EG7p7VkQpoP78KemR69H0ysO_4Ewc3mD_9_6clpR8NIikhneFGu3BaDDIu_2_In9hPmwegSp_ppF2rzIvM0JkpcqnNLxhRZiJ97JZtkMLT0EfgYs4OpowsNRIEqeIBu2CDwmtmzDbzCT3yuJQ_42fGbOFAcsTaDhOURsbi5Z2ESGdag4&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "destina_kumpir_b74b3462449d47b8034457d88ab65584.jpg",
          "width": 1179,
          "height": 2096,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/114249783099312225321\">Tayfun Çiftçi</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.039164299999996,
        "longitude": 29.0004594,
        "name": "Dolmabahçe Palace",
        "description": "One of two big palaces to visit in Turkey - this is the modern one that reminds one of Versaille or Munich Residenz",
        "place_id": "ChIJ4307Gna3yhQRC4M7zzg-09w",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ4307Gna3yhQRC4M7zzg-09w",
        "place_name": "Dolmabahçe Palace",
        "formatted_address": "Vişnezade, Dolmabahçe Cd., 34357 Beşiktaş/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "Dolmabahçe Caddesi",
            "short_name": "Dolmabahçe Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Vişnezade",
            "short_name": "Vişnezade",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beşiktaş",
            "short_name": "Beşiktaş",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34357",
            "short_name": "34357",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.millisaraylar.gov.tr/saraylar/dolmabahce-sarayi",
        "phone": "(0212) 236 90 00",
        "rating": 4.7,
        "rating_count": 82748,
        "price_level": null,
        "categories": [
          "tourist_attraction",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 9:00 AM – 5:00 PM",
          "Wednesday: 9:00 AM – 5:00 PM",
          "Thursday: 9:00 AM – 5:00 PM",
          "Friday: 9:00 AM – 5:00 PM",
          "Saturday: 9:00 AM – 5:00 PM",
          "Sunday: 9:00 AM – 5:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcII_hDac33bjGOidO_2cqOQvVtM15hGleFXf7iWZxkPO_Px7s3PgC3N8f1LDrulNzQ78t8_t-qz1fCRRTIYMZczX4zBB8a20Q5MthgfSSfsUOxXpUXLCplmDashmNncvVf3mWoD7lYYeUhiIcA4za77Su9iRR3NITKjfhbjl8K1YUu3OWBYcoizEinb4RrCGnE6yRHwMSpr7TFVwSyMGfrqzK8aUOehnpdqDUcv88aAze57B_chnDFGA4hVOrBz1HvDCPTK0ccp2366b-QzA4MLFI3rBhzjGzrBCGKiTYoWZURR1klFHDEcOEZA-ZE_-Je0CemI_6cEX2ZaJPW08Gqgr7Yen3G1JzxZaNb9I2hehTvZQfWkFBsjdw7wUHBBx5JpQa02Q565ykC88BzrDI_DrVjh8iFwNPXy1IcJ5PwdgZTjlYJ0fbUnKq4t33qUR0d7zFSmUBdclaSNZO83Nl1BUQStkWmtGn7KNVgwEYkJo2BJpe0brYRltSjJ1j6b-j1iuzb2bimaUhZ1mmsbhDYuTUYJWqlO_30LFNs0S7EFqmk6yOtN1hoBzaZGQC3e1NG4ulCnEM0D53_29m84WRDAUvB_fqZg-aUJ6vB_FZ8h4YYRoQQIvctRMWV8bafXE2uc9g&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "dolmabahçe_palace_9bd407ee0abfc91cc10e6e576da236a4.jpg",
          "width": 4024,
          "height": 2630,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/102020605576313927465\">Ogtay Gozalov</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0360995,
        "longitude": 28.9815485,
        "name": "Bova Jazz Club",
        "description": "BOVA DEEZ JAZZ CLUBS.\n\nAnother jazz club.",
        "place_id": "ChIJTx8IpGa3yhQRO6cN1jlnQ4E",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJTx8IpGa3yhQRO6cN1jlnQ4E",
        "place_name": "Bova Jazz Club",
        "formatted_address": "Şehit Muhtar, Mis Sk. No:17, 34435 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:17",
            "short_name": "No:17",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Mis Sokak",
            "short_name": "Mis Sk.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Şehit Muhtar",
            "short_name": "Şehit Muhtar",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34435",
            "short_name": "34435",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://instagram.com/bova_sahne?utm_medium=copy_link",
        "phone": "(0212) 243 44 61",
        "rating": 4.6,
        "rating_count": 829,
        "price_level": 2,
        "categories": [
          "night_club",
          "bar",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 3:00 PM – 4:00 AM",
          "Tuesday: 3:00 PM – 4:00 AM",
          "Wednesday: 3:00 PM – 4:00 AM",
          "Thursday: 3:00 PM – 4:00 AM",
          "Friday: 3:00 PM – 4:00 AM",
          "Saturday: 3:00 PM – 4:00 AM",
          "Sunday: 3:00 PM – 3:00 AM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKEGFwMkasoIpnUU-oQZlxGy9jBJoBDslqUvsNOH42CYHhDJoERlXJmNACKJzVmZLleHphxjbgHSDvTP5W73-Kp_4YVblJZDG4vl0F3ulTY3b8R98ZXbl28Mt1HWjQhKXM2DcNe38fEHojsWAT_pG0w79mvPzQkQsGYiA3W65568d5GelzGmJOtVyeNLwKlgMX7in8IJlWDMSVODTwZzelrFHBs3EnlfahvCxovSnaMyTXXJPItOLlVHDDUFOrfDrhdf1PldAY7vdE8TNcJVQxJIqvxmvGmJjsabLrAW9uvK7YyOweLYKOl27pI87YWLaFhTOuz5lI&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "bova_jazz_club_fa5970f6d0ada623b0503b2a9ded9e99.jpg",
          "width": 5472,
          "height": 3648,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/108132108750710921019\">Bova Jazz Club</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.025320799999996,
        "longitude": 28.973900999999998,
        "name": "Nardis Jazz Club",
        "description": "It's a jazz club, it could be in Paris or NYC or Spokane or on the moon, it's a jazz club.",
        "place_id": "ChIJ4TqEhjnIyhQRX1pj6zIO50k",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ4TqEhjnIyhQRX1pj6zIO50k",
        "place_name": "Nardis Jazz Club",
        "formatted_address": "Bereketzade, Galata Kulesi Sk. No:8, 34421 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "8",
            "short_name": "8",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Galata Kulesi Sokak",
            "short_name": "Galata Kulesi Sk.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Bereketzade",
            "short_name": "Bereketzade",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34421",
            "short_name": "34421",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://nardisjazz.com/",
        "phone": "0532 244 57 78",
        "rating": 4.5,
        "rating_count": 1565,
        "price_level": 2,
        "categories": [
          "night_club",
          "bar",
          "point_of_interest",
          "establishment"
        ],
        "open_now": false,
        "opening_hours": [
          "Monday: 8:30 PM – 1:00 AM",
          "Tuesday: 8:30 PM – 1:00 AM",
          "Wednesday: 8:30 PM – 1:00 AM",
          "Thursday: 8:30 PM – 1:00 AM",
          "Friday: 8:30 PM – 1:00 AM",
          "Saturday: 8:30 PM – 1:00 AM",
          "Sunday: Closed"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcLDL00GzroH5KdHOieZyYPkDpOqrLZBKGLhA8y1oOFLeteGc-ea1QVe1aL-K3qPGu3MXhxUdlPXHIuJS88CoVEq6att52XGEDsyb7fspleXMv1R_X8fWUv57ePFhS4H11D9s2NQQKq2vRCUrnQH0C55DDIzOiHuIFf-SaZWiML3XriKdkIyHI9TJVnvvYBuQCCTvsTUd0W0q21miKxofMch4yi0L0DuXRNAD_VJVcmipxI01Y-xhmg2iAeWUsBz64bT9A5saXego6OnvDni9IBgA9ZI_2nR5vEujaJPy2MASlUMS2zLcvBOD2TCkWOJFbqkWhjP6AXU622MIwRCgxL6aUoll6MvmlWCET2xE1LHYPu4ZFPKppuYVt-bxu3HtrY052RWDOdjNXl5oSnJL6oenPxX7a-gaeVfQG0fJVQvCq8fvnKLZNDTNOJAKw7JkqzvdpYS-4SlcgpoLYW4wUwZSwUiITsMTiHdprlrornxpZQ0wp24KVaGgwavWO8-kDDzNpL540kmNtu5nT3zlY9373bo5XIfyLH92nmZS2bvK0PrGgTQoepbYgJ71UJo-VgQSVLtIE7wTxbUSeCh9ssYPc6K2735u9z558F9euSlZ8V5Aunnp2szXRglmgqyyRt27g&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "nardis_jazz_club_17d164539966a491bc28e930803895c3.jpg",
          "width": 4032,
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/112689813975978279659\">Howie</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0318536,
        "longitude": 28.9750578,
        "name": "Pera Museum",
        "description": "Good!",
        "place_id": "ChIJLTINFuC5yhQRyRbXfXliR9k",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJLTINFuC5yhQRyRbXfXliR9k",
        "place_name": "Pera Museum",
        "formatted_address": "Asmalı Mescit, Meşrutiyet Cd. No:65, 34430 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "65",
            "short_name": "65",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Meşrutiyet Caddesi",
            "short_name": "Meşrutiyet Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Asmalı Mescit",
            "short_name": "Asmalı Mescit",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34430",
            "short_name": "34430",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.peramuzesi.org.tr/",
        "phone": "(0212) 334 99 00",
        "rating": 4.6,
        "rating_count": 6449,
        "price_level": null,
        "categories": [
          "museum",
          "tourist_attraction",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 10:00 AM – 7:00 PM",
          "Wednesday: 10:00 AM – 7:00 PM",
          "Thursday: 10:00 AM – 7:00 PM",
          "Friday: 10:00 AM – 10:00 PM",
          "Saturday: 10:00 AM – 7:00 PM",
          "Sunday: 12:00 – 6:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJoOVDddH1t5h5XhGLdvwXUXUbxhsuk6UMYgoys9fDgoAV7vjROffNkA8xys46O59rHzL9p5-zkQ0o8V1jEYeLT_7zL_naRugg46PXrpJ7E_S_j3ZyTNS4LV7j8NRIpO97pFaJXqORLPoxqCRFMxqnrBuH7F_GoK8RuM-4jMuRO0iTf2ux2KxFIPE5RNOqLc9uOLWhz9TjyHdQQKUWdaxbTq2zitt8mza8FkKmA6iy-TD1ykcWakpp3Syh6Octy-IJueiyzumwl9j60E9B_530JyZFku7oa3-YZo3vE-UDgXtImy9GQHyIENej_uNXbHHILIMKKxyFsc7our0xjrPtXWopy8Tu0LvMGTJwWEav4PMxIgKRcLgZ_dEYfI3hJb2yq_aJUyrRHBerXlbpuP7BHk66gyfC1ZkQ2lBWEDbOmltbQzYyw6poXE8USaZf9PVb68REG3z14mxkjw1quygFEqoHnu9_zeenTte6P6Pt6tK5JCreu6IehBQ1SV2URzE0DXraqX0guPCsp0wMMQ0cZSTuxSqZnvgCsFfv46hQ8f3gcLsoRxdTIR9qjaBWECp2RBiFQ-luN5XrJC23iBM6xt62lgPp_SMjTjX-7utEdPLnVrLAMdA9fwnOFi_47EWndgais&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "pera_museum_d32383578a2c1acff84f9680a693f0bd.jpg",
          "width": 4032,
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101446452135562508160\">Thanassis Svarnas</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0321309,
        "longitude": 28.9761129,
        "name": "Salt Beyoğlu",
        "highly_recommended": true,
        "description": "Beautiful Multi-floor art gallery including films, located right on Istikai which is a bustling commercial boulevard (formerly one of the cooler more progressive parts of Istanbul)",
        "place_id": "ChIJT3JZAGC3yhQR_dj-LYbB5bY",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJT3JZAGC3yhQR_dj-LYbB5bY",
        "place_name": "Salt Beyoğlu",
        "formatted_address": "Asmalı Mescit, İstiklal Cd. No:136, 34430 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:136",
            "short_name": "No:136",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "İstiklal Caddesi",
            "short_name": "İstiklal Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Asmalı Mescit",
            "short_name": "Asmalı Mescit",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34430",
            "short_name": "34430",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://saltonline.org/",
        "phone": "(0212) 377 42 00",
        "rating": 4.6,
        "rating_count": 1017,
        "price_level": null,
        "categories": [
          "tourist_attraction",
          "park",
          "museum",
          "book_store",
          "store",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 11:00 AM – 7:00 PM",
          "Wednesday: 11:00 AM – 7:00 PM",
          "Thursday: 11:00 AM – 7:00 PM",
          "Friday: 11:00 AM – 7:00 PM",
          "Saturday: 11:00 AM – 7:00 PM",
          "Sunday: 11:00 AM – 6:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcLwbx9v5Vu89Z_l4w1MTCUGPN5U4kQH0lm84QpRBjV3JhZAdCmP_sOYMSy_7WlKsxDhnglTWyypOManVqLBFeeWqyRIu21sMCUmGdMg5fhT_-vgKkvTw7n_ZZ00FaxGl9gCFG0G7iKqlrcmBzpjkj7StVWjPORX3ZqkqaLCC90tSj90siLQLjhGsjzLvwBGCL0P2MywFopn50Dpq7JGuOrAcNxy_qCUD8ZdK9-_c6iJ96aRP-xGhJkkxoMN2Nm9AlmaibgwyzP5doyDE26Krm5WlFF-wYjNo6NXRXrCWW1teZpSDDftaJP0i9_XAWycAYT_yRNMqr4&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "salt_beyoğlu_0f529842331a8266970294e455696d89.jpg",
          "width": 1200,
          "height": 800,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/103380909899433929399\">Salt Beyoğlu</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0239214,
        "longitude": 28.973488699999997,
        "name": "Salt Galata",
        "description": "companion to Salt Beyoglu - maybe the bigger one? check their website",
        "place_id": "ChIJ9XlKFOi5yhQRpjqu9uyObWE",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ9XlKFOi5yhQRpjqu9uyObWE",
        "place_name": "Salt Galata",
        "formatted_address": "Arap Cami, Bankalar Cd. No:11, 34420 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:11",
            "short_name": "No:11",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Bankalar Caddesi",
            "short_name": "Bankalar Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Arap Cami",
            "short_name": "Arap Cami",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34420",
            "short_name": "34420",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://saltonline.org/",
        "phone": "(0212) 334 22 00",
        "rating": 4.6,
        "rating_count": 1315,
        "price_level": null,
        "categories": [
          "tourist_attraction",
          "art_gallery",
          "book_store",
          "library",
          "museum",
          "store",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 11:00 AM – 7:00 PM",
          "Wednesday: 11:00 AM – 7:00 PM",
          "Thursday: 11:00 AM – 7:00 PM",
          "Friday: 11:00 AM – 7:00 PM",
          "Saturday: 11:00 AM – 7:00 PM",
          "Sunday: 11:00 AM – 6:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJjSKmCWpUeYuKcbg1cPeb4CJGYKH6_FU9baqXUsLn_sSsRmBx4LNB1-ecSLeNdfotkmTSUjfRzSsaR-Q8x5X5DQ6X646dGTCtQSvt9u1MzMA2ukgtCbAOfyh_QFbwvQB7XfBxXr0ntI0EkARCXSV-aj6kS6hrnjG0CG7qTZkPooN_mlNzv1j8SOhYlFbl1TywVKl2KqQpQozgGTUV1rtmQKFEdJ5pcPDBUGe1R5-u2x2cJaHZmp5HZORp3qAx8us5DRFWPUHNca52KMG3aooC9wOloAMaDSPC50nEUD0Nexwsor7doZIeEmx5sLEwBIRTMyyzlxeY&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "salt_galata_84eeacaec3dbd13eb4a0dc525c57b626.jpg",
          "width": 1440,
          "height": 960,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/100523758168680710695\">Salt Galata</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0384244,
        "longitude": 28.983097899999997,
        "name": "Piramid Sanat",
        "highly_recommended": true,
        "description": "A moderately? very? famous Turkish artist's gallery and cafe. If you're lucky, he'll be there with his giant dog and will pull his monographs off the shelves and start showing you photos of his work including lots of street art photography. Art collection is not bad. Again, sort of a wonderkamer/warehouse vibe.",
        "place_id": "ChIJUw_Q6mW3yhQR6pV1eBu3tPg",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJUw_Q6mW3yhQR6pV1eBu3tPg",
        "place_name": "Piramid Sanat",
        "formatted_address": "Şehit Muhtar, Feridiye Cd. No:23/25, 34430 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:23/25",
            "short_name": "No:23/25",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Feridiye Caddesi",
            "short_name": "Feridiye Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Şehit Muhtar",
            "short_name": "Şehit Muhtar",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34430",
            "short_name": "34430",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.piramidsanat.com/",
        "phone": "(0212) 297 31 21",
        "rating": 4.6,
        "rating_count": 92,
        "price_level": null,
        "categories": [
          "art_gallery",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 10:00 AM – 7:00 PM",
          "Tuesday: 10:00 AM – 7:00 PM",
          "Wednesday: 10:00 AM – 7:00 PM",
          "Thursday: 10:00 AM – 7:00 PM",
          "Friday: 10:00 AM – 7:00 PM",
          "Saturday: 10:00 AM – 7:00 PM",
          "Sunday: Closed"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJgl1GndcBHSNdryHtWXtsyD5_McAkegDGg4sDX6hK_7eTsRHhaFkos7xgBbi-aXeFvcAN7--mAKP9VNrsa_rgnNhgmnF11iME04TJQl4lyuYmAXnVO6BpSL9hJBqtwaNGcazfAGnloLivKbol2JLmgXUHM6UxYyJNe3PjfriR1dsQVSvFGiRAzGw5aLG2uVGk8fM49K75ngbRGPFIZbAGpRM5ZiMTLaZyo6K2D913l9Hg1O4i8l4_NBIxmyLbBiQ8rawnbGj5ERS6egRNNJOm7ab8xNltK6OYq0u9j5fk_Omp8Dzgx749kUVj0C4PhvdaCa1l2tqg&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "piramid_sanat_279f32a7598c14dd237e70839c9bf953.jpg",
          "width": 2048,
          "height": 1152,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/115646509874075877521\">Piramid Sanat</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.031982299999996,
        "longitude": 28.980932799999998,
        "name": "Çukurcuma Antiques & Cafe",
        "description": "More antiques, with a cafe, sweet people, english friendly",
        "place_id": "ChIJYWnKh_W3yhQRJZi1Ks788l8",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJYWnKh_W3yhQRJZi1Ks788l8",
        "place_name": "Çukurcuma Antiques & Cafe",
        "formatted_address": "Firuzağa, Çukur Cuma Cd. No:52B, 34425 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:52B",
            "short_name": "No:52B",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Çukur Cuma Caddesi",
            "short_name": "Çukur Cuma Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34425",
            "short_name": "34425",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.cukurcumaantiquescafe.com/",
        "phone": "(0212) 249 52 88",
        "rating": 4.6,
        "rating_count": 173,
        "price_level": null,
        "categories": [
          "store",
          "cafe",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 9:00 AM – 7:00 PM",
          "Tuesday: 9:00 AM – 7:00 PM",
          "Wednesday: 9:00 AM – 7:00 PM",
          "Thursday: 9:00 AM – 7:00 PM",
          "Friday: 9:00 AM – 7:00 PM",
          "Saturday: 9:00 AM – 7:00 PM",
          "Sunday: 9:00 AM – 7:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKnJSeAeRukwL0eK9DhWliQ452don0qclLTa_eGB-f6DtW-1GNh8CO2UBsJHGq6ZVT4PawMUxxoEyoUw9vOuhRuujNhGFacM8X8hDe14Tf6KZpnkfpB6mXJVq--APc--K0czq1sw-X-OfUU7-Nu_rziasqsyr4HNrNBBZNBemRzDOV-QnGpofz0llOws6TBZShidcOnhKf6KGP5y9oTmZVNIUozV44vSNeDE07rHUtDN6UCnc9B_g0Y0-waVg9v5AVuVmI00AHC3ImiS7DTbJSaRkLVzGBDPokM3N2bls1vGYsZANgwTCLbzNFvdxaW92aFw5HrDss&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "çukurcuma_antiques__cafe_561a23b24d76c6f1f80bc97cb6fa1136.jpg",
          "width": 5472,
          "height": 3072,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/100397196517148080560\">Çukurcuma Antiques &amp; Cafe</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0310766,
        "longitude": 28.9822125,
        "name": "Limon Kahvaltı Evi",
        "description": "A good place to get a serpme kahvalti (a turkish breakfast with a million individual dishes). Though you don't need to go here, there are a lot of cute kahvalti places around here.",
        "place_id": "ChIJFwI2KZ23yhQRAYVIfqMHiio",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJFwI2KZ23yhQRAYVIfqMHiio",
        "place_name": "Limon Kahvaltı Evi",
        "formatted_address": "Firuzağa, Palaska Sk. No:3/A, 34000 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:3/A",
            "short_name": "No:3/A",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Palaska Sokak",
            "short_name": "Palaska Sk.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34000",
            "short_name": "34000",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": null,
        "phone": "(0212) 741 34 76",
        "rating": 4.8,
        "rating_count": 1100,
        "price_level": null,
        "categories": [
          "restaurant",
          "point_of_interest",
          "food",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 8:00 AM – 5:00 PM",
          "Tuesday: 8:00 AM – 5:00 PM",
          "Wednesday: 8:00 AM – 5:00 PM",
          "Thursday: 8:00 AM – 5:00 PM",
          "Friday: 8:00 AM – 5:00 PM",
          "Saturday: 8:00 AM – 5:00 PM",
          "Sunday: 8:00 AM – 5:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcIJtSE_7Uw0ct8yI4TDsdQJJbFVTYSFc65ETx7hMG7XpurNmya_pd1qHsBLZ_Lgbpoj6VoDc1pCzp5hABOJVZGo_pr0ciJ6jHa0q_gXjBjQi_3rhRAZrfa9oWUq7OiLtpWD6pttisOK4sdKh8kU_cUmyUc_7j66suJEQV60L2GsQ9jtuiy2IldNs8ec0JmpfcCauqgFIBPglSu5IK0bydSrutkbEfg4J2SCossS3hijMKzw3MWlxRXnNZf7vHYoOzpijkKqazPVm7oW2Vqbx6LlfbiZpyG3RkzenPRxwja1LE26i74AVnpIPbczED1YU6tk0s7Ke1Gdre0Rlb3TGwP6ncFSf1OUjcU2M29vb9XmtEZNLxZn8tvJil3y8qi_uTmlQa1dKY0H2WnZ3rHwHmX3vGzHt8He2Ib_Kkkql075vyoppbZyNW-aqAPBFR5Ck3grrTuVSJ3gwDjfnVDF2I96RiGrpbfpmyRoOuyih0UYPQH461ID92V2hhLaZCTKOXQ2orVT-ZEyWmQLBgmwIYr5nrhajJdq-RNKVb8dnOePEYonMwpGXR6UTyPv5xkcz1UWuvFNcOMmczWyAZv7YolDnQ_cTJg-5KzB2reebaSfbToDNfWxugqV6yWjkvVz&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "limon_kahvaltı_evi_643d965923812f5e5b436922b1438069.jpg",
          "width": 1920,
          "height": 1080,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/107631732928165551324\">Uriel Pinsonneault</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0288889,
        "longitude": 28.98,
        "name": "Probador Colectiva",
        "description": "This seems to be the center of fourth-wave coffee in Istanbul",
        "place_id": "ChIJsVPwHN-5yhQR3VzxCEr3lt4",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJsVPwHN-5yhQR3VzxCEr3lt4",
        "place_name": "Probador Colectiva",
        "formatted_address": "Firuzağa, Kadiriler Ykş. No:69, 34425 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "69",
            "short_name": "69",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Kadiriler Yokuşu",
            "short_name": "Kadiriler Ykş.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34425",
            "short_name": "34425",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.probadorcolectiva.com/",
        "phone": null,
        "rating": 4.4,
        "rating_count": 135,
        "price_level": null,
        "categories": [
          "point_of_interest",
          "establishment",
          "cafe"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 9:00 AM – 6:00 PM",
          "Wednesday: Closed",
          "Thursday: 9:00 AM – 6:00 PM",
          "Friday: 9:00 AM – 6:00 PM",
          "Saturday: 9:00 AM – 6:00 PM",
          "Sunday: 9:30 AM – 6:30 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcI70D-WJkelz2PwzjQP1EP630VZ9T1eWwcbj0I0h5GwNmdOyWgUgylTHfnWE1CozAOnESMeLwW0d7TB-fzX1R84Y89o9xzOq9trAEjtVXpSqYCziGtRLRrlu-bqqKURWqaV8of0suWFkiN-ayTKS9aGjv4qfiRmbkPUfonj5Rq42Ie3GK6B1FN6tT4U_j7eXksY5GgWrKJ1V-eWvt2XJB7uH2qbiaMUJolK8uBiHlOx56A_813ovkiYt57kp47zEiozJODIT3fJ3d_hi0BIldwgJd8NWOU5M7BTVFzr5WNAV9B55sQL8AfD13JTotgBR0EPg0F8jTFIk8UlYxgsOCDADKgBa6XQ_LWRiljheWW5VFeQbrU5wN7042xvmkQo6jbMx0X6HIC8ZbJLUn5OemEHy1xvP5VX6_hObqI6GRMNvY5O-yru58-2t2z7M-uh4UKEA01ayD-MIJQVkdNRdeWNmLPY_dwoKeAvMo4Y9gyyJDADaDxTlkwptijDeA8QlRvAYSgnuHKh96-3ASrZqVouaE-c1Iz7fr8kzyxKwxE3eNxNRNM5M8cK5WDJPItzJyr1LSuV2eY-EKuw8qUAoGovPI50_waBvp2fQAVqHBRcc0vFGhS-___yptYqynfCzG1Izg&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "probador_colectiva_36298c00eb0a6bceacb009bdeb16718c.jpg",
          "width": 4032,
          "height": 3024,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/117500704043253948301\">Güngör DOĞANAY</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0307661,
        "longitude": 28.978950899999997,
        "name": "Yaşam Antik The Old Curiosity Shop",
        "description": "You don't need to go to this particular antique shop, just pushing you towards the streets with lots of cute shops.",
        "place_id": "ChIJaYw1Y3S3yhQRaS7_RUgGSrA",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJaYw1Y3S3yhQRaS7_RUgGSrA",
        "place_name": "Yaşam Antik The Old Curiosity Shop",
        "formatted_address": "Firuzağa, Yeni Çarşı Cd. No:47, 34433 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:47",
            "short_name": "No:47",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Yeni Çarşı Caddesi",
            "short_name": "Yeni Çarşı Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34433",
            "short_name": "34433",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": null,
        "phone": "0532 454 43 38",
        "rating": 4.9,
        "rating_count": 49,
        "price_level": null,
        "categories": [
          "point_of_interest",
          "store",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 9:00 AM – 8:00 PM",
          "Tuesday: 9:00 AM – 8:00 PM",
          "Wednesday: 9:00 AM – 8:00 PM",
          "Thursday: 9:00 AM – 8:00 PM",
          "Friday: 9:00 AM – 8:00 PM",
          "Saturday: 9:00 AM – 8:00 PM",
          "Sunday: 9:00 AM – 8:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcJ_KG2IWiw2aLs-ZTV8rJn13B2H2_pVerSaOoLrJj15So1tHKOtzA4v2iCcWxBiX1KKvQKhD0-GOUt9RPbcF2f3pMZMky6Au9kkgxFpidSJjC8sYeZNOA81PGUYexHkf0y2S4qOdF4mzKzvlnFFrKrcy7viVSw4bYnWKVYIkulxWdJt20b1Lfl6Mvzzfqz9GtJGF3OBi2FbPB_QH8hdlB_CFl3vrCTFpqRzFkeDqPXzSRZ6BtsKNl3DG_ygpUqpcvOF8Vh_W3aThFbmYMbrQdjGFtiTxQBbTkNmWsL6zE8V0m0ztvbSuw-o20NT3VJv7raW65P3cSvNLfcxB2ZYxHkPGhc6tfBy8rt4JpYR5BVntXlw6CGGXibtpVp2s656Y2QDHu-SEoFg2Nzt5ETAd8MLZLd0hLd3M0GvvbXh3_wl9-dtedQ_vUyBqDPDLTYaY3q5SZLwj9KAaVcP6w3pp5ElLYIMwpcEVWvlVH-hfoPWFJzx0x7Zgwn6J9yfKhVDxBm3bcSKE8775uCY3lVYpweCqJYB4HHHLmvH13SKB8XECMKGBi5aBTP8vW51EkfS632vS7XeF8QoDM2Aj12bqXVLthFVneqjnOmtvW8oVYthqnc5k2qIDEP29ebVY0Ad81Cxmg&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "yaşam_antik_the_old_curiosity_shop_7998dc244620acfacb3c87b2cf0d59e9.jpg",
          "width": 3024,
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/108375647318920572468\">Cinzia Prosdocimo</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.032955,
        "longitude": 28.981351,
        "name": "Kale Antik",
        "highly_recommended": true,
        "description": "There's a lot of great antique stores on this street.",
        "place_id": "ChIJpZTzeGG3yhQRb21jzhEL6hY",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJpZTzeGG3yhQRb21jzhEL6hY",
        "place_name": "The Works",
        "formatted_address": "Kuloğlu, Faik Paşa Cd. No:6 D:1, 34433 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "D:1",
            "short_name": "D:1",
            "types": [
              "subpremise"
            ]
          },
          {
            "long_name": "No:6",
            "short_name": "No:6",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Faik Paşa Caddesi",
            "short_name": "Faik Paşa Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Kuloğlu",
            "short_name": "Kuloğlu",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34433",
            "short_name": "34433",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": null,
        "phone": "(0212) 252 25 27",
        "rating": 4,
        "rating_count": 1,
        "price_level": null,
        "categories": [
          "home_goods_store",
          "point_of_interest",
          "store",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 10:00 AM – 8:00 PM",
          "Tuesday: 10:00 AM – 8:00 PM",
          "Wednesday: 10:00 AM – 8:00 PM",
          "Thursday: 10:00 AM – 8:00 PM",
          "Friday: 10:00 AM – 8:00 PM",
          "Saturday: 10:00 AM – 8:00 PM",
          "Sunday: 12:00 – 6:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKuj05LBeuBbYUyepIE0paxo7og4NE6ROat6Bcg6UPXJigN-JcnOw5V0JKUrRYYqJOn6hnm64O3KokNWoRrgWa8lJp4GdILZtMI3IHaTf4_5pT2h6-FEyuYg-HbnpQ2FRqXwKmHZG1Uscg0O3HdblCfG24ZCU3BLvADV4yYW_1AkQIRDUxOiFoWsS2DolKjBjaGePmPMxdgZNrK6ZxEmHcQRlTb3Ds3LDXUSP9qyb3RsJgEHtIYYjhhrB6PkWa3vYDArAIXZyPLQixhzKC1lm4zULBAxJnS90ESrQ63ArUbEG6LjfRRb1FhaF6jaeCy-ew6nVAt-gAH5YEaWDsVWrScTqftqXym-kMynVBxfw0wh4kvtHESR6iW0TCjsEx1NtgMvedGM9zp8mbJnnmhsMAHm-ZkYV7n9oladD82tCs4a5v-ehfQlpYGERBSYCsYw8sWdppMaoubLy76_vluCZCOptGx204Lf5FpJ0jSuAslY6ZbXFXSuz15iX0p3d7ChOkcc3FkTfhNrNInUJiIhWHjD9W3Ba23demAcscbA4OZCw5YFKk_IVMebqkYQXtJy4MHTZk6AcMNtBGCm8J27VQHUL-HdFdzTtMdwW0c8s_6r8b9f4Gb4S_sqm3HGb9dmfrJhA&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "the_works_8c71c7faab56c8bcd36299fc7ee5bfe2.jpg",
          "width": 3024,
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/106839300071851284871\">Ken Lönnström</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.030848999999996,
        "longitude": 28.979854,
        "highly_recommended": true,
        "name": "The Museum of Innocence",
        "description": "This museum is incredibly David-coded.\n\nThe museum exists both in fiction - the book Museum of Innocence by Orhan Pamuk, and now in real life. It blurs the line between treating the book's narrative as fact or fiction and Orhan's role in it. It's also entirely in the wonderkamer / assemblage / vitrine style I love so much.",
        "place_id": "ChIJeVQDXt-5yhQRwVR-geMJ_-s",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJeVQDXt-5yhQRwVR-geMJ_-s",
        "place_name": "The Museum of Innocence",
        "formatted_address": "Çukurcuma Caddesi, Firuzağa, Dalgıç Çk. No:2, 34425 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:2",
            "short_name": "No:2",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Dalgıç Çıkmazı",
            "short_name": "Dalgıç Çk.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34425",
            "short_name": "34425",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.masumiyetmuzesi.org/",
        "phone": "(0212) 252 97 38",
        "rating": 4.6,
        "rating_count": 2845,
        "price_level": null,
        "categories": [
          "tourist_attraction",
          "book_store",
          "museum",
          "store",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 10:00 AM – 6:00 PM",
          "Tuesday: 10:00 AM – 6:00 PM",
          "Wednesday: 10:00 AM – 6:00 PM",
          "Thursday: 10:00 AM – 6:00 PM",
          "Friday: 10:00 AM – 6:00 PM",
          "Saturday: 10:00 AM – 6:00 PM",
          "Sunday: Closed"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKBIe8uSfhN-8E8UwaB809LJw4KVwTORVwcH_-DetW2PTZa6YzIWiMly7R_HueRcaBZh62cHvB105ol7P5AfUyxh7O3jVo5wOrd3JApiNJSWM9U8cIEh7q8Uv4BCDbgKavENDaQdjbZqISfzUuTyTMTD-weO7Y-eWyOrKEGyVwdIyq6Hl3RvcXF4DO2aBtLN9DNuTZM7cEEqCF3YbtrnlorVzAlPS1N3400DLX4HUcuwcYLFX8MogTR7eHiq30vnkMnxZvPpyxBr370S09nNVUzJBNnqzeC1yJbZ-VeT5StPkYOzweE-vDupR47nohpV0-fUdH_Jb0qb2Ecpdy6QVBdtCUyIPXTn3rPxy-od7JLnmr7TBOQ29JakfKhxdYhkq38OoUqKB4j_cjGu1wv9ksrL3VG72Y_Ligy1uxFm4xSlf9ofmSda-ZsbdfiyEAR19XW1-sft658X0yQ8akHOlr_PxYln010mbQ3F1rc267Fsvliy7Qh4BnsUp-RGs-JqsJAE_9E0h6zJZf7JrjqZnJvtJOxuN-T1DSxJm6vB9t3ss2ZCieZ0UoqGx9NNHY1nPVsmd1y7eSjozYrX-SIfORhCsJVbodMXpTrexAsGHXsNQb-mE6bBgcLh87gLTs4HPoleQ&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "the_museum_of_innocence_50bd63f21e62c5e56218d218e66047ce.jpg",
          "width": 1200,
          "height": 1200,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101385872635503569540\">Cemil Soyluz</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0337874,
        "longitude": 28.9779527,
        "name": "İstiklal Cd.",
        "description": "A wide boulevard to stroll down for shops, restaurants and LIFE.",
        "place_id": "ChIJ93xst2G3yhQRAfesfO52mtU",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJ93xst2G3yhQRAfesfO52mtU",
        "place_name": "İstiklal Caddesi",
        "formatted_address": "İstiklal Cd., Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "İstiklal Caddesi",
            "short_name": "İstiklal Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          }
        ],
        "website": null,
        "phone": null,
        "rating": 4.6,
        "rating_count": 4542,
        "price_level": null,
        "categories": [
          "route",
          "store"
  
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcKADTdv53ePj4aW6U63YKimUwJq0oMuYec_uqmcXJOpEJYMqSa22aLKcU1OTeu3fwtqGB1yZzDe7aFemzBryC5L-8LB54gHEgc2r0pd9E9y7eke1eEU35EJ8vKLAAidgcANwzcDPg7-4VsG_d7_9y-_l7RZP6XM5g3ZmPZxhMi7YDtGaYRHAKjSJxRnhWa03aSnN9LWW7-11JsaKpy8G6oBtaEsVbQAlF_IYM8M2VvQm1IGHiZuTZaxjoUgC9FulNsbUWKILT9U13FxkqpM4J7DY9YBeemQCcLGXeQRLFbk2HB-fYslT0HTlq0vh8xjw2SKdBTbHjYlQJX399vA0ihYVIkGrqnrG6a8sbEAroMZHSlYqdtqbNWZqzC5yUvQZf1RerBwDvRWIs40Wqlc-8Ox5KLHJ-xgtc79MqXc-6I5AyYc8rjwVbs2Ya-u959tJmryU4MTzM-weiJLUgERA85ccu5u-X1F29Ag2-J_mNgDowbag5ZjU1VwRBb7CNPnKG5qxNyy8eWl49O3ekl5f9PWJq60S2xue17lMkecan16JHiEhmoachP8g5Ao2bGP1_1GJgsDR7-lPnDgRatkYfPJYkdvovtpfZgGDh13bKYZPWhCoRQMYJWYGDB1kmDWnxuw8SQ1&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "i̇stiklal_caddesi_5acc979a660c7f4e7955fa2b8a714c47.jpg",
          "width": 1908,
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/117372950316860755535\">Ata Pank</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.0407461,
        "longitude": 28.9786765,
        "name": "Arter",
        "description": "Somewhat out of the way, beautiful very contemporary Turkish art museum funded by the only good billionaire in the world - the Koç family who is single-handedly trying to keep Turkey from becoming entirely conservative fascist.",
        "place_id": "ChIJByq0j-C5yhQRiR126Z5YBAo",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJByq0j-C5yhQRiR126Z5YBAo",
        "place_name": "Arter",
        "formatted_address": "Yenişehir, Irmak Cd. No:13, 34435 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:13",
            "short_name": "No:13",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Irmak Caddesi",
            "short_name": "Irmak Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Yenişehir",
            "short_name": "Yenişehir",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34435",
            "short_name": "34435",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.arter.org.tr/",
        "phone": "(0212) 708 58 00",
        "rating": 4.6,
        "rating_count": 2806,
        "price_level": null,
        "categories": [
          "museum",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: 11:00 AM – 7:00 PM",
          "Wednesday: 11:00 AM – 7:00 PM",
          "Thursday: 11:00 AM – 8:00 PM",
          "Friday: 11:00 AM – 7:00 PM",
          "Saturday: 11:00 AM – 7:00 PM",
          "Sunday: 11:00 AM – 7:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcIEqSK948DHhh4MkbQ4XME65FLyklhyI1Mi1mRRyFOoVAmvi6aGkmUF32GaY-fAH5zO1farTWVTGmshK4wLDBkbXVV16cyb0fV4hGhzH908KloQvVxgbtP0sh7ymQzJwY7O-ApIYy9fKRUxmRXMu2eI_Bnh4UWWpFVNLTDSYYX4hZnlyRIK7wBAn103uVU2w0N42JcevtS_GQ9de-Ybb5V-JjtCcYAl59eeRuX2f7g89zEMdZK3DBEQa-D_-xEtEIIVr8MHDH5EKpIbKxBAYfGit1P7NX5p86SZuyxb_KV0VrpwCLDvRIXXp34in8MQa9I_eLx_nhw&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "arter_e1493aeb41027badbe122eba544ba941.jpg",
          "width": 4000,
          "height": 2880,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/109470751475090825239\">Arter</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.031773,
        "longitude": 28.9793518,
        "name": "Tavern",
        "description": "Another cool looking music & cocktail bar https://www.instagram.com/tavern____/?hl=en",
        "place_id": "ChIJp0-LzmG3yhQRVsl77eroS1w",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJp0-LzmG3yhQRVsl77eroS1w",
        "place_name": "Tavern",
        "formatted_address": "A, Firuzağa, Hayriye Cd. No:16/A, 34425 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "A",
            "short_name": "A",
            "types": [
              "point_of_interest",
              "establishment"
            ]
          },
          {
            "long_name": "No:16/A",
            "short_name": "No:16/A",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Hayriye Caddesi",
            "short_name": "Hayriye Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34425",
            "short_name": "34425",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.tavern.fyi/",
        "phone": "0544 252 00 62",
        "rating": 4.2,
        "rating_count": 250,
        "price_level": null,
        "categories": [
          "bar",
          "point_of_interest",
          "establishment"
        ],
        "open_now": false,
        "opening_hours": [
          "Monday: 6:00 PM – 2:00 AM",
          "Tuesday: 6:00 PM – 2:00 AM",
          "Wednesday: 6:00 PM – 2:00 AM",
          "Thursday: 6:00 PM – 2:00 AM",
          "Friday: 6:00 PM – 2:00 AM",
          "Saturday: 6:00 PM – 2:00 AM",
          "Sunday: 4:00 PM – 12:00 AM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcLqVkKuAm9nB-IBuhH8nh9VjvnTxa1aLe0cIHE86oDQyYfNEuMI089N3H7yYSJfLrxhTkLEgf77fSM8lSLMyY2oLmbBJCXdRjdsIgzuza0j7Tw1xPJBnU044aS-cGr2lws0vBZpRMKxIOmnOAgC2UsSs3mpBZfN_TTrfYHx-GDikT2zQIwtd7ILKnGHySmshLtgjtv-U77niDgR7czPf1oDEO4QjhRAJVfcI0Wc1AXa32-6unOrRn-przZPMNPCQeiGfGZ83IUkVFjw28_xRPt8cg8xdU7GftA7g3-7Bbju1w6TUxN9ztdeqz01_Ur7MIBDEa4qWHs&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "tavern_bf9bd2286be1c562ce21c442495cfcc1.jpg",
          "width": 3345,
          "height": 5472,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/102767881472039428646\">Tavern</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.031889799999995,
        "longitude": 28.9796721,
        "name": "NOH Radio Bar",
        "description": "Sadly haven't made it here, but seems like a hip place for DJ sets late at night - https://www.instagram.com/nohradio/?hl=en - also next to Tavern",
        "place_id": "ChIJl5AdJZu3yhQRxdkf7c1iYxM",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJl5AdJZu3yhQRxdkf7c1iYxM",
        "place_name": "NOH Radio Bar",
        "formatted_address": "Firuzağa, Hayriye Cd. No:18, 34425 Beyoğlu/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:18",
            "short_name": "No:18",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Hayriye Caddesi",
            "short_name": "Hayriye Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Firuzağa",
            "short_name": "Firuzağa",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Beyoğlu",
            "short_name": "Beyoğlu",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34425",
            "short_name": "34425",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "https://www.instagram.com/nohradio/",
        "phone": null,
        "rating": 4.1,
        "rating_count": 380,
        "price_level": null,
        "categories": [
          "bar",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: 12:00 PM – 2:30 AM",
          "Tuesday: 12:00 PM – 2:30 AM",
          "Wednesday: 12:00 PM – 2:30 AM",
          "Thursday: 12:00 PM – 2:30 AM",
          "Friday: 12:00 PM – 2:30 AM",
          "Saturday: 12:00 PM – 2:30 AM",
          "Sunday: 12:00 PM – 2:30 AM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcLqki-9ZiehrLr6usGctyfJqmpQPkltnUcwjFDksGO7muCBtKLPbSPWievWPs3w7BWvfxak_9WYryZgFFzIi0Q8aTwEpoc1L24iBP2uR3YEbXIF6s32Ex4HAdC1X7ARZ44q3TGo__LlXb7NPkPfK-d5URrzepG6bg9dWJr_1XTKmKowABMBb_JjoCP517WaAiQiq8BgGVoA6uUCgeHdxlk47dfY3pweLhzkJavEePg3DWuPpE8UUG8WrB-MZagbU_zyYYK0ou3C-sUd07-wBa72ZxrCQ4pDJQMeyytbo-pkcKRzbWsmzVpeA6DNn-lnEcweJwX2OCTUJathYMT7nsFeC4tbzNYszxXMoIKgELJo8uDz-px52O9l8xTek1u1KO5aZN49zuIwhROK6nyjU49iZl46oatiShIj9hb_M-XlgzwnqP1ZgvqxL6vh-LGEgrxTDgsq4CcOS7RMdn8LNmnaNP72w_ACsSQ1fDQ_dGbpEJGgpsAh_Lq-0RZKXHP-idoq9J_ngt4sISFdZNB_xOmfNf1B2peaX-jusZyrL2p-qkuj5VtKndRvbTfRJnquhV1sPONQjUQwQpmMAOdrxXz0feDFKyiqDzShSHgDtiEQPAgH98yevXBloCijIvgG5Su6-Q&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "noh_radio_bar_5db185cce3b4f442009f4bba22298f74.jpg",
          "width": 3024,
          "height": 4032,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/104560906896937637045\">LuxComp Mel</a>"
          ]
        },
        "photo_available": true
      },
      {
        "latitude": 41.089173699999996,
        "longitude": 29.056593399999997,
        "name": "Borusan Contemporary",
        "description": "Have been curious to see this gallery.",
        "place_id": "ChIJK7kTCwXKyhQRbgDz2evJJtY",
        "google_maps_link": "https://www.google.com/maps/place/?q=place_id:ChIJK7kTCwXKyhQRbgDz2evJJtY",
        "place_name": "Borusan Contemporary",
        "formatted_address": "Rumeli Hisarı, Balta Limanı Hisar Cd. No:5, 34470 Sarıyer/İstanbul, Türkiye",
        "address_components": [
          {
            "long_name": "No:5",
            "short_name": "No:5",
            "types": [
              "street_number"
            ]
          },
          {
            "long_name": "Balta Limanı Hisar Caddesi",
            "short_name": "Balta Limanı Hisar Cd.",
            "types": [
              "route"
            ]
          },
          {
            "long_name": "Rumeli Hisarı",
            "short_name": "Rumeli Hisarı",
            "types": [
              "administrative_area_level_4",
              "political"
            ]
          },
          {
            "long_name": "Sarıyer",
            "short_name": "Sarıyer",
            "types": [
              "administrative_area_level_2",
              "political"
            ]
          },
          {
            "long_name": "İstanbul",
            "short_name": "İstanbul",
            "types": [
              "administrative_area_level_1",
              "political"
            ]
          },
          {
            "long_name": "Türkiye",
            "short_name": "TR",
            "types": [
              "country",
              "political"
            ]
          },
          {
            "long_name": "34470",
            "short_name": "34470",
            "types": [
              "postal_code"
            ]
          }
        ],
        "website": "http://www.borusancontemporary.com/",
        "phone": "(0212) 393 52 00",
        "rating": 4.5,
        "rating_count": 747,
        "price_level": null,
        "categories": [
          "tourist_attraction",
          "cafe",
          "museum",
          "food",
          "point_of_interest",
          "establishment"
        ],
        "open_now": true,
        "opening_hours": [
          "Monday: Closed",
          "Tuesday: Closed",
          "Wednesday: Closed",
          "Thursday: Closed",
          "Friday: Closed",
          "Saturday: 10:00 AM – 6:00 PM",
          "Sunday: 10:00 AM – 6:00 PM"
        ],
        "photo": {
          "remote_url": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AeeoHcK3lZvSPyNPIpMTQvVxiFwpIDOv7PnOCCWBlxDEpnghtd4BXuuie-aNQWkGH9LUTavb2VjG0-PPs68qXWO8rqpdxwGDs_sODNMFYNepWEsJCKL3dPfMWK4MBUXExPYeHw-AmCocHVAXXkulR03WK__gQiINX_b1KtmfT5BHNtYV8XqJOE21JUrEVurBSlwu6iKHKH6eJUTdbMzbe3njwmC4TuPwyhdeTbjOV62H1-KXa6pcJbH6vsCKBYlTaaP4v9uHnBAAUBSBq1-7xfygumdOokg-Rctb_66ODxbeqWpqOqQrtuhTT-zxAOy0WIK6zWZ0cCerv7MZRU5PByxVgbmZdRppoa1G3yjprfWmTFguYzTUMQuyMP6a3LKS0gbn7gl8gMzibIhjAE38aI0yJO_cE5XR7FY6c2-8-_YlfBM1iKzrUWb_lbLMba7TYEblHy_K_Sc8vBn5UuGEeUnQJrfE5avMtPYxtIDrY7cdtuLAoQVtr2XMAUSnNCMTiBSyBav_TyALFRTM77rjH8NMngg41zyEAoDoBfaLjB1rR6OCA5yUObq1oCZcYGe03gn59T0PW-Yqczvf_V8a3FavrnZbsCsTB6IrQZhxLis1mJtGHM3I-xo9AiSt6DGxH9tf&key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64",
          "local_path": "borusan_contemporary_44fd0d1edd120de59d0c45aa6e1d842b.jpg",
          "width": 3000,
          "height": 4000,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/100425115003179178260\">Meysam Tabrizi</a>"
          ]
        },
        "photo_available": true
      },
    ],
    "count": 34,
    "source": "European_Side.gpx",
    "image_directory": "place_images"
  }