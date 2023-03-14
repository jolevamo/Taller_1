//Se declara el arreglo de 300 obejtos de los alimentos, el tipo de alimento se clasifica así: 
//1.Vegetal
//2.Animal
//3.Insecto
let alimentos = [
    {codigo:1, nombre: 'Aguacate', tipo:1, NivelEnergia:350},
    {codigo:2, nombre: 'Acedera', tipo:1, NivelEnergia:128},
    {codigo:3, nombre: 'Acelga', tipo:1, NivelEnergia:322},
    {codigo:4, nombre: 'Ajo', tipo:1, NivelEnergia:379},
    {codigo:5, nombre: 'Alcachofa', tipo:1, NivelEnergia:421},
    {codigo:6, nombre: 'Apio', tipo:1, NivelEnergia:325},
    {codigo:7, nombre: 'Berenjena', tipo:1, NivelEnergia:497},
    {codigo:8, nombre: 'Berro', tipo:1, NivelEnergia:208},
    {codigo:9, nombre: 'Betabel', tipo:1, NivelEnergia:489},
    {codigo:10, nombre: 'Calabaza', tipo:1, NivelEnergia:119},
    {codigo:11, nombre: 'Calabaza De Castilla', tipo:1, NivelEnergia:437},
    {codigo:12, nombre: 'Camote', tipo:1, NivelEnergia:436},
    {codigo:13, nombre: 'Cardillo', tipo:1, NivelEnergia:149},
    {codigo:14, nombre: 'Cebolla', tipo:1, NivelEnergia:342},
    {codigo:15, nombre: 'Chayote', tipo:1, NivelEnergia:460},
    {codigo:16, nombre: 'Chícharo', tipo:1, NivelEnergia:239},
    {codigo:17, nombre: 'Chicharos', tipo:1, NivelEnergia:480},
    {codigo:18, nombre: 'Chile Poblano', tipo:1, NivelEnergia:234},
    {codigo:19, nombre: 'Col', tipo:1, NivelEnergia:467},
    {codigo:20, nombre: 'Coliflor', tipo:1, NivelEnergia:389},
    {codigo:21, nombre: 'Ejote', tipo:1, NivelEnergia:198},
    {codigo:22, nombre: 'Elote', tipo:1, NivelEnergia:197},
    {codigo:23, nombre: 'Espárrago', tipo:1, NivelEnergia:100},
    {codigo:24, nombre: 'Espinaca', tipo:1, NivelEnergia:375},
    {codigo:25, nombre: 'Espinacas', tipo:1, NivelEnergia:109},
    {codigo:26, nombre: 'Girasol', tipo:1, NivelEnergia:212},
    {codigo:27, nombre: 'Hinojo', tipo:1, NivelEnergia:473},
    {codigo:28, nombre: 'Hongos', tipo:1, NivelEnergia:473},
    {codigo:29, nombre: 'Jitomate', tipo:1, NivelEnergia:345},
    {codigo:30, nombre: 'Lechuga', tipo:1, NivelEnergia:337},
    {codigo:31, nombre: 'Nabo', tipo:1, NivelEnergia:458},
    {codigo:32, nombre: 'Nopales', tipo:1, NivelEnergia:265},
    {codigo:33, nombre: 'Ortiga', tipo:1, NivelEnergia:471},
    {codigo:34, nombre: 'Papa', tipo:1, NivelEnergia:256},
    {codigo:35, nombre: 'Pepino', tipo:1, NivelEnergia:213},
    {codigo:36, nombre: 'Rábano', tipo:1, NivelEnergia:466},
    {codigo:37, nombre: 'Romeritos', tipo:1, NivelEnergia:448},
    {codigo:38, nombre: 'Tomate', tipo:1, NivelEnergia:474},
    {codigo:39, nombre: 'Verdolagas', tipo:1, NivelEnergia:314},
    {codigo:40, nombre: 'Zanahoria', tipo:1, NivelEnergia:227},
    {codigo:41, nombre: 'Gato', tipo:2, NivelEnergia:369},
    {codigo:42, nombre: 'Vaca', tipo:2, NivelEnergia:269},
    {codigo:43, nombre: 'Perro', tipo:2, NivelEnergia:443},
    {codigo:44, nombre: 'Burro', tipo:2, NivelEnergia:156},
    {codigo:45, nombre: 'Pato', tipo:2, NivelEnergia:409},
    {codigo:46, nombre: 'Cabra', tipo:2, NivelEnergia:174},
    {codigo:47, nombre: 'Ganso', tipo:2, NivelEnergia:108},
    {codigo:48, nombre: 'Gallina', tipo:2, NivelEnergia:113},
    {codigo:49, nombre: 'Caballo', tipo:2, NivelEnergia:338},
    {codigo:50, nombre: 'Cerdo', tipo:2, NivelEnergia:105},
    {codigo:51, nombre: 'Oveja', tipo:2, NivelEnergia:141},
    {codigo:52, nombre: 'Pavo', tipo:2, NivelEnergia:405},
    {codigo:53, nombre: 'Armadillo', tipo:2, NivelEnergia:444},
    {codigo:54, nombre: 'Elefante', tipo:2, NivelEnergia:160},
    {codigo:55, nombre: 'Panda gigante', tipo:2, NivelEnergia:213},
    {codigo:56, nombre: 'Jirafa', tipo:2, NivelEnergia:483},
    {codigo:57, nombre: 'León', tipo:2, NivelEnergia:222},
    {codigo:58, nombre: 'Chango', tipo:2, NivelEnergia:232},
    {codigo:59, nombre: 'Tortuga', tipo:2, NivelEnergia:471},
    {codigo:60, nombre: 'Cebra', tipo:2, NivelEnergia:408},
    {codigo:61, nombre: 'Puma', tipo:2, NivelEnergia:224},
    {codigo:62, nombre: 'Delfín', tipo:2, NivelEnergia:500},
    {codigo:63, nombre: 'Emú', tipo:2, NivelEnergia:178},
    {codigo:64, nombre: 'Águila', tipo:2, NivelEnergia:370},
    {codigo:65, nombre: 'Canguro', tipo:2, NivelEnergia:290},
    {codigo:66, nombre: 'Leopardo', tipo:2, NivelEnergia:440},
    {codigo:67, nombre: 'Alce', tipo:2, NivelEnergia:479},
    {codigo:68, nombre: 'Rinoceronte', tipo:2, NivelEnergia:286},
    {codigo:69, nombre: 'Víbora', tipo:2, NivelEnergia:193},
    {codigo:70, nombre: 'Tigre', tipo:2, NivelEnergia:210},
    {codigo:71, nombre: 'Ballena', tipo:2, NivelEnergia:233},
    {codigo:72, nombre: 'Anémona', tipo:2, NivelEnergia:198},
    {codigo:73, nombre: 'Cangrejo', tipo:2, NivelEnergia:137},
    {codigo:74, nombre: 'Calamar', tipo:2, NivelEnergia:467},
    {codigo:75, nombre: 'Anguila', tipo:2, NivelEnergia:493},
    {codigo:76, nombre: 'Medusa', tipo:2, NivelEnergia:457},
    {codigo:77, nombre: 'Pulpo', tipo:2, NivelEnergia:124},
    {codigo:78, nombre: 'Ostión', tipo:2, NivelEnergia:456},
    {codigo:79, nombre: 'Tiburón', tipo:2, NivelEnergia:107},
    {codigo:80, nombre: 'Camarón', tipo:2, NivelEnergia:288},
    {codigo:81, nombre: 'Atún', tipo:2, NivelEnergia:259},
    {codigo:82, nombre: 'Periquito', tipo:2, NivelEnergia:286},
    {codigo:83, nombre: 'Gato', tipo:2, NivelEnergia:341},
    {codigo:84, nombre: 'Perro', tipo:2, NivelEnergia:123},
    {codigo:85, nombre: 'Pez dorado', tipo:2, NivelEnergia:472},
    {codigo:86, nombre: 'Conejillo de indias', tipo:2, NivelEnergia:315},
    {codigo:87, nombre: 'Hámster', tipo:2, NivelEnergia:148},
    {codigo:88, nombre: 'Ratón', tipo:2, NivelEnergia:430},
    {codigo:89, nombre: 'Conejo', tipo:2, NivelEnergia:446},
    {codigo:90, nombre: 'Hormiga', tipo:3, NivelEnergia:269},
    {codigo:91, nombre: 'Abeja', tipo:3, NivelEnergia:452},
    {codigo:92, nombre: 'Mariposa', tipo:3, NivelEnergia:238},
    {codigo:93, nombre: 'Cucaracha', tipo:3, NivelEnergia:340},
    {codigo:94, nombre: 'Pulga', tipo:3, NivelEnergia:404},
    {codigo:95, nombre: 'Avispón', tipo:3, NivelEnergia:204},
    {codigo:96, nombre: 'Mosquito', tipo:3, NivelEnergia:356},
    {codigo:97, nombre: 'Liendre', tipo:3, NivelEnergia:459},
    {codigo:98, nombre: 'Araña', tipo:3, NivelEnergia:259},
    {codigo:99, nombre: 'Avispa', tipo:3, NivelEnergia:193},
    {codigo:100, nombre: 'Hormiga', tipo:3, NivelEnergia:198},
    {codigo:101, nombre: 'Abeja', tipo:3, NivelEnergia:122},
    {codigo:102, nombre: 'Mariposa', tipo:3, NivelEnergia:233},
    {codigo:103, nombre: 'Cucaracha', tipo:3, NivelEnergia:116},
    {codigo:104, nombre: 'Pulga', tipo:3, NivelEnergia:360},
    {codigo:105, nombre: 'Avispón', tipo:3, NivelEnergia:383},
    {codigo:106, nombre: 'Mosquito', tipo:3, NivelEnergia:479},
    {codigo:107, nombre: 'Liendre', tipo:3, NivelEnergia:256},
    {codigo:108, nombre: 'Araña', tipo:3, NivelEnergia:223},
    {codigo:109, nombre: 'Avispa', tipo:3, NivelEnergia:219},
    {codigo:110, nombre: 'Aguacate', tipo:1, NivelEnergia:282},
    {codigo:111, nombre: 'Acedera', tipo:1, NivelEnergia:492},
    {codigo:112, nombre: 'Acelga', tipo:1, NivelEnergia:496},
    {codigo:113, nombre: 'Ajo', tipo:1, NivelEnergia:258},
    {codigo:114, nombre: 'Alcachofa', tipo:1, NivelEnergia:476},
    {codigo:115, nombre: 'Apio', tipo:1, NivelEnergia:249},
    {codigo:116, nombre: 'Berenjena', tipo:1, NivelEnergia:202},
    {codigo:117, nombre: 'Berro', tipo:1, NivelEnergia:462},
    {codigo:118, nombre: 'Betabel', tipo:1, NivelEnergia:420},
    {codigo:119, nombre: 'Calabaza', tipo:1, NivelEnergia:461},
    {codigo:120, nombre: 'Calabaza De Castilla', tipo:1, NivelEnergia:486},
    {codigo:121, nombre: 'Camote', tipo:1, NivelEnergia:295},
    {codigo:122, nombre: 'Cardillo', tipo:1, NivelEnergia:387},
    {codigo:123, nombre: 'Cebolla', tipo:1, NivelEnergia:243},
    {codigo:124, nombre: 'Chayote', tipo:1, NivelEnergia:332},
    {codigo:125, nombre: 'Chícharo', tipo:1, NivelEnergia:331},
    {codigo:126, nombre: 'Chicharos', tipo:1, NivelEnergia:136},
    {codigo:127, nombre: 'Chile Poblano', tipo:1, NivelEnergia:307},
    {codigo:128, nombre: 'Col', tipo:1, NivelEnergia:310},
    {codigo:129, nombre: 'Coliflor', tipo:1, NivelEnergia:373},
    {codigo:130, nombre: 'Ejote', tipo:1, NivelEnergia:237},
    {codigo:131, nombre: 'Elote', tipo:1, NivelEnergia:370},
    {codigo:132, nombre: 'Espárrago', tipo:1, NivelEnergia:366},
    {codigo:133, nombre: 'Espinaca', tipo:1, NivelEnergia:261},
    {codigo:134, nombre: 'Espinacas', tipo:1, NivelEnergia:479},
    {codigo:135, nombre: 'Girasol', tipo:1, NivelEnergia:476},
    {codigo:136, nombre: 'Hinojo', tipo:1, NivelEnergia:126},
    {codigo:137, nombre: 'Hongos', tipo:1, NivelEnergia:353},
    {codigo:138, nombre: 'Jitomate', tipo:1, NivelEnergia:258},
    {codigo:139, nombre: 'Lechuga', tipo:1, NivelEnergia:267},
    {codigo:140, nombre: 'Nabo', tipo:1, NivelEnergia:219},
    {codigo:141, nombre: 'Nopales', tipo:1, NivelEnergia:155},
    {codigo:142, nombre: 'Ortiga', tipo:1, NivelEnergia:493},
    {codigo:143, nombre: 'Papa', tipo:1, NivelEnergia:106},
    {codigo:144, nombre: 'Pepino', tipo:1, NivelEnergia:318},
    {codigo:145, nombre: 'Rábano', tipo:1, NivelEnergia:280},
    {codigo:146, nombre: 'Romeritos', tipo:1, NivelEnergia:297},
    {codigo:147, nombre: 'Tomate', tipo:1, NivelEnergia:442},
    {codigo:148, nombre: 'Verdolagas', tipo:1, NivelEnergia:321},
    {codigo:149, nombre: 'Zanahoria', tipo:1, NivelEnergia:159},
    {codigo:150, nombre: 'Gato', tipo:2, NivelEnergia:380},
    {codigo:151, nombre: 'Vaca', tipo:2, NivelEnergia:274},
    {codigo:152, nombre: 'Perro', tipo:2, NivelEnergia:133},
    {codigo:153, nombre: 'Burro', tipo:2, NivelEnergia:104},
    {codigo:154, nombre: 'Pato', tipo:2, NivelEnergia:320},
    {codigo:155, nombre: 'Cabra', tipo:2, NivelEnergia:425},
    {codigo:156, nombre: 'Ganso', tipo:2, NivelEnergia:178},
    {codigo:157, nombre: 'Gallina', tipo:2, NivelEnergia:258},
    {codigo:158, nombre: 'Caballo', tipo:2, NivelEnergia:423},
    {codigo:159, nombre: 'Cerdo', tipo:2, NivelEnergia:416},
    {codigo:160, nombre: 'Oveja', tipo:2, NivelEnergia:301},
    {codigo:161, nombre: 'Pavo', tipo:2, NivelEnergia:471},
    {codigo:162, nombre: 'Armadillo', tipo:2, NivelEnergia:482},
    {codigo:163, nombre: 'Elefante', tipo:2, NivelEnergia:448},
    {codigo:164, nombre: 'Panda gigante', tipo:2, NivelEnergia:328},
    {codigo:165, nombre: 'Jirafa', tipo:2, NivelEnergia:122},
    {codigo:166, nombre: 'León', tipo:2, NivelEnergia:452},
    {codigo:167, nombre: 'Chango', tipo:2, NivelEnergia:408},
    {codigo:168, nombre: 'Tortuga', tipo:2, NivelEnergia:493},
    {codigo:169, nombre: 'Cebra', tipo:2, NivelEnergia:446},
    {codigo:170, nombre: 'Puma', tipo:2, NivelEnergia:176},
    {codigo:171, nombre: 'Delfín', tipo:2, NivelEnergia:370},
    {codigo:172, nombre: 'Emú', tipo:2, NivelEnergia:468},
    {codigo:173, nombre: 'Águila', tipo:2, NivelEnergia:276},
    {codigo:174, nombre: 'Canguro', tipo:2, NivelEnergia:455},
    {codigo:175, nombre: 'Leopardo', tipo:2, NivelEnergia:470},
    {codigo:176, nombre: 'Alce', tipo:2, NivelEnergia:425},
    {codigo:177, nombre: 'Rinoceronte', tipo:2, NivelEnergia:366},
    {codigo:178, nombre: 'Víbora', tipo:2, NivelEnergia:199},
    {codigo:179, nombre: 'Tigre', tipo:2, NivelEnergia:412},
    {codigo:180, nombre: 'Ballena', tipo:2, NivelEnergia:132},
    {codigo:181, nombre: 'Anémona', tipo:2, NivelEnergia:434},
    {codigo:182, nombre: 'Cangrejo', tipo:2, NivelEnergia:303},
    {codigo:183, nombre: 'Calamar', tipo:2, NivelEnergia:101},
    {codigo:184, nombre: 'Anguila', tipo:2, NivelEnergia:340},
    {codigo:185, nombre: 'Medusa', tipo:2, NivelEnergia:379},
    {codigo:186, nombre: 'Pulpo', tipo:2, NivelEnergia:136},
    {codigo:187, nombre: 'Ostión', tipo:2, NivelEnergia:279},
    {codigo:188, nombre: 'Tiburón', tipo:2, NivelEnergia:287},
    {codigo:189, nombre: 'Camarón', tipo:2, NivelEnergia:378},
    {codigo:190, nombre: 'Atún', tipo:2, NivelEnergia:331},
    {codigo:191, nombre: 'Periquito', tipo:2, NivelEnergia:461},
    {codigo:192, nombre: 'Gato', tipo:2, NivelEnergia:405},
    {codigo:193, nombre: 'Perro', tipo:2, NivelEnergia:406},
    {codigo:194, nombre: 'Pez dorado', tipo:2, NivelEnergia:409},
    {codigo:195, nombre: 'Conejillo de indias', tipo:2, NivelEnergia:334},
    {codigo:196, nombre: 'Hámster', tipo:2, NivelEnergia:159},
    {codigo:197, nombre: 'Ratón', tipo:2, NivelEnergia:272},
    {codigo:198, nombre: 'Conejo', tipo:2, NivelEnergia:384},
    {codigo:199, nombre: 'Hormiga', tipo:3, NivelEnergia:114},
    {codigo:200, nombre: 'Abeja', tipo:3, NivelEnergia:363},
    {codigo:201, nombre: 'Mariposa', tipo:3, NivelEnergia:281},
    {codigo:202, nombre: 'Cucaracha', tipo:3, NivelEnergia:174},
    {codigo:203, nombre: 'Pulga', tipo:3, NivelEnergia:484},
    {codigo:204, nombre: 'Avispón', tipo:3, NivelEnergia:470},
    {codigo:205, nombre: 'Mosquito', tipo:3, NivelEnergia:372},
    {codigo:206, nombre: 'Liendre', tipo:3, NivelEnergia:227},
    {codigo:207, nombre: 'Araña', tipo:3, NivelEnergia:351},
    {codigo:208, nombre: 'Avispa', tipo:3, NivelEnergia:283},
    {codigo:209, nombre: 'Hormiga', tipo:3, NivelEnergia:439},
    {codigo:210, nombre: 'Abeja', tipo:3, NivelEnergia:328},
    {codigo:211, nombre: 'Mariposa', tipo:3, NivelEnergia:374},
    {codigo:212, nombre: 'Cucaracha', tipo:3, NivelEnergia:179},
    {codigo:213, nombre: 'Pulga', tipo:3, NivelEnergia:305},
    {codigo:214, nombre: 'Avispón', tipo:3, NivelEnergia:284},
    {codigo:215, nombre: 'Mosquito', tipo:3, NivelEnergia:429},
    {codigo:216, nombre: 'Liendre', tipo:3, NivelEnergia:394},
    {codigo:217, nombre: 'Araña', tipo:3, NivelEnergia:468},
    {codigo:218, nombre: 'Avispa', tipo:3, NivelEnergia:238},
    {codigo:219, nombre: 'Aguacate', tipo:1, NivelEnergia:257},
    {codigo:220, nombre: 'Acedera', tipo:1, NivelEnergia:152},
    {codigo:221, nombre: 'Acelga', tipo:1, NivelEnergia:275},
    {codigo:222, nombre: 'Ajo', tipo:1, NivelEnergia:460},
    {codigo:223, nombre: 'Alcachofa', tipo:1, NivelEnergia:467},
    {codigo:224, nombre: 'Apio', tipo:1, NivelEnergia:405},
    {codigo:225, nombre: 'Berenjena', tipo:1, NivelEnergia:307},
    {codigo:226, nombre: 'Berro', tipo:1, NivelEnergia:280},
    {codigo:227, nombre: 'Betabel', tipo:1, NivelEnergia:312},
    {codigo:228, nombre: 'Calabaza', tipo:1, NivelEnergia:363},
    {codigo:229, nombre: 'Calabaza De Castilla', tipo:1, NivelEnergia:367},
    {codigo:230, nombre: 'Camote', tipo:1, NivelEnergia:308},
    {codigo:231, nombre: 'Cardillo', tipo:1, NivelEnergia:391},
    {codigo:232, nombre: 'Cebolla', tipo:1, NivelEnergia:341},
    {codigo:233, nombre: 'Chayote', tipo:1, NivelEnergia:240},
    {codigo:234, nombre: 'Chícharo', tipo:1, NivelEnergia:260},
    {codigo:235, nombre: 'Chicharos', tipo:1, NivelEnergia:373},
    {codigo:236, nombre: 'Chile Poblano', tipo:1, NivelEnergia:188},
    {codigo:237, nombre: 'Col', tipo:1, NivelEnergia:424},
    {codigo:238, nombre: 'Coliflor', tipo:1, NivelEnergia:460},
    {codigo:239, nombre: 'Ejote', tipo:1, NivelEnergia:374},
    {codigo:240, nombre: 'Elote', tipo:1, NivelEnergia:173},
    {codigo:241, nombre: 'Espárrago', tipo:1, NivelEnergia:364},
    {codigo:242, nombre: 'Espinaca', tipo:1, NivelEnergia:209},
    {codigo:243, nombre: 'Espinacas', tipo:1, NivelEnergia:365},
    {codigo:244, nombre: 'Girasol', tipo:1, NivelEnergia:256},
    {codigo:245, nombre: 'Hinojo', tipo:1, NivelEnergia:186},
    {codigo:246, nombre: 'Hongos', tipo:1, NivelEnergia:219},
    {codigo:247, nombre: 'Jitomate', tipo:1, NivelEnergia:110},
    {codigo:248, nombre: 'Lechuga', tipo:1, NivelEnergia:388},
    {codigo:249, nombre: 'Nabo', tipo:1, NivelEnergia:171},
    {codigo:250, nombre: 'Nopales', tipo:1, NivelEnergia:105},
    {codigo:251, nombre: 'Ortiga', tipo:1, NivelEnergia:215},
    {codigo:252, nombre: 'Papa', tipo:1, NivelEnergia:115},
    {codigo:253, nombre: 'Pepino', tipo:1, NivelEnergia:193},
    {codigo:254, nombre: 'Rábano', tipo:1, NivelEnergia:467},
    {codigo:255, nombre: 'Romeritos', tipo:1, NivelEnergia:442},
    {codigo:256, nombre: 'Tomate', tipo:1, NivelEnergia:151},
    {codigo:257, nombre: 'Verdolagas', tipo:1, NivelEnergia:472},
    {codigo:258, nombre: 'Zanahoria', tipo:1, NivelEnergia:362},
    {codigo:259, nombre: 'Gato', tipo:2, NivelEnergia:395},
    {codigo:260, nombre: 'Vaca', tipo:2, NivelEnergia:176},
    {codigo:261, nombre: 'Perro', tipo:2, NivelEnergia:449},
    {codigo:262, nombre: 'Burro', tipo:2, NivelEnergia:296},
    {codigo:263, nombre: 'Pato', tipo:2, NivelEnergia:224},
    {codigo:264, nombre: 'Cabra', tipo:2, NivelEnergia:366},
    {codigo:265, nombre: 'Ganso', tipo:2, NivelEnergia:397},
    {codigo:266, nombre: 'Gallina', tipo:2, NivelEnergia:152},
    {codigo:267, nombre: 'Caballo', tipo:2, NivelEnergia:367},
    {codigo:268, nombre: 'Cerdo', tipo:2, NivelEnergia:180},
    {codigo:269, nombre: 'Oveja', tipo:2, NivelEnergia:178},
    {codigo:270, nombre: 'Pavo', tipo:2, NivelEnergia:423},
    {codigo:271, nombre: 'Armadillo', tipo:2, NivelEnergia:260},
    {codigo:272, nombre: 'Elefante', tipo:2, NivelEnergia:169},
    {codigo:273, nombre: 'Panda gigante', tipo:2, NivelEnergia:441},
    {codigo:274, nombre: 'Jirafa', tipo:2, NivelEnergia:326},
    {codigo:275, nombre: 'León', tipo:2, NivelEnergia:286},
    {codigo:276, nombre: 'Chango', tipo:2, NivelEnergia:323},
    {codigo:277, nombre: 'Tortuga', tipo:2, NivelEnergia:130},
    {codigo:278, nombre: 'Cebra', tipo:2, NivelEnergia:301},
    {codigo:279, nombre: 'Puma', tipo:2, NivelEnergia:259},
    {codigo:280, nombre: 'Delfín', tipo:2, NivelEnergia:235},
    {codigo:281, nombre: 'Emú', tipo:2, NivelEnergia:426},
    {codigo:282, nombre: 'Águila', tipo:2, NivelEnergia:207},
    {codigo:283, nombre: 'Canguro', tipo:2, NivelEnergia:338},
    {codigo:284, nombre: 'Leopardo', tipo:2, NivelEnergia:389},
    {codigo:285, nombre: 'Alce', tipo:2, NivelEnergia:271},
    {codigo:286, nombre: 'Rinoceronte', tipo:2, NivelEnergia:225},
    {codigo:287, nombre: 'Víbora', tipo:2, NivelEnergia:253},
    {codigo:288, nombre: 'Tigre', tipo:2, NivelEnergia:131},
    {codigo:289, nombre: 'Ballena', tipo:2, NivelEnergia:322},
    {codigo:290, nombre: 'Anémona', tipo:2, NivelEnergia:231},
    {codigo:291, nombre: 'Cangrejo', tipo:2, NivelEnergia:476},
    {codigo:292, nombre: 'Calamar', tipo:2, NivelEnergia:162},
    {codigo:293, nombre: 'Anguila', tipo:2, NivelEnergia:195},
    {codigo:294, nombre: 'Medusa', tipo:2, NivelEnergia:140},
    {codigo:295, nombre: 'Pulpo', tipo:2, NivelEnergia:206},
    {codigo:296, nombre: 'Ostión', tipo:2, NivelEnergia:279},
    {codigo:297, nombre: 'Tiburón', tipo:2, NivelEnergia:184},
    {codigo:298, nombre: 'Camarón', tipo:2, NivelEnergia:178},
    {codigo:299, nombre: 'Atún', tipo:2, NivelEnergia:446},
    {codigo:300, nombre: 'Periquito', tipo:2, NivelEnergia:308}
]

//Se declara función para filtrar los alimentos de tipo vegetal con más de 200 en nivel de energía
function vegetalesConMasDe200(arreglo,sumarNivelAportado){
    setTimeout(function(){
        let filtro = arreglo.filter(function(alimento){
            return(alimento.tipo==1&&alimento.NivelEnergia>200)
        })
        
        sumarNivelAportado(filtro)
    },5000)
}


//Se declara variable para sumar los niveles de los vegetales que tenga más de 200 niveles de energía
let sumatoriaNivel = 0

//Se invoca función 1 y se declara función 2 (Callback)
vegetalesConMasDe200(alimentos,function(filtro){
    filtro.forEach(function(suma){
        sumatoriaNivel = sumatoriaNivel + suma.NivelEnergia
    }) 
    console.log("Los alimentos que cumplen con la condición indicada son:");
    console.log(filtro);
    console.log("La sumatoria del nivel de estos alimentos es:");
    console.log(sumatoriaNivel);
})
