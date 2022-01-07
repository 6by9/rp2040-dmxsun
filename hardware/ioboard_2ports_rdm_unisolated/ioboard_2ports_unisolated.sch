EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title "rp2040_dongle_ioboard_2ports_rdm_unisolated"
Date "2021-04-06"
Rev "0.3"
Comp "https://www.openlighting.org"
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Connector_Generic:Conn_02x06_Odd_Even J1
U 1 1 60568255
P 3150 1300
F 0 "J1" H 3200 1717 50  0000 C CNN
F 1 "Conn_02x06_Odd_Even" H 3200 1626 50  0000 C CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_2x06_P2.54mm_Vertical" H 3150 1300 50  0001 C CNN
F 3 "~" H 3150 1300 50  0001 C CNN
	1    3150 1300
	1    0    0    -1  
$EndComp
Text Label 2950 1100 2    50   ~ 0
SDA
Text Label 2950 1200 2    50   ~ 0
SCL
Text Label 2950 1600 2    50   ~ 0
GP0
Text Label 2950 1500 2    50   ~ 0
GP1
Text Label 2950 1400 2    50   ~ 0
GP2
Text Label 2950 1300 2    50   ~ 0
GP3
Text Notes 2500 1800 0    50   ~ 0
Pins 2, 4, 6: Supply; Pins 8, 10, 12: I2C ID
$Comp
L power:GND #PWR04
U 1 1 6056A6AA
P 3800 1100
F 0 "#PWR04" H 3800 850 50  0001 C CNN
F 1 "GND" V 3805 972 50  0000 R CNN
F 2 "" H 3800 1100 50  0001 C CNN
F 3 "" H 3800 1100 50  0001 C CNN
	1    3800 1100
	0    -1   -1   0   
$EndComp
Wire Wire Line
	3450 1100 3800 1100
$Comp
L power:+5V #PWR05
U 1 1 6056BFE5
P 3800 1200
F 0 "#PWR05" H 3800 1050 50  0001 C CNN
F 1 "+5V" V 3815 1328 50  0000 L CNN
F 2 "" H 3800 1200 50  0001 C CNN
F 3 "" H 3800 1200 50  0001 C CNN
	1    3800 1200
	0    1    1    0   
$EndComp
Wire Wire Line
	3800 1200 3450 1200
$Comp
L power:+3.3V #PWR06
U 1 1 6056D5EA
P 3800 1300
F 0 "#PWR06" H 3800 1150 50  0001 C CNN
F 1 "+3.3V" V 3815 1428 50  0000 L CNN
F 2 "" H 3800 1300 50  0001 C CNN
F 3 "" H 3800 1300 50  0001 C CNN
	1    3800 1300
	0    1    1    0   
$EndComp
Wire Wire Line
	3800 1300 3450 1300
Text Label 3450 1400 0    50   ~ 0
ID0
Text Label 3450 1500 0    50   ~ 0
ID1
Text Label 3450 1600 0    50   ~ 0
ID2
$Comp
L Memory_EEPROM:M24C02-WMN U1
U 1 1 6056E547
P 4900 1300
F 0 "U1" H 5250 1100 50  0000 C CNN
F 1 "M24C02-WMN" H 5450 1000 50  0000 C CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 4900 1650 50  0001 C CNN
F 3 "http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf" H 4950 800 50  0001 C CNN
F 4 "C7562" H 4900 1300 50  0001 C CNN "LCSC"
	1    4900 1300
	1    0    0    -1  
$EndComp
$Comp
L power:+3.3V #PWR01
U 1 1 6056F343
P 4900 950
F 0 "#PWR01" H 4900 800 50  0001 C CNN
F 1 "+3.3V" H 4915 1123 50  0000 C CNN
F 2 "" H 4900 950 50  0001 C CNN
F 3 "" H 4900 950 50  0001 C CNN
	1    4900 950 
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR010
U 1 1 6056FCD4
P 4900 1650
F 0 "#PWR010" H 4900 1400 50  0001 C CNN
F 1 "GND" H 4905 1477 50  0000 C CNN
F 2 "" H 4900 1650 50  0001 C CNN
F 3 "" H 4900 1650 50  0001 C CNN
	1    4900 1650
	1    0    0    -1  
