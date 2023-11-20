    const config = {
        desktopWidth: "1200px",
        mobileWidth: "100%",
        img: "https://img.visilabs.net/banner/uploaded_images/427_1463_20220429163855777.jpg",
        url: "https://www.saglammetal.com/tr/uye-kayit",
    };

    const Brands = {
        leftBar: 
        {
            "Adidas": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102014800.jpg",
                alt: "vl-Adidas",
                data: []
            },
            "Nike": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102138265.jpg",
                alt: "vl-Nike",
                data: []
            },
            "Lotto": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102055942.jpg",
                alt: "vl-Lotto",
                data: []
            },
            "Puma": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102155481.jpg", 
                alt: "vl-Puma",
                data: []
            },
            "Reebok": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102214135.jpg", 
                alt: "vl-Reebok",
                data: []
            },
        },
        rightBar:
        {
            "Vans": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102313569.jpg", 
                alt: "vl-Vans",
                data: []
            },
            "Converse": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102033613.jpg", 
                alt: "vl-Converse",
                data: []
            },
            "Lumberjack": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102110581.jpg", 
                alt: "vl-Lumberjack",
                data: []
            },
            "U.S. Polo Assn.": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102258045.jpg", 
                alt: "vl-U.S. Polo Assn.",
                data: []
            },
            "Skechers": {
                src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1304_20231020102234953.jpg", 
                alt: "vl-Skechers",
                data: []
            },
        }
    };


    FirePopup();
    function FirePopup() {
        if (!document.querySelector("#vl-product-suggest")) {
            var style = document.createElement("style");
            style.innerHTML = `
            
            #vl-product-suggest {
                display: flex;
                place-content: center;
                margin: 1em 0;
            }

            #vl-product-suggest .vl-container{
                width:${config.desktopWidth};
                max-width: 100%;
                display: grid;
                grid-template-columns: 1fr 6fr 1fr;
                align-items: center;
                background-color: #d9cfcf;
            }

            #vl-product-suggest .vl-bar-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1em;
                padding: 1em;
                background-color: black;
                border-radius: 5px;
            }
            
            #vl-product-suggest .vl-logo{
                border-radius: 1em;
                cursor: pointer;
            }

            #vl-product-suggest .vl-logo:hover{
                border: 1px solid gray;
            }

            #vl-product-suggest .vl-logo-selected{
                border: 3px solid gray !important;
            }

            #vl-product-suggest .vl-mid-bar{
                display: grid;
                grid-template-rows: 6fr 1fr;
                padding: 1.5em 2em;
                align-items: center;
                justify-content: center;
                gap: 1em;
            }

            #vl-product-suggest .vl-mid-bar .vl-mid-start{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1em;
            }

            #vl-product-suggest .vl-mid-bar h1{
                font-size: 3em;
                font-weight: 600;
            }

            #vl-product-suggest .vl-mid-bar h2{
                font-size: 2em;
                font-weight: 500;
            }

            #vl-product-suggest .vl-mid-bar .vl-start{
                color: white;
                background-color: #f44336;
                padding: 0.8em 3em;
                text-align: center;
                font-size: 1.5em;
                border-radius: 2em;
                cursor: pointer;
                border: solid 2px #d9cfcf;
                outline: 1px solid#f44336;
            }

            #vl-product-suggest .vl-product{
                overflow: hidden;
                position: relative;
                background-color: white;
                width: 500px;
                height: 500px;
                border-radius: 2em;
                box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            }

            #vl-product-suggest .vl-product-anchor{
                position: absolute;
                right: 1em;
                top: 1em;
                text-decoration: underline;
                color: black;
            }

            #vl-product-suggest .vl-product-img{
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 2em;
            }
            
            #vl-product-suggest .vl-arrows{
                text-align: center;
                user-select: none;
            }

            #vl-product-suggest .vl-arrow{
                padding: 1em;
                background-color: #f44336;
                border-radius: 50%;
                font-size: 1.3em;
                font-weight: 700;
                border: solid 2px #d9cfcf;
                outline: #f44336;
                color: white;
                cursor: pointer;
                transition: ease .3s opacity;
            }

            #vl-product-suggest .vl-arrow:hover{
                background-color: rgba(244, 67, 54, .8);
            }

            @media only screen and (max-width: 768px) {
                #vl-product-suggest .vl-container{
                    width:${config.mobileWidth};
                    height: 24em;
                }

                #vl-product-suggest .vl-product{
                    width: 13em;
                    height: 13em;
                    border-radius: 0.5em;
                }

                #vl-product-suggest .vl-bar-container{
                    gap: 0.4em;
                    padding: 0.4em;                
                }
                
                #vl-product-suggest .vl-left-bar{
                    margin-left: 0.2em;
                }

                #vl-product-suggest .vl-right-bar{
                    margin-right: 0.2em;
                }

                #vl-product-suggest .vl-logo{
                    border-radius: 0.2em;
                }
                #vl-product-suggest .vl-arrow{
                    font-size: .85em;
                }

                #vl-product-suggest .vl-mid-bar{
                    text-align: center;
                }

                #vl-product-suggest .vl-mid-bar .vl-start{
                    font-size: 1em;
                }
            }
            `;
            document.head.append(style);

            const suggest = document.createElement("div");
            suggest.id = "vl-product-suggest";
            suggest.innerHTML = `
            <div class="vl-container">
                <div class="vl-bar-container vl-left-bar"></div>
                <div class="vl-mid-bar">
                </div>
                <div class="vl-bar-container vl-right-bar"></div>
            </div>
            `;
            document.querySelectorAll('.home-page-wrapper > div')[1].after(suggest);
            const container = suggest.querySelector('.vl-container');
            var count = 0;
            var flag = true;
            var dataList = [];
            productProduce();
            leftBarComponent();
            rightBarComponent();
            midBarStart();

            function brandSelect() {
                const logos = container.querySelectorAll('.vl-logo');
                logos.forEach(logo => {
                    logo.addEventListener('click', () => {
                        const logoName = logo.alt.slice(3);
                        if(Brands.leftBar[logoName] != undefined){
                            productRender(Brands.leftBar[logoName].data);
                        }
                        else{
                        productRender(Brands.rightBar[logoName].data);
                        }
                    });
                });
            }

            function productRender(product) {
                count = 0;
                const productContainer = container.querySelector('.vl-product');
                productContainer.innerHTML = `
                    <a class="vl-product-anchor" href="${product[count].dest_url}" target="_blank">ÜRÜNÜ İNCELE ></a>
                    <img alt="vl-brand-image" src="${product[count].img}" class="vl-product-img">
                `;
                productContainer.querySelector('a').addEventListener('click', clickEvent);
                dataList = product;
                if(flag){
                    container.querySelector('.vl-left-arrow').addEventListener('click', () => {
                        count--;
                        arrowEvents();
                        productReRender();
                    });
        
                    container.querySelector('.vl-right-arrow').addEventListener('click', () => {
                        count++;
                        arrowEvents();
                        productReRender();
                    });

                    flag = false;
                }

                function arrowEvents() {
                    if(count < 0){
                        count = dataList.length-1;
                    }
                    else if(count == dataList.length){
                        count = 0;
                    }
                }

                function productReRender(){
                    productContainer.querySelector('a').setAttribute('href', dataList[count].dest_url);
                    productContainer.querySelector('img').setAttribute('src', dataList[count].img);
                }
            }

            function midBarComponent () {
                const target = container.querySelector('.vl-mid-bar');
                target.innerHTML = `
                    <div class="vl-product">
                    </div>
                    <div class="vl-arrows">
                        <span class="vl-arrow vl-left-arrow">&#10508;</span>
                        <span class="vl-arrow vl-right-arrow">&#10509;</span>
                    </div>
                `;
            }

            function leftBarComponent() {
                const target = container.querySelector('.vl-left-bar');
                const leftBar = Brands.leftBar;
                Object.keys(leftBar).forEach(bar => {
                    logoCreate(target, leftBar[bar].src, leftBar[bar].alt);
                });
            }

            function rightBarComponent() {
                const target = container.querySelector('.vl-right-bar');
                const rightBar = Brands.rightBar;
                Object.keys(rightBar).forEach(bar => {
                    logoCreate(target, rightBar[bar].src, rightBar[bar].alt);
                });
            }

            function logoCreate(target, src, alt){
                target.innerHTML += `
                    <div id="${alt}" class="vl-logo-bar">
                        <img class="vl-logo" src="${src}" alt="${alt}">
                    </div>
                `;
                const logos = container.querySelectorAll('.vl-logo');
                logos.forEach(logo => {
                    logo.addEventListener('click', () => {
                        logos.forEach(l => {
                            l.classList.remove('vl-logo-selected');
                        });
                        logo.classList.add('vl-logo-selected');
                    });
                });
            }

            function midBarStart(){
                const target = container.querySelector('.vl-mid-bar');
                target.innerHTML = `
                    <div class="vl-mid-start">
                        <h1>MARKANI KEŞFET</h1>
                        <h2>En Trend Ürünleri Keşfet</h2>
                        <span class="vl-start">BAŞLA</span>        
                    </div>
                `;
                target.querySelector('span').addEventListener('click', () => {
                    midBarComponent();
                    suggest.querySelector('#vl-Nike img').classList.add('vl-logo-selected');
                    productRender(Brands.leftBar["Nike"].data);
                    brandSelect();
                });
            }

            function productProduce() {
                Object.keys(Brands.leftBar).forEach(brand => {
                    Reco(brand, Brands.leftBar[brand].data);
                });
                Object.keys(Brands.rightBar).forEach(brand => {
                    Reco(brand, Brands.rightBar[brand].data);
                });
            }

            function Reco(brand) {
                var vl = new Visilabs();
                vl.AddParameter("json",true);
                vl.Suggest(24, null, null, CallBackMethod, null, [new VL_OfferFilter("brand", VL_OfferFilterType.Equals, brand)]);
                function CallBackMethod(products){
                    if(Brands.leftBar[brand] != undefined){
                        Brands.leftBar[brand].data = products;
                    }
                    else{
                        Brands.rightBar[brand].data = products;
                    }
                }
            }


            function clickEvent() {
            }
        }
    }
