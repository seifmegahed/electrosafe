/// <reference types="cypress" />

const abbItems = [
  {
    mpn: "2CSR275151R0204",
    name: "DSE201 M C20 A10 - N Blue",
    category: "RCCB",
  },
  { mpn: "2CDS253001R0324", name: "S203 - C32", category: "MCB" },
  { mpn: "2CDS251001R0204", name: "S201 - C20", category: "MCB" },
  {
    mpn: "2CDS283001R0504",
    name: "S203P-C50 Miniature Circuit Breaker C-Ch",
    category: "MCB",
  },
  {
    mpn: "1SDA062104R1",
    name: "AUX T7 1Q + 1SY 400Va.c.",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA054333R1",
    name: "T5S 400 PR221DS-LS/I In=400 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054910R1",
    name: "AUX-C T4-T5-T6, A3 1Q 1SY 250 Vac/dc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA067804R1",
    name: "XT2S 160 Ekip LS/I In=160A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067803R1",
    name: "XT2S 160 Ekip LS/I In=100A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067802R1",
    name: "XT2S 160 Ekip LS/I In=63A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA082485R1",
    name: "EKIP SIGNALLING MODBUS TCP E1.2...E6.2",
    category: "CB Accessory",
  },
  {
    mpn: "1SCA022718R8780",
    name: "OT400E03P SWITCH DISCONNECTOR",
    category: "Switch Disconnector",
  },
  {
    mpn: "1SEP101892R0001",
    name: "XLP2 400A Fuse Switch Disconnector",
    category: "Fuse Switch",
  },
  {
    mpn: "1SDA072614R1",
    name: "E6.2H 5000 Ekip Touch LI 3p WMP",
    category: "ACB",
  },
  { mpn: "1SDA073917R1", name: "E6.2 W FP Iu=5000 3p HR HR", category: "ACB" },
  {
    mpn: "1SDA072416R1",
    name: "E2.2N 2500 Ekip Touch LSIG 3p WMP",
    category: "ACB",
  },
  { mpn: "1SDA073911R1", name: "E2.2 W FP Iu=2500 3p HR HR", category: "ACB" },
  {
    mpn: "1SDA073737R1",
    name: "EXT CS N E2.2 2500A",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA072394R1",
    name: "E2.2S 2000 Ekip Touch LI 3p WMP",
    category: "ACB",
  },
  {
    mpn: "1SDA072384R1",
    name: "E2.2N 2000 Ekip Touch LI 3p WMP",
    category: "ACB",
  },
  { mpn: "1SDA073909R1", name: "E2.2 W FP Iu=2000 3p HR HR", category: "ACB" },
  {
    mpn: "1SDA072554R1",
    name: "E4.2S 4000 Ekip Touch LI 3p WMP",
    category: "ACB",
  },
  {
    mpn: "1SDA073915R1",
    name: "E4.2 W FP Iu=4000 or V version 3p HR HR",
    category: "ACB",
  },
  {
    mpn: "1SDA073725R1",
    name: "M E2.2...E6.2 220-250 VAC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA073674R1",
    name: "YO E1.2..E6.2-XT7-XT7M 220-240 VAC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA073687R1",
    name: "YC E1.2..E6.2-XT7M 220-240 VAC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA073700R1",
    name: "YU E1.2..E6.2-XT7-XT7M 220-240 VAC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA073756R1",
    name: "AUX 6Q 400VAC E2.2...E6.2",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA060289R1",
    name: "T6H 800 PR221DS-LS/I In=800 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054412R1",
    name: "T5H 630 PR221DS-LS/I In=630 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067860R1",
    name: "XT2H 160 Ekip LS/I In=100A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067859R1",
    name: "XT2H 160 Ekip LS/I In=63A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067858R1",
    name: "XT2H 160 Ekip LS/I In=25A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA062882R1",
    name: "T7S 1250 PR231/P LS/I In=1250A 3p F F M",
    category: "MCCB",
  },
  {
    mpn: "1SDA062884R1",
    name: "T7S 1250 PR331/P LSIG In=1250A 3p F F M",
    category: "MCCB",
  },
  {
    mpn: "1SDA063159R1",
    name: "CURR.SENS.NE.EXT In=400..1600A T7-T7M-X1",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA060278R1",
    name: "T6S 800 PR221DS-LS/I In=800 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054332R1",
    name: "T5S 400 PR221DS-LS/I In=320 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068475R1",
    name: "XT4S 250 Ekip LS/I In=250A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067801R1",
    name: "XT2S 160 Ekip LS/I In=25A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067056R1",
    name: "XT2N 160 Ekip LS/I In=63A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067055R1",
    name: "XT2N 160 Ekip LS/I In=25A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA062116R1",
    name: "GEAR.MOTOR DEVICE T7M-X1 220...250Vac/dc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA062070R1",
    name: "SOR T7-T7M-X1 240...250Va.c./d.c.",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA063552R1",
    name: "UVR T7-T7M-X1 220...240Va.c./d.c.",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA062102R1",
    name: "AUX T7-T7M-X1 2Q 400Va.c.",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA063553R1",
    name: "AUX-SA T7M-X1 1 S51 250Va.c.",
    category: "CB Accessory",
  },
  { mpn: "1SDA060384R1", name: "T6 W FP 3p EF", category: "CB Accessory" },
  {
    mpn: "1SDA054873R1",
    name: "SOR-C T4-T5-T6 220..240Vac - 220..250Vdc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA054891R1",
    name: "UVR-C T4-T5-T6 220...250 Vac/dc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA066325R1",
    name: "SOR-C XT1..XT4 F/P 220-240Vac-220-250Vdc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA066431R1",
    name: "AUX-C 1Q+1SY 250Vac/dc XT1..XT4 F/P",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA066399R1",
    name: "UVR-C XT1..XT4 F/P 220-240Vac-220-250Vdc",
    category: "CB Accessory",
  },
  {
    mpn: "1SFL467001R1300",
    name: "CONTACTOR#AF146-30-00-13#100-250V",
    category: "Contactor",
  },
  {
    mpn: "1SFL657001R7011",
    name: "AF1350-30-11 100-250V 50/60Hz / 100-250V",
    category: "Contactor",
  },
  {
    mpn: "1SBL371024R8000",
    name: "UA63-30-00RA 220-230V",
    category: "Contactor",
  },
  {
    mpn: "1SBL351024R8000",
    name: "UA50-30-00RA 220-230V 50HZ / 230-240V 60",
    category: "Contactor",
  },
  {
    mpn: "1SAM350000R1005",
    name: "MS132-1.0 Manual Motor Starter",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM350000R1006",
    name: "Manual Motor Starter- MS132-1.6 Trip CL",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM350000R1007",
    name: "MS132-2.5 Manual Motor Starter",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM350000R1008",
    name: "Manual Motor Starter- MS132-4.0 Trip CL",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM350000R1009",
    name: "MS132-6.30 Manual Motor Starter",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM350000R1010",
    name: "MS132-10 Manual Motor Starter Trip class",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM350000R1012",
    name: "MS132-12    MM-Starter ( 8.0...12.0 A)",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM350000R1011",
    name: "MS132-16    MM-Starter ( 10 ...16 A)",
    category: "Motor Starter",
  },
  {
    mpn: "1SAM201903R1001",
    name: "SK1-11 Signal contact",
    category: "Contactor Accessory",
  },
  {
    mpn: "1SFA898119R7000",
    name: "SOFTSTARTER PSTX840-600-70",
    category: "Motor Starter",
  },
  {
    mpn: "1SVR730700R2100",
    name: "CM-MSS.13S Thermal motor protection relay 1",
    category: "Device",
  },
  {
    mpn: "1SVR730794R3300",
    name: "CM-PVS.41S Three-phase monitoring relay",
    category: "Device",
  },
  { mpn: "1SDA067411R1", name: "XT1N 160 TMD 32-450 3p F F", category: "MCCB" },
  { mpn: "1SDA067431R1", name: "XT1S 160 TMD 50-500 3p F F", category: "MCCB" },
  { mpn: "1SDA067432R1", name: "XT1S 160 TMD 63-630 3p F F", category: "MCCB" },
  { mpn: "1SDA067433R1", name: "XT1S 160 TMD 80-800 3p F F", category: "MCCB" },
  {
    mpn: "1SDA067434R1",
    name: "XT1S 160 TMD 100-1000 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067435R1",
    name: "XT1S 160 TMD 125-1250 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067436R1",
    name: "XT1S 160 TMD 160-1600 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067808R1",
    name: "XT2S 160 Ekip I In=100A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068480R1",
    name: "XT4S 250 Ekip I In=250A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100504R1",
    name: "XT5H 400 Ekip M Dip I In=400A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100505R1",
    name: "XT5H 630 Ekip M Dip I In=630A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068126R1",
    name: "XT4N 250 Ekip LS/I In=250A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068495R1",
    name: "XT4S 250 Ekip LS/I In=250A 4p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100354R1",
    name: "XT5N 400 Ekip Dip LS/I In=400 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100424R1",
    name: "XT5S 400 Ekip Dip LS/I In=400 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100355R1",
    name: "XT5N 630 Ekip Dip LS/I In=630 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100425R1",
    name: "XT5S 630 Ekip Dip LS/I In=630 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100827R1",
    name: "XT7S 1000 Ekip Dip LS/I In=1000A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100828R1",
    name: "XT7S 1250 Ekip Dip LS/I In=1250A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA101655R1",
    name: "XT7S M 1000 Ekip Dip LS/I In1000A 4p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA100829R1",
    name: "XT7S 1600 Ekip Dip LS/I In=1600A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA101657R1",
    name: "XT7S M 1600 Ekip Dip LS/I In1600A 4p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA104885R1",
    name: "MOE XT5 220...250V AC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA104895R1",
    name: "MOE XT6 220...250V AC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA104922R1",
    name: "M XT7M 220-250 V AC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA104926R1",
    name: "YO XT5-XT6 110..240 Vac - 110..250 Vdc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA070804R1",
    name: "E1.2N 1000 Ekip Touch LI 3p F F",
    category: "ACB",
  },
  {
    mpn: "1SDA070844R1",
    name: "E1.2N 1250 Ekip Touch LI 3p F F",
    category: "ACB",
  },
  {
    mpn: "1SDA070881R1",
    name: "E1.2N 1600 Ekip Dip LI 3p F F",
    category: "ACB",
  },
  {
    mpn: "1SDA071034R1",
    name: "E2.2N 2000 Ekip Touch LI 3p FHR",
    category: "ACB",
  },
  {
    mpn: "1SDA071064R1",
    name: "E2.2N 2500 Ekip Touch LI 3p FHR",
    category: "ACB",
  },
  {
    mpn: "1SDA073174R1",
    name: "E4.2N 4000 Ekip Touch LI 4p WMP",
    category: "ACB",
  },
  {
    mpn: "1SDA073916R1",
    name: "E4.2 W FP Iu=4000 or V version 4p HR HR",
    category: "ACB",
  },
  {
    mpn: "1SDA072154R1",
    name: "E1.2N 1000 Ekip Touch LI 3p WMP",
    category: "ACB",
  },
  {
    mpn: "1SFL427001R1300",
    name: "CONTACTOR AF116-30-00-13",
    category: "Contactor",
  },
  {
    mpn: "1SBN030111R1000",
    name: "VEM4 Mechanical & Elect. Interlock Unit",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA038320R1",
    name: "UVD 220/250VE1/6-T7-X1-T8-E1.2/6.2-XT7/M",
    category: "CB Accessory",
  },
  {
    mpn: "1SVR405613R3000",
    name: "RELAY CR-M230AC4, 230V AC, 4COS",
    category: "Relay",
  },
  { mpn: "1SDA067392R1", name: "XT1C 160 TMD 32-450 3p F F", category: "MCCB" },
  {
    mpn: "1SDA100763R1",
    name: "XT6H 800 Ekip Dip LS/I In=800 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA104944R1",
    name: "YU XT5-XT6 220..240 Vac - 220..250 Vdc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA071194R1",
    name: "E4.2N 4000 Ekip Touch LI 3p FHR",
    category: "ACB",
  },
  {
    mpn: "1SBN010120R1011",
    name: "CAL4-11 Auxiliary contact 1C 1O",
    category: "Contactor Accessory",
  },
  {
    mpn: "1SBL281024R8010",
    name: "CONTACTOR UA30-30-10RA 230V 50/60Hz",
    category: "Contactor",
  },
  { mpn: "2CDS251001R0254", name: "S201 - C25", category: "MCB" },
  { mpn: "2CDS251001R0634", name: "S201 - C63", category: "MCB" },
  {
    mpn: "2CDS281001R0164",
    name: "S201P-C16 Miniature Circuit Breaker C-Ch",
    category: "MCB",
  },
  {
    mpn: "2CDS281001R0204",
    name: "S201P-C20 Miniature Circuit Breaker C-Ch",
    category: "MCB",
  },
  {
    mpn: "2CDS281001R0254",
    name: "S201P-C25 Miniature Circuit Breaker C-Ch",
    category: "MCB",
  },
  { mpn: "2CDS253001R0504", name: "S203 - C50", category: "MCB" },
  {
    mpn: "2CDS273001R0324",
    name: "S203M-C 32 Mini Circuit Breaker C-Char.,",
    category: "MCB",
  },
  {
    mpn: "2CDS283001R0401",
    name: "S203P-D40 Miniature Circuit Breaker D-Ch",
    category: "MCB",
  },
  {
    mpn: "2CDS283001R0634",
    name: "S203P-C63 Miniature Circuit Breaker C-Ch",
    category: "MCB",
  },
  {
    mpn: "2CCS883001R0804",
    name: "S803C-C80 High Performance MCB",
    category: "MCB",
  },
  {
    mpn: "2CSF202006R1250",
    name: "FH202 AC-25/0,03 - Residual Current Dev",
    category: "RCCB",
  },
  { mpn: "2CSF204006R1250", name: "FH204 AC-25/0.03", category: "RCCB" },
  {
    mpn: "2CSF204006R1400",
    name: "FH204 AC-40/0,03 - Residual Current Dev",
    category: "RCCB",
  },
  { mpn: "2CDS211001R0254", name: "SH201-C 25", category: "MCB" },
  { mpn: "2CDS253001R0404", name: "S203 - C40", category: "MCB" },
  {
    mpn: "2CSF202006R1400",
    name: "FH202 AC-40/0,03 - Residual Current Dev",
    category: "RCCB",
  },
  { mpn: "1SYG235081R4051", name: "M1M 10 VAF Meter", category: "Device" },
  { mpn: "2CDS211001R0204", name: "SH201-C 20", category: "MCB" },
  { mpn: "2CDS211001R0324", name: "SH201-C 32", category: "MCB" },
  {
    mpn: "1SDA071204R1",
    name: "E4.2S 4000 Ekip Touch LI 3p FHR",
    category: "ACB",
  },
  {
    mpn: "1SDA062770R1",
    name: "T7H 1000 PR231/P LS/I In=1000A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054348R1",
    name: "T5H 400 PR221DS-LS/I In=320 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068515R1",
    name: "XT4H 250 Ekip LS/I In=250A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA062914R1",
    name: "T7H 1250 PR231/P LS/I In=1250A 3p F F M",
    category: "MCCB",
  },
  {
    mpn: "1SDA054349R1",
    name: "T5H 400 PR221DS-LS/I In=400 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054316R1",
    name: "T5N 400 PR221DS-LS/I In=320 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067861R1",
    name: "XT2H 160 Ekip LS/I In=160A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA062738R1",
    name: "T7S 1000 PR231/P LS/I In=1000A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA060268R1",
    name: "T6N 800 PR221DS-LS/I In=800 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054396R1",
    name: "T5N 630 PR221DS-LS/I In=630 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054317R1",
    name: "T5N 400 PR221DS-LS/I In=400 CIR BREAKER,",
    category: "MCCB",
  },
  {
    mpn: "1SDA067058R1",
    name: "XT2N 160 Ekip LS/I In=160A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067057R1",
    name: "XT2N 160 Ekip LS/I In=100A 3p F F",
    category: "MCCB",
  },
  { mpn: "2CDS253001R0254", name: "S203 - C25", category: "MCB" },
  { mpn: "2CDS253001R0164", name: "S203 - C16", category: "MCB" },
  { mpn: "2CDS251001R0324", name: "S201 - C32", category: "MCB" },
  { mpn: "2CDS251001R0164", name: "S201 - C16", category: "MCB" },
  {
    mpn: "1SBL137001R1310",
    name: "CONTACTOR AF09-30-10-13 3P 100-250VAC/DC",
    category: "Contactor",
  },
  {
    mpn: "2CDS273001R0404",
    name: "S203M-C 40 Mini Circuit Breaker C-Char.,",
    category: "MCB",
  },
  {
    mpn: "2CDS273001R0254",
    name: "S203M-C 25 Mini Circuit Breaker C-Char.,",
    category: "MCB",
  },
  {
    mpn: "2CSF204006R1630",
    name: "FH204 AC-63/0,03 - Residual Current Dev",
    category: "RCCB",
  },
  {
    mpn: "2CDS282001R0404",
    name: "S202P-C40 Miniature Circuit Breaker C-Ch",
    category: "MCB",
  },
  {
    mpn: "1SDA073244R1",
    name: "E6.2H 5000 Ekip Touch LI 4p WMP",
    category: "ACB",
  },
  { mpn: "1SDA073918R1", name: "E6.2 W FP Iu=5000 4p HR HR", category: "ACB" },
  {
    mpn: "1SDA070884R1",
    name: "E1.2N 1600 Ekip Touch LI 3p F F",
    category: "ACB",
  },
  {
    mpn: "1SDA071024R1",
    name: "E2.2B 2000 Ekip Touch LI 3p FHR",
    category: "ACB",
  },
  {
    mpn: "1SDA063026R1",
    name: "T7H 1600 PR231/P LS/I In=1600A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA073124R1",
    name: "E4.2N 3200 Ekip Touch LI 4p WMP",
    category: "ACB",
  },
  { mpn: "1SDA073914R1", name: "E4.2 W FP Iu=3200 4p HR HR", category: "ACB" },
  {
    mpn: "1SDA054404R1",
    name: "T5S 630 PR221DS-LS/I In=630 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054125R1",
    name: "T4S 320 PR221DS-LS/I In=320 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA073711R1",
    name: "M  E1.2 220-250 VAC/DC",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA062866R1",
    name: "T7S 1250 PR231/P LS/I In=1250A 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SBL237001R1300",
    name: "CONTACTOR AF26-30-00-13 100-250VDC50/60H",
    category: "Contactor",
  },
  {
    mpn: "1SDA071264R1",
    name: "E6.2H 5000 Ekip Touch LI 3p FHR",
    category: "ACB",
  },
  {
    mpn: "1SDA071424R1",
    name: "E1.2C 1000 Ekip Touch LI 4p F F",
    category: "ACB",
  },
  {
    mpn: "1SDA071464R1",
    name: "E1.2C 1250 Ekip Touch LI 4p F F",
    category: "ACB",
  },
  {
    mpn: "1SDA054397R1",
    name: "T5N 630 PR221DS-I In=630 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA054319R1",
    name: "T5N 400 PR221DS-I In=400 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068131R1",
    name: "XT4N 250 Ekip I In=250A 3p F F",
    category: "MCCB",
  },
  { mpn: "2CDS253001R0204", name: "S203 - C20", category: "MCB" },
  {
    mpn: "1SDA067398R1",
    name: "XT1C 160 TMD 125-1250 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA067397R1",
    name: "XT1C 160 TMD 100-1000 3p F F",
    category: "MCCB",
  },
  { mpn: "1SDA067396R1", name: "XT1C 160 TMD 80-800 3p F F", category: "MCCB" },
  { mpn: "1SDA067395R1", name: "XT1C 160 TMD 63-630 3p F F", category: "MCCB" },
  { mpn: "1SDA067393R1", name: "XT1C 160 TMD 40-450 3p F F", category: "MCCB" },
  { mpn: "1SDA067391R1", name: "XT1C 160 TMD 25-450 3p F F", category: "MCCB" },
  {
    mpn: "1SDA067399R1",
    name: "XT1C 160 TMD 160-1600 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068058R1",
    name: "XT3N 250 TMD 200-2000 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA068092R1",
    name: "XT4N 250 TMA 250-2500 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA060236R1",
    name: "T6S 630 PR221DS-LS/I In=630 3p F F",
    category: "MCCB",
  },
  {
    mpn: "1SDA062754R1",
    name: "T7S 1000 PR231/P LS/I In=1000A 3p F F M",
    category: "MCCB",
  },
  {
    mpn: "1SDA070874R1",
    name: "E1.2C 1600 Ekip Touch LI 3p F F",
    category: "ACB",
  },
  {
    mpn: "1SBL387001R1300",
    name: "CONTACTOR AF65-30-00-13 100-250VDC50/60H",
    category: "Contactor",
  },
  {
    mpn: "1SBL347001R1300",
    name: "AF40-30-00-13 100-250V50/60HZ-DC",
    category: "Contactor",
  },
  {
    mpn: "1SBL367001R1300",
    name: "CONTACTOR AF52-30-00-13 100-250VDC50/60H",
    category: "Contactor",
  },
  {
    mpn: "1SBL397001R1300",
    name: "AF80-30-00-13 100-250V50/60HZ-DC Contact",
    category: "Contactor",
  },
  {
    mpn: "1SBL407001R1300",
    name: "CONTACTOR AF96-30-00-13 100-250VDC50/60H",
    category: "Contactor",
  },
  {
    mpn: "1SAX351001R1101",
    name: "EF146-150 Electronic Overload Relay",
    category: "Overload",
  },
  {
    mpn: "1SAX331001R1102",
    name: "EF65-56 Electronic Overload Relay",
    category: "Overload",
  },
  {
    mpn: "1SAX341001R1101",
    name: "EF96-100 Electronic Overload Relay",
    category: "Overload",
  },
  {
    mpn: "1SAX331001R1101",
    name: "EF65-70 Electronic Overload Relay",
    category: "Overload",
  },
  {
    mpn: "1SFA898111R7000",
    name: "SOFTSTARTER#PSTX170-600-70",
    category: "Motor Starter",
  },
  {
    mpn: "1SFA898110R7000",
    name: "SOFTSTARTER#PSTX142-600-70",
    category: "Motor Starter",
  },
  {
    mpn: "1SFA898109R7000",
    name: "SOFTSTARTER#PSTX105-600-70",
    category: "Motor Starter",
  },
  {
    mpn: "1SFA898112R7000",
    name: "SOFTSTARTER#PSTX210-600-70",
    category: "Motor Starter",
  },
  {
    mpn: "1SFA898113R7000",
    name: "SOFTSTARTER#PSTX250-600-70",
    category: "Motor Starter",
  },
  {
    mpn: "1SDA054897R1",
    name: "MOE T4-T5 220...250 Vac/dc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA066460R1",
    name: "MOD XT1-XT3 220...250V ac/dc",
    category: "CB Accessory",
  },
  {
    mpn: "1SDA066317R1",
    name: "SOR XT1..XT4 220...240 Vac-220...250 Vdc",
    category: "CB Accessory",
  },
  { mpn: "1SYG207591R4051", name: "M1M 12", category: "Device" },
];