$EndComp
Text Label 5300 1200 0    50   ~ 0
SDA
Text Label 5300 1300 0    50   ~ 0
SCL
$Comp
L power:GND #PWR07
U 1 1 605706FF
P 5400 1400
F 0 "#PWR07" H 5400 1150 50  0001 C CNN
F 1 "GND" V 5405 1272 50  0000 R CNN
F 2 "" H 5400 1400 50  0001 C CNN
F 3 "" H 5400 1400 50  0001 C CNN
	1    5400 1400
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5400 1400 5300 1400
Text Label 4500 1200 2    50   ~ 0
ID0
Text Label 4500 1300 2    50   ~ 0
ID1
Text Label 4500 1400 2    50   ~ 0
ID2
$Comp
L Device:R R5
U 1 1 6059D8BD
P 2550 3300
F 0 "R5" H 2480 3254 50  0000 R CNN
F 1 "120R" H 2480 3345 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric_Pad0.98x0.95mm_HandSolder" V 2480 3300 50  0001 C CNN
F 3 "~" H 2550 3300 50  0001 C CNN
F 4 "C22787" H 2550 3300 50  0001 C CNN "LCSC"
	1    2550 3300
	-1   0    0    1   
$EndComp
Wire Wire Line
	2100 3200 2300 3200
Wire Wire Line
	2300 3200 2300 3150
Wire Wire Line
	2300 3150 2550 3150
Wire Wire Line
	2100 3400 2300 3400
Wire Wire Line
	2300 3400 2300 3450
Wire Wire Line
	2300 3450 2550 3450
$Comp
L Connector_Generic:Conn_01x03 J6
U 1 1 6059F495
P 3400 3300
F 0 "J6" V 3600 3250 50  0000 L CNN
F 1 "Conn_01x03" V 3500 3100 50  0000 L CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical" H 3400 3300 50  0001 C CNN
F 3 "~" H 3400 3300 50  0001 C CNN
	1    3400 3300
	1    0    0    -1  
$EndComp
Wire Wire Line
	2550 3150 2800 3150
Connection ~ 2550 3150
Wire Wire Line
	2550 3450 2800 3450
Wire Wire Line
	3200 3450 3200 3400
Connection ~ 2550 3450
$Comp
L Connector:XLR3 J2
U 1 1 605A262D
P 3950 3150
F 0 "J2" V 3904 3378 50  0000 L CNN
F 1 "XLR3" V 3995 3378 50  0000 L CNN
F 2 "Connector_Audio:Jack_XLR_Neutrik_NC3FAAH_Horizontal" H 3950 3150 50  0001 C CNN
F 3 " ~" H 3950 3150 50  0001 C CNN
	1    3950 3150
	0    1    1    0   
$EndComp
Wire Wire Line
	3950 2850 4050 2850
$Comp
L Mechanical:MountingHole H1
U 1 1 605F3AA5
P 900 1200
F 0 "H1" H 1000 1246 50  0000 L CNN
F 1 "MountingHole" H 1000 1155 50  0000 L CNN
F 2 "MountingHole:MountingHole_3.2mm_M3" H 900 1200 50  0001 C CNN
F 3 "~" H 900 1200 50  0001 C CNN
	1    900  1200
	1    0    0    -1  
$EndComp
$Comp
L Mechanical:MountingHole H2
U 1 1 605F57F2
P 1700 1200
F 0 "H2" H 1800 1246 50  0000 L CNN
F 1 "MountingHole" H 1800 1155 50  0000 L CNN
F 2 "MountingHole:MountingHole_3.2mm_M3" H 1700 1200 50  0001 C CNN
F 3 "~" H 1700 1200 50  0001 C CNN
	1    1700 1200
	1    0    0    -1  
