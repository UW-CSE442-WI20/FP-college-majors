const d3 = require('d3')
const database = require('./data.json');

class ScatterPlot {
  constructor() {
    data = [
      {
        "GrLivArea": 1710,
        "SalePrice": 208500
      },
      {
        "GrLivArea": 1262,
        "SalePrice": 181500
      },
      {
        "GrLivArea": 1786,
        "SalePrice": 223500
      },
      {
        "GrLivArea": 1717,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 2198,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 1362,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 1694,
        "SalePrice": 307000
      },
      {
        "GrLivArea": 2090,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 1774,
        "SalePrice": 129900
      },
      {
        "GrLivArea": 1077,
        "SalePrice": 118000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 129500
      },
      {
        "GrLivArea": 2324,
        "SalePrice": 345000
      },
      {
        "GrLivArea": 912,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 1494,
        "SalePrice": 279500
      },
      {
        "GrLivArea": 1253,
        "SalePrice": 157000
      },
      {
        "GrLivArea": 854,
        "SalePrice": 132000
      },
      {
        "GrLivArea": 1004,
        "SalePrice": 149000
      },
      {
        "GrLivArea": 1296,
        "SalePrice": 90000
      },
      {
        "GrLivArea": 1114,
        "SalePrice": 159000
      },
      {
        "GrLivArea": 1339,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 2376,
        "SalePrice": 325300
      },
      {
        "GrLivArea": 1108,
        "SalePrice": 139400
      },
      {
        "GrLivArea": 1795,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 1060,
        "SalePrice": 129900
      },
      {
        "GrLivArea": 1060,
        "SalePrice": 154000
      },
      {
        "GrLivArea": 1600,
        "SalePrice": 256300
      },
      {
        "GrLivArea": 900,
        "SalePrice": 134800
      },
      {
        "GrLivArea": 1704,
        "SalePrice": 306000
      },
      {
        "GrLivArea": 1600,
        "SalePrice": 207500
      },
      {
        "GrLivArea": 520,
        "SalePrice": 68500
      },
      {
        "GrLivArea": 1317,
        "SalePrice": 40000
      },
      {
        "GrLivArea": 1228,
        "SalePrice": 149350
      },
      {
        "GrLivArea": 1234,
        "SalePrice": 179900
      },
      {
        "GrLivArea": 1700,
        "SalePrice": 165500
      },
      {
        "GrLivArea": 1561,
        "SalePrice": 277500
      },
      {
        "GrLivArea": 2452,
        "SalePrice": 309000
      },
      {
        "GrLivArea": 1097,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1297,
        "SalePrice": 153000
      },
      {
        "GrLivArea": 1057,
        "SalePrice": 109000
      },
      {
        "GrLivArea": 1152,
        "SalePrice": 82000
      },
      {
        "GrLivArea": 1324,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1328,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 884,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 938,
        "SalePrice": 130250
      },
      {
        "GrLivArea": 1150,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 1752,
        "SalePrice": 319900
      },
      {
        "GrLivArea": 2149,
        "SalePrice": 239686
      },
      {
        "GrLivArea": 1656,
        "SalePrice": 249700
      },
      {
        "GrLivArea": 1452,
        "SalePrice": 113000
      },
      {
        "GrLivArea": 955,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 1470,
        "SalePrice": 177000
      },
      {
        "GrLivArea": 1176,
        "SalePrice": 114500
      },
      {
        "GrLivArea": 816,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1842,
        "SalePrice": 385000
      },
      {
        "GrLivArea": 1360,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 1425,
        "SalePrice": 180500
      },
      {
        "GrLivArea": 1739,
        "SalePrice": 172500
      },
      {
        "GrLivArea": 1720,
        "SalePrice": 196500
      },
      {
        "GrLivArea": 2945,
        "SalePrice": 438780
      },
      {
        "GrLivArea": 780,
        "SalePrice": 124900
      },
      {
        "GrLivArea": 1158,
        "SalePrice": 158000
      },
      {
        "GrLivArea": 1111,
        "SalePrice": 101000
      },
      {
        "GrLivArea": 1370,
        "SalePrice": 202500
      },
      {
        "GrLivArea": 1710,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 2034,
        "SalePrice": 219500
      },
      {
        "GrLivArea": 2473,
        "SalePrice": 317000
      },
      {
        "GrLivArea": 2207,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 1479,
        "SalePrice": 226000
      },
      {
        "GrLivArea": 747,
        "SalePrice": 80000
      },
      {
        "GrLivArea": 2287,
        "SalePrice": 225000
      },
      {
        "GrLivArea": 2223,
        "SalePrice": 244000
      },
      {
        "GrLivArea": 845,
        "SalePrice": 129500
      },
      {
        "GrLivArea": 1718,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1086,
        "SalePrice": 144900
      },
      {
        "GrLivArea": 1605,
        "SalePrice": 107400
      },
      {
        "GrLivArea": 988,
        "SalePrice": 91000
      },
      {
        "GrLivArea": 952,
        "SalePrice": 135750
      },
      {
        "GrLivArea": 1285,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 1768,
        "SalePrice": 136500
      },
      {
        "GrLivArea": 1230,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 2142,
        "SalePrice": 193500
      },
      {
        "GrLivArea": 1337,
        "SalePrice": 153500
      },
      {
        "GrLivArea": 1563,
        "SalePrice": 245000
      },
      {
        "GrLivArea": 1065,
        "SalePrice": 126500
      },
      {
        "GrLivArea": 1474,
        "SalePrice": 168500
      },
      {
        "GrLivArea": 2417,
        "SalePrice": 260000
      },
      {
        "GrLivArea": 1560,
        "SalePrice": 174000
      },
      {
        "GrLivArea": 1224,
        "SalePrice": 164500
      },
      {
        "GrLivArea": 1526,
        "SalePrice": 85000
      },
      {
        "GrLivArea": 990,
        "SalePrice": 123600
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 109900
      },
      {
        "GrLivArea": 1235,
        "SalePrice": 98600
      },
      {
        "GrLivArea": 964,
        "SalePrice": 163500
      },
      {
        "GrLivArea": 2291,
        "SalePrice": 133900
      },
      {
        "GrLivArea": 1786,
        "SalePrice": 204750
      },
      {
        "GrLivArea": 1470,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1588,
        "SalePrice": 214000
      },
      {
        "GrLivArea": 960,
        "SalePrice": 94750
      },
      {
        "GrLivArea": 835,
        "SalePrice": 83000
      },
      {
        "GrLivArea": 1225,
        "SalePrice": 128950
      },
      {
        "GrLivArea": 1610,
        "SalePrice": 205000
      },
      {
        "GrLivArea": 1732,
        "SalePrice": 178000
      },
      {
        "GrLivArea": 1535,
        "SalePrice": 118964
      },
      {
        "GrLivArea": 1226,
        "SalePrice": 198900
      },
      {
        "GrLivArea": 1818,
        "SalePrice": 169500
      },
      {
        "GrLivArea": 1992,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 1047,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 789,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1517,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1844,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1855,
        "SalePrice": 136900
      },
      {
        "GrLivArea": 1430,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 2696,
        "SalePrice": 383970
      },
      {
        "GrLivArea": 2259,
        "SalePrice": 217000
      },
      {
        "GrLivArea": 2320,
        "SalePrice": 259500
      },
      {
        "GrLivArea": 1458,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 1125,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 3222,
        "SalePrice": 320000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 163990
      },
      {
        "GrLivArea": 988,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 1123,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1080,
        "SalePrice": 136000
      },
      {
        "GrLivArea": 1199,
        "SalePrice": 153900
      },
      {
        "GrLivArea": 1586,
        "SalePrice": 181000
      },
      {
        "GrLivArea": 754,
        "SalePrice": 84500
      },
      {
        "GrLivArea": 958,
        "SalePrice": 128000
      },
      {
        "GrLivArea": 840,
        "SalePrice": 87000
      },
      {
        "GrLivArea": 1348,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1053,
        "SalePrice": 150000
      },
      {
        "GrLivArea": 2157,
        "SalePrice": 226000
      },
      {
        "GrLivArea": 2054,
        "SalePrice": 244000
      },
      {
        "GrLivArea": 1327,
        "SalePrice": 150750
      },
      {
        "GrLivArea": 1296,
        "SalePrice": 220000
      },
      {
        "GrLivArea": 1721,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 1682,
        "SalePrice": 174000
      },
      {
        "GrLivArea": 1214,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 1959,
        "SalePrice": 171000
      },
      {
        "GrLivArea": 1852,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 1764,
        "SalePrice": 231500
      },
      {
        "GrLivArea": 864,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1734,
        "SalePrice": 260000
      },
      {
        "GrLivArea": 1385,
        "SalePrice": 166000
      },
      {
        "GrLivArea": 1501,
        "SalePrice": 204000
      },
      {
        "GrLivArea": 1728,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1709,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 875,
        "SalePrice": 105000
      },
      {
        "GrLivArea": 2035,
        "SalePrice": 222500
      },
      {
        "GrLivArea": 1080,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 1344,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 969,
        "SalePrice": 122000
      },
      {
        "GrLivArea": 1710,
        "SalePrice": 372402
      },
      {
        "GrLivArea": 1993,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1252,
        "SalePrice": 235000
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1096,
        "SalePrice": 79000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 109500
      },
      {
        "GrLivArea": 1968,
        "SalePrice": 269500
      },
      {
        "GrLivArea": 1947,
        "SalePrice": 254900
      },
      {
        "GrLivArea": 2462,
        "SalePrice": 320000
      },
      {
        "GrLivArea": 1232,
        "SalePrice": 162500
      },
      {
        "GrLivArea": 2668,
        "SalePrice": 412500
      },
      {
        "GrLivArea": 1541,
        "SalePrice": 220000
      },
      {
        "GrLivArea": 882,
        "SalePrice": 103200
      },
      {
        "GrLivArea": 1616,
        "SalePrice": 152000
      },
      {
        "GrLivArea": 1355,
        "SalePrice": 127500
      },
      {
        "GrLivArea": 1867,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 2161,
        "SalePrice": 325624
      },
      {
        "GrLivArea": 1720,
        "SalePrice": 183500
      },
      {
        "GrLivArea": 1707,
        "SalePrice": 228000
      },
      {
        "GrLivArea": 1382,
        "SalePrice": 128500
      },
      {
        "GrLivArea": 1656,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 1767,
        "SalePrice": 239000
      },
      {
        "GrLivArea": 1362,
        "SalePrice": 163000
      },
      {
        "GrLivArea": 1651,
        "SalePrice": 184000
      },
      {
        "GrLivArea": 2158,
        "SalePrice": 243000
      },
      {
        "GrLivArea": 2060,
        "SalePrice": 211000
      },
      {
        "GrLivArea": 1920,
        "SalePrice": 172500
      },
      {
        "GrLivArea": 2234,
        "SalePrice": 501837
      },
      {
        "GrLivArea": 968,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1525,
        "SalePrice": 177000
      },
      {
        "GrLivArea": 1802,
        "SalePrice": 200100
      },
      {
        "GrLivArea": 1340,
        "SalePrice": 120000
      },
      {
        "GrLivArea": 2082,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 1252,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 3608,
        "SalePrice": 475000
      },
      {
        "GrLivArea": 1217,
        "SalePrice": 173000
      },
      {
        "GrLivArea": 1656,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1224,
        "SalePrice": 153337
      },
      {
        "GrLivArea": 1593,
        "SalePrice": 286000
      },
      {
        "GrLivArea": 2727,
        "SalePrice": 315000
      },
      {
        "GrLivArea": 1479,
        "SalePrice": 184000
      },
      {
        "GrLivArea": 1431,
        "SalePrice": 192000
      },
      {
        "GrLivArea": 1709,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 148500
      },
      {
        "GrLivArea": 1726,
        "SalePrice": 311872
      },
      {
        "GrLivArea": 3112,
        "SalePrice": 235000
      },
      {
        "GrLivArea": 2229,
        "SalePrice": 104000
      },
      {
        "GrLivArea": 1713,
        "SalePrice": 274900
      },
      {
        "GrLivArea": 1121,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1279,
        "SalePrice": 171500
      },
      {
        "GrLivArea": 1310,
        "SalePrice": 112000
      },
      {
        "GrLivArea": 848,
        "SalePrice": 149000
      },
      {
        "GrLivArea": 1284,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1442,
        "SalePrice": 180500
      },
      {
        "GrLivArea": 1696,
        "SalePrice": 143900
      },
      {
        "GrLivArea": 1100,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 2062,
        "SalePrice": 277000
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 98000
      },
      {
        "GrLivArea": 1212,
        "SalePrice": 186000
      },
      {
        "GrLivArea": 1852,
        "SalePrice": 252678
      },
      {
        "GrLivArea": 990,
        "SalePrice": 156000
      },
      {
        "GrLivArea": 1392,
        "SalePrice": 161750
      },
      {
        "GrLivArea": 1236,
        "SalePrice": 134450
      },
      {
        "GrLivArea": 1436,
        "SalePrice": 210000
      },
      {
        "GrLivArea": 1328,
        "SalePrice": 107000
      },
      {
        "GrLivArea": 1954,
        "SalePrice": 311500
      },
      {
        "GrLivArea": 1248,
        "SalePrice": 167240
      },
      {
        "GrLivArea": 1498,
        "SalePrice": 204900
      },
      {
        "GrLivArea": 2267,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 1552,
        "SalePrice": 179900
      },
      {
        "GrLivArea": 864,
        "SalePrice": 97000
      },
      {
        "GrLivArea": 2392,
        "SalePrice": 386250
      },
      {
        "GrLivArea": 1302,
        "SalePrice": 112000
      },
      {
        "GrLivArea": 2520,
        "SalePrice": 290000
      },
      {
        "GrLivArea": 987,
        "SalePrice": 106000
      },
      {
        "GrLivArea": 912,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1555,
        "SalePrice": 192500
      },
      {
        "GrLivArea": 1194,
        "SalePrice": 148000
      },
      {
        "GrLivArea": 2794,
        "SalePrice": 403000
      },
      {
        "GrLivArea": 987,
        "SalePrice": 94500
      },
      {
        "GrLivArea": 894,
        "SalePrice": 128200
      },
      {
        "GrLivArea": 1960,
        "SalePrice": 216500
      },
      {
        "GrLivArea": 987,
        "SalePrice": 89500
      },
      {
        "GrLivArea": 1414,
        "SalePrice": 185500
      },
      {
        "GrLivArea": 1744,
        "SalePrice": 194500
      },
      {
        "GrLivArea": 1694,
        "SalePrice": 318000
      },
      {
        "GrLivArea": 1487,
        "SalePrice": 113000
      },
      {
        "GrLivArea": 1566,
        "SalePrice": 262500
      },
      {
        "GrLivArea": 866,
        "SalePrice": 110500
      },
      {
        "GrLivArea": 1440,
        "SalePrice": 79000
      },
      {
        "GrLivArea": 1217,
        "SalePrice": 120000
      },
      {
        "GrLivArea": 2110,
        "SalePrice": 205000
      },
      {
        "GrLivArea": 1872,
        "SalePrice": 241500
      },
      {
        "GrLivArea": 1928,
        "SalePrice": 137000
      },
      {
        "GrLivArea": 1375,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1668,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 2144,
        "SalePrice": 277000
      },
      {
        "GrLivArea": 1306,
        "SalePrice": 76500
      },
      {
        "GrLivArea": 1625,
        "SalePrice": 235000
      },
      {
        "GrLivArea": 1640,
        "SalePrice": 173000
      },
      {
        "GrLivArea": 1302,
        "SalePrice": 158000
      },
      {
        "GrLivArea": 1314,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 2291,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 1728,
        "SalePrice": 207500
      },
      {
        "GrLivArea": 1604,
        "SalePrice": 220000
      },
      {
        "GrLivArea": 1792,
        "SalePrice": 231500
      },
      {
        "GrLivArea": 882,
        "SalePrice": 97000
      },
      {
        "GrLivArea": 1382,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 2574,
        "SalePrice": 276000
      },
      {
        "GrLivArea": 1212,
        "SalePrice": 151000
      },
      {
        "GrLivArea": 1316,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 764,
        "SalePrice": 73000
      },
      {
        "GrLivArea": 1422,
        "SalePrice": 175500
      },
      {
        "GrLivArea": 1511,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 2192,
        "SalePrice": 179500
      },
      {
        "GrLivArea": 778,
        "SalePrice": 120500
      },
      {
        "GrLivArea": 1113,
        "SalePrice": 148000
      },
      {
        "GrLivArea": 1939,
        "SalePrice": 266000
      },
      {
        "GrLivArea": 1363,
        "SalePrice": 241500
      },
      {
        "GrLivArea": 2270,
        "SalePrice": 290000
      },
      {
        "GrLivArea": 1632,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 816,
        "SalePrice": 124500
      },
      {
        "GrLivArea": 1548,
        "SalePrice": 205000
      },
      {
        "GrLivArea": 1560,
        "SalePrice": 201000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 2121,
        "SalePrice": 415298
      },
      {
        "GrLivArea": 2022,
        "SalePrice": 192000
      },
      {
        "GrLivArea": 1982,
        "SalePrice": 228500
      },
      {
        "GrLivArea": 1262,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1314,
        "SalePrice": 207500
      },
      {
        "GrLivArea": 1468,
        "SalePrice": 244600
      },
      {
        "GrLivArea": 1575,
        "SalePrice": 179200
      },
      {
        "GrLivArea": 1250,
        "SalePrice": 164700
      },
      {
        "GrLivArea": 1734,
        "SalePrice": 159000
      },
      {
        "GrLivArea": 858,
        "SalePrice": 88000
      },
      {
        "GrLivArea": 900,
        "SalePrice": 122000
      },
      {
        "GrLivArea": 1396,
        "SalePrice": 153575
      },
      {
        "GrLivArea": 1919,
        "SalePrice": 233230
      },
      {
        "GrLivArea": 1716,
        "SalePrice": 135900
      },
      {
        "GrLivArea": 1716,
        "SalePrice": 131000
      },
      {
        "GrLivArea": 2263,
        "SalePrice": 235000
      },
      {
        "GrLivArea": 1644,
        "SalePrice": 167000
      },
      {
        "GrLivArea": 1003,
        "SalePrice": 142500
      },
      {
        "GrLivArea": 1558,
        "SalePrice": 152000
      },
      {
        "GrLivArea": 1950,
        "SalePrice": 239000
      },
      {
        "GrLivArea": 1743,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 1152,
        "SalePrice": 158500
      },
      {
        "GrLivArea": 1336,
        "SalePrice": 157000
      },
      {
        "GrLivArea": 2452,
        "SalePrice": 267000
      },
      {
        "GrLivArea": 1541,
        "SalePrice": 205000
      },
      {
        "GrLivArea": 894,
        "SalePrice": 149900
      },
      {
        "GrLivArea": 3493,
        "SalePrice": 295000
      },
      {
        "GrLivArea": 2000,
        "SalePrice": 305900
      },
      {
        "GrLivArea": 2243,
        "SalePrice": 225000
      },
      {
        "GrLivArea": 1406,
        "SalePrice": 89500
      },
      {
        "GrLivArea": 861,
        "SalePrice": 82500
      },
      {
        "GrLivArea": 1944,
        "SalePrice": 360000
      },
      {
        "GrLivArea": 1501,
        "SalePrice": 165600
      },
      {
        "GrLivArea": 972,
        "SalePrice": 132000
      },
      {
        "GrLivArea": 1118,
        "SalePrice": 119900
      },
      {
        "GrLivArea": 2036,
        "SalePrice": 375000
      },
      {
        "GrLivArea": 1641,
        "SalePrice": 178000
      },
      {
        "GrLivArea": 1432,
        "SalePrice": 188500
      },
      {
        "GrLivArea": 2353,
        "SalePrice": 260000
      },
      {
        "GrLivArea": 1959,
        "SalePrice": 270000
      },
      {
        "GrLivArea": 2646,
        "SalePrice": 260000
      },
      {
        "GrLivArea": 1472,
        "SalePrice": 187500
      },
      {
        "GrLivArea": 2596,
        "SalePrice": 342643
      },
      {
        "GrLivArea": 2468,
        "SalePrice": 354000
      },
      {
        "GrLivArea": 2730,
        "SalePrice": 301000
      },
      {
        "GrLivArea": 1163,
        "SalePrice": 126175
      },
      {
        "GrLivArea": 2978,
        "SalePrice": 242000
      },
      {
        "GrLivArea": 803,
        "SalePrice": 87000
      },
      {
        "GrLivArea": 1719,
        "SalePrice": 324000
      },
      {
        "GrLivArea": 1383,
        "SalePrice": 145250
      },
      {
        "GrLivArea": 2134,
        "SalePrice": 214500
      },
      {
        "GrLivArea": 1192,
        "SalePrice": 78000
      },
      {
        "GrLivArea": 1728,
        "SalePrice": 119000
      },
      {
        "GrLivArea": 1056,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 1629,
        "SalePrice": 284000
      },
      {
        "GrLivArea": 1358,
        "SalePrice": 207000
      },
      {
        "GrLivArea": 1638,
        "SalePrice": 192000
      },
      {
        "GrLivArea": 1786,
        "SalePrice": 228950
      },
      {
        "GrLivArea": 1922,
        "SalePrice": 377426
      },
      {
        "GrLivArea": 1536,
        "SalePrice": 214000
      },
      {
        "GrLivArea": 1621,
        "SalePrice": 202500
      },
      {
        "GrLivArea": 1215,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1908,
        "SalePrice": 202900
      },
      {
        "GrLivArea": 841,
        "SalePrice": 82000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 87500
      },
      {
        "GrLivArea": 1684,
        "SalePrice": 266000
      },
      {
        "GrLivArea": 1112,
        "SalePrice": 85000
      },
      {
        "GrLivArea": 1577,
        "SalePrice": 140200
      },
      {
        "GrLivArea": 958,
        "SalePrice": 151500
      },
      {
        "GrLivArea": 1478,
        "SalePrice": 157500
      },
      {
        "GrLivArea": 1626,
        "SalePrice": 154000
      },
      {
        "GrLivArea": 2728,
        "SalePrice": 437154
      },
      {
        "GrLivArea": 1869,
        "SalePrice": 318061
      },
      {
        "GrLivArea": 1453,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1111,
        "SalePrice": 95000
      },
      {
        "GrLivArea": 720,
        "SalePrice": 105900
      },
      {
        "GrLivArea": 1595,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 177500
      },
      {
        "GrLivArea": 1167,
        "SalePrice": 173000
      },
      {
        "GrLivArea": 1142,
        "SalePrice": 134000
      },
      {
        "GrLivArea": 1352,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 1924,
        "SalePrice": 280000
      },
      {
        "GrLivArea": 912,
        "SalePrice": 156000
      },
      {
        "GrLivArea": 1505,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1922,
        "SalePrice": 198500
      },
      {
        "GrLivArea": 987,
        "SalePrice": 118000
      },
      {
        "GrLivArea": 1574,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1344,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 1394,
        "SalePrice": 159000
      },
      {
        "GrLivArea": 1431,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 1268,
        "SalePrice": 132000
      },
      {
        "GrLivArea": 1287,
        "SalePrice": 162000
      },
      {
        "GrLivArea": 1664,
        "SalePrice": 172400
      },
      {
        "GrLivArea": 1588,
        "SalePrice": 134432
      },
      {
        "GrLivArea": 752,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1319,
        "SalePrice": 123000
      },
      {
        "GrLivArea": 1928,
        "SalePrice": 219500
      },
      {
        "GrLivArea": 904,
        "SalePrice": 61000
      },
      {
        "GrLivArea": 914,
        "SalePrice": 148000
      },
      {
        "GrLivArea": 2466,
        "SalePrice": 340000
      },
      {
        "GrLivArea": 1856,
        "SalePrice": 394432
      },
      {
        "GrLivArea": 1800,
        "SalePrice": 179000
      },
      {
        "GrLivArea": 1691,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 1301,
        "SalePrice": 187750
      },
      {
        "GrLivArea": 1797,
        "SalePrice": 213500
      },
      {
        "GrLivArea": 784,
        "SalePrice": 76000
      },
      {
        "GrLivArea": 1953,
        "SalePrice": 240000
      },
      {
        "GrLivArea": 1269,
        "SalePrice": 192000
      },
      {
        "GrLivArea": 1184,
        "SalePrice": 81000
      },
      {
        "GrLivArea": 1125,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1479,
        "SalePrice": 191000
      },
      {
        "GrLivArea": 2332,
        "SalePrice": 426000
      },
      {
        "GrLivArea": 1367,
        "SalePrice": 119000
      },
      {
        "GrLivArea": 1961,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 882,
        "SalePrice": 106500
      },
      {
        "GrLivArea": 788,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1034,
        "SalePrice": 109000
      },
      {
        "GrLivArea": 1144,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 894,
        "SalePrice": 123000
      },
      {
        "GrLivArea": 1812,
        "SalePrice": 169500
      },
      {
        "GrLivArea": 1077,
        "SalePrice": 67000
      },
      {
        "GrLivArea": 1550,
        "SalePrice": 241000
      },
      {
        "GrLivArea": 1288,
        "SalePrice": 245500
      },
      {
        "GrLivArea": 1310,
        "SalePrice": 164990
      },
      {
        "GrLivArea": 672,
        "SalePrice": 108000
      },
      {
        "GrLivArea": 2263,
        "SalePrice": 258000
      },
      {
        "GrLivArea": 1572,
        "SalePrice": 168000
      },
      {
        "GrLivArea": 1620,
        "SalePrice": 150000
      },
      {
        "GrLivArea": 1639,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1680,
        "SalePrice": 177000
      },
      {
        "GrLivArea": 2172,
        "SalePrice": 280000
      },
      {
        "GrLivArea": 2078,
        "SalePrice": 339750
      },
      {
        "GrLivArea": 1276,
        "SalePrice": 60000
      },
      {
        "GrLivArea": 1056,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1478,
        "SalePrice": 222000
      },
      {
        "GrLivArea": 1028,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 2097,
        "SalePrice": 228000
      },
      {
        "GrLivArea": 1340,
        "SalePrice": 181134
      },
      {
        "GrLivArea": 1400,
        "SalePrice": 149500
      },
      {
        "GrLivArea": 2624,
        "SalePrice": 239000
      },
      {
        "GrLivArea": 1134,
        "SalePrice": 126000
      },
      {
        "GrLivArea": 1056,
        "SalePrice": 142000
      },
      {
        "GrLivArea": 1344,
        "SalePrice": 206300
      },
      {
        "GrLivArea": 1602,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 988,
        "SalePrice": 113000
      },
      {
        "GrLivArea": 2630,
        "SalePrice": 315000
      },
      {
        "GrLivArea": 1196,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 1389,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1644,
        "SalePrice": 275000
      },
      {
        "GrLivArea": 907,
        "SalePrice": 109008
      },
      {
        "GrLivArea": 1208,
        "SalePrice": 195400
      },
      {
        "GrLivArea": 1412,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 987,
        "SalePrice": 85400
      },
      {
        "GrLivArea": 1198,
        "SalePrice": 79900
      },
      {
        "GrLivArea": 1365,
        "SalePrice": 122500
      },
      {
        "GrLivArea": 1604,
        "SalePrice": 181000
      },
      {
        "GrLivArea": 630,
        "SalePrice": 81000
      },
      {
        "GrLivArea": 1661,
        "SalePrice": 212000
      },
      {
        "GrLivArea": 1118,
        "SalePrice": 116000
      },
      {
        "GrLivArea": 904,
        "SalePrice": 119000
      },
      {
        "GrLivArea": 694,
        "SalePrice": 90350
      },
      {
        "GrLivArea": 1196,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 2402,
        "SalePrice": 555000
      },
      {
        "GrLivArea": 1440,
        "SalePrice": 118000
      },
      {
        "GrLivArea": 1573,
        "SalePrice": 162900
      },
      {
        "GrLivArea": 1258,
        "SalePrice": 172500
      },
      {
        "GrLivArea": 1908,
        "SalePrice": 210000
      },
      {
        "GrLivArea": 1689,
        "SalePrice": 127500
      },
      {
        "GrLivArea": 1888,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1886,
        "SalePrice": 199900
      },
      {
        "GrLivArea": 1376,
        "SalePrice": 119500
      },
      {
        "GrLivArea": 1183,
        "SalePrice": 120000
      },
      {
        "GrLivArea": 813,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1533,
        "SalePrice": 280000
      },
      {
        "GrLivArea": 1756,
        "SalePrice": 204000
      },
      {
        "GrLivArea": 1590,
        "SalePrice": 210000
      },
      {
        "GrLivArea": 1728,
        "SalePrice": 188000
      },
      {
        "GrLivArea": 1242,
        "SalePrice": 175500
      },
      {
        "GrLivArea": 1344,
        "SalePrice": 98000
      },
      {
        "GrLivArea": 1663,
        "SalePrice": 256000
      },
      {
        "GrLivArea": 1666,
        "SalePrice": 161000
      },
      {
        "GrLivArea": 1203,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1935,
        "SalePrice": 263435
      },
      {
        "GrLivArea": 1135,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 62383
      },
      {
        "GrLivArea": 1660,
        "SalePrice": 188700
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 124000
      },
      {
        "GrLivArea": 1414,
        "SalePrice": 178740
      },
      {
        "GrLivArea": 1277,
        "SalePrice": 167000
      },
      {
        "GrLivArea": 1644,
        "SalePrice": 146500
      },
      {
        "GrLivArea": 1634,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 1710,
        "SalePrice": 187000
      },
      {
        "GrLivArea": 1502,
        "SalePrice": 212000
      },
      {
        "GrLivArea": 1969,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1072,
        "SalePrice": 148000
      },
      {
        "GrLivArea": 1976,
        "SalePrice": 440000
      },
      {
        "GrLivArea": 1652,
        "SalePrice": 251000
      },
      {
        "GrLivArea": 970,
        "SalePrice": 132500
      },
      {
        "GrLivArea": 1493,
        "SalePrice": 208900
      },
      {
        "GrLivArea": 2643,
        "SalePrice": 380000
      },
      {
        "GrLivArea": 1718,
        "SalePrice": 297000
      },
      {
        "GrLivArea": 1131,
        "SalePrice": 89471
      },
      {
        "GrLivArea": 1850,
        "SalePrice": 326000
      },
      {
        "GrLivArea": 1792,
        "SalePrice": 374000
      },
      {
        "GrLivArea": 1826,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1216,
        "SalePrice": 164000
      },
      {
        "GrLivArea": 999,
        "SalePrice": 132500
      },
      {
        "GrLivArea": 1113,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 1073,
        "SalePrice": 156000
      },
      {
        "GrLivArea": 1484,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 2414,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 630,
        "SalePrice": 86000
      },
      {
        "GrLivArea": 1304,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1578,
        "SalePrice": 133000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 172785
      },
      {
        "GrLivArea": 1269,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 886,
        "SalePrice": 91300
      },
      {
        "GrLivArea": 720,
        "SalePrice": 34900
      },
      {
        "GrLivArea": 3228,
        "SalePrice": 430000
      },
      {
        "GrLivArea": 1820,
        "SalePrice": 184000
      },
      {
        "GrLivArea": 899,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 912,
        "SalePrice": 120000
      },
      {
        "GrLivArea": 1218,
        "SalePrice": 113000
      },
      {
        "GrLivArea": 1768,
        "SalePrice": 226700
      },
      {
        "GrLivArea": 1214,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1801,
        "SalePrice": 289000
      },
      {
        "GrLivArea": 1322,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 1960,
        "SalePrice": 124500
      },
      {
        "GrLivArea": 1911,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 1218,
        "SalePrice": 208300
      },
      {
        "GrLivArea": 1378,
        "SalePrice": 161000
      },
      {
        "GrLivArea": 1041,
        "SalePrice": 124500
      },
      {
        "GrLivArea": 1363,
        "SalePrice": 164900
      },
      {
        "GrLivArea": 1368,
        "SalePrice": 202665
      },
      {
        "GrLivArea": 864,
        "SalePrice": 129900
      },
      {
        "GrLivArea": 1080,
        "SalePrice": 134000
      },
      {
        "GrLivArea": 789,
        "SalePrice": 96500
      },
      {
        "GrLivArea": 2020,
        "SalePrice": 402861
      },
      {
        "GrLivArea": 2119,
        "SalePrice": 158000
      },
      {
        "GrLivArea": 2344,
        "SalePrice": 265000
      },
      {
        "GrLivArea": 1796,
        "SalePrice": 211000
      },
      {
        "GrLivArea": 2080,
        "SalePrice": 234000
      },
      {
        "GrLivArea": 1294,
        "SalePrice": 106250
      },
      {
        "GrLivArea": 1244,
        "SalePrice": 150000
      },
      {
        "GrLivArea": 1664,
        "SalePrice": 159000
      },
      {
        "GrLivArea": 4676,
        "SalePrice": 184750
      },
      {
        "GrLivArea": 2398,
        "SalePrice": 315750
      },
      {
        "GrLivArea": 1266,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 928,
        "SalePrice": 132000
      },
      {
        "GrLivArea": 2713,
        "SalePrice": 446261
      },
      {
        "GrLivArea": 605,
        "SalePrice": 86000
      },
      {
        "GrLivArea": 2515,
        "SalePrice": 200624
      },
      {
        "GrLivArea": 1509,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 1362,
        "SalePrice": 128000
      },
      {
        "GrLivArea": 827,
        "SalePrice": 107500
      },
      {
        "GrLivArea": 334,
        "SalePrice": 39300
      },
      {
        "GrLivArea": 1414,
        "SalePrice": 178000
      },
      {
        "GrLivArea": 1347,
        "SalePrice": 107500
      },
      {
        "GrLivArea": 1724,
        "SalePrice": 188000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 111250
      },
      {
        "GrLivArea": 1159,
        "SalePrice": 158000
      },
      {
        "GrLivArea": 1601,
        "SalePrice": 272000
      },
      {
        "GrLivArea": 1838,
        "SalePrice": 315000
      },
      {
        "GrLivArea": 2285,
        "SalePrice": 248000
      },
      {
        "GrLivArea": 1680,
        "SalePrice": 213250
      },
      {
        "GrLivArea": 767,
        "SalePrice": 133000
      },
      {
        "GrLivArea": 1496,
        "SalePrice": 179665
      },
      {
        "GrLivArea": 2183,
        "SalePrice": 229000
      },
      {
        "GrLivArea": 1635,
        "SalePrice": 210000
      },
      {
        "GrLivArea": 768,
        "SalePrice": 129500
      },
      {
        "GrLivArea": 825,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 2094,
        "SalePrice": 263000
      },
      {
        "GrLivArea": 1069,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 928,
        "SalePrice": 112500
      },
      {
        "GrLivArea": 1717,
        "SalePrice": 255500
      },
      {
        "GrLivArea": 1126,
        "SalePrice": 108000
      },
      {
        "GrLivArea": 2046,
        "SalePrice": 284000
      },
      {
        "GrLivArea": 1048,
        "SalePrice": 113000
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 1336,
        "SalePrice": 108000
      },
      {
        "GrLivArea": 1446,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 1557,
        "SalePrice": 234000
      },
      {
        "GrLivArea": 1392,
        "SalePrice": 121500
      },
      {
        "GrLivArea": 1389,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 996,
        "SalePrice": 108000
      },
      {
        "GrLivArea": 1674,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 2295,
        "SalePrice": 268000
      },
      {
        "GrLivArea": 1647,
        "SalePrice": 128000
      },
      {
        "GrLivArea": 2504,
        "SalePrice": 325000
      },
      {
        "GrLivArea": 1535,
        "SalePrice": 214000
      },
      {
        "GrLivArea": 2132,
        "SalePrice": 316600
      },
      {
        "GrLivArea": 943,
        "SalePrice": 135960
      },
      {
        "GrLivArea": 1728,
        "SalePrice": 142600
      },
      {
        "GrLivArea": 864,
        "SalePrice": 120000
      },
      {
        "GrLivArea": 1692,
        "SalePrice": 224500
      },
      {
        "GrLivArea": 1430,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 1109,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 1216,
        "SalePrice": 118500
      },
      {
        "GrLivArea": 1477,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1320,
        "SalePrice": 164500
      },
      {
        "GrLivArea": 1392,
        "SalePrice": 146000
      },
      {
        "GrLivArea": 1795,
        "SalePrice": 131500
      },
      {
        "GrLivArea": 1429,
        "SalePrice": 181900
      },
      {
        "GrLivArea": 2042,
        "SalePrice": 253293
      },
      {
        "GrLivArea": 816,
        "SalePrice": 118500
      },
      {
        "GrLivArea": 2775,
        "SalePrice": 325000
      },
      {
        "GrLivArea": 1573,
        "SalePrice": 133000
      },
      {
        "GrLivArea": 2028,
        "SalePrice": 369900
      },
      {
        "GrLivArea": 838,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 860,
        "SalePrice": 137000
      },
      {
        "GrLivArea": 1473,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 935,
        "SalePrice": 79500
      },
      {
        "GrLivArea": 1582,
        "SalePrice": 185900
      },
      {
        "GrLivArea": 2296,
        "SalePrice": 451950
      },
      {
        "GrLivArea": 816,
        "SalePrice": 138000
      },
      {
        "GrLivArea": 848,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 924,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1826,
        "SalePrice": 319000
      },
      {
        "GrLivArea": 1368,
        "SalePrice": 114504
      },
      {
        "GrLivArea": 1402,
        "SalePrice": 194201
      },
      {
        "GrLivArea": 1647,
        "SalePrice": 217500
      },
      {
        "GrLivArea": 1556,
        "SalePrice": 151000
      },
      {
        "GrLivArea": 1904,
        "SalePrice": 275000
      },
      {
        "GrLivArea": 1375,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 1915,
        "SalePrice": 220000
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 151000
      },
      {
        "GrLivArea": 1494,
        "SalePrice": 221000
      },
      {
        "GrLivArea": 1986,
        "SalePrice": 205000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 152000
      },
      {
        "GrLivArea": 2008,
        "SalePrice": 225000
      },
      {
        "GrLivArea": 3194,
        "SalePrice": 359100
      },
      {
        "GrLivArea": 1029,
        "SalePrice": 118500
      },
      {
        "GrLivArea": 2153,
        "SalePrice": 313000
      },
      {
        "GrLivArea": 1032,
        "SalePrice": 148000
      },
      {
        "GrLivArea": 1872,
        "SalePrice": 261500
      },
      {
        "GrLivArea": 1120,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 630,
        "SalePrice": 75500
      },
      {
        "GrLivArea": 1054,
        "SalePrice": 137500
      },
      {
        "GrLivArea": 1509,
        "SalePrice": 183200
      },
      {
        "GrLivArea": 832,
        "SalePrice": 105500
      },
      {
        "GrLivArea": 1828,
        "SalePrice": 314813
      },
      {
        "GrLivArea": 2262,
        "SalePrice": 305000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 67000
      },
      {
        "GrLivArea": 2614,
        "SalePrice": 240000
      },
      {
        "GrLivArea": 980,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1512,
        "SalePrice": 168500
      },
      {
        "GrLivArea": 1790,
        "SalePrice": 165150
      },
      {
        "GrLivArea": 1116,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1422,
        "SalePrice": 139900
      },
      {
        "GrLivArea": 1520,
        "SalePrice": 153000
      },
      {
        "GrLivArea": 2080,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1350,
        "SalePrice": 168500
      },
      {
        "GrLivArea": 1750,
        "SalePrice": 124000
      },
      {
        "GrLivArea": 1554,
        "SalePrice": 209500
      },
      {
        "GrLivArea": 1411,
        "SalePrice": 82500
      },
      {
        "GrLivArea": 1056,
        "SalePrice": 139400
      },
      {
        "GrLivArea": 1056,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 3395,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 800,
        "SalePrice": 60000
      },
      {
        "GrLivArea": 1387,
        "SalePrice": 93000
      },
      {
        "GrLivArea": 796,
        "SalePrice": 85000
      },
      {
        "GrLivArea": 1567,
        "SalePrice": 264561
      },
      {
        "GrLivArea": 1518,
        "SalePrice": 274000
      },
      {
        "GrLivArea": 1929,
        "SalePrice": 226000
      },
      {
        "GrLivArea": 2704,
        "SalePrice": 345000
      },
      {
        "GrLivArea": 1620,
        "SalePrice": 152000
      },
      {
        "GrLivArea": 1766,
        "SalePrice": 370878
      },
      {
        "GrLivArea": 981,
        "SalePrice": 143250
      },
      {
        "GrLivArea": 1048,
        "SalePrice": 98300
      },
      {
        "GrLivArea": 1094,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1839,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 630,
        "SalePrice": 84500
      },
      {
        "GrLivArea": 1665,
        "SalePrice": 205950
      },
      {
        "GrLivArea": 1510,
        "SalePrice": 108000
      },
      {
        "GrLivArea": 1716,
        "SalePrice": 191000
      },
      {
        "GrLivArea": 1469,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 2113,
        "SalePrice": 350000
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 88000
      },
      {
        "GrLivArea": 1053,
        "SalePrice": 145500
      },
      {
        "GrLivArea": 1502,
        "SalePrice": 149000
      },
      {
        "GrLivArea": 1458,
        "SalePrice": 97500
      },
      {
        "GrLivArea": 1486,
        "SalePrice": 167000
      },
      {
        "GrLivArea": 1935,
        "SalePrice": 197900
      },
      {
        "GrLivArea": 2448,
        "SalePrice": 402000
      },
      {
        "GrLivArea": 1392,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1181,
        "SalePrice": 137500
      },
      {
        "GrLivArea": 2097,
        "SalePrice": 423000
      },
      {
        "GrLivArea": 1936,
        "SalePrice": 230500
      },
      {
        "GrLivArea": 2380,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 1679,
        "SalePrice": 193500
      },
      {
        "GrLivArea": 1437,
        "SalePrice": 168000
      },
      {
        "GrLivArea": 1180,
        "SalePrice": 137500
      },
      {
        "GrLivArea": 1476,
        "SalePrice": 173500
      },
      {
        "GrLivArea": 1369,
        "SalePrice": 103600
      },
      {
        "GrLivArea": 1208,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 1839,
        "SalePrice": 257500
      },
      {
        "GrLivArea": 1136,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1441,
        "SalePrice": 148500
      },
      {
        "GrLivArea": 1774,
        "SalePrice": 87000
      },
      {
        "GrLivArea": 792,
        "SalePrice": 109500
      },
      {
        "GrLivArea": 2046,
        "SalePrice": 372500
      },
      {
        "GrLivArea": 988,
        "SalePrice": 128500
      },
      {
        "GrLivArea": 923,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 1520,
        "SalePrice": 159434
      },
      {
        "GrLivArea": 1291,
        "SalePrice": 173000
      },
      {
        "GrLivArea": 1668,
        "SalePrice": 285000
      },
      {
        "GrLivArea": 1839,
        "SalePrice": 221000
      },
      {
        "GrLivArea": 2090,
        "SalePrice": 207500
      },
      {
        "GrLivArea": 1761,
        "SalePrice": 227875
      },
      {
        "GrLivArea": 1102,
        "SalePrice": 148800
      },
      {
        "GrLivArea": 1419,
        "SalePrice": 392000
      },
      {
        "GrLivArea": 1362,
        "SalePrice": 194700
      },
      {
        "GrLivArea": 848,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 4316,
        "SalePrice": 755000
      },
      {
        "GrLivArea": 2519,
        "SalePrice": 335000
      },
      {
        "GrLivArea": 1073,
        "SalePrice": 108480
      },
      {
        "GrLivArea": 1539,
        "SalePrice": 141500
      },
      {
        "GrLivArea": 1137,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 616,
        "SalePrice": 89000
      },
      {
        "GrLivArea": 1148,
        "SalePrice": 123500
      },
      {
        "GrLivArea": 894,
        "SalePrice": 138500
      },
      {
        "GrLivArea": 1391,
        "SalePrice": 196000
      },
      {
        "GrLivArea": 1800,
        "SalePrice": 312500
      },
      {
        "GrLivArea": 1164,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 2576,
        "SalePrice": 361919
      },
      {
        "GrLivArea": 1812,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1484,
        "SalePrice": 213000
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 55000
      },
      {
        "GrLivArea": 1824,
        "SalePrice": 302000
      },
      {
        "GrLivArea": 1324,
        "SalePrice": 254000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 179540
      },
      {
        "GrLivArea": 904,
        "SalePrice": 109900
      },
      {
        "GrLivArea": 729,
        "SalePrice": 52000
      },
      {
        "GrLivArea": 1178,
        "SalePrice": 102776
      },
      {
        "GrLivArea": 1228,
        "SalePrice": 189000
      },
      {
        "GrLivArea": 960,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 1479,
        "SalePrice": 130500
      },
      {
        "GrLivArea": 1350,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 2554,
        "SalePrice": 159500
      },
      {
        "GrLivArea": 1178,
        "SalePrice": 157000
      },
      {
        "GrLivArea": 2418,
        "SalePrice": 341000
      },
      {
        "GrLivArea": 971,
        "SalePrice": 128500
      },
      {
        "GrLivArea": 1742,
        "SalePrice": 275000
      },
      {
        "GrLivArea": 848,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 124500
      },
      {
        "GrLivArea": 1470,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1698,
        "SalePrice": 320000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 120500
      },
      {
        "GrLivArea": 1680,
        "SalePrice": 222000
      },
      {
        "GrLivArea": 1232,
        "SalePrice": 194500
      },
      {
        "GrLivArea": 1776,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1208,
        "SalePrice": 103000
      },
      {
        "GrLivArea": 1616,
        "SalePrice": 236500
      },
      {
        "GrLivArea": 1146,
        "SalePrice": 187500
      },
      {
        "GrLivArea": 2031,
        "SalePrice": 222500
      },
      {
        "GrLivArea": 1144,
        "SalePrice": 131400
      },
      {
        "GrLivArea": 948,
        "SalePrice": 108000
      },
      {
        "GrLivArea": 1768,
        "SalePrice": 163000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 93500
      },
      {
        "GrLivArea": 1801,
        "SalePrice": 239900
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 179000
      },
      {
        "GrLivArea": 1728,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1432,
        "SalePrice": 132000
      },
      {
        "GrLivArea": 912,
        "SalePrice": 142000
      },
      {
        "GrLivArea": 1349,
        "SalePrice": 179000
      },
      {
        "GrLivArea": 1464,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 1337,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 2715,
        "SalePrice": 299800
      },
      {
        "GrLivArea": 2256,
        "SalePrice": 236000
      },
      {
        "GrLivArea": 2640,
        "SalePrice": 265979
      },
      {
        "GrLivArea": 1720,
        "SalePrice": 260400
      },
      {
        "GrLivArea": 1529,
        "SalePrice": 98000
      },
      {
        "GrLivArea": 1140,
        "SalePrice": 96500
      },
      {
        "GrLivArea": 1320,
        "SalePrice": 162000
      },
      {
        "GrLivArea": 1494,
        "SalePrice": 217000
      },
      {
        "GrLivArea": 2098,
        "SalePrice": 275500
      },
      {
        "GrLivArea": 1026,
        "SalePrice": 156000
      },
      {
        "GrLivArea": 1471,
        "SalePrice": 172500
      },
      {
        "GrLivArea": 1768,
        "SalePrice": 212000
      },
      {
        "GrLivArea": 1386,
        "SalePrice": 158900
      },
      {
        "GrLivArea": 1501,
        "SalePrice": 179400
      },
      {
        "GrLivArea": 2531,
        "SalePrice": 290000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 127500
      },
      {
        "GrLivArea": 1301,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1547,
        "SalePrice": 215200
      },
      {
        "GrLivArea": 2365,
        "SalePrice": 337000
      },
      {
        "GrLivArea": 1494,
        "SalePrice": 270000
      },
      {
        "GrLivArea": 1506,
        "SalePrice": 264132
      },
      {
        "GrLivArea": 1714,
        "SalePrice": 196500
      },
      {
        "GrLivArea": 1750,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1836,
        "SalePrice": 216837
      },
      {
        "GrLivArea": 3279,
        "SalePrice": 538000
      },
      {
        "GrLivArea": 858,
        "SalePrice": 134900
      },
      {
        "GrLivArea": 1220,
        "SalePrice": 102000
      },
      {
        "GrLivArea": 1117,
        "SalePrice": 107000
      },
      {
        "GrLivArea": 912,
        "SalePrice": 114500
      },
      {
        "GrLivArea": 1973,
        "SalePrice": 395000
      },
      {
        "GrLivArea": 1204,
        "SalePrice": 162000
      },
      {
        "GrLivArea": 1614,
        "SalePrice": 221500
      },
      {
        "GrLivArea": 894,
        "SalePrice": 142500
      },
      {
        "GrLivArea": 2020,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 1004,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1253,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 1603,
        "SalePrice": 175900
      },
      {
        "GrLivArea": 1430,
        "SalePrice": 187100
      },
      {
        "GrLivArea": 1110,
        "SalePrice": 165500
      },
      {
        "GrLivArea": 1484,
        "SalePrice": 128000
      },
      {
        "GrLivArea": 1342,
        "SalePrice": 161500
      },
      {
        "GrLivArea": 1652,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 2084,
        "SalePrice": 233000
      },
      {
        "GrLivArea": 901,
        "SalePrice": 107900
      },
      {
        "GrLivArea": 2087,
        "SalePrice": 187500
      },
      {
        "GrLivArea": 1145,
        "SalePrice": 160200
      },
      {
        "GrLivArea": 1062,
        "SalePrice": 146800
      },
      {
        "GrLivArea": 2013,
        "SalePrice": 269790
      },
      {
        "GrLivArea": 1496,
        "SalePrice": 225000
      },
      {
        "GrLivArea": 1895,
        "SalePrice": 194500
      },
      {
        "GrLivArea": 1564,
        "SalePrice": 171000
      },
      {
        "GrLivArea": 1285,
        "SalePrice": 143500
      },
      {
        "GrLivArea": 773,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 3140,
        "SalePrice": 485000
      },
      {
        "GrLivArea": 1768,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 1688,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 1196,
        "SalePrice": 109900
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 189000
      },
      {
        "GrLivArea": 2822,
        "SalePrice": 582933
      },
      {
        "GrLivArea": 1128,
        "SalePrice": 118000
      },
      {
        "GrLivArea": 1428,
        "SalePrice": 227680
      },
      {
        "GrLivArea": 980,
        "SalePrice": 135500
      },
      {
        "GrLivArea": 1576,
        "SalePrice": 223500
      },
      {
        "GrLivArea": 1086,
        "SalePrice": 159950
      },
      {
        "GrLivArea": 2138,
        "SalePrice": 106000
      },
      {
        "GrLivArea": 1309,
        "SalePrice": 181000
      },
      {
        "GrLivArea": 848,
        "SalePrice": 144500
      },
      {
        "GrLivArea": 1044,
        "SalePrice": 55993
      },
      {
        "GrLivArea": 1442,
        "SalePrice": 157900
      },
      {
        "GrLivArea": 1250,
        "SalePrice": 116000
      },
      {
        "GrLivArea": 1661,
        "SalePrice": 224900
      },
      {
        "GrLivArea": 1008,
        "SalePrice": 137000
      },
      {
        "GrLivArea": 1689,
        "SalePrice": 271000
      },
      {
        "GrLivArea": 1052,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1358,
        "SalePrice": 224000
      },
      {
        "GrLivArea": 1640,
        "SalePrice": 183000
      },
      {
        "GrLivArea": 936,
        "SalePrice": 93000
      },
      {
        "GrLivArea": 1733,
        "SalePrice": 225000
      },
      {
        "GrLivArea": 1489,
        "SalePrice": 139500
      },
      {
        "GrLivArea": 1489,
        "SalePrice": 232600
      },
      {
        "GrLivArea": 2084,
        "SalePrice": 385000
      },
      {
        "GrLivArea": 784,
        "SalePrice": 109500
      },
      {
        "GrLivArea": 1434,
        "SalePrice": 189000
      },
      {
        "GrLivArea": 2126,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1223,
        "SalePrice": 147400
      },
      {
        "GrLivArea": 1392,
        "SalePrice": 166000
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 151000
      },
      {
        "GrLivArea": 1829,
        "SalePrice": 237000
      },
      {
        "GrLivArea": 1516,
        "SalePrice": 167000
      },
      {
        "GrLivArea": 1144,
        "SalePrice": 139950
      },
      {
        "GrLivArea": 1067,
        "SalePrice": 128000
      },
      {
        "GrLivArea": 1559,
        "SalePrice": 153500
      },
      {
        "GrLivArea": 987,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1099,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 130500
      },
      {
        "GrLivArea": 1482,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1539,
        "SalePrice": 157500
      },
      {
        "GrLivArea": 1165,
        "SalePrice": 174900
      },
      {
        "GrLivArea": 1800,
        "SalePrice": 141000
      },
      {
        "GrLivArea": 1416,
        "SalePrice": 153900
      },
      {
        "GrLivArea": 1701,
        "SalePrice": 171000
      },
      {
        "GrLivArea": 1775,
        "SalePrice": 213000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 133500
      },
      {
        "GrLivArea": 2358,
        "SalePrice": 240000
      },
      {
        "GrLivArea": 1855,
        "SalePrice": 187000
      },
      {
        "GrLivArea": 848,
        "SalePrice": 131500
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 1646,
        "SalePrice": 164000
      },
      {
        "GrLivArea": 1445,
        "SalePrice": 158000
      },
      {
        "GrLivArea": 1779,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 1026,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 1481,
        "SalePrice": 174000
      },
      {
        "GrLivArea": 1370,
        "SalePrice": 152000
      },
      {
        "GrLivArea": 2654,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 1426,
        "SalePrice": 189950
      },
      {
        "GrLivArea": 1039,
        "SalePrice": 131500
      },
      {
        "GrLivArea": 1097,
        "SalePrice": 152000
      },
      {
        "GrLivArea": 1148,
        "SalePrice": 132500
      },
      {
        "GrLivArea": 1372,
        "SalePrice": 250580
      },
      {
        "GrLivArea": 1002,
        "SalePrice": 148500
      },
      {
        "GrLivArea": 1646,
        "SalePrice": 248900
      },
      {
        "GrLivArea": 1120,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 2320,
        "SalePrice": 169000
      },
      {
        "GrLivArea": 1949,
        "SalePrice": 236000
      },
      {
        "GrLivArea": 894,
        "SalePrice": 109500
      },
      {
        "GrLivArea": 1682,
        "SalePrice": 200500
      },
      {
        "GrLivArea": 910,
        "SalePrice": 116000
      },
      {
        "GrLivArea": 1268,
        "SalePrice": 133000
      },
      {
        "GrLivArea": 1131,
        "SalePrice": 66500
      },
      {
        "GrLivArea": 2610,
        "SalePrice": 303477
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 132250
      },
      {
        "GrLivArea": 2224,
        "SalePrice": 350000
      },
      {
        "GrLivArea": 1155,
        "SalePrice": 148000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 136500
      },
      {
        "GrLivArea": 1090,
        "SalePrice": 157000
      },
      {
        "GrLivArea": 1717,
        "SalePrice": 187500
      },
      {
        "GrLivArea": 1593,
        "SalePrice": 178000
      },
      {
        "GrLivArea": 2230,
        "SalePrice": 118500
      },
      {
        "GrLivArea": 892,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1709,
        "SalePrice": 328900
      },
      {
        "GrLivArea": 1712,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1393,
        "SalePrice": 135500
      },
      {
        "GrLivArea": 2217,
        "SalePrice": 268000
      },
      {
        "GrLivArea": 1505,
        "SalePrice": 149500
      },
      {
        "GrLivArea": 924,
        "SalePrice": 122900
      },
      {
        "GrLivArea": 1683,
        "SalePrice": 172500
      },
      {
        "GrLivArea": 1068,
        "SalePrice": 154500
      },
      {
        "GrLivArea": 1383,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 1535,
        "SalePrice": 118858
      },
      {
        "GrLivArea": 1796,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 951,
        "SalePrice": 106500
      },
      {
        "GrLivArea": 2240,
        "SalePrice": 142953
      },
      {
        "GrLivArea": 2364,
        "SalePrice": 611657
      },
      {
        "GrLivArea": 1236,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 858,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1306,
        "SalePrice": 153000
      },
      {
        "GrLivArea": 1509,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 1670,
        "SalePrice": 240000
      },
      {
        "GrLivArea": 902,
        "SalePrice": 125500
      },
      {
        "GrLivArea": 1063,
        "SalePrice": 128000
      },
      {
        "GrLivArea": 1636,
        "SalePrice": 255000
      },
      {
        "GrLivArea": 2057,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 902,
        "SalePrice": 131000
      },
      {
        "GrLivArea": 1484,
        "SalePrice": 174000
      },
      {
        "GrLivArea": 2274,
        "SalePrice": 154300
      },
      {
        "GrLivArea": 1268,
        "SalePrice": 143500
      },
      {
        "GrLivArea": 1015,
        "SalePrice": 88000
      },
      {
        "GrLivArea": 2002,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1224,
        "SalePrice": 173733
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 75000
      },
      {
        "GrLivArea": 480,
        "SalePrice": 35311
      },
      {
        "GrLivArea": 1229,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 2127,
        "SalePrice": 238000
      },
      {
        "GrLivArea": 1414,
        "SalePrice": 176500
      },
      {
        "GrLivArea": 1721,
        "SalePrice": 201000
      },
      {
        "GrLivArea": 2200,
        "SalePrice": 145900
      },
      {
        "GrLivArea": 1316,
        "SalePrice": 169990
      },
      {
        "GrLivArea": 1617,
        "SalePrice": 193000
      },
      {
        "GrLivArea": 1686,
        "SalePrice": 207500
      },
      {
        "GrLivArea": 1126,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 2374,
        "SalePrice": 285000
      },
      {
        "GrLivArea": 1978,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 1788,
        "SalePrice": 236500
      },
      {
        "GrLivArea": 2236,
        "SalePrice": 222000
      },
      {
        "GrLivArea": 1466,
        "SalePrice": 201000
      },
      {
        "GrLivArea": 925,
        "SalePrice": 117500
      },
      {
        "GrLivArea": 1905,
        "SalePrice": 320000
      },
      {
        "GrLivArea": 1500,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 2069,
        "SalePrice": 242000
      },
      {
        "GrLivArea": 747,
        "SalePrice": 79900
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 184900
      },
      {
        "GrLivArea": 1971,
        "SalePrice": 253000
      },
      {
        "GrLivArea": 1962,
        "SalePrice": 239799
      },
      {
        "GrLivArea": 2403,
        "SalePrice": 244400
      },
      {
        "GrLivArea": 1728,
        "SalePrice": 150900
      },
      {
        "GrLivArea": 2060,
        "SalePrice": 214000
      },
      {
        "GrLivArea": 1440,
        "SalePrice": 150000
      },
      {
        "GrLivArea": 1632,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 1344,
        "SalePrice": 137500
      },
      {
        "GrLivArea": 1869,
        "SalePrice": 124900
      },
      {
        "GrLivArea": 1144,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 1629,
        "SalePrice": 270000
      },
      {
        "GrLivArea": 1776,
        "SalePrice": 192500
      },
      {
        "GrLivArea": 1381,
        "SalePrice": 197500
      },
      {
        "GrLivArea": 864,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 965,
        "SalePrice": 119900
      },
      {
        "GrLivArea": 768,
        "SalePrice": 133900
      },
      {
        "GrLivArea": 1968,
        "SalePrice": 172000
      },
      {
        "GrLivArea": 980,
        "SalePrice": 127500
      },
      {
        "GrLivArea": 1958,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1229,
        "SalePrice": 124000
      },
      {
        "GrLivArea": 1057,
        "SalePrice": 132000
      },
      {
        "GrLivArea": 1337,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1416,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 858,
        "SalePrice": 116500
      },
      {
        "GrLivArea": 2872,
        "SalePrice": 272000
      },
      {
        "GrLivArea": 1548,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1800,
        "SalePrice": 239000
      },
      {
        "GrLivArea": 1894,
        "SalePrice": 214900
      },
      {
        "GrLivArea": 1484,
        "SalePrice": 178900
      },
      {
        "GrLivArea": 1308,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1098,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 968,
        "SalePrice": 37900
      },
      {
        "GrLivArea": 1095,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1192,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1626,
        "SalePrice": 173000
      },
      {
        "GrLivArea": 918,
        "SalePrice": 99500
      },
      {
        "GrLivArea": 1428,
        "SalePrice": 182000
      },
      {
        "GrLivArea": 2019,
        "SalePrice": 167500
      },
      {
        "GrLivArea": 1382,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 869,
        "SalePrice": 85500
      },
      {
        "GrLivArea": 1241,
        "SalePrice": 199900
      },
      {
        "GrLivArea": 894,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1121,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 999,
        "SalePrice": 178400
      },
      {
        "GrLivArea": 2612,
        "SalePrice": 336000
      },
      {
        "GrLivArea": 1266,
        "SalePrice": 159895
      },
      {
        "GrLivArea": 2290,
        "SalePrice": 255900
      },
      {
        "GrLivArea": 1734,
        "SalePrice": 126000
      },
      {
        "GrLivArea": 1164,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1635,
        "SalePrice": 117000
      },
      {
        "GrLivArea": 1940,
        "SalePrice": 395192
      },
      {
        "GrLivArea": 2030,
        "SalePrice": 195000
      },
      {
        "GrLivArea": 1576,
        "SalePrice": 197000
      },
      {
        "GrLivArea": 2392,
        "SalePrice": 348000
      },
      {
        "GrLivArea": 1742,
        "SalePrice": 168000
      },
      {
        "GrLivArea": 1851,
        "SalePrice": 187000
      },
      {
        "GrLivArea": 1500,
        "SalePrice": 173900
      },
      {
        "GrLivArea": 1718,
        "SalePrice": 337500
      },
      {
        "GrLivArea": 1230,
        "SalePrice": 121600
      },
      {
        "GrLivArea": 1050,
        "SalePrice": 136500
      },
      {
        "GrLivArea": 1442,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1077,
        "SalePrice": 91000
      },
      {
        "GrLivArea": 1208,
        "SalePrice": 206000
      },
      {
        "GrLivArea": 944,
        "SalePrice": 82000
      },
      {
        "GrLivArea": 691,
        "SalePrice": 86000
      },
      {
        "GrLivArea": 1574,
        "SalePrice": 232000
      },
      {
        "GrLivArea": 1680,
        "SalePrice": 136905
      },
      {
        "GrLivArea": 1504,
        "SalePrice": 181000
      },
      {
        "GrLivArea": 985,
        "SalePrice": 149900
      },
      {
        "GrLivArea": 1657,
        "SalePrice": 163500
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 88000
      },
      {
        "GrLivArea": 1710,
        "SalePrice": 240000
      },
      {
        "GrLivArea": 1522,
        "SalePrice": 102000
      },
      {
        "GrLivArea": 1271,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1664,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1502,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 1022,
        "SalePrice": 85000
      },
      {
        "GrLivArea": 1082,
        "SalePrice": 119200
      },
      {
        "GrLivArea": 1665,
        "SalePrice": 227000
      },
      {
        "GrLivArea": 1504,
        "SalePrice": 203000
      },
      {
        "GrLivArea": 1360,
        "SalePrice": 187500
      },
      {
        "GrLivArea": 1472,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1506,
        "SalePrice": 213490
      },
      {
        "GrLivArea": 1132,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 1220,
        "SalePrice": 194000
      },
      {
        "GrLivArea": 1248,
        "SalePrice": 87000
      },
      {
        "GrLivArea": 1504,
        "SalePrice": 191000
      },
      {
        "GrLivArea": 2898,
        "SalePrice": 287000
      },
      {
        "GrLivArea": 882,
        "SalePrice": 112500
      },
      {
        "GrLivArea": 1264,
        "SalePrice": 167500
      },
      {
        "GrLivArea": 1646,
        "SalePrice": 293077
      },
      {
        "GrLivArea": 1376,
        "SalePrice": 105000
      },
      {
        "GrLivArea": 1218,
        "SalePrice": 118000
      },
      {
        "GrLivArea": 1928,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 3082,
        "SalePrice": 197000
      },
      {
        "GrLivArea": 2520,
        "SalePrice": 310000
      },
      {
        "GrLivArea": 1654,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 954,
        "SalePrice": 119750
      },
      {
        "GrLivArea": 845,
        "SalePrice": 84000
      },
      {
        "GrLivArea": 1620,
        "SalePrice": 315500
      },
      {
        "GrLivArea": 2263,
        "SalePrice": 287000
      },
      {
        "GrLivArea": 1344,
        "SalePrice": 97000
      },
      {
        "GrLivArea": 630,
        "SalePrice": 80000
      },
      {
        "GrLivArea": 1803,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1632,
        "SalePrice": 173000
      },
      {
        "GrLivArea": 1306,
        "SalePrice": 196000
      },
      {
        "GrLivArea": 2329,
        "SalePrice": 262280
      },
      {
        "GrLivArea": 2524,
        "SalePrice": 278000
      },
      {
        "GrLivArea": 1733,
        "SalePrice": 139600
      },
      {
        "GrLivArea": 2868,
        "SalePrice": 556581
      },
      {
        "GrLivArea": 990,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1771,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 930,
        "SalePrice": 84900
      },
      {
        "GrLivArea": 1302,
        "SalePrice": 176485
      },
      {
        "GrLivArea": 1316,
        "SalePrice": 200141
      },
      {
        "GrLivArea": 1977,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 1526,
        "SalePrice": 144500
      },
      {
        "GrLivArea": 1989,
        "SalePrice": 255000
      },
      {
        "GrLivArea": 1523,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 1364,
        "SalePrice": 185850
      },
      {
        "GrLivArea": 1850,
        "SalePrice": 248000
      },
      {
        "GrLivArea": 2184,
        "SalePrice": 335000
      },
      {
        "GrLivArea": 1991,
        "SalePrice": 220000
      },
      {
        "GrLivArea": 1338,
        "SalePrice": 213500
      },
      {
        "GrLivArea": 894,
        "SalePrice": 81000
      },
      {
        "GrLivArea": 2337,
        "SalePrice": 90000
      },
      {
        "GrLivArea": 1103,
        "SalePrice": 110500
      },
      {
        "GrLivArea": 1154,
        "SalePrice": 154000
      },
      {
        "GrLivArea": 2260,
        "SalePrice": 328000
      },
      {
        "GrLivArea": 1571,
        "SalePrice": 178000
      },
      {
        "GrLivArea": 1611,
        "SalePrice": 167900
      },
      {
        "GrLivArea": 2521,
        "SalePrice": 151400
      },
      {
        "GrLivArea": 893,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1048,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1556,
        "SalePrice": 154000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 91500
      },
      {
        "GrLivArea": 1426,
        "SalePrice": 159500
      },
      {
        "GrLivArea": 1240,
        "SalePrice": 194000
      },
      {
        "GrLivArea": 1740,
        "SalePrice": 219500
      },
      {
        "GrLivArea": 1466,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 1096,
        "SalePrice": 138800
      },
      {
        "GrLivArea": 848,
        "SalePrice": 155900
      },
      {
        "GrLivArea": 990,
        "SalePrice": 126000
      },
      {
        "GrLivArea": 1258,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 133000
      },
      {
        "GrLivArea": 1459,
        "SalePrice": 192000
      },
      {
        "GrLivArea": 1251,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1498,
        "SalePrice": 187500
      },
      {
        "GrLivArea": 996,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 1092,
        "SalePrice": 83500
      },
      {
        "GrLivArea": 1953,
        "SalePrice": 252000
      },
      {
        "GrLivArea": 1709,
        "SalePrice": 137500
      },
      {
        "GrLivArea": 1247,
        "SalePrice": 197000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 92900
      },
      {
        "GrLivArea": 1252,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1694,
        "SalePrice": 136500
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 146000
      },
      {
        "GrLivArea": 936,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 1314,
        "SalePrice": 176432
      },
      {
        "GrLivArea": 1355,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 1088,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 1324,
        "SalePrice": 128000
      },
      {
        "GrLivArea": 1601,
        "SalePrice": 157000
      },
      {
        "GrLivArea": 438,
        "SalePrice": 60000
      },
      {
        "GrLivArea": 950,
        "SalePrice": 119500
      },
      {
        "GrLivArea": 1134,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 1194,
        "SalePrice": 159500
      },
      {
        "GrLivArea": 1302,
        "SalePrice": 106000
      },
      {
        "GrLivArea": 2622,
        "SalePrice": 325000
      },
      {
        "GrLivArea": 1442,
        "SalePrice": 179900
      },
      {
        "GrLivArea": 2021,
        "SalePrice": 274725
      },
      {
        "GrLivArea": 1690,
        "SalePrice": 181000
      },
      {
        "GrLivArea": 1836,
        "SalePrice": 280000
      },
      {
        "GrLivArea": 1658,
        "SalePrice": 188000
      },
      {
        "GrLivArea": 1964,
        "SalePrice": 205000
      },
      {
        "GrLivArea": 816,
        "SalePrice": 129900
      },
      {
        "GrLivArea": 1008,
        "SalePrice": 134500
      },
      {
        "GrLivArea": 833,
        "SalePrice": 117000
      },
      {
        "GrLivArea": 1734,
        "SalePrice": 318000
      },
      {
        "GrLivArea": 1419,
        "SalePrice": 184100
      },
      {
        "GrLivArea": 894,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 1601,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 133700
      },
      {
        "GrLivArea": 1012,
        "SalePrice": 118400
      },
      {
        "GrLivArea": 1552,
        "SalePrice": 212900
      },
      {
        "GrLivArea": 960,
        "SalePrice": 112000
      },
      {
        "GrLivArea": 698,
        "SalePrice": 118000
      },
      {
        "GrLivArea": 1482,
        "SalePrice": 163900
      },
      {
        "GrLivArea": 1005,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1555,
        "SalePrice": 174000
      },
      {
        "GrLivArea": 1530,
        "SalePrice": 259000
      },
      {
        "GrLivArea": 1959,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 936,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1981,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 974,
        "SalePrice": 93500
      },
      {
        "GrLivArea": 2210,
        "SalePrice": 117500
      },
      {
        "GrLivArea": 2020,
        "SalePrice": 239500
      },
      {
        "GrLivArea": 1600,
        "SalePrice": 169000
      },
      {
        "GrLivArea": 986,
        "SalePrice": 102000
      },
      {
        "GrLivArea": 1252,
        "SalePrice": 119000
      },
      {
        "GrLivArea": 1020,
        "SalePrice": 94000
      },
      {
        "GrLivArea": 1567,
        "SalePrice": 196000
      },
      {
        "GrLivArea": 1167,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 952,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 1868,
        "SalePrice": 197500
      },
      {
        "GrLivArea": 2828,
        "SalePrice": 424870
      },
      {
        "GrLivArea": 1006,
        "SalePrice": 80000
      },
      {
        "GrLivArea": 924,
        "SalePrice": 80000
      },
      {
        "GrLivArea": 1576,
        "SalePrice": 149000
      },
      {
        "GrLivArea": 1298,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 1564,
        "SalePrice": 174500
      },
      {
        "GrLivArea": 1111,
        "SalePrice": 116900
      },
      {
        "GrLivArea": 1482,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 932,
        "SalePrice": 124000
      },
      {
        "GrLivArea": 1466,
        "SalePrice": 149900
      },
      {
        "GrLivArea": 1811,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 816,
        "SalePrice": 120500
      },
      {
        "GrLivArea": 1820,
        "SalePrice": 201800
      },
      {
        "GrLivArea": 1437,
        "SalePrice": 218000
      },
      {
        "GrLivArea": 1265,
        "SalePrice": 179900
      },
      {
        "GrLivArea": 1314,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 1580,
        "SalePrice": 235128
      },
      {
        "GrLivArea": 1876,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 146000
      },
      {
        "GrLivArea": 1640,
        "SalePrice": 224000
      },
      {
        "GrLivArea": 894,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 1258,
        "SalePrice": 108959
      },
      {
        "GrLivArea": 1432,
        "SalePrice": 194000
      },
      {
        "GrLivArea": 1502,
        "SalePrice": 233170
      },
      {
        "GrLivArea": 1694,
        "SalePrice": 245350
      },
      {
        "GrLivArea": 1671,
        "SalePrice": 173000
      },
      {
        "GrLivArea": 2108,
        "SalePrice": 235000
      },
      {
        "GrLivArea": 3627,
        "SalePrice": 625000
      },
      {
        "GrLivArea": 1118,
        "SalePrice": 171000
      },
      {
        "GrLivArea": 1261,
        "SalePrice": 163000
      },
      {
        "GrLivArea": 1250,
        "SalePrice": 171900
      },
      {
        "GrLivArea": 3086,
        "SalePrice": 200500
      },
      {
        "GrLivArea": 2345,
        "SalePrice": 239000
      },
      {
        "GrLivArea": 2872,
        "SalePrice": 285000
      },
      {
        "GrLivArea": 923,
        "SalePrice": 119500
      },
      {
        "GrLivArea": 1224,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1343,
        "SalePrice": 154900
      },
      {
        "GrLivArea": 1124,
        "SalePrice": 93000
      },
      {
        "GrLivArea": 2514,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 1652,
        "SalePrice": 392500
      },
      {
        "GrLivArea": 4476,
        "SalePrice": 745000
      },
      {
        "GrLivArea": 1130,
        "SalePrice": 120000
      },
      {
        "GrLivArea": 1572,
        "SalePrice": 186700
      },
      {
        "GrLivArea": 1221,
        "SalePrice": 104900
      },
      {
        "GrLivArea": 1699,
        "SalePrice": 95000
      },
      {
        "GrLivArea": 1624,
        "SalePrice": 262000
      },
      {
        "GrLivArea": 1660,
        "SalePrice": 195000
      },
      {
        "GrLivArea": 1804,
        "SalePrice": 189000
      },
      {
        "GrLivArea": 1622,
        "SalePrice": 168000
      },
      {
        "GrLivArea": 1441,
        "SalePrice": 174000
      },
      {
        "GrLivArea": 1472,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1224,
        "SalePrice": 165000
      },
      {
        "GrLivArea": 1352,
        "SalePrice": 158000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 176000
      },
      {
        "GrLivArea": 1863,
        "SalePrice": 219210
      },
      {
        "GrLivArea": 1690,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 1212,
        "SalePrice": 178000
      },
      {
        "GrLivArea": 1382,
        "SalePrice": 148000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 116050
      },
      {
        "GrLivArea": 1779,
        "SalePrice": 197900
      },
      {
        "GrLivArea": 1348,
        "SalePrice": 117000
      },
      {
        "GrLivArea": 1630,
        "SalePrice": 213000
      },
      {
        "GrLivArea": 1074,
        "SalePrice": 153500
      },
      {
        "GrLivArea": 2196,
        "SalePrice": 271900
      },
      {
        "GrLivArea": 1056,
        "SalePrice": 107000
      },
      {
        "GrLivArea": 1700,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 1283,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1660,
        "SalePrice": 290000
      },
      {
        "GrLivArea": 1845,
        "SalePrice": 189000
      },
      {
        "GrLivArea": 1752,
        "SalePrice": 164000
      },
      {
        "GrLivArea": 672,
        "SalePrice": 113000
      },
      {
        "GrLivArea": 960,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 999,
        "SalePrice": 134500
      },
      {
        "GrLivArea": 894,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1902,
        "SalePrice": 112000
      },
      {
        "GrLivArea": 1314,
        "SalePrice": 229456
      },
      {
        "GrLivArea": 912,
        "SalePrice": 80500
      },
      {
        "GrLivArea": 1218,
        "SalePrice": 91500
      },
      {
        "GrLivArea": 912,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1211,
        "SalePrice": 134000
      },
      {
        "GrLivArea": 1846,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 2136,
        "SalePrice": 137900
      },
      {
        "GrLivArea": 1490,
        "SalePrice": 184000
      },
      {
        "GrLivArea": 1138,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1933,
        "SalePrice": 214000
      },
      {
        "GrLivArea": 912,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 1702,
        "SalePrice": 367294
      },
      {
        "GrLivArea": 1507,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 2620,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1190,
        "SalePrice": 132500
      },
      {
        "GrLivArea": 1224,
        "SalePrice": 101800
      },
      {
        "GrLivArea": 1188,
        "SalePrice": 142000
      },
      {
        "GrLivArea": 1964,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 1784,
        "SalePrice": 138887
      },
      {
        "GrLivArea": 1626,
        "SalePrice": 175500
      },
      {
        "GrLivArea": 1948,
        "SalePrice": 195000
      },
      {
        "GrLivArea": 1141,
        "SalePrice": 142500
      },
      {
        "GrLivArea": 1484,
        "SalePrice": 265900
      },
      {
        "GrLivArea": 1768,
        "SalePrice": 224900
      },
      {
        "GrLivArea": 1689,
        "SalePrice": 248328
      },
      {
        "GrLivArea": 1173,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 2076,
        "SalePrice": 465000
      },
      {
        "GrLivArea": 1517,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 1868,
        "SalePrice": 178000
      },
      {
        "GrLivArea": 1553,
        "SalePrice": 186500
      },
      {
        "GrLivArea": 1034,
        "SalePrice": 169900
      },
      {
        "GrLivArea": 2058,
        "SalePrice": 129500
      },
      {
        "GrLivArea": 988,
        "SalePrice": 119000
      },
      {
        "GrLivArea": 2110,
        "SalePrice": 244000
      },
      {
        "GrLivArea": 1405,
        "SalePrice": 171750
      },
      {
        "GrLivArea": 874,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 2167,
        "SalePrice": 294000
      },
      {
        "GrLivArea": 1656,
        "SalePrice": 165400
      },
      {
        "GrLivArea": 1367,
        "SalePrice": 127500
      },
      {
        "GrLivArea": 1987,
        "SalePrice": 301500
      },
      {
        "GrLivArea": 864,
        "SalePrice": 99900
      },
      {
        "GrLivArea": 1166,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1054,
        "SalePrice": 151000
      },
      {
        "GrLivArea": 1675,
        "SalePrice": 181000
      },
      {
        "GrLivArea": 1050,
        "SalePrice": 128900
      },
      {
        "GrLivArea": 1788,
        "SalePrice": 161500
      },
      {
        "GrLivArea": 1824,
        "SalePrice": 180500
      },
      {
        "GrLivArea": 1337,
        "SalePrice": 181000
      },
      {
        "GrLivArea": 1452,
        "SalePrice": 183900
      },
      {
        "GrLivArea": 1889,
        "SalePrice": 122000
      },
      {
        "GrLivArea": 2018,
        "SalePrice": 378500
      },
      {
        "GrLivArea": 3447,
        "SalePrice": 381000
      },
      {
        "GrLivArea": 1524,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 1524,
        "SalePrice": 260000
      },
      {
        "GrLivArea": 1489,
        "SalePrice": 185750
      },
      {
        "GrLivArea": 935,
        "SalePrice": 137000
      },
      {
        "GrLivArea": 1357,
        "SalePrice": 177000
      },
      {
        "GrLivArea": 1250,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 1920,
        "SalePrice": 137000
      },
      {
        "GrLivArea": 1395,
        "SalePrice": 162000
      },
      {
        "GrLivArea": 1724,
        "SalePrice": 197900
      },
      {
        "GrLivArea": 2031,
        "SalePrice": 237000
      },
      {
        "GrLivArea": 1128,
        "SalePrice": 68400
      },
      {
        "GrLivArea": 1573,
        "SalePrice": 227000
      },
      {
        "GrLivArea": 1339,
        "SalePrice": 180000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 150500
      },
      {
        "GrLivArea": 1824,
        "SalePrice": 139000
      },
      {
        "GrLivArea": 2447,
        "SalePrice": 169000
      },
      {
        "GrLivArea": 1412,
        "SalePrice": 132500
      },
      {
        "GrLivArea": 1328,
        "SalePrice": 143000
      },
      {
        "GrLivArea": 1582,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 1659,
        "SalePrice": 278000
      },
      {
        "GrLivArea": 1970,
        "SalePrice": 281000
      },
      {
        "GrLivArea": 1152,
        "SalePrice": 180500
      },
      {
        "GrLivArea": 1302,
        "SalePrice": 119500
      },
      {
        "GrLivArea": 2372,
        "SalePrice": 107500
      },
      {
        "GrLivArea": 1664,
        "SalePrice": 162900
      },
      {
        "GrLivArea": 864,
        "SalePrice": 115000
      },
      {
        "GrLivArea": 1052,
        "SalePrice": 138500
      },
      {
        "GrLivArea": 1128,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 1072,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 5642,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1246,
        "SalePrice": 154000
      },
      {
        "GrLivArea": 1983,
        "SalePrice": 225000
      },
      {
        "GrLivArea": 1494,
        "SalePrice": 177500
      },
      {
        "GrLivArea": 2526,
        "SalePrice": 290000
      },
      {
        "GrLivArea": 1616,
        "SalePrice": 232000
      },
      {
        "GrLivArea": 1708,
        "SalePrice": 130000
      },
      {
        "GrLivArea": 1652,
        "SalePrice": 325000
      },
      {
        "GrLivArea": 1368,
        "SalePrice": 202500
      },
      {
        "GrLivArea": 990,
        "SalePrice": 138000
      },
      {
        "GrLivArea": 1122,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 1294,
        "SalePrice": 179200
      },
      {
        "GrLivArea": 1902,
        "SalePrice": 335000
      },
      {
        "GrLivArea": 1274,
        "SalePrice": 203000
      },
      {
        "GrLivArea": 2810,
        "SalePrice": 302000
      },
      {
        "GrLivArea": 2599,
        "SalePrice": 333168
      },
      {
        "GrLivArea": 948,
        "SalePrice": 119000
      },
      {
        "GrLivArea": 2112,
        "SalePrice": 206900
      },
      {
        "GrLivArea": 1630,
        "SalePrice": 295493
      },
      {
        "GrLivArea": 1352,
        "SalePrice": 208900
      },
      {
        "GrLivArea": 1787,
        "SalePrice": 275000
      },
      {
        "GrLivArea": 948,
        "SalePrice": 111000
      },
      {
        "GrLivArea": 1478,
        "SalePrice": 156500
      },
      {
        "GrLivArea": 720,
        "SalePrice": 72500
      },
      {
        "GrLivArea": 1923,
        "SalePrice": 190000
      },
      {
        "GrLivArea": 708,
        "SalePrice": 82500
      },
      {
        "GrLivArea": 1795,
        "SalePrice": 147000
      },
      {
        "GrLivArea": 796,
        "SalePrice": 55000
      },
      {
        "GrLivArea": 774,
        "SalePrice": 79000
      },
      {
        "GrLivArea": 816,
        "SalePrice": 130500
      },
      {
        "GrLivArea": 2792,
        "SalePrice": 256000
      },
      {
        "GrLivArea": 1632,
        "SalePrice": 176500
      },
      {
        "GrLivArea": 1588,
        "SalePrice": 227000
      },
      {
        "GrLivArea": 954,
        "SalePrice": 132500
      },
      {
        "GrLivArea": 816,
        "SalePrice": 100000
      },
      {
        "GrLivArea": 1360,
        "SalePrice": 125500
      },
      {
        "GrLivArea": 1365,
        "SalePrice": 125000
      },
      {
        "GrLivArea": 1334,
        "SalePrice": 167900
      },
      {
        "GrLivArea": 1656,
        "SalePrice": 135000
      },
      {
        "GrLivArea": 693,
        "SalePrice": 52500
      },
      {
        "GrLivArea": 1861,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 128500
      },
      {
        "GrLivArea": 872,
        "SalePrice": 123000
      },
      {
        "GrLivArea": 1114,
        "SalePrice": 155000
      },
      {
        "GrLivArea": 2169,
        "SalePrice": 228500
      },
      {
        "GrLivArea": 1913,
        "SalePrice": 177000
      },
      {
        "GrLivArea": 1456,
        "SalePrice": 155835
      },
      {
        "GrLivArea": 960,
        "SalePrice": 108500
      },
      {
        "GrLivArea": 2156,
        "SalePrice": 262500
      },
      {
        "GrLivArea": 1776,
        "SalePrice": 283463
      },
      {
        "GrLivArea": 1494,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 2358,
        "SalePrice": 122000
      },
      {
        "GrLivArea": 2634,
        "SalePrice": 200000
      },
      {
        "GrLivArea": 1716,
        "SalePrice": 171000
      },
      {
        "GrLivArea": 1176,
        "SalePrice": 134900
      },
      {
        "GrLivArea": 3238,
        "SalePrice": 410000
      },
      {
        "GrLivArea": 1865,
        "SalePrice": 235000
      },
      {
        "GrLivArea": 1920,
        "SalePrice": 170000
      },
      {
        "GrLivArea": 892,
        "SalePrice": 110000
      },
      {
        "GrLivArea": 1078,
        "SalePrice": 149900
      },
      {
        "GrLivArea": 1573,
        "SalePrice": 177500
      },
      {
        "GrLivArea": 1980,
        "SalePrice": 315000
      },
      {
        "GrLivArea": 2601,
        "SalePrice": 189000
      },
      {
        "GrLivArea": 1530,
        "SalePrice": 260000
      },
      {
        "GrLivArea": 1738,
        "SalePrice": 104900
      },
      {
        "GrLivArea": 1412,
        "SalePrice": 156932
      },
      {
        "GrLivArea": 1200,
        "SalePrice": 144152
      },
      {
        "GrLivArea": 1674,
        "SalePrice": 216000
      },
      {
        "GrLivArea": 1790,
        "SalePrice": 193000
      },
      {
        "GrLivArea": 1475,
        "SalePrice": 127000
      },
      {
        "GrLivArea": 848,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 1668,
        "SalePrice": 232000
      },
      {
        "GrLivArea": 1374,
        "SalePrice": 105000
      },
      {
        "GrLivArea": 1661,
        "SalePrice": 165500
      },
      {
        "GrLivArea": 2097,
        "SalePrice": 274300
      },
      {
        "GrLivArea": 2633,
        "SalePrice": 466500
      },
      {
        "GrLivArea": 1958,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 1571,
        "SalePrice": 239000
      },
      {
        "GrLivArea": 790,
        "SalePrice": 91000
      },
      {
        "GrLivArea": 1604,
        "SalePrice": 117000
      },
      {
        "GrLivArea": 987,
        "SalePrice": 83000
      },
      {
        "GrLivArea": 1394,
        "SalePrice": 167500
      },
      {
        "GrLivArea": 864,
        "SalePrice": 58500
      },
      {
        "GrLivArea": 2117,
        "SalePrice": 237500
      },
      {
        "GrLivArea": 1762,
        "SalePrice": 157000
      },
      {
        "GrLivArea": 1416,
        "SalePrice": 112000
      },
      {
        "GrLivArea": 1258,
        "SalePrice": 105000
      },
      {
        "GrLivArea": 1154,
        "SalePrice": 125500
      },
      {
        "GrLivArea": 2784,
        "SalePrice": 250000
      },
      {
        "GrLivArea": 2526,
        "SalePrice": 136000
      },
      {
        "GrLivArea": 1746,
        "SalePrice": 377500
      },
      {
        "GrLivArea": 1218,
        "SalePrice": 131000
      },
      {
        "GrLivArea": 1525,
        "SalePrice": 235000
      },
      {
        "GrLivArea": 1584,
        "SalePrice": 124000
      },
      {
        "GrLivArea": 900,
        "SalePrice": 123000
      },
      {
        "GrLivArea": 1912,
        "SalePrice": 163000
      },
      {
        "GrLivArea": 1500,
        "SalePrice": 246578
      },
      {
        "GrLivArea": 2482,
        "SalePrice": 281213
      },
      {
        "GrLivArea": 1687,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1513,
        "SalePrice": 137500
      },
      {
        "GrLivArea": 1904,
        "SalePrice": 138000
      },
      {
        "GrLivArea": 1608,
        "SalePrice": 137450
      },
      {
        "GrLivArea": 1158,
        "SalePrice": 120000
      },
      {
        "GrLivArea": 1593,
        "SalePrice": 193000
      },
      {
        "GrLivArea": 1294,
        "SalePrice": 193879
      },
      {
        "GrLivArea": 1464,
        "SalePrice": 282922
      },
      {
        "GrLivArea": 1214,
        "SalePrice": 105000
      },
      {
        "GrLivArea": 1646,
        "SalePrice": 275000
      },
      {
        "GrLivArea": 768,
        "SalePrice": 133000
      },
      {
        "GrLivArea": 833,
        "SalePrice": 112000
      },
      {
        "GrLivArea": 1363,
        "SalePrice": 125500
      },
      {
        "GrLivArea": 2093,
        "SalePrice": 215000
      },
      {
        "GrLivArea": 1840,
        "SalePrice": 230000
      },
      {
        "GrLivArea": 1668,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 1040,
        "SalePrice": 90000
      },
      {
        "GrLivArea": 1844,
        "SalePrice": 257000
      },
      {
        "GrLivArea": 1848,
        "SalePrice": 207000
      },
      {
        "GrLivArea": 1569,
        "SalePrice": 175900
      },
      {
        "GrLivArea": 2290,
        "SalePrice": 122500
      },
      {
        "GrLivArea": 2450,
        "SalePrice": 340000
      },
      {
        "GrLivArea": 1144,
        "SalePrice": 124000
      },
      {
        "GrLivArea": 1844,
        "SalePrice": 223000
      },
      {
        "GrLivArea": 1416,
        "SalePrice": 179900
      },
      {
        "GrLivArea": 1069,
        "SalePrice": 127500
      },
      {
        "GrLivArea": 848,
        "SalePrice": 136500
      },
      {
        "GrLivArea": 2201,
        "SalePrice": 274970
      },
      {
        "GrLivArea": 1344,
        "SalePrice": 144000
      },
      {
        "GrLivArea": 1252,
        "SalePrice": 142000
      },
      {
        "GrLivArea": 2127,
        "SalePrice": 271000
      },
      {
        "GrLivArea": 1558,
        "SalePrice": 140000
      },
      {
        "GrLivArea": 804,
        "SalePrice": 119000
      },
      {
        "GrLivArea": 1440,
        "SalePrice": 182900
      },
      {
        "GrLivArea": 1838,
        "SalePrice": 192140
      },
      {
        "GrLivArea": 958,
        "SalePrice": 143750
      },
      {
        "GrLivArea": 968,
        "SalePrice": 64500
      },
      {
        "GrLivArea": 1792,
        "SalePrice": 186500
      },
      {
        "GrLivArea": 1126,
        "SalePrice": 160000
      },
      {
        "GrLivArea": 1537,
        "SalePrice": 174000
      },
      {
        "GrLivArea": 864,
        "SalePrice": 120500
      },
      {
        "GrLivArea": 1932,
        "SalePrice": 394617
      },
      {
        "GrLivArea": 1236,
        "SalePrice": 149700
      },
      {
        "GrLivArea": 1725,
        "SalePrice": 197000
      },
      {
        "GrLivArea": 2555,
        "SalePrice": 191000
      },
      {
        "GrLivArea": 848,
        "SalePrice": 149300
      },
      {
        "GrLivArea": 2007,
        "SalePrice": 310000
      },
      {
        "GrLivArea": 952,
        "SalePrice": 121000
      },
      {
        "GrLivArea": 1422,
        "SalePrice": 179600
      },
      {
        "GrLivArea": 913,
        "SalePrice": 129000
      },
      {
        "GrLivArea": 1188,
        "SalePrice": 157900
      },
      {
        "GrLivArea": 2090,
        "SalePrice": 240000
      },
      {
        "GrLivArea": 1346,
        "SalePrice": 112000
      },
      {
        "GrLivArea": 630,
        "SalePrice": 92000
      },
      {
        "GrLivArea": 1792,
        "SalePrice": 136000
      },
      {
        "GrLivArea": 1578,
        "SalePrice": 287090
      },
      {
        "GrLivArea": 1072,
        "SalePrice": 145000
      },
      {
        "GrLivArea": 1140,
        "SalePrice": 84500
      },
      {
        "GrLivArea": 1221,
        "SalePrice": 185000
      },
      {
        "GrLivArea": 1647,
        "SalePrice": 175000
      },
      {
        "GrLivArea": 2073,
        "SalePrice": 210000
      },
      {
        "GrLivArea": 2340,
        "SalePrice": 266500
      },
      {
        "GrLivArea": 1078,
        "SalePrice": 142125
      },
      {
        "GrLivArea": 1256,
        "SalePrice": 147500
      }
    ];
    
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatterPlot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 3000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 400000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  var tooltip = d3.select("#scatterPlot")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")



  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
  }

  var mousemove = function(d) {
    tooltip
      .html("The exact value of<br>the Ground Living area is: " + d.GrLivArea)
      .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", (d3.mouse(this)[1]) + "px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data.filter(function(d,i){return i<50})) // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 7)
      .style("fill", "#69b3a2")
      .style("opacity", 0.3)
      .style("stroke", "white")
    .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )
    }

  update() {
    }

  processingData() {
    }

  drawChart() {
    }
}

module.exports = ScatterPlot;