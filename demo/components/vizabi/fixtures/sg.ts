/* tslint:disable */
export const query = {
  "state": {
    "time": {
      "start": "1990",
      "end": "2015",
      "value": "2015",
      "step": 1
    },
    "entities": {
      "dim": "geo",
      "show": {
        "geo.is--country": true
      }
    },
    "marker": {
      "space": [
        "entities",
        "time"
      ],
      "type": "geometry",
      "shape": "circle",
      "label": {
        "use": "property",
        "which": "geo.name"
      },
      "size_label": {
        "use": "constant"
      },
      "axis_y": {
        "use": "indicator",
        "which": "life_expectancy_years",
        "scaleType": "linear",
        "allow": {
          "scales": [
            "linear",
            "log"
          ]
        }
      },
      "axis_x": {
        "use": "indicator",
        "which": "income_per_person_gdppercapita_ppp_inflation_adjusted",
        "scaleType": "log",
        "allow": {
          "scales": [
            "linear",
            "log",
            "time"
          ]
        }
      },
      "color": {
        "use": "property",
        "palette": {
          "asia": [
            "#ff5872",
            "#ff5178",
            "#ff658a",
            "#da0025",
            "#fa4e73",
            "#b2043a"
          ],
          "europe": [
            "#ffe700",
            "#fbdd00",
            "#fff400",
            "#fbaf09",
            "#ffe700",
            "#b17f4a"
          ],
          "americas": [
            "#7feb00",
            "#5de200",
            "#81f201",
            "#00b900",
            "#b5ea32",
            "#008d36"
          ],
          "africa": [
            "#00d5e9",
            "#00c8ec",
            "#00e1ec",
            "#0098df",
            "#77dff7",
            "#0586c6"
          ],
          "_default": [
            "#ffb600",
            "#ffaa14",
            "#ffc500",
            "#fb6d19",
            "#ffb600",
            "#9b4838"
          ]
        },
        "which": "geo.world_4region",
        "scaleType": "ordinal",
        "allow": {
          "names": [
            "!geo.name"
          ]
        }
      },
      "size": {
        "use": "indicator",
        "which": "population_total",
        "scaleType": "linear",
        "allow": {
          "scales": [
            "linear"
          ]
        },
        "extent": [
          0.04,
          0.9
        ]
      }
    }
  },
  "data": {
    "reader": "ddf1-csv-ext",
    "splash": false,
    "path": "./ddf",
    "ddfPath": "./ddf"
  },
  "language": {
    "id": "en",
    "strings": {}
  },
  "ui": {
    "buttons": [
      "colors",
      "find",
      "size",
      "trails",
      "lock",
      "moreoptions",
      "fullscreen"
    ],
    "buttons_expand": [],
    "dialogs": {
      "popup": [
        "colors",
        "find",
        "size",
        "zoom",
        "moreoptions"
      ],
      "sidebar": [
        "colors",
        "find",
        "size",
        "zoom"
      ],
      "moreoptions": [
        "opacity",
        "speed",
        "axes",
        "size",
        "colors",
        "label",
        "zoom",
        "presentation",
        "about"
      ]
    },
    "chart": {
      "whenHovering": {
        "showProjectionLineX": true,
        "showProjectionLineY": true,
        "higlightValueX": true,
        "higlightValueY": true
      },
      "labels": {
        "dragging": true,
        "removeLabelBox": false
      },
      "trails": true,
      "lockNonSelected": 0,
      "adaptMinMaxZoom": false
    },
    "presentation": false,
    "cursorMode": "arrow",
    "noZoomOnScrolling": true
  }
};