$EndComp
$Comp
L Mechanical:MountingHole H3
U 1 1 605F5AEA
P 900 1450
F 0 "H3" H 1000 1496 50  0000 L CNN
F 1 "MountingHole" H 1000 1405 50  0000 L CNN
F 2 "MountingHole:MountingHole_3.2mm_M3" H 900 1450 50  0001 C CNN
F 3 "~" H 900 1450 50  0001 C CNN
	1    900  1450
	1    0    0    -1  
$EndComp
$Comp
L Mechanical:MountingHole H4
U 1 1 605F5EBF
P 1700 1450
F 0 "H4" H 1800 1496 50  0000 L CNN
F 1 "MountingHole" H 1800 1405 50  0000 L CNN
F 2 "MountingHole:MountingHole_3.2mm_M3" H 1700 1450 50  0001 C CNN
F 3 "~" H 1700 1450 50  0001 C CNN
	1    1700 1450
	1    0    0    -1  
$EndComp
$Comp
L Interface_UART:SP3485EN U2
U 1 1 60582447
P 1700 3300
F 0 "U2" H 1850 3650 50  0000 L CNN
F 1 "SP3485EN" H 1800 2900 50  0000 L CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 1700 2600 50  0001 C CNN
F 3 "http://www.icbase.com/pdf/SPX/SPX00480106.pdf" H 950 3350 50  0001 C CNN
F 4 "C8963" H 1700 3300 50  0001 C CNN "LCSC"
	1    1700 3300
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR021
U 1 1 60602410
P 1700 3800
F 0 "#PWR021" H 1700 3550 50  0001 C CNN
F 1 "GND" H 1705 3627 50  0000 C CNN
F 2 "" H 1700 3800 50  0001 C CNN
F 3 "" H 1700 3800 50  0001 C CNN
	1    1700 3800
	1    0    0    -1  
$EndComp
$Comp
L Device:R R1
U 1 1 60798D1D
P 2800 2900
F 0 "R1" H 2730 2854 50  0000 R CNN
F 1 "680R" H 2730 2945 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric_Pad0.98x0.95mm_HandSolder" V 2730 2900 50  0001 C CNN
F 3 "~" H 2800 2900 50  0001 C CNN
F 4 "C23228" H 2800 2900 50  0001 C CNN "LCSC"
	1    2800 2900
	-1   0    0    1   
$EndComp
$Comp
L Device:R R7
U 1 1 607993C1
P 2800 3600
F 0 "R7" H 2730 3554 50  0000 R CNN
F 1 "680R" H 2730 3645 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric_Pad0.98x0.95mm_HandSolder" V 2730 3600 50  0001 C CNN
F 3 "~" H 2800 3600 50  0001 C CNN
F 4 "C23228" H 2800 3600 50  0001 C CNN "LCSC"
	1    2800 3600
	-1   0    0    1   
$EndComp
Connection ~ 2800 3450
Wire Wire Line
	2800 3450 3200 3450
$Comp
L Device:C C3
U 1 1 607A0463
P 1450 2800
F 0 "C3" V 1198 2800 50  0000 C CNN
F 1 "100nF" V 1289 2800 50  0000 C CNN
F 2 "Capacitor_SMD:C_0603_1608Metric" H 1488 2650 50  0001 C CNN
F 3 "~" H 1450 2800 50  0001 C CNN
F 4 "C14663" V 1450 2800 50  0001 C CNN "LCSC"
	1    1450 2800
	0    1    1    0   
$EndComp
$Comp
L power:GND #PWR011
U 1 1 607A92EF
P 1300 2800
F 0 "#PWR011" H 1300 2550 50  0001 C CNN
F 1 "GND" H 1305 2627 50  0000 C CNN
F 2 "" H 1300 2800 50  0001 C CNN
F 3 "" H 1300 2800 50  0001 C CNN
	1    1300 2800
	0    1    1    0   
$EndComp
Wire Wire Line
	4700 2850 4800 2850
Wire Wire Line
	3200 3450 3950 3450
Connection ~ 3200 3450
Wire Wire Line
	3950 3450 4700 3450
