const data = {
  categorias: [
    {
      tipo: "Whisky",
      descripcion: "Descripion detallada del licor whisky y su elaboraion.",
      paises: [
        {
          pais: "Escocia",
          regiones: ["Highlands", "Islay"],
          marcas: [
            {
              nombre: "Whisky Escocia Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma whisky 1",
                sabor: "Sabor whisky 1",
                final: "Final whisky 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 26.17,
              stockUnidades: 354,
              disponibleOnline: true,
              fundacion: 1972,
              valoracionPromedio: 4.81,
            },
            {
              nombre: "Whisky Escocia Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma whisky 2",
                sabor: "Sabor whisky 2",
                final: "Final whisky 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 42.55,
              stockUnidades: 474,
              disponibleOnline: false,
              fundacion: 1926,
              valoracionPromedio: 3.71,
            },
          ],
        },
        {
          pais: "Irlanda",
          regiones: ["Dublin", "Cork"],
          marcas: [
            {
              nombre: "Whisky Irlanda Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma whisky 1",
                sabor: "Sabor whisky 1",
                final: "Final whisky 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 84.24,
              stockUnidades: 326,
              disponibleOnline: true,
              fundacion: 1858,
              valoracionPromedio: 4.06,
            },
            {
              nombre: "Whisky Irlanda Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma whisky 2",
                sabor: "Sabor whisky 2",
                final: "Final whisky 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 46.72,
              stockUnidades: 252,
              disponibleOnline: false,
              fundacion: 1905,
              valoracionPromedio: 3.82,
            },
          ],
        },
      ],
    },
    {
      tipo: "Ron",
      descripcion: "Descripion detallada del licor ron y su elaboraion.",
      paises: [
        {
          pais: "Venezuela",
          regiones: [],
          marcas: [
            {
              nombre: "Ron Venezuela Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma ron 1",
                sabor: "Sabor ron 1",
                final: "Final ron 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 53.76,
              stockUnidades: 60,
              disponibleOnline: false,
              fundacion: 1963,
              valoracionPromedio: 4.84,
            },
            {
              nombre: "Ron Venezuela Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma ron 2",
                sabor: "Sabor ron 2",
                final: "Final ron 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 27.5,
              stockUnidades: 359,
              disponibleOnline: true,
              fundacion: 1951,
              valoracionPromedio: 4.45,
            },
          ],
        },
        {
          pais: "Cuba",
          regiones: [],
          marcas: [
            {
              nombre: "Ron Cuba Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma ron 1",
                sabor: "Sabor ron 1",
                final: "Final ron 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 48.74,
              stockUnidades: 431,
              disponibleOnline: false,
              fundacion: 1916,
              valoracionPromedio: 3.91,
            },
            {
              nombre: "Ron Cuba Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma ron 2",
                sabor: "Sabor ron 2",
                final: "Final ron 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 125.97,
              stockUnidades: 67,
              disponibleOnline: false,
              fundacion: 1926,
              valoracionPromedio: 3.92,
            },
          ],
        },
      ],
    },
    {
      tipo: "Tequila",
      descripcion: "Descripion detallada del licor tequila y su elaboraion.",
      paises: [
        {
          pais: "Mexico",
          regiones: ["Jalisco", "Nayarit"],
          marcas: [
            {
              nombre: "Tequila Mexico Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma tequila 1",
                sabor: "Sabor tequila 1",
                final: "Final tequila 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 112.35,
              stockUnidades: 60,
              disponibleOnline: false,
              fundacion: 1997,
              valoracionPromedio: 4.69,
            },
            {
              nombre: "Tequila Mexico Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma tequila 2",
                sabor: "Sabor tequila 2",
                final: "Final tequila 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 59.47,
              stockUnidades: 386,
              disponibleOnline: true,
              fundacion: 1876,
              valoracionPromedio: 3.61,
            },
          ],
        },
      ],
    },
    {
      tipo: "Vodka",
      descripcion: "Descripion detallada del licor vodka y su elaboraion.",
      paises: [
        {
          pais: "Rusia",
          regiones: ["Moscu", "San Petersburgo"],
          marcas: [
            {
              nombre: "Vodka Rusia Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma vodka 1",
                sabor: "Sabor vodka 1",
                final: "Final vodka 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 114.77,
              stockUnidades: 439,
              disponibleOnline: false,
              fundacion: 1959,
              valoracionPromedio: 4.61,
            },
            {
              nombre: "Vodka Rusia Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma vodka 2",
                sabor: "Sabor vodka 2",
                final: "Final vodka 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 87.8,
              stockUnidades: 432,
              disponibleOnline: false,
              fundacion: 1876,
              valoracionPromedio: 4.09,
            },
          ],
        },
        {
          pais: "Polonia",
          regiones: [],
          marcas: [
            {
              nombre: "Vodka Polonia Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma vodka 1",
                sabor: "Sabor vodka 1",
                final: "Final vodka 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 99.05,
              stockUnidades: 162,
              disponibleOnline: true,
              fundacion: 1979,
              valoracionPromedio: 4.93,
            },
            {
              nombre: "Vodka Polonia Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma vodka 2",
                sabor: "Sabor vodka 2",
                final: "Final vodka 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 112.35,
              stockUnidades: 124,
              disponibleOnline: true,
              fundacion: 1985,
              valoracionPromedio: 4.17,
            },
          ],
        },
      ],
    },
    {
      tipo: "Gin",
      descripcion: "Descripion detallada del licor gin y su elaboraion.",
      paises: [
        {
          pais: "Inglaterra",
          regiones: ["Londres"],
          marcas: [
            {
              nombre: "Gin Inglaterra Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma gin 1",
                sabor: "Sabor gin 1",
                final: "Final gin 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 72.05,
              stockUnidades: 94,
              disponibleOnline: false,
              fundacion: 1888,
              valoracionPromedio: 4.04,
            },
            {
              nombre: "Gin Inglaterra Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma gin 2",
                sabor: "Sabor gin 2",
                final: "Final gin 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 52.81,
              stockUnidades: 264,
              disponibleOnline: true,
              fundacion: 1859,
              valoracionPromedio: 4.86,
            },
          ],
        },
        {
          pais: "Pa\u00edses Bajos",
          regiones: [],
          marcas: [
            {
              nombre: "Gin Pa\u00edses Bajos Marca 1",
              porcentajeAlcohol: 35,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma gin 1",
                sabor: "Sabor gin 1",
                final: "Final gin 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2018,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2020,
                },
              ],
              precioUSD: 85.51,
              stockUnidades: 452,
              disponibleOnline: false,
              fundacion: 1973,
              valoracionPromedio: 4.08,
            },
            {
              nombre: "Gin Pa\u00edses Bajos Marca 2",
              porcentajeAlcohol: 36,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma gin 2",
                sabor: "Sabor gin 2",
                final: "Final gin 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2021,
                },
              ],
              precioUSD: 106.27,
              stockUnidades: 126,
              disponibleOnline: true,
              fundacion: 1869,
              valoracionPromedio: 4.53,
            },
          ],
        },
      ],
    },
    {
      tipo: "Mezcal",
      descripcion: "Descripion detallada del licor mezcal y su elaboraion.",
      paises: [
        {
          pais: "Mexico",
          regiones: ["Oaxaca", "Durango"],
          marcas: [
            {
              nombre: "Mezcal Mexico Marca 1",
              porcentajeAlcohol: 38,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma mezcal 1",
                sabor: "Sabor mezcal 1",
                final: "Final mezcal 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2021,
                },
              ],
              precioUSD: 72.74,
              stockUnidades: 201,
              disponibleOnline: true,
              fundacion: 1954,
              valoracionPromedio: 3.64,
            },
            {
              nombre: "Mezcal Mexico Marca 2",
              porcentajeAlcohol: 42,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma mezcal 2",
                sabor: "Sabor mezcal 2",
                final: "Final mezcal 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2020,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2022,
                },
              ],
              precioUSD: 70.42,
              stockUnidades: 290,
              disponibleOnline: true,
              fundacion: 1902,
              valoracionPromedio: 4.34,
            },
          ],
        },
      ],
    },
    {
      tipo: "Brandy",
      descripcion: "Descripion detallada del licor brandy y su elaboraion.",
      paises: [
        {
          pais: "España",
          regiones: ["Jerez"],
          marcas: [
            {
              nombre: "Brandy España Marca 1",
              porcentajeAlcohol: 38,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma brandy 1",
                sabor: "Sabor brandy 1",
                final: "Final brandy 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2021,
                },
              ],
              precioUSD: 49.85,
              stockUnidades: 279,
              disponibleOnline: true,
              fundacion: 1923,
              valoracionPromedio: 3.62,
            },
            {
              nombre: "Brandy España Marca 2",
              porcentajeAlcohol: 39,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma brandy 2",
                sabor: "Sabor brandy 2",
                final: "Final brandy 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2020,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2022,
                },
              ],
              precioUSD: 103.76,
              stockUnidades: 458,
              disponibleOnline: false,
              fundacion: 1907,
              valoracionPromedio: 5.0,
            },
          ],
        },
        {
          pais: "Francia",
          regiones: ["Cognac"],
          marcas: [
            {
              nombre: "Brandy Francia Marca 1",
              porcentajeAlcohol: 38,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma brandy 1",
                sabor: "Sabor brandy 1",
                final: "Final brandy 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2021,
                },
              ],
              precioUSD: 137.3,
              stockUnidades: 433,
              disponibleOnline: false,
              fundacion: 1922,
              valoracionPromedio: 3.91,
            },
            {
              nombre: "Brandy Francia Marca 2",
              porcentajeAlcohol: 39,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma brandy 2",
                sabor: "Sabor brandy 2",
                final: "Final brandy 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2020,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2022,
                },
              ],
              precioUSD: 52.8,
              stockUnidades: 267,
              disponibleOnline: false,
              fundacion: 1866,
              valoracionPromedio: 4.26,
            },
          ],
        },
      ],
    },
    {
      tipo: "Cognac",
      descripcion: "Descripion detallada del licor cognac y su elaboraion.",
      paises: [
        {
          pais: "Francia",
          regiones: ["Cognac"],
          marcas: [
            {
              nombre: "Cognac Francia Marca 1",
              porcentajeAlcohol: 38,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma cognac 1",
                sabor: "Sabor cognac 1",
                final: "Final cognac 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2021,
                },
              ],
              precioUSD: 49.0,
              stockUnidades: 150,
              disponibleOnline: false,
              fundacion: 1908,
              valoracionPromedio: 4.07,
            },
            {
              nombre: "Cognac Francia Marca 2",
              porcentajeAlcohol: 39,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma cognac 2",
                sabor: "Sabor cognac 2",
                final: "Final cognac 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2020,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2022,
                },
              ],
              precioUSD: 96.55,
              stockUnidades: 17,
              disponibleOnline: true,
              fundacion: 1929,
              valoracionPromedio: 4.89,
            },
          ],
        },
      ],
    },
    {
      tipo: "Sake",
      descripcion: "Descripion detallada del licor sake y su elaboraion.",
      paises: [
        {
          pais: "Jion",
          regiones: ["Kyoto", "Niigata"],
          marcas: [
            {
              nombre: "Sake Jion Marca 1",
              porcentajeAlcohol: 38,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma sake 1",
                sabor: "Sabor sake 1",
                final: "Final sake 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2021,
                },
              ],
              precioUSD: 48.41,
              stockUnidades: 359,
              disponibleOnline: true,
              fundacion: 1928,
              valoracionPromedio: 3.61,
            },
            {
              nombre: "Sake Jion Marca 2",
              porcentajeAlcohol: 39,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma sake 2",
                sabor: "Sabor sake 2",
                final: "Final sake 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2020,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2022,
                },
              ],
              precioUSD: 66.82,
              stockUnidades: 182,
              disponibleOnline: false,
              fundacion: 1992,
              valoracionPromedio: 4.31,
            },
          ],
        },
      ],
    },
    {
      tipo: "Absenta",
      descripcion: "Descripion detallada del licor absenta y su elaboraion.",
      paises: [
        {
          pais: "Suiza",
          regiones: ["Val-de-Travers"],
          marcas: [
            {
              nombre: "Absenta Suiza Marca 1",
              porcentajeAlcohol: 38,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma absenta 1",
                sabor: "Sabor absenta 1",
                final: "Final absenta 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2021,
                },
              ],
              precioUSD: 97.83,
              stockUnidades: 482,
              disponibleOnline: false,
              fundacion: 1933,
              valoracionPromedio: 3.62,
            },
            {
              nombre: "Absenta Suiza Marca 2",
              porcentajeAlcohol: 39,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma absenta 2",
                sabor: "Sabor absenta 2",
                final: "Final absenta 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2020,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2022,
                },
              ],
              precioUSD: 29.29,
              stockUnidades: 315,
              disponibleOnline: false,
              fundacion: 1901,
              valoracionPromedio: 4.46,
            },
          ],
        },
        {
          pais: "Francia",
          regiones: [],
          marcas: [
            {
              nombre: "Absenta Francia Marca 1",
              porcentajeAlcohol: 38,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 1",
              ],
              maridaje: {
                sugerencias: ["comida 1", "postre 2"],
                temperatura: "16-18C",
              },
              notasCata: {
                aroma: "Aroma absenta 1",
                sabor: "Sabor absenta 1",
                final: "Final absenta 1",
              },
              premios: [
                {
                  nombre: "Premio 1",
                  año: 2019,
                },
                {
                  nombre: "Medalla de oro 1",
                  año: 2021,
                },
              ],
              precioUSD: 127.66,
              stockUnidades: 301,
              disponibleOnline: true,
              fundacion: 1927,
              valoracionPromedio: 3.79,
            },
            {
              nombre: "Absenta Francia Marca 2",
              porcentajeAlcohol: 41,
              ingredientes: [
                "agua",
                "alcohol destilado",
                "ingrediente especial 2",
              ],
              maridaje: {
                sugerencias: ["comida 2", "postre 3"],
                temperatura: "17-19C",
              },
              notasCata: {
                aroma: "Aroma absenta 2",
                sabor: "Sabor absenta 2",
                final: "Final absenta 2",
              },
              premios: [
                {
                  nombre: "Premio 2",
                  año: 2020,
                },
                {
                  nombre: "Medalla de oro 2",
                  año: 2022,
                },
              ],
              precioUSD: 17.17,
              stockUnidades: 448,
              disponibleOnline: false,
              fundacion: 1991,
              valoracionPromedio: 4.72,
            },
          ],
        },
      ],
    },
  ],
  combinacionesTragos: [
    {
      nombre: "Tragos Clasicos",
      categorias: [
        ["Whisky Sour", "Old Fashioned", "Manhattan"],
        ["Daiquiri", "Cuba Libre", "Mai Tai"],
        ["Margarita", "Tequila Sunrise", "Paloma"],
      ],
    },
    {
      nombre: "Tragos Modernos",
      categorias: [
        ["Espresso Martini", "Pornstar Martini", "Tokyo Mule"],
        ["Gin Basil Smash", "Hibiscus Gin Fizz", "Negroni Sbagliato"],
      ],
    },
  ],
};