export const metadata = {
  "indicatorsDB": {
    "geo": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.geographic_regions": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.income_groups": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.landlocked": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.g77_and_oecd_countries": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.geographic_regions_in_4_colors": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.main_religion_2008": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.country": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.world_4region": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "geo.global": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "age": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "latitude": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "longitude": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "children_per_woman_total_fertility": {
      "domain": [
        0.84,
        9.22
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1541",
        "2099"
      ]
    },
    "co2_emissions_tonnes_per_person": {
      "domain": [
        -0.68,
        45.96
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2011"
      ]
    },
    "income_per_person_gdppercapita_ppp_inflation_adjusted": {
      "domain": [
        142,
        182700
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2015"
      ]
    },
    "child_mortality_0_5_year_olds_dying_per_1000_born": {
      "domain": [
        1.9,
        756.29
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1751",
        "2015"
      ]
    },
    "life_expectancy_years": {
      "domain": [
        1,
        84.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2015"
      ]
    },
    "aid_given_2007_us": {
      "domain": [
        1090000,
        19850000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1967",
        "2007"
      ]
    },
    "aid_given_per_person_2007_us": {
      "domain": [
        0.19,
        816.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2007"
      ]
    },
    "aid_given_percent_of_gni": {
      "domain": [
        0,
        1.36
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2008"
      ]
    },
    "water_and_sanitation_aid_given_percent_of_aid": {
      "domain": [
        0,
        33.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1968",
        "2014"
      ]
    },
    "economical_infrastructure_aid_given_percent_of_aid": {
      "domain": [
        0,
        93.82
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1967",
        "2014"
      ]
    },
    "production_sector_aid_given_percent_of_aid": {
      "domain": [
        0.15,
        75.81
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1967",
        "2014"
      ]
    },
    "multisector_cross_cutting_aid_given_percent_of_aid": {
      "domain": [
        0,
        51.64
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1968",
        "2014"
      ]
    },
    "education_aid_given_percent_of_aid": {
      "domain": [
        0.39,
        82.25
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1971",
        "2014"
      ]
    },
    "health_aid_given_percent_of_aid": {
      "domain": [
        0.03,
        39.77
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1971",
        "2014"
      ]
    },
    "population_policies_aid_given_percent_of_aid": {
      "domain": [
        0,
        24.05
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1984",
        "2007"
      ]
    },
    "government_and_society_aid_given_percent_of_aid": {
      "domain": [
        0.01,
        65.24
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1971",
        "2014"
      ]
    },
    "other_social_services_aid_given_percent_of_aid": {
      "domain": [
        0,
        50.59
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1967",
        "2014"
      ]
    },
    "aid_received_total_us_inflation_adjusted": {
      "domain": [
        -1210000000,
        149499000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2013"
      ]
    },
    "aid_received_per_person_current_us": {
      "domain": [
        -210.38,
        12013.69
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2013"
      ]
    },
    "aid_received_percent_of_gni": {
      "domain": [
        -572.04,
        3755.82
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2013"
      ]
    },
    "dollar_billionaires_per_million_people": {
      "domain": [
        0,
        30.86
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2004",
        "2007"
      ]
    },
    "average_age_of_dollar_billionaires_years": {
      "domain": [
        0,
        79
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2004",
        "2007"
      ]
    },
    "total_number_of_dollar_billionaires": {
      "domain": [
        0,
        415
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2004",
        "2007"
      ]
    },
    "debt_to_foreigners_by_public_and_private_percent_of_gni": {
      "domain": [
        0,
        1380.77
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "total_reserves_percent_of_debt_to_foreigners": {
      "domain": [
        -0.17,
        6517.15
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1971",
        "2014"
      ]
    },
    "total_gdp_us_inflation_adjusted": {
      "domain": [
        16044923.91,
        58148361698277.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "gdppercapita_us_inflation_adjusted": {
      "domain": [
        69.58,
        158602.52
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "gdpperemployee_us_inflation_adjusted": {
      "domain": [
        536,
        64150
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2006"
      ]
    },
    "gdpperworking_hour_us_inflation_adjusted": {
      "domain": [
        0.83,
        39.95
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2015"
      ]
    },
    "gdppercapita_growth_over_next_10_years": {
      "domain": [
        -17.08,
        43.93
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2001"
      ]
    },
    "gdppercapita_growth_percent_per_year": {
      "domain": [
        -65,
        182.36
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1961",
        "2014"
      ]
    },
    "total_gni_ppp_current_international": {
      "domain": [
        39600867.53,
        108411959944918
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2014"
      ]
    },
    "gnipercapita_constant_2000_us": {
      "domain": [
        77.66,
        126599.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "gnipercapita_atlasmethod_current_us": {
      "domain": [
        40,
        186710
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1962",
        "2014"
      ]
    },
    "gnipercapita_ppp_current_international": {
      "domain": [
        230,
        134420
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2014"
      ]
    },
    "inequality_index_gini": {
      "domain": [
        16.23,
        99.91
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "income_share_of_richest_10percent": {
      "domain": [
        17.14,
        61.49
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "income_share_of_richest_20percent": {
      "domain": [
        29.71,
        72.34
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "income_share_of_2nd_richest_20percent": {
      "domain": [
        11.75,
        28.08
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "income_share_of_middle_20percent": {
      "domain": [
        7.51,
        20.05
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "income_share_of_2nd_poorest_20percent": {
      "domain": [
        3.38,
        16.58
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "income_share_of_poorest_20percent": {
      "domain": [
        0.26,
        13.37
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "income_share_of_poorest_10percent": {
      "domain": [
        0.02,
        6.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "inflation_annual_percent": {
      "domain": [
        -64.72,
        26765.86
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1961",
        "2014"
      ]
    },
    "central_bank_discount_rate_annual_percent": {
      "domain": [
        0,
        12880
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1948",
        "2006"
      ]
    },
    "investments_percent_of_gdp": {
      "domain": [
        -13.41,
        219.07
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "tax_revenue_percent_of_gdp": {
      "domain": [
        0.02,
        65.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2013"
      ]
    },
    "foreign_direct_investment_net_inflows_percent_of_gdp": {
      "domain": [
        -82.89,
        466.56
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "foreign_direct_investment_net_outflows_percent_of_gdp": {
      "domain": [
        -158.48,
        776.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1975",
        "2014"
      ]
    },
    "patent_applications_total": {
      "domain": [
        1,
        496600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1984",
        "2002"
      ]
    },
    "patents_granted_total": {
      "domain": [
        1,
        215100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1984",
        "2002"
      ]
    },
    "patents_in_force_total": {
      "domain": [
        1,
        1474000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1984",
        "2002"
      ]
    },
    "poverty_percent_people_below_2_a_day": {
      "domain": [
        0,
        99.14
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "rural_poverty_percent_rural_people_below_national_rural": {
      "domain": [
        0.5,
        83.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1976",
        "2015"
      ]
    },
    "urban_poverty_percent_urban_people_below_national_urban": {
      "domain": [
        0.3,
        67
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1976",
        "2015"
      ]
    },
    "extreme_poverty_percent_people_below_125_a_day": {
      "domain": [
        0,
        94.64
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1978",
        "2013"
      ]
    },
    "agriculture_percent_of_gdp": {
      "domain": [
        0,
        94.85
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "industry_percent_of_gdp": {
      "domain": [
        2.53,
        96.74
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "services_percent_of_gdp": {
      "domain": [
        2.43,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "exports_percent_of_gdp": {
      "domain": [
        0.01,
        230.27
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "imports_percent_of_gdp": {
      "domain": [
        0,
        424.82
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "arms_exports_us_inflation_adjusted": {
      "domain": [
        0,
        27614000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "arms_imports_us_inflation_adjusted": {
      "domain": [
        0,
        41521000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "total_gdp_ppp_inflation_adjusted": {
      "domain": [
        1051000,
        16390000000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2013"
      ]
    },
    "high_technology_exports_percent_of_manufactured_exports": {
      "domain": [
        0,
        87.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1988",
        "2013"
      ]
    },
    "merchandise_trade_percent_of_gdp": {
      "domain": [
        4.53,
        986.65
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "trade_balance_us_not_inflation_adjusted": {
      "domain": [
        -770947000000,
        382942979134.68
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "trade_balance_percent_of_gdp": {
      "domain": [
        -344.75,
        81.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "hourly_compensation_us": {
      "domain": [
        0.95,
        65.86
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1996",
        "2013"
      ]
    },
    "working_hours_per_week": {
      "domain": [
        26.21,
        56.75
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "market_value_of_listed_companies_percent_of_gdp": {
      "domain": [
        0.01,
        101894.59
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1975",
        "2014"
      ]
    },
    "military_expenditure_percent_of_gdp": {
      "domain": [
        0,
        117.39
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1988",
        "2014"
      ]
    },
    "math_achievement_4th_grade": {
      "domain": [
        223.68,
        606.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2011"
      ]
    },
    "math_achievement_8th_grade": {
      "domain": [
        263.61,
        612.79
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2011"
      ]
    },
    "ratio_of_girls_to_boys_in_primary_and_secondary_education_perc": {
      "domain": [
        0,
        1.48
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "ratio_of_young_literate_females_to_males_percent_ages_15_24": {
      "domain": [
        0.24,
        1.24
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1975",
        "2014"
      ]
    },
    "literacy_rate_adult_female_percent_of_females_ages_15_above": {
      "domain": [
        8.94,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1999",
        "2015"
      ]
    },
    "literacy_rate_adult_male_percent_of_males_ages_15_and_above": {
      "domain": [
        19.64,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1999",
        "2015"
      ]
    },
    "literacy_rate_adult_total_percent_of_people_ages_15_and_above": {
      "domain": [
        14.38,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1999",
        "2015"
      ]
    },
    "literacy_rate_youth_female_percent_of_females_ages_15_24": {
      "domain": [
        14.23,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1999",
        "2015"
      ]
    },
    "literacy_rate_youth_male_percent_of_males_ages_15_24": {
      "domain": [
        26.23,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1999",
        "2015"
      ]
    },
    "literacy_rate_youth_total_percent_of_people_ages_15_24": {
      "domain": [
        19.79,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1999",
        "2015"
      ]
    },
    "children_out_of_school_primary": {
      "domain": [
        0,
        130791512
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "children_out_of_school_primary_female": {
      "domain": [
        10,
        81594936
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "children_out_of_school_primary_male": {
      "domain": [
        10,
        49328620
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "primary_completion_rate_total_percent_of_relevant_age_group": {
      "domain": [
        1.52,
        193.26
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "primary_school_completion_percent_of_boys": {
      "domain": [
        2.3,
        190.73
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "primary_school_completion_percent_of_girls": {
      "domain": [
        0.72,
        195.94
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "expenditure_per_student_primary_percent_of_gdp_per_person": {
      "domain": [
        0,
        58.07
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1974",
        "2014"
      ]
    },
    "expenditure_per_student_secondary_percent_of_gdp_per_person": {
      "domain": [
        0,
        88.94
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1974",
        "2014"
      ]
    },
    "expenditure_per_student_tertiary_percent_of_gdp_per_person": {
      "domain": [
        0,
        1273.22
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1983",
        "2014"
      ]
    },
    "mean_years_in_school_women_25_years_and_older": {
      "domain": [
        0,
        14.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2009"
      ]
    },
    "mean_years_in_school_men_25_years_and_older": {
      "domain": [
        0.2,
        14.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2009"
      ]
    },
    "mean_years_in_school_women_25_to_34_years": {
      "domain": [
        0.1,
        15
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2009"
      ]
    },
    "mean_years_in_school_men_25_to_34_years": {
      "domain": [
        0.4,
        14.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2009"
      ]
    },
    "mean_years_in_school_women_of_reproductive_age_15_to_44": {
      "domain": [
        0.1,
        14.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2009"
      ]
    },
    "mean_years_in_school_women_percent_men_25_to_34_years": {
      "domain": [
        6.67,
        146.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2009"
      ]
    },
    "energy_use_total": {
      "domain": [
        7113,
        2417000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2011"
      ]
    },
    "energy_use_per_person": {
      "domain": [
        9.72,
        22762.08
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2013"
      ]
    },
    "energy_production_total": {
      "domain": [
        0,
        2085000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2010"
      ]
    },
    "energy_production_per_person": {
      "domain": [
        0,
        0.21
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2010"
      ]
    },
    "pump_price_for_gasoline_us_per_liter": {
      "domain": [
        0.01,
        3.33
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1991",
        "2014"
      ]
    },
    "coal_consumption_total": {
      "domain": [
        0,
        1962354660
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2014"
      ]
    },
    "coal_consumption_per_cap": {
      "domain": [
        0,
        3.94
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2011"
      ]
    },
    "electricity_use_per_person": {
      "domain": [
        5.8,
        53202.83
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2012"
      ]
    },
    "electricity_use_total": {
      "domain": [
        5.8,
        53202.83
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2012"
      ]
    },
    "residential_electricity_use_per_person": {
      "domain": [
        1.73,
        11150
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2008"
      ]
    },
    "residential_electricity_use_total": {
      "domain": [
        5001000,
        1392000000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2008"
      ]
    },
    "electricity_generation_total": {
      "domain": [
        3026000000,
        5649580000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1985",
        "2014"
      ]
    },
    "electricity_generation_per_person": {
      "domain": [
        75.76,
        54100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2008"
      ]
    },
    "hydro_power_generation_total": {
      "domain": [
        85.98,
        62100000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2011"
      ]
    },
    "hydro_power_generation_per_person": {
      "domain": [
        0,
        3.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2011"
      ]
    },
    "nuclear_power_generation_total": {
      "domain": [
        0,
        72140000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2011"
      ]
    },
    "nuclear_power_generation_per_person": {
      "domain": [
        0,
        0.77
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2011"
      ]
    },
    "natural_gas_production_total": {
      "domain": [
        0,
        668184879
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "natural_gas_production_per_person": {
      "domain": [
        0,
        74.26
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2008"
      ]
    },
    "natural_gas_proven_reserves_per_person": {
      "domain": [
        0.2,
        30170
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "natural_gas_proved_reserves_total": {
      "domain": [
        0,
        30618000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "oil_production_per_person": {
      "domain": [
        0,
        245.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2011"
      ]
    },
    "oil_production_total": {
      "domain": [
        0,
        569481000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2014"
      ]
    },
    "oil_proven_reserves_per_person": {
      "domain": [
        0.11,
        13800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "oil_proved_reserves_total": {
      "domain": [
        0,
        40694940000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "oil_consumption_total": {
      "domain": [
        0,
        939778499
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2014"
      ]
    },
    "oil_consumption_per_cap": {
      "domain": [
        0.01,
        12.23
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2010"
      ]
    },
    "drought_deaths_annual_number": {
      "domain": [
        2,
        3000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1900",
        "2015"
      ]
    },
    "earthquake_deaths_annual_number": {
      "domain": [
        1,
        242000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1901",
        "2015"
      ]
    },
    "epidemic_deaths_annual_number": {
      "domain": [
        1,
        2500000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1900",
        "2015"
      ]
    },
    "extreme_temperature_deaths_annual_number": {
      "domain": [
        1,
        55760
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1936",
        "2015"
      ]
    },
    "flood_deaths_annual_number": {
      "domain": [
        1,
        3700000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1900",
        "2015"
      ]
    },
    "storm_deaths_annual_number": {
      "domain": [
        1,
        300317
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1900",
        "2015"
      ]
    },
    "tsunami_deaths_annual_number": {
      "domain": [
        0,
        165700
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1979",
        "2007"
      ]
    },
    "plane_crash_deaths_annual_number": {
      "domain": [
        0,
        520
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2008"
      ]
    },
    "drought_affected_annual_number": {
      "domain": [
        380,
        300000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1910",
        "2015"
      ]
    },
    "earthquake_affected_annual_number": {
      "domain": [
        25,
        46655000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1907",
        "2015"
      ]
    },
    "epidemic_affected_annual_number": {
      "domain": [
        1,
        18000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1918",
        "2015"
      ]
    },
    "extreme_temperature_affected_annual_number": {
      "domain": [
        100,
        77000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1982",
        "2015"
      ]
    },
    "flood_affected_annual_number": {
      "domain": [
        30,
        225241300
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1915",
        "2015"
      ]
    },
    "storm_affected_annual_number": {
      "domain": [
        20,
        107402700
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1924",
        "2015"
      ]
    },
    "tsunami_affected_annual_number": {
      "domain": [
        0,
        1055000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1979",
        "2007"
      ]
    },
    "plane_crash_affected_annual_number": {
      "domain": [
        0,
        902
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2008"
      ]
    },
    "co2_intensity_of_economic_output_kg_co2_per_2005_ppp_of_gdp": {
      "domain": [
        0,
        2.23
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2011"
      ]
    },
    "cumulative_co2_emissions_tonnes": {
      "domain": [
        -26177000,
        30760343000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1785",
        "2009"
      ]
    },
    "sulfur_emissions_per_person_kg": {
      "domain": [
        0,
        4886
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1850",
        "2000"
      ]
    },
    "yearly_co2_emissions_tonnes": {
      "domain": [
        -38745,
        1127857
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1785",
        "2009"
      ]
    },
    "total_sulfur_emission_kilotonnes": {
      "domain": [
        0,
        14420
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1850",
        "2000"
      ]
    },
    "forest_land_total_area_ha": {
      "domain": [
        0,
        815135600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "9999"
      ]
    },
    "primary_forest_area_ha": {
      "domain": [
        0,
        273343000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "planted_forest_area_ha": {
      "domain": [
        0,
        78982200
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "wood_removal_cubic_meters": {
      "domain": [
        0,
        509319000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2011"
      ]
    },
    "forest_coverage_percent": {
      "domain": [
        0,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "biomass_stock_in_forest_tons": {
      "domain": [
        0,
        127387200000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "privately_owned_forest_land_percent": {
      "domain": [
        0,
        103.47
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2010"
      ]
    },
    "privately_owned_other_wooded_land_percent": {
      "domain": [
        0,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2005",
        "2005"
      ]
    },
    "forest_products_removal_total_dollar": {
      "domain": [
        12000,
        19030000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2005",
        "2005"
      ]
    },
    "forest_products_removal_per_ha_dollar": {
      "domain": [
        0,
        446678.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "9999"
      ]
    },
    "agricultural_land_percent_of_land_area": {
      "domain": [
        0.26,
        93.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1961",
        "2013"
      ]
    },
    "forest_area_sq_km": {
      "domain": [
        0,
        41190608
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "surface_area_sq_km": {
      "domain": [
        2,
        134327480.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1961",
        "2014"
      ]
    },
    "renewable_water_cu_meters_per_person": {
      "domain": [
        5.14,
        930997
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1962",
        "2014"
      ]
    },
    "internal_renewable_water_cu_meters_per_person": {
      "domain": [
        0,
        930997
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1962",
        "2014"
      ]
    },
    "water_withdrawal_cu_meters_per_person": {
      "domain": [
        7.05,
        11042
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1962",
        "2014"
      ]
    },
    "municipal_water_withdrawal_cu_meters_per_person": {
      "domain": [
        1.33,
        287.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1967",
        "2007"
      ]
    },
    "agricultural_water_withdrawal_percent_of_total": {
      "domain": [
        0,
        99.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2014"
      ]
    },
    "industrial_water_withdrawal_percent_of_total": {
      "domain": [
        0,
        96.22
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2014"
      ]
    },
    "municipal_water_withdrawal_percent_of_total": {
      "domain": [
        0.3,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1965",
        "2014"
      ]
    },
    "desalinated_water_produced_billion_cu_meters": {
      "domain": [
        0,
        1.33
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2013"
      ]
    },
    "total_water_withdrawal_billion_cu_meters": {
      "domain": [
        0,
        761
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1962",
        "2014"
      ]
    },
    "infant_mortality_rate_per_1000_births": {
      "domain": [
        1.2,
        420
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2008"
      ]
    },
    "underweight_children": {
      "domain": [
        0.5,
        64.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2008"
      ]
    },
    "all_causes_deaths_in_newborn_per_1000_births": {
      "domain": [
        0.92,
        60.65
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "birth_asphyxia_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        16.14
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "congenital_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        6.12
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "diarrhoeal_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        2.38
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "pneumonia_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        9.53
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "prematurity_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        18.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "sepsis_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        10.59
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "tetanus_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        5.23
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "other_deaths_in_newborn_per_1000_births": {
      "domain": [
        0,
        12.53
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "all_causes_deaths_in_newborn_total_deaths": {
      "domain": [
        5,
        1004000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "birth_asphyxia_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        189400
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "congenital_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        34280
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "diarrhoeal_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        34280
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "pneumonia_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        168000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "prematurity_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        240900
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "sepsis_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        121400
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "tetanus_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        11710
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "other_deaths_in_newborn_total_deaths": {
      "domain": [
        0,
        203800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "all_causes_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        1.03,
        195.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "diarrhoeal_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        69.55
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "hiv_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        40.15
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "injury_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        27.07
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "malaria_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        38.66
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "measles_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        13.05
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "meningitis_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        5.96
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "ncd_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0.53,
        12.02
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "pertussis_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        8.57
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "pneumonia_deaths_in_children_1_59_months_per_1000_births": {
      "domain": [
        0,
        57.32
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "other_infections_deaths_in_children_1_59_months_per_1000_birt": {
      "domain": [
        0.08,
        38.48
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "all_causes_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        4,
        826100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "diarrhoeal_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        203200
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "hiv_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        33150
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "injury_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        48910
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "malaria_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        217400
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "measles_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        81280
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "meningitis_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        29880
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "ncd_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        2,
        74200
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "pertussis_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        86090
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "pneumonia_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        0,
        203600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "other_infections_deaths_in_children_1_59_months_total_deaths": {
      "domain": [
        1,
        97800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2008"
      ]
    },
    "breast_cancer_new_cases_per_100000_women": {
      "domain": [
        3.9,
        101.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "cervical_cancer_new_cases_per_100000_women": {
      "domain": [
        2,
        87.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "colonandrectum_cancer_new_cases_per_100000_women": {
      "domain": [
        0.9,
        43.57
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "liver_cancer_new_cases_per_100000_women": {
      "domain": [
        0.2,
        57.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "lung_cancer_new_cases_per_100000_women": {
      "domain": [
        0.1,
        38.88
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "stomach_cancer_new_cases_per_100000_women": {
      "domain": [
        0.6,
        39.59
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "breast_cancer_number_of_new_female_cases": {
      "domain": [
        16,
        210000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "cervical_cancer_number_of_new_female_cases": {
      "domain": [
        5,
        132100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "colonandrectum_cancer_number_of_new_female_cases": {
      "domain": [
        1,
        80430
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "liver_cancer_number_of_new_female_cases": {
      "domain": [
        0,
        94940
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "lung_cancer_number_of_new_female_cases": {
      "domain": [
        0,
        126700
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "stomach_cancer_number_of_new_female_cases": {
      "domain": [
        3,
        128500
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "breast_cancer_deaths_per_100000_women": {
      "domain": [
        0.06,
        42.87
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2002"
      ]
    },
    "cervical_cancer_deaths_per_100000_women": {
      "domain": [
        0.15,
        55.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2002"
      ]
    },
    "colonandrectum_cancer_deaths_per_100000_women": {
      "domain": [
        0.5,
        23.86
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1955",
        "2002"
      ]
    },
    "liver_cancer_deaths_per_100000_women": {
      "domain": [
        0.01,
        47.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1955",
        "2002"
      ]
    },
    "lung_cancer_deaths_per_100000_women": {
      "domain": [
        0.1,
        29.95
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2002"
      ]
    },
    "stomach_cancer_deaths_per_100000_women": {
      "domain": [
        0.32,
        44.18
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2002"
      ]
    },
    "breast_cancer_number_of_female_deaths": {
      "domain": [
        7,
        44800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "cervical_cancer_number_of_female_deaths": {
      "domain": [
        3,
        74120
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "colonandrectum_cancer_number_of_female_deaths": {
      "domain": [
        0,
        35900
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "liver_cancer_number_of_female_deaths": {
      "domain": [
        1,
        89060
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "lung_cancer_number_of_female_deaths": {
      "domain": [
        0,
        109100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "stomach_cancer_number_of_female_deaths": {
      "domain": [
        2,
        101700
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "colonandrectum_cancer_new_cases_per_100000_men": {
      "domain": [
        1,
        59.81
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "liver_cancer_new_cases_per_100000_men": {
      "domain": [
        0.5,
        98.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "lung_cancer_new_cases_per_100000_men": {
      "domain": [
        0.5,
        94.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "prostate_cancer_new_cases_per_100000_men": {
      "domain": [
        0.3,
        124.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "stomach_cancer_new_cases_per_100000_men": {
      "domain": [
        0.6,
        74.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1953",
        "2002"
      ]
    },
    "colonandrectum_cancer_number_of_new_male_cases": {
      "domain": [
        2,
        88140
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "liver_cancer_number_of_new_male_cases": {
      "domain": [
        2,
        250900
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "lung_cancer_number_of_new_male_cases": {
      "domain": [
        1,
        269600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "prostate_cancer_number_of_new_male_cases": {
      "domain": [
        1,
        239900
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "stomach_cancer_number_of_new_male_cases": {
      "domain": [
        2,
        264500
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "colonandrectum_cancer_deaths_per_100000_men": {
      "domain": [
        0.34,
        35.52
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1955",
        "2002"
      ]
    },
    "liver_cancer_deaths_per_100000_men": {
      "domain": [
        0.03,
        93.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1955",
        "2002"
      ]
    },
    "lung_cancer_deaths_per_100000_men": {
      "domain": [
        0.26,
        84.93
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2002"
      ]
    },
    "prostate_cancer_deaths_per_100000_men": {
      "domain": [
        0.01,
        61.78
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2002"
      ]
    },
    "stomach_cancer_deaths_per_100000_men": {
      "domain": [
        0.09,
        92.51
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2002"
      ]
    },
    "colonandrectum_cancer_number_of_male_deaths": {
      "domain": [
        2,
        50200
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "liver_cancer_number_of_male_deaths": {
      "domain": [
        2,
        232800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "lung_cancer_number_of_male_deaths": {
      "domain": [
        1,
        231300
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "prostate_cancer_number_of_male_deaths": {
      "domain": [
        1,
        32440
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "stomach_cancer_number_of_male_deaths": {
      "domain": [
        2,
        206600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2002"
      ]
    },
    "total_health_spending_percent_of_gdp": {
      "domain": [
        1.12,
        22.85
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "government_share_of_total_health_spending_percent": {
      "domain": [
        0.39,
        99.91
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "private_share_of_total_health_spending_percent": {
      "domain": [
        0.09,
        99.61
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "out_of_pocket_share_of_total_health_spending_percent": {
      "domain": [
        0.7,
        99.61
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "government_health_spending_of_total_gov_spending_percent": {
      "domain": [
        0.1,
        42.38
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "total_health_spending_per_person_international_dollar": {
      "domain": [
        9.27,
        8362
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "government_health_spending_per_person_international_dollar": {
      "domain": [
        0.12,
        5692
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "total_health_spending_per_person_us": {
      "domain": [
        2.02,
        8362
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "government_health_spending_per_person_us": {
      "domain": [
        0.03,
        6942
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2010"
      ]
    },
    "medical_doctors_per_1000_people": {
      "domain": [
        0,
        47.35
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "people_living_with_hiv_number_all_ages": {
      "domain": [
        10,
        5600000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1979",
        "2011"
      ]
    },
    "adults_with_hiv_percent_age_15_49": {
      "domain": [
        0.01,
        26.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1979",
        "2011"
      ]
    },
    "newly_hiv_infected_number_all_ages": {
      "domain": [
        2,
        685991
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2014"
      ]
    },
    "newly_hiv_infected_percent_age_15_49": {
      "domain": [
        1,
        643227
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2014"
      ]
    },
    "annual_hiv_deaths_number_all_ages": {
      "domain": [
        0.0004,
        332928
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2014"
      ]
    },
    "art_coverage_percent_cd4_l_350": {
      "domain": [
        0.628248,
        70.9114
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2010",
        "2014"
      ]
    },
    "malaria_cases_per_100000_reported": {
      "domain": [
        0,
        94580
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2006"
      ]
    },
    "malaria_deaths_per_100000_reported": {
      "domain": [
        0,
        610.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2006"
      ]
    },
    "malaria_number_of_cases_reported": {
      "domain": [
        0,
        30500000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2006"
      ]
    },
    "malaria_number_of_deaths_reported": {
      "domain": [
        0,
        77000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2006"
      ]
    },
    "births_attended_by_skilled_health_staff_percent_of_total": {
      "domain": [
        5,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1984",
        "2014"
      ]
    },
    "contraceptive_use_percent_of_women_ages_15_49": {
      "domain": [
        0.8,
        96
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1968",
        "2014"
      ]
    },
    "maternal_mortality_ratio_per_100000_live_births": {
      "domain": [
        0,
        2679.57
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1751",
        "2008"
      ]
    },
    "maternal_deaths_total_number": {
      "domain": [
        0,
        27004
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1751",
        "2008"
      ]
    },
    "maternal_deaths_lifetime_risk_per_1000": {
      "domain": [
        0.02,
        142.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2005",
        "2010"
      ]
    },
    "stillbirths_per_1000_births": {
      "domain": [
        3.1,
        89.93
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1590",
        "2000"
      ]
    },
    "suicide_per_100000_people": {
      "domain": [
        0,
        44.35
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2005"
      ]
    },
    "malnutrition_weight_for_age_percent_of_children_under_5": {
      "domain": [
        0,
        67.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1966",
        "2014"
      ]
    },
    "sugar_per_person_g_per_day": {
      "domain": [
        0,
        194.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1961",
        "2004"
      ]
    },
    "food_supply_kilocalories_per_person_and_day": {
      "domain": [
        1308,
        3877
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1961",
        "2013"
      ]
    },
    "alcohol_consumption_per_adult_15plus_litres": {
      "domain": [
        0.02,
        24.19
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1985",
        "2008"
      ]
    },
    "smoking_adults_percent_of_population_over_age_15": {
      "domain": [
        4.3,
        51.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2005"
      ]
    },
    "smoking_women_percent_of_women_over_age_15": {
      "domain": [
        0.3,
        52.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2000",
        "2005"
      ]
    },
    "smoking_men_percent_of_men_over_age_15": {
      "domain": [
        7.6,
        70.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2005"
      ]
    },
    "body_mass_index_bmi_men_kgperm2": {
      "domain": [
        19.01,
        33.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "body_mass_index_bmi_women_kgperm2": {
      "domain": [
        18.47,
        35.02
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "blood_pressure_sbp_men_mmhg": {
      "domain": [
        118.52,
        143.12
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "blood_pressure_sbp_women_mmhg": {
      "domain": [
        110.34,
        139.46
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "cholesterol_fat_in_blood_men_mmolperl": {
      "domain": [
        3.73,
        6.24
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "cholesterol_fat_in_blood_women_mmolperl": {
      "domain": [
        3.97,
        6.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2008"
      ]
    },
    "infectious_tb_new_cases_per_100000_estimated": {
      "domain": [
        0,
        443
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "infectious_tb_new_cases_per_100000_reported": {
      "domain": [
        0,
        287
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "infectious_tb_number_of_new_cases_estimated": {
      "domain": [
        0,
        872500
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "infectious_tb_number_of_new_cases_reported": {
      "domain": [
        0,
        592600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "infectious_tb_detection_rate_percent": {
      "domain": [
        0,
        239
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "infectious_tb_detection_rate_percent_dots_only": {
      "domain": [
        0,
        196
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2007"
      ]
    },
    "infectious_tb_treatment_dots_completed_percent": {
      "domain": [
        0,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1994",
        "2006"
      ]
    },
    "tb_programme_dots_population_coverage_percent": {
      "domain": [
        0,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1995",
        "2007"
      ]
    },
    "all_forms_of_tb_new_cases_per_100000_estimated": {
      "domain": [
        0,
        1198
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "all_forms_of_tb_existing_cases_per_100000_estimated": {
      "domain": [
        0,
        1485
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "all_forms_of_tb_deaths_per_100000_estimated": {
      "domain": [
        0,
        415
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "all_forms_of_tb_new_cases_per_100000_reported": {
      "domain": [
        0,
        779
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2007"
      ]
    },
    "all_forms_of_tb_number_of_new_cases_estimated": {
      "domain": [
        0,
        1962000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "all_forms_of_tb_number_of_existing_cases_estimated": {
      "domain": [
        0,
        5088000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "all_forms_of_tb_number_of_deaths_estimated": {
      "domain": [
        0,
        457800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "all_forms_of_tb_number_of_new_cases_reported": {
      "domain": [
        0,
        1555000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2007"
      ]
    },
    "all_forms_of_tb_detection_rate_percent": {
      "domain": [
        0,
        285
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "all_forms_of_tb_detection_rate_percent_dots_only": {
      "domain": [
        0,
        210
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "tb_with_hivplus_new_cases_per_100000_estimated": {
      "domain": [
        0,
        962
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "tb_with_hivplus_existing_cases_per_100000_estimated": {
      "domain": [
        0,
        481
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "tb_with_hivplus_deaths_per_100000_estimated": {
      "domain": [
        0,
        365.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "tb_with_hivplus_number_of_new_cases_estimated": {
      "domain": [
        0,
        335600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "tb_with_hivplus_number_of_existing_cases_estimated": {
      "domain": [
        0,
        167800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "tb_with_hivplus_number_of_deaths_estimated": {
      "domain": [
        0,
        100700
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2007"
      ]
    },
    "bad_teeth_per_child_12_yr": {
      "domain": [
        0.2,
        6.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2004",
        "2004"
      ]
    },
    "dtp3_immunized_percent_of_one_year_olds": {
      "domain": [
        0,
        99
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2011"
      ]
    },
    "hepb3_immunized_percent_of_one_year_olds": {
      "domain": [
        1,
        99
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1989",
        "2011"
      ]
    },
    "hib3_immunized_percent_of_one_year_olds": {
      "domain": [
        0,
        99
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1991",
        "2011"
      ]
    },
    "mcv_immunized_percent_of_one_year_olds": {
      "domain": [
        0,
        99
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2011"
      ]
    },
    "pab_immunized_percent_of_newborns": {
      "domain": [
        1,
        99
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2011"
      ]
    },
    "broadband_subscribers": {
      "domain": [
        0,
        750209527
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1998",
        "2014"
      ]
    },
    "broadband_subscribers_per_100_people": {
      "domain": [
        0,
        61.74
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1998",
        "2014"
      ]
    },
    "cell_phones_total": {
      "domain": [
        0,
        6965109443
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "cell_phones_per_100_people": {
      "domain": [
        0,
        322.59
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "fixed_line_and_mobile_phone_subscribers_per_100_people": {
      "domain": [
        0,
        349.2799936053492
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "internet_users_total_number": {
      "domain": [
        0,
        8580000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "internet_users_per_100_people": {
      "domain": [
        0,
        98.16
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "personal_computers_total": {
      "domain": [
        3,
        240500000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2006"
      ]
    },
    "personal_computers_per_100_people": {
      "domain": [
        0.01,
        94.58
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2006"
      ]
    },
    "improved_sanitation_overall_access_percent": {
      "domain": [
        2.6,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "improved_sanitation_urban_access_percent": {
      "domain": [
        6.3,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "improved_sanitation_rural_access_percent": {
      "domain": [
        0,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "roads_paved_percent_of_total_roads": {
      "domain": [
        0.8,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2009"
      ]
    },
    "improved_water_source_overall_access_percent": {
      "domain": [
        24.1,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "improved_water_source_urban_access_percent": {
      "domain": [
        13.2,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "improved_water_source_rural_access_percent": {
      "domain": [
        3,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2015"
      ]
    },
    "population_aged_0_4_years_both_sexes_percent": {
      "domain": [
        2.88,
        21.59
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_5_9_years_both_sexes_percent": {
      "domain": [
        3.28,
        19.04
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_10_14_years_both_sexes_percent": {
      "domain": [
        3.19,
        17.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_15_19_years_both_sexes_percent": {
      "domain": [
        3.28,
        14.66
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_20_39_years_both_sexes_percent": {
      "domain": [
        17.68,
        58.66
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_40_59_years_both_sexes_percent": {
      "domain": [
        8.91,
        35.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_60plus_years_both_sexes_percent": {
      "domain": [
        1.5,
        46.36
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_0_4_years_total_number": {
      "domain": [
        1994,
        247422974
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_5_9_years_total_number": {
      "domain": [
        1567,
        253930452
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_10_14_years_total_number": {
      "domain": [
        1219,
        253500364
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_15_19_years_total_number": {
      "domain": [
        1043,
        246695924
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_20_39_years_total_number": {
      "domain": [
        3474,
        859635648
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_40_59_years_total_number": {
      "domain": [
        1949,
        841892370
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_60plus_years_total_number": {
      "domain": [
        648,
        566280669
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_0_4_years_female_percent": {
      "domain": [
        1.5,
        10.98
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_5_9_years_female_percent": {
      "domain": [
        1.7,
        9.55
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_10_14_years_female_percent": {
      "domain": [
        1.65,
        8.61
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_15_19_years_female_percent": {
      "domain": [
        1.7,
        9.35
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_20_39_years_female_percent": {
      "domain": [
        7.5,
        46.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_40_59_years_female_percent": {
      "domain": [
        3.97,
        24.94
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_60plus_years_female_percent": {
      "domain": [
        0.67,
        23.25
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_0_4_years_male_percent": {
      "domain": [
        1.5,
        10.98
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_5_9_years_male_percent": {
      "domain": [
        1.7,
        9.55
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_10_14_years_male_percent": {
      "domain": [
        1.65,
        8.61
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_15_19_years_male_percent": {
      "domain": [
        1.7,
        9.35
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_20_39_years_male_percent": {
      "domain": [
        7.5,
        46.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_40_59_years_male_percent": {
      "domain": [
        3.97,
        24.94
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_aged_60plus_years_male_percent": {
      "domain": [
        0.67,
        23.25
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_growth_annual_percent": {
      "domain": [
        -10.96,
        19.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "crude_birth_rate_births_per_1000_population": {
      "domain": [
        6.47,
        60.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2099"
      ]
    },
    "crude_death_rate_deaths_per_1000_population": {
      "domain": [
        1.48,
        54.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2099"
      ]
    },
    "teen_fertility_rate_births_per_1000_women_ages_15_19": {
      "domain": [
        0.64,
        285
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1753",
        "2010"
      ]
    },
    "new_births_total_number_estimated": {
      "domain": [
        103,
        30150000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2015"
      ]
    },
    "sex_ratio_all_age_groups": {
      "domain": [
        74.35,
        305.68
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "sex_ratio_0_14_years": {
      "domain": [
        82.91,
        134.55
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "sex_ratio_15_24_years": {
      "domain": [
        73.25,
        449.76
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "sex_ratio_15_49_years": {
      "domain": [
        72.51,
        393.84
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "sex_ratio_above_50_years": {
      "domain": [
        46.18,
        436.86
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_in_urban_agglomerations_m_1_million_percent_of_total": {
      "domain": [
        1.17,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "urban_population": {
      "domain": [
        970,
        3862750058
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "urban_population_percent_of_total": {
      "domain": [
        2.08,
        100
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "urban_population_growth_annual_percent": {
      "domain": [
        -187.15,
        48.94
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "children_and_elderly_per_100_adults": {
      "domain": [
        20.45,
        119.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2050"
      ]
    },
    "median_age_years": {
      "domain": [
        14.34,
        55.78
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2050"
      ]
    },
    "population_density_per_square_km": {
      "domain": [
        0.01,
        23760
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2010"
      ]
    },
    "population_total": {
      "domain": [
        0,
        1718705654
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1086",
        "2100"
      ]
    },
    "age_at_1st_marriage_women": {
      "domain": [
        12.5,
        33.66
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1616",
        "2005"
      ]
    },
    "murder_per_100000_people": {
      "domain": [
        0,
        131
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2005"
      ]
    },
    "corruption_perception_index_cpi": {
      "domain": [
        0.96,
        92
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2008",
        "2015"
      ]
    },
    "democracy_score_use_as_color": {
      "domain": [
        -10,
        10
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2011"
      ]
    },
    "hdi_human_development_index": {
      "domain": [
        0.17,
        0.94
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2011"
      ]
    },
    "agriculture_workers_percent_of_labour_force": {
      "domain": [
        0,
        92.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "industry_workers_percent_of_labour_force": {
      "domain": [
        0.9,
        59.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "service_workers_percent_of_labour_force": {
      "domain": [
        5.6,
        89.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "female_agriculture_workers_percent_of_female_labour_force": {
      "domain": [
        0,
        96.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "female_industry_workers_percent_of_female_labour_force": {
      "domain": [
        0.2,
        56.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "female_service_workers_percent_of_female_labour_force": {
      "domain": [
        2,
        98.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "male_agriculture_workers_percent_of_male_labour_force": {
      "domain": [
        0,
        86.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "male_industry_workers_percent_of_male_labour_force": {
      "domain": [
        1.3,
        66.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "male_service_workers_percent_of_male_labour_force": {
      "domain": [
        9.3,
        84.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "family_workers_percent_of_labour_force": {
      "domain": [
        0,
        69.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "salaried_workers_percent_of_labour_force": {
      "domain": [
        1.4,
        99.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "self_employed_percent_of_labour_force": {
      "domain": [
        0.5,
        97.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "female_family_workers_percent_of_female_labour_force": {
      "domain": [
        0,
        89.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "female_salaried_workers_percent_of_female_labour_force": {
      "domain": [
        0.3,
        99.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "female_self_employed_percent_of_female_labour_force": {
      "domain": [
        0,
        99
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "male_family_workers_percent_of_male_labour_force": {
      "domain": [
        0,
        52.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "male_salaried_workers_percent_of_male_labour_force": {
      "domain": [
        2,
        99.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "male_self_employed_percent_of_male_labour_force": {
      "domain": [
        0.5,
        97.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "aged_15_24_employment_rate_percent": {
      "domain": [
        8.75,
        80.26
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1991",
        "2020"
      ]
    },
    "aged_15plus_employment_rate_percent": {
      "domain": [
        32.38,
        93.92
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1991",
        "2020"
      ]
    },
    "females_aged_15_24_employment_rate_percent": {
      "domain": [
        1.92,
        81.18
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1991",
        "2020"
      ]
    },
    "females_aged_15plus_employment_rate_percent": {
      "domain": [
        0,
        31.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "males_aged_15_24_employment_rate_percent": {
      "domain": [
        10.03,
        84.89
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1991",
        "2020"
      ]
    },
    "males_aged_15plus_employment_rate_percent": {
      "domain": [
        41.64,
        98.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1991",
        "2020"
      ]
    },
    "aged_15_64_labour_force_participation_rate_percent": {
      "domain": [
        39.2,
        92.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2007"
      ]
    },
    "aged_25_54_labour_force_participation_rate_percent": {
      "domain": [
        48.7,
        98.06
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "aged_15plus_labour_force_participation_rate_percent": {
      "domain": [
        37.5,
        91.1
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "aged_65plus_labour_force_participation_rate_percent": {
      "domain": [
        0.42,
        91.96
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "females_aged_15_64_labour_force_participation_rate_percent": {
      "domain": [
        8.5,
        91.92
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "females_aged_25_54_labour_force_participation_rate_percent": {
      "domain": [
        9.7,
        98.19
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "females_aged_15plus_labour_force_participation_rate_percent": {
      "domain": [
        8.5,
        90.79
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "females_aged_65plus_labour_force_participation_rate_percent": {
      "domain": [
        0.1,
        88
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "males_aged_15_64_labour_force_participation_rate_percent": {
      "domain": [
        47.34,
        96.17
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "males_aged_25_54_labour_force_participation_rate_percent": {
      "domain": [
        55.62,
        99.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "males_aged_15plus_labour_force_participation_rate_percent": {
      "domain": [
        43.76,
        95.72
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "males_aged_65plus_labour_force_participation_rate_percent": {
      "domain": [
        0.64,
        99.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2019"
      ]
    },
    "aged_15_24_unemployment_rate_percent": {
      "domain": [
        0,
        42.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "aged_25_54_unemployment_rate_percent": {
      "domain": [
        0,
        28.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "aged_15plus_unemployment_rate_percent": {
      "domain": [
        0,
        30.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "aged_55plus_unemployment_rate_percent": {
      "domain": [
        0.5,
        22.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2005"
      ]
    },
    "long_term_unemployment_rate_percent": {
      "domain": [
        0,
        30.2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "females_aged_15_24_unemployment_rate_percent": {
      "domain": [
        0,
        47.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "females_aged_25_54_unemployment_rate_percent": {
      "domain": [
        0,
        29.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "females_aged_15plus_unemployment_rate_percent": {
      "domain": [
        1,
        31.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2005"
      ]
    },
    "females_aged_55plus_unemployment_rate_percent": {
      "domain": [
        0,
        26.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2005"
      ]
    },
    "female_long_term_unemployment_rate_percent": {
      "domain": [
        0,
        47.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "males_aged_15_24_unemployment_rate_percent": {
      "domain": [
        0,
        42
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "males_aged_25_54_unemployment_rate_percent": {
      "domain": [
        0,
        27.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "males_aged_15plus_unemployment_rate_percent": {
      "domain": [
        0,
        29.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "males_aged_55plus_unemployment_rate_percent": {
      "domain": [
        0.4,
        20.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2005"
      ]
    },
    "male_long_term_unemployment_rate_percent": {
      "domain": [
        0,
        29.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2014"
      ]
    },
    "under_five_mortality_from_cme_per_1000_born": {
      "domain": [
        1.9,
        443.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2015"
      ]
    },
    "under_five_mortality_from_ihme_per_1000_born": {
      "domain": [
        1.6,
        367.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2015"
      ]
    },
    "old_version_of_income_per_person_version_3": {
      "domain": [
        83.33,
        47750
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1700",
        "2007"
      ]
    },
    "old_version_of_income_per_person_version_8": {
      "domain": [
        281.91,
        119849.29
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1272",
        "2018"
      ]
    },
    "alternative_gdppercapita_ppp_inflation_adjusted_from_pwt": {
      "domain": [
        161.59,
        238585.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2014"
      ]
    },
    "subsistence_incomes_per_person": {
      "domain": [
        0.62,
        262.68
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1272",
        "2018"
      ]
    },
    "alternative_poverty_percent_below_nationally_defined_poverty": {
      "domain": [
        0.6,
        76.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1976",
        "2015"
      ]
    },
    "data_quality_income_per_person": {
      "domain": [
        0,
        5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1700",
        "2012"
      ]
    },
    "data_quality_life_expectancy": {
      "domain": [
        1,
        4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1541",
        "2099"
      ]
    },
    "data_quality_population": {
      "domain": [
        2,
        5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1600",
        "2001"
      ]
    },
    "estimate_or_projection_of_under_five_mortality_rate_from_ihme": {
      "domain": [
        1,
        2
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2015"
      ]
    },
    "data_quality_children_per_woman": {
      "domain": [
        1,
        5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2009"
      ]
    },
    "data_method_maternal_mortality": {
      "domain": [
        1,
        8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2005",
        "2005"
      ]
    },
    "economic_growth_over_the_past_10_years": {
      "domain": [
        -0.85,
        13.75
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2014"
      ]
    },
    "how_far_to_the_north": {
      "domain": [
        -51.75,
        78
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1700",
        "2030"
      ]
    },
    "income_per_person_with_projections": {
      "domain": [
        281.91,
        119849.29
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1272",
        "2018"
      ]
    },
    "life_expectancy_at_birth_with_projections": {
      "domain": [
        1,
        95.64
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1765",
        "2099"
      ]
    },
    "children_per_woman_total_fertility_with_projections": {
      "domain": [
        0.84,
        9.22
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1541",
        "2099"
      ]
    },
    "total_population_with_projections": {
      "domain": [
        0,
        1692000000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1086",
        "2100"
      ]
    },
    "female_population_with_projections": {
      "domain": [
        6893,
        1334143654
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "male_population_with_projections": {
      "domain": [
        6815,
        1417954232
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2100"
      ]
    },
    "population_growth_annual_percent_with_projections": {
      "domain": [
        -6.04,
        17.13
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2099"
      ]
    },
    "year_categorization_1820_2010": {
      "domain": [
        1820,
        2010
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1820",
        "2010"
      ]
    },
    "year_categorization_1950": {
      "domain": [
        1950,
        2008
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "traffic_deaths_per_100000_people": {
      "domain": [
        0.32,
        117.9
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2007"
      ]
    },
    "burns_deaths_per_100000_people": {
      "domain": [
        0,
        15.89
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2004"
      ]
    },
    "drownings_per_100000_people": {
      "domain": [
        0,
        26.64
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2004"
      ]
    },
    "falls_deaths_per_100000_people": {
      "domain": [
        0,
        23.39
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2004"
      ]
    },
    "poisonings_deaths_per_100000_people": {
      "domain": [
        0,
        59.83
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2004"
      ]
    },
    "cars_trucks_and_buses_per_1000_persons": {
      "domain": [
        0.3,
        1214
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2007"
      ]
    },
    "traffic_deaths_women_per_100000_people": {
      "domain": [
        0.33,
        40.37
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2004"
      ]
    },
    "traffic_deaths_men_per_100000_people": {
      "domain": [
        0.64,
        195.4
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2004"
      ]
    },
    "suicide_women_per_100000_people": {
      "domain": [
        0.02,
        26.97
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2004"
      ]
    },
    "suicide_men_per_100000_people": {
      "domain": [
        0,
        80.43
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2004"
      ]
    },
    "murdered_women_per_100000_people": {
      "domain": [
        0,
        23.32
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2004"
      ]
    },
    "murdered_men_per_100000_people": {
      "domain": [
        0,
        239.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2004"
      ]
    },
    "car_deaths_per_100000_people": {
      "domain": [
        0.11,
        33.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1985",
        "2008"
      ]
    },
    "motorcycle_deaths_per_100000_people": {
      "domain": [
        0.02,
        27.96
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1985",
        "2008"
      ]
    },
    "murdered_children_0_14_per_100000_people": {
      "domain": [
        0,
        7.44
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "murdered_15_29_per_100000_people": {
      "domain": [
        0,
        190.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "murdered_30_44_per_100000_people": {
      "domain": [
        0,
        262.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "murdered_45_59_per_100000_people": {
      "domain": [
        0,
        112.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "murdered_60plus_per_100000_people": {
      "domain": [
        0,
        72.21
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "suicide_age_0_14_per_100000_people": {
      "domain": [
        0,
        3.23
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "suicide_age_15_29_per_100000_people": {
      "domain": [
        0,
        74.18
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "suicide_age_30_44_per_100000_people": {
      "domain": [
        0,
        68.84
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "suicide_age_45_59_per_100000_people": {
      "domain": [
        0,
        94.88
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "suicide_age_60plus_per_100000_people": {
      "domain": [
        0,
        93.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "traffic_mortality_children_0_14_per_100000_people": {
      "domain": [
        0,
        24.26
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "traffic_mortality_15_29_per_100000_people": {
      "domain": [
        0,
        56.07
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "traffic_mortality_30_44_per_100000_people": {
      "domain": [
        0,
        52.57
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "traffic_mortality_45_59_per_100000_people": {
      "domain": [
        0,
        86.42
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "traffic_mortality_60plus_per_100000_people": {
      "domain": [
        0,
        215.6
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2008"
      ]
    },
    "ifpri_underweight_children": {
      "domain": [
        0.2,
        59.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2005"
      ]
    },
    "maternal_mortality_ratio_who": {
      "domain": [
        2,
        1900
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2010"
      ]
    },
    "battle_deaths_per_100_000": {
      "domain": [
        0,
        252
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2004"
      ]
    },
    "armed_forces_personnel_total": {
      "domain": [
        0,
        30196640
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1985",
        "2013"
      ]
    },
    "armed_forces_personnel_percent_of_labor_force": {
      "domain": [
        0,
        35.93
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1985",
        "2013"
      ]
    },
    "murder_total_deaths": {
      "domain": [
        0,
        61230
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2004"
      ]
    },
    "suicide_total_deaths": {
      "domain": [
        0,
        272600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2002",
        "2004"
      ]
    },
    "traffic_total_deaths": {
      "domain": [
        1,
        284800
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1985",
        "2008"
      ]
    },
    "debt_servicing_costs_percent_of_exports_and_net_income_from_abroad": {
      "domain": [
        0,
        156.86
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "external_debt_total_us_not_inflation_adjusted": {
      "domain": [
        0,
        5393390684030.8
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2014"
      ]
    },
    "present_value_of_debt_percent_of_gni": {
      "domain": [
        0.55,
        68.16
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2014",
        "2014"
      ]
    },
    "exports_unit_value_index_2000100": {
      "domain": [
        0.2,
        16112.57
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2013"
      ]
    },
    "imports_unit_value_index_2000100": {
      "domain": [
        3.16,
        1489.07
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2013"
      ]
    },
    "net_barter_terms_of_trade_2000_100": {
      "domain": [
        21.22,
        721.05
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1980",
        "2013"
      ]
    },
    "dead_kids_per_woman": {
      "domain": [
        0.02,
        5.55
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1760",
        "2099"
      ]
    },
    "surviving_kids_per_woman": {
      "domain": [
        0.49,
        7.26
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1760",
        "2099"
      ]
    },
    "20120905_extreme_poverty_percent_people_below_125_a_day": {
      "domain": [
        0,
        92.31
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1981",
        "2013"
      ]
    },
    "alternative_gdp_per_capita_ppp_wb": {
      "domain": [
        246.67,
        136135.55
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1990",
        "2014"
      ]
    },
    "alternative_gdp_per_capita_ppp_pwt_7_1": {
      "domain": [
        160.8,
        136300
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2010"
      ]
    },
    "number_of_child_deaths": {
      "domain": [
        1,
        8291000
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2015"
      ]
    },
    "energy_supply_per_person_toe": {
      "domain": [
        0.14,
        17.19
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2010",
        "2010"
      ]
    },
    "energy_from_solid_biofuels_percent": {
      "domain": [
        0,
        93.48
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "2000",
        "2010"
      ]
    },
    "residential_energy_use_percent": {
      "domain": [
        0,
        98.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1960",
        "2010"
      ]
    },
    "life_expectancy_at_birth_data_from_ihme": {
      "domain": [
        17.4,
        83
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1970",
        "2013"
      ]
    },
    "children_per_woman_temporary_update": {
      "domain": [
        0.84,
        9.22
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1541",
        "2099"
      ]
    },
    "alternative_gdp_per_capita_ppp_pwt_8_0": {
      "domain": [
        153.2,
        124700
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2011"
      ]
    },
    "life_expectancy_male": {
      "domain": [
        16.29,
        92.52
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2099"
      ]
    },
    "life_expectancy_female": {
      "domain": [
        22.39,
        97.21
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1950",
        "2099"
      ]
    },
    "gdp_total_yearly_growth": {
      "domain": [
        -66.52,
        189.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1801",
        "2013"
      ]
    },
    "gdp_per_capita_yearly_growth": {
      "domain": [
        -65,
        182.36
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1961",
        "2014"
      ]
    },
    "yearly_co2_emissions_1000_tonnes": {
      "domain": [
        -38745,
        1127857
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1785",
        "2009"
      ]
    },
    "child_mortality_0_5_year_olds_more_years_version_7": {
      "domain": [
        2,
        756.29
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1751",
        "2013"
      ]
    },
    "number_of_people_in_poverty": {
      "domain": [
        0,
        837.5
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1978",
        "2013"
      ]
    },
    "income_per_person_long_series": {
      "domain": [
        240.4,
        184600
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1000",
        "999"
      ]
    },
    "newborn_mortality_rate_per_1000": {
      "domain": [
        0.7,
        120.7
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1951",
        "2015"
      ]
    },
    "newborn_deaths": {
      "domain": [
        0,
        1814593
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1951",
        "2015"
      ]
    },
    "sg_population": {
      "domain": [
        50,
        1376048943
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2015"
      ]
    },
    "sg_gini": {
      "domain": [
        16.2,
        74.3
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2015"
      ]
    },
    "sg_gdp_p_cap_const_ppp2011_dollar": {
      "domain": [
        142,
        304066
      ],
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "log",
        "linear"
      ],
      "availability": [
        "1800",
        "2040"
      ]
    },
    "description": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "indicator_url": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "name": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "unit": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "interpolation": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "name_short": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "name_long": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "color": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "gapminder_list": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "alternative_1": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "alternative_2": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "alternative_3": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "alternative_4_cdiac": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "pandg": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "god_id": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "alt_5": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "upper_case_name": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "code": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "number": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "gwid": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "arb1": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "arb2": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "arb3": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "arb4": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "arb5": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "arb6": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "domain": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "scales": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "drill_up": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "time": {
      "sourceLink": "",
      "use": "indicator",
      "scales": [
        "time"
      ]
    },
    "geo.name": {
      "sourceLink": "",
      "use": "property",
      "scales": [
        "ordinal"
      ]
    },
    "_default": {
      "use": "constant",
      "scales": [
        "ordinal"
      ],
      "sourceLink": ""
    }
  },
  "indicatorsTree": {
    "id": "_root",
    "children": [
      {
        "id": "children_per_woman_total_fertility"
      },
      {
        "id": "co2_emissions_tonnes_per_person"
      },
      {
        "id": "income_per_person_gdppercapita_ppp_inflation_adjusted"
      },
      {
        "id": "child_mortality_0_5_year_olds_dying_per_1000_born"
      },
      {
        "id": "life_expectancy_years"
      },
      {
        "id": "aid_given_2007_us"
      },
      {
        "id": "aid_given_per_person_2007_us"
      },
      {
        "id": "aid_given_percent_of_gni"
      },
      {
        "id": "water_and_sanitation_aid_given_percent_of_aid"
      },
      {
        "id": "economical_infrastructure_aid_given_percent_of_aid"
      },
      {
        "id": "production_sector_aid_given_percent_of_aid"
      },
      {
        "id": "multisector_cross_cutting_aid_given_percent_of_aid"
      },
      {
        "id": "education_aid_given_percent_of_aid"
      },
      {
        "id": "health_aid_given_percent_of_aid"
      },
      {
        "id": "population_policies_aid_given_percent_of_aid"
      },
      {
        "id": "government_and_society_aid_given_percent_of_aid"
      },
      {
        "id": "other_social_services_aid_given_percent_of_aid"
      },
      {
        "id": "aid_received_total_us_inflation_adjusted"
      },
      {
        "id": "aid_received_per_person_current_us"
      },
      {
        "id": "aid_received_percent_of_gni"
      },
      {
        "id": "dollar_billionaires_per_million_people"
      },
      {
        "id": "average_age_of_dollar_billionaires_years"
      },
      {
        "id": "total_number_of_dollar_billionaires"
      },
      {
        "id": "debt_to_foreigners_by_public_and_private_percent_of_gni"
      },
      {
        "id": "total_reserves_percent_of_debt_to_foreigners"
      },
      {
        "id": "total_gdp_us_inflation_adjusted"
      },
      {
        "id": "gdppercapita_us_inflation_adjusted"
      },
      {
        "id": "gdpperemployee_us_inflation_adjusted"
      },
      {
        "id": "gdpperworking_hour_us_inflation_adjusted"
      },
      {
        "id": "gdppercapita_growth_over_next_10_years"
      },
      {
        "id": "gdppercapita_growth_percent_per_year"
      },
      {
        "id": "total_gni_ppp_current_international"
      },
      {
        "id": "gnipercapita_constant_2000_us"
      },
      {
        "id": "gnipercapita_atlasmethod_current_us"
      },
      {
        "id": "gnipercapita_ppp_current_international"
      },
      {
        "id": "inequality_index_gini"
      },
      {
        "id": "income_share_of_richest_10percent"
      },
      {
        "id": "income_share_of_richest_20percent"
      },
      {
        "id": "income_share_of_2nd_richest_20percent"
      },
      {
        "id": "income_share_of_middle_20percent"
      },
      {
        "id": "income_share_of_2nd_poorest_20percent"
      },
      {
        "id": "income_share_of_poorest_20percent"
      },
      {
        "id": "income_share_of_poorest_10percent"
      },
      {
        "id": "inflation_annual_percent"
      },
      {
        "id": "central_bank_discount_rate_annual_percent"
      },
      {
        "id": "investments_percent_of_gdp"
      },
      {
        "id": "tax_revenue_percent_of_gdp"
      },
      {
        "id": "foreign_direct_investment_net_inflows_percent_of_gdp"
      },
      {
        "id": "foreign_direct_investment_net_outflows_percent_of_gdp"
      },
      {
        "id": "patent_applications_total"
      },
      {
        "id": "patents_granted_total"
      },
      {
        "id": "patents_in_force_total"
      },
      {
        "id": "poverty_percent_people_below_2_a_day"
      },
      {
        "id": "rural_poverty_percent_rural_people_below_national_rural"
      },
      {
        "id": "urban_poverty_percent_urban_people_below_national_urban"
      },
      {
        "id": "extreme_poverty_percent_people_below_125_a_day"
      },
      {
        "id": "agriculture_percent_of_gdp"
      },
      {
        "id": "industry_percent_of_gdp"
      },
      {
        "id": "services_percent_of_gdp"
      },
      {
        "id": "exports_percent_of_gdp"
      },
      {
        "id": "imports_percent_of_gdp"
      },
      {
        "id": "arms_exports_us_inflation_adjusted"
      },
      {
        "id": "arms_imports_us_inflation_adjusted"
      },
      {
        "id": "total_gdp_ppp_inflation_adjusted"
      },
      {
        "id": "high_technology_exports_percent_of_manufactured_exports"
      },
      {
        "id": "merchandise_trade_percent_of_gdp"
      },
      {
        "id": "trade_balance_us_not_inflation_adjusted"
      },
      {
        "id": "trade_balance_percent_of_gdp"
      },
      {
        "id": "hourly_compensation_us"
      },
      {
        "id": "working_hours_per_week"
      },
      {
        "id": "market_value_of_listed_companies_percent_of_gdp"
      },
      {
        "id": "military_expenditure_percent_of_gdp"
      },
      {
        "id": "math_achievement_4th_grade"
      },
      {
        "id": "math_achievement_8th_grade"
      },
      {
        "id": "ratio_of_girls_to_boys_in_primary_and_secondary_education_perc"
      },
      {
        "id": "ratio_of_young_literate_females_to_males_percent_ages_15_24"
      },
      {
        "id": "literacy_rate_adult_female_percent_of_females_ages_15_above"
      },
      {
        "id": "literacy_rate_adult_male_percent_of_males_ages_15_and_above"
      },
      {
        "id": "literacy_rate_adult_total_percent_of_people_ages_15_and_above"
      },
      {
        "id": "literacy_rate_youth_female_percent_of_females_ages_15_24"
      },
      {
        "id": "literacy_rate_youth_male_percent_of_males_ages_15_24"
      },
      {
        "id": "literacy_rate_youth_total_percent_of_people_ages_15_24"
      },
      {
        "id": "children_out_of_school_primary"
      },
      {
        "id": "children_out_of_school_primary_female"
      },
      {
        "id": "children_out_of_school_primary_male"
      },
      {
        "id": "primary_completion_rate_total_percent_of_relevant_age_group"
      },
      {
        "id": "primary_school_completion_percent_of_boys"
      },
      {
        "id": "primary_school_completion_percent_of_girls"
      },
      {
        "id": "expenditure_per_student_primary_percent_of_gdp_per_person"
      },
      {
        "id": "expenditure_per_student_secondary_percent_of_gdp_per_person"
      },
      {
        "id": "expenditure_per_student_tertiary_percent_of_gdp_per_person"
      },
      {
        "id": "mean_years_in_school_women_25_years_and_older"
      },
      {
        "id": "mean_years_in_school_men_25_years_and_older"
      },
      {
        "id": "mean_years_in_school_women_25_to_34_years"
      },
      {
        "id": "mean_years_in_school_men_25_to_34_years"
      },
      {
        "id": "mean_years_in_school_women_of_reproductive_age_15_to_44"
      },
      {
        "id": "mean_years_in_school_women_percent_men_25_to_34_years"
      },
      {
        "id": "energy_use_total"
      },
      {
        "id": "energy_use_per_person"
      },
      {
        "id": "energy_production_total"
      },
      {
        "id": "energy_production_per_person"
      },
      {
        "id": "pump_price_for_gasoline_us_per_liter"
      },
      {
        "id": "coal_consumption_total"
      },
      {
        "id": "coal_consumption_per_cap"
      },
      {
        "id": "electricity_use_per_person"
      },
      {
        "id": "electricity_use_total"
      },
      {
        "id": "residential_electricity_use_per_person"
      },
      {
        "id": "residential_electricity_use_total"
      },
      {
        "id": "electricity_generation_total"
      },
      {
        "id": "electricity_generation_per_person"
      },
      {
        "id": "hydro_power_generation_total"
      },
      {
        "id": "hydro_power_generation_per_person"
      },
      {
        "id": "nuclear_power_generation_total"
      },
      {
        "id": "nuclear_power_generation_per_person"
      },
      {
        "id": "natural_gas_production_total"
      },
      {
        "id": "natural_gas_production_per_person"
      },
      {
        "id": "natural_gas_proven_reserves_per_person"
      },
      {
        "id": "natural_gas_proved_reserves_total"
      },
      {
        "id": "oil_production_per_person"
      },
      {
        "id": "oil_production_total"
      },
      {
        "id": "oil_proven_reserves_per_person"
      },
      {
        "id": "oil_proved_reserves_total"
      },
      {
        "id": "oil_consumption_total"
      },
      {
        "id": "oil_consumption_per_cap"
      },
      {
        "id": "drought_deaths_annual_number"
      },
      {
        "id": "earthquake_deaths_annual_number"
      },
      {
        "id": "epidemic_deaths_annual_number"
      },
      {
        "id": "extreme_temperature_deaths_annual_number"
      },
      {
        "id": "flood_deaths_annual_number"
      },
      {
        "id": "storm_deaths_annual_number"
      },
      {
        "id": "tsunami_deaths_annual_number"
      },
      {
        "id": "plane_crash_deaths_annual_number"
      },
      {
        "id": "drought_affected_annual_number"
      },
      {
        "id": "earthquake_affected_annual_number"
      },
      {
        "id": "epidemic_affected_annual_number"
      },
      {
        "id": "extreme_temperature_affected_annual_number"
      },
      {
        "id": "flood_affected_annual_number"
      },
      {
        "id": "storm_affected_annual_number"
      },
      {
        "id": "tsunami_affected_annual_number"
      },
      {
        "id": "plane_crash_affected_annual_number"
      },
      {
        "id": "co2_intensity_of_economic_output_kg_co2_per_2005_ppp_of_gdp"
      },
      {
        "id": "cumulative_co2_emissions_tonnes"
      },
      {
        "id": "sulfur_emissions_per_person_kg"
      },
      {
        "id": "yearly_co2_emissions_tonnes"
      },
      {
        "id": "total_sulfur_emission_kilotonnes"
      },
      {
        "id": "forest_land_total_area_ha"
      },
      {
        "id": "primary_forest_area_ha"
      },
      {
        "id": "planted_forest_area_ha"
      },
      {
        "id": "wood_removal_cubic_meters"
      },
      {
        "id": "forest_coverage_percent"
      },
      {
        "id": "biomass_stock_in_forest_tons"
      },
      {
        "id": "privately_owned_forest_land_percent"
      },
      {
        "id": "privately_owned_other_wooded_land_percent"
      },
      {
        "id": "forest_products_removal_total_dollar"
      },
      {
        "id": "forest_products_removal_per_ha_dollar"
      },
      {
        "id": "agricultural_land_percent_of_land_area"
      },
      {
        "id": "forest_area_sq_km"
      },
      {
        "id": "surface_area_sq_km"
      },
      {
        "id": "renewable_water_cu_meters_per_person"
      },
      {
        "id": "internal_renewable_water_cu_meters_per_person"
      },
      {
        "id": "water_withdrawal_cu_meters_per_person"
      },
      {
        "id": "municipal_water_withdrawal_cu_meters_per_person"
      },
      {
        "id": "agricultural_water_withdrawal_percent_of_total"
      },
      {
        "id": "industrial_water_withdrawal_percent_of_total"
      },
      {
        "id": "municipal_water_withdrawal_percent_of_total"
      },
      {
        "id": "desalinated_water_produced_billion_cu_meters"
      },
      {
        "id": "total_water_withdrawal_billion_cu_meters"
      },
      {
        "id": "infant_mortality_rate_per_1000_births"
      },
      {
        "id": "underweight_children"
      },
      {
        "id": "all_causes_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "birth_asphyxia_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "congenital_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "diarrhoeal_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "pneumonia_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "prematurity_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "sepsis_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "tetanus_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "other_deaths_in_newborn_per_1000_births"
      },
      {
        "id": "all_causes_deaths_in_newborn_total_deaths"
      },
      {
        "id": "birth_asphyxia_deaths_in_newborn_total_deaths"
      },
      {
        "id": "congenital_deaths_in_newborn_total_deaths"
      },
      {
        "id": "diarrhoeal_deaths_in_newborn_total_deaths"
      },
      {
        "id": "pneumonia_deaths_in_newborn_total_deaths"
      },
      {
        "id": "prematurity_deaths_in_newborn_total_deaths"
      },
      {
        "id": "sepsis_deaths_in_newborn_total_deaths"
      },
      {
        "id": "tetanus_deaths_in_newborn_total_deaths"
      },
      {
        "id": "other_deaths_in_newborn_total_deaths"
      },
      {
        "id": "all_causes_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "diarrhoeal_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "hiv_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "injury_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "malaria_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "measles_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "meningitis_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "ncd_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "pertussis_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "pneumonia_deaths_in_children_1_59_months_per_1000_births"
      },
      {
        "id": "other_infections_deaths_in_children_1_59_months_per_1000_birt"
      },
      {
        "id": "all_causes_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "diarrhoeal_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "hiv_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "injury_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "malaria_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "measles_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "meningitis_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "ncd_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "pertussis_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "pneumonia_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "other_infections_deaths_in_children_1_59_months_total_deaths"
      },
      {
        "id": "breast_cancer_new_cases_per_100000_women"
      },
      {
        "id": "cervical_cancer_new_cases_per_100000_women"
      },
      {
        "id": "colonandrectum_cancer_new_cases_per_100000_women"
      },
      {
        "id": "liver_cancer_new_cases_per_100000_women"
      },
      {
        "id": "lung_cancer_new_cases_per_100000_women"
      },
      {
        "id": "stomach_cancer_new_cases_per_100000_women"
      },
      {
        "id": "breast_cancer_number_of_new_female_cases"
      },
      {
        "id": "cervical_cancer_number_of_new_female_cases"
      },
      {
        "id": "colonandrectum_cancer_number_of_new_female_cases"
      },
      {
        "id": "liver_cancer_number_of_new_female_cases"
      },
      {
        "id": "lung_cancer_number_of_new_female_cases"
      },
      {
        "id": "stomach_cancer_number_of_new_female_cases"
      },
      {
        "id": "breast_cancer_deaths_per_100000_women"
      },
      {
        "id": "cervical_cancer_deaths_per_100000_women"
      },
      {
        "id": "colonandrectum_cancer_deaths_per_100000_women"
      },
      {
        "id": "liver_cancer_deaths_per_100000_women"
      },
      {
        "id": "lung_cancer_deaths_per_100000_women"
      },
      {
        "id": "stomach_cancer_deaths_per_100000_women"
      },
      {
        "id": "breast_cancer_number_of_female_deaths"
      },
      {
        "id": "cervical_cancer_number_of_female_deaths"
      },
      {
        "id": "colonandrectum_cancer_number_of_female_deaths"
      },
      {
        "id": "liver_cancer_number_of_female_deaths"
      },
      {
        "id": "lung_cancer_number_of_female_deaths"
      },
      {
        "id": "stomach_cancer_number_of_female_deaths"
      },
      {
        "id": "colonandrectum_cancer_new_cases_per_100000_men"
      },
      {
        "id": "liver_cancer_new_cases_per_100000_men"
      },
      {
        "id": "lung_cancer_new_cases_per_100000_men"
      },
      {
        "id": "prostate_cancer_new_cases_per_100000_men"
      },
      {
        "id": "stomach_cancer_new_cases_per_100000_men"
      },
      {
        "id": "colonandrectum_cancer_number_of_new_male_cases"
      },
      {
        "id": "liver_cancer_number_of_new_male_cases"
      },
      {
        "id": "lung_cancer_number_of_new_male_cases"
      },
      {
        "id": "prostate_cancer_number_of_new_male_cases"
      },
      {
        "id": "stomach_cancer_number_of_new_male_cases"
      },
      {
        "id": "colonandrectum_cancer_deaths_per_100000_men"
      },
      {
        "id": "liver_cancer_deaths_per_100000_men"
      },
      {
        "id": "lung_cancer_deaths_per_100000_men"
      },
      {
        "id": "prostate_cancer_deaths_per_100000_men"
      },
      {
        "id": "stomach_cancer_deaths_per_100000_men"
      },
      {
        "id": "colonandrectum_cancer_number_of_male_deaths"
      },
      {
        "id": "liver_cancer_number_of_male_deaths"
      },
      {
        "id": "lung_cancer_number_of_male_deaths"
      },
      {
        "id": "prostate_cancer_number_of_male_deaths"
      },
      {
        "id": "stomach_cancer_number_of_male_deaths"
      },
      {
        "id": "total_health_spending_percent_of_gdp"
      },
      {
        "id": "government_share_of_total_health_spending_percent"
      },
      {
        "id": "private_share_of_total_health_spending_percent"
      },
      {
        "id": "out_of_pocket_share_of_total_health_spending_percent"
      },
      {
        "id": "government_health_spending_of_total_gov_spending_percent"
      },
      {
        "id": "total_health_spending_per_person_international_dollar"
      },
      {
        "id": "government_health_spending_per_person_international_dollar"
      },
      {
        "id": "total_health_spending_per_person_us"
      },
      {
        "id": "government_health_spending_per_person_us"
      },
      {
        "id": "medical_doctors_per_1000_people"
      },
      {
        "id": "people_living_with_hiv_number_all_ages"
      },
      {
        "id": "adults_with_hiv_percent_age_15_49"
      },
      {
        "id": "newly_hiv_infected_number_all_ages"
      },
      {
        "id": "newly_hiv_infected_percent_age_15_49"
      },
      {
        "id": "annual_hiv_deaths_number_all_ages"
      },
      {
        "id": "art_coverage_percent_cd4_l_350"
      },
      {
        "id": "malaria_cases_per_100000_reported"
      },
      {
        "id": "malaria_deaths_per_100000_reported"
      },
      {
        "id": "malaria_number_of_cases_reported"
      },
      {
        "id": "malaria_number_of_deaths_reported"
      },
      {
        "id": "births_attended_by_skilled_health_staff_percent_of_total"
      },
      {
        "id": "contraceptive_use_percent_of_women_ages_15_49"
      },
      {
        "id": "maternal_mortality_ratio_per_100000_live_births"
      },
      {
        "id": "maternal_deaths_total_number"
      },
      {
        "id": "maternal_deaths_lifetime_risk_per_1000"
      },
      {
        "id": "stillbirths_per_1000_births"
      },
      {
        "id": "suicide_per_100000_people"
      },
      {
        "id": "malnutrition_weight_for_age_percent_of_children_under_5"
      },
      {
        "id": "sugar_per_person_g_per_day"
      },
      {
        "id": "food_supply_kilocalories_per_person_and_day"
      },
      {
        "id": "alcohol_consumption_per_adult_15plus_litres"
      },
      {
        "id": "smoking_adults_percent_of_population_over_age_15"
      },
      {
        "id": "smoking_women_percent_of_women_over_age_15"
      },
      {
        "id": "smoking_men_percent_of_men_over_age_15"
      },
      {
        "id": "body_mass_index_bmi_men_kgperm2"
      },
      {
        "id": "body_mass_index_bmi_women_kgperm2"
      },
      {
        "id": "blood_pressure_sbp_men_mmhg"
      },
      {
        "id": "blood_pressure_sbp_women_mmhg"
      },
      {
        "id": "cholesterol_fat_in_blood_men_mmolperl"
      },
      {
        "id": "cholesterol_fat_in_blood_women_mmolperl"
      },
      {
        "id": "infectious_tb_new_cases_per_100000_estimated"
      },
      {
        "id": "infectious_tb_new_cases_per_100000_reported"
      },
      {
        "id": "infectious_tb_number_of_new_cases_estimated"
      },
      {
        "id": "infectious_tb_number_of_new_cases_reported"
      },
      {
        "id": "infectious_tb_detection_rate_percent"
      },
      {
        "id": "infectious_tb_detection_rate_percent_dots_only"
      },
      {
        "id": "infectious_tb_treatment_dots_completed_percent"
      },
      {
        "id": "tb_programme_dots_population_coverage_percent"
      },
      {
        "id": "all_forms_of_tb_new_cases_per_100000_estimated"
      },
      {
        "id": "all_forms_of_tb_existing_cases_per_100000_estimated"
      },
      {
        "id": "all_forms_of_tb_deaths_per_100000_estimated"
      },
      {
        "id": "all_forms_of_tb_new_cases_per_100000_reported"
      },
      {
        "id": "all_forms_of_tb_number_of_new_cases_estimated"
      },
      {
        "id": "all_forms_of_tb_number_of_existing_cases_estimated"
      },
      {
        "id": "all_forms_of_tb_number_of_deaths_estimated"
      },
      {
        "id": "all_forms_of_tb_number_of_new_cases_reported"
      },
      {
        "id": "all_forms_of_tb_detection_rate_percent"
      },
      {
        "id": "all_forms_of_tb_detection_rate_percent_dots_only"
      },
      {
        "id": "tb_with_hivplus_new_cases_per_100000_estimated"
      },
      {
        "id": "tb_with_hivplus_existing_cases_per_100000_estimated"
      },
      {
        "id": "tb_with_hivplus_deaths_per_100000_estimated"
      },
      {
        "id": "tb_with_hivplus_number_of_new_cases_estimated"
      },
      {
        "id": "tb_with_hivplus_number_of_existing_cases_estimated"
      },
      {
        "id": "tb_with_hivplus_number_of_deaths_estimated"
      },
      {
        "id": "bad_teeth_per_child_12_yr"
      },
      {
        "id": "dtp3_immunized_percent_of_one_year_olds"
      },
      {
        "id": "hepb3_immunized_percent_of_one_year_olds"
      },
      {
        "id": "hib3_immunized_percent_of_one_year_olds"
      },
      {
        "id": "mcv_immunized_percent_of_one_year_olds"
      },
      {
        "id": "pab_immunized_percent_of_newborns"
      },
      {
        "id": "broadband_subscribers"
      },
      {
        "id": "broadband_subscribers_per_100_people"
      },
      {
        "id": "cell_phones_total"
      },
      {
        "id": "cell_phones_per_100_people"
      },
      {
        "id": "fixed_line_and_mobile_phone_subscribers_per_100_people"
      },
      {
        "id": "internet_users_total_number"
      },
      {
        "id": "internet_users_per_100_people"
      },
      {
        "id": "personal_computers_total"
      },
      {
        "id": "personal_computers_per_100_people"
      },
      {
        "id": "improved_sanitation_overall_access_percent"
      },
      {
        "id": "improved_sanitation_urban_access_percent"
      },
      {
        "id": "improved_sanitation_rural_access_percent"
      },
      {
        "id": "roads_paved_percent_of_total_roads"
      },
      {
        "id": "improved_water_source_overall_access_percent"
      },
      {
        "id": "improved_water_source_urban_access_percent"
      },
      {
        "id": "improved_water_source_rural_access_percent"
      },
      {
        "id": "population_aged_0_4_years_both_sexes_percent"
      },
      {
        "id": "population_aged_5_9_years_both_sexes_percent"
      },
      {
        "id": "population_aged_10_14_years_both_sexes_percent"
      },
      {
        "id": "population_aged_15_19_years_both_sexes_percent"
      },
      {
        "id": "population_aged_20_39_years_both_sexes_percent"
      },
      {
        "id": "population_aged_40_59_years_both_sexes_percent"
      },
      {
        "id": "population_aged_60plus_years_both_sexes_percent"
      },
      {
        "id": "population_aged_0_4_years_total_number"
      },
      {
        "id": "population_aged_5_9_years_total_number"
      },
      {
        "id": "population_aged_10_14_years_total_number"
      },
      {
        "id": "population_aged_15_19_years_total_number"
      },
      {
        "id": "population_aged_20_39_years_total_number"
      },
      {
        "id": "population_aged_40_59_years_total_number"
      },
      {
        "id": "population_aged_60plus_years_total_number"
      },
      {
        "id": "population_aged_0_4_years_female_percent"
      },
      {
        "id": "population_aged_5_9_years_female_percent"
      },
      {
        "id": "population_aged_10_14_years_female_percent"
      },
      {
        "id": "population_aged_15_19_years_female_percent"
      },
      {
        "id": "population_aged_20_39_years_female_percent"
      },
      {
        "id": "population_aged_40_59_years_female_percent"
      },
      {
        "id": "population_aged_60plus_years_female_percent"
      },
      {
        "id": "population_aged_0_4_years_male_percent"
      },
      {
        "id": "population_aged_5_9_years_male_percent"
      },
      {
        "id": "population_aged_10_14_years_male_percent"
      },
      {
        "id": "population_aged_15_19_years_male_percent"
      },
      {
        "id": "population_aged_20_39_years_male_percent"
      },
      {
        "id": "population_aged_40_59_years_male_percent"
      },
      {
        "id": "population_aged_60plus_years_male_percent"
      },
      {
        "id": "population_growth_annual_percent"
      },
      {
        "id": "crude_birth_rate_births_per_1000_population"
      },
      {
        "id": "crude_death_rate_deaths_per_1000_population"
      },
      {
        "id": "teen_fertility_rate_births_per_1000_women_ages_15_19"
      },
      {
        "id": "new_births_total_number_estimated"
      },
      {
        "id": "sex_ratio_all_age_groups"
      },
      {
        "id": "sex_ratio_0_14_years"
      },
      {
        "id": "sex_ratio_15_24_years"
      },
      {
        "id": "sex_ratio_15_49_years"
      },
      {
        "id": "sex_ratio_above_50_years"
      },
      {
        "id": "population_in_urban_agglomerations_m_1_million_percent_of_total"
      },
      {
        "id": "urban_population"
      },
      {
        "id": "urban_population_percent_of_total"
      },
      {
        "id": "urban_population_growth_annual_percent"
      },
      {
        "id": "children_and_elderly_per_100_adults"
      },
      {
        "id": "median_age_years"
      },
      {
        "id": "population_density_per_square_km"
      },
      {
        "id": "population_total"
      },
      {
        "id": "age_at_1st_marriage_women"
      },
      {
        "id": "murder_per_100000_people"
      },
      {
        "id": "corruption_perception_index_cpi"
      },
      {
        "id": "democracy_score_use_as_color"
      },
      {
        "id": "hdi_human_development_index"
      },
      {
        "id": "agriculture_workers_percent_of_labour_force"
      },
      {
        "id": "industry_workers_percent_of_labour_force"
      },
      {
        "id": "service_workers_percent_of_labour_force"
      },
      {
        "id": "female_agriculture_workers_percent_of_female_labour_force"
      },
      {
        "id": "female_industry_workers_percent_of_female_labour_force"
      },
      {
        "id": "female_service_workers_percent_of_female_labour_force"
      },
      {
        "id": "male_agriculture_workers_percent_of_male_labour_force"
      },
      {
        "id": "male_industry_workers_percent_of_male_labour_force"
      },
      {
        "id": "male_service_workers_percent_of_male_labour_force"
      },
      {
        "id": "family_workers_percent_of_labour_force"
      },
      {
        "id": "salaried_workers_percent_of_labour_force"
      },
      {
        "id": "self_employed_percent_of_labour_force"
      },
      {
        "id": "female_family_workers_percent_of_female_labour_force"
      },
      {
        "id": "female_salaried_workers_percent_of_female_labour_force"
      },
      {
        "id": "female_self_employed_percent_of_female_labour_force"
      },
      {
        "id": "male_family_workers_percent_of_male_labour_force"
      },
      {
        "id": "male_salaried_workers_percent_of_male_labour_force"
      },
      {
        "id": "male_self_employed_percent_of_male_labour_force"
      },
      {
        "id": "aged_15_24_employment_rate_percent"
      },
      {
        "id": "aged_15plus_employment_rate_percent"
      },
      {
        "id": "females_aged_15_24_employment_rate_percent"
      },
      {
        "id": "females_aged_15plus_employment_rate_percent"
      },
      {
        "id": "males_aged_15_24_employment_rate_percent"
      },
      {
        "id": "males_aged_15plus_employment_rate_percent"
      },
      {
        "id": "aged_15_64_labour_force_participation_rate_percent"
      },
      {
        "id": "aged_25_54_labour_force_participation_rate_percent"
      },
      {
        "id": "aged_15plus_labour_force_participation_rate_percent"
      },
      {
        "id": "aged_65plus_labour_force_participation_rate_percent"
      },
      {
        "id": "females_aged_15_64_labour_force_participation_rate_percent"
      },
      {
        "id": "females_aged_25_54_labour_force_participation_rate_percent"
      },
      {
        "id": "females_aged_15plus_labour_force_participation_rate_percent"
      },
      {
        "id": "females_aged_65plus_labour_force_participation_rate_percent"
      },
      {
        "id": "males_aged_15_64_labour_force_participation_rate_percent"
      },
      {
        "id": "males_aged_25_54_labour_force_participation_rate_percent"
      },
      {
        "id": "males_aged_15plus_labour_force_participation_rate_percent"
      },
      {
        "id": "males_aged_65plus_labour_force_participation_rate_percent"
      },
      {
        "id": "aged_15_24_unemployment_rate_percent"
      },
      {
        "id": "aged_25_54_unemployment_rate_percent"
      },
      {
        "id": "aged_15plus_unemployment_rate_percent"
      },
      {
        "id": "aged_55plus_unemployment_rate_percent"
      },
      {
        "id": "long_term_unemployment_rate_percent"
      },
      {
        "id": "females_aged_15_24_unemployment_rate_percent"
      },
      {
        "id": "females_aged_25_54_unemployment_rate_percent"
      },
      {
        "id": "females_aged_15plus_unemployment_rate_percent"
      },
      {
        "id": "females_aged_55plus_unemployment_rate_percent"
      },
      {
        "id": "female_long_term_unemployment_rate_percent"
      },
      {
        "id": "males_aged_15_24_unemployment_rate_percent"
      },
      {
        "id": "males_aged_25_54_unemployment_rate_percent"
      },
      {
        "id": "males_aged_15plus_unemployment_rate_percent"
      },
      {
        "id": "males_aged_55plus_unemployment_rate_percent"
      },
      {
        "id": "male_long_term_unemployment_rate_percent"
      },
      {
        "id": "under_five_mortality_from_cme_per_1000_born"
      },
      {
        "id": "under_five_mortality_from_ihme_per_1000_born"
      },
      {
        "id": "old_version_of_income_per_person_version_3"
      },
      {
        "id": "old_version_of_income_per_person_version_8"
      },
      {
        "id": "alternative_gdppercapita_ppp_inflation_adjusted_from_pwt"
      },
      {
        "id": "subsistence_incomes_per_person"
      },
      {
        "id": "alternative_poverty_percent_below_nationally_defined_poverty"
      },
      {
        "id": "data_quality_income_per_person"
      },
      {
        "id": "data_quality_life_expectancy"
      },
      {
        "id": "data_quality_population"
      },
      {
        "id": "estimate_or_projection_of_under_five_mortality_rate_from_ihme"
      },
      {
        "id": "data_quality_children_per_woman"
      },
      {
        "id": "data_method_maternal_mortality"
      },
      {
        "id": "economic_growth_over_the_past_10_years"
      },
      {
        "id": "how_far_to_the_north"
      },
      {
        "id": "income_per_person_with_projections"
      },
      {
        "id": "life_expectancy_at_birth_with_projections"
      },
      {
        "id": "children_per_woman_total_fertility_with_projections"
      },
      {
        "id": "total_population_with_projections"
      },
      {
        "id": "female_population_with_projections"
      },
      {
        "id": "male_population_with_projections"
      },
      {
        "id": "population_growth_annual_percent_with_projections"
      },
      {
        "id": "year_categorization_1820_2010"
      },
      {
        "id": "year_categorization_1950"
      },
      {
        "id": "traffic_deaths_per_100000_people"
      },
      {
        "id": "burns_deaths_per_100000_people"
      },
      {
        "id": "drownings_per_100000_people"
      },
      {
        "id": "falls_deaths_per_100000_people"
      },
      {
        "id": "poisonings_deaths_per_100000_people"
      },
      {
        "id": "cars_trucks_and_buses_per_1000_persons"
      },
      {
        "id": "traffic_deaths_women_per_100000_people"
      },
      {
        "id": "traffic_deaths_men_per_100000_people"
      },
      {
        "id": "suicide_women_per_100000_people"
      },
      {
        "id": "suicide_men_per_100000_people"
      },
      {
        "id": "murdered_women_per_100000_people"
      },
      {
        "id": "murdered_men_per_100000_people"
      },
      {
        "id": "car_deaths_per_100000_people"
      },
      {
        "id": "motorcycle_deaths_per_100000_people"
      },
      {
        "id": "murdered_children_0_14_per_100000_people"
      },
      {
        "id": "murdered_15_29_per_100000_people"
      },
      {
        "id": "murdered_30_44_per_100000_people"
      },
      {
        "id": "murdered_45_59_per_100000_people"
      },
      {
        "id": "murdered_60plus_per_100000_people"
      },
      {
        "id": "suicide_age_0_14_per_100000_people"
      },
      {
        "id": "suicide_age_15_29_per_100000_people"
      },
      {
        "id": "suicide_age_30_44_per_100000_people"
      },
      {
        "id": "suicide_age_45_59_per_100000_people"
      },
      {
        "id": "suicide_age_60plus_per_100000_people"
      },
      {
        "id": "traffic_mortality_children_0_14_per_100000_people"
      },
      {
        "id": "traffic_mortality_15_29_per_100000_people"
      },
      {
        "id": "traffic_mortality_30_44_per_100000_people"
      },
      {
        "id": "traffic_mortality_45_59_per_100000_people"
      },
      {
        "id": "traffic_mortality_60plus_per_100000_people"
      },
      {
        "id": "ifpri_underweight_children"
      },
      {
        "id": "maternal_mortality_ratio_who"
      },
      {
        "id": "battle_deaths_per_100_000"
      },
      {
        "id": "armed_forces_personnel_total"
      },
      {
        "id": "armed_forces_personnel_percent_of_labor_force"
      },
      {
        "id": "murder_total_deaths"
      },
      {
        "id": "suicide_total_deaths"
      },
      {
        "id": "traffic_total_deaths"
      },
      {
        "id": "debt_servicing_costs_percent_of_exports_and_net_income_from_abroad"
      },
      {
        "id": "external_debt_total_us_not_inflation_adjusted"
      },
      {
        "id": "present_value_of_debt_percent_of_gni"
      },
      {
        "id": "exports_unit_value_index_2000100"
      },
      {
        "id": "imports_unit_value_index_2000100"
      },
      {
        "id": "net_barter_terms_of_trade_2000_100"
      },
      {
        "id": "dead_kids_per_woman"
      },
      {
        "id": "surviving_kids_per_woman"
      },
      {
        "id": "20120905_extreme_poverty_percent_people_below_125_a_day"
      },
      {
        "id": "alternative_gdp_per_capita_ppp_wb"
      },
      {
        "id": "alternative_gdp_per_capita_ppp_pwt_7_1"
      },
      {
        "id": "number_of_child_deaths"
      },
      {
        "id": "energy_supply_per_person_toe"
      },
      {
        "id": "energy_from_solid_biofuels_percent"
      },
      {
        "id": "residential_energy_use_percent"
      },
      {
        "id": "life_expectancy_at_birth_data_from_ihme"
      },
      {
        "id": "children_per_woman_temporary_update"
      },
      {
        "id": "alternative_gdp_per_capita_ppp_pwt_8_0"
      },
      {
        "id": "life_expectancy_male"
      },
      {
        "id": "life_expectancy_female"
      },
      {
        "id": "gdp_total_yearly_growth"
      },
      {
        "id": "gdp_per_capita_yearly_growth"
      },
      {
        "id": "yearly_co2_emissions_1000_tonnes"
      },
      {
        "id": "child_mortality_0_5_year_olds_more_years_version_7"
      },
      {
        "id": "number_of_people_in_poverty"
      },
      {
        "id": "income_per_person_long_series"
      },
      {
        "id": "newborn_mortality_rate_per_1000"
      },
      {
        "id": "newborn_deaths"
      },
      {
        "id": "sg_population"
      },
      {
        "id": "sg_gini"
      },
      {
        "id": "sg_gdp_p_cap_const_ppp2011_dollar"
      },
      {
        "id": "time"
      },
      {
        "id": "_properties",
        "children": [
          {
            "id": "geo"
          },
          {
            "id": "geo.geographic_regions"
          },
          {
            "id": "geo.income_groups"
          },
          {
            "id": "geo.landlocked"
          },
          {
            "id": "geo.g77_and_oecd_countries"
          },
          {
            "id": "geo.geographic_regions_in_4_colors"
          },
          {
            "id": "geo.main_religion_2008"
          },
          {
            "id": "geo.country"
          },
          {
            "id": "geo.world_4region"
          },
          {
            "id": "geo.global"
          },
          {
            "id": "age"
          },
          {
            "id": "latitude"
          },
          {
            "id": "longitude"
          },
          {
            "id": "description"
          },
          {
            "id": "indicator_url"
          },
          {
            "id": "name"
          },
          {
            "id": "unit"
          },
          {
            "id": "interpolation"
          },
          {
            "id": "name_short"
          },
          {
            "id": "name_long"
          },
          {
            "id": "color"
          },
          {
            "id": "gapminder_list"
          },
          {
            "id": "alternative_1"
          },
          {
            "id": "alternative_2"
          },
          {
            "id": "alternative_3"
          },
          {
            "id": "alternative_4_cdiac"
          },
          {
            "id": "pandg"
          },
          {
            "id": "god_id"
          },
          {
            "id": "alt_5"
          },
          {
            "id": "upper_case_name"
          },
          {
            "id": "code"
          },
          {
            "id": "number"
          },
          {
            "id": "gwid"
          },
          {
            "id": "arb1"
          },
          {
            "id": "arb2"
          },
          {
            "id": "arb3"
          },
          {
            "id": "arb4"
          },
          {
            "id": "arb5"
          },
          {
            "id": "arb6"
          },
          {
            "id": "domain"
          },
          {
            "id": "scales"
          },
          {
            "id": "drill_up"
          },
          {
            "id": "geo.name"
          }
        ]
      }
    ]
  }
};

export const translations = {
  "buttons/about": "About",
  "buttons/axes": "X and Y",
  "buttons/axesmc": "X and Y",
  "buttons/axis_x": "X axis",
  "buttons/axis_y": "Y axis",
  "buttons/color": "Color",
  "buttons/colors": "Color",
  "buttons/deselect": "Deselect",
  "buttons/expand": "Expand",
  "buttons/find": "Find",
  "buttons/label": "Labels",
  "buttons/lock": "Lock",
  "buttons/more_options": "Options",
  "buttons/ok": "OK",
  "buttons/opacity": "Opacity",
  "buttons/opacityNonselect": "Opacity of non-selected",
  "buttons/opacityRegular": "Regular opacity",
  "buttons/presentation": "Present",
  "buttons/show": "Show",
  "buttons/showall": "Show all",
  "buttons/size": "Size",
  "buttons/size_label": "Size",
  "buttons/speed": "Speed",
  "buttons/stack": "Stack",
  "buttons/trails": "Trails",
  "buttons/unexpand": "Restore",
  "buttons/zoom": "Zoom",
  "check/adaptMinMaxZoom": "Follow bubbles with zoom",
  "check/noZoomOnScrolling": "Disable mousewheel zoom",
  "check/presentation": "Increase text size for presentation",
  "check/removeLabelBox": "Remove label boxes",
  "indicator/unit": "Unit",
  "mount/extremepoverty": "extreme poverty",
  "mount/manualSorting": "Manual sorting of groups:",
  "mount/maxYmode/immediate": "Immediate",
  "mount/maxYmode/latest": "Latest",
  "mount/maxYmode/total": "Total",
  "mount/merging/none": "None",
  "mount/merging/region": "Regions",
  "mount/merging/world": "World",
  "mount/people": "people",
  "mount/stacking/none": "None",
  "mount/stacking/region": "Regions",
  "mount/stacking/world": "World",
  "mount/title": "Number of people by income",
  "placeholder/search": "Search",
  "popbyage/yearOldsIn": "-year-olds in",
  "region/africa": "Africa",
  "region/all": "World",
  "region/americas": "Americas",
  "region/asia": "Asia",
  "region/europe": "Europe",
  "scaletype/genericLog": "Generic log",
  "scaletype/linear": "linear",
  "scaletype/log": "log",
  "scaletype/ordinal": "Ordinal",
  "scaletype/time": "Time",
  "unit/": "",
  "description/children_per_woman_total_fertility": "Children per woman total fertility",
  "indicator/children_per_woman_total_fertility": "Children per woman total fertility",
  "unit/children_per_woman_total_fertility": "",
  "description/co2_emissions_tonnes_per_person": "Co2 emissions tonnes per person",
  "indicator/co2_emissions_tonnes_per_person": "Co2 emissions tonnes per person",
  "unit/co2_emissions_tonnes_per_person": "",
  "description/income_per_person_gdppercapita_ppp_inflation_adjusted": "Income per person gdppercapita ppp inflation adjusted",
  "indicator/income_per_person_gdppercapita_ppp_inflation_adjusted": "Income per person gdppercapita ppp inflation adjusted",
  "unit/income_per_person_gdppercapita_ppp_inflation_adjusted": "",
  "description/child_mortality_0_5_year_olds_dying_per_1000_born": "Child mortality 0 5 year olds dying per 1000 born",
  "indicator/child_mortality_0_5_year_olds_dying_per_1000_born": "Child mortality 0 5 year olds dying per 1000 born",
  "unit/child_mortality_0_5_year_olds_dying_per_1000_born": "",
  "description/life_expectancy_years": "Life expectancy years",
  "indicator/life_expectancy_years": "Life expectancy years",
  "unit/life_expectancy_years": "",
  "description/aid_given_2007_us": "Aid given 2007 us",
  "indicator/aid_given_2007_us": "Aid given 2007 us",
  "unit/aid_given_2007_us": "",
  "description/aid_given_per_person_2007_us": "Aid given per person 2007 us",
  "indicator/aid_given_per_person_2007_us": "Aid given per person 2007 us",
  "unit/aid_given_per_person_2007_us": "",
  "description/aid_given_percent_of_gni": "Aid given percent of gni",
  "indicator/aid_given_percent_of_gni": "Aid given percent of gni",
  "unit/aid_given_percent_of_gni": "",
  "description/water_and_sanitation_aid_given_percent_of_aid": "Water and sanitation aid given percent of aid",
  "indicator/water_and_sanitation_aid_given_percent_of_aid": "Water and sanitation aid given percent of aid",
  "unit/water_and_sanitation_aid_given_percent_of_aid": "",
  "description/economical_infrastructure_aid_given_percent_of_aid": "Economical infrastructure aid given percent of aid",
  "indicator/economical_infrastructure_aid_given_percent_of_aid": "Economical infrastructure aid given percent of aid",
  "unit/economical_infrastructure_aid_given_percent_of_aid": "",
  "description/production_sector_aid_given_percent_of_aid": "Production sector aid given percent of aid",
  "indicator/production_sector_aid_given_percent_of_aid": "Production sector aid given percent of aid",
  "unit/production_sector_aid_given_percent_of_aid": "",
  "description/multisector_cross_cutting_aid_given_percent_of_aid": "Multisector cross cutting aid given percent of aid",
  "indicator/multisector_cross_cutting_aid_given_percent_of_aid": "Multisector cross cutting aid given percent of aid",
  "unit/multisector_cross_cutting_aid_given_percent_of_aid": "",
  "description/education_aid_given_percent_of_aid": "Education aid given percent of aid",
  "indicator/education_aid_given_percent_of_aid": "Education aid given percent of aid",
  "unit/education_aid_given_percent_of_aid": "",
  "description/health_aid_given_percent_of_aid": "Health aid given percent of aid",
  "indicator/health_aid_given_percent_of_aid": "Health aid given percent of aid",
  "unit/health_aid_given_percent_of_aid": "",
  "description/population_policies_aid_given_percent_of_aid": "Population policies aid given percent of aid",
  "indicator/population_policies_aid_given_percent_of_aid": "Population policies aid given percent of aid",
  "unit/population_policies_aid_given_percent_of_aid": "",
  "description/government_and_society_aid_given_percent_of_aid": "Government and society aid given percent of aid",
  "indicator/government_and_society_aid_given_percent_of_aid": "Government and society aid given percent of aid",
  "unit/government_and_society_aid_given_percent_of_aid": "",
  "description/other_social_services_aid_given_percent_of_aid": "Other social services aid given percent of aid",
  "indicator/other_social_services_aid_given_percent_of_aid": "Other social services aid given percent of aid",
  "unit/other_social_services_aid_given_percent_of_aid": "",
  "description/aid_received_total_us_inflation_adjusted": "Aid received total us inflation adjusted",
  "indicator/aid_received_total_us_inflation_adjusted": "Aid received total us inflation adjusted",
  "unit/aid_received_total_us_inflation_adjusted": "",
  "description/aid_received_per_person_current_us": "Aid received per person current us",
  "indicator/aid_received_per_person_current_us": "Aid received per person current us",
  "unit/aid_received_per_person_current_us": "",
  "description/aid_received_percent_of_gni": "Aid received percent of gni",
  "indicator/aid_received_percent_of_gni": "Aid received percent of gni",
  "unit/aid_received_percent_of_gni": "",
  "description/dollar_billionaires_per_million_people": "Dollar billionaires per million people",
  "indicator/dollar_billionaires_per_million_people": "Dollar billionaires per million people",
  "unit/dollar_billionaires_per_million_people": "",
  "description/average_age_of_dollar_billionaires_years": "Average age of dollar billionaires years",
  "indicator/average_age_of_dollar_billionaires_years": "Average age of dollar billionaires years",
  "unit/average_age_of_dollar_billionaires_years": "",
  "description/total_number_of_dollar_billionaires": "Total number of dollar billionaires",
  "indicator/total_number_of_dollar_billionaires": "Total number of dollar billionaires",
  "unit/total_number_of_dollar_billionaires": "",
  "description/debt_to_foreigners_by_public_and_private_percent_of_gni": "Debt to foreigners by public and private percent of gni",
  "indicator/debt_to_foreigners_by_public_and_private_percent_of_gni": "Debt to foreigners by public and private percent of gni",
  "unit/debt_to_foreigners_by_public_and_private_percent_of_gni": "",
  "description/total_reserves_percent_of_debt_to_foreigners": "Total reserves percent of debt to foreigners",
  "indicator/total_reserves_percent_of_debt_to_foreigners": "Total reserves percent of debt to foreigners",
  "unit/total_reserves_percent_of_debt_to_foreigners": "",
  "description/total_gdp_us_inflation_adjusted": "Total gdp us inflation adjusted",
  "indicator/total_gdp_us_inflation_adjusted": "Total gdp us inflation adjusted",
  "unit/total_gdp_us_inflation_adjusted": "",
  "description/gdppercapita_us_inflation_adjusted": "Gdppercapita us inflation adjusted",
  "indicator/gdppercapita_us_inflation_adjusted": "Gdppercapita us inflation adjusted",
  "unit/gdppercapita_us_inflation_adjusted": "",
  "description/gdpperemployee_us_inflation_adjusted": "Gdpperemployee us inflation adjusted",
  "indicator/gdpperemployee_us_inflation_adjusted": "Gdpperemployee us inflation adjusted",
  "unit/gdpperemployee_us_inflation_adjusted": "",
  "description/gdpperworking_hour_us_inflation_adjusted": "Gdpperworking hour us inflation adjusted",
  "indicator/gdpperworking_hour_us_inflation_adjusted": "Gdpperworking hour us inflation adjusted",
  "unit/gdpperworking_hour_us_inflation_adjusted": "",
  "description/gdppercapita_growth_over_next_10_years": "Gdppercapita growth over next 10 years",
  "indicator/gdppercapita_growth_over_next_10_years": "Gdppercapita growth over next 10 years",
  "unit/gdppercapita_growth_over_next_10_years": "",
  "description/gdppercapita_growth_percent_per_year": "Gdppercapita growth percent per year",
  "indicator/gdppercapita_growth_percent_per_year": "Gdppercapita growth percent per year",
  "unit/gdppercapita_growth_percent_per_year": "",
  "description/total_gni_ppp_current_international": "Total gni ppp current international",
  "indicator/total_gni_ppp_current_international": "Total gni ppp current international",
  "unit/total_gni_ppp_current_international": "",
  "description/gnipercapita_constant_2000_us": "Gnipercapita constant 2000 us",
  "indicator/gnipercapita_constant_2000_us": "Gnipercapita constant 2000 us",
  "unit/gnipercapita_constant_2000_us": "",
  "description/gnipercapita_atlasmethod_current_us": "Gnipercapita atlasmethod current us",
  "indicator/gnipercapita_atlasmethod_current_us": "Gnipercapita atlasmethod current us",
  "unit/gnipercapita_atlasmethod_current_us": "",
  "description/gnipercapita_ppp_current_international": "Gnipercapita ppp current international",
  "indicator/gnipercapita_ppp_current_international": "Gnipercapita ppp current international",
  "unit/gnipercapita_ppp_current_international": "",
  "description/inequality_index_gini": "Inequality index gini",
  "indicator/inequality_index_gini": "Inequality index gini",
  "unit/inequality_index_gini": "",
  "description/income_share_of_richest_10percent": "Income share of richest 10percent",
  "indicator/income_share_of_richest_10percent": "Income share of richest 10percent",
  "unit/income_share_of_richest_10percent": "",
  "description/income_share_of_richest_20percent": "Income share of richest 20percent",
  "indicator/income_share_of_richest_20percent": "Income share of richest 20percent",
  "unit/income_share_of_richest_20percent": "",
  "description/income_share_of_2nd_richest_20percent": "Income share of 2nd richest 20percent",
  "indicator/income_share_of_2nd_richest_20percent": "Income share of 2nd richest 20percent",
  "unit/income_share_of_2nd_richest_20percent": "",
  "description/income_share_of_middle_20percent": "Income share of middle 20percent",
  "indicator/income_share_of_middle_20percent": "Income share of middle 20percent",
  "unit/income_share_of_middle_20percent": "",
  "description/income_share_of_2nd_poorest_20percent": "Income share of 2nd poorest 20percent",
  "indicator/income_share_of_2nd_poorest_20percent": "Income share of 2nd poorest 20percent",
  "unit/income_share_of_2nd_poorest_20percent": "",
  "description/income_share_of_poorest_20percent": "Income share of poorest 20percent",
  "indicator/income_share_of_poorest_20percent": "Income share of poorest 20percent",
  "unit/income_share_of_poorest_20percent": "",
  "description/income_share_of_poorest_10percent": "Income share of poorest 10percent",
  "indicator/income_share_of_poorest_10percent": "Income share of poorest 10percent",
  "unit/income_share_of_poorest_10percent": "",
  "description/inflation_annual_percent": "Inflation annual percent",
  "indicator/inflation_annual_percent": "Inflation annual percent",
  "unit/inflation_annual_percent": "",
  "description/central_bank_discount_rate_annual_percent": "Central bank discount rate annual percent",
  "indicator/central_bank_discount_rate_annual_percent": "Central bank discount rate annual percent",
  "unit/central_bank_discount_rate_annual_percent": "",
  "description/investments_percent_of_gdp": "Investments percent of gdp",
  "indicator/investments_percent_of_gdp": "Investments percent of gdp",
  "unit/investments_percent_of_gdp": "",
  "description/tax_revenue_percent_of_gdp": "Tax revenue percent of gdp",
  "indicator/tax_revenue_percent_of_gdp": "Tax revenue percent of gdp",
  "unit/tax_revenue_percent_of_gdp": "",
  "description/foreign_direct_investment_net_inflows_percent_of_gdp": "Foreign direct investment net inflows percent of gdp",
  "indicator/foreign_direct_investment_net_inflows_percent_of_gdp": "Foreign direct investment net inflows percent of gdp",
  "unit/foreign_direct_investment_net_inflows_percent_of_gdp": "",
  "description/foreign_direct_investment_net_outflows_percent_of_gdp": "Foreign direct investment net outflows percent of gdp",
  "indicator/foreign_direct_investment_net_outflows_percent_of_gdp": "Foreign direct investment net outflows percent of gdp",
  "unit/foreign_direct_investment_net_outflows_percent_of_gdp": "",
  "description/patent_applications_total": "Patent applications total",
  "indicator/patent_applications_total": "Patent applications total",
  "unit/patent_applications_total": "",
  "description/patents_granted_total": "Patents granted total",
  "indicator/patents_granted_total": "Patents granted total",
  "unit/patents_granted_total": "",
  "description/patents_in_force_total": "Patents in force total",
  "indicator/patents_in_force_total": "Patents in force total",
  "unit/patents_in_force_total": "",
  "description/poverty_percent_people_below_2_a_day": "Poverty percent people below 2 a day",
  "indicator/poverty_percent_people_below_2_a_day": "Poverty percent people below 2 a day",
  "unit/poverty_percent_people_below_2_a_day": "",
  "description/rural_poverty_percent_rural_people_below_national_rural": "Rural poverty percent rural people below national rural",
  "indicator/rural_poverty_percent_rural_people_below_national_rural": "Rural poverty percent rural people below national rural",
  "unit/rural_poverty_percent_rural_people_below_national_rural": "",
  "description/urban_poverty_percent_urban_people_below_national_urban": "Urban poverty percent urban people below national urban",
  "indicator/urban_poverty_percent_urban_people_below_national_urban": "Urban poverty percent urban people below national urban",
  "unit/urban_poverty_percent_urban_people_below_national_urban": "",
  "description/extreme_poverty_percent_people_below_125_a_day": "Extreme poverty percent people below 125 a day",
  "indicator/extreme_poverty_percent_people_below_125_a_day": "Extreme poverty percent people below 125 a day",
  "unit/extreme_poverty_percent_people_below_125_a_day": "",
  "description/agriculture_percent_of_gdp": "Agriculture percent of gdp",
  "indicator/agriculture_percent_of_gdp": "Agriculture percent of gdp",
  "unit/agriculture_percent_of_gdp": "",
  "description/industry_percent_of_gdp": "Industry percent of gdp",
  "indicator/industry_percent_of_gdp": "Industry percent of gdp",
  "unit/industry_percent_of_gdp": "",
  "description/services_percent_of_gdp": "Services percent of gdp",
  "indicator/services_percent_of_gdp": "Services percent of gdp",
  "unit/services_percent_of_gdp": "",
  "description/exports_percent_of_gdp": "Exports percent of gdp",
  "indicator/exports_percent_of_gdp": "Exports percent of gdp",
  "unit/exports_percent_of_gdp": "",
  "description/imports_percent_of_gdp": "Imports percent of gdp",
  "indicator/imports_percent_of_gdp": "Imports percent of gdp",
  "unit/imports_percent_of_gdp": "",
  "description/arms_exports_us_inflation_adjusted": "Arms exports us inflation adjusted",
  "indicator/arms_exports_us_inflation_adjusted": "Arms exports us inflation adjusted",
  "unit/arms_exports_us_inflation_adjusted": "",
  "description/arms_imports_us_inflation_adjusted": "Arms imports us inflation adjusted",
  "indicator/arms_imports_us_inflation_adjusted": "Arms imports us inflation adjusted",
  "unit/arms_imports_us_inflation_adjusted": "",
  "description/total_gdp_ppp_inflation_adjusted": "Total gdp ppp inflation adjusted",
  "indicator/total_gdp_ppp_inflation_adjusted": "Total gdp ppp inflation adjusted",
  "unit/total_gdp_ppp_inflation_adjusted": "",
  "description/high_technology_exports_percent_of_manufactured_exports": "High technology exports percent of manufactured exports",
  "indicator/high_technology_exports_percent_of_manufactured_exports": "High technology exports percent of manufactured exports",
  "unit/high_technology_exports_percent_of_manufactured_exports": "",
  "description/merchandise_trade_percent_of_gdp": "Merchandise trade percent of gdp",
  "indicator/merchandise_trade_percent_of_gdp": "Merchandise trade percent of gdp",
  "unit/merchandise_trade_percent_of_gdp": "",
  "description/trade_balance_us_not_inflation_adjusted": "Trade balance us not inflation adjusted",
  "indicator/trade_balance_us_not_inflation_adjusted": "Trade balance us not inflation adjusted",
  "unit/trade_balance_us_not_inflation_adjusted": "",
  "description/trade_balance_percent_of_gdp": "Trade balance percent of gdp",
  "indicator/trade_balance_percent_of_gdp": "Trade balance percent of gdp",
  "unit/trade_balance_percent_of_gdp": "",
  "description/hourly_compensation_us": "Hourly compensation us",
  "indicator/hourly_compensation_us": "Hourly compensation us",
  "unit/hourly_compensation_us": "",
  "description/working_hours_per_week": "Working hours per week",
  "indicator/working_hours_per_week": "Working hours per week",
  "unit/working_hours_per_week": "",
  "description/market_value_of_listed_companies_percent_of_gdp": "Market value of listed companies percent of gdp",
  "indicator/market_value_of_listed_companies_percent_of_gdp": "Market value of listed companies percent of gdp",
  "unit/market_value_of_listed_companies_percent_of_gdp": "",
  "description/military_expenditure_percent_of_gdp": "Military expenditure percent of gdp",
  "indicator/military_expenditure_percent_of_gdp": "Military expenditure percent of gdp",
  "unit/military_expenditure_percent_of_gdp": "",
  "description/math_achievement_4th_grade": "Math achievement 4th grade",
  "indicator/math_achievement_4th_grade": "Math achievement 4th grade",
  "unit/math_achievement_4th_grade": "",
  "description/math_achievement_8th_grade": "Math achievement 8th grade",
  "indicator/math_achievement_8th_grade": "Math achievement 8th grade",
  "unit/math_achievement_8th_grade": "",
  "description/ratio_of_girls_to_boys_in_primary_and_secondary_education_perc": "Ratio of girls to boys in primary and secondary education perc",
  "indicator/ratio_of_girls_to_boys_in_primary_and_secondary_education_perc": "Ratio of girls to boys in primary and secondary education perc",
  "unit/ratio_of_girls_to_boys_in_primary_and_secondary_education_perc": "",
  "description/ratio_of_young_literate_females_to_males_percent_ages_15_24": "Ratio of young literate females to males percent ages 15 24",
  "indicator/ratio_of_young_literate_females_to_males_percent_ages_15_24": "Ratio of young literate females to males percent ages 15 24",
  "unit/ratio_of_young_literate_females_to_males_percent_ages_15_24": "",
  "description/literacy_rate_adult_female_percent_of_females_ages_15_above": "Literacy rate adult female percent of females ages 15 above",
  "indicator/literacy_rate_adult_female_percent_of_females_ages_15_above": "Literacy rate adult female percent of females ages 15 above",
  "unit/literacy_rate_adult_female_percent_of_females_ages_15_above": "",
  "description/literacy_rate_adult_male_percent_of_males_ages_15_and_above": "Literacy rate adult male percent of males ages 15 and above",
  "indicator/literacy_rate_adult_male_percent_of_males_ages_15_and_above": "Literacy rate adult male percent of males ages 15 and above",
  "unit/literacy_rate_adult_male_percent_of_males_ages_15_and_above": "",
  "description/literacy_rate_adult_total_percent_of_people_ages_15_and_above": "Literacy rate adult total percent of people ages 15 and above",
  "indicator/literacy_rate_adult_total_percent_of_people_ages_15_and_above": "Literacy rate adult total percent of people ages 15 and above",
  "unit/literacy_rate_adult_total_percent_of_people_ages_15_and_above": "",
  "description/literacy_rate_youth_female_percent_of_females_ages_15_24": "Literacy rate youth female percent of females ages 15 24",
  "indicator/literacy_rate_youth_female_percent_of_females_ages_15_24": "Literacy rate youth female percent of females ages 15 24",
  "unit/literacy_rate_youth_female_percent_of_females_ages_15_24": "",
  "description/literacy_rate_youth_male_percent_of_males_ages_15_24": "Literacy rate youth male percent of males ages 15 24",
  "indicator/literacy_rate_youth_male_percent_of_males_ages_15_24": "Literacy rate youth male percent of males ages 15 24",
  "unit/literacy_rate_youth_male_percent_of_males_ages_15_24": "",
  "description/literacy_rate_youth_total_percent_of_people_ages_15_24": "Literacy rate youth total percent of people ages 15 24",
  "indicator/literacy_rate_youth_total_percent_of_people_ages_15_24": "Literacy rate youth total percent of people ages 15 24",
  "unit/literacy_rate_youth_total_percent_of_people_ages_15_24": "",
  "description/children_out_of_school_primary": "Children out of school primary",
  "indicator/children_out_of_school_primary": "Children out of school primary",
  "unit/children_out_of_school_primary": "",
  "description/children_out_of_school_primary_female": "Children out of school primary female",
  "indicator/children_out_of_school_primary_female": "Children out of school primary female",
  "unit/children_out_of_school_primary_female": "",
  "description/children_out_of_school_primary_male": "Children out of school primary male",
  "indicator/children_out_of_school_primary_male": "Children out of school primary male",
  "unit/children_out_of_school_primary_male": "",
  "description/primary_completion_rate_total_percent_of_relevant_age_group": "Primary completion rate total percent of relevant age group",
  "indicator/primary_completion_rate_total_percent_of_relevant_age_group": "Primary completion rate total percent of relevant age group",
  "unit/primary_completion_rate_total_percent_of_relevant_age_group": "",
  "description/primary_school_completion_percent_of_boys": "Primary school completion percent of boys",
  "indicator/primary_school_completion_percent_of_boys": "Primary school completion percent of boys",
  "unit/primary_school_completion_percent_of_boys": "",
  "description/primary_school_completion_percent_of_girls": "Primary school completion percent of girls",
  "indicator/primary_school_completion_percent_of_girls": "Primary school completion percent of girls",
  "unit/primary_school_completion_percent_of_girls": "",
  "description/expenditure_per_student_primary_percent_of_gdp_per_person": "Expenditure per student primary percent of gdp per person",
  "indicator/expenditure_per_student_primary_percent_of_gdp_per_person": "Expenditure per student primary percent of gdp per person",
  "unit/expenditure_per_student_primary_percent_of_gdp_per_person": "",
  "description/expenditure_per_student_secondary_percent_of_gdp_per_person": "Expenditure per student secondary percent of gdp per person",
  "indicator/expenditure_per_student_secondary_percent_of_gdp_per_person": "Expenditure per student secondary percent of gdp per person",
  "unit/expenditure_per_student_secondary_percent_of_gdp_per_person": "",
  "description/expenditure_per_student_tertiary_percent_of_gdp_per_person": "Expenditure per student tertiary percent of gdp per person",
  "indicator/expenditure_per_student_tertiary_percent_of_gdp_per_person": "Expenditure per student tertiary percent of gdp per person",
  "unit/expenditure_per_student_tertiary_percent_of_gdp_per_person": "",
  "description/mean_years_in_school_women_25_years_and_older": "Mean years in school women 25 years and older",
  "indicator/mean_years_in_school_women_25_years_and_older": "Mean years in school women 25 years and older",
  "unit/mean_years_in_school_women_25_years_and_older": "",
  "description/mean_years_in_school_men_25_years_and_older": "Mean years in school men 25 years and older",
  "indicator/mean_years_in_school_men_25_years_and_older": "Mean years in school men 25 years and older",
  "unit/mean_years_in_school_men_25_years_and_older": "",
  "description/mean_years_in_school_women_25_to_34_years": "Mean years in school women 25 to 34 years",
  "indicator/mean_years_in_school_women_25_to_34_years": "Mean years in school women 25 to 34 years",
  "unit/mean_years_in_school_women_25_to_34_years": "",
  "description/mean_years_in_school_men_25_to_34_years": "Mean years in school men 25 to 34 years",
  "indicator/mean_years_in_school_men_25_to_34_years": "Mean years in school men 25 to 34 years",
  "unit/mean_years_in_school_men_25_to_34_years": "",
  "description/mean_years_in_school_women_of_reproductive_age_15_to_44": "Mean years in school women of reproductive age 15 to 44",
  "indicator/mean_years_in_school_women_of_reproductive_age_15_to_44": "Mean years in school women of reproductive age 15 to 44",
  "unit/mean_years_in_school_women_of_reproductive_age_15_to_44": "",
  "description/mean_years_in_school_women_percent_men_25_to_34_years": "Mean years in school women percent men 25 to 34 years",
  "indicator/mean_years_in_school_women_percent_men_25_to_34_years": "Mean years in school women percent men 25 to 34 years",
  "unit/mean_years_in_school_women_percent_men_25_to_34_years": "",
  "description/energy_use_total": "Energy use total",
  "indicator/energy_use_total": "Energy use total",
  "unit/energy_use_total": "",
  "description/energy_use_per_person": "Energy use per person",
  "indicator/energy_use_per_person": "Energy use per person",
  "unit/energy_use_per_person": "",
  "description/energy_production_total": "Energy production total",
  "indicator/energy_production_total": "Energy production total",
  "unit/energy_production_total": "",
  "description/energy_production_per_person": "Energy production per person",
  "indicator/energy_production_per_person": "Energy production per person",
  "unit/energy_production_per_person": "",
  "description/pump_price_for_gasoline_us_per_liter": "Pump price for gasoline us per liter",
  "indicator/pump_price_for_gasoline_us_per_liter": "Pump price for gasoline us per liter",
  "unit/pump_price_for_gasoline_us_per_liter": "",
  "description/coal_consumption_total": "Coal consumption total",
  "indicator/coal_consumption_total": "Coal consumption total",
  "unit/coal_consumption_total": "",
  "description/coal_consumption_per_cap": "Coal consumption per cap",
  "indicator/coal_consumption_per_cap": "Coal consumption per cap",
  "unit/coal_consumption_per_cap": "",
  "description/electricity_use_per_person": "Electricity use per person",
  "indicator/electricity_use_per_person": "Electricity use per person",
  "unit/electricity_use_per_person": "",
  "description/electricity_use_total": "Electricity use total",
  "indicator/electricity_use_total": "Electricity use total",
  "unit/electricity_use_total": "",
  "description/residential_electricity_use_per_person": "Residential electricity use per person",
  "indicator/residential_electricity_use_per_person": "Residential electricity use per person",
  "unit/residential_electricity_use_per_person": "",
  "description/residential_electricity_use_total": "Residential electricity use total",
  "indicator/residential_electricity_use_total": "Residential electricity use total",
  "unit/residential_electricity_use_total": "",
  "description/electricity_generation_total": "Electricity generation total",
  "indicator/electricity_generation_total": "Electricity generation total",
  "unit/electricity_generation_total": "",
  "description/electricity_generation_per_person": "Electricity generation per person",
  "indicator/electricity_generation_per_person": "Electricity generation per person",
  "unit/electricity_generation_per_person": "",
  "description/hydro_power_generation_total": "Hydro power generation total",
  "indicator/hydro_power_generation_total": "Hydro power generation total",
  "unit/hydro_power_generation_total": "",
  "description/hydro_power_generation_per_person": "Hydro power generation per person",
  "indicator/hydro_power_generation_per_person": "Hydro power generation per person",
  "unit/hydro_power_generation_per_person": "",
  "description/nuclear_power_generation_total": "Nuclear power generation total",
  "indicator/nuclear_power_generation_total": "Nuclear power generation total",
  "unit/nuclear_power_generation_total": "",
  "description/nuclear_power_generation_per_person": "Nuclear power generation per person",
  "indicator/nuclear_power_generation_per_person": "Nuclear power generation per person",
  "unit/nuclear_power_generation_per_person": "",
  "description/natural_gas_production_total": "Natural gas production total",
  "indicator/natural_gas_production_total": "Natural gas production total",
  "unit/natural_gas_production_total": "",
  "description/natural_gas_production_per_person": "Natural gas production per person",
  "indicator/natural_gas_production_per_person": "Natural gas production per person",
  "unit/natural_gas_production_per_person": "",
  "description/natural_gas_proven_reserves_per_person": "Natural gas proven reserves per person",
  "indicator/natural_gas_proven_reserves_per_person": "Natural gas proven reserves per person",
  "unit/natural_gas_proven_reserves_per_person": "",
  "description/natural_gas_proved_reserves_total": "Natural gas proved reserves total",
  "indicator/natural_gas_proved_reserves_total": "Natural gas proved reserves total",
  "unit/natural_gas_proved_reserves_total": "",
  "description/oil_production_per_person": "Oil production per person",
  "indicator/oil_production_per_person": "Oil production per person",
  "unit/oil_production_per_person": "",
  "description/oil_production_total": "Oil production total",
  "indicator/oil_production_total": "Oil production total",
  "unit/oil_production_total": "",
  "description/oil_proven_reserves_per_person": "Oil proven reserves per person",
  "indicator/oil_proven_reserves_per_person": "Oil proven reserves per person",
  "unit/oil_proven_reserves_per_person": "",
  "description/oil_proved_reserves_total": "Oil proved reserves total",
  "indicator/oil_proved_reserves_total": "Oil proved reserves total",
  "unit/oil_proved_reserves_total": "",
  "description/oil_consumption_total": "Oil consumption total",
  "indicator/oil_consumption_total": "Oil consumption total",
  "unit/oil_consumption_total": "",
  "description/oil_consumption_per_cap": "Oil consumption per cap",
  "indicator/oil_consumption_per_cap": "Oil consumption per cap",
  "unit/oil_consumption_per_cap": "",
  "description/drought_deaths_annual_number": "Drought deaths annual number",
  "indicator/drought_deaths_annual_number": "Drought deaths annual number",
  "unit/drought_deaths_annual_number": "",
  "description/earthquake_deaths_annual_number": "Earthquake deaths annual number",
  "indicator/earthquake_deaths_annual_number": "Earthquake deaths annual number",
  "unit/earthquake_deaths_annual_number": "",
  "description/epidemic_deaths_annual_number": "Epidemic deaths annual number",
  "indicator/epidemic_deaths_annual_number": "Epidemic deaths annual number",
  "unit/epidemic_deaths_annual_number": "",
  "description/extreme_temperature_deaths_annual_number": "Extreme temperature deaths annual number",
  "indicator/extreme_temperature_deaths_annual_number": "Extreme temperature deaths annual number",
  "unit/extreme_temperature_deaths_annual_number": "",
  "description/flood_deaths_annual_number": "Flood deaths annual number",
  "indicator/flood_deaths_annual_number": "Flood deaths annual number",
  "unit/flood_deaths_annual_number": "",
  "description/storm_deaths_annual_number": "Storm deaths annual number",
  "indicator/storm_deaths_annual_number": "Storm deaths annual number",
  "unit/storm_deaths_annual_number": "",
  "description/tsunami_deaths_annual_number": "Tsunami deaths annual number",
  "indicator/tsunami_deaths_annual_number": "Tsunami deaths annual number",
  "unit/tsunami_deaths_annual_number": "",
  "description/plane_crash_deaths_annual_number": "Plane crash deaths annual number",
  "indicator/plane_crash_deaths_annual_number": "Plane crash deaths annual number",
  "unit/plane_crash_deaths_annual_number": "",
  "description/drought_affected_annual_number": "Drought affected annual number",
  "indicator/drought_affected_annual_number": "Drought affected annual number",
  "unit/drought_affected_annual_number": "",
  "description/earthquake_affected_annual_number": "Earthquake affected annual number",
  "indicator/earthquake_affected_annual_number": "Earthquake affected annual number",
  "unit/earthquake_affected_annual_number": "",
  "description/epidemic_affected_annual_number": "Epidemic affected annual number",
  "indicator/epidemic_affected_annual_number": "Epidemic affected annual number",
  "unit/epidemic_affected_annual_number": "",
  "description/extreme_temperature_affected_annual_number": "Extreme temperature affected annual number",
  "indicator/extreme_temperature_affected_annual_number": "Extreme temperature affected annual number",
  "unit/extreme_temperature_affected_annual_number": "",
  "description/flood_affected_annual_number": "Flood affected annual number",
  "indicator/flood_affected_annual_number": "Flood affected annual number",
  "unit/flood_affected_annual_number": "",
  "description/storm_affected_annual_number": "Storm affected annual number",
  "indicator/storm_affected_annual_number": "Storm affected annual number",
  "unit/storm_affected_annual_number": "",
  "description/tsunami_affected_annual_number": "Tsunami affected annual number",
  "indicator/tsunami_affected_annual_number": "Tsunami affected annual number",
  "unit/tsunami_affected_annual_number": "",
  "description/plane_crash_affected_annual_number": "Plane crash affected annual number",
  "indicator/plane_crash_affected_annual_number": "Plane crash affected annual number",
  "unit/plane_crash_affected_annual_number": "",
  "description/co2_intensity_of_economic_output_kg_co2_per_2005_ppp_of_gdp": "Co2 intensity of economic output kg co2 per 2005 ppp of gdp",
  "indicator/co2_intensity_of_economic_output_kg_co2_per_2005_ppp_of_gdp": "Co2 intensity of economic output kg co2 per 2005 ppp of gdp",
  "unit/co2_intensity_of_economic_output_kg_co2_per_2005_ppp_of_gdp": "",
  "description/cumulative_co2_emissions_tonnes": "Cumulative co2 emissions tonnes",
  "indicator/cumulative_co2_emissions_tonnes": "Cumulative co2 emissions tonnes",
  "unit/cumulative_co2_emissions_tonnes": "",
  "description/sulfur_emissions_per_person_kg": "Sulfur emissions per person kg",
  "indicator/sulfur_emissions_per_person_kg": "Sulfur emissions per person kg",
  "unit/sulfur_emissions_per_person_kg": "",
  "description/yearly_co2_emissions_tonnes": "Yearly co2 emissions tonnes",
  "indicator/yearly_co2_emissions_tonnes": "Yearly co2 emissions tonnes",
  "unit/yearly_co2_emissions_tonnes": "",
  "description/total_sulfur_emission_kilotonnes": "Total sulfur emission kilotonnes",
  "indicator/total_sulfur_emission_kilotonnes": "Total sulfur emission kilotonnes",
  "unit/total_sulfur_emission_kilotonnes": "",
  "description/forest_land_total_area_ha": "Forest land total area ha",
  "indicator/forest_land_total_area_ha": "Forest land total area ha",
  "unit/forest_land_total_area_ha": "",
  "description/primary_forest_area_ha": "Primary forest area ha",
  "indicator/primary_forest_area_ha": "Primary forest area ha",
  "unit/primary_forest_area_ha": "",
  "description/planted_forest_area_ha": "Planted forest area ha",
  "indicator/planted_forest_area_ha": "Planted forest area ha",
  "unit/planted_forest_area_ha": "",
  "description/wood_removal_cubic_meters": "Wood removal cubic meters",
  "indicator/wood_removal_cubic_meters": "Wood removal cubic meters",
  "unit/wood_removal_cubic_meters": "",
  "description/forest_coverage_percent": "Forest coverage percent",
  "indicator/forest_coverage_percent": "Forest coverage percent",
  "unit/forest_coverage_percent": "",
  "description/biomass_stock_in_forest_tons": "Biomass stock in forest tons",
  "indicator/biomass_stock_in_forest_tons": "Biomass stock in forest tons",
  "unit/biomass_stock_in_forest_tons": "",
  "description/privately_owned_forest_land_percent": "Privately owned forest land percent",
  "indicator/privately_owned_forest_land_percent": "Privately owned forest land percent",
  "unit/privately_owned_forest_land_percent": "",
  "description/privately_owned_other_wooded_land_percent": "Privately owned other wooded land percent",
  "indicator/privately_owned_other_wooded_land_percent": "Privately owned other wooded land percent",
  "unit/privately_owned_other_wooded_land_percent": "",
  "description/forest_products_removal_total_dollar": "Forest products removal total dollar",
  "indicator/forest_products_removal_total_dollar": "Forest products removal total dollar",
  "unit/forest_products_removal_total_dollar": "",
  "description/forest_products_removal_per_ha_dollar": "Forest products removal per ha dollar",
  "indicator/forest_products_removal_per_ha_dollar": "Forest products removal per ha dollar",
  "unit/forest_products_removal_per_ha_dollar": "",
  "description/agricultural_land_percent_of_land_area": "Agricultural land percent of land area",
  "indicator/agricultural_land_percent_of_land_area": "Agricultural land percent of land area",
  "unit/agricultural_land_percent_of_land_area": "",
  "description/forest_area_sq_km": "Forest area sq km",
  "indicator/forest_area_sq_km": "Forest area sq km",
  "unit/forest_area_sq_km": "",
  "description/surface_area_sq_km": "Surface area sq km",
  "indicator/surface_area_sq_km": "Surface area sq km",
  "unit/surface_area_sq_km": "",
  "description/renewable_water_cu_meters_per_person": "Renewable water cu meters per person",
  "indicator/renewable_water_cu_meters_per_person": "Renewable water cu meters per person",
  "unit/renewable_water_cu_meters_per_person": "",
  "description/internal_renewable_water_cu_meters_per_person": "Internal renewable water cu meters per person",
  "indicator/internal_renewable_water_cu_meters_per_person": "Internal renewable water cu meters per person",
  "unit/internal_renewable_water_cu_meters_per_person": "",
  "description/water_withdrawal_cu_meters_per_person": "Water withdrawal cu meters per person",
  "indicator/water_withdrawal_cu_meters_per_person": "Water withdrawal cu meters per person",
  "unit/water_withdrawal_cu_meters_per_person": "",
  "description/municipal_water_withdrawal_cu_meters_per_person": "Municipal water withdrawal cu meters per person",
  "indicator/municipal_water_withdrawal_cu_meters_per_person": "Municipal water withdrawal cu meters per person",
  "unit/municipal_water_withdrawal_cu_meters_per_person": "",
  "description/agricultural_water_withdrawal_percent_of_total": "Agricultural water withdrawal percent of total",
  "indicator/agricultural_water_withdrawal_percent_of_total": "Agricultural water withdrawal percent of total",
  "unit/agricultural_water_withdrawal_percent_of_total": "",
  "description/industrial_water_withdrawal_percent_of_total": "Industrial water withdrawal percent of total",
  "indicator/industrial_water_withdrawal_percent_of_total": "Industrial water withdrawal percent of total",
  "unit/industrial_water_withdrawal_percent_of_total": "",
  "description/municipal_water_withdrawal_percent_of_total": "Municipal water withdrawal percent of total",
  "indicator/municipal_water_withdrawal_percent_of_total": "Municipal water withdrawal percent of total",
  "unit/municipal_water_withdrawal_percent_of_total": "",
  "description/desalinated_water_produced_billion_cu_meters": "Desalinated water produced billion cu meters",
  "indicator/desalinated_water_produced_billion_cu_meters": "Desalinated water produced billion cu meters",
  "unit/desalinated_water_produced_billion_cu_meters": "",
  "description/total_water_withdrawal_billion_cu_meters": "Total water withdrawal billion cu meters",
  "indicator/total_water_withdrawal_billion_cu_meters": "Total water withdrawal billion cu meters",
  "unit/total_water_withdrawal_billion_cu_meters": "",
  "description/infant_mortality_rate_per_1000_births": "Infant mortality rate per 1000 births",
  "indicator/infant_mortality_rate_per_1000_births": "Infant mortality rate per 1000 births",
  "unit/infant_mortality_rate_per_1000_births": "",
  "description/underweight_children": "Underweight children",
  "indicator/underweight_children": "Underweight children",
  "unit/underweight_children": "",
  "description/all_causes_deaths_in_newborn_per_1000_births": "All causes deaths in newborn per 1000 births",
  "indicator/all_causes_deaths_in_newborn_per_1000_births": "All causes deaths in newborn per 1000 births",
  "unit/all_causes_deaths_in_newborn_per_1000_births": "",
  "description/birth_asphyxia_deaths_in_newborn_per_1000_births": "Birth asphyxia deaths in newborn per 1000 births",
  "indicator/birth_asphyxia_deaths_in_newborn_per_1000_births": "Birth asphyxia deaths in newborn per 1000 births",
  "unit/birth_asphyxia_deaths_in_newborn_per_1000_births": "",
  "description/congenital_deaths_in_newborn_per_1000_births": "Congenital deaths in newborn per 1000 births",
  "indicator/congenital_deaths_in_newborn_per_1000_births": "Congenital deaths in newborn per 1000 births",
  "unit/congenital_deaths_in_newborn_per_1000_births": "",
  "description/diarrhoeal_deaths_in_newborn_per_1000_births": "Diarrhoeal deaths in newborn per 1000 births",
  "indicator/diarrhoeal_deaths_in_newborn_per_1000_births": "Diarrhoeal deaths in newborn per 1000 births",
  "unit/diarrhoeal_deaths_in_newborn_per_1000_births": "",
  "description/pneumonia_deaths_in_newborn_per_1000_births": "Pneumonia deaths in newborn per 1000 births",
  "indicator/pneumonia_deaths_in_newborn_per_1000_births": "Pneumonia deaths in newborn per 1000 births",
  "unit/pneumonia_deaths_in_newborn_per_1000_births": "",
  "description/prematurity_deaths_in_newborn_per_1000_births": "Prematurity deaths in newborn per 1000 births",
  "indicator/prematurity_deaths_in_newborn_per_1000_births": "Prematurity deaths in newborn per 1000 births",
  "unit/prematurity_deaths_in_newborn_per_1000_births": "",
  "description/sepsis_deaths_in_newborn_per_1000_births": "Sepsis deaths in newborn per 1000 births",
  "indicator/sepsis_deaths_in_newborn_per_1000_births": "Sepsis deaths in newborn per 1000 births",
  "unit/sepsis_deaths_in_newborn_per_1000_births": "",
  "description/tetanus_deaths_in_newborn_per_1000_births": "Tetanus deaths in newborn per 1000 births",
  "indicator/tetanus_deaths_in_newborn_per_1000_births": "Tetanus deaths in newborn per 1000 births",
  "unit/tetanus_deaths_in_newborn_per_1000_births": "",
  "description/other_deaths_in_newborn_per_1000_births": "Other deaths in newborn per 1000 births",
  "indicator/other_deaths_in_newborn_per_1000_births": "Other deaths in newborn per 1000 births",
  "unit/other_deaths_in_newborn_per_1000_births": "",
  "description/all_causes_deaths_in_newborn_total_deaths": "All causes deaths in newborn total deaths",
  "indicator/all_causes_deaths_in_newborn_total_deaths": "All causes deaths in newborn total deaths",
  "unit/all_causes_deaths_in_newborn_total_deaths": "",
  "description/birth_asphyxia_deaths_in_newborn_total_deaths": "Birth asphyxia deaths in newborn total deaths",
  "indicator/birth_asphyxia_deaths_in_newborn_total_deaths": "Birth asphyxia deaths in newborn total deaths",
  "unit/birth_asphyxia_deaths_in_newborn_total_deaths": "",
  "description/congenital_deaths_in_newborn_total_deaths": "Congenital deaths in newborn total deaths",
  "indicator/congenital_deaths_in_newborn_total_deaths": "Congenital deaths in newborn total deaths",
  "unit/congenital_deaths_in_newborn_total_deaths": "",
  "description/diarrhoeal_deaths_in_newborn_total_deaths": "Diarrhoeal deaths in newborn total deaths",
  "indicator/diarrhoeal_deaths_in_newborn_total_deaths": "Diarrhoeal deaths in newborn total deaths",
  "unit/diarrhoeal_deaths_in_newborn_total_deaths": "",
  "description/pneumonia_deaths_in_newborn_total_deaths": "Pneumonia deaths in newborn total deaths",
  "indicator/pneumonia_deaths_in_newborn_total_deaths": "Pneumonia deaths in newborn total deaths",
  "unit/pneumonia_deaths_in_newborn_total_deaths": "",
  "description/prematurity_deaths_in_newborn_total_deaths": "Prematurity deaths in newborn total deaths",
  "indicator/prematurity_deaths_in_newborn_total_deaths": "Prematurity deaths in newborn total deaths",
  "unit/prematurity_deaths_in_newborn_total_deaths": "",
  "description/sepsis_deaths_in_newborn_total_deaths": "Sepsis deaths in newborn total deaths",
  "indicator/sepsis_deaths_in_newborn_total_deaths": "Sepsis deaths in newborn total deaths",
  "unit/sepsis_deaths_in_newborn_total_deaths": "",
  "description/tetanus_deaths_in_newborn_total_deaths": "Tetanus deaths in newborn total deaths",
  "indicator/tetanus_deaths_in_newborn_total_deaths": "Tetanus deaths in newborn total deaths",
  "unit/tetanus_deaths_in_newborn_total_deaths": "",
  "description/other_deaths_in_newborn_total_deaths": "Other deaths in newborn total deaths",
  "indicator/other_deaths_in_newborn_total_deaths": "Other deaths in newborn total deaths",
  "unit/other_deaths_in_newborn_total_deaths": "",
  "description/all_causes_deaths_in_children_1_59_months_per_1000_births": "All causes deaths in children 1 59 months per 1000 births",
  "indicator/all_causes_deaths_in_children_1_59_months_per_1000_births": "All causes deaths in children 1 59 months per 1000 births",
  "unit/all_causes_deaths_in_children_1_59_months_per_1000_births": "",
  "description/diarrhoeal_deaths_in_children_1_59_months_per_1000_births": "Diarrhoeal deaths in children 1 59 months per 1000 births",
  "indicator/diarrhoeal_deaths_in_children_1_59_months_per_1000_births": "Diarrhoeal deaths in children 1 59 months per 1000 births",
  "unit/diarrhoeal_deaths_in_children_1_59_months_per_1000_births": "",
  "description/hiv_deaths_in_children_1_59_months_per_1000_births": "Hiv deaths in children 1 59 months per 1000 births",
  "indicator/hiv_deaths_in_children_1_59_months_per_1000_births": "Hiv deaths in children 1 59 months per 1000 births",
  "unit/hiv_deaths_in_children_1_59_months_per_1000_births": "",
  "description/injury_deaths_in_children_1_59_months_per_1000_births": "Injury deaths in children 1 59 months per 1000 births",
  "indicator/injury_deaths_in_children_1_59_months_per_1000_births": "Injury deaths in children 1 59 months per 1000 births",
  "unit/injury_deaths_in_children_1_59_months_per_1000_births": "",
  "description/malaria_deaths_in_children_1_59_months_per_1000_births": "Malaria deaths in children 1 59 months per 1000 births",
  "indicator/malaria_deaths_in_children_1_59_months_per_1000_births": "Malaria deaths in children 1 59 months per 1000 births",
  "unit/malaria_deaths_in_children_1_59_months_per_1000_births": "",
  "description/measles_deaths_in_children_1_59_months_per_1000_births": "Measles deaths in children 1 59 months per 1000 births",
  "indicator/measles_deaths_in_children_1_59_months_per_1000_births": "Measles deaths in children 1 59 months per 1000 births",
  "unit/measles_deaths_in_children_1_59_months_per_1000_births": "",
  "description/meningitis_deaths_in_children_1_59_months_per_1000_births": "Meningitis deaths in children 1 59 months per 1000 births",
  "indicator/meningitis_deaths_in_children_1_59_months_per_1000_births": "Meningitis deaths in children 1 59 months per 1000 births",
  "unit/meningitis_deaths_in_children_1_59_months_per_1000_births": "",
  "description/ncd_deaths_in_children_1_59_months_per_1000_births": "Ncd deaths in children 1 59 months per 1000 births",
  "indicator/ncd_deaths_in_children_1_59_months_per_1000_births": "Ncd deaths in children 1 59 months per 1000 births",
  "unit/ncd_deaths_in_children_1_59_months_per_1000_births": "",
  "description/pertussis_deaths_in_children_1_59_months_per_1000_births": "Pertussis deaths in children 1 59 months per 1000 births",
  "indicator/pertussis_deaths_in_children_1_59_months_per_1000_births": "Pertussis deaths in children 1 59 months per 1000 births",
  "unit/pertussis_deaths_in_children_1_59_months_per_1000_births": "",
  "description/pneumonia_deaths_in_children_1_59_months_per_1000_births": "Pneumonia deaths in children 1 59 months per 1000 births",
  "indicator/pneumonia_deaths_in_children_1_59_months_per_1000_births": "Pneumonia deaths in children 1 59 months per 1000 births",
  "unit/pneumonia_deaths_in_children_1_59_months_per_1000_births": "",
  "description/other_infections_deaths_in_children_1_59_months_per_1000_birt": "Other infections deaths in children 1 59 months per 1000 birt",
  "indicator/other_infections_deaths_in_children_1_59_months_per_1000_birt": "Other infections deaths in children 1 59 months per 1000 birt",
  "unit/other_infections_deaths_in_children_1_59_months_per_1000_birt": "",
  "description/all_causes_deaths_in_children_1_59_months_total_deaths": "All causes deaths in children 1 59 months total deaths",
  "indicator/all_causes_deaths_in_children_1_59_months_total_deaths": "All causes deaths in children 1 59 months total deaths",
  "unit/all_causes_deaths_in_children_1_59_months_total_deaths": "",
  "description/diarrhoeal_deaths_in_children_1_59_months_total_deaths": "Diarrhoeal deaths in children 1 59 months total deaths",
  "indicator/diarrhoeal_deaths_in_children_1_59_months_total_deaths": "Diarrhoeal deaths in children 1 59 months total deaths",
  "unit/diarrhoeal_deaths_in_children_1_59_months_total_deaths": "",
  "description/hiv_deaths_in_children_1_59_months_total_deaths": "Hiv deaths in children 1 59 months total deaths",
  "indicator/hiv_deaths_in_children_1_59_months_total_deaths": "Hiv deaths in children 1 59 months total deaths",
  "unit/hiv_deaths_in_children_1_59_months_total_deaths": "",
  "description/injury_deaths_in_children_1_59_months_total_deaths": "Injury deaths in children 1 59 months total deaths",
  "indicator/injury_deaths_in_children_1_59_months_total_deaths": "Injury deaths in children 1 59 months total deaths",
  "unit/injury_deaths_in_children_1_59_months_total_deaths": "",
  "description/malaria_deaths_in_children_1_59_months_total_deaths": "Malaria deaths in children 1 59 months total deaths",
  "indicator/malaria_deaths_in_children_1_59_months_total_deaths": "Malaria deaths in children 1 59 months total deaths",
  "unit/malaria_deaths_in_children_1_59_months_total_deaths": "",
  "description/measles_deaths_in_children_1_59_months_total_deaths": "Measles deaths in children 1 59 months total deaths",
  "indicator/measles_deaths_in_children_1_59_months_total_deaths": "Measles deaths in children 1 59 months total deaths",
  "unit/measles_deaths_in_children_1_59_months_total_deaths": "",
  "description/meningitis_deaths_in_children_1_59_months_total_deaths": "Meningitis deaths in children 1 59 months total deaths",
  "indicator/meningitis_deaths_in_children_1_59_months_total_deaths": "Meningitis deaths in children 1 59 months total deaths",
  "unit/meningitis_deaths_in_children_1_59_months_total_deaths": "",
  "description/ncd_deaths_in_children_1_59_months_total_deaths": "Ncd deaths in children 1 59 months total deaths",
  "indicator/ncd_deaths_in_children_1_59_months_total_deaths": "Ncd deaths in children 1 59 months total deaths",
  "unit/ncd_deaths_in_children_1_59_months_total_deaths": "",
  "description/pertussis_deaths_in_children_1_59_months_total_deaths": "Pertussis deaths in children 1 59 months total deaths",
  "indicator/pertussis_deaths_in_children_1_59_months_total_deaths": "Pertussis deaths in children 1 59 months total deaths",
  "unit/pertussis_deaths_in_children_1_59_months_total_deaths": "",
  "description/pneumonia_deaths_in_children_1_59_months_total_deaths": "Pneumonia deaths in children 1 59 months total deaths",
  "indicator/pneumonia_deaths_in_children_1_59_months_total_deaths": "Pneumonia deaths in children 1 59 months total deaths",
  "unit/pneumonia_deaths_in_children_1_59_months_total_deaths": "",
  "description/other_infections_deaths_in_children_1_59_months_total_deaths": "Other infections deaths in children 1 59 months total deaths",
  "indicator/other_infections_deaths_in_children_1_59_months_total_deaths": "Other infections deaths in children 1 59 months total deaths",
  "unit/other_infections_deaths_in_children_1_59_months_total_deaths": "",
  "description/breast_cancer_new_cases_per_100000_women": "Breast cancer new cases per 100000 women",
  "indicator/breast_cancer_new_cases_per_100000_women": "Breast cancer new cases per 100000 women",
  "unit/breast_cancer_new_cases_per_100000_women": "",
  "description/cervical_cancer_new_cases_per_100000_women": "Cervical cancer new cases per 100000 women",
  "indicator/cervical_cancer_new_cases_per_100000_women": "Cervical cancer new cases per 100000 women",
  "unit/cervical_cancer_new_cases_per_100000_women": "",
  "description/colonandrectum_cancer_new_cases_per_100000_women": "Colonandrectum cancer new cases per 100000 women",
  "indicator/colonandrectum_cancer_new_cases_per_100000_women": "Colonandrectum cancer new cases per 100000 women",
  "unit/colonandrectum_cancer_new_cases_per_100000_women": "",
  "description/liver_cancer_new_cases_per_100000_women": "Liver cancer new cases per 100000 women",
  "indicator/liver_cancer_new_cases_per_100000_women": "Liver cancer new cases per 100000 women",
  "unit/liver_cancer_new_cases_per_100000_women": "",
  "description/lung_cancer_new_cases_per_100000_women": "Lung cancer new cases per 100000 women",
  "indicator/lung_cancer_new_cases_per_100000_women": "Lung cancer new cases per 100000 women",
  "unit/lung_cancer_new_cases_per_100000_women": "",
  "description/stomach_cancer_new_cases_per_100000_women": "Stomach cancer new cases per 100000 women",
  "indicator/stomach_cancer_new_cases_per_100000_women": "Stomach cancer new cases per 100000 women",
  "unit/stomach_cancer_new_cases_per_100000_women": "",
  "description/breast_cancer_number_of_new_female_cases": "Breast cancer number of new female cases",
  "indicator/breast_cancer_number_of_new_female_cases": "Breast cancer number of new female cases",
  "unit/breast_cancer_number_of_new_female_cases": "",
  "description/cervical_cancer_number_of_new_female_cases": "Cervical cancer number of new female cases",
  "indicator/cervical_cancer_number_of_new_female_cases": "Cervical cancer number of new female cases",
  "unit/cervical_cancer_number_of_new_female_cases": "",
  "description/colonandrectum_cancer_number_of_new_female_cases": "Colonandrectum cancer number of new female cases",
  "indicator/colonandrectum_cancer_number_of_new_female_cases": "Colonandrectum cancer number of new female cases",
  "unit/colonandrectum_cancer_number_of_new_female_cases": "",
  "description/liver_cancer_number_of_new_female_cases": "Liver cancer number of new female cases",
  "indicator/liver_cancer_number_of_new_female_cases": "Liver cancer number of new female cases",
  "unit/liver_cancer_number_of_new_female_cases": "",
  "description/lung_cancer_number_of_new_female_cases": "Lung cancer number of new female cases",
  "indicator/lung_cancer_number_of_new_female_cases": "Lung cancer number of new female cases",
  "unit/lung_cancer_number_of_new_female_cases": "",
  "description/stomach_cancer_number_of_new_female_cases": "Stomach cancer number of new female cases",
  "indicator/stomach_cancer_number_of_new_female_cases": "Stomach cancer number of new female cases",
  "unit/stomach_cancer_number_of_new_female_cases": "",
  "description/breast_cancer_deaths_per_100000_women": "Breast cancer deaths per 100000 women",
  "indicator/breast_cancer_deaths_per_100000_women": "Breast cancer deaths per 100000 women",
  "unit/breast_cancer_deaths_per_100000_women": "",
  "description/cervical_cancer_deaths_per_100000_women": "Cervical cancer deaths per 100000 women",
  "indicator/cervical_cancer_deaths_per_100000_women": "Cervical cancer deaths per 100000 women",
  "unit/cervical_cancer_deaths_per_100000_women": "",
  "description/colonandrectum_cancer_deaths_per_100000_women": "Colonandrectum cancer deaths per 100000 women",
  "indicator/colonandrectum_cancer_deaths_per_100000_women": "Colonandrectum cancer deaths per 100000 women",
  "unit/colonandrectum_cancer_deaths_per_100000_women": "",
  "description/liver_cancer_deaths_per_100000_women": "Liver cancer deaths per 100000 women",
  "indicator/liver_cancer_deaths_per_100000_women": "Liver cancer deaths per 100000 women",
  "unit/liver_cancer_deaths_per_100000_women": "",
  "description/lung_cancer_deaths_per_100000_women": "Lung cancer deaths per 100000 women",
  "indicator/lung_cancer_deaths_per_100000_women": "Lung cancer deaths per 100000 women",
  "unit/lung_cancer_deaths_per_100000_women": "",
  "description/stomach_cancer_deaths_per_100000_women": "Stomach cancer deaths per 100000 women",
  "indicator/stomach_cancer_deaths_per_100000_women": "Stomach cancer deaths per 100000 women",
  "unit/stomach_cancer_deaths_per_100000_women": "",
  "description/breast_cancer_number_of_female_deaths": "Breast cancer number of female deaths",
  "indicator/breast_cancer_number_of_female_deaths": "Breast cancer number of female deaths",
  "unit/breast_cancer_number_of_female_deaths": "",
  "description/cervical_cancer_number_of_female_deaths": "Cervical cancer number of female deaths",
  "indicator/cervical_cancer_number_of_female_deaths": "Cervical cancer number of female deaths",
  "unit/cervical_cancer_number_of_female_deaths": "",
  "description/colonandrectum_cancer_number_of_female_deaths": "Colonandrectum cancer number of female deaths",
  "indicator/colonandrectum_cancer_number_of_female_deaths": "Colonandrectum cancer number of female deaths",
  "unit/colonandrectum_cancer_number_of_female_deaths": "",
  "description/liver_cancer_number_of_female_deaths": "Liver cancer number of female deaths",
  "indicator/liver_cancer_number_of_female_deaths": "Liver cancer number of female deaths",
  "unit/liver_cancer_number_of_female_deaths": "",
  "description/lung_cancer_number_of_female_deaths": "Lung cancer number of female deaths",
  "indicator/lung_cancer_number_of_female_deaths": "Lung cancer number of female deaths",
  "unit/lung_cancer_number_of_female_deaths": "",
  "description/stomach_cancer_number_of_female_deaths": "Stomach cancer number of female deaths",
  "indicator/stomach_cancer_number_of_female_deaths": "Stomach cancer number of female deaths",
  "unit/stomach_cancer_number_of_female_deaths": "",
  "description/colonandrectum_cancer_new_cases_per_100000_men": "Colonandrectum cancer new cases per 100000 men",
  "indicator/colonandrectum_cancer_new_cases_per_100000_men": "Colonandrectum cancer new cases per 100000 men",
  "unit/colonandrectum_cancer_new_cases_per_100000_men": "",
  "description/liver_cancer_new_cases_per_100000_men": "Liver cancer new cases per 100000 men",
  "indicator/liver_cancer_new_cases_per_100000_men": "Liver cancer new cases per 100000 men",
  "unit/liver_cancer_new_cases_per_100000_men": "",
  "description/lung_cancer_new_cases_per_100000_men": "Lung cancer new cases per 100000 men",
  "indicator/lung_cancer_new_cases_per_100000_men": "Lung cancer new cases per 100000 men",
  "unit/lung_cancer_new_cases_per_100000_men": "",
  "description/prostate_cancer_new_cases_per_100000_men": "Prostate cancer new cases per 100000 men",
  "indicator/prostate_cancer_new_cases_per_100000_men": "Prostate cancer new cases per 100000 men",
  "unit/prostate_cancer_new_cases_per_100000_men": "",
  "description/stomach_cancer_new_cases_per_100000_men": "Stomach cancer new cases per 100000 men",
  "indicator/stomach_cancer_new_cases_per_100000_men": "Stomach cancer new cases per 100000 men",
  "unit/stomach_cancer_new_cases_per_100000_men": "",
  "description/colonandrectum_cancer_number_of_new_male_cases": "Colonandrectum cancer number of new male cases",
  "indicator/colonandrectum_cancer_number_of_new_male_cases": "Colonandrectum cancer number of new male cases",
  "unit/colonandrectum_cancer_number_of_new_male_cases": "",
  "description/liver_cancer_number_of_new_male_cases": "Liver cancer number of new male cases",
  "indicator/liver_cancer_number_of_new_male_cases": "Liver cancer number of new male cases",
  "unit/liver_cancer_number_of_new_male_cases": "",
  "description/lung_cancer_number_of_new_male_cases": "Lung cancer number of new male cases",
  "indicator/lung_cancer_number_of_new_male_cases": "Lung cancer number of new male cases",
  "unit/lung_cancer_number_of_new_male_cases": "",
  "description/prostate_cancer_number_of_new_male_cases": "Prostate cancer number of new male cases",
  "indicator/prostate_cancer_number_of_new_male_cases": "Prostate cancer number of new male cases",
  "unit/prostate_cancer_number_of_new_male_cases": "",
  "description/stomach_cancer_number_of_new_male_cases": "Stomach cancer number of new male cases",
  "indicator/stomach_cancer_number_of_new_male_cases": "Stomach cancer number of new male cases",
  "unit/stomach_cancer_number_of_new_male_cases": "",
  "description/colonandrectum_cancer_deaths_per_100000_men": "Colonandrectum cancer deaths per 100000 men",
  "indicator/colonandrectum_cancer_deaths_per_100000_men": "Colonandrectum cancer deaths per 100000 men",
  "unit/colonandrectum_cancer_deaths_per_100000_men": "",
  "description/liver_cancer_deaths_per_100000_men": "Liver cancer deaths per 100000 men",
  "indicator/liver_cancer_deaths_per_100000_men": "Liver cancer deaths per 100000 men",
  "unit/liver_cancer_deaths_per_100000_men": "",
  "description/lung_cancer_deaths_per_100000_men": "Lung cancer deaths per 100000 men",
  "indicator/lung_cancer_deaths_per_100000_men": "Lung cancer deaths per 100000 men",
  "unit/lung_cancer_deaths_per_100000_men": "",
  "description/prostate_cancer_deaths_per_100000_men": "Prostate cancer deaths per 100000 men",
  "indicator/prostate_cancer_deaths_per_100000_men": "Prostate cancer deaths per 100000 men",
  "unit/prostate_cancer_deaths_per_100000_men": "",
  "description/stomach_cancer_deaths_per_100000_men": "Stomach cancer deaths per 100000 men",
  "indicator/stomach_cancer_deaths_per_100000_men": "Stomach cancer deaths per 100000 men",
  "unit/stomach_cancer_deaths_per_100000_men": "",
  "description/colonandrectum_cancer_number_of_male_deaths": "Colonandrectum cancer number of male deaths",
  "indicator/colonandrectum_cancer_number_of_male_deaths": "Colonandrectum cancer number of male deaths",
  "unit/colonandrectum_cancer_number_of_male_deaths": "",
  "description/liver_cancer_number_of_male_deaths": "Liver cancer number of male deaths",
  "indicator/liver_cancer_number_of_male_deaths": "Liver cancer number of male deaths",
  "unit/liver_cancer_number_of_male_deaths": "",
  "description/lung_cancer_number_of_male_deaths": "Lung cancer number of male deaths",
  "indicator/lung_cancer_number_of_male_deaths": "Lung cancer number of male deaths",
  "unit/lung_cancer_number_of_male_deaths": "",
  "description/prostate_cancer_number_of_male_deaths": "Prostate cancer number of male deaths",
  "indicator/prostate_cancer_number_of_male_deaths": "Prostate cancer number of male deaths",
  "unit/prostate_cancer_number_of_male_deaths": "",
  "description/stomach_cancer_number_of_male_deaths": "Stomach cancer number of male deaths",
  "indicator/stomach_cancer_number_of_male_deaths": "Stomach cancer number of male deaths",
  "unit/stomach_cancer_number_of_male_deaths": "",
  "description/total_health_spending_percent_of_gdp": "Total health spending percent of gdp",
  "indicator/total_health_spending_percent_of_gdp": "Total health spending percent of gdp",
  "unit/total_health_spending_percent_of_gdp": "",
  "description/government_share_of_total_health_spending_percent": "Government share of total health spending percent",
  "indicator/government_share_of_total_health_spending_percent": "Government share of total health spending percent",
  "unit/government_share_of_total_health_spending_percent": "",
  "description/private_share_of_total_health_spending_percent": "Private share of total health spending percent",
  "indicator/private_share_of_total_health_spending_percent": "Private share of total health spending percent",
  "unit/private_share_of_total_health_spending_percent": "",
  "description/out_of_pocket_share_of_total_health_spending_percent": "Out of pocket share of total health spending percent",
  "indicator/out_of_pocket_share_of_total_health_spending_percent": "Out of pocket share of total health spending percent",
  "unit/out_of_pocket_share_of_total_health_spending_percent": "",
  "description/government_health_spending_of_total_gov_spending_percent": "Government health spending of total gov spending percent",
  "indicator/government_health_spending_of_total_gov_spending_percent": "Government health spending of total gov spending percent",
  "unit/government_health_spending_of_total_gov_spending_percent": "",
  "description/total_health_spending_per_person_international_dollar": "Total health spending per person international dollar",
  "indicator/total_health_spending_per_person_international_dollar": "Total health spending per person international dollar",
  "unit/total_health_spending_per_person_international_dollar": "",
  "description/government_health_spending_per_person_international_dollar": "Government health spending per person international dollar",
  "indicator/government_health_spending_per_person_international_dollar": "Government health spending per person international dollar",
  "unit/government_health_spending_per_person_international_dollar": "",
  "description/total_health_spending_per_person_us": "Total health spending per person us",
  "indicator/total_health_spending_per_person_us": "Total health spending per person us",
  "unit/total_health_spending_per_person_us": "",
  "description/government_health_spending_per_person_us": "Government health spending per person us",
  "indicator/government_health_spending_per_person_us": "Government health spending per person us",
  "unit/government_health_spending_per_person_us": "",
  "description/medical_doctors_per_1000_people": "Medical doctors per 1000 people",
  "indicator/medical_doctors_per_1000_people": "Medical doctors per 1000 people",
  "unit/medical_doctors_per_1000_people": "",
  "description/people_living_with_hiv_number_all_ages": "People living with hiv number all ages",
  "indicator/people_living_with_hiv_number_all_ages": "People living with hiv number all ages",
  "unit/people_living_with_hiv_number_all_ages": "",
  "description/adults_with_hiv_percent_age_15_49": "Adults with hiv percent age 15 49",
  "indicator/adults_with_hiv_percent_age_15_49": "Adults with hiv percent age 15 49",
  "unit/adults_with_hiv_percent_age_15_49": "",
  "description/newly_hiv_infected_number_all_ages": "Newly hiv infected number all ages",
  "indicator/newly_hiv_infected_number_all_ages": "Newly hiv infected number all ages",
  "unit/newly_hiv_infected_number_all_ages": "",
  "description/newly_hiv_infected_percent_age_15_49": "Newly hiv infected percent age 15 49",
  "indicator/newly_hiv_infected_percent_age_15_49": "Newly hiv infected percent age 15 49",
  "unit/newly_hiv_infected_percent_age_15_49": "",
  "description/annual_hiv_deaths_number_all_ages": "Annual hiv deaths number all ages",
  "indicator/annual_hiv_deaths_number_all_ages": "Annual hiv deaths number all ages",
  "unit/annual_hiv_deaths_number_all_ages": "",
  "description/art_coverage_percent_cd4_l_350": "Art coverage percent cd4 l 350",
  "indicator/art_coverage_percent_cd4_l_350": "Art coverage percent cd4 l 350",
  "unit/art_coverage_percent_cd4_l_350": "",
  "description/malaria_cases_per_100000_reported": "Malaria cases per 100000 reported",
  "indicator/malaria_cases_per_100000_reported": "Malaria cases per 100000 reported",
  "unit/malaria_cases_per_100000_reported": "",
  "description/malaria_deaths_per_100000_reported": "Malaria deaths per 100000 reported",
  "indicator/malaria_deaths_per_100000_reported": "Malaria deaths per 100000 reported",
  "unit/malaria_deaths_per_100000_reported": "",
  "description/malaria_number_of_cases_reported": "Malaria number of cases reported",
  "indicator/malaria_number_of_cases_reported": "Malaria number of cases reported",
  "unit/malaria_number_of_cases_reported": "",
  "description/malaria_number_of_deaths_reported": "Malaria number of deaths reported",
  "indicator/malaria_number_of_deaths_reported": "Malaria number of deaths reported",
  "unit/malaria_number_of_deaths_reported": "",
  "description/births_attended_by_skilled_health_staff_percent_of_total": "Births attended by skilled health staff percent of total",
  "indicator/births_attended_by_skilled_health_staff_percent_of_total": "Births attended by skilled health staff percent of total",
  "unit/births_attended_by_skilled_health_staff_percent_of_total": "",
  "description/contraceptive_use_percent_of_women_ages_15_49": "Contraceptive use percent of women ages 15 49",
  "indicator/contraceptive_use_percent_of_women_ages_15_49": "Contraceptive use percent of women ages 15 49",
  "unit/contraceptive_use_percent_of_women_ages_15_49": "",
  "description/maternal_mortality_ratio_per_100000_live_births": "Maternal mortality ratio per 100000 live births",
  "indicator/maternal_mortality_ratio_per_100000_live_births": "Maternal mortality ratio per 100000 live births",
  "unit/maternal_mortality_ratio_per_100000_live_births": "",
  "description/maternal_deaths_total_number": "Maternal deaths total number",
  "indicator/maternal_deaths_total_number": "Maternal deaths total number",
  "unit/maternal_deaths_total_number": "",
  "description/maternal_deaths_lifetime_risk_per_1000": "Maternal deaths lifetime risk per 1000",
  "indicator/maternal_deaths_lifetime_risk_per_1000": "Maternal deaths lifetime risk per 1000",
  "unit/maternal_deaths_lifetime_risk_per_1000": "",
  "description/stillbirths_per_1000_births": "Stillbirths per 1000 births",
  "indicator/stillbirths_per_1000_births": "Stillbirths per 1000 births",
  "unit/stillbirths_per_1000_births": "",
  "description/suicide_per_100000_people": "Suicide per 100000 people",
  "indicator/suicide_per_100000_people": "Suicide per 100000 people",
  "unit/suicide_per_100000_people": "",
  "description/malnutrition_weight_for_age_percent_of_children_under_5": "Malnutrition weight for age percent of children under 5",
  "indicator/malnutrition_weight_for_age_percent_of_children_under_5": "Malnutrition weight for age percent of children under 5",
  "unit/malnutrition_weight_for_age_percent_of_children_under_5": "",
  "description/sugar_per_person_g_per_day": "Sugar per person g per day",
  "indicator/sugar_per_person_g_per_day": "Sugar per person g per day",
  "unit/sugar_per_person_g_per_day": "",
  "description/food_supply_kilocalories_per_person_and_day": "Food supply kilocalories per person and day",
  "indicator/food_supply_kilocalories_per_person_and_day": "Food supply kilocalories per person and day",
  "unit/food_supply_kilocalories_per_person_and_day": "",
  "description/alcohol_consumption_per_adult_15plus_litres": "Alcohol consumption per adult 15plus litres",
  "indicator/alcohol_consumption_per_adult_15plus_litres": "Alcohol consumption per adult 15plus litres",
  "unit/alcohol_consumption_per_adult_15plus_litres": "",
  "description/smoking_adults_percent_of_population_over_age_15": "Smoking adults percent of population over age 15",
  "indicator/smoking_adults_percent_of_population_over_age_15": "Smoking adults percent of population over age 15",
  "unit/smoking_adults_percent_of_population_over_age_15": "",
  "description/smoking_women_percent_of_women_over_age_15": "Smoking women percent of women over age 15",
  "indicator/smoking_women_percent_of_women_over_age_15": "Smoking women percent of women over age 15",
  "unit/smoking_women_percent_of_women_over_age_15": "",
  "description/smoking_men_percent_of_men_over_age_15": "Smoking men percent of men over age 15",
  "indicator/smoking_men_percent_of_men_over_age_15": "Smoking men percent of men over age 15",
  "unit/smoking_men_percent_of_men_over_age_15": "",
  "description/body_mass_index_bmi_men_kgperm2": "Body mass index bmi men kgperm2",
  "indicator/body_mass_index_bmi_men_kgperm2": "Body mass index bmi men kgperm2",
  "unit/body_mass_index_bmi_men_kgperm2": "",
  "description/body_mass_index_bmi_women_kgperm2": "Body mass index bmi women kgperm2",
  "indicator/body_mass_index_bmi_women_kgperm2": "Body mass index bmi women kgperm2",
  "unit/body_mass_index_bmi_women_kgperm2": "",
  "description/blood_pressure_sbp_men_mmhg": "Blood pressure sbp men mmhg",
  "indicator/blood_pressure_sbp_men_mmhg": "Blood pressure sbp men mmhg",
  "unit/blood_pressure_sbp_men_mmhg": "",
  "description/blood_pressure_sbp_women_mmhg": "Blood pressure sbp women mmhg",
  "indicator/blood_pressure_sbp_women_mmhg": "Blood pressure sbp women mmhg",
  "unit/blood_pressure_sbp_women_mmhg": "",
  "description/cholesterol_fat_in_blood_men_mmolperl": "Cholesterol fat in blood men mmolperl",
  "indicator/cholesterol_fat_in_blood_men_mmolperl": "Cholesterol fat in blood men mmolperl",
  "unit/cholesterol_fat_in_blood_men_mmolperl": "",
  "description/cholesterol_fat_in_blood_women_mmolperl": "Cholesterol fat in blood women mmolperl",
  "indicator/cholesterol_fat_in_blood_women_mmolperl": "Cholesterol fat in blood women mmolperl",
  "unit/cholesterol_fat_in_blood_women_mmolperl": "",
  "description/infectious_tb_new_cases_per_100000_estimated": "Infectious tb new cases per 100000 estimated",
  "indicator/infectious_tb_new_cases_per_100000_estimated": "Infectious tb new cases per 100000 estimated",
  "unit/infectious_tb_new_cases_per_100000_estimated": "",
  "description/infectious_tb_new_cases_per_100000_reported": "Infectious tb new cases per 100000 reported",
  "indicator/infectious_tb_new_cases_per_100000_reported": "Infectious tb new cases per 100000 reported",
  "unit/infectious_tb_new_cases_per_100000_reported": "",
  "description/infectious_tb_number_of_new_cases_estimated": "Infectious tb number of new cases estimated",
  "indicator/infectious_tb_number_of_new_cases_estimated": "Infectious tb number of new cases estimated",
  "unit/infectious_tb_number_of_new_cases_estimated": "",
  "description/infectious_tb_number_of_new_cases_reported": "Infectious tb number of new cases reported",
  "indicator/infectious_tb_number_of_new_cases_reported": "Infectious tb number of new cases reported",
  "unit/infectious_tb_number_of_new_cases_reported": "",
  "description/infectious_tb_detection_rate_percent": "Infectious tb detection rate percent",
  "indicator/infectious_tb_detection_rate_percent": "Infectious tb detection rate percent",
  "unit/infectious_tb_detection_rate_percent": "",
  "description/infectious_tb_detection_rate_percent_dots_only": "Infectious tb detection rate percent dots only",
  "indicator/infectious_tb_detection_rate_percent_dots_only": "Infectious tb detection rate percent dots only",
  "unit/infectious_tb_detection_rate_percent_dots_only": "",
  "description/infectious_tb_treatment_dots_completed_percent": "Infectious tb treatment dots completed percent",
  "indicator/infectious_tb_treatment_dots_completed_percent": "Infectious tb treatment dots completed percent",
  "unit/infectious_tb_treatment_dots_completed_percent": "",
  "description/tb_programme_dots_population_coverage_percent": "Tb programme dots population coverage percent",
  "indicator/tb_programme_dots_population_coverage_percent": "Tb programme dots population coverage percent",
  "unit/tb_programme_dots_population_coverage_percent": "",
  "description/all_forms_of_tb_new_cases_per_100000_estimated": "All forms of tb new cases per 100000 estimated",
  "indicator/all_forms_of_tb_new_cases_per_100000_estimated": "All forms of tb new cases per 100000 estimated",
  "unit/all_forms_of_tb_new_cases_per_100000_estimated": "",
  "description/all_forms_of_tb_existing_cases_per_100000_estimated": "All forms of tb existing cases per 100000 estimated",
  "indicator/all_forms_of_tb_existing_cases_per_100000_estimated": "All forms of tb existing cases per 100000 estimated",
  "unit/all_forms_of_tb_existing_cases_per_100000_estimated": "",
  "description/all_forms_of_tb_deaths_per_100000_estimated": "All forms of tb deaths per 100000 estimated",
  "indicator/all_forms_of_tb_deaths_per_100000_estimated": "All forms of tb deaths per 100000 estimated",
  "unit/all_forms_of_tb_deaths_per_100000_estimated": "",
  "description/all_forms_of_tb_new_cases_per_100000_reported": "All forms of tb new cases per 100000 reported",
  "indicator/all_forms_of_tb_new_cases_per_100000_reported": "All forms of tb new cases per 100000 reported",
  "unit/all_forms_of_tb_new_cases_per_100000_reported": "",
  "description/all_forms_of_tb_number_of_new_cases_estimated": "All forms of tb number of new cases estimated",
  "indicator/all_forms_of_tb_number_of_new_cases_estimated": "All forms of tb number of new cases estimated",
  "unit/all_forms_of_tb_number_of_new_cases_estimated": "",
  "description/all_forms_of_tb_number_of_existing_cases_estimated": "All forms of tb number of existing cases estimated",
  "indicator/all_forms_of_tb_number_of_existing_cases_estimated": "All forms of tb number of existing cases estimated",
  "unit/all_forms_of_tb_number_of_existing_cases_estimated": "",
  "description/all_forms_of_tb_number_of_deaths_estimated": "All forms of tb number of deaths estimated",
  "indicator/all_forms_of_tb_number_of_deaths_estimated": "All forms of tb number of deaths estimated",
  "unit/all_forms_of_tb_number_of_deaths_estimated": "",
  "description/all_forms_of_tb_number_of_new_cases_reported": "All forms of tb number of new cases reported",
  "indicator/all_forms_of_tb_number_of_new_cases_reported": "All forms of tb number of new cases reported",
  "unit/all_forms_of_tb_number_of_new_cases_reported": "",
  "description/all_forms_of_tb_detection_rate_percent": "All forms of tb detection rate percent",
  "indicator/all_forms_of_tb_detection_rate_percent": "All forms of tb detection rate percent",
  "unit/all_forms_of_tb_detection_rate_percent": "",
  "description/all_forms_of_tb_detection_rate_percent_dots_only": "All forms of tb detection rate percent dots only",
  "indicator/all_forms_of_tb_detection_rate_percent_dots_only": "All forms of tb detection rate percent dots only",
  "unit/all_forms_of_tb_detection_rate_percent_dots_only": "",
  "description/tb_with_hivplus_new_cases_per_100000_estimated": "Tb with hivplus new cases per 100000 estimated",
  "indicator/tb_with_hivplus_new_cases_per_100000_estimated": "Tb with hivplus new cases per 100000 estimated",
  "unit/tb_with_hivplus_new_cases_per_100000_estimated": "",
  "description/tb_with_hivplus_existing_cases_per_100000_estimated": "Tb with hivplus existing cases per 100000 estimated",
  "indicator/tb_with_hivplus_existing_cases_per_100000_estimated": "Tb with hivplus existing cases per 100000 estimated",
  "unit/tb_with_hivplus_existing_cases_per_100000_estimated": "",
  "description/tb_with_hivplus_deaths_per_100000_estimated": "Tb with hivplus deaths per 100000 estimated",
  "indicator/tb_with_hivplus_deaths_per_100000_estimated": "Tb with hivplus deaths per 100000 estimated",
  "unit/tb_with_hivplus_deaths_per_100000_estimated": "",
  "description/tb_with_hivplus_number_of_new_cases_estimated": "Tb with hivplus number of new cases estimated",
  "indicator/tb_with_hivplus_number_of_new_cases_estimated": "Tb with hivplus number of new cases estimated",
  "unit/tb_with_hivplus_number_of_new_cases_estimated": "",
  "description/tb_with_hivplus_number_of_existing_cases_estimated": "Tb with hivplus number of existing cases estimated",
  "indicator/tb_with_hivplus_number_of_existing_cases_estimated": "Tb with hivplus number of existing cases estimated",
  "unit/tb_with_hivplus_number_of_existing_cases_estimated": "",
  "description/tb_with_hivplus_number_of_deaths_estimated": "Tb with hivplus number of deaths estimated",
  "indicator/tb_with_hivplus_number_of_deaths_estimated": "Tb with hivplus number of deaths estimated",
  "unit/tb_with_hivplus_number_of_deaths_estimated": "",
  "description/bad_teeth_per_child_12_yr": "Bad teeth per child 12 yr",
  "indicator/bad_teeth_per_child_12_yr": "Bad teeth per child 12 yr",
  "unit/bad_teeth_per_child_12_yr": "",
  "description/dtp3_immunized_percent_of_one_year_olds": "Dtp3 immunized percent of one year olds",
  "indicator/dtp3_immunized_percent_of_one_year_olds": "Dtp3 immunized percent of one year olds",
  "unit/dtp3_immunized_percent_of_one_year_olds": "",
  "description/hepb3_immunized_percent_of_one_year_olds": "Hepb3 immunized percent of one year olds",
  "indicator/hepb3_immunized_percent_of_one_year_olds": "Hepb3 immunized percent of one year olds",
  "unit/hepb3_immunized_percent_of_one_year_olds": "",
  "description/hib3_immunized_percent_of_one_year_olds": "Hib3 immunized percent of one year olds",
  "indicator/hib3_immunized_percent_of_one_year_olds": "Hib3 immunized percent of one year olds",
  "unit/hib3_immunized_percent_of_one_year_olds": "",
  "description/mcv_immunized_percent_of_one_year_olds": "Mcv immunized percent of one year olds",
  "indicator/mcv_immunized_percent_of_one_year_olds": "Mcv immunized percent of one year olds",
  "unit/mcv_immunized_percent_of_one_year_olds": "",
  "description/pab_immunized_percent_of_newborns": "Pab immunized percent of newborns",
  "indicator/pab_immunized_percent_of_newborns": "Pab immunized percent of newborns",
  "unit/pab_immunized_percent_of_newborns": "",
  "description/broadband_subscribers": "Broadband subscribers",
  "indicator/broadband_subscribers": "Broadband subscribers",
  "unit/broadband_subscribers": "",
  "description/broadband_subscribers_per_100_people": "Broadband subscribers per 100 people",
  "indicator/broadband_subscribers_per_100_people": "Broadband subscribers per 100 people",
  "unit/broadband_subscribers_per_100_people": "",
  "description/cell_phones_total": "Cell phones total",
  "indicator/cell_phones_total": "Cell phones total",
  "unit/cell_phones_total": "",
  "description/cell_phones_per_100_people": "Cell phones per 100 people",
  "indicator/cell_phones_per_100_people": "Cell phones per 100 people",
  "unit/cell_phones_per_100_people": "",
  "description/fixed_line_and_mobile_phone_subscribers_per_100_people": "Fixed line and mobile phone subscribers per 100 people",
  "indicator/fixed_line_and_mobile_phone_subscribers_per_100_people": "Fixed line and mobile phone subscribers per 100 people",
  "unit/fixed_line_and_mobile_phone_subscribers_per_100_people": "",
  "description/internet_users_total_number": "Internet users total number",
  "indicator/internet_users_total_number": "Internet users total number",
  "unit/internet_users_total_number": "",
  "description/internet_users_per_100_people": "Internet users per 100 people",
  "indicator/internet_users_per_100_people": "Internet users per 100 people",
  "unit/internet_users_per_100_people": "",
  "description/personal_computers_total": "Personal computers total",
  "indicator/personal_computers_total": "Personal computers total",
  "unit/personal_computers_total": "",
  "description/personal_computers_per_100_people": "Personal computers per 100 people",
  "indicator/personal_computers_per_100_people": "Personal computers per 100 people",
  "unit/personal_computers_per_100_people": "",
  "description/improved_sanitation_overall_access_percent": "Improved sanitation overall access percent",
  "indicator/improved_sanitation_overall_access_percent": "Improved sanitation overall access percent",
  "unit/improved_sanitation_overall_access_percent": "",
  "description/improved_sanitation_urban_access_percent": "Improved sanitation urban access percent",
  "indicator/improved_sanitation_urban_access_percent": "Improved sanitation urban access percent",
  "unit/improved_sanitation_urban_access_percent": "",
  "description/improved_sanitation_rural_access_percent": "Improved sanitation rural access percent",
  "indicator/improved_sanitation_rural_access_percent": "Improved sanitation rural access percent",
  "unit/improved_sanitation_rural_access_percent": "",
  "description/roads_paved_percent_of_total_roads": "Roads paved percent of total roads",
  "indicator/roads_paved_percent_of_total_roads": "Roads paved percent of total roads",
  "unit/roads_paved_percent_of_total_roads": "",
  "description/improved_water_source_overall_access_percent": "Improved water source overall access percent",
  "indicator/improved_water_source_overall_access_percent": "Improved water source overall access percent",
  "unit/improved_water_source_overall_access_percent": "",
  "description/improved_water_source_urban_access_percent": "Improved water source urban access percent",
  "indicator/improved_water_source_urban_access_percent": "Improved water source urban access percent",
  "unit/improved_water_source_urban_access_percent": "",
  "description/improved_water_source_rural_access_percent": "Improved water source rural access percent",
  "indicator/improved_water_source_rural_access_percent": "Improved water source rural access percent",
  "unit/improved_water_source_rural_access_percent": "",
  "description/population_aged_0_4_years_both_sexes_percent": "Population aged 0 4 years both sexes percent",
  "indicator/population_aged_0_4_years_both_sexes_percent": "Population aged 0 4 years both sexes percent",
  "unit/population_aged_0_4_years_both_sexes_percent": "",
  "description/population_aged_5_9_years_both_sexes_percent": "Population aged 5 9 years both sexes percent",
  "indicator/population_aged_5_9_years_both_sexes_percent": "Population aged 5 9 years both sexes percent",
  "unit/population_aged_5_9_years_both_sexes_percent": "",
  "description/population_aged_10_14_years_both_sexes_percent": "Population aged 10 14 years both sexes percent",
  "indicator/population_aged_10_14_years_both_sexes_percent": "Population aged 10 14 years both sexes percent",
  "unit/population_aged_10_14_years_both_sexes_percent": "",
  "description/population_aged_15_19_years_both_sexes_percent": "Population aged 15 19 years both sexes percent",
  "indicator/population_aged_15_19_years_both_sexes_percent": "Population aged 15 19 years both sexes percent",
  "unit/population_aged_15_19_years_both_sexes_percent": "",
  "description/population_aged_20_39_years_both_sexes_percent": "Population aged 20 39 years both sexes percent",
  "indicator/population_aged_20_39_years_both_sexes_percent": "Population aged 20 39 years both sexes percent",
  "unit/population_aged_20_39_years_both_sexes_percent": "",
  "description/population_aged_40_59_years_both_sexes_percent": "Population aged 40 59 years both sexes percent",
  "indicator/population_aged_40_59_years_both_sexes_percent": "Population aged 40 59 years both sexes percent",
  "unit/population_aged_40_59_years_both_sexes_percent": "",
  "description/population_aged_60plus_years_both_sexes_percent": "Population aged 60plus years both sexes percent",
  "indicator/population_aged_60plus_years_both_sexes_percent": "Population aged 60plus years both sexes percent",
  "unit/population_aged_60plus_years_both_sexes_percent": "",
  "description/population_aged_0_4_years_total_number": "Population aged 0 4 years total number",
  "indicator/population_aged_0_4_years_total_number": "Population aged 0 4 years total number",
  "unit/population_aged_0_4_years_total_number": "",
  "description/population_aged_5_9_years_total_number": "Population aged 5 9 years total number",
  "indicator/population_aged_5_9_years_total_number": "Population aged 5 9 years total number",
  "unit/population_aged_5_9_years_total_number": "",
  "description/population_aged_10_14_years_total_number": "Population aged 10 14 years total number",
  "indicator/population_aged_10_14_years_total_number": "Population aged 10 14 years total number",
  "unit/population_aged_10_14_years_total_number": "",
  "description/population_aged_15_19_years_total_number": "Population aged 15 19 years total number",
  "indicator/population_aged_15_19_years_total_number": "Population aged 15 19 years total number",
  "unit/population_aged_15_19_years_total_number": "",
  "description/population_aged_20_39_years_total_number": "Population aged 20 39 years total number",
  "indicator/population_aged_20_39_years_total_number": "Population aged 20 39 years total number",
  "unit/population_aged_20_39_years_total_number": "",
  "description/population_aged_40_59_years_total_number": "Population aged 40 59 years total number",
  "indicator/population_aged_40_59_years_total_number": "Population aged 40 59 years total number",
  "unit/population_aged_40_59_years_total_number": "",
  "description/population_aged_60plus_years_total_number": "Population aged 60plus years total number",
  "indicator/population_aged_60plus_years_total_number": "Population aged 60plus years total number",
  "unit/population_aged_60plus_years_total_number": "",
  "description/population_aged_0_4_years_female_percent": "Population aged 0 4 years female percent",
  "indicator/population_aged_0_4_years_female_percent": "Population aged 0 4 years female percent",
  "unit/population_aged_0_4_years_female_percent": "",
  "description/population_aged_5_9_years_female_percent": "Population aged 5 9 years female percent",
  "indicator/population_aged_5_9_years_female_percent": "Population aged 5 9 years female percent",
  "unit/population_aged_5_9_years_female_percent": "",
  "description/population_aged_10_14_years_female_percent": "Population aged 10 14 years female percent",
  "indicator/population_aged_10_14_years_female_percent": "Population aged 10 14 years female percent",
  "unit/population_aged_10_14_years_female_percent": "",
  "description/population_aged_15_19_years_female_percent": "Population aged 15 19 years female percent",
  "indicator/population_aged_15_19_years_female_percent": "Population aged 15 19 years female percent",
  "unit/population_aged_15_19_years_female_percent": "",
  "description/population_aged_20_39_years_female_percent": "Population aged 20 39 years female percent",
  "indicator/population_aged_20_39_years_female_percent": "Population aged 20 39 years female percent",
  "unit/population_aged_20_39_years_female_percent": "",
  "description/population_aged_40_59_years_female_percent": "Population aged 40 59 years female percent",
  "indicator/population_aged_40_59_years_female_percent": "Population aged 40 59 years female percent",
  "unit/population_aged_40_59_years_female_percent": "",
  "description/population_aged_60plus_years_female_percent": "Population aged 60plus years female percent",
  "indicator/population_aged_60plus_years_female_percent": "Population aged 60plus years female percent",
  "unit/population_aged_60plus_years_female_percent": "",
  "description/population_aged_0_4_years_male_percent": "Population aged 0 4 years male percent",
  "indicator/population_aged_0_4_years_male_percent": "Population aged 0 4 years male percent",
  "unit/population_aged_0_4_years_male_percent": "",
  "description/population_aged_5_9_years_male_percent": "Population aged 5 9 years male percent",
  "indicator/population_aged_5_9_years_male_percent": "Population aged 5 9 years male percent",
  "unit/population_aged_5_9_years_male_percent": "",
  "description/population_aged_10_14_years_male_percent": "Population aged 10 14 years male percent",
  "indicator/population_aged_10_14_years_male_percent": "Population aged 10 14 years male percent",
  "unit/population_aged_10_14_years_male_percent": "",
  "description/population_aged_15_19_years_male_percent": "Population aged 15 19 years male percent",
  "indicator/population_aged_15_19_years_male_percent": "Population aged 15 19 years male percent",
  "unit/population_aged_15_19_years_male_percent": "",
  "description/population_aged_20_39_years_male_percent": "Population aged 20 39 years male percent",
  "indicator/population_aged_20_39_years_male_percent": "Population aged 20 39 years male percent",
  "unit/population_aged_20_39_years_male_percent": "",
  "description/population_aged_40_59_years_male_percent": "Population aged 40 59 years male percent",
  "indicator/population_aged_40_59_years_male_percent": "Population aged 40 59 years male percent",
  "unit/population_aged_40_59_years_male_percent": "",
  "description/population_aged_60plus_years_male_percent": "Population aged 60plus years male percent",
  "indicator/population_aged_60plus_years_male_percent": "Population aged 60plus years male percent",
  "unit/population_aged_60plus_years_male_percent": "",
  "description/population_growth_annual_percent": "Population growth annual percent",
  "indicator/population_growth_annual_percent": "Population growth annual percent",
  "unit/population_growth_annual_percent": "",
  "description/crude_birth_rate_births_per_1000_population": "Crude birth rate births per 1000 population",
  "indicator/crude_birth_rate_births_per_1000_population": "Crude birth rate births per 1000 population",
  "unit/crude_birth_rate_births_per_1000_population": "",
  "description/crude_death_rate_deaths_per_1000_population": "Crude death rate deaths per 1000 population",
  "indicator/crude_death_rate_deaths_per_1000_population": "Crude death rate deaths per 1000 population",
  "unit/crude_death_rate_deaths_per_1000_population": "",
  "description/teen_fertility_rate_births_per_1000_women_ages_15_19": "Teen fertility rate births per 1000 women ages 15 19",
  "indicator/teen_fertility_rate_births_per_1000_women_ages_15_19": "Teen fertility rate births per 1000 women ages 15 19",
  "unit/teen_fertility_rate_births_per_1000_women_ages_15_19": "",
  "description/new_births_total_number_estimated": "New births total number estimated",
  "indicator/new_births_total_number_estimated": "New births total number estimated",
  "unit/new_births_total_number_estimated": "",
  "description/sex_ratio_all_age_groups": "Sex ratio all age groups",
  "indicator/sex_ratio_all_age_groups": "Sex ratio all age groups",
  "unit/sex_ratio_all_age_groups": "",
  "description/sex_ratio_0_14_years": "Sex ratio 0 14 years",
  "indicator/sex_ratio_0_14_years": "Sex ratio 0 14 years",
  "unit/sex_ratio_0_14_years": "",
  "description/sex_ratio_15_24_years": "Sex ratio 15 24 years",
  "indicator/sex_ratio_15_24_years": "Sex ratio 15 24 years",
  "unit/sex_ratio_15_24_years": "",
  "description/sex_ratio_15_49_years": "Sex ratio 15 49 years",
  "indicator/sex_ratio_15_49_years": "Sex ratio 15 49 years",
  "unit/sex_ratio_15_49_years": "",
  "description/sex_ratio_above_50_years": "Sex ratio above 50 years",
  "indicator/sex_ratio_above_50_years": "Sex ratio above 50 years",
  "unit/sex_ratio_above_50_years": "",
  "description/population_in_urban_agglomerations_m_1_million_percent_of_total": "Population in urban agglomerations m 1 million percent of total",
  "indicator/population_in_urban_agglomerations_m_1_million_percent_of_total": "Population in urban agglomerations m 1 million percent of total",
  "unit/population_in_urban_agglomerations_m_1_million_percent_of_total": "",
  "description/urban_population": "Urban population",
  "indicator/urban_population": "Urban population",
  "unit/urban_population": "",
  "description/urban_population_percent_of_total": "Urban population percent of total",
  "indicator/urban_population_percent_of_total": "Urban population percent of total",
  "unit/urban_population_percent_of_total": "",
  "description/urban_population_growth_annual_percent": "Urban population growth annual percent",
  "indicator/urban_population_growth_annual_percent": "Urban population growth annual percent",
  "unit/urban_population_growth_annual_percent": "",
  "description/children_and_elderly_per_100_adults": "Children and elderly per 100 adults",
  "indicator/children_and_elderly_per_100_adults": "Children and elderly per 100 adults",
  "unit/children_and_elderly_per_100_adults": "",
  "description/median_age_years": "Median age years",
  "indicator/median_age_years": "Median age years",
  "unit/median_age_years": "",
  "description/population_density_per_square_km": "Population density per square km",
  "indicator/population_density_per_square_km": "Population density per square km",
  "unit/population_density_per_square_km": "",
  "description/population_total": "Population total",
  "indicator/population_total": "Population total",
  "unit/population_total": "",
  "description/age_at_1st_marriage_women": "Age at 1st marriage women",
  "indicator/age_at_1st_marriage_women": "Age at 1st marriage women",
  "unit/age_at_1st_marriage_women": "",
  "description/murder_per_100000_people": "Murder per 100000 people",
  "indicator/murder_per_100000_people": "Murder per 100000 people",
  "unit/murder_per_100000_people": "",
  "description/corruption_perception_index_cpi": "Corruption perception index cpi",
  "indicator/corruption_perception_index_cpi": "Corruption perception index cpi",
  "unit/corruption_perception_index_cpi": "",
  "description/democracy_score_use_as_color": "Democracy score use as color",
  "indicator/democracy_score_use_as_color": "Democracy score use as color",
  "unit/democracy_score_use_as_color": "",
  "description/hdi_human_development_index": "Hdi human development index",
  "indicator/hdi_human_development_index": "Hdi human development index",
  "unit/hdi_human_development_index": "",
  "description/agriculture_workers_percent_of_labour_force": "Agriculture workers percent of labour force",
  "indicator/agriculture_workers_percent_of_labour_force": "Agriculture workers percent of labour force",
  "unit/agriculture_workers_percent_of_labour_force": "",
  "description/industry_workers_percent_of_labour_force": "Industry workers percent of labour force",
  "indicator/industry_workers_percent_of_labour_force": "Industry workers percent of labour force",
  "unit/industry_workers_percent_of_labour_force": "",
  "description/service_workers_percent_of_labour_force": "Service workers percent of labour force",
  "indicator/service_workers_percent_of_labour_force": "Service workers percent of labour force",
  "unit/service_workers_percent_of_labour_force": "",
  "description/female_agriculture_workers_percent_of_female_labour_force": "Female agriculture workers percent of female labour force",
  "indicator/female_agriculture_workers_percent_of_female_labour_force": "Female agriculture workers percent of female labour force",
  "unit/female_agriculture_workers_percent_of_female_labour_force": "",
  "description/female_industry_workers_percent_of_female_labour_force": "Female industry workers percent of female labour force",
  "indicator/female_industry_workers_percent_of_female_labour_force": "Female industry workers percent of female labour force",
  "unit/female_industry_workers_percent_of_female_labour_force": "",
  "description/female_service_workers_percent_of_female_labour_force": "Female service workers percent of female labour force",
  "indicator/female_service_workers_percent_of_female_labour_force": "Female service workers percent of female labour force",
  "unit/female_service_workers_percent_of_female_labour_force": "",
  "description/male_agriculture_workers_percent_of_male_labour_force": "Male agriculture workers percent of male labour force",
  "indicator/male_agriculture_workers_percent_of_male_labour_force": "Male agriculture workers percent of male labour force",
  "unit/male_agriculture_workers_percent_of_male_labour_force": "",
  "description/male_industry_workers_percent_of_male_labour_force": "Male industry workers percent of male labour force",
  "indicator/male_industry_workers_percent_of_male_labour_force": "Male industry workers percent of male labour force",
  "unit/male_industry_workers_percent_of_male_labour_force": "",
  "description/male_service_workers_percent_of_male_labour_force": "Male service workers percent of male labour force",
  "indicator/male_service_workers_percent_of_male_labour_force": "Male service workers percent of male labour force",
  "unit/male_service_workers_percent_of_male_labour_force": "",
  "description/family_workers_percent_of_labour_force": "Family workers percent of labour force",
  "indicator/family_workers_percent_of_labour_force": "Family workers percent of labour force",
  "unit/family_workers_percent_of_labour_force": "",
  "description/salaried_workers_percent_of_labour_force": "Salaried workers percent of labour force",
  "indicator/salaried_workers_percent_of_labour_force": "Salaried workers percent of labour force",
  "unit/salaried_workers_percent_of_labour_force": "",
  "description/self_employed_percent_of_labour_force": "Self employed percent of labour force",
  "indicator/self_employed_percent_of_labour_force": "Self employed percent of labour force",
  "unit/self_employed_percent_of_labour_force": "",
  "description/female_family_workers_percent_of_female_labour_force": "Female family workers percent of female labour force",
  "indicator/female_family_workers_percent_of_female_labour_force": "Female family workers percent of female labour force",
  "unit/female_family_workers_percent_of_female_labour_force": "",
  "description/female_salaried_workers_percent_of_female_labour_force": "Female salaried workers percent of female labour force",
  "indicator/female_salaried_workers_percent_of_female_labour_force": "Female salaried workers percent of female labour force",
  "unit/female_salaried_workers_percent_of_female_labour_force": "",
  "description/female_self_employed_percent_of_female_labour_force": "Female self employed percent of female labour force",
  "indicator/female_self_employed_percent_of_female_labour_force": "Female self employed percent of female labour force",
  "unit/female_self_employed_percent_of_female_labour_force": "",
  "description/male_family_workers_percent_of_male_labour_force": "Male family workers percent of male labour force",
  "indicator/male_family_workers_percent_of_male_labour_force": "Male family workers percent of male labour force",
  "unit/male_family_workers_percent_of_male_labour_force": "",
  "description/male_salaried_workers_percent_of_male_labour_force": "Male salaried workers percent of male labour force",
  "indicator/male_salaried_workers_percent_of_male_labour_force": "Male salaried workers percent of male labour force",
  "unit/male_salaried_workers_percent_of_male_labour_force": "",
  "description/male_self_employed_percent_of_male_labour_force": "Male self employed percent of male labour force",
  "indicator/male_self_employed_percent_of_male_labour_force": "Male self employed percent of male labour force",
  "unit/male_self_employed_percent_of_male_labour_force": "",
  "description/aged_15_24_employment_rate_percent": "Aged 15 24 employment rate percent",
  "indicator/aged_15_24_employment_rate_percent": "Aged 15 24 employment rate percent",
  "unit/aged_15_24_employment_rate_percent": "",
  "description/aged_15plus_employment_rate_percent": "Aged 15plus employment rate percent",
  "indicator/aged_15plus_employment_rate_percent": "Aged 15plus employment rate percent",
  "unit/aged_15plus_employment_rate_percent": "",
  "description/females_aged_15_24_employment_rate_percent": "Females aged 15 24 employment rate percent",
  "indicator/females_aged_15_24_employment_rate_percent": "Females aged 15 24 employment rate percent",
  "unit/females_aged_15_24_employment_rate_percent": "",
  "description/females_aged_15plus_employment_rate_percent": "Females aged 15plus employment rate percent",
  "indicator/females_aged_15plus_employment_rate_percent": "Females aged 15plus employment rate percent",
  "unit/females_aged_15plus_employment_rate_percent": "",
  "description/males_aged_15_24_employment_rate_percent": "Males aged 15 24 employment rate percent",
  "indicator/males_aged_15_24_employment_rate_percent": "Males aged 15 24 employment rate percent",
  "unit/males_aged_15_24_employment_rate_percent": "",
  "description/males_aged_15plus_employment_rate_percent": "Males aged 15plus employment rate percent",
  "indicator/males_aged_15plus_employment_rate_percent": "Males aged 15plus employment rate percent",
  "unit/males_aged_15plus_employment_rate_percent": "",
  "description/aged_15_64_labour_force_participation_rate_percent": "Aged 15 64 labour force participation rate percent",
  "indicator/aged_15_64_labour_force_participation_rate_percent": "Aged 15 64 labour force participation rate percent",
  "unit/aged_15_64_labour_force_participation_rate_percent": "",
  "description/aged_25_54_labour_force_participation_rate_percent": "Aged 25 54 labour force participation rate percent",
  "indicator/aged_25_54_labour_force_participation_rate_percent": "Aged 25 54 labour force participation rate percent",
  "unit/aged_25_54_labour_force_participation_rate_percent": "",
  "description/aged_15plus_labour_force_participation_rate_percent": "Aged 15plus labour force participation rate percent",
  "indicator/aged_15plus_labour_force_participation_rate_percent": "Aged 15plus labour force participation rate percent",
  "unit/aged_15plus_labour_force_participation_rate_percent": "",
  "description/aged_65plus_labour_force_participation_rate_percent": "Aged 65plus labour force participation rate percent",
  "indicator/aged_65plus_labour_force_participation_rate_percent": "Aged 65plus labour force participation rate percent",
  "unit/aged_65plus_labour_force_participation_rate_percent": "",
  "description/females_aged_15_64_labour_force_participation_rate_percent": "Females aged 15 64 labour force participation rate percent",
  "indicator/females_aged_15_64_labour_force_participation_rate_percent": "Females aged 15 64 labour force participation rate percent",
  "unit/females_aged_15_64_labour_force_participation_rate_percent": "",
  "description/females_aged_25_54_labour_force_participation_rate_percent": "Females aged 25 54 labour force participation rate percent",
  "indicator/females_aged_25_54_labour_force_participation_rate_percent": "Females aged 25 54 labour force participation rate percent",
  "unit/females_aged_25_54_labour_force_participation_rate_percent": "",
  "description/females_aged_15plus_labour_force_participation_rate_percent": "Females aged 15plus labour force participation rate percent",
  "indicator/females_aged_15plus_labour_force_participation_rate_percent": "Females aged 15plus labour force participation rate percent",
  "unit/females_aged_15plus_labour_force_participation_rate_percent": "",
  "description/females_aged_65plus_labour_force_participation_rate_percent": "Females aged 65plus labour force participation rate percent",
  "indicator/females_aged_65plus_labour_force_participation_rate_percent": "Females aged 65plus labour force participation rate percent",
  "unit/females_aged_65plus_labour_force_participation_rate_percent": "",
  "description/males_aged_15_64_labour_force_participation_rate_percent": "Males aged 15 64 labour force participation rate percent",
  "indicator/males_aged_15_64_labour_force_participation_rate_percent": "Males aged 15 64 labour force participation rate percent",
  "unit/males_aged_15_64_labour_force_participation_rate_percent": "",
  "description/males_aged_25_54_labour_force_participation_rate_percent": "Males aged 25 54 labour force participation rate percent",
  "indicator/males_aged_25_54_labour_force_participation_rate_percent": "Males aged 25 54 labour force participation rate percent",
  "unit/males_aged_25_54_labour_force_participation_rate_percent": "",
  "description/males_aged_15plus_labour_force_participation_rate_percent": "Males aged 15plus labour force participation rate percent",
  "indicator/males_aged_15plus_labour_force_participation_rate_percent": "Males aged 15plus labour force participation rate percent",
  "unit/males_aged_15plus_labour_force_participation_rate_percent": "",
  "description/males_aged_65plus_labour_force_participation_rate_percent": "Males aged 65plus labour force participation rate percent",
  "indicator/males_aged_65plus_labour_force_participation_rate_percent": "Males aged 65plus labour force participation rate percent",
  "unit/males_aged_65plus_labour_force_participation_rate_percent": "",
  "description/aged_15_24_unemployment_rate_percent": "Aged 15 24 unemployment rate percent",
  "indicator/aged_15_24_unemployment_rate_percent": "Aged 15 24 unemployment rate percent",
  "unit/aged_15_24_unemployment_rate_percent": "",
  "description/aged_25_54_unemployment_rate_percent": "Aged 25 54 unemployment rate percent",
  "indicator/aged_25_54_unemployment_rate_percent": "Aged 25 54 unemployment rate percent",
  "unit/aged_25_54_unemployment_rate_percent": "",
  "description/aged_15plus_unemployment_rate_percent": "Aged 15plus unemployment rate percent",
  "indicator/aged_15plus_unemployment_rate_percent": "Aged 15plus unemployment rate percent",
  "unit/aged_15plus_unemployment_rate_percent": "",
  "description/aged_55plus_unemployment_rate_percent": "Aged 55plus unemployment rate percent",
  "indicator/aged_55plus_unemployment_rate_percent": "Aged 55plus unemployment rate percent",
  "unit/aged_55plus_unemployment_rate_percent": "",
  "description/long_term_unemployment_rate_percent": "Long term unemployment rate percent",
  "indicator/long_term_unemployment_rate_percent": "Long term unemployment rate percent",
  "unit/long_term_unemployment_rate_percent": "",
  "description/females_aged_15_24_unemployment_rate_percent": "Females aged 15 24 unemployment rate percent",
  "indicator/females_aged_15_24_unemployment_rate_percent": "Females aged 15 24 unemployment rate percent",
  "unit/females_aged_15_24_unemployment_rate_percent": "",
  "description/females_aged_25_54_unemployment_rate_percent": "Females aged 25 54 unemployment rate percent",
  "indicator/females_aged_25_54_unemployment_rate_percent": "Females aged 25 54 unemployment rate percent",
  "unit/females_aged_25_54_unemployment_rate_percent": "",
  "description/females_aged_15plus_unemployment_rate_percent": "Females aged 15plus unemployment rate percent",
  "indicator/females_aged_15plus_unemployment_rate_percent": "Females aged 15plus unemployment rate percent",
  "unit/females_aged_15plus_unemployment_rate_percent": "",
  "description/females_aged_55plus_unemployment_rate_percent": "Females aged 55plus unemployment rate percent",
  "indicator/females_aged_55plus_unemployment_rate_percent": "Females aged 55plus unemployment rate percent",
  "unit/females_aged_55plus_unemployment_rate_percent": "",
  "description/female_long_term_unemployment_rate_percent": "Female long term unemployment rate percent",
  "indicator/female_long_term_unemployment_rate_percent": "Female long term unemployment rate percent",
  "unit/female_long_term_unemployment_rate_percent": "",
  "description/males_aged_15_24_unemployment_rate_percent": "Males aged 15 24 unemployment rate percent",
  "indicator/males_aged_15_24_unemployment_rate_percent": "Males aged 15 24 unemployment rate percent",
  "unit/males_aged_15_24_unemployment_rate_percent": "",
  "description/males_aged_25_54_unemployment_rate_percent": "Males aged 25 54 unemployment rate percent",
  "indicator/males_aged_25_54_unemployment_rate_percent": "Males aged 25 54 unemployment rate percent",
  "unit/males_aged_25_54_unemployment_rate_percent": "",
  "description/males_aged_15plus_unemployment_rate_percent": "Males aged 15plus unemployment rate percent",
  "indicator/males_aged_15plus_unemployment_rate_percent": "Males aged 15plus unemployment rate percent",
  "unit/males_aged_15plus_unemployment_rate_percent": "",
  "description/males_aged_55plus_unemployment_rate_percent": "Males aged 55plus unemployment rate percent",
  "indicator/males_aged_55plus_unemployment_rate_percent": "Males aged 55plus unemployment rate percent",
  "unit/males_aged_55plus_unemployment_rate_percent": "",
  "description/male_long_term_unemployment_rate_percent": "Male long term unemployment rate percent",
  "indicator/male_long_term_unemployment_rate_percent": "Male long term unemployment rate percent",
  "unit/male_long_term_unemployment_rate_percent": "",
  "description/under_five_mortality_from_cme_per_1000_born": "Under five mortality from cme per 1000 born",
  "indicator/under_five_mortality_from_cme_per_1000_born": "Under five mortality from cme per 1000 born",
  "unit/under_five_mortality_from_cme_per_1000_born": "",
  "description/under_five_mortality_from_ihme_per_1000_born": "Under five mortality from ihme per 1000 born",
  "indicator/under_five_mortality_from_ihme_per_1000_born": "Under five mortality from ihme per 1000 born",
  "unit/under_five_mortality_from_ihme_per_1000_born": "",
  "description/old_version_of_income_per_person_version_3": "Old version of income per person version 3",
  "indicator/old_version_of_income_per_person_version_3": "Old version of income per person version 3",
  "unit/old_version_of_income_per_person_version_3": "",
  "description/old_version_of_income_per_person_version_8": "Old version of income per person version 8",
  "indicator/old_version_of_income_per_person_version_8": "Old version of income per person version 8",
  "unit/old_version_of_income_per_person_version_8": "",
  "description/alternative_gdppercapita_ppp_inflation_adjusted_from_pwt": "Alternative gdppercapita ppp inflation adjusted from pwt",
  "indicator/alternative_gdppercapita_ppp_inflation_adjusted_from_pwt": "Alternative gdppercapita ppp inflation adjusted from pwt",
  "unit/alternative_gdppercapita_ppp_inflation_adjusted_from_pwt": "",
  "description/subsistence_incomes_per_person": "Subsistence incomes per person",
  "indicator/subsistence_incomes_per_person": "Subsistence incomes per person",
  "unit/subsistence_incomes_per_person": "",
  "description/alternative_poverty_percent_below_nationally_defined_poverty": "Alternative poverty percent below nationally defined poverty",
  "indicator/alternative_poverty_percent_below_nationally_defined_poverty": "Alternative poverty percent below nationally defined poverty",
  "unit/alternative_poverty_percent_below_nationally_defined_poverty": "",
  "description/data_quality_income_per_person": "Data quality income per person",
  "indicator/data_quality_income_per_person": "Data quality income per person",
  "unit/data_quality_income_per_person": "",
  "description/data_quality_life_expectancy": "Data quality life expectancy",
  "indicator/data_quality_life_expectancy": "Data quality life expectancy",
  "unit/data_quality_life_expectancy": "",
  "description/data_quality_population": "Data quality population",
  "indicator/data_quality_population": "Data quality population",
  "unit/data_quality_population": "",
  "description/estimate_or_projection_of_under_five_mortality_rate_from_ihme": "Estimate or projection of under five mortality rate from ihme",
  "indicator/estimate_or_projection_of_under_five_mortality_rate_from_ihme": "Estimate or projection of under five mortality rate from ihme",
  "unit/estimate_or_projection_of_under_five_mortality_rate_from_ihme": "",
  "description/data_quality_children_per_woman": "Data quality children per woman",
  "indicator/data_quality_children_per_woman": "Data quality children per woman",
  "unit/data_quality_children_per_woman": "",
  "description/data_method_maternal_mortality": "Data method maternal mortality",
  "indicator/data_method_maternal_mortality": "Data method maternal mortality",
  "unit/data_method_maternal_mortality": "",
  "description/economic_growth_over_the_past_10_years": "Economic growth over the past 10 years",
  "indicator/economic_growth_over_the_past_10_years": "Economic growth over the past 10 years",
  "unit/economic_growth_over_the_past_10_years": "",
  "description/how_far_to_the_north": "How far to the north",
  "indicator/how_far_to_the_north": "How far to the north",
  "unit/how_far_to_the_north": "",
  "description/income_per_person_with_projections": "Income per person with projections",
  "indicator/income_per_person_with_projections": "Income per person with projections",
  "unit/income_per_person_with_projections": "",
  "description/life_expectancy_at_birth_with_projections": "Life expectancy at birth with projections",
  "indicator/life_expectancy_at_birth_with_projections": "Life expectancy at birth with projections",
  "unit/life_expectancy_at_birth_with_projections": "",
  "description/children_per_woman_total_fertility_with_projections": "Children per woman total fertility with projections",
  "indicator/children_per_woman_total_fertility_with_projections": "Children per woman total fertility with projections",
  "unit/children_per_woman_total_fertility_with_projections": "",
  "description/total_population_with_projections": "Total population with projections",
  "indicator/total_population_with_projections": "Total population with projections",
  "unit/total_population_with_projections": "",
  "description/female_population_with_projections": "Female population with projections",
  "indicator/female_population_with_projections": "Female population with projections",
  "unit/female_population_with_projections": "",
  "description/male_population_with_projections": "Male population with projections",
  "indicator/male_population_with_projections": "Male population with projections",
  "unit/male_population_with_projections": "",
  "description/population_growth_annual_percent_with_projections": "Population growth annual percent with projections",
  "indicator/population_growth_annual_percent_with_projections": "Population growth annual percent with projections",
  "unit/population_growth_annual_percent_with_projections": "",
  "description/year_categorization_1820_2010": "Year categorization 1820 2010",
  "indicator/year_categorization_1820_2010": "Year categorization 1820 2010",
  "unit/year_categorization_1820_2010": "",
  "description/year_categorization_1950": "Year categorization 1950",
  "indicator/year_categorization_1950": "Year categorization 1950",
  "unit/year_categorization_1950": "",
  "description/traffic_deaths_per_100000_people": "Traffic deaths per 100000 people",
  "indicator/traffic_deaths_per_100000_people": "Traffic deaths per 100000 people",
  "unit/traffic_deaths_per_100000_people": "",
  "description/burns_deaths_per_100000_people": "Burns deaths per 100000 people",
  "indicator/burns_deaths_per_100000_people": "Burns deaths per 100000 people",
  "unit/burns_deaths_per_100000_people": "",
  "description/drownings_per_100000_people": "Drownings per 100000 people",
  "indicator/drownings_per_100000_people": "Drownings per 100000 people",
  "unit/drownings_per_100000_people": "",
  "description/falls_deaths_per_100000_people": "Falls deaths per 100000 people",
  "indicator/falls_deaths_per_100000_people": "Falls deaths per 100000 people",
  "unit/falls_deaths_per_100000_people": "",
  "description/poisonings_deaths_per_100000_people": "Poisonings deaths per 100000 people",
  "indicator/poisonings_deaths_per_100000_people": "Poisonings deaths per 100000 people",
  "unit/poisonings_deaths_per_100000_people": "",
  "description/cars_trucks_and_buses_per_1000_persons": "Cars trucks and buses per 1000 persons",
  "indicator/cars_trucks_and_buses_per_1000_persons": "Cars trucks and buses per 1000 persons",
  "unit/cars_trucks_and_buses_per_1000_persons": "",
  "description/traffic_deaths_women_per_100000_people": "Traffic deaths women per 100000 people",
  "indicator/traffic_deaths_women_per_100000_people": "Traffic deaths women per 100000 people",
  "unit/traffic_deaths_women_per_100000_people": "",
  "description/traffic_deaths_men_per_100000_people": "Traffic deaths men per 100000 people",
  "indicator/traffic_deaths_men_per_100000_people": "Traffic deaths men per 100000 people",
  "unit/traffic_deaths_men_per_100000_people": "",
  "description/suicide_women_per_100000_people": "Suicide women per 100000 people",
  "indicator/suicide_women_per_100000_people": "Suicide women per 100000 people",
  "unit/suicide_women_per_100000_people": "",
  "description/suicide_men_per_100000_people": "Suicide men per 100000 people",
  "indicator/suicide_men_per_100000_people": "Suicide men per 100000 people",
  "unit/suicide_men_per_100000_people": "",
  "description/murdered_women_per_100000_people": "Murdered women per 100000 people",
  "indicator/murdered_women_per_100000_people": "Murdered women per 100000 people",
  "unit/murdered_women_per_100000_people": "",
  "description/murdered_men_per_100000_people": "Murdered men per 100000 people",
  "indicator/murdered_men_per_100000_people": "Murdered men per 100000 people",
  "unit/murdered_men_per_100000_people": "",
  "description/car_deaths_per_100000_people": "Car deaths per 100000 people",
  "indicator/car_deaths_per_100000_people": "Car deaths per 100000 people",
  "unit/car_deaths_per_100000_people": "",
  "description/motorcycle_deaths_per_100000_people": "Motorcycle deaths per 100000 people",
  "indicator/motorcycle_deaths_per_100000_people": "Motorcycle deaths per 100000 people",
  "unit/motorcycle_deaths_per_100000_people": "",
  "description/murdered_children_0_14_per_100000_people": "Murdered children 0 14 per 100000 people",
  "indicator/murdered_children_0_14_per_100000_people": "Murdered children 0 14 per 100000 people",
  "unit/murdered_children_0_14_per_100000_people": "",
  "description/murdered_15_29_per_100000_people": "Murdered 15 29 per 100000 people",
  "indicator/murdered_15_29_per_100000_people": "Murdered 15 29 per 100000 people",
  "unit/murdered_15_29_per_100000_people": "",
  "description/murdered_30_44_per_100000_people": "Murdered 30 44 per 100000 people",
  "indicator/murdered_30_44_per_100000_people": "Murdered 30 44 per 100000 people",
  "unit/murdered_30_44_per_100000_people": "",
  "description/murdered_45_59_per_100000_people": "Murdered 45 59 per 100000 people",
  "indicator/murdered_45_59_per_100000_people": "Murdered 45 59 per 100000 people",
  "unit/murdered_45_59_per_100000_people": "",
  "description/murdered_60plus_per_100000_people": "Murdered 60plus per 100000 people",
  "indicator/murdered_60plus_per_100000_people": "Murdered 60plus per 100000 people",
  "unit/murdered_60plus_per_100000_people": "",
  "description/suicide_age_0_14_per_100000_people": "Suicide age 0 14 per 100000 people",
  "indicator/suicide_age_0_14_per_100000_people": "Suicide age 0 14 per 100000 people",
  "unit/suicide_age_0_14_per_100000_people": "",
  "description/suicide_age_15_29_per_100000_people": "Suicide age 15 29 per 100000 people",
  "indicator/suicide_age_15_29_per_100000_people": "Suicide age 15 29 per 100000 people",
  "unit/suicide_age_15_29_per_100000_people": "",
  "description/suicide_age_30_44_per_100000_people": "Suicide age 30 44 per 100000 people",
  "indicator/suicide_age_30_44_per_100000_people": "Suicide age 30 44 per 100000 people",
  "unit/suicide_age_30_44_per_100000_people": "",
  "description/suicide_age_45_59_per_100000_people": "Suicide age 45 59 per 100000 people",
  "indicator/suicide_age_45_59_per_100000_people": "Suicide age 45 59 per 100000 people",
  "unit/suicide_age_45_59_per_100000_people": "",
  "description/suicide_age_60plus_per_100000_people": "Suicide age 60plus per 100000 people",
  "indicator/suicide_age_60plus_per_100000_people": "Suicide age 60plus per 100000 people",
  "unit/suicide_age_60plus_per_100000_people": "",
  "description/traffic_mortality_children_0_14_per_100000_people": "Traffic mortality children 0 14 per 100000 people",
  "indicator/traffic_mortality_children_0_14_per_100000_people": "Traffic mortality children 0 14 per 100000 people",
  "unit/traffic_mortality_children_0_14_per_100000_people": "",
  "description/traffic_mortality_15_29_per_100000_people": "Traffic mortality 15 29 per 100000 people",
  "indicator/traffic_mortality_15_29_per_100000_people": "Traffic mortality 15 29 per 100000 people",
  "unit/traffic_mortality_15_29_per_100000_people": "",
  "description/traffic_mortality_30_44_per_100000_people": "Traffic mortality 30 44 per 100000 people",
  "indicator/traffic_mortality_30_44_per_100000_people": "Traffic mortality 30 44 per 100000 people",
  "unit/traffic_mortality_30_44_per_100000_people": "",
  "description/traffic_mortality_45_59_per_100000_people": "Traffic mortality 45 59 per 100000 people",
  "indicator/traffic_mortality_45_59_per_100000_people": "Traffic mortality 45 59 per 100000 people",
  "unit/traffic_mortality_45_59_per_100000_people": "",
  "description/traffic_mortality_60plus_per_100000_people": "Traffic mortality 60plus per 100000 people",
  "indicator/traffic_mortality_60plus_per_100000_people": "Traffic mortality 60plus per 100000 people",
  "unit/traffic_mortality_60plus_per_100000_people": "",
  "description/ifpri_underweight_children": "Ifpri underweight children",
  "indicator/ifpri_underweight_children": "Ifpri underweight children",
  "unit/ifpri_underweight_children": "",
  "description/maternal_mortality_ratio_who": "Maternal mortality ratio who",
  "indicator/maternal_mortality_ratio_who": "Maternal mortality ratio who",
  "unit/maternal_mortality_ratio_who": "",
  "description/battle_deaths_per_100_000": "Battle deaths per 100 000",
  "indicator/battle_deaths_per_100_000": "Battle deaths per 100 000",
  "unit/battle_deaths_per_100_000": "",
  "description/armed_forces_personnel_total": "Armed forces personnel total",
  "indicator/armed_forces_personnel_total": "Armed forces personnel total",
  "unit/armed_forces_personnel_total": "",
  "description/armed_forces_personnel_percent_of_labor_force": "Armed forces personnel percent of labor force",
  "indicator/armed_forces_personnel_percent_of_labor_force": "Armed forces personnel percent of labor force",
  "unit/armed_forces_personnel_percent_of_labor_force": "",
  "description/murder_total_deaths": "Murder total deaths",
  "indicator/murder_total_deaths": "Murder total deaths",
  "unit/murder_total_deaths": "",
  "description/suicide_total_deaths": "Suicide total deaths",
  "indicator/suicide_total_deaths": "Suicide total deaths",
  "unit/suicide_total_deaths": "",
  "description/traffic_total_deaths": "Traffic total deaths",
  "indicator/traffic_total_deaths": "Traffic total deaths",
  "unit/traffic_total_deaths": "",
  "description/debt_servicing_costs_percent_of_exports_and_net_income_from_abroad": "Debt servicing costs percent of exports and net income from abroad",
  "indicator/debt_servicing_costs_percent_of_exports_and_net_income_from_abroad": "Debt servicing costs percent of exports and net income from abroad",
  "unit/debt_servicing_costs_percent_of_exports_and_net_income_from_abroad": "",
  "description/external_debt_total_us_not_inflation_adjusted": "External debt total us not inflation adjusted",
  "indicator/external_debt_total_us_not_inflation_adjusted": "External debt total us not inflation adjusted",
  "unit/external_debt_total_us_not_inflation_adjusted": "",
  "description/present_value_of_debt_percent_of_gni": "Present value of debt percent of gni",
  "indicator/present_value_of_debt_percent_of_gni": "Present value of debt percent of gni",
  "unit/present_value_of_debt_percent_of_gni": "",
  "description/exports_unit_value_index_2000100": "Exports unit value index 2000100",
  "indicator/exports_unit_value_index_2000100": "Exports unit value index 2000100",
  "unit/exports_unit_value_index_2000100": "",
  "description/imports_unit_value_index_2000100": "Imports unit value index 2000100",
  "indicator/imports_unit_value_index_2000100": "Imports unit value index 2000100",
  "unit/imports_unit_value_index_2000100": "",
  "description/net_barter_terms_of_trade_2000_100": "Net barter terms of trade 2000 100",
  "indicator/net_barter_terms_of_trade_2000_100": "Net barter terms of trade 2000 100",
  "unit/net_barter_terms_of_trade_2000_100": "",
  "description/dead_kids_per_woman": "Dead kids per woman",
  "indicator/dead_kids_per_woman": "Dead kids per woman",
  "unit/dead_kids_per_woman": "",
  "description/surviving_kids_per_woman": "Surviving kids per woman",
  "indicator/surviving_kids_per_woman": "Surviving kids per woman",
  "unit/surviving_kids_per_woman": "",
  "description/20120905_extreme_poverty_percent_people_below_125_a_day": "20120905 extreme poverty percent people below 125 a day",
  "indicator/20120905_extreme_poverty_percent_people_below_125_a_day": "20120905 extreme poverty percent people below 125 a day",
  "unit/20120905_extreme_poverty_percent_people_below_125_a_day": "",
  "description/alternative_gdp_per_capita_ppp_wb": "Alternative gdp per capita ppp wb",
  "indicator/alternative_gdp_per_capita_ppp_wb": "Alternative gdp per capita ppp wb",
  "unit/alternative_gdp_per_capita_ppp_wb": "",
  "description/alternative_gdp_per_capita_ppp_pwt_7_1": "Alternative gdp per capita ppp pwt 7 1",
  "indicator/alternative_gdp_per_capita_ppp_pwt_7_1": "Alternative gdp per capita ppp pwt 7 1",
  "unit/alternative_gdp_per_capita_ppp_pwt_7_1": "",
  "description/number_of_child_deaths": "Number of child deaths",
  "indicator/number_of_child_deaths": "Number of child deaths",
  "unit/number_of_child_deaths": "",
  "description/energy_supply_per_person_toe": "Energy supply per person toe",
  "indicator/energy_supply_per_person_toe": "Energy supply per person toe",
  "unit/energy_supply_per_person_toe": "",
  "description/energy_from_solid_biofuels_percent": "Energy from solid biofuels percent",
  "indicator/energy_from_solid_biofuels_percent": "Energy from solid biofuels percent",
  "unit/energy_from_solid_biofuels_percent": "",
  "description/residential_energy_use_percent": "Residential energy use percent",
  "indicator/residential_energy_use_percent": "Residential energy use percent",
  "unit/residential_energy_use_percent": "",
  "description/life_expectancy_at_birth_data_from_ihme": "Life expectancy at birth data from ihme",
  "indicator/life_expectancy_at_birth_data_from_ihme": "Life expectancy at birth data from ihme",
  "unit/life_expectancy_at_birth_data_from_ihme": "",
  "description/children_per_woman_temporary_update": "Children per woman temporary update",
  "indicator/children_per_woman_temporary_update": "Children per woman temporary update",
  "unit/children_per_woman_temporary_update": "",
  "description/alternative_gdp_per_capita_ppp_pwt_8_0": "Alternative gdp per capita ppp pwt 8 0",
  "indicator/alternative_gdp_per_capita_ppp_pwt_8_0": "Alternative gdp per capita ppp pwt 8 0",
  "unit/alternative_gdp_per_capita_ppp_pwt_8_0": "",
  "description/life_expectancy_male": "Life expectancy male",
  "indicator/life_expectancy_male": "Life expectancy male",
  "unit/life_expectancy_male": "",
  "description/life_expectancy_female": "Life expectancy female",
  "indicator/life_expectancy_female": "Life expectancy female",
  "unit/life_expectancy_female": "",
  "description/gdp_total_yearly_growth": "Gdp total yearly growth",
  "indicator/gdp_total_yearly_growth": "Gdp total yearly growth",
  "unit/gdp_total_yearly_growth": "",
  "description/gdp_per_capita_yearly_growth": "Gdp per capita yearly growth",
  "indicator/gdp_per_capita_yearly_growth": "Gdp per capita yearly growth",
  "unit/gdp_per_capita_yearly_growth": "",
  "description/yearly_co2_emissions_1000_tonnes": "Yearly co2 emissions 1000 tonnes",
  "indicator/yearly_co2_emissions_1000_tonnes": "Yearly co2 emissions 1000 tonnes",
  "unit/yearly_co2_emissions_1000_tonnes": "",
  "description/child_mortality_0_5_year_olds_more_years_version_7": "Child mortality 0 5 year olds more years version 7",
  "indicator/child_mortality_0_5_year_olds_more_years_version_7": "Child mortality 0 5 year olds more years version 7",
  "unit/child_mortality_0_5_year_olds_more_years_version_7": "",
  "description/number_of_people_in_poverty": "Number of people in poverty",
  "indicator/number_of_people_in_poverty": "Number of people in poverty",
  "unit/number_of_people_in_poverty": "",
  "description/income_per_person_long_series": "Income per person long series",
  "indicator/income_per_person_long_series": "Income per person long series",
  "unit/income_per_person_long_series": "",
  "description/newborn_mortality_rate_per_1000": "Newborn mortality rate per 1000",
  "indicator/newborn_mortality_rate_per_1000": "Newborn mortality rate per 1000",
  "unit/newborn_mortality_rate_per_1000": "",
  "description/newborn_deaths": "Newborn deaths",
  "indicator/newborn_deaths": "Newborn deaths",
  "unit/newborn_deaths": "",
  "description/sg_population": "Sg population",
  "indicator/sg_population": "Sg population",
  "unit/sg_population": "",
  "description/sg_gini": "Sg gini",
  "indicator/sg_gini": "Sg gini",
  "unit/sg_gini": "",
  "description/sg_gdp_p_cap_const_ppp2011_dollar": "Sg gdp p cap const ppp2011 dollar",
  "indicator/sg_gdp_p_cap_const_ppp2011_dollar": "Sg gdp p cap const ppp2011 dollar",
  "unit/sg_gdp_p_cap_const_ppp2011_dollar": "",
  "description/time": "Time",
  "indicator/time": "Time",
  "unit/time": ""
};