Connection ~ 3950 3450
Wire Wire Line
	3650 3150 3650 3050
Wire Wire Line
	3650 2650 4400 2650
Wire Wire Line
	4400 2650 4400 3150
$Comp
L Connector:XLR3 J3
U 1 1 607D868E
P 4700 3150
F 0 "J3" V 4654 3378 50  0000 L CNN
F 1 "XLR3" V 4745 3378 50  0000 L CNN
F 2 "NC3FD-H:Jack_XLR_Neutrik_NC3FD-H_Horizontal" H 4700 3150 50  0001 C CNN
F 3 " ~" H 4700 3150 50  0001 C CNN
	1    4700 3150
	0    1    1    0   
$EndComp
Wire Wire Line
	2800 3150 2800 3300
Wire Wire Line
	2800 3300 3200 3300
Connection ~ 2800 3150
Wire Wire Line
	2800 3150 2800 3050
Wire Wire Line
	2800 3050 3650 3050
Connection ~ 2800 3050
Connection ~ 3650 3050
Wire Wire Line
	3650 3050 3650 2650
Wire Wire Line
	4900 950  4900 1000
Wire Wire Line
	4900 1600 4900 1650
$Comp
L Device:R R15
U 1 1 6062C4D2
P 2800 5550
F 0 "R15" H 2730 5504 50  0000 R CNN
F 1 "120R" H 2730 5595 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric_Pad0.98x0.95mm_HandSolder" V 2730 5550 50  0001 C CNN
F 3 "~" H 2800 5550 50  0001 C CNN
F 4 "C22787" H 2800 5550 50  0001 C CNN "LCSC"
	1    2800 5550
	-1   0    0    1   
$EndComp
Wire Wire Line
	2550 5450 2550 5400
Wire Wire Line
	2550 5400 2800 5400
Wire Wire Line
	2550 5650 2550 5700
Wire Wire Line
	2550 5700 2800 5700
$Comp
L Connector_Generic:Conn_01x03 J12
U 1 1 6062C4E2
P 3650 5550
F 0 "J12" V 3850 5500 50  0000 L CNN
F 1 "Conn_01x03" V 3750 5350 50  0000 L CNN
F 2 "Connector_PinHeader_2.54mm:PinHeader_1x03_P2.54mm_Vertical" H 3650 5550 50  0001 C CNN
F 3 "~" H 3650 5550 50  0001 C CNN
	1    3650 5550
	1    0    0    -1  
$EndComp
Wire Wire Line
	2800 5400 3050 5400
Connection ~ 2800 5400
Wire Wire Line
	2800 5700 3050 5700
Wire Wire Line
	3450 5700 3450 5650
Connection ~ 2800 5700
Wire Wire Line
	4200 5100 4300 5100
$Comp
L Device:R R11
U 1 1 6062C531
P 3050 5150
F 0 "R11" H 2980 5104 50  0000 R CNN
F 1 "680R" H 2980 5195 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric_Pad0.98x0.95mm_HandSolder" V 2980 5150 50  0001 C CNN
F 3 "~" H 3050 5150 50  0001 C CNN
F 4 "C23228" H 3050 5150 50  0001 C CNN "LCSC"
	1    3050 5150
	-1   0    0    1   
$EndComp
$Comp
L Device:R R17
U 1 1 6062C53B
P 3050 5850
F 0 "R17" H 2980 5804 50  0000 R CNN
F 1 "680R" H 2980 5895 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric_Pad0.98x0.95mm_HandSolder" V 2980 5850 50  0001 C CNN
F 3 "~" H 3050 5850 50  0001 C CNN
F 4 "C23228" H 3050 5850 50  0001 C CNN "LCSC"
	1    3050 5850
	-1   0    0    1   
$EndComp
Connection ~ 3050 5700
Wire Wire Line
	3050 5700 3450 5700
Wire Wire Line
	4950 5100 5050 5100
Wire Wire Line
	3450 5700 4200 5700
Connection ~ 3450 5700
Wire Wire Line
	4200 5700 4950 5700