console.log("Punto 1");
data.categorias.forEach(categorias => {
  console.log(categorias.tipo);
})
console.log("\n");



console.log("Punto 2 - Paises unicos:");
const paisesVistos = new Set();
data.categorias.forEach(categoria => {
  categoria.paises.forEach(pais => {
    if (!paisesVistos.has(pais.pais)) {
      paisesVistos.add(pais.pais);
      console.log(pais.pais);
    }
  });
});
console.log("\n");



console.log("Punto 3 - Marcas con más del 40% de alcohol:");
data.categorias.flatMap(categoria => 
  categoria.paises.flatMap(pais => 
    pais.marcas
      .filter(marca => marca.porcentajeAlcohol > 40)
      .map(marca => console.log(`${marca.nombre}: ${marca.porcentajeAlcohol}%`))
  )
);
console.log("\n");



console.log("Punto 4 - Marcas baratas disponibles online:");
data.categorias.flatMap(categoria => 
  categoria.paises.flatMap(pais => pais.marcas
      .filter(marca => marca.precioUSD < 30 && marca.disponibleOnline)
      .map(marca => console.log(`${marca.nombre}: $${marca.precioUSD}`))
  )
);
console.log("\n"); 



console.log("Punto 5 - Calculo de valoracion promedio:");
let suma = 0;
let contador = 0;
data.categorias.forEach(categoria => {
  categoria.paises.forEach(pais => {
    pais.marcas.forEach(marca => {
      suma += marca.valoracionPromedio;
      contador++;
    });
  });
});
const promedio = suma / contador;
console.log(`Promedio general de valoracion: ${promedio.toFixed(2)}`);
console.log("\n");

