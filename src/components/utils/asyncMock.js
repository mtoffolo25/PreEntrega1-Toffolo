
const productos = [
    {
        id: "1",
        nombre: "Procesador Intel Core i3 10105F 4.4GHz Turbo Socket 1200 Comet Lake",
        precio: "$28.950",
        categoria: "Procesadores",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25816_Procesador_Intel_Core_i3_10105F_4.4GHz_Turbo_Socket_1200_Comet_Lake_7a527071-grn.jpg"
    },
    {
        id: "2",
        nombre: "Procesador Intel Core i5 10400 4.3GHz Turbo Socket 1200 Comet Lake",
        precio: "$62.850",
        categoria: "Procesadores",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19422_Procesador_Intel_Core_i5_10400_4.3GHz_Turbo_Socket_1200_Comet_Lake_7f69efff-grn.jpg"
    },
    {
        id: "3",
        nombre: "Procesador Intel Core i7 10700 4.8GHz Turbo Socket 1200 Comet Lake",
        precio: "$120.000",
        categoria: "Procesadores",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19228_Procesador_Intel_Core_i7_10700_4.8GHz_Turbo_Socket_1200_Comet_Lake_e3d7d847-grn.jpg"
    },
    {
        id: "4",
        nombre: "Placa de Video GeForce MSI G210 1GB DDR3 Low Profile",
        precio: "$14.350",
        categoria: "Placas de Video",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26735_Placa_de_Video_GeForce_MSI_G210_1GB_DDR3_Low_Profile_c07b4910-med.jpg"
    },
    {
        id: "5",
        nombre: "Placa de Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 Twin Fan",
        precio: "$128.600",
        categoria: "Placas de Video",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35144_Placa_de_Video_Zotac_GeForce_GTX_1660_SUPER_6GB_GDDR6_Twin_Fan_b62628e1-grn.jpg"
    },
    {
        id: "6",
        nombre: "Placa de Video GALAX GeForce RTX 3080 12GB GDDR6X SG LHR",
        precio: "$301.200",
        categoria: "Placas de Video",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35004_Placa_de_Video_GALAX_GeForce_RTX_3080_12GB_GDDR6X_SG_LHR_57bc6c43-grn.jpg"
    },
    {
        id: "7",
        nombre: "Placa de Video Zotac GeForce RTX 3080 Ti 12GB GDDR6X Trinity",
        precio: "$358.500",
        categoria: "Placas de Video",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35007_Placa_de_Video_Zotac_GeForce_RTX_3080_Ti_12GB_GDDR6X_Trinity_e1cd5292-grn.jpg"
    },
    {
        id: "8",
        nombre: "Monitor ASUS 21.5' VP228HE-J Full HD 1ms HDMI VGA",
        precio: "$56.000",
        categoria: "Monitores",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27034_Monitor_ASUS_21.5__VP228HE-J_Full_HD_1ms_HDMI_VGA_a797ab9e-grn.jpg"
    },
    {
        id: "9",
        nombre: "Monitor Samsung 24' T350 75Hz IPS Full HD FreeSync",
        precio: "$60.700",
        categoria: "Monitores",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32685_Monitor_Samsung_24__T350_75Hz_IPS_Full_HD_FreeSync_f34162c0-grn.jpg"
    },
    {
        id: "10",
        nombre: "Monitor Samsung 24' Curvo F390 Full HD FreeSync",
        precio: "$65.250",
        categoria: "Monitores",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8720_Monitor_Samsung_24___Curvo_F390_Full_HD_FreeSync_3a4722ad-grn.jpg"
    },
    {
        id: "11",
        nombre: "Monitor Gamer Samsung 24' G50 Curvo 144Hz Full HD",
        precio: "$82.850",
        categoria: "Monitores",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13394_Monitor_Gamer_Samsung_24__G50_Curvo_144Hz_Full_HD_f473d83a-grn.jpg"
    },
    {
        id: "12",
        nombre: "Auriculares HP HyperX Cloud II Red PC | PS4 | Switch | XBOX",
        precio: "$38.700",
        categoria: "Perisféricos",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11934_Auriculares_HP_HyperX_Cloud_II_Red_PC___PS4___Switch___XBOX_94ae061e-grn.jpg"
    },
    {
        id: "13",
        nombre: "Teclado Mecanico Redragon K552 Kumara White RGB Outemu Blue ESP",
        precio: "$15.600",
        categoria: "Perisféricos",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14652_Teclado_Mecanico_Redragon_K552_Kumara_White_RGB_Outemu_Blue_ESP_22b674b5-grn.jpg"
    },
    {
        id: "14",
        nombre: "Mouse Redragon Invader M719 RGB 10.000dpi",
        precio: "$6.600",
        categoria: "Perisféricos",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13006_Mouse_Redragon_Invader_M719_RGB_10.000dpi_35f6cdc8-grn.jpg"
    },
    {
        id: "15",
        nombre: "Mouse Logitech G203 Lightsync RGB White",
        precio: "$9.000",
        categoria: "Perisféricos",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19259_Mouse_Logitech_G203_Lightsync_RGB_White_e2e81b78-grn.jpg"
    },
    {
        id: "16",
        nombre: "Mouse Logitech G403 Hero Gaming",
        precio: "$16.200",
        categoria: "Perisféricos",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16589_Mouse_Logitech_G403_Hero_Gaming_d88a654b-grn.jpg"
    },
    {
        id: "17",
        nombre: "Disco Solido SSD Team 256GB GX2 530MB/s",
        precio: "10.100",
        categoria: "Almacenamiento",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33801_Disco_Solido_SSD_Team_256GB_GX2_530MB_s_7d116a15-grn.jpg"
    },
    {
        id: "18",
        nombre: "Disco Solido SSD Adata 480GB SU650 520MB/s*",
        precio: "16.500",
        categoria: "Almacenamiento",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29562_Disco_Solido_SSD_Adata_480GB_SU650_520MB_s__8b455937-grn.jpg"
    },
    {
        id: "19",
        nombre: "Disco Solido SSD M.2 Crucial 1TB P3 3500MB/s NVMe PCI-E Gen3 x4",
        precio: "41.800",
        categoria: "Almacenamiento",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34868_Disco_Solido_SSD_M.2_Crucial_1TB_P3_3500MB_s_NVMe_PCI-E_Gen3_x4_87fba598-grn.jpg"
    },



]

export const getProductos = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 2000);
    })
}