Connection ~ 4200 5700
Wire Wire Line
	3900 5400 3900 5300
Wire Wire Line
	3900 4900 4650 4900
Wire Wire Line
	4650 4900 4650 5400
Wire Wire Line
	3050 5400 3050 5550
Wire Wire Line
	3050 5550 3450 5550
Connection ~ 3050 5400
Wire Wire Line
	3050 5400 3050 5300
Wire Wire Line
	3050 5300 3900 5300
Connection ~ 3050 5300
Connection ~ 3900 5300
Wire Wire Line
	3900 5300 3900 4900
Wire Notes Line
	2500 2000 2500 500 
Text Notes 600  650  0    50   ~ 0
Mounting holes
Text Notes 2600 650  0    50   ~ 0
Connector from base board
Text Notes 4300 650  0    50   ~ 0
I2C EEPROM for board identification
Wire Notes Line
	4250 2000 4250 500 
Text Notes 500  2300 0    50   ~ 0
DMX Port 1
Text Notes 500  4500 0    50   ~ 0
DMX Port 3
Text Label 1300 3500 2    50   ~ 0
GP0
Text Label 1300 3100 2    50   ~ 0
GP0
Wire Wire Line
	1700 3700 1700 3800
$Comp
L power:GND #PWR035
U 1 1 60667B1A
P 2800 3750
F 0 "#PWR035" H 2800 3500 50  0001 C CNN
F 1 "GND" H 2805 3577 50  0000 C CNN
F 2 "" H 2800 3750 50  0001 C CNN
F 3 "" H 2800 3750 50  0001 C CNN
	1    2800 3750
	1    0    0    -1  
$EndComp
$Comp
L power:+5V #PWR03
U 1 1 6066805A
P 2800 2750
F 0 "#PWR03" H 2800 2600 50  0001 C CNN
F 1 "+5V" V 2815 2878 50  0000 L CNN
F 2 "" H 2800 2750 50  0001 C CNN
F 3 "" H 2800 2750 50  0001 C CNN
	1    2800 2750
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR018
U 1 1 6067B705
P 3200 3200
F 0 "#PWR018" H 3200 2950 50  0001 C CNN
F 1 "GND" H 3205 3027 50  0000 C CNN
F 2 "" H 3200 3200 50  0001 C CNN
F 3 "" H 3200 3200 50  0001 C CNN
	1    3200 3200
	0    1    1    0   
$EndComp
$Comp
L power:GND #PWR08
U 1 1 6067BE89
P 4050 2850
F 0 "#PWR08" H 4050 2600 50  0001 C CNN
F 1 "GND" H 4055 2677 50  0000 C CNN
F 2 "" H 4050 2850 50  0001 C CNN
F 3 "" H 4050 2850 50  0001 C CNN
	1    4050 2850
	0    -1   -1   0   
$EndComp
$Comp
L power:GND #PWR09
U 1 1 6067F23D
P 4800 2850
F 0 "#PWR09" H 4800 2600 50  0001 C CNN
F 1 "GND" H 4805 2677 50  0000 C CNN
F 2 "" H 4800 2850 50  0001 C CNN
F 3 "" H 4800 2850 50  0001 C CNN
	1    4800 2850
	0    -1   -1   0   
$EndComp
Wire Wire Line
	1600 2800 1700 2800
Wire Wire Line
	1700 2800 1700 2900
$Comp
L power:GND #PWR047
U 1 1 6068674F
P 1050 6050
F 0 "#PWR047" H 1050 5800 50  0001 C CNN
F 1 "GND" H 1055 5877 50  0000 C CNN
F 2 "" H 1050 6050 50  0001 C CNN
F 3 "" H 1050 6050 50  0001 C CNN
	1    1050 6050
	1    0    0    -1  
$EndComp
Wire Wire Line
	1050 6000 1050 6050
Wire Wire Line
	2350 5450 2550 5450
Wire Wire Line
	2350 5650 2550 5650