//to.Fixed es para ajustar el numero con 2 decimales en este caso

console.log("Punto 6 - Marcas mas antiguas por pais:");
data.categorias.flatMap(categoria => categoria.paises).forEach(pais => {
    const masAntigua = pais.marcas.reduce((vieja, actual) => 
      actual.fundacion < vieja.fundacion ? actual : vieja
    );
    console.log(`${pais.pais}: ${masAntigua.nombre} (${masAntigua.fundacion})`);
  });
console.log("\n");



console.log("Punto 7 - Marcas con stock bajo:");
data.categorias.flatMap(categoria => categoria.paises)
  .forEach(pais => {
    pais.marcas.filter(marca => marca.stockUnidades < 50)
      .forEach(marca => {
        console.log(`${marca.nombre} (${pais.pais}): ${marca.stockUnidades} unidades`);
      });
  });
console.log("\n");



console.log("Punto 8 - Estas son todas las marcas ordenadas por su Promedio: ");
const valPromedio = data.categorias
  .flatMap(c => c.paises.flatMap(p => p.marcas))
  .sort((a, b) => b.valoracionPromedio - a.valoracionPromedio).forEach(marca => {
    console.log(`${marca.nombre}: "Promedio: "${marca.valoracionPromedio.toFixed(1)}`);
  });
console.log("\n");



console.log("Punto 9 - Mostrar todos los tragos de la seccion: ");
data.combinacionesTragos.forEach(grupo => {
  grupo.categorias.forEach(subgrupo => {
    subgrupo.forEach(trago => {
      console.log(trago);
    });
  });
});
console.log("\n");



console.log("Punto 10 - Calcular el stock disponible por tipo de licor:");
data.categorias.forEach(categoria => {
  const totalStock = categoria.paises
    .flatMap(pais => pais.marcas)
    .reduce((suma, marca) => suma + marca.stockUnidades, 0); // el 0 es para que parta el contador desde 0

  console.log(`${categoria.tipo}: ${totalStock} unidades`);
});

