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
    }
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2500);
    })
}