$Comp
L Interface_UART:SP3485EN U4
U 1 1 6068675D
P 1950 5550
F 0 "U4" H 2100 5900 50  0000 L CNN
F 1 "SP3485EN" H 2050 5150 50  0000 L CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 1950 4850 50  0001 C CNN
F 3 "http://www.icbase.com/pdf/SPX/SPX00480106.pdf" H 1200 5600 50  0001 C CNN
F 4 "C8963" H 1950 5550 50  0001 C CNN "LCSC"
	1    1950 5550
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR048
U 1 1 60686771
P 1950 6050
F 0 "#PWR048" H 1950 5800 50  0001 C CNN
F 1 "GND" H 1955 5877 50  0000 C CNN
F 2 "" H 1950 6050 50  0001 C CNN
F 3 "" H 1950 6050 50  0001 C CNN
	1    1950 6050
	1    0    0    -1  
$EndComp
$Comp
L Device:C C2
U 1 1 6068677C
P 1700 5050
F 0 "C2" V 1448 5050 50  0000 C CNN
F 1 "100nF" V 1539 5050 50  0000 C CNN
F 2 "Capacitor_SMD:C_0603_1608Metric" H 1738 4900 50  0001 C CNN
F 3 "~" H 1700 5050 50  0001 C CNN
F 4 "C14663" V 1700 5050 50  0001 C CNN "LCSC"
	1    1700 5050
	0    1    1    0   
$EndComp
$Comp
L power:GND #PWR030
U 1 1 60686786
P 1550 5050
F 0 "#PWR030" H 1550 4800 50  0001 C CNN
F 1 "GND" H 1555 4877 50  0000 C CNN
F 2 "" H 1550 5050 50  0001 C CNN
F 3 "" H 1550 5050 50  0001 C CNN
	1    1550 5050
	0    1    1    0   
$EndComp
Text Label 1550 5750 2    50   ~ 0
GP2
Text Label 1550 5350 2    50   ~ 0
GP2
Wire Wire Line
	1550 5450 1400 5450
Wire Wire Line
	1400 5650 1550 5650
Wire Wire Line
	1950 5950 1950 6050
Wire Wire Line
	1850 5050 1950 5050
Wire Wire Line
	1400 5450 1400 5550
Wire Wire Line
	1050 5550 1400 5550
Connection ~ 1400 5550
Wire Wire Line
	1400 5550 1400 5650
Wire Wire Line
	1950 5050 1950 5150
$Comp
L power:GND #PWR045
U 1 1 606AE87D
P 3050 6000
F 0 "#PWR045" H 3050 5750 50  0001 C CNN
F 1 "GND" H 3055 5827 50  0000 C CNN
F 2 "" H 3050 6000 50  0001 C CNN
F 3 "" H 3050 6000 50  0001 C CNN
	1    3050 6000
	1    0    0    -1  
$EndComp
$Comp
L Connector:XLR3 J9
U 1 1 6062C574
P 4950 5400
F 0 "J9" V 4904 5628 50  0000 L CNN
F 1 "XLR3" V 4995 5628 50  0000 L CNN
F 2 "NC3FD-H:Jack_XLR_Neutrik_NC3FD-H_Horizontal" H 4950 5400 50  0001 C CNN
F 3 " ~" H 4950 5400 50  0001 C CNN
	1    4950 5400
	0    1    1    0   
$EndComp
$Comp
L Connector:XLR3 J8
U 1 1 6062C4F1
P 4200 5400
F 0 "J8" V 4154 5628 50  0000 L CNN
F 1 "XLR3" V 4245 5628 50  0000 L CNN
F 2 "Connector_Audio:Jack_XLR_Neutrik_NC3FAAH_Horizontal" H 4200 5400 50  0001 C CNN
F 3 " ~" H 4200 5400 50  0001 C CNN
	1    4200 5400
	0    1    1    0   
$EndComp
$Comp
L power:GND #PWR033
U 1 1 606AEF44
P 4300 5100
F 0 "#PWR033" H 4300 4850 50  0001 C CNN
F 1 "GND" H 4305 4927 50  0000 C CNN
F 2 "" H 4300 5100 50  0001 C CNN
F 3 "" H 4300 5100 50  0001 C CNN
	1    4300 5100
	0    -1   -1   0   