const categories = [
  { name: "RCCB", quantityMax: 100 },
  { name: "MCB", quantityMax: 1000 },
  { name: "Switch Disconnector", quantityMax: 100 },
  { name: "Fuse Switch", quantityMax: 100 },
  { name: "ACB", quantityMax: 10 },
  { name: "Contactor", quantityMax: 100 },
  { name: "Motor Starter", quantityMax: 100 },
  { name: "Contactor Accessory", quantityMax: 100 },
  { name: "Device", quantityMax: 100 },
  { name: "Relay", quantityMax: 1000 },
  { name: "Overload", quantityMax: 100 },
];

describe("Create categories and items from data", () => {
  const testEmail = "guest@electrosafe.com";
  const password = "ValidPassword1";
  const ABB = "ABB";
  const AUTO_GENERATED = "This item was automatically generated";
  const randomNumber = (max) => Math.ceil(Math.random() * max);

  const sidebarInventoryButton = "#nav-inventory";
  const newItemButton = "button[name=newItem]";
  const newCategoryButton = "button[name=newCategory]";
  const saveOptionButton = "button[name=saveOption]";
  const saveFormButton = "button[name=saveForm]";
  const saveItemButton = "button[name=saveItem]";

  const newOptionInput = "input[name=newOption]";
  const categorySelectInput = "#category";
  const nameInput = "input[name=name]";
  const mpnInput = "input[name=mpn]";
  const makeInput = "input[name=make]";
  const quantityInput = "input[name=quantity]";
  const notesInput = "input[name=notes]";
  const categorySelectFirstOption = "#category-option-0";

  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
    const loginButton = cy.get("button").contains(/sign in/i);
    const emailField = cy.get("input[name=email]");
    const passwordField = cy.get("input[name=password]");
    emailField.type(testEmail);
    passwordField.type(password);
    loginButton.click();
    cy.location().should(({ href }) => {
      expect(href).to.eq("http://localhost:5173/home");
    });
  });

  it("Adds a new categories and items", () => {
    cy.get(sidebarInventoryButton).click();
    cy.get(newItemButton).click();

    categories.forEach((category) => {
      cy.get(newCategoryButton).click();
      cy.get(newOptionInput).type(category.name);
      cy.get(saveOptionButton).click();
      cy.get(saveFormButton).click();
      abbItems.forEach((item) => {
        if (item.category !== category.name) return;
        cy.get(categorySelectInput).type(item.category);
        cy.get(categorySelectFirstOption).click();
        cy.get(nameInput).type(item.name);
        cy.get(mpnInput).type(item.mpn);
        cy.get(makeInput).type(ABB);
        cy.get(quantityInput).type(randomNumber(category.quantityMax));
        cy.get(notesInput).type(AUTO_GENERATED);
        cy.get(saveItemButton).click();
      });
    });
  });
});