$EndComp
$Comp
L power:GND #PWR034
U 1 1 606B89F1
P 5050 5100
F 0 "#PWR034" H 5050 4850 50  0001 C CNN
F 1 "GND" H 5055 4927 50  0000 C CNN
F 2 "" H 5050 5100 50  0001 C CNN
F 3 "" H 5050 5100 50  0001 C CNN
	1    5050 5100
	0    -1   -1   0   
$EndComp
$Comp
L power:GND #PWR043
U 1 1 606B9DED
P 3450 5450
F 0 "#PWR043" H 3450 5200 50  0001 C CNN
F 1 "GND" H 3455 5277 50  0000 C CNN
F 2 "" H 3450 5450 50  0001 C CNN
F 3 "" H 3450 5450 50  0001 C CNN
	1    3450 5450
	0    1    1    0   
$EndComp
$Comp
L power:+5V #PWR027
U 1 1 606BAA4C
P 3050 5000
F 0 "#PWR027" H 3050 4850 50  0001 C CNN
F 1 "+5V" V 3065 5128 50  0000 L CNN
F 2 "" H 3050 5000 50  0001 C CNN
F 3 "" H 3050 5000 50  0001 C CNN
	1    3050 5000
	1    0    0    -1  
$EndComp
Wire Notes Line
	5650 2000 5650 6550
Text Label 750  3100 2    50   ~ 0
GP1
$Comp
L Device:R R2
U 1 1 6066C775
P 750 3500
F 0 "R2" H 680 3454 50  0000 R CNN
F 1 "2k" H 680 3545 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric" V 680 3500 50  0001 C CNN
F 3 "~" H 750 3500 50  0001 C CNN
F 4 "C22975" H 750 3500 50  0001 C CNN "LCSC"
	1    750  3500
	-1   0    0    1   
$EndComp
$Comp
L power:GND #PWR02
U 1 1 60672EC4
P 750 3650
F 0 "#PWR02" H 750 3400 50  0001 C CNN
F 1 "GND" H 755 3477 50  0000 C CNN
F 2 "" H 750 3650 50  0001 C CNN
F 3 "" H 750 3650 50  0001 C CNN
	1    750  3650
	1    0    0    -1  
$EndComp
Wire Wire Line
	1300 3200 1150 3200
Wire Wire Line
	1150 3200 1150 3300
Wire Wire Line
	1150 3400 1300 3400
Wire Wire Line
	1150 3300 750  3300
Connection ~ 1150 3300
Wire Wire Line
	1150 3300 1150 3400
Wire Wire Line
	750  3300 750  3350
Wire Wire Line
	750  3100 750  3300
Connection ~ 750  3300
Text Label 1050 5150 2    50   ~ 0
GP3
Wire Wire Line
	1050 5150 1050 5550
Connection ~ 1050 5550
Wire Wire Line
	1050 5550 1050 5700
$Comp
L Device:R R3
U 1 1 60698603
P 1050 5850
F 0 "R3" H 980 5804 50  0000 R CNN
F 1 "2k" H 980 5895 50  0000 R CNN
F 2 "Resistor_SMD:R_0603_1608Metric" V 980 5850 50  0001 C CNN
F 3 "~" H 1050 5850 50  0001 C CNN
F 4 "C22975" H 1050 5850 50  0001 C CNN "LCSC"
	1    1050 5850
	-1   0    0    1   
$EndComp
$Comp
L power:+5V #PWR012
U 1 1 606AD98F
P 6450 1150
F 0 "#PWR012" H 6450 1000 50  0001 C CNN
F 1 "+5V" V 6465 1278 50  0000 L CNN
F 2 "" H 6450 1150 50  0001 C CNN
F 3 "" H 6450 1150 50  0001 C CNN
	1    6450 1150
	0    -1   -1   0   
$EndComp
$Comp
L Device:C C1
U 1 1 606B2F8D
P 6450 1300
F 0 "C1" V 6198 1300 50  0000 C CNN
F 1 "22uF" V 6289 1300 50  0000 C CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" H 6488 1150 50  0001 C CNN
F 3 "~" H 6450 1300 50  0001 C CNN
F 4 "C45783" V 6450 1300 50  0001 C CNN "LCSC"
	1    6450 1300
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR013
U 1 1 606B494F
P 6750 1450
F 0 "#PWR013" H 6750 1200 50  0001 C CNN
F 1 "GND" V 6755 1322 50  0000 R CNN
F 2 "" H 6750 1450 50  0001 C CNN
F 3 "" H 6750 1450 50  0001 C CNN
	1    6750 1450
	1    0    0    -1  
$EndComp
Wire Wire Line
	6750 1450 6450 1450
Connection ~ 6750 1450
Text Label 7100 1150 0    50   ~ 0
+3V3_INT
Text Label 1700 2800 0    50   ~ 0
+3V3_INT
Text Label 1950 5050 0    50   ~ 0
+3V3_INT
$Comp
L Regulator_Linear:AMS1117-3.3 U3
U 1 1 606CF145
P 6750 1150
F 0 "U3" H 6750 1392 50  0000 C CNN
F 1 "AMS1117-3.3" H 6750 1301 50  0000 C CNN
F 2 "Package_TO_SOT_SMD:SOT-223" H 6750 1350 50  0001 C CNN
F 3 "http://www.advanced-monolithic.com/pdf/ds1117.pdf" H 6850 900 50  0001 C CNN
F 4 "C6186" H 6750 1150 50  0001 C CNN "LCSC"
	1    6750 1150
	1    0    0    -1  
$EndComp
Connection ~ 6450 1150
$Comp
L Device:C C4
U 1 1 606D62FA
P 7100 1650
F 0 "C4" V 6848 1650 50  0000 C CNN
F 1 "22uF" V 6939 1650 50  0000 C CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" H 7138 1500 50  0001 C CNN
F 3 "~" H 7100 1650 50  0001 C CNN
F 4 "C45783" V 7100 1650 50  0001 C CNN "LCSC"
	1    7100 1650
	-1   0    0    1   
$EndComp
$Comp
L Device:R R4
U 1 1 606D850F
P 7100 1350
F 0 "R4" H 7030 1304 50  0000 R CNN
F 1 "1R" H 7030 1395 50  0000 R CNN
F 2 "Resistor_SMD:R_0805_2012Metric" V 7030 1350 50  0001 C CNN
F 3 "~" H 7100 1350 50  0001 C CNN
F 4 "C25271" H 7100 1350 50  0001 C CNN "LCSC"
	1    7100 1350
	-1   0    0    1   
$EndComp
Wire Wire Line
	7050 1150 7100 1150
Wire Wire Line
	7100 1150 7100 1200
$Comp
L power:GND #PWR014
U 1 1 606DD4A5
P 7100 1800
F 0 "#PWR014" H 7100 1550 50  0001 C CNN
F 1 "GND" V 7105 1672 50  0000 R CNN
F 2 "" H 7100 1800 50  0001 C CNN
F 3 "" H 7100 1800 50  0001 C CNN
	1    7100 1800
	1    0    0    -1  
$EndComp
Text Notes 7950 1300 0    50   ~ 0
Dummy Net to connect to\nU3 - Pad4 for cooling
$Comp
L Connector_Generic:Conn_01x01 DO_NOT_MOUNT_J4
U 1 1 606ED99D
P 8300 1450
F 0 "DO_NOT_MOUNT_J4" H 8380 1492 50  0000 L CNN
F 1 "Conn_01x01_DO_NOT_MOUNT" H 8380 1401 50  0000 L CNN
F 2 "Connector_PinHeader_1.00mm:PinHeader_1x02_P1.00mm_Vertical_SMD_Pin1Left" H 8300 1450 50  0001 C CNN
F 3 "~" H 8300 1450 50  0001 C CNN
	1    8300 1450
	1    0    0    -1  
$EndComp
$EndSCHEMATC
